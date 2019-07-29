let middle = function(arr) {
  if(arr.length < 2){
    return [];
  }

  let midpoint = Math.floor(arr.length/2);
  if(arr.length % 2 === 0){
    return [arr[midpoint - 1], arr[midpoint]];
  }else{
    return [arr[midpoint]];
  }
};

module.exports = middle;