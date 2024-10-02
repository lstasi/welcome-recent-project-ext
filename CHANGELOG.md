# Changelog

## [0.1.3]
* Upgraded getWebviewContent function to accept vscode.ExtensionContext as an argument for enhanced flexibility.
* Introduced a CSS styles file (styles.css) for consistent visual styling across the webview content.
* Updated getWebviewContent function to use the new CSS styles file, improving overall appearance.
* Enhanced recent projects display with improved button design and hover effects.
* Added functionality to open project links in VS Code using acquireVsCodeApi and postMessage methods.
* Improved code organization by splitting functionality into separate files (styles.css and recentProjects.html).
* Removed redundant code and updated comments for better readability.

## [0.1.2]
- Update categories, tags, keyword and description in package.json

## [0.1.1]
- Update README.md

## [0.1.0]

- Update package.json
- Update README.md
- Update CHANGELOG.md

## [0.0.1] - 2023-09-15

- Initial release of the extension.
- Added .gitignore, dependabot.yml, launch.json, package.json, src/extension.ts, and tsconfig.json.

. **getRecentProjects()**:
   - This function reads from a JSON file named `recentFolders.json` located in the `.vscode` directory.
   - If the file exists, it parses its content into an array of key-value pairs using `JSON.parse()`.
   - The function then returns a Map object populated with these key-value pairs.

2. **setRecentProjects(recentProjects: Map<string, {}>)**:
   - This function writes recent projects to a JSON file named `recentFolders.json` located in the `.vscode` directory.
   - It converts the input Map into an array of [key, value] pairs using Array.from() and then stringifies this array with `JSON.stringify()` before writing it to the file.

3. **getWebviewContent(projects: Map<string, {}>): string**:
   - This function generates HTML content for a webview that will display recent projects.
   - It iterates over each project in the input Map and creates a button for each one, with text representing the project path.
   - When clicked, these buttons send a message to VSCode using `acquireVsCodeApi()` and `postMessage()`, instructing it to open a specified project.

4. **deactivate**:
   - This function is currently empty but might be used in the future to handle any cleanup or shutdown logic required by your extension.

This code snippet:

- Using the built-in `fs` module for file operations and `os` module for accessing environment variables.
- Utilizing Webviews, which are customizable UI elements within an extension's panel view.
- Interacting with the VSCode API using `acquireVsCodeApi()` to send messages between your extension and VSCode.
