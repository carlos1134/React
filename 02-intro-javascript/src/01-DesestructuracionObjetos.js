//desestructuracion
const persona = {
    nombre: 'carlos',
    edad: 27,
    clave: 'cfo'
};

console.log(persona);
const {nombre} = persona;
console.log(nombre);

// const nombrePersona = (usuario) => {
//     console.log(usuario);
// }
// const nombrePersona = ({edad, nombre}) => {
//     console.log({edad, nombre});
// }
const nombrePersona = ({edad, nombre, rango = 2}) => {
    console.log(edad, nombre, rango);
}
nombrePersona(persona)