let btn = document.querySelector("#button");
let display = document.querySelector("#para");
btn.addEventListener("click", function () {
  async function getCatFact() {
    let url = "https://catfact.ninja/fact";
    try {
      let res = await fetch(url);
      let data = await res.json();

      let res2 = await fetch(url);
      let data2 = await res2.json();
      display.style.whiteSpace = "pre-line";

      display.textContent = `Fact 1: ${data.fact}\nFact 2: ${data2.fact}`;
    } catch (error) {
      display.innerText = "Oops! Couldn't get a cat fact.";
      console.log("error", error);
    }
  }
  getCatFact();
});
