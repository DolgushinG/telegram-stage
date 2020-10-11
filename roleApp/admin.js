function admin(update) {
  let text = update.message.text;
  let arrayText = separateText(text);
  let admin = true;
  let user = false;
    for(let i = 0; i < arrayText.length;i++){
    switch (arrayText[i]){
      case 'Списать': minus(update);//working
      break;
      case 'всего': total(update,admin,user);//working
      break;
      case 'Добавить': addNewUser(update);//working
      break;
      case 'Абонемент': addNewSeason(update);//working
      break;
      case 'Обновить' : refreshKey(update);//working
      break;
      case 'Удалить' : deleteStudent(update);//working
      break;
    }
  }
  
} 


