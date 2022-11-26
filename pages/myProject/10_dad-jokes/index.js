const jokeBtn = document.getElementById("jokeBtn");
const joke = document.getElementById("joke");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
    const config = {
        headers: {
            Accept: "application/json",
        },
    };

    const res = await fetch("https://icanhazdadjoke.com", config);
    const data = await res.json();

    joke.innerHTML = data.joke;
}

// function generateJoke() {
//     const config = {
//         headers: {
//             Accept: "application/json",
//         },
//     };
//
//     fetch("https://icanhazdadjoke.com", config)
//         .then((res) => {
//             return res.json();
//         })
//         .then((data) => {
//             joke.innerHTML = data.joke;
//         })
//         .catch((err) => {
//             joke.innerHTML = "Connect Error";
//         })
// }