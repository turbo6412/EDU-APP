/**
 * @jest-environment jsdom
 */

 const sum = require("./script")

 questionTest1('checks if the function works for question1', () => {
     const question = 'question1';
     expect(checkQuestion(question)).anything();
 })
 
 questionTest2('checks if the function works for question2', () => {
     const question = 'question2';
     expect(checkQuestion(question)).anything();
 })
 
 questionTest3('checks if the function works for question3', () => {
     const question = 'question3';
     expect(checkQuestion(question)).anything();
 })
 
 questionTest4('checks if the function works for question4', () => {
     const question = 'question4';
     expect(checkQuestion(question)).anything();
 })
 
 questionTest5('checks if the function works for question5', () => {
     const question = 'question5';
     expect(checkQuestion(question)).anything();
 })
 
 questionTest6('checks if the function works for question6', () => {
     const question = 'question6';
     expect(checkQuestion(question)).anything();
 })