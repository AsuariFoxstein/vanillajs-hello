/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
const pronoun = 
    ['the',
     'our',
     'dellis',
     'chelsas',
     'mays',
     'truckers',
     'tattoracks'
    ];

const adj = 
    ['great', 'big', 'red','hole','round','super','green','dirty'];

const noun = 
    ['jogger', 'racoon', 'Avali', 'cheeseburger', 'violin','inn','sigil','homes','blacksmith'];

const ext = 
    ['.com', '.gov', '.co.uk', '.org', '.hrg', '.aaa'];
   
let sentence =
pronoun[rand(pronoun.length)] +
adj[rand(adj.length)] +
noun[rand(noun.length)] + 
ext[rand(ext.length)];

console.log(sentence);

function rand(length) {
    let number = Math.floor(Math.random() * length);
    return number;
  };