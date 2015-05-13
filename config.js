// for navigator language
var lang = window.navigator.language;
// you can change the language
var lang = 'en';

//change weather params here:
//units: metric or imperial
var weatherParams = {
    'units':'imperial',
    'lang':lang,
    'q':'07869,us'
};

//var feed = 'http://feeds.nos.nl/nosjournaal?format=rss';
//var feed = 'http://www.nu.nl/feeds/rss/achterklap.rss';
var feed = 'http://rssfeeds.usatoday.com/usatoday-NewsTopStories';
//var feed = 'http://www.nu.nl/feeds/rss/opmerkelijk.rss';
//var feed = 'http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml';

// compliments:
var morning = [
            'Good morning, handsome!',
            'Enjoy your day!',
            'How was your sleep?'
        ];
        
var afternoon = [
            'Hello, beauty!',
            'You look great!',
            'Looking good today!'
        ];
       
var evening = [
            'Wow, you look great!',
            'You look nice!',
            'Hi there!'
        ];