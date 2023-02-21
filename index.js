//Coding Interview Prep
//Algorithms

//Find the Symmetric Difference
//The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.
//Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

//Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).

function sym() {
  //get symmetricDiff result from first two args
  console.log("arg 0", arguments[0]);
  console.log("arg 1", arguments[1]);
  console.log("arg 3", arguments[2]);

  let results = arguments[0];

  for (let i = 1; i < arguments.length; i++) {
    results = getSymmDiff(results, arguments[i]);
  }
  return results;
}

function getSymmDiff(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      newArr.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      newArr.push(arr2[i]);
    }
  }
  return [...new Set(newArr)];
}

console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])); //[1,4,5]
console.log(sym([1, 2, 3], [5, 2, 1, 4])); //[3,4,5]
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])); //[2,3,4,6,7]
console.log(
  sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])
); //[1,2,4,5,6,7,8,9]





//JavaScript Algorithms and Data Structures
//Basic Algorithm Scripting

// Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWordLength(str) {
  //in: str
  //out: num

  //split words at space
  //iterate through words
  let wordLength = str.split(" ").map((word) => word.length);
  //find longest word
  //return the length of the longest word
  return Math.max(...wordLength);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  let finalArr = [];

  console.log("full arr", arr);

  for (let i = 0; i <= arr.length; i++) {
    let splicedArr = arr.splice(0, size);
    console.log("splice loop", splicedArr);
    finalArr.push(splicedArr);
  }
  console.log("arr", arr);
  if (arr.length === 0) {
    return finalArr;
  } else {
    finalArr.push(arr);
    return finalArr;
  }
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);

//Boo who

// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.

function booWho(bool) {
  if (bool === true || bool === false) {
    return true;
  } else {
    return false;
  }
}

booWho([1, 2, 3]);


//JavaScript Algorithms and Data Structures
//Intermediate Algorithm Scripting



//Pig Latin

// Pig Latin is a way of altering English Words. The rules are as follows:
// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
// - If a word begins with a vowel, just add way at the end.
// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
  if (str[0].match(/[aeiou]/)) {
    return str + "way";
  } else {
    let splitStr = str.split("");
    for (let i = 1; i < splitStr.length; i++) {
      if (splitStr[i].match(/[aeiou]/)) {
        let spliced = splitStr.splice(0, i);
        return [...splitStr, ...spliced].join("") + "ay";
      }
    }
    let theLast = splitStr.join("") + "ay";
    console.log(theLast);
    return theLast;
  }
}

translatePigLatin("eight");
translatePigLatin("rhythm");
translatePigLatin("glove");




//Binary Agents 

// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.


function binaryAgent(str) {
  let splitBinary = str.split(" ");

  let convertBinaryToNum = splitBinary.map((x) =>
    String.fromCharCode(parseInt(x, 2))
  );
  return convertBinaryToNum.join("");
}

binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);




//DNA Pairing
// Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.
// The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.


function pairElement(str) {
  //AT
  //CG

  //declare empty final arr
  let finalArr = [];
  //declare empty mini arr
  let pairArr = [];
  //iterate through str
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      //A : T
      //if letter at str[i] === 'A'
      case "A":
        //emptyArr = [A, T]
        pairArr = ["A", "T"];
        //push to empty arr
        finalArr.push(pairArr);
        break;
      case "T":
        pairArr = ["T", "A"];
        finalArr.push(pairArr);
        break;
      case "C":
        pairArr = ["C", "G"];
        finalArr.push(pairArr);
        break;
      case "G":
        pairArr = ["G", "C"];
        finalArr.push(pairArr);
        break;
    }
  }
  return finalArr;
}

pairElement("ATCGA");


//Seek and Destroy

//You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
//Note: You have to use the arguments object.

function destroyer(arr) {
  //arr includes an array and more arguments, slice args after the initial arr (1) and add them to a deleted nums var
  let delNums = Array.from(arguments).splice(1);
  //console.log('delNums', delNums);
  //return filtered elements in arr if they're not included in delNums
  return arr.filter((elem) => !delNums.includes(elem));
}
destroyer([1, 2, 3, 1, 2, 3], 4, 3);