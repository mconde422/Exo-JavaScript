let age = prompt("Entrer  votre âge")
let ferie = true

let reduction = (age <= 6 || age >= 65) && ferie !== true

if (reduction) {
    console.log('Réduction')
} else {
    console.log("Pas de de Réduction")
}