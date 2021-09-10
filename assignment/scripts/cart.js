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
addItem('apple');
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
