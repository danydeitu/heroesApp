import { heroes } from "../data/heroes";

export const getHeroesBySearch = (keyword = "") => {

    if(keyword === ""){
        return []
    }
  
    return heroes.filter(heroe => heroe.superhero.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()));

};
