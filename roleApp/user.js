function user(update) {
  let text = getDataUpdate(update,'text');
  let chatId = getDataUpdate(update,'chatId');
  let arrayText = separateText(text);
  let admin = false;
  let user = true;
  for(let i = 0; i < arrayText.length;i++){
    switch (arrayText[i]){
      case 'всего': total(update,admin,user);//working
      break;
    }
  }
  if(arrayText[1]!== 'всего'){
  sendMessage(chatId,'Неизвестная команда');
  }
  
  
}

