function getDataUpdate(update,value){
  let array = {
    'text': update.message.text,
    'chatId': update.message.chat.id,
    'firstName': update.message.chat.first_name
  }
  let newvalue = array[value];
  return newvalue;
}
