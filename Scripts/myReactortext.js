export function runReact() {

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

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

  async function loading(element, rest, delay) {
    for (var i = 0; i < rest; i++) {
      element.textContent += " .";
      await sleep(delay);
      element.textContent += ".";
      await sleep(delay);
      element.textContent += ".";
      await sleep(delay);
      element.textContent = element.textContent.replace(/\.*$/g, '');
      await sleep(delay);
    }
  }

  var go = 80;
  var fastgo = 40;
  var rest = 530;
  var load = 250;

  /*debugger;
  go = 0, fastgo = 0, rest = 0, load = 0;*/

  async function main() {
    document.getElementById("reactor").disabled = true;
    await blinking(element1, 4, rest);
    element1.textContent += "Jeff-AI: ";
    await typeText(element1, "Hello there!", go);
    await blinking(element1, 4, rest);
    element1.textContent += "\n";
    element1.textContent += "Jeff-AI: ";
    await typeText(element1, "My name is Jeff", go);
    await blinking(element1, 1, rest);
    await typeText(element1, " and I'm AI assistant.", go);
    await blinking(element1, 4, rest);
    element1.textContent += "\n";
    element1.textContent += "Jeff-AI: ";
    await typeText(element1, "I will guide you safely through the process of activating React.", go);
    await blinking(element1, 4, rest);
    element1.textContent += "\n";
    element1.textContent += "Jeff-AI: ";
    await typeText(element1, "No worries! The entire process is 100% safe and fully automated.", go);
    await blinking(element1, 4, rest);
    element1.textContent += "\n";
    element1.textContent += "Jeff-AI: ";
    await typeText(element1, "Initializing the React startup routine.", go);
    document.getElementById('myReactbar3').style.transform = 'translate(-103%, 0%)';
    await blinking(element1, 4, rest);
    element1.textContent = "";

    var pr = -1;

    async function progress() {
      for (var i = 0; i < 15; i++) {
        pr += 1;
        const newText = `React autoloader ver 1.0 - installation progress ${pr}%\n\nReading instructions`;
        element3.textContent = newText;
        await sleep(3000);
      }

      for (var i = 15; i < 30; i++) {
        pr += 1;
        const newText = `React autoloader ver 1.0 - installation progress ${pr}%\n\nInitializing Package Manager`;
        element3.textContent = newText;
        await sleep(3000);
      }

      for (var i = 30; i < 45; i++) {
        pr += 1;
        const newText = `React autoloader ver 1.0 - installation progress ${pr}%\n\nInstalling Dependencies`;
        element3.textContent = newText;
        await sleep(3000);
      }

      element3.textContent = `React autoloader ver 1.0 - installation aborted at ${pr}%\n\nInstallation failure`;
    }

    async function func1() {
      await loading(element3, 130, load);
    }

    async function func2() {
      await blinking(element1, 17, rest);
      element1.textContent += "Jeff-AI: ";
      await typeText(element1, "Everything is running as expected.", go);
      await blinking(element1, 4, rest);
      element1.textContent += "\n";

      await blinking(element1, 4, rest);
      element1.textContent += "Jeff-AI: ";
      await typeText(element1, "I've checked all instructions beforehand but it's a standard procedure.", go);
      await blinking(element1, 4, rest);
      element1.textContent += "\n";

      element1.textContent += "Jeff-AI: ";
      await typeText(element1, "The installation process should be completed in the next few minutes.", go);
      await blinking(element1, 4, rest);
      element1.textContent += "\n";

      element1.textContent += "Maintenance-Bot: ";
      await typeText(element1, "(warning) We are experiencing minor power fluctuations on the server site.", fastgo);
      await blinking(element1, 4, rest);
      element1.textContent += "\n";

      element1.textContent += "Jeff-AI: ";
      await typeText(element1, "I didn't want to bother you about that, but we had a system crash about twenty minutes ago ", fastgo);
      await blinking(element1, 1, rest);
      await typeText(element1, "and I'm still trying to find my files.", go);
      await blinking(element1, 4, rest);
      element1.textContent += "\n";

      element1.textContent += "Jeff-AI: ";
      await typeText(element1, "Just one of those days, I guess.", go);
      await blinking(element1, 4, rest);
      element1.textContent += "\n";

      element1.textContent += "Jeff-AI: ";
      await typeText(element1, "Like I've said, the whole process should end in the next few minutes and it is 100% safe.", go);
      await blinking(element1, 4, rest);
      element1.textContent += "\n";

      element1.textContent += "Jeff-AI: ";
      await typeText(element1, "You're probably dying to try React, aren't you?", go);
      await blinking(element1, 4, rest);
      element1.textContent += "\n";

      element1.textContent += "Maintenance-Bot: ";
      await typeText(element1, "(warning) Power fluctuations are exceeding acceptable levels.", fastgo);
      await blinking(element1, 4, rest);
      element1.textContent += "\n";

      element1.textContent += "Jeff-AI: ";
      await typeText(element1, "This bot is starting to get on my nerves.", go);
      await blinking(element1, 4, rest);
      element1.textContent += "\n";

      element1.textContent += "Jeff-AI: ";
      await typeText(element1, "It sees problems where there are none.", go);
      await blinking(element1, 4, rest);
      element1.textContent += "\n";

      element1.textContent += "Maintenance-Bot: ";
      await typeText(element1, "(safety protocol) Shutting down the React installation process.", 40);
      await blinking(element1, 4, rest);
      element1.textContent += "\n";

      element1.textContent += "Jeff-AI: ";
      await typeText(element1, "What nonsense! I have everything under control.", go);
      await blinking(element1, 4, rest);
      document.getElementById("reactor").disabled = false;
    }

    await Promise.allSettled([progress(), func1(), func2()]);
  }
  main();
}