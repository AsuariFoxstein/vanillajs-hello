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
    
for (let x of pronoun) {
    for (let y of adj) {
      for (let z of noun) {
        for (let a of ext) {
            console.log(pronoun[x] + adj[y] + noun[z] + ext[a]);
        }
        
      }
    }
  }