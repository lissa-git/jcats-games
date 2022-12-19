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
    const newItem = item === 'number' ? Math.floor(Math.random() * 1001) : signs[Math.floor(Math.random() * 3)];
    return newItem;
  });
  return randomItems.join(' ');
};
export const askQuestion = (question, rightAnswer, username) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer:');
  if (rightAnswer === answer) {
    console.log('Correct!');
    return 1;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}".\nLet's try again, ${username}!`);
  return 0;
};
export const GCD = (x, y) => {
  if (y > x) return GCD(y, x);
  if (!y) return `${x}`;
  return GCD(y, x % y);
};
export const generateArithmeticProgression = () => {
  const base = Math.floor(Math.random() * 101);
  const diff = Math.floor(Math.random() * 50) + 1;
  const progression = [`${base}`];
  const missingNumberIndex = Math.floor(Math.random() * 10);
  let i = 1;
  while (i < 10) {
    progression.push(base + diff * i);
    i += 1;
  }
  const missingNumber = `${progression[missingNumberIndex]}`;
  progression[missingNumberIndex] = '..';
  return [progression.join(' '), missingNumber];
};
export const isPrime = num => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if(num % i === 0) return false; 
  }
  return num > 1;
};
