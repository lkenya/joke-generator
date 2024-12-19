
function displayJoke(response){
    let joke = response.data.setup;
    let jokePunchline = response.data.punchline;

    new Typewriter("#joke", {
      strings: `${joke} <br/> <br/>${jokePunchline} `,
      autoStart: true,
      cursor: null,
    });

}
function generateJoke(event){
    event.preventDefault();
    let jokeElement = document.querySelector("#joke");
    jokeElement.innerHTML = "Generating a joke for you. Please wait.....";
    let apiUrl = "https://official-joke-api.appspot.com/random_joke";
    axios.get(apiUrl).then(displayJoke);
}
let buttonElement = document.querySelector("#joke-button");
buttonElement.addEventListener("click", generateJoke);
