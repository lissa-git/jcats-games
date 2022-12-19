#!/usr/bin/env node
import { askQuestion, generateRandom, greetings, isPrime } from './common-functions.js';

const name = greetings();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
let rightAnswersCount = 0;
while (rightAnswersCount < 3) {
  const randomNumber = generateRandom(['number']);
  const rightAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  if (!askQuestion(randomNumber, rightAnswer, name)) break;
  rightAnswersCount += 1;
}
if (rightAnswersCount === 3) console.log(`Congratulations, ${name}!`);
