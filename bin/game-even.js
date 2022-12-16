#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Games!');
const name = readlineSync.question('May I have your name?');
console.log(`Hello, ${name}!\nAnswer "yes" if the number is even, otherwise answer "no".`);

let rightAnswersCount = 0;
while (rightAnswersCount < 3) {
  const randomNumber = Math.floor(Math.random() * 1000) + 1;
  const isEven = randomNumber % 2 === 0;
  const rightAnswer = isEven ? 'yes' : 'no';
  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Your answer:');
  if (rightAnswer === answer) {
    console.log('Correct!');
    rightAnswersCount += 1;
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${name}!`);
    break;
  }
}
if (rightAnswersCount === 3) {
  console.log(`Congratulations, ${name}!`);
}
