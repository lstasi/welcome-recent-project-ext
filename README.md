# Welcome Recent Projects

A Visual Studio Code extension that displays your recent projects in a beautiful welcome tab when you start VS Code.

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/lstasi/welcome-recent-project-ext/build)
![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/LeandroStasi.welcome-recent-projects)
![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/LeandroStasi.welcome-recent-projects)
![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/LeandroStasi.welcome-recent-projects)
![Visual Studio Marketplace Rating](https://img.shields.io/visual-studio-marketplace/r/LeandroStasi.welcome-recent-projects)
![Visual Studio Marketplace Rating (Stars)](https://img.shields.io/visual-studio-marketplace/stars/LeandroStasi.welcome-recent-projects)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/lstasi/welcome-recent-project-ext)
![GitHub repo size](https://img.shields.io/github/repo-size/lstasi/welcome-recent-project-ext)
![GitHub](https://img.shields.io/github/license/lstasi/welcome-recent-project-ext)

## Description

This extension opens when Visual Studio Code is started, displaying a list of recent projects.

The list is generated from a JSON file named `recentFolders.json` located in the user data dir directory.

If Visual Studio Code is started on a folder, this is added to the list of recent projects and the welcome tab is not shown.


## Screenshot

![Screenshot](https://raw.githubusercontent.com/lstasi/welcome-recent-project-ext/main/images/screenshot.png)

## Features

- ✨ **Automatic Welcome Tab**: Opens automatically when VS Code starts without a workspace
- 📋 **Recent Projects List**: Shows your most recently used projects
- 🔝 **Latest Projects Section**: Displays your 5 most recently accessed projects at the top
- 🔤 **Alphabetical Sorting**: All projects are also listed alphabetically for easy navigation
- 🪟 **Multiple Opening Options**: 
  - Click a project to open it in the current window
  - Use the ↗️ button to open in a new window
- 🗑️ **Project Management**: Remove projects from the list with the trash icon
- 💾 **Persistent Storage**: Projects are stored in your VS Code user data directory
- 🎨 **Beautiful UI**: Modern, responsive design with smooth hover effects

## Usage

### Automatic Activation
The extension activates automatically when you start VS Code without opening a folder. The welcome tab will appear showing your recent projects.

### Manual Activation
You can also manually show the Recent Projects view:
1. Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`)
2. Type "Show Recent Projects"
3. Press Enter

### Project Actions
- **Open in Current Window**: Click on the project name
- **Open in New Window**: Click the ↗️ button
- **Remove from List**: Click the 🗑️ button

## Installation

### From VS Code Marketplace
1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X or Cmd+Shift+X)
3. Search for "Welcome Recent Projects"
4. Click Install

### From Source
1. Clone this repository
2. Run `npm install`
3. Run `npm run compile`
4. Press F5 to open a new VS Code window with the extension loaded

## Configuration

The extension stores recent projects in a JSON file located in your VS Code user data directory:
- **File**: `<userData>/globalStorage/leandrostasi.welcome-recent-projects/recentFolders.json`
- **Format**: Array of project paths with metadata (name, folder, last used timestamp)

## Development

### Building
```bash
npm run compile
```

### Watching for Changes
```bash
npm run watch
```

### Debugging
Press F5 in VS Code to start debugging the extension in a new Extension Development Host window.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Roadmap

See [TODO.md](TODO.md) for planned features and improvements.



## License

This project is licensed under the MIT License - see the [LICENSE](https://raw.githubusercontent.com/lstasi/welcome-recent-project-ext/main/LICENSE) file for details.
