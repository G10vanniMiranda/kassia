/*
  Prebuild helper to ensure Git LFS files are present locally while
  gracefully skipping in Vercel or non-git environments.
*/
const { existsSync } = require('fs');
const { execSync } = require('child_process');

function log(msg) {
  console.log(`[prebuild-lfs] ${msg}`);
}

// Skip when running inside Vercel's remote builder (no .git available)
if (process.env.VERCEL) {
  log('Detected Vercel environment. Skipping Git LFS steps.');
  process.exit(0);
}

// Skip if not a Git working directory
if (!existsSync('.git')) {
  log('No .git directory found. Skipping Git LFS steps.');
  process.exit(0);
}

// Skip if git-lfs is not installed
try {
  execSync('git lfs version', { stdio: 'ignore' });
} catch {
  log('git-lfs not installed. Skipping Git LFS steps.');
  process.exit(0);
}

try {
  log('Ensuring Git LFS media files are present...');
  execSync('git lfs install', { stdio: 'inherit' });
  execSync('git lfs fetch --all', { stdio: 'inherit' });
  execSync('git lfs checkout', { stdio: 'inherit' });
  log('Git LFS checkout complete.');
} catch (err) {
  // Do not fail the build; just warn.
  log(`Git LFS step failed, continuing build: ${err && err.message ? err.message : err}`);
}
