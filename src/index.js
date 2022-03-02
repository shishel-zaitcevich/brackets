module.exports = function check(str, bracketsConfig) {
const openBrackets = [];
const pairBrackets = {};
const specialBrackets = [];
  const config2 = [['(', ')'], ['[', ']']];
  // bracketsConfig: [[open1, close1],[open2, close2],[open3, close3],[open4, close4], ..]

  for (let config of bracketsConfig) {
    openBrackets.push(config[0]);//config[0] - открывающая скобка
    pairBrackets[config[1]] = config[0];
  }

  let stack = [];
 

    for (let i = 0; i < str.length; i++) {
      let currentSymbol = str[i];
      // pairBrackets = {
      //   '|': '|'
      // }
      if (pairBrackets[currentSymbol] === currentSymbol) {
        if(stack[stack.length - 1] === currentSymbol){
          stack.pop();
        } else {
          stack.push(currentSymbol);
        }
      } else if (openBrackets.includes(currentSymbol)) {
        stack.push(currentSymbol);
        
      } else {
        // if (stack.length === 0) {
        //   return false;
        // }
        let lastElement = stack[stack.length - 1];
        if (pairBrackets[currentSymbol] === lastElement) {
          stack.pop();
        }
         else {
         stack.push(currentSymbol);
        }
      }
    }

  //isBracketsTrue(bracketsConfig);
  return stack.length === 0;
};
