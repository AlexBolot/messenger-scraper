const fs = require('fs');
const child_process = require('child_process');

const zipPath = './place-zip-here';
const workspacePath = './script-workspace';

module.exports = { unzipAll };

function unzipAll() {
  if (!fs.existsSync(workspacePath)) {
    fs.mkdirSync(workspacePath);
  }

  console.log('Extracting .zip archives may take a while, please wait...')

  const files = fs.readdirSync(zipPath)
                  .filter((file) => file.endsWith('.zip'));

  for (let i = 0; i < files.length; i++) {
    const unzipCommand = `unzip "${zipPath}/${files[i]}" "messages/*" -d ${workspacePath}/archive-${i}/`;
    const progressBarCommand = 'pv --width 60 > /dev/null';

    console.log(`Start unzipping ${files[i]}`);
    child_process.execSync(`${unzipCommand} | ${progressBarCommand}`, { stdio: 'inherit' });
  }
}
