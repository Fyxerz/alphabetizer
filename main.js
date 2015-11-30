var words = ['Car', 'Poop', 'Palace', 'Agapito di sousa', 'Ballin', 'Alarm Clock'];

var jsonObj = {
    theArray: [
        {
            name: 'Duncan',
            link: '2bloob'
        },
        {
            name: 'IN MA BOOT!',
            link: '1bloob'
        },
        {
            name: 'The bloob',
            link: '9bloob'
        },
        {
            name: 'My name is Joe',
            link: '6bloob'
        }
    ]
};

var api = null;

var wordSorter = new Alphabetizer(words);

wordSorter.organizeArray(words);
wordSorter.template('body');