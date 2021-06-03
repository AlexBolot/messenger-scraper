const fs = require('fs');
const child_process = require("child_process");

const workspacePath = './script-workspace';

module.exports = { mergeMessages };

function mergeMessages() {

  const files = fs.readdirSync(workspacePath);

  for (const file of files) {
    if (file === '.DS_Store') continue;

    console.log(`Synchronisation de ${workspacePath}/${file}`);

    const rsyncCommand = `rsync -av --ignore-existing ${workspacePath}/${file}/messages ${workspacePath}`;
    const secondCommand = 'pv --width 60 > /dev/null';

    child_process.execSync(`${rsyncCommand} | ${secondCommand}`, { stdio: 'inherit' });
  }
}
