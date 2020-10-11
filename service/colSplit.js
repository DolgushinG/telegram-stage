function colSplit(arr, c){
    var res = new Array(c);
    for(var i=0;i<c;++i){
      res[i] = [];
    }
    for(var i=0;i<arr.length;++i){
      res[i%c].push(arr[i]);
    }
    return res;
  }