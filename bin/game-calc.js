#!/usr/bin/env node
import { askQuestion, generateRandom, greetings } from './common-functions.js';

const name = greetings();
console.log('What is the result of the expression?');
let rightAnswersCount = 0;
while (rightAnswersCount < 3) {
  const randomExpression = generateRandom(['number', 'sign', 'number']);
  const rightAnswer = (eval(randomExpression)).toString();
  if (!askQuestion(randomExpression, rightAnswer, name)) {
    break;
  }
  rightAnswersCount += 1;
}
if (rightAnswersCount === 3) {
  console.log(`Congratulations, ${name}!`);
}
