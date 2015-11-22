
function Alphabetizer(wordArray) {
    this.alphabetLibrary = {};
    this.debug = false;

    this.organizeArray = function() {

        for (var i = 0; i < wordArray.length; i++) {
            // Check if letter exists.
            wordArray[i][0] in this.alphabetLibrary ? (
                // Push to array.
                this.alphabetLibrary[wordArray[i][0]].push(wordArray[i]),
                // Sort array.
                this.alphabetLibrary[wordArray[i][0]].sort()
            ) : (
                // Create new object property.
                this.alphabetLibrary[wordArray[i][0]] = [wordArray[i]],
                this.debug ? console.log(this.alphabetLibrary) : null
            );
        }
    };

    this.template = function(target) {
        var node = document.querySelector(target);
        
        // CREATE STRING
        var htmlString = '';
        var htmlContent = '';

        // ADD KEYS AND PROPERTIES TO STRING
        for (key in this.alphabetLibrary) {
            htmlContent = htmlContent + '<dt>' + key + '</dt>';

            for (var i = 0; i < this.alphabetLibrary[key].length; i++) {
                htmlContent = htmlContent +'<dd>' + this.alphabetLibrary[key][i] +'</dd>';
            };

            console.log(this.alphabetLibrary[key]);
        }

        // PASTE AS INNER HTML
        var htmlString = '<dl>' + htmlContent + '</dl>';
        node.innerHTML = htmlString;
    }
}

window.Alphabetizer = Alphabetizer;
