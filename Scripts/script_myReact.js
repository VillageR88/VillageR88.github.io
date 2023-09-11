const fs =  require('fs');

fs.readdir('C:/Users/Karol/Documents/GitHub/Codewars/React', (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }
  console.log(files);
  files = files.filter(x => x.match(/\d+.+/g));
  fs.writeFile('Scripts/myReact.txt', files.join('\n'), (writeErr) => {
    if (writeErr) {
      console.error('Error writing to file:', writeErr);
      return;
    }
    console.log('List of files saved to myReact.txt');
  });
});