import { useState,useEffect } from "react";
import "../App.css"

const list_of_pokemon=['ditto','ivysaur','venusaur','bulbasaur','charmander','charmeleon','charizard','squirtle']
export function API(){
    let [pokemon,setpokemon]=useState('')
    let [pokeimage,setpokemonimg]=useState("Null URL")
    let [list_use,setlist]=useState([])
    let randompok=list_of_pokemon[Math.floor(Math.random() * (list_of_pokemon.length))]
    useEffect(()=>{
        const getRandomPokemon = () => {
            const randomIndex = Math.floor(Math.random() * list_of_pokemon.length);
            const randompok = list_of_pokemon[randomIndex];}
                  
        if (!list_use.includes(randompok)){
            fetch("https://pokeapi.co/api/v2/pokemon/"+randompok)
            .then(respone=>respone.json())
            .then(data=>{
                const pokename=data["name"]
                const poke=data["sprites"]['front_shiny']
                setpokemon(pokename)
                setpokemonimg(poke)
                setlist(prevList => [...prevList, pokename]);
        })}
      
        
   },[list_use])
   return (
    <div class="image">
        <img class="img1"src={pokeimage}></img>
        {pokemon}        
    </div>
   )
}
