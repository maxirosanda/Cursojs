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

function obtenerCocteles(alcohol){
    while(alcohol.toLowerCase() != "salir"){
        if (alcohol.toLowerCase() == "tequila"){
            alert ("Tequila Sunrise, Paloma, Tequila Fix, Mint Tequila, Bloody Mary")
        }
        else if (alcohol.toLowerCase() == "ron"){
            alert ("Mojito, Piña Colada, Mai Tai, Daiquiri, Bloody Mary")
        }
        else if (alcohol.toLowerCase() == "whisky"){
            alert ("Blow job, Whisky sour, Dulce de leche al whisky, Ponche de huevo")
        }
        else {
            alert ("No se encontró esa base para un cóctel")
        }
        alcohol = prompt ("Ingresa otra base de tu cóctel o escribe 'salir' para terminar")
    }
    alert ("Programa finalizado")
}
let alcohol = prompt ("Ingresa la base de tu cóctel 'tequila, ron, whisky'")
obtenerCocteles(alcohol)