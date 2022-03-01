const baseURL = "https://pokeapi.co/api/v2/pokemon/"

let pokemon;

function requestPokeInfo(url, name){
    fetch(url + name)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => console.log(err))
}

requestPokeInfo(baseURL, 'pikachu')

console.log("test122")
let test = 1;

