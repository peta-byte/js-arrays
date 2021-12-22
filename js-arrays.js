// use strict;

var pageTitle = 'JavaScript Arrays';

// remove duplicates
var countries = ['Kenya', 'Tanzania', 'Sudan', 'Ethiopia', 'Uganda', 'Somalia', 'Kenya'];

var uniqueCountries = [...new Set(countries)];

// replace values

var countriesCopy = [...countries]; 

countriesCopy.splice(0, 2, 'Burundi', 'Rwanda');

// map an array

var countriesObjects = [
    { name: 'Kenya', number: 0 },
    { name: 'Sudan', number: 1 },
    { name: 'Tanzania', number: 2 },
    { name: 'Ethiopia', number: 3 },
    { name: 'Uganda', number: 4 }
];

var results = [...countriesObjects].map(({name}) => name);

// empty an array

var emptiedArray = [...countriesObjects];
emptiedArray.length = 0;

// convert array to object

var countriesArrToObj = { ...countries };

// fill array with data

var filledArr = new Array(10).fill('911');

// merge arrays

var mergedArray = [...countries, ...countriesObjects];

// merge arrays and remove duplicates

var cleanedNmerged = [...new Set([...countries, ...uniqueCountries])];

// remove falsy values

var withoutFalsies = [...countries, null, undefined, 0, false, NaN, ''].filter(Boolean);

// get random value from array

var randomCountry = countries[Math.floor(Math.random() * countries.length)]

// reverse the order of values in an array

var reversed = [...countries].reverse();

// find index of last occurrence of a duplicated value in an array

var lastIdxCountry = countries.lastIndexOf('Kenya');

// sum all the values in an array

var reducedSum = [1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((prev, curr) => prev + curr);

class Content {
    value = '';
    name = '';
    desc = '';

    constructor(value, name, desc) {
        this.value = value;
        this.name = name;
        this.desc = desc;
    }
}

var contentList = [
    new Content(countries, 'Create', `Original array of countries - before operations <br> <code class="my-2">['Kenya', 'Tanzania', 'Sudan', 'Ethiopia', 'Uganda', 'Somalia', 'Kenya']</code>`), new Content(uniqueCountries, 'Unique Values', 'Create an array with unique values <br> <code class="my-2">[...new Set(countries)]</code>'),
    new Content(countriesCopy, 'Replace', `Replace values in an array <br> <code class="my-2">countriesCopy.splice(0, 2, 'Burundi', 'Rwanda');</code>`), new Content(results, 'Map', 'Createa a new array by mapping values <br> <code class="my-2">[...countriesObjects].map(({name}) => name)</code>'),
    new Content(emptiedArray, 'Empty', 'Quickly rid an array of values <br> <code class="my-2">emptiedArray.length = 0</code>'), new Content(countriesArrToObj, 'Create Object', `Create an object from an array's values <br> <code class="my-2">{ ...countries }</code>`),
    new Content(filledArr, 'Fill', `Fill an array quickly to get a specific length <br> <code class="my-2">new Array(10).fill('911')</code>`), new Content(cleanedNmerged, 'Clean & Merge', `Create a new array of unique values from other arrays' values <br> <code class="my-2">[...new Set([...countries, ...uniqueCountries])]</code>`),
    new Content(withoutFalsies, 'Truthys', `Create an array of only truthy values <br> <code class="my-2">[...countries, null, undefined, 0, false, NaN, ''].filter(Boolean)</code>`), new Content(randomCountry, 'Randomize', 'Get random values from an array <br> <code class="my-2">countries[Math.floor(Math.random() * countries.length)]</code>'),
    new Content(reversed, 'Reverse', 'Reverse the order of values of an array <br> <code class="my-2">[...countries].reverse()</code>'), new Content(lastIdxCountry, 'Last', `Get the last occurrence of a duplicated value <br> <code class="my-2">countries.lastIndexOf('Kenya')</code>`),
    new Content(reducedSum, 'Reduce', 'Quickly sum up the values of an array <br> <code class="my-2">[1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((prev, curr) => prev + curr)</code>'), new Content(mergedArray, 'Merge', `Create a new array from other arrays' values <br> <code class="my-2">[...countries, ...countriesObjects]</code>`)
];

document.getElementsByTagName('header')[0].innerText = pageTitle;

for (const val of contentList) {
    if (Object.keys(val).length) {
        var wrapper = document.createElement('div');
        var card = document.createElement('div');
        var cardBody = document.createElement('div');
        var cardTitle =  document.createElement('h4');
        var cardSubTitle = document.createElement('h6');
        var cardText = document.createElement('p');

        cardText.classList = ['my-2 fw-lighter'];
        cardSubTitle.classList = ['card-subtitle', 'mb-2', 'text-muted'];
        cardTitle.classList = ['card-title my-2'];
        cardBody.classList = ['card-body'];
        card.classList = ['card m-2'];
        wrapper.classList = ['col-sm-12 col-md-6'];

        cardText.innerText = JSON.stringify(val.value);
        cardSubTitle.innerHTML = typeof val.desc === 'string' ? val.desc : '';
        cardTitle.innerText = typeof val.desc === 'string' ? val.name : '';
        

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardSubTitle);
        cardBody.appendChild(cardText);
        card.appendChild(cardBody);
        wrapper.appendChild(card);

        document.getElementById('cards').appendChild(wrapper);
    }
}
