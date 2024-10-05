/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let firstword = ["The "];

  //array of parts of a sentence
  let adjective = ["lonely ", "angry ", "slow ", "old ", "two-headed "];
  let noun = ["jogger ", "dog ", "racoon ", "grandma "];
  let action = [
    "hid my ",
    "demolished my ",
    "burned my ",
    "hit my",
    "damaged my "
  ];
  let possession = [
    "cactus ",
    "luggage ",
    "car ",
    "toothbrush ",
    "sandwich ",
    "computer "
  ];
  let location = [
    "in front of the restroom ",
    "in the parking lot ",
    "on the lawn ",
    "at school! ",
    "in the backyard "
  ];
  // randon selection of elements using Math.floor() and Math.random //

  function excuseGenerator() {
    let randomFirstWord =
      firstword[Math.floor(Math.random() * firstword.length)];
    let randomAdjective =
      adjective[Math.floor(Math.random() * adjective.length)];

    let randomNoun = noun[Math.floor(Math.random() * noun.length)];

    let randomAction = action[Math.floor(Math.random() * action.length)];

    let randonpossession =
      possession[Math.floor(Math.random() * possession.length)];

    let randomlocation = location[Math.floor(Math.random() * location.length)];

    let excuse =
      randomFirstWord +
      randomAdjective +
      randomNoun +
      randomAction +
      randonpossession +
      randomlocation;

    document.getElementById("excuse").innerHTML = excuse;
  }
  excuseGenerator();
};
