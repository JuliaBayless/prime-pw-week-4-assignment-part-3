console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [] //creating empty array
console.log('basket is empty', basket); //checking array works

function addItem(item) { //creating function to push items into basket
  console.log('Adding item to basket:', item);
  basket.push(item);
  return true;
}

//using function to push items into basket
console.log(addItem('apple'));
console.log('added one item to basket to test function', basket);
addItem('hummus sandwich');
addItem('dark chocolate');
addItem('napkin');
addItem('bottle of rosé')
console.log('basket now has:', basket);

//creating a function to list the items in the basket using a loop
console.log('I will create a loop via a function to list the items in my basket!');
function listItems() {
  for(items of basket)
  console.log('An item in my basket is:', items);
}
//testing list fucntion
listItems();

//creating a function to empty basket or reset it to empty
console.log('testing a function to empty my basket, should see an empty array');
function empty(){
  basket = [];
  console.log( 'emptying basket:', basket);
}
 //testing fucntion
 empty();

//Starting stretch goals
console.log('Starting Stretch Goals');

const maxItems = 5;
console.log('checking constanst maxItems:', maxItems);
//creating a function to see if the basket is at max items.
function isFull(){
  if(basket < maxItems){
    return false;
  } else {
    return true;
  }
}
console.log('Is the Basket at max items or more?', isFull());
console.log('Basket was emptied and is at zero');

//create function to check number of items in basket after each add
console.log('Creating CheckIfFull function to check if the basket is full after a item was added');
function CheckIfFull(){
  console.log( 'In checkIfFull function');
  if(isFull() && addItem()){
    console.log('Basket is full, cannot add more items');
    return true;
  } else {
    console.log ('Another item can be added if function returns false:');
    return false;
  }
}
console.log(CheckIfFull());
//filling up basket to check work
console.log(addItem('apple'));
console.log('added one item to basket to test function', basket);
addItem('hummus sandwich');
addItem('dark chocolate');
addItem('napkin');
addItem('bottle of rosé')
addItem('wine glasses')
console.log('basket now has:', basket);
//checking both functions - isFull should be true and checkIfFull should be true
console.log('checking both functions - isFull should be true and checkIfFull should be true');
console.log(isFull());
console.log(CheckIfFull());

//I didn't have time to play with this stretch goal more, but I'm saving it to look at next week!
//Remove items with array built-in Functions
//function removeItem(item){
//  basket.indexOf(0);
//  basket.splice(0,1);
//  return item;
//}

//console.log(removeItem());
