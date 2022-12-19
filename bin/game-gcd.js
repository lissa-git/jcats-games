#!/usr/bin/env node
import { askQuestion, GCD, generateRandom, greetings } from './common-functions.js';

const name = greetings();
console.log('Find the greatest common divisor of given numbers.');
let rightAnswersCount = 0;
while (rightAnswersCount < 3) {
  const randomNumbers = generateRandom(['number', 'number']);
  const randomNumbersArray = randomNumbers.split(' ');
  const rightAnswer = GCD(randomNumbersArray[0], randomNumbersArray[1]);
  if (!askQuestion(randomNumbers, rightAnswer, name)) {
    break;
  }
  rightAnswersCount += 1;
}
if (rightAnswersCount === 3) {
  console.log(`Congratulations, ${name}!`);
}
