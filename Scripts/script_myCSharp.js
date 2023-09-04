const fs =  require('fs');

fs.readdir('C:/Users/Karol/Documents/GitHub/Codewars/C Sharp', (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }
  console.log(files);
  files = files.filter(x => x.match(/\d+.+/g)).map(x => x + ".UnitTest1.cs");
  fs.writeFile('Scripts/myCSharp.txt', files.join('\n'), (writeErr) => {
    if (writeErr) {
      console.error('Error writing to file:', writeErr);
      return;
    }
    console.log('List of files saved to myCSharp.txt');
  });
});