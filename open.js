var fs = require('fs');

fs.open('newtxt2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});

// takes flag 'w' to create a new file