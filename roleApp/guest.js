function guest(update){
  let text = getDataUpdate(update,'text');
  let chatId = getDataUpdate(update,'chatId');
  let firstname = getDataUpdate(update,'firstName');
  let arrayText = separateText(text);
  switch (arrayText[0]){
    case 'Зарегистрировать': addAdmin(update);//working
      break;
    case '/start':sendMessage(chatId,'Приветствую! \n'+firstname+'\n'+'Я бот для подсчета тренировок у тренера');//working
      break;
    case '/Регистрация': registrationUsers(update);
      break;
  }
}
