const now = new Date()
const heure = now.getHours()
const minute = now.getMinutes()
const seconde = now.getSeconds()
const nom = prompt("Quel est votre nom")

if (heure >= 6 && heure <= 12) {
    console.log(`Bonjour ${nom}`)
} else if (heure > 12 && heure <= 17) {
    console.log(`Bon après-midi! ${nom}`)
} else {
    console.log(`Bonne Nuit`)
}
