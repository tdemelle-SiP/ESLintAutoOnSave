//install.js

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function installDependencies() {
  console.log('Installing required packages...');
  execSync('npm install chokidar', { stdio: 'inherit' });
  // Add other necessary dependencies
}

function copyConfigFiles() {
  const configFilePaths = ['path/to/template/.eslintrc.json'];
  configFilePaths.forEach(filePath => {
    const destPath = path.join(process.cwd(), path.basename(filePath));
    fs.copyFileSync(filePath, destPath);
    console.log(`Copied ${filePath} to ${destPath}`);
  });
}

function createOrUpdateVSCodeTasks() {
    const vscodeDirectory = path.join(process.cwd(), '.vscode');
    if (!fs.existsSync(vscodeDirectory)) {
      fs.mkdirSync(vscodeDirectory);
    }
  
    const tasksConfig = {
      version: "2.0.0",
      tasks: [
        {
          label: "Watch for Changes",
          type: "shell",
          command: "npm run watch-node",
          isBackground: true,
          presentation: {
            reveal: "silent",
            panel: "dedicated"
          },
          problemMatcher: {
            owner: "custom",
            pattern: {
              regexp: ".*",
              file: 1,
              location: 2,
              message: 3
            },
            background: {
              activeOnStart: true,
              beginsPattern: ".*",
              endsPattern: ".*"
            }
          },
          runOptions: {
            runOn: "folderOpen"
          }
        }
      ]
    };
  
    fs.writeFileSync(path.join(vscodeDirectory, 'tasks.json'), JSON.stringify(tasksConfig, null, 2));
    console.log('VSCode tasks.json file has been set up.');
  }

  function setup() {
    installDependencies();
    copyConfigFiles();
    createOrUpdateVSCodeTasks();
    console.log('Setup complete.');
  }

setup();
