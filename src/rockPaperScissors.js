/* exported rockPaperScissors */

/*
 * Write a function that generates every sequence of throws a single
 * player could play over a three-round game of rock-paper-scissors.
 *
 * Your output should look something like:
 *   [["rock", "rock", "rock"],
 *    ["rock", "rock", "paper"],
 *    ["rock", "rock", "scissors"],
 *    ["rock", "paper", "rock"],
 *    ...etc...
 *   ]
 *
 * After you finish it, change your function so that it return answers for any number of rounds.
 * Example:
 *   rockPaperScissors(4); // => [['rock', 'rock', 'rock', 'rock'], etc...]
 */

const rockPaperScissors = (num) => {

  let input = num || 3;
  const moves = ['rock', 'paper', 'scissors'];
  let  output = [];
  
  function combinations(played, rounds) {
    if (rounds === 0) {
      output.push(played); //terminating condition
    } else {
      for (let i = 0; i < moves.length; i++) {
        combinations(played.concat(moves[i]), rounds - 1); //call to itself that approximates the terminating condition
      }
    }
  };

  combinations([], input);
  return output;

};






