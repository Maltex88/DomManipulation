/*console.dir(document); ger oss allt i DOMen, allt som finns på sidan.*/

/*console.log(document.Olika commande för delar av hemsidan t.ex document.title);*/


/*console.log(document.all); /*Ger ett indexvärde för alla element på hemsidan*/
/*document.all[8].textContent = 10; /*Väljer ut element baserat på deras index*/

/*html selektorer*/
//console.log(document.getElementById('tryoutH3'));
//var tryoutP = document.getElementById('tryoutP')
//console.log(tryoutH);
//tryoutH.style.backgroundColor = 'gray';
/*html selektorer*/
//tryoutP.style.border = '3x solid black';
/*
var items = document.getElementsByClassName('listGrp')
/*
console.log(items);
items[1].textContent = 'Hello 2'
items[1].style.fontWeight = 'bold';
items[2].style.backgroundColor = 'Yellow';
*/
/*
for(var i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = 'yellow';
}*/
/*var li = document.getElementsByTagName('li');
console.log(li);

for(i = 0; i < li.length; i++) {
  li[i].style.backgroundColor = 'yellow';
}*/


/*Assignment1*/


/*
var hej1 = document.getElementById('ass1');
hej1.innerHTML = 'Detta är den nya diven';
*/
/*Assignment2*/
/*
let addLiButton = document.querySelector('.btn2'); -Hittar båda elementen i DOM
let ulList = document.querySelector('.ul2');

addLiButton.addEventListener('click', event => {
  let newElement = document.createElement('li');
  newElement.innerHTML = 'List item';
  ulList.appendChild(newElement);
})
*/
/*assignment 3 */


/*
let changedivButton = document.querySelector('#btn3');
let divToSwitch = document.getElementsByClassName('divClass3');
let onOff = true;
let oldValues=[]
changedivButton.addEventListener('click', event => {
  if (onOff == true) {
    for(i = 0; i < divToSwitch.length; i++) {
      oldValues[i] = divToSwitch[i].innerHTML;
      divToSwitch[i].innerHTML = 'Hej';
    }   onOff = false;
  } else {
    for(i = 0; i < divToSwitch.length; i++) {
      divToSwitch[i].innerHTML = oldValues[i];
    }
    onOff = true;
  }

});
*/


/*Assignments 4a + b*/
/*
let classSwitch = document.getElementById("classChangerbuttonId");
let oldy = document.getElementById("classChangerbuttonId").className;
console.log(oldy);
let onOff = true;


classSwitch.addEventListener('click', event => {
  if(onOff == true) {
    let newValue = document.getElementById("classChangerbuttonId").className = "newButtonValue";
    onOff = false;
  }  else {
    onOff = true;
    newValue = document.getElementById("classChangerbuttonId").className = oldy;
  }

});
*/
