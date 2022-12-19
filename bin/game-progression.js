#!/usr/bin/env node
import { askQuestion, generateArithmeticProgression, greetings } from './common-functions.js';

const name = greetings();
console.log('What is the result of the expression?');
let rightAnswersCount = 0;
while (rightAnswersCount < 3) {
  const [progression, missingNumber] = generateArithmeticProgression();
  if (!askQuestion(progression, missingNumber, name)) {
    break;
  }
  rightAnswersCount += 1;
}
if (rightAnswersCount === 3) {
  console.log(`Congratulations, ${name}!`);
}
