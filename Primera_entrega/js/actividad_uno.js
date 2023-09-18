// for (let i = 1; i<=2; i++ ){
//     let alcohol = prompt ("Ingresa la base de tu cóctel 'tequila, ron, whisky'")

//     if (alcohol.toLowerCase() == "tequila"){
//         alert ("Tequila Sunrise, Paloma, Tequila Fix, Mint Tequila, Bloody Mary")
//     }
//     else if (alcohol.toLowerCase() == "ron"){
//         alert ("Mojito, Piña Colada, Mai Tai, Daiquiri, Bloody Mary")
//     }
//     else if (alcohol.toLowerCase() == "whisky"){
//         alert ("Blow job, Whisky sour, Dulce de leche al whisky, Ponche de huevo")
//     }
//     else {
//         alert ("No se encontró esa base para un cóctel")
//     }
// }
const cocteles = [
    {
        nombre: "Tequila Sunrise",
        precio: 120,
        nivelDificultad: "medio",
        alcohol: "tequila",
        ingredientes: ["tequila", "jugo de naranja", "granadina", "cereza"]
    },
    {
        nombre: "Mojito",
        precio: 150,
        nivelDificultad: "fácil",
        alcohol: "ron blanco",
        ingredientes: ["ron blanco", "menta fresca", "lima", "azúcar", "agua con gas"]
    },
    {
        nombre: "Piña Colada",
        precio: 140,
        nivelDificultad: "fácil",
        alcohol: "ron blanco",
        ingredientes: ["ron blanco", "crema de coco", "jugo de piña", "hielo"]
    },
    {
        nombre: "Daiquiri",
        precio: 130,
        nivelDificultad: "fácil",
        alcohol: "ron blanco",
        ingredientes: ["ron blanco", "limón", "azúcar", "hielo"]
    },
    {
        nombre: "Mai Tai",
        precio: 160,
        nivelDificultad: "medio",
        alcohol: "ron oscuro",
        ingredientes: ["ron oscuro", "ron blanco", "curaçao naranja", "almendra", "limón"]
    },
    {
        nombre: "Blue Lagoon",
        precio: 140,
        nivelDificultad: "fácil",
        alcohol: "vodka",
        ingredientes: ["vodka", "curaçao azul", "limón", "refresco de limón"]
    },
    {
        nombre: "Sex on the Beach",
        precio: 150,
        nivelDificultad: "fácil",
        alcohol: "vodka",
        ingredientes: ["vodka", "licor de durazno", "jugo de arándano", "jugo de naranja"]
    },
    {
        nombre: "Caipirinha",
        precio: 130,
        nivelDificultad: "fácil",
        alcohol: "cachaca",
        ingredientes: ["cachaca", "lima", "azúcar", "hielo"]
    },
    {
        nombre: "Whiskey Sour",
        precio: 140,
        nivelDificultad: "fácil",
        alcohol: "whisky",
        ingredientes: ["whisky", "limón", "azúcar"]
    },
    {
        nombre: "Cosmopolitan",
        precio: 160,
        nivelDificultad: "medio",
        alcohol: "vodka",
        ingredientes: ["vodka", "curaçao naranja", "jugo de arándano", "limón"]
    }
]
function obtenerCocteles(alcohol){
    while(alcohol != "salir"){
       let coctelesFiltrados = cocteles.filter(coctel => coctel.alcohol == alcohol)
       coctelesFiltrados.forEach(coctel =>{
            alert("nombre del coctel: " + coctel.nombre + " el precio es : " + coctel.precio + "pesos")
       })
       console.log(coctelesFiltrados)
       alcohol = prompt("Ingresa la base de tu cóctel 'tequila, ron blanco,ron oscuro,vodka,cachaca, whisky'").toLowerCase()
    }
    alert ("Programa finalizado")
}
let alcohol = prompt("Ingresa la base de tu cóctel 'tequila, ron blanco,ron oscuro,vodka,cachaca, whisky'").toLowerCase()
obtenerCocteles(alcohol)