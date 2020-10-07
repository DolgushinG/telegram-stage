function sendMessage(chatId,message,keyBoard){
  Logger.log('внутри sendmessage');

  let telegramUrl = getTelegramUrl(); 
  Logger.log(telegramUrl);
  Logger.log(message);
  Logger.log(chatId);
  let payload = {
    'method': 'sendMessage',
    'chat_id': String(chatId),
    'text': message,
    'parse_mode': 'HTML',
    'reply_markup': JSON.stringify(keyBoard)
  }     
  let data = {
    "method": "post",
    "payload": payload
    
  }
  
  UrlFetchApp.fetch(telegramUrl + '/', data);
}