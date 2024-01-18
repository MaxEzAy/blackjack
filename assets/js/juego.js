

let deck = [];
const tipos = ['C','D','H','S']
const especiales = ['A','J','Q','K']

// Esta función crea una nueva baraja
const crearDeck = () => {

    for (let i = 2; i <= 10; i++) {
        for (const tipo of tipos) {
            deck.push( i + tipo)
        }        
    }

    for (const tipo of tipos) {
        for (const esp of especiales) {
            deck.push( esp + tipo);
        }
    }

    // console.log( deck );
    deck = _.shuffle(deck);
    console.log( deck );

    return deck;

}

crearDeck();

// Esta función me permite tomar una carta
const pedirCarta = () => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }

    const carta = deck.pop();

    console.log(deck);
    console.log(carta); // carta debe de ser de la baraja
    return carta;

}

    pedirCarta();