let swappingCases = "elZERo"; //
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Elz123er4o";
//Q1 make the string to to revers?
let revers = swappingCases.split("").reverse().join("");
console.log(revers)
// ---------------------------------------------
// ازاي اعمل لكل حرف في الكلمة اسمول احولو لكابتال والعكس 
let sw = swappingCases
  .split("")
  .map((el) => {
    return el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase();
  })
  .join("");

console.log(sw);

//---------------------------------------
 let lowerOfZero =[]
let num = invertedNumbers.map((el) => (el == -el ? Math.abs(el) : el * -1));
console.log(num);
// egnor الرقم السالب
let nnn = invertedNumbers.map((el) => (el < 0 ? lowerOfZero.push(el): el) )
console.log(nnn);
// -------------------------------------------
//[1]
var re = /[0-9]/g;
console.log(ignoreNumbers.replace(re, ""));

//[2]
//used [ Not A Number]
let mmm = ignoreNumbers
  .split("")
  .map((el) => {
    return   isNaN(parseInt(el)) ? el : '';
  })
  .join("");

console.log(mmm);

//Q3 make the function to returns the logest word in the sentence ?

function findLongestWord(sentence) {
  const words = sentence.split(" ");
  let logestWord = "";
  for (let word of words) {
    if (word.length > logestWord.length) {
      logestWord = word
    }
  }
  return logestWord
}

console.log(findLongestWord("I am Mohamed Mohamedhhh"))


//Q4 Remove Duplicates form an Array ?
function removeDuplicates(arr){
  const uniqueElements = []
  for (let i = 0; i < arr.length; i++) {
    if(uniqueElements.indexOf(arr[i]) === -1) {
      uniqueElements.push(arr[i])
    }
  }
  return uniqueElements
}
console.log(removeDuplicates([1, 2, 5, 3, 4, 4, 5, 6, 6,6,6,6]));



//Q5 how to know odd

const arry = [1, 2, 5, 3, 4, 4, 5, 6];
  const arrOdd = []
  const arrEvent = []
  for (let i = 0; i < arry.length; i++) {
    if(i % 2 == 0)  {
      arrEvent.push(arry[i]) 
    }
    else {
      arrOdd.push(arry[i]) 
    }

  }
  // "arry odd" +
  // "arry event" +
  console.log( arrOdd)
  console.log( arrEvent)


  //anther answer 
  const arry1 = [1, 2, 5, 3, 4, 4, 5, 6, 150];
  const arrOdd1 = []
  const arrEvent1 = []

  arry1.map((e) => ((e % 2 == 0) ? arrEvent1.push(e) : arrOdd1.push(e) ))

  console.log( arrOdd1)
  console.log( arrEvent1)


  //Q6 find largest Number
  function findLongestNumber(arr) {
    let largest = arr[0]
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] > largest){
        largest = arr[i]
      }
    }
    return largest;
  }



  console.log(findLongestNumber([2, 1 ,4, 6, 9, 3]))


  arrr = [2, 1 ,4, 6, 9, 3];
  largest = arrr[0]
    for (let i = 0; i < arrr.length; i++) {
      if(arrr[i] > largest){
        largest = arrr[i]
      }
    }
    console.log(largest)


    // convert first chat to lower

    let namee = "Mohamed";

    let firstChar = namee.charAt(0).toLowerCase();
    let endName = namee.slice(1)

    console.log(firstChar + endName);