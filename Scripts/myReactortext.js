import { toggleReactbar } from "./reactbar.js";


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
      element.innerHTML += " .";
      await sleep(delay);
      element.innerHTML += ".";
      await sleep(delay);
      element.innerHTML += ".";
      await sleep(delay);
      element.innerHTML = element.innerHTML.replace(/\.*$/g, '');
      await sleep(delay);
    }
  }

  var go = 80;
  var rest = 530;

  /*debugger;
  go = 0, fastgo = 0, rest = 0, load = 0;*/

  async function main() {

    document.getElementById("reactor").disabled = true;
    await blinking(element1, 2, rest);

    element1.textContent += "Karol (automated response): ";
    await typeText(element1, "Hello there!", go);
    await blinking(element1, 4, rest);
    element1.textContent += "\n";

    if (localStorage.getItem("firstTime") != "no") {
    element1.textContent += "Karol (automated response): ";
    await typeText(element1, " Welcome to my html repository for the first time on your desktop computer.", go);
    await blinking(element1, 2, rest);
    element1.textContent += "\n";
    localStorage.setItem('firstTime', "no");
    }

    element1.textContent += "Karol (automated response): ";
    await typeText(element1, "I will run some quick integrity check before we start.", go);
    await blinking(element1, 2, rest);
    element1.textContent += "\n";

    document.getElementById('myReactbar3').style.transform = 'translate(-103%, 0%)';
    await blinking(element1, 1, rest);

    async function test1() {
      for (var i = 0; i < 25; i++) {
        element3.innerHTML = `Integrity check ver 1.0 - progress ${i}%\n\nHTML`;
        await loading(element3, 1, 30);
      }
      for (var i = 25; i < 50; i++) {
        element3.innerHTML = `Integrity check ver 1.0 - progess ${i}%
        \nHTML&emsp;-&emsp;<span class="green-text">passed</span>
        CSS`;
        await loading(element3, 1, 30);
      }
      for (var i = 50; i < 75; i++) {
        element3.innerHTML = `Integrity check ver 1.0 - progess ${i}%
        \nHTML&emsp;-&emsp;<span class="green-text">passed</span>
        CSS&emsp;&emsp;-&emsp;<span class="green-text">passed</span>
        JS</span>`;
        await loading(element3, 1, 30);
      }
      for (var i = 75; i < 100; i++) {
        element3.innerHTML = `Integrity check ver 1.0 - progess ${i}%
        \nHTML&emsp;-&emsp;<span class="green-text">passed</span>
        CSS&emsp;&emsp;-&emsp;<span class="green-text">passed</span>
        JS&emsp;&emsp;&nbsp;&nbsp;&nbsp;-&emsp;<span class="green-text">passed</span>
        React`;
        await loading(element3, 1, 30);
      }
      element3.innerHTML = `Integrity check ver 1.0 - progess ${i}%
      \nHTML&emsp;-&emsp;<span class="green-text">passed</span>
      CSS&emsp;&emsp;-&emsp;<span class="green-text">passed</span>
      JS&emsp;&emsp;&nbsp;&nbsp;&nbsp;-&emsp;<span class="green-text">passed</span>
      React&emsp;&nbsp;-&emsp;<span class="green-text">passed</span>`;
    }
    await test1();

    document.getElementById("reactor").disabled = true;
    await blinking(element1, 2, rest);

    element1.textContent += "Karol (automated response): ";
    await typeText(element1, "Everything is in order.", go);
    await blinking(element1, 2, rest);
    element1.textContent += "\n";

    element1.textContent += "Karol (automated response): ";
    await typeText(element1, "Good luck!", go);
    await blinking(element1, 2, rest);
    document.getElementById("reactor").disabled = false;
    toggleReactbar();  
  }
  main();
}