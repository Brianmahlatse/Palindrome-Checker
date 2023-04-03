// Define a function that takes a string argument
function palindrome(str) {
    // Remove any non-alphanumeric characters from the string, convert to lowercase, and save as newString
    const newString = str.split(/[^a-zA-Z0-9]/i).join('').toLowerCase();
    
    // Return true if the newString is equal to the reverse of itself, indicating it is a palindrome
    return newString === newString.split('').reverse().join('');
  }
  const assert = require('assert');
  assert.equal(palindrome("_eye"),true);
  assert.equal(palindrome("race car"),true);
  assert.equal(palindrome("not a palindrome"),false);
  assert.equal(palindrome("A man, a plan, a canal. Panama"),true);
  assert.equal(palindrome("never odd or even"),true);
  assert.equal(palindrome("nope"),false);
  assert.equal(palindrome("almostomla"),false);
  assert.equal(palindrome("My age is 0, 0 si ega ym."),true);
  assert.equal(palindrome("1 eye for of 1 eye."),false);
  assert.equal(palindrome("0_0 (: /-\ :) 0-0"),true);
  assert.equal(palindrome("five|\_/|four"),false);