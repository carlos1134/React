const paises = ['chile', 'usa', 'brazil'];

const [, , p1] = paises;
console.log(p1);

const returnArreglo = (a = 2) => {
    return [a, 123]
}
// console.log(returnArreglo());
const [a] = returnArreglo();
console.log(a);

const usesState = (valor) => {
    return [valor, () => console.log('hola')];
}
const [nombre, setnombre] = usesState(2);
console.log(nombre);
setnombre();