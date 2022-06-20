const fs = require('fs/promises');

async function example() {
  const fileName = '/home/hp/file_sys/mytxt.txt';
  try {
    const data = await fs.readFile(fileName, 'utf8'); // event 1
    console.log(data);
    const content = 'Some content!';
    await fs.writeFile(fileName, content); // event 2, over wrote the txt file
    console.log('Wrote some content!');
    const newData = await fs.readFile(fileName, 'utf8'); // event 3
    console.log(newData);
  } catch (err) {
    console.log(err);
  }
}
example();