// let menu = {
//   _courses:{
//   appetizers:[],
//   mains:[],
//   desserts:[]
//   },
//   get appetizers(){
//     return this._courses.appetizers;
//   },
//   set appetizers(appetizers){
//     this._courses.appetizers = appetizers;
//   },
//   get mains(){
//     return this._courses.mains;
//   },
//   set mains(mains){
//     this._courses.mains = mains;
//   },
//   get desserts(){
//     return this._courses.desserts;
//   },
//   set desserts(desserts){
//     this._courses.desserts = desserts;
//   },
//   get courses(){
//   return {
//     appetizers: this.appetizers,
//     mains: this.mains,
//     desserts: this.desserts
//   }
// },
//   addDishToCourse (courseName, dishName, dishPrice){
//     const dish = {
//       name: dishName,
//       price: dishPrice
//     }
//     return this._courses[courseName].push(dish);
//     },
//   getRandomDishFromCourse: function(courseName){
//     const dishes = this._courses[courseName];
//     const randomIndex = Math.floor(Math.random() *  dishes.length);
//     return dishes[randomIndex];
//   },
//   generateRandomMeal: function(){
//     const appetizer = this.getRandomDishFromCourse('appetizers');
//     const mains = this.getRandomDishFromCourse('mains');
//     const desserts = this.getRandomDishFromCourse('desserts');
//     const totalPrice = (appetizer.price + mains.price + desserts.price).toFixed(2);
//
//    return `Your meal is: ${appetizer.name}, ${mains.name} and ${desserts.name}. The price is: $${totalPrice}.`
//
//   },
// }
//
// menu.addDishToCourse('appetizers','humus',3.50);
// menu.addDishToCourse('mains','Chicken Fried Rice',8.50);
// menu.addDishToCourse('desserts','Caramel Ice-cream',2.50);
//
// console.log("\n ---- ----\n");
let persona = ["developer","dad", "recovering tester","lover of TDD","follower of the big JC","pleased to meet you"];
var display = document.getElementById('persona');

function printMessage() {

    for(let value of persona){
      display.innerHTML = `I am a:` + value;
    }
}

function LoopTest() {
  var i=0;
  var stop=5;
    for (i=0;i<5;i++) {
       var v = document.createElement('input');
       v.type="button";
       v.value="Button " +i;
       document.getElementById('test').appendChild(v);
  }
}

LoopTest();
printMessage();
// let meal = menu.generateRandomMeal();

// console.log(display)
