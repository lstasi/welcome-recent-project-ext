import * as os from 'os';
import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';


let outputChannel: vscode.OutputChannel;

export function activate(context: vscode.ExtensionContext) {
    outputChannel = vscode.window.createOutputChannel('Recent Projects');
    context.subscriptions.push(outputChannel);

    let disposable = vscode.commands.registerCommand('extension.showRecentProjects', () => {
        outputChannel.appendLine("Command 'showRecentProjects' executed.");
        const panel = vscode.window.createWebviewPanel(
            'recentProjects',
            'Recent Projects',
            vscode.ViewColumn.One,
            {
                enableScripts: true // Enable JavaScript in the webview
            }
        );
        const projects = getRecentProjects(context);
        const content = getWebviewContent(projects);
        panel.webview.html = content;

        // Handle messages from the webview
        panel.webview.onDidReceiveMessage(
            message => {
                switch (message.command) {
                    case 'openProject':
                        openProject(message.project);
                        return;
                }
            },
            undefined,
            context.subscriptions
        );
    });
    context.subscriptions.push(disposable);

    // If we have open a workspace store it in the recent projects
    if (vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders.length > 0) {
        const workspaceFolder = vscode.workspace.workspaceFolders[0];
        outputChannel.appendLine(`Adding workspace to recent projects: ${workspaceFolder.uri.fsPath}`);
        
        // Retrieve existing recent projects hash list from global state
        let recentProjects: Map<string, {}> = getRecentProjects(context);
        
        // Add the current workspace to the recent projects with the uri as key
        recentProjects.set(workspaceFolder.uri.fsPath, {});
        
        // Update the global state with the new list of recent projects
        setRecentProjects(recentProjects);
    } else {
        // Execute the command when the extension is activated
        vscode.commands.executeCommand('extension.showRecentProjects');
    }

}

function openProject(project: string) {
    outputChannel.appendLine(`Opening project: ${project}`);
    vscode.commands.executeCommand('vscode.openFolder', vscode.Uri.file(project), true);
}

function getRecentProjects(context: vscode.ExtensionContext): Map<string, {}> {
    outputChannel.appendLine("Fetching recent projects...");
    const homeDir = os.homedir();
    const vscodeDir = path.join(homeDir, '.vscode');
    const recentFoldersFile = path.join(vscodeDir, 'recentFolders.json');

    if (fs.existsSync(recentFoldersFile)) {
        const data = fs.readFileSync(recentFoldersFile, 'utf8');
        const recentProjectsArray: [string, {}][] = JSON.parse(data);
        outputChannel.appendLine(`Recent projects: ${recentProjectsArray.map(([key, _]) => key).join(', ')}`);
        return new Map(recentProjectsArray);
    } else {
        return new Map();
    }
}
function setRecentProjects(recentProjects: Map<string, {}>) {
    outputChannel.appendLine("Setting recent projects...");
    const homeDir = os.homedir();
    const vscodeDir = path.join(homeDir, '.vscode');
    const recentFoldersFile = path.join(vscodeDir, 'recentFolders.json');

    // Ensure the .vscode directory exists
    if (!fs.existsSync(vscodeDir)) {
        fs.mkdirSync(vscodeDir);
    }

    // Convert the Map to an array of key-value pairs
    const recentProjectsArray = Array.from(recentProjects.entries());

    // Write the array to a JSON file
    fs.writeFileSync(recentFoldersFile, JSON.stringify(recentProjectsArray, null, 2));

    outputChannel.appendLine(`Recent projects saved to ${recentFoldersFile}`);
}

function getWebviewContent(projects: Map<string, {}>): string {
    outputChannel.appendLine("Generating webview content...");
    let content = `
        <html>
        <head>
            <style>
                .button-container {
                    border: 1px solid #ccc;
                    padding: 10px;
                    margin: 10px;
                }
                .button-link {
                    width: 150px; /* Set the width of the button */
                    height: 150px; /* Set the height of the button */
                    display: flex;
                    align-items: flex-start; /* Align items at the start vertically */
                    justify-content: flex-start; /* Align items at the start horizontally */
                    text-align: left; /* Align text to the left */
                    padding: 10px; /* Add padding for better text alignment */
                    background-color: transparent;
                    border: 1px solid #ccc;
                    color: #ccc; /* Set the font color to match the border */
                    cursor: pointer;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: pre-wrap; /* Allow multi-line text */
                    word-wrap: break-word; /* Break words if necessary */
                }
                .button-link:hover {
                    background-color: rgba(0, 0, 0, 0.1); /* Optional: Add a hover effect */
                }
            </style>
        </head>
        <body>
            <h1>Recent Projects</h1>
            <div style="display: flex; flex-wrap: wrap;">
                ${Array.from(projects.keys()).map(key => {
                    const projectPath = key.startsWith('~') ? key.slice(1) : key;
                    const projectParts = projectPath.split('/').map((part: string) => part.trim());
                    const formattedProject = projectParts.join('<br>');
                    return `
                        <div class="button-container">
                            <button class="button-link" title="${key}" aria-label="${key}" onclick="openProject('${key}')">${formattedProject}</button>
                        </div>
                    `;
                }).join('')}
            </div>
            <script>
                const vscode = acquireVsCodeApi();
                function openProject(project) {
                    vscode.postMessage({
                        command: 'openProject',
                        project: project
                    });
                }
            </script>
        </body>
        </html>
    `;
    outputChannel.appendLine("Webview content generated.");
    return content;
}

export function deactivate() {}