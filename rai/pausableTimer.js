/**
 * Implement Pausable timer
 */



// Testcases
const timer1 = new Timer();
const timer2 = new Timer();

timer1.start(); // prints all ticks on console

setTimeout(() => {
  timer1.pause(); // prints "timer paused"
  timer2.start()// // start printing ticks from initial count
}, 5000);


setTimeout(() => {
  timer2.pause(); // prints "timer paused"
  timer1.resume(); // prints "timer resumed", start printing all ticks on console
}, 8000);

setTimeout(() => {
  timer1.stop(); // prints "timer stopped"
  timer2.resume(); // prints "timer resumed", start printing all ticks on console
}, 11000);

setTimeout(() => {
  timer2.stop(); // prints "timer stopped"
}, 20000);

setTimeout(() => {
  timer1.start(); // thorw an error
}, 21000);
