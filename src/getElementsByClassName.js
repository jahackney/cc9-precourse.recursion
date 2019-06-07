/* exported getElementsByClassName */

/*
  The Document object in JavaScript is amazing. It does a lot of beautiful things for you,
  like getting all the elements on a page by their classname:

  const className = 'example';
  const elements = document.getElementsByClassName(className);

  But we don't like easy! So we'll make you write your own.
*/

const getElementsByClassName = (className) => {
  let input = className;
  let output = [];
  
  function recurse(thing) {
    if (thing.classList && thing.classList.contains(input)) {
      output.push(thing); //terminating condition
    }
    if (thing.childNodes[0]) {
      for (let i = 0; i < thing.childNodes.length; i++) {
        recurse(thing.childNodes[i]); //call to itself that approximates the terminating condition
      }
    }
  };

  recurse(document.documentElement);
  return output;

};

