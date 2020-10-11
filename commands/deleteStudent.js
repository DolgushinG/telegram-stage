function deleteStudent(update){
  let nameAdmin = getData(update,1,'admins');
  let namesStudent = getArrayColumn(nameAdmin,1)
  let text = getDataUpdate(update,'text');
  let arrText = separateText(text);
  let nameStudent = arrText[2];
  let numStr = namesStudent.indexOf(nameStudent)+1;
  let sheet = getSheet(nameAdmin);
  sheet.deleteRows(numStr, 1)
  var message = 'Ученик '+nameStudent +' удален';
  let chatId = getDataUpdate(update,'chatId');
  sendMessage(chatId,message);
  refreshKey(update);
}
