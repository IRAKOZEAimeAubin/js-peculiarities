const annoyingHashtags = new Set( [ '#grwm', '#selfie', '#blessed' ] );



annoyingHashtags.add( '#yolo' );
for ( hashtag of annoyingHashtags ) {
    console.log(`Please don't use ${hashtag}`)
}
annoyingHashtags.size
annoyingHashtags.has( '#foodie' ) // returns true if value is found otherwise false
annoyingHashtags.delete( '#selfie' ); // deletes the item if found and returns true otherwise returns false
annoyingHashtags.clear();



