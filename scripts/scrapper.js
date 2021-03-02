const fs = require('fs');
const path = require('path');

const outputDir = 'back-up';
const outputPath = (outputFileName) => `${outputDir}/${outputFileName}`;
const workspacePath = './script-workspace/';
const inboxPath = `${workspacePath}messages/inbox/`;
const archivedThreadsPath = `${workspacePath}messages/archived_threads/`;

module.exports = { extractFromMessages };

extractFromMessages();

// ---------- Step 1 ---------- //
// Browse the current directory to find folders starting with 'archive-*'
// Then for each folder, read the list of all threads (archived or inbox)
//
function extractFromMessages() {
  const threads = fs.readdirSync(inboxPath);
  const archived_threads = fs.readdirSync(archivedThreadsPath);

  threads.forEach((thread) => {
    if (thread === '.DS_Store') return;
    extractThread(`${inboxPath}${thread}`);
  });

  archived_threads.forEach((thread) => {
    if (thread === '.DS_Store') return;
    extractThread(`${archivedThreadsPath}${thread}`);
  });
}

// ---------- Step 2 ---------- //
// For each thread, the messages can be split in multiple
// json files, we need to find all of them
//
function extractThread(threadPath) {
  // There is usually not more than 5 message files
  for (let i = 0; i < 20; i++) {
    const messageFileName = `message_${i}.json`;
    if (fs.existsSync(`${threadPath}/${messageFileName}`)) {
      extractThreadForFile(threadPath, messageFileName);
    }
  }
}

// ---------- Step 3 ---------- //
// For eache message file we scan every message to see if
// they contain the "photos" or "videos" attribute
//
function extractThreadForFile(threadPath, messageFile, archiveFolder) {
  const fileContent = fs.readFileSync(`${threadPath}/${messageFile}`).toString();
  const jsonConv = JSON.parse(fileContent);

  const hasPhotos = (message) => message['photos'] && message['photos'].length;
  const hasVideos = (message) => message['videos'] && message['videos'].length;

  jsonConv['messages']
    .filter((message) => hasPhotos(message) || hasVideos(message))
    .forEach((message) => {
      if (hasPhotos(message)) extractForMessage(message['photos'], threadPath, archiveFolder);
      if (hasVideos(message)) extractForMessage(message['videos'], threadPath, archiveFolder);
    })
}

// ---------- Step 4 ---------- //
// For each photo or video we extract :
// - it's uri -> the path use to find the original file
// - it's creation_timestamp -> the date and time the file was sent
function extractForMessage(items, threadPath) {

  if (!fs.existsSync(`./${outputDir}`)) {
    fs.mkdirSync(`./${outputDir}`);
  }

  items.forEach((item) => {
    const fileName = generateFileName(item['creation_timestamp']);
    const extension = path.extname(item.uri);

    const outputFileName = `${fileName}${extension}`;

    if (item.uri.startsWith('http'))
      return;

    if (fs.existsSync(outputPath(outputFileName)))
      return;

    console.log(`copy for ${threadPath} :: ${outputFileName}`);

    fs.copyFileSync(`${workspacePath}/${item.uri}`, outputPath(outputFileName));
  });
}

function generateFileName(timeStamp) {
  const name = timeStampToFileName(timeStamp);
  return `${name}_${generateUID()}`;
}

/**
 * Sometimes multiple images are sent at the same time
 * We use a pseudo-random UID to defferciate them
 *
 * @return {string} A 6-long string
 */
function generateUID() {
  let result = '';
  const characters = '0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

/**
 * Change an integer timestamp to a date and time format
 * @param timestamp Time when the image or video was sent
 * @return {string} Formatted date, ex : 20200223_094632 for 23/02/2020 - 09'46"32
 */
function timeStampToFileName(timestamp) {
  const date = new Date(timestamp * 1000);
  const year = date.getFullYear();
  const month = (`0${date.getMonth() + 1}`).substr(-2);
  const day = (`0${date.getDate()}`).substr(-2);

  const hours = (`0${date.getHours()}`).substr(-2);
  const minutes = (`0${date.getMinutes()}`).substr(-2);
  const seconds = (`0${date.getSeconds()}`).substr(-2);

  return `${year}${month}${day}_${hours}${minutes}${seconds}`;
}
