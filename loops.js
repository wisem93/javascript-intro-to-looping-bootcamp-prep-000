function forLoop (array) {
  for(let i = 0; i < 25; i++) {
    if(i === 1) {
      array.push("I am 1 strange loop.");  
    } else {
      array.push(`I am ${i} strange loops.`);   
    }
  }
  return array;
} 

function whileLoop(n) {
  let countdown = n;
  
  while (countdown > 0) {
    console.log(-- countdown);
  }
  return 'done';
}

<<<<<<< HEAD
var i = 0;
=======


function doWhileLoop(int) {
  
  var i = 0;
>>>>>>> b8bb7240fc4d35520aa7fd01ba56d747824ffe0f

function incrementVariable() {
  i = i + 1;
  return i;
}
<<<<<<< HEAD

function doWhileLoop(num) {
  
  do {
    console.log("I run once regardless");
  } while (incrementVariable() <= num );
  return num;
=======
  
  do {
    console.log("I run once regardless");
  } while (incrementVariable() > int );
>>>>>>> b8bb7240fc4d35520aa7fd01ba56d747824ffe0f
}