var words = ['Car', 'Poop', 'Palace'];

function Alphabetizer(wordArray) {
    this.alphabetLibrary = {};

    this.organize = function() {
        for (var i = 0; i < words.length; i++) {
            // Check if letter exists.
            word[0] in this.alphabetLibrary ? (
                // Push to array.
                this.alphabetLibrary[word[0]].push(word),
                // Sort array.
                this.alphabetLibrary[word[0]].sort()
            ) : (
                // Create new object property.
                this.alphabetLibrary[word[0]] = [word]
            );
        }
    };
}

Alphabetizer.organize();
