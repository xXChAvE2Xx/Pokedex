const pokeNameInfo = document.getElementById('pokeName-view');
const statInfo = document.getElementById('pantalla-info');
const typeScreen = document.getElementById('type-screen');
const idScreen = document.getElementById('id-screen');


const fetchPokemon = () => {
    const pokeName = document.getElementById('pokeName').value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

    fetch(url).then((res) => {
        if(res.status != "200"){
            console.log("Resultado", res)
            pokeImage("./assets/img/404.gif")
            pokeNameInfo.innerHTML = "";
            statInfo.innerHTML = "";
            statInfo.innerText = "No información"
            idScreen.innerHTML = '#-';
            typeScreen.innerText = '-';
        }else{
            return res.json();
        }
    }).then((data) => {
        console.log('Data: ', data);
        let pokeImg = data.sprites.front_default;
        let namePokemon = data.species.name;
        let stats = data.stats;
        let type = data.types[0].type.name;
        let id = data.id;


        console.log(pokeImg, namePokemon, stats, type)
        pokeDatos(namePokemon, stats, type, id) 
        pokeImage(pokeImg)
    });
}

//fetchPokemon();

const pokeDatos = (name, stats, type, id) => {
    
    console.log(stats);
    let l = stats.length;
    statInfo.innerHTML = "";
    for(let i = 0; i < l; i++){
        statInfo.innerHTML += stats[i].stat.name+":&nbsp;"+stats[i].base_stat+"<br>";
    }
    typeScreen.innerText = type;
    
    pokeNameInfo.innerText = name;
    idScreen.innerText = '#'+id;
}

const pokeImage = (url) =>{
    const pokeImg = document.getElementById('pokeImg-insert');
    pokeImg.src = url;
}

//pokeImage('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png')