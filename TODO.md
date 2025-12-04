# TODO List

This document tracks planned features, improvements, and known issues for the Welcome Recent Projects extension.

## High Priority Features

### Project Management
- [ ] **Pin Projects**: Add ability to pin projects so they always appear at the top
  - Add a pin icon button next to each project
  - Pinned projects should have a visual indicator (star/pin icon)
  - Pinned projects section should appear above "Latest Projects"
  
- [ ] **Reorder Projects**: Allow manual reordering of projects
  - Add up/down arrow buttons for manual sorting
  - Drag and drop support for reordering
  - Save custom order in the storage

- [ ] **Bulk Actions**: Add options for managing multiple projects
  - "Clear All" button to remove all projects from the list
  - "Clear Old Projects" to remove projects not accessed in X days
  - Select multiple projects for batch deletion

### User Interface Improvements
- [ ] **Search/Filter**: Add a search box to filter projects by name or path
- [ ] **Project Icons**: Display workspace/folder icons if available
- [ ] **Recent Activity**: Show last accessed date/time for each project
- [ ] **Project Colors**: Allow users to assign colors to projects for visual organization
- [ ] **Compact View**: Add a toggle for compact/expanded view options

### Settings & Configuration
- [ ] **Configurable Storage**: Add settings for:
  - Maximum number of recent projects to store
  - Auto-cleanup threshold (remove projects after X days)
  - Default opening behavior (current window vs. new window)
  - Show/hide project paths
  - Number of projects in "Latest" section (currently hardcoded to 5)

- [ ] **Welcome Tab Behavior**: Add settings to:
  - Enable/disable automatic opening on startup
  - Show welcome tab only on first launch
  - Customize welcome message

### Data Management
- [ ] **Export/Import**: Allow users to export and import their project lists
- [ ] **Project Metadata**: Store additional information:
  - Project description/notes
  - Custom tags/categories
  - Project type (Git, npm, etc.)
  - Last git branch used

## Medium Priority Features

### Integration
- [ ] **Git Integration**: 
  - Show git status (clean, uncommitted changes, etc.)
  - Display current branch name
  - Show if project has unpushed commits

- [ ] **Workspace Detection**:
  - Detect and show workspace files (.code-workspace)
  - Support multi-root workspaces

- [ ] **File Explorer Integration**: Add a tree view in the Explorer sidebar showing recent projects

### User Experience
- [ ] **Keyboard Navigation**: Add keyboard shortcuts for navigating and opening projects
- [ ] **Quick Pick**: Add command palette integration for quick project selection
- [ ] **Project Preview**: Show a tooltip or panel with project details on hover
- [ ] **Opening Feedback**: Show a loading indicator or notification when opening projects

## Low Priority / Nice to Have

### Advanced Features
- [ ] **Project Statistics**: Track and display usage statistics
  - Number of times opened
  - Total time spent in project
  - Files modified count

- [ ] **Project Groups**: Allow organizing projects into categories/groups
- [ ] **Favorites**: Separate favorites list from recent projects
- [ ] **Project Templates**: Quick creation of new projects from templates
- [ ] **Remote Projects**: Better support for remote folders (SSH, Containers, WSL)

### Customization
- [ ] **Themes**: Support for custom color themes
- [ ] **Layout Options**: Different layout styles (grid, list, cards)
- [ ] **Custom Buttons**: Allow users to add custom actions per project

## Code Improvements

### Refactoring
- [ ] **Type Safety**: Add proper TypeScript interfaces for project data structures
- [ ] **Error Handling**: Improve error handling for file operations
- [ ] **Code Organization**: Split extension.ts into multiple modules:
  - `projectManager.ts` - Project CRUD operations
  - `webviewManager.ts` - Webview creation and management
  - `storageManager.ts` - File storage operations
  - `types.ts` - TypeScript interfaces and types

### Testing
- [ ] **Unit Tests**: Add unit tests for core functions
- [ ] **Integration Tests**: Test extension activation and commands
- [ ] **E2E Tests**: Test UI interactions in webview

### Documentation
- [ ] **Code Comments**: Add JSDoc comments to all functions
- [ ] **Architecture Documentation**: Create ARCHITECTURE.md explaining code structure
- [ ] **Contributing Guide**: Expand CONTRIBUTING.md with detailed guidelines

### Performance
- [ ] **Lazy Loading**: Optimize webview content loading for large project lists
- [ ] **Caching**: Cache webview content when possible
- [ ] **Async Operations**: Ensure all file operations are async

### Security
- [ ] **Input Sanitization**: Sanitize project paths in HTML to prevent XSS
- [ ] **Path Validation**: Validate file paths before operations
- [ ] **Permission Checks**: Verify read/write permissions before file operations

## Known Issues

- [ ] **Project Duplication**: Sometimes the same project can appear multiple times with different path formats (e.g., with/without trailing slashes, case differences on Windows)
- [ ] **Long Paths**: Very long project paths may overflow the UI on smaller screens
- [ ] **Special Characters**: Project names with special characters might not display correctly
- [ ] **Network Drives**: Projects on network drives may have issues on some systems

## Completed Features ✓

- ✓ Display recent projects in a webview
- ✓ Open projects in current or new window
- ✓ Delete projects from the list
- ✓ Store projects in global storage
- ✓ Show latest 5 projects separately
- ✓ Sort all projects alphabetically
- ✓ Automatic activation on startup
- ✓ Beautiful UI with hover effects
- ✓ Project path display
- ✓ Clean code (removed unused imports)

## Version Planning

### v0.2.0 (Next Release)
- Pin projects feature
- Search/filter functionality
- Configurable settings

### v0.3.0
- Project statistics
- Git integration
- Export/import functionality

### v1.0.0
- All high priority features completed
- Comprehensive test coverage
- Full documentation

---

**Note**: This TODO list is a living document and will be updated as features are implemented or priorities change.

Last Updated: 2025-12-04
