const fs =  require('fs');

fs.readdir('C:/Users/Karol/Documents/GitHub/Codewars/TypeScript', (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }
  fs.writeFile('Scripts/myTypeScript.txt', files.join('\n'), (writeErr) => {
    if (writeErr) {
      console.error('Error writing to file:', writeErr);
      return;
    }
    console.log('List of files saved to myTypeScript.txt');
  });
});