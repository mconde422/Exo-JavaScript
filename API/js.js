

fetch ("https://v6.exchangerate-api.com/v6/51633c1beaedc8e10b627c90/latest/usd")
    .then(response => response.json())
    .then (d => {
        console.log(d);
        
        let select = document.querySelector("#devise");
        for (let i in d.conversion_rates) {
            let option = document.createElement("option");
            option.setAttribute("value", i)
            option.textContent = i
            select.appendChild(option)
        }
        let select2 = document.querySelector("#convert");
        for (let i in d.conversion_rates) {
            let option = document.createElement("option");
            option.setAttribute("value", i)
            option.textContent = i
            select2.appendChild(option)
        }
        let btn = document.querySelector("#convertir");


        btn.addEventListener("click", (event) => {
            event.preventDefault();
            let deviseAconvertir = select.value
            let deviseCible = select2.value
            
            
            let tauxAconvertir = d.conversion_rates[deviseAconvertir]
            let tauxCible = d.conversion_rates[deviseCible]

            let montant = document.querySelector("#montant").value
            console.log(montant, tauxAconvertir, tauxCible, deviseAconvertir, deviseCible);
            

            let resul = montant * (tauxCible / tauxAconvertir)
            document.querySelector("#resul").value = resul.toFixed(2) 
        })
        
    })