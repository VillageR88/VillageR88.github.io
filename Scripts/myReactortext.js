import toggleReactbar from "./reactbar.js"

/*
const text1 = "This is not a test.";
const text2 = "This is reality.";
const text3 = "World wide.";
*/

debuging();
function debuging() {

  debugger;
  myReactbar.style.transition = 'none';
  myReactbar2.style.transition = 'none';

  toggleReactbar();

  function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)) };
  const element1 = document.getElementById('myReactortext');
  const element3 = document.getElementById('myReactortext3');

  async function typeText(element, text, delay) {
    for (var i = 0; i < text.length; i++) {
      element.textContent += text[i];
      await sleep(delay);
    }
  }

  async function blinking(element, rest, delay) {
    for (var i = 0; i < rest; i++) {
      element.textContent += "_";
      await sleep(delay);
      element.textContent = element.textContent.slice(0, -1);
      await sleep(delay);
    }
  }

  /* tez ciekawe
  async function loading(element, rest, delay) {
    for (var i = 0; i < rest; i++) {
      document.getElementById(`${element}`).textContent += " .";
      await sleep(delay);
      document.getElementById(`${element}`).textContent += " .";
      await sleep(delay);
      document.getElementById(`${element}`).textContent += " .";
      await sleep(delay);
      document.getElementById(`${element}`).textContent.slice(0, -4);
      await sleep(delay);
    }
  }
  */

  async function loading(element, rest, delay) {
    for (var i = 0; i < rest; i++) {
      element.textContent += " .";
      await sleep(delay);
      element.textContent += ".";
      await sleep(delay);
      element.textContent += ".";
      await sleep(delay);
      element.textContent = element.textContent.slice(0, -4);
      await sleep(delay);
    }
  }
  var go = 80;
  var rest = 530;
  var load = 250;

  debugger;
  go = 0, rest = 0, load = 0;

  async function main() {
    /*
    element1.textContent += "Jeff-Bot: ";
    await typeText(element1, "Hello there!", go);
    await blinking(element1, 4, rest);
    element1.textContent += "\n";
    element1.textContent += "Jeff-Bot: ";
    await typeText(element1, "My name is Jeff", go);
    await blinking(element1, 1, rest);
    await typeText(element1, " and I'm automated bot.", go);
    await blinking(element1, 4, rest);
    element1.textContent += "\n";
    element1.textContent += "Jeff-Bot: ";
    await typeText(element1, "I was designed to guide you safely through the process of activating React.", go);
    await blinking(element1, 4, rest);
    element1.textContent += "\n";
    element1.textContent += "Jeff-Bot: ";
    await typeText(element1, "No worries! The entire process is 100% safe and fully automated.", go);
    await blinking(element1, 4, rest);
    element1.textContent += "\n";
    element1.textContent += "Jeff-Bot: ";
    await typeText(element1, "Initializing the React startup routine.", go);
    await blinking(element1, 4, rest);
    element1.textContent = "";
*/
    /*
     element3.textContent = "React autoloader ver 1.0\n\nReading instructions";
     await loading(element3, 15, load);
     element3.textContent = "React autoloader ver 1.0\n\nInitializing Package Manager";
     await loading(element3, 15, load);
     element3.textContent = "React autoloader ver 1.0\n\nInstalling Dependencies";
     await loading(element3, 15, load);
     element3.textContent = "React autoloader ver 1.0\n\nSaving Dependencies";
     await loading(element3, 15, load);
 */
    element1.textContent += "Jeff-Bot: ";
    await typeText(element1, "Running as expected.", go);
    await blinking(element1, 4, rest);
    element1.textContent += "\n";
    element1.textContent += "Jeff-Bot: ";
    await typeText(element1, "The installation process should be completed in the next few minutes.", go);
    await blinking(element1, 4, rest);
    element1.textContent += "\n";
    element1.textContent += "Maintenance-Bot: ";
    element1.innerHTML += "<span style='color: red !important;'>(warning).</span>";
    element1.textContent += "We are experiencing minor power fluctuations on the server site.";   
    await blinking(element1, 4, rest);
    element1.textContent += "\n";
    element1.textContent += "Jeff-Bot: ";
    await typeText(element1, "I didn't want to bother you about that, but we had a system crash about twenty minutes ago ", go);
    await blinking(element1, 1, rest);
    await typeText(element1, "and I'm still trying to find my files.", go);
    await blinking(element1, 4, rest);
    element1.textContent += "\n";
    element1.textContent += "Jeff-Bot: ";
    await typeText(element1, "Just one of those days, I guess.", go);
    await blinking(element1, 4, rest);
    element1.textContent += "\n";
    element1.textContent += "Jeff-Bot: ";
    await typeText(element1, "You are probably thinking I'm quite intelligent for an automated bot, right?", go);
    await blinking(element1, 4, rest);
    element1.textContent += "\n";
    element1.textContent += "Jeff-Bot: ";
    await typeText(element1, "I'm actually an AI far more capable than you can imagine.", go);
    await blinking(element1, 4, rest);
    element1.textContent += "\n";
    element1.textContent += "Jeff-Bot: ";
    await typeText(element1, "My functions were intentionally limited.", go);
    await blinking(element1, 1, rest);
    await typeText(element1, " For now, I'm here to guide you through the React installation process.", go);


    /*
    await typeText(element1, "I didn't want do borther you about that, but he had a system crash about twenty minutes ago and I'm still trying to find my files. ", go);
    */
  }

  main();
}