const fs = require('fs');

fs.readdir('C:/Users/Karol/Documents/GitHub/Codewars/JavaScript', (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  // Zapisz listę plików do pliku filesList.txt
  fs.writeFile('myJavaScript.txt', files.join('\n'), (writeErr) => {
    if (writeErr) {
      console.error('Error writing to file:', writeErr);
      return;
    }
    console.log('List of files saved to myJavaScript.txt');
  });
});