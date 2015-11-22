var words = ['Car', 'Poop', 'Palace', 'Plane Crash'];

alphabetizer = {};

for (var i = 0; i < words.length; i++) {
        Alphabetizer(words[i]);
        console.log(words[i]);
}


function Alphabetizer(word) {

    // Check if letter exists.
    word[0] in alphabetizer ? (
        // Push to array.
        alphabetizer[word[0]].push(word),
        // Sort array.
        alphabetizer[word[0]].sort()
    ) : (
        // Create new object property.  
        alphabetizer[word[0]] = [word]);
}

Alphabetizer();
