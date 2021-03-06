// Problem 10
// ----------
// Make this function return the input string, capitalized.
// f("hello world"); // Hello World
// f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

// HINT:
//  - Write a function that capitalizes a single word.
//  - Split the input sentence into an array of words
//  - Iterate over each word, calling your "capitalize word" function
//  - Join the results into a string

function makeIntoTitle(sentence) {
  let newSentence = "";
  sentence = sentence.split(" ");
  sentence.forEach((element) => {
    newSentence = newSentence.concat(
      element.charAt(0).toUpperCase() + element.slice(1) + " "
    );
  });
  return newSentence.trim();
}

// Add 6 total (5 more)
expect(
  makeIntoTitle("the longest road is a great song"),
  "The Longest Road Is A Great Song"
);

expect(
  makeIntoTitle("Wake up, it's time to go to work!"),
  "Wake Up, It's Time To Go To Work!"
);

expect(makeIntoTitle("We Are not your enemy!"), "We Are Not Your Enemy!");
expect(makeIntoTitle("please!! Leave me alone"), "Please!! Leave Me Alone");
expect(makeIntoTitle("hump day!"), "Hump Day!");
expect(makeIntoTitle(""), "");

/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log("✅ Test succeeded");
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}
