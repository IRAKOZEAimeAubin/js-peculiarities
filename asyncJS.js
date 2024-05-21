const url = 'https://pokeapi.co/api/v2/pokemon/pikachu';
const urlToo = 'https://cat-fact.herokuapp.com/facts';

// const e = new Promise( ( resolve, reject ) => {
//     let name = 'Jane Doe';
//     if ( name === 'John Doe' ) {
//         resolve( name );
//     } else {
//         reject( `Expected 'John Doe' received: '${ name }'` );
//     }
// } );

let movie = fetch( url, {
    method: 'GET',
} )
    .then( response => response.json() )
    .then( data => console.log( data.name ) )
    .catch( err => console.error( err ) );

const dadJoke = async () => {
    try {
        const joke = await fetch( urlToo, {
            method: 'GET',
        } );

        if ( joke.ok ) {
            const data = await joke.json();
            console.log( data );
        } else {
            console.log( 'Error fetching data: ', response.status );
        }
    } catch ( error ) {
        console.error( error );
    }

};

dadJoke();
