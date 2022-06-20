var fs = require('fs');

fs.appendFile('newtxt.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
// hello content text is appended to the newtxt.txt file