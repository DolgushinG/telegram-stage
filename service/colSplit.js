function colSplit(arr, c){
    let result = new Array(c);
    for(let i = 0;i < c;++i){
        result[i] = [];
    }
    for(let i = 0;i < arr.length;++i){
        result[i%c].push(arr[i]);
    }
    return result;
  }