#!/usr/bin/env node
import readlineSync from 'readline-sync';

export const greetings = () => {
  console.log('Welcome to the Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  return name;
};
export const generateRandom = (itemsArray) => {
  const signs = ['+', '-', '*'];
  const randomItems = itemsArray.map((item) => {
    const newItem = item === 'number' ? Math.floor(Math.random() * 1000) + 1 : signs[Math.floor(Math.random() * 3)];
    return newItem;
  });
  return randomItems.join(' ');
};
export const askQuestion = (question, rightAnswer, username) => {
  const answer = readlineSync.question('Your answer:');
  if (rightAnswer === +answer) {
    console.log('Correct!');
    return 1;
  }
  console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${username}!`);
  return 0;
};
