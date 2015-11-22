var words = ['Car', 'Poop', 'Palace', 'Agapito di sousa'];

var jsonObj = {
    theArray: [
        {
            link: 'bloob'
        },
        {
            link: 'bloob'
        },
        {
            link: 'bloob'
        },
        {
            link: 'bloob'
        }
    ]
};

var wordSorter = new Alphabetizer(words);

wordSorter.debug = true;
wordSorter.organizeArray();
wordSorter.template('body');