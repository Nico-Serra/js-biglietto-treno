console.log('hello world');

/*
Trenitalia ha bisogno di un programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65
*/

//-Individuare dall'utente i km che dovrà percorrere e la sua età
    let trip = Number(prompt('Inserisci qui quanti km dovrai percorrere'));
    console.log(trip);

    let userAge = Number(prompt('Inserisci qui la tua età'));
    console.log(userAge);

/*-In base alle informazioni trapelate calcolare il prezzo totale del viaggio tenendo conto degli sconti
    -Moltiplicare l'età con i 0.21 €
    -Applicare gli sconti
        -SE l'utente è under 18 applicare il 20% di sconto
        -ALTRIMENTI SE è Over 65 applicare il 40% di sconto
        -ALTRIMENTI non applicare nessuno sconto
*/
    const priceKm = 0.21
    //console.log(typeof priceKm);

    let priceTicket = priceKm * trip
    console.log(priceKm * trip);



    let salesUnder18 = 20

    let salesOver65 = 40

    console.log(typeof salesUnder18, typeof salesOver65);

//-Mostrare il prezzo finale