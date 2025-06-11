let age = prompt("Entrer  votre âge")

let reduction = age <= 6 || age >= 65

if (reduction) {
    console.log('Réduction')
} else {
    console.log("Pas de de Réduction")
}