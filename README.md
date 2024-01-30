# eslint-watcher

`eslint-watcher` is a Node.js utility designed to enhance your JavaScript and TypeScript development workflow in Visual Studio Code. It automatically monitors your files and applies ESLint in real-time, ensuring code quality and consistency.

## Features

- **Automatic Linting**: Monitors JavaScript and TypeScript files in real-time for ESLint rule violations.
- **Comprehensive Coverage**: Provides linting coverage for a wide range of code, including but not limited to:
  - Vanilla JavaScript and TypeScript
  - React applications
- **VS Code Integration**: Seamlessly integrates with Visual Studio Code, enhancing your coding experience without disrupting your workflow.
- **Easy Setup**: A simple setup script configures `eslint-watcher` in your project with minimal effort.
- **Customizable Monitoring**: Configure which files or directories to monitor according to your project's needs.
- **Customizable Rules**: Tailor the linting rules to your project's specific needs by editing the `.eslintrc.cjs` file in your project root.

## Installation

1. Install `eslint-watcher` via npm:

    ```sh
    npm install eslint-watcher
    ```

2. After installing the package with `npm install eslint-watcher`, run the setup script with the following command:

    ```sh
    node node_modules/eslint-watcher/scripts/setup.js
    ```
    
This script will install ESLint (if not already installed), set up a default ESLint configuration, and create necessary Visual Studio Code tasks.

## Usage

After installation and setup, `eslint-watcher` will automatically start whenever you open your project in Visual Studio Code. It will monitor specified files and directories, applying ESLint checks in real-time.

## Dependencies and Coverage

`eslint-watcher` uses several dependencies to provide comprehensive linting coverage:

- **ESLint**: The core ESLint library, which provides the linting functionality.
- **TypeScript ESLint**: With `@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser`, ESLint can lint TypeScript files in addition to JavaScript files.
- **React ESLint**: `eslint-config-react` and `eslint-config-react-app` provide a set of ESLint rules tailored for React applications, and `eslint-plugin-react` provides React-specific linting rules.
- **Chokidar**: A file watcher used by `eslint-watcher` to monitor changes in your files in real-time.

These dependencies ensure that `eslint-watcher` can lint a wide range of JavaScript and TypeScript code, including React applications. If your project uses other libraries or frameworks, you may need to install additional ESLint plugins or configurations to ensure complete coverage.

## Custom Configuration

You can customize the ESLint rules by editing the `.eslintrc.cjs` file in your project root. Modify this file to tailor the linting rules to your project's specific needs.

## Troubleshooting

If you encounter any issues during the setup process, please ensure that you have the latest version of Node.js and npm installed. If the problem persists, try running the setup script again or check the console for any error messages. For further assistance, please visit the [GitHub repository](https://github.com/tdemelle-SiP/eslint-watcher) and submit an issue.

## Contributing

Contributions to `eslint-watcher` are welcome! If you have suggestions or improvements, feel free to fork the repository, make your changes, and submit a pull request. Your input helps make `eslint-watcher` better for everyone.

## License

`eslint-watcher` is open-source software licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Questions and Feedback

For questions, feedback, or issues, please visit the [GitHub repository](https://github.com/tdemelle-SiP/eslint-watcher).

Happy coding with `eslint-watcher`!