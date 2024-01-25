# eslint-watcher

`eslint-watcher` is a Node.js tool designed to automatically run ESLint on your JavaScript files whenever they are saved. This tool helps in maintaining code quality and consistency by ensuring that your code is always in compliance with ESLint rules.

## Features

- **Automatic Linting**: Automatically runs ESLint on specified file types when they are saved.
- **Customizable File Watching**: Configurable to watch specific directories or file types according to your project's needs.
- **Easy to Set Up**: Simple installation and setup process.

## Installation

To use `eslint-watcher` in your project, follow these steps:

1. Install the package globally:

   ```sh
   npm install -g eslint-watcher
   ```

   Or, you can install it as a dev dependency in your project:

   ```sh
   npm install --save-dev eslint-watcher
   ```

2. Run the installation script to set up the necessary configurations:

   ```sh
   npx eslint-watcher-install
   ```

## Usage

After installation, `eslint-watcher` will automatically start watching your files as specified in the configuration. If you need to customize the paths or files it watches, edit the generated configuration file in your project.

To manually start the watcher, use:

```sh
eslint-watcher
```

## Configuration

`eslint-watcher` can be configured to watch different file types or directories. Modify the `eslintWatcherConfig.json` file in your project's root directory to change the default settings.

Example configuration:

```json
{
  "watchPaths": ["src/*.js", "*.css", "*.html"]
}
```

## Contributing

Contributions to `eslint-watcher` are welcome! Please read our contributing guidelines and submit your pull requests or issues through the GitHub repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
