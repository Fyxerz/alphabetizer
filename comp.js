
function Alphabetizer(wordArray) {
    this.alphabetLibrary = {};

    this.organizeArray = function() {

        wordArray.sort();

        for (var i = 0; i < wordArray.length; i++) {
            // Check if letter exists.
            wordArray[i][0] in this.alphabetLibrary ? (
                // Push to array.
                this.alphabetLibrary[wordArray[i][0]].push(wordArray[i])
            ) : (
                // Create new object property.
                this.alphabetLibrary[wordArray[i][0]] = [wordArray[i]]
            );
        }
    };

    this.organizeObject = function(object, prop) {
        object.sort(function(a, b) {
            if (a[prop] > b[prop]) {
                return 1;
            }
            if (a[prop] < b[prop]) {
                return -1;
            }
            return 0;
        });
        this.alphabetLibrary = object;
        console.log(jsonObj);
    };

    this.template = function(target) {
        var node = document.querySelector(target);
  
        // CREATE STRING
        var htmlString = '';
        var htmlContent = '';

        // ADD KEYS AND PROPERTIES TO STRING
        for (key in this.alphabetLibrary) {
            htmlContent = htmlContent + '<dt>' + key + '</dt>';

            //  TODO: If object then template whatever properties you may want.
            /*
                EXAMPLE: Get name property as dt and other properties as dd.
                Choose just one property to be templated.
            */
            for (var i = 0; i < this.alphabetLibrary[key].length; i++) {
                htmlContent = htmlContent +'<dd>' + this.alphabetLibrary[key][i] +'</dd>';
            }
        }

        // PASTE AS INNER HTML
        var htmlString = '<dl>' + htmlContent + '</dl>';
        node.innerHTML = htmlString;
    };
}

window.Alphabetizer = Alphabetizer;
    