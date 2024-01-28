//scripts/eslint-watcher.js

const chokidar = require('chokidar');
const { exec } = require('child_process');
const path = require('path');

// Define paths to watch
const watchPaths = ['src/*.js', 'src/*.css', 'src/*.html', 'scripts/*.js', 'scripts/*css', 'scripts/*html', '*.css', '*.html', '*.js'];

// Initialize watcher
const watcher = chokidar.watch(watchPaths, { ignored: /(^|[\/\\])\../, persistent: true });

let isESLintRunning = false;
let animationFrame = 0;
let animationInterval;

const animationFrames = ['-\\|/-\\|/-\\|/', '\\|/-\\|/-\\|/-', '|/-\\|/-\\|/-\\', '/-\\|/-\\|/-\\|'];

function getTimestamp() {
  return new Date().toLocaleTimeString();
}

function logWithTimestamp(message) {
  process.stdout.write(`[${getTimestamp()}] ${message}\n`);
}

function startAnimation() {
  if (animationInterval) return; // Prevent multiple intervals
  animationInterval = setInterval(() => {
    process.stdout.write('\r' + animationFrames[animationFrame]);
    animationFrame = (animationFrame + 1) % animationFrames.length;
  }, 200);
}

function stopAnimation() {
  clearInterval(animationInterval);
  animationInterval = null;
  process.stdout.write('\r'); // Clear the animation
}

// Run ESLint and display results
function runESLint() {
  if (isESLintRunning) return; // Prevent concurrent ESLint runs

  stopAnimation(); // Stop animation when ESLint starts
  isESLintRunning = true;
  logWithTimestamp('ESLint check started...');

  exec('npx eslint .', (err, stdout, stderr) => {
    logWithTimestamp('ESLint check completed.');

    if (stdout) {
      console.log(`[${getTimestamp()}] ESLint errors/warnings detected:\n`);
      console.log(stdout);
    } else if (err) {
      console.log(`[${getTimestamp()}] Error running ESLint:\n`);
      console.log(stderr);
    } else {
      logWithTimestamp('No ESLint errors or warnings detected.');
    }

    isESLintRunning = false;
    startAnimation(); // Start animation when ESLint completes
  });
}

// Event listeners
watcher
  .on('add', path => {
    logWithTimestamp(`File ${path} has been added`);
    runESLint();
  })
  .on('change', path => {
    logWithTimestamp(`File ${path} has been changed`);
    runESLint();
  })
  .on('unlink', path => {
    logWithTimestamp(`File ${path} has been removed`);
    runESLint();
  });
