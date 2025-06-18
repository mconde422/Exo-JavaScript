let number = document.getElementById('number')
        let btn = document.querySelector('button')
        let ajout = document.getElementById('pass')
        let count

        number.addEventListener('input', ()=>{
            count = number.value
        })
        btn.addEventListener('click', () => {
            if ((number.value < 4)|| (number.value > 16)) {
                ajout.innerHTML = 'la taille du mot de passe doit être entre 4 et 16'
                ajout.style.color = 'red'
                ajout.style.fontSize = '15px'
            } else {
            function genererAleatoire(longueur) {
                const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                let resultat = '';
                
                for (let i = 1; i <= longueur; i++) {
                    const index = Math.round(Math.random() * caracteres.length);
                    resultat += caracteres[index]; 
                }
                
                return resultat;
                }

                ajout.innerHTML = 'Votre mot de passe est : ' + genererAleatoire(count);
                ajout.style.color = 'black'
                ajout.style.fontSize = '25px'
                ajout.style.fontWeight = 'bold'
            }
        })