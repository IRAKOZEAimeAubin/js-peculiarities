// Use cases for the Symbol primitive datatype

// 2. To store metadata
const length = Symbol( 'length' );
class Train {
    constructor () {
        this[length] = 0;
    }

    add ( car, contents ) {
        this[ car ] = contents;
        this[length]++;
    }
}

let freightTrain = new Train();
freightTrain.add( 'refrigerator car', 'cattle' );
freightTrain.add( 'flat car', 'aircraft parts' );
freightTrain.add( 'tank car', 'milk' );
freightTrain.add( 'hopper car', 'coal' );

for ( car in freightTrain ) {
    console.log( car, freightTrain[ car ] );
}
