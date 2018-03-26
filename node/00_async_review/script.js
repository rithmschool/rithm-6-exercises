const logOne = function() {
  setTimeout(() => {
    console.log('one!');
  }, Math.random() * 1000);
};
const logTwo = function() {
  setTimeout(() => {
    console.log('two!');
  }, Math.random() * 1000);
};
const inOrder = function(cbA, cbB) {};
inOrder(logOne, logTwo);

// one
// two

// it should always log those two in order regardless of their timing
