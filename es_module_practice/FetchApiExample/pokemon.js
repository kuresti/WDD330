const url = "https://pokeapi.co/api/v2/pokemon";
//let results = null;

async function getPokemon(url) {
    const results =  await fetch(url);
    //check to see if the fetch was successful
    if (results.ok) {
        //the API will send us JSON...but we have to conver the response
        //before we can use it. .json() also returns a promise...so we await it as well
        const data = await results.json();
        doStuff(data);
    }
}

function doStuff(data) {
   
    data.results.forEach((pokemon) => {
        const div = document.createElement("div");
        div.textContent = pokemon.name;
        document.querySelector("main").appendChild(div);
    });
    
}


getPokemon(url);

