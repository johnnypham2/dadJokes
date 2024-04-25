let joke = document.getElementById("joke");
let jokeBtn = document.getElementById("jokeBtn");

//joke function
const getJokes = async () => {
  const promise = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });

  const data = await promise.json();
  console.log(data);
  joke.textContent = data.joke;
  return data;
};

//added eventlisteners for your button click
jokeBtn.addEventListener("click", async () => {
  await getJokes();
});
