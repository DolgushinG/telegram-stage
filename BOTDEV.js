
function doPost(e){
  Logger = BetterLog.useSpreadsheet('');
  let update = JSON.parse(e.postData.contents);
  checkRole(update);
  }
  


