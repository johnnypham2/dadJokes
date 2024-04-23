let joke = document.getElementById("joke")
let jokeBtn = document.getElementById("jokeBtn")

const getJokes = async() => {
    const promise = await fetch("https://icanhazdadjoke.com/", {
        headers:{
            'Accept':'application/json'
        }
    });

    const data = await promise.json();
    console.log(data);
    joke.textContent = data.joke;
    return data;
}


jokeBtn.addEventListener("click", async() =>{
    await getJokes();
});