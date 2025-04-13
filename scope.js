// lexical scope
function outer () {
    let outerVar = 'I am outside!';

    function inner () {
        let innerVar = 'I am inside!';
        console.log( outerVar );
    }

    inner();
}

outer();
