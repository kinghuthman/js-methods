# JS Methods - Functions

#### Methods I've used

(need to go through the rest of methods and make their own file as well)

## Table of Contents

> > [endsWith()](#endsWith)

> > [Object.freeze](#objectFreeze)

> > [filter()](#filter)

> > [indexOf()](#indexOf)

> > [reduce()](#reduce)

<a name="endsWith"></a>

### endsWith()

- endsWith() method determines whether a string ends with the characters of a
  specified string, returning true or false as appropriate.

  > > const example = "This is a test string";

  > > const example2 = "Testing";

  > > const characters = "ring";

  > > const doesItEndWith = (str, endingLetters) => {
  > > return str.endsWith(endingLetters);
  > > };

console.log(doesItEndWith(example, characters), "\n"); // true

console.log(doesItEndWith(example2, characters)); // false

<a name="objectFreeze"></a>

### Object.freeze()

// Once the object is frozen, you can no longer add, update, or  
// delete properties from it. Any attempt at changing the object will be rejected without an error.

Arrow functions can be declared with one line if there's no function body, and only a return value.
//const myFunc = () => "value"

concat()
// The concat() method is used to join two or more arrays.
// This method does not change the existing arrays, but returns a new array, containing the
// values of the joined arrays.

filter()
// The filter() method creates an array filled with all array elements that pass a
// test (provided as a function). filter() does not execute the function for array
// elements without values. filter() does not change the original array.

map()
// The map() method creates a new array with the results of calling a function
// for every array element. The map() method calls the provided function once
// for each element in an array, in order. map() does not execute the function
// for array elements without values. map() does not change the original array.

<a name="reduce"></a>

reduce()

> > The reduce() method reduces the array to a single value.

> > The reduce() method executes a provided function for each value of the array (from left-to-right).

> > The return value of the function is stored in an accumulator (result/total).

> > reduce() does not execute the function for array elements without values.

> > const numbers = [1,2,3]

> > return numbers.reduce((accumulator, currentValue) => accumulator + currentValue) // 6

push()
// adds elements to the end of an array

unshift()
// adds elements to the front of an array

setTimeout()
// can take up to three arguments, callback function, the time amount and then an argument
// that will be passed into the callback function

Math.random()
// Returns a random integer between 0 and 1

sort()
// sorts arrays with strings alphabetically.

pop()
// removes an element from the end of an array

shift()
// removes an element from the front of an array

splice()
// The first two parameters of splice() are integers which represent indexes, or positions,
// of the array that splice() is being called upon. And remember, arrays are zero-indexed,
// so to indicate the first element of an array, we would use 0.
// splice()'s first parameter represents the index on the array from which to begin removing
// elements, while the second parameter indicates the number of elements to delete.
// In addition to removing elements, we can use that third parameter, which represents one
// or more elements, to add them as well.

slice()
// Rather than modifying an array, copies, or extracts, a given number of elements to a new array,
// leaving the array it is called upon untouched. slice() takes only 2 parameters —
// the first is the index at which to begin extraction, and the second is the index
// at which to stop extraction (extraction will occur up to, but not including the element at this index).

<a name="indexOf"></a>

### indexOf()

- allows us to quickly and easily check for the presence of an element on an array.
- indexOf() takes an element as a parameter, and when called, it returns the position, or index,
  of that element, or -1 if the element does not exist on the array.

  > > const influencers = ["gates", "jobs", "musk"];

  > > console.log(influencers.indexOf("gates")); // 0

  > > console.log(influencers.indexOf("musk")); // 2

Math.max()
// return the number with the highest value

toString()
// converts a number to a string

Math.pow()
// the pow() returns the value of x to the power of y (x,y)

Math.hypot()
// returns the square root of the sum of squares of its argument

charAt()
// A string representing the character at the specified index; empty string if index is out of range.

str.trim()
// Function is used to remove the white spaces from both the ends of the given string.

includes()
// method determines whether a string contains the given characters within it or not.
// This method returns true if the string contains the characters, otherwise, it returns false.

test()
// The .test() method takes the regex, applies it to a string (which is placed inside the parentheses),
// and returns true or false if your pattern finds something or not.

match ()
// The .match() method takes the regex, applies it to a string (which the regex is placed inside the parentheses
// and returns true or false if your pattern finds something or not.

every()
// method tests whether all elements in the array pass the test implemented by the provided function.

Math.sign(x)
// returns the sign of an integer, if positive returns 1, negative returns -1

split()
// method is used to split a string into an array of substrings, and returns the new array.

reverse()
// method reverses the order of the elements in an array.

join()
// method returns the array as a string.

parseInt()
// returns a string as an integer.

call()
// method allows you to write a method that can be used by different objects.

html.replace()
// method searches a string for a specified value, or a regular expression, and returns a new string
//where the specified values are replaced.

element.insertAdjacentHTML(position, text)
// position - 'beforebegin': Before the element itself, 'afterbegin': Just inside the element,  
// before its first child, 'beforeend': Just inside the element, after its last child, 'afterend':
// After the element itself. text - the string to be parsed as html or xml and inserted into the tree.

textContent()
// sets the elements text content or retreives it

split()
// splits a string into an array of substrings and returns the new array.

findIndex()
// finds the index of an element in an array

find()
// returns the first element in an array that passes a test

from()
// method creates a new, shallow-copied Array instance from an array-like or iterable object.

split()
// splits a string into an array of substrings

closest()
// method returns the closest ancestor of the current element(or the current element itself) which matches
// the selectors given in parameter. If there isn't such an ancestor, it returns null.

splice()
// takes a start index and then how many positions after, it will then return those elements and delete
// them from the original array.
// [2,4,8] splice(1,2) -> returns [4, 8] original array is [2]
// [2,4,8] slice(1,2) -> returns 4 original array is [2,4,8]

toString()
// converts a number to a string, can pass in a radix toString(radix). radix is either 2, 8 or 16. 2 means
// it will convert the number to a binary vase

substr()
// method returns a portion of the string, starting at the specified index and
// extending for a given number of characters afterward.

The range of a 32 bit integer is between 2,147,483,648 and 2,147,483,648

<a name="filter"></a>

### filter()

- creates a new array with all the elements that pass the test provided by the implemented function
- does not modify the original array

  > > const friends = ['michelle','reed','tim']

  > > console.log(friends.filter(friend => friend.length === 4)) // reed
