//Create a new file using the appendFile() method:
var fs = require('fs');

fs.appendFile('mynewfile.txt','hello content!', function(err){
  if(err) throw err;
  console.log('Saved!!!');
});
