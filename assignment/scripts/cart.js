console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [] //creating empty array
console.log(basket); //checking array works

function addItem( item ) {
  console.log( 'Adding item to basket:', item);
  basket.push( item );
  return true;
}

addItem( 'apple' );
console.log(basket);
addItem( 'sandwhich' );
addItem( 'silverware' );
addItem( 'napkin' );
console.log(basket);
