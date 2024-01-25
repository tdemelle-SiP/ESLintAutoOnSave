
# eslint-watcher

`eslint-watcher` is an advanced Node.js tool designed to enhance your JavaScript coding experience in Visual Studio Code. This utility automatically applies ESLint to your JavaScript files as you edit them, ensuring your code adheres to the best practices and style guidelines.

## Features

- **Real-time Linting**: Actively monitors and lints your JavaScript files, providing immediate feedback on ESLint rule violations.
- **Integrated with Visual Studio Code**: Specifically optimized for VSCode, `eslint-watcher` integrates smoothly into your development workflow.
- **Automated Task Setup**: Comes with a post-install script that automatically sets up a VSCode task, enabling `eslint-watcher` to start as soon as you open your project folder.
- **Customizable File Monitoring**: Tailor `eslint-watcher` to your project's needs by specifying which files or directories to watch.
- **Respects Gitignore Settings**: Automatically ignores files specified in your `.gitignore`, focusing only on the files you are actively developing.
- **Easy Installation**: Designed for hassle-free setup, making it accessible for developers of all skill levels.

## Installation

Install `eslint-watcher` with npm:

```sh
npm install eslint-watcher
```

Post-installation, `eslint-watcher` sets up a Visual Studio Code task to run automatically. This makes your linting process seamless and integrated.

## Usage

Once installed, simply open your project in Visual Studio Code. The watcher will start in the background, monitoring your JavaScript files according to the specified configuration.

## Configuration

Customize `eslint-watcher` by modifying the `eslintWatcherConfig.json` file in your project's root directory. Define the paths and file types you want the watcher to monitor.

Example configuration:

```json
{
  "watchPaths": ["src/**/*.js", "tests/**/*.js"]
}
```

This configuration ensures `eslint-watcher` monitors all JavaScript files in your `src` and `tests` directories.

## Contributing

Your contributions can help make `eslint-watcher` even better. If you have suggestions or improvements, feel free to fork the repository, make your changes, and submit a pull request. We appreciate your input!

## License

`eslint-watcher` is open-source software licensed under the MIT License. For more information, please refer to the [LICENSE](LICENSE) file.

## Contact

If you have any questions or feedback about `eslint-watcher`, don't hesitate to reach out via our GitHub repository.

Happy coding with `eslint-watcher`!
