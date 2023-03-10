import heroes, {owner} from './data/heroes'

console.log(heroes);
// const getHeroesId = (id) => {
//     return heroes.find( (heroes) =>{
//         if (heroes.id === id) {
//             return true;
//         }else{
//             return false;
//         }
//     } )
// }

const getHeroesId = (id) => {
    return heroes.find( (heroes) => heroes.id === id);
}

const getHeroesByOwner = (owner) => {
    return heroes.filter( (heroes) => heroes.owner.toLowerCase() === owner.toLowerCase());
}
console.log(getHeroesId(2));
console.log(getHeroesByOwner('dc'));
console.log(owner);