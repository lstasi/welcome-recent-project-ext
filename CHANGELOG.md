# Changelog

## [Unreleased]

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
