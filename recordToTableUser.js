function recordToTableUser(getNameAdmin,update) {
  Logger.log('recordToTableUser')
  let text = update.message.text;
  let arrayText = separateText(text);
  let nameUser = arrayText[3];
  let sheet = getSheet(getNameAdmin);
  let hash = str_rand();
  let ValueForCheck = sheet.getRange(1, 1).getValue();
  if(ValueForCheck != []){
    let arraysName = getArrayColumn(getNameAdmin,1);
    let StrForAddStudent = arraysName.length+1;
    Logger.log(StrForAddStudent)
    sheet.getRange(StrForAddStudent,1).setValue(nameUser);
    sheet.getRange(StrForAddStudent,7).setValue(hash);
    sheet.getRange(StrForAddStudent,4).setValue([new Date()]);
    sheet.getRange(StrForAddStudent,5).setValue('=EDATE(D'+StrForAddStudent+';3)');
    sheet.getRange(StrForAddStudent,6).setValue('=DATEDIF(today();E'+StrForAddStudent+';"d")');
  } else {
    Logger.log(StrForAddStudent)
    sheet.getRange(1,1).setValue(nameUser);
    sheet.getRange(1,7).setValue(hash);
    sheet.getRange(1,4).setValue([new Date()]);
    sheet.getRange(1,5).setValue('=EDATE(D'+StrForAddStudent+';3)');
    sheet.getRange(1,6).setValue('=DATEDIF(today();E'+StrForAddStudent+';"d")');
  }
  Logger.log('recordToTableUser')
}