let button = document.querySelector("button");
let peraGraph = document.querySelector("#demo");
let textArea = document.querySelector("textarea");
let timeDisplay = document.querySelector("#time");
let emptyArray = [];
let worngWordsPeraghraph = document.querySelector("#wrong");
let container = document.querySelector('#textBox')
let time;
let second;
let final = 0;
let stoptime;
let counter = 0;

let sentance = [
  "The internet has become an essential part of our daily lives. From checking the weather to learning new skills, everything is just a few clicks away. Students use it for education, developers use it for coding references, and creators use it to share their ideas.",
];
button.addEventListener("click", function () {
  peraGraph.textContent = "";
  let randomText = Math.floor(Math.random() * sentance.length);
  peraGraph.textContent = sentance[randomText].toLocaleLowerCase();
  container.style.padding = "20px";
  console.log(sentance[randomText]);

  stoptime = setInterval(() => {
    final++;
    timeDisplay.textContent = final;
    console.log(final);
    if (final == 60) {
      clearInterval(stoptime);
      alert(`hello ${final}`);
      timeDisplay.textContent = `time is S${final - 1}`;
      let Words = Number(textArea.value.length);
      let totalWords = Words / 5;
      let minut = final / 60;
      let result = totalWords / minut;
      document.querySelector("#wps").textContent = `wpm ${result}`;
      function fect(data) {
        data.forEach((e) => {
          console.log(e);
        });
      }
    }
  }, 1000);

  document.querySelector("#wps").textContent = "";
});

textArea.addEventListener("input", function (e) {
  let textAreaWriten = textArea.value.split("");
  let text = sentance[0].split(" ");
  emptyArray.push(textArea.value);
  let lastCorrecter = emptyArray[emptyArray.length - 1].split(" ");
  for (let i = 0; i < lastCorrecter.length; i++) {
    if (lastCorrecter[lastCorrecter.length - 1] == text[i]) {
      let firstWord = peraGraph.textContent.split(" ");
      firstWord[i] = `<span class="rightWords">${firstWord[i]}</span> `;
      worngWordsPeraghraph.innerHTML = firstWord.join(" ");
    } else {
      let firstWord = peraGraph.textContent.split(" ");
      firstWord[i] = `<span class="wrongWords">${firstWord[i]}</span> `;
      worngWordsPeraghraph.innerHTML = firstWord.join(" ");
      let wrong = worngWordsPeraghraph.textContent.split(" ");
      console.log("wrong match");
    }
  }
});