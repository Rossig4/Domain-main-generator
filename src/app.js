/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo from the console");
};
var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];
var ext = [".us", ".io", ".com", ".net"];
var dominioP = document.getElementById("dominiosP");
var dominio = [];
for (let index = 0; index < pronoun.length; index++) {
  const primeraParte = pronoun[index];
  for (let index = 0; index < adj.length; index++) {
    const segundaParte = adj[index];
    for (let index = 0; index < noun.length; index++) {
      const terceraParte = noun[index];
      for (let index = 0; index < ext.length; index++) {
        const cuartaParte = ext[index];
        dominio.push(primeraParte + segundaParte + terceraParte + cuartaParte);
        dominioP.innerHTML +=
          primeraParte + segundaParte + terceraParte + cuartaParte + "<br>";
      }
    }
  }
}
console.log(dominio);
