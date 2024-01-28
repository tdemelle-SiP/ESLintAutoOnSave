# eslint-watcher

`eslint-watcher` is a Node.js utility designed to enhance your JavaScript and TypeScript development workflow in Visual Studio Code. It automatically monitors your files and applies ESLint in real-time, ensuring code quality and consistency.

## Features

- **Automatic Linting**: Monitors JavaScript and TypeScript files in real-time for ESLint rule violations.
- **VS Code Integration**: Seamlessly integrates with Visual Studio Code, enhancing your coding experience without disrupting your workflow.
- **Easy Setup**: A simple setup script configures `eslint-watcher` in your project with minimal effort.
- **Customizable Monitoring**: Configure which files or directories to monitor according to your project's needs.
- **Respects Gitignore**: Automatically excludes files listed in your `.gitignore`, focusing linting on relevant files.
- **Supports JavaScript and TypeScript**: Works with both JavaScript and TypeScript projects, ensuring broad compatibility.

## Installation

1. Install `eslint-watcher` via npm:

    ```sh
    npm install eslint-watcher
    ```

2. Run the setup script to configure `eslint-watcher` in your project:

    ```sh
    npm run setup
    ```

This script will install ESLint (if not already installed), set up a default ESLint configuration, and create necessary Visual Studio Code tasks.

## Usage

After installation and setup, `eslint-watcher` will automatically start whenever you open your project in Visual Studio Code. It will monitor specified files and directories, applying ESLint checks in real-time.

## Custom Configuration

You can customize the ESLint rules by editing the `.eslintrc.js` file in your project root. Modify this file to tailor the linting rules to your project's specific needs.

## Contributing

Contributions to `eslint-watcher` are welcome! If you have suggestions or improvements, feel free to fork the repository, make your changes, and submit a pull request. Your input helps make `eslint-watcher` better for everyone.

## License

`eslint-watcher` is open-source software licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Questions and Feedback

For questions, feedback, or issues, please visit the [GitHub repository](https://github.com/tdemelle-SiP/eslint-watcher).

Happy coding with `eslint-watcher`!
