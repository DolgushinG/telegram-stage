function sendMessage(chatId,message,keyBoard){
  let telegramUrl = getTelegramUrl();
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