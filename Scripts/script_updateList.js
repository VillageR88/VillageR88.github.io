if (window.location.protocol === 'file:') {
    // This script will only run when the site is loaded locally
require('./script_myTypeScript.js');
require('./script_myJavaScript.js');
require('./script_myPython.js');
require('./script_myCSharp.js');
require('./script_myReact.js');
alert("This script is running locally!");
}