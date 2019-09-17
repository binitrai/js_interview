/*
create your own reduce function for array operation.
*/

Array.prototype.myReduce = function(fn, init) {
  const self = this;
  let start = 0;
  const len = self.length;
  let current = init;
  if (typeof current == "undefined") {
		current = self[0];
        start = 1;
  } 
  for (let i = start; i < len; i++) {
      current = fn(self[i], current);
  }
  return current;
}
