const baseURL = "https://pokeapi.co/api/v2/pokemon/"

let poke = 1;
requestPokeInfo(baseURL, 'pikachu')

function requestPokeInfo(url, name){
    fetch(url + name)
        .then(response =>{
            console.log(response)
            return response.json()
        })
        .then(data => {
            document.body.innerHTML = data.name
            poke = data
            console.log(data)
        })
        .catch(err => console.log(err))
}





