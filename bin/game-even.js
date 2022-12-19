#!/usr/bin/env node
import { askQuestion, generateRandom, greetings } from './common-functions.js';

const name = greetings();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let rightAnswersCount = 0;
while (rightAnswersCount < 3) {
  const randomNumber = generateRandom(['number']);
  const isEven = +randomNumber % 2 === 0;
  const rightAnswer = isEven ? 'yes' : 'no';
  if (!askQuestion(randomNumber, rightAnswer, name)) break;
  rightAnswersCount += 1;
}
if (rightAnswersCount === 3) console.log(`Congratulations, ${name}!`);
