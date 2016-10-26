//# Cats Cats Cats


var petStore = [
  {
    name: 'Maxie',
    weight: '10lbs', 
    gender: 'male',
    colors: ['gray', 'white', 'brown']
  },
  {
    name: 'Tabs',
    weight: '8lbs',
    gender: 'female',
    colors: ['white', 'orange']
  },
  {
    name: 'Friday',
    weight: '9lbs',
    gender: 'female',
    colors: ['white', 'orange', 'black', 'brown']
  },
  {
    name: 'Eisie',
    weight: '13lbs',
    gender: 'female',
    colors: ['white', 'gray', 'tan']
  },
  {
    name: 'Tinkerbell',
    weight: '7lbs',
    gender: 'female',
    colors: ['white']
  }
];

//Exercise 1: 
//Create a function that will filter the given array of objects
//for cats whose coloring includes the given color.

function catColors(array, color){
  //your code here!
};

//example:
var result = catColors(petStore, 'orange');
console.log(result); //=> 
/*
[
  {
    name: 'Tabs',
    weight: '8lbs',
    gender: 'female',
    colors: ['white', 'orange']
  },
  {
    name: 'Friday',
    weight: '9lbs',
    gender: 'female',
    colors: ['white', 'orange', 'black', 'brown']
  }
]
*/