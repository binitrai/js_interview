/**
 * Given an array
 * [{
 *     "date": "JAN",
 *     "value": 5,
 *     "weight": 3
 * }, {
 *     "date": "JAN",
 *     "value": 4,
 *     "weight": 23
 * }, {
 *     "date": "FEB",
 *     "value": 9,
 *     "weight": 1
 * }, {
 *     "date": "FEB",
 *     "value": 10,
 *     "weight": 30
 * }]
 * and a key 'date'  
 * transform it into following output:
 *  [{
 *      "date": "JAN",
 *      "value": [5, 4],
 *      "weight": [3, 23]
 *  }, {
 *      "date": "FEB",
 *      "value": [9, 10],
 *      "weight": [1, 30]
 *  }]
**/

const transform = (arr, primaryKey) => {
  
    //write your code
};

console.log(transform([{ "date": "JAN", "value": 5, "weightage": 9 }, { "date": "JAN", "value": 2, "weightage": 19 }, { "date": "FEB", "value": 9, "weightage": 1 }, { "date": "FEB", "value": 10, "weightage": 29 }], 'date'));
/*
[
  { date: 'JAN', value: [ 5, 2 ], weightage: [ 9, 19 ] },
  { date: 'FEB', value: [ 9, 10 ], weightage: [ 1, 29 ] }
]
*/
console.log(transform([{ "type": "500", "api": "/counter" }, { "type": "200", "api": "/counter" }, { "type": "500", "api": "/product" }, { "type": "400", "api": "/counter" }], 'type'));
/*
[
  { type: '200', api: [ '/counter' ] },
  { type: '400', api: [ '/counter' ] },
  { type: '500', api: [ '/counter', '/product' ] }
]
*/
console.log(transform([{ "date": "JAN", "value": 5, "weightage": 9 }, { "date": "JAN", "value": 5, "weightage": 19 }, { "date": "FEB", "value": 9, "weightage": 1 }, { "date": "FEB", "value": 10, "weightage": 29 }], 'date'));
/*
[
  { date: 'JAN', value: [ 5 ], weightage: [ 9, 19 ] },
  { date: 'FEB', value: [ 9, 10 ], weightage: [ 1, 29 ] }
]
*/
