
function doPost(e){
  Logger = BetterLog.useSpreadsheet(ssId());
  let update = JSON.parse(e.postData.contents);
  checkRole(update);
  }
  


