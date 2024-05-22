// Array.prototype.reduce()
const nums = [ 12, 10, 30, 16 ];
const numsSum = nums.reduce( ( sum, currentValue ) => {
    return sum + currentValue;
}, 0 );

const primeNumbers = [ 318203, 942901, 446053, 389269, 30983, 174407, 98893, 622519 ];
const max = primeNumbers.reduce( ( max, currentValue ) => {
    if ( currentValue > max ) return currentValue;
    return max;
} );

const grades = [
    'A', 'B', 'C', 'D', 'F', 'B', 'C', 'A', 'D', 'C',
    'B', 'F', 'A', 'C', 'D', 'B', 'F', 'A', 'C', 'D'
];

const gradesFrequency = grades.reduce( ( gradeFrequency, grade ) => {
    if ( gradeFrequency[ grade ] == null ) {
        gradeFrequency[ grade ] = 1;
    } else {
        gradeFrequency[ grade ] += 1;
    }
    return gradeFrequency
}, {} );

console.log( gradesFrequency );
