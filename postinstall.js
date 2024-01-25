
const fs = require('fs');
const path = require('path');
const os = require('os');

// Function to create .vscode/tasks.json if it doesn't exist
function createVSCodeTasks() {
  const vscodeDirectoryPath = path.join(process.cwd(), '.vscode');
  const tasksFilePath = path.join(vscodeDirectoryPath, 'tasks.json');

  if (!fs.existsSync(vscodeDirectoryPath)) {
    fs.mkdirSync(vscodeDirectoryPath);
  }

  const tasksConfig = {
    version: '2.0.0',
    tasks: [
      {
        label: 'Start ESLint Watcher',
        type: 'shell',
        command: 'eslint-watcher',
        isBackground: true,
        problemMatcher: '$eslint-stylish',
        runOptions: {
          runOn: 'folderOpen',
        },
      },
    ],
  };

  if (!fs.existsSync(tasksFilePath)) {
    fs.writeFileSync(tasksFilePath, JSON.stringify(tasksConfig, null, 2));
    console.log('VSCode tasks.json has been created.');
  } else {
    console.log('VSCode tasks.json already exists.');
  }
}

// Main function to run all setup steps
function main() {
  createVSCodeTasks();
  console.log('Please restart your IDE to start eslint-watcher.');
}

main();
