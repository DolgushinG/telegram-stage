function checkRole(update){
    let chatId = update.message.chat.id;
    let arrayAdmin = getArrayColumn('admins',2);
    let arrayUser = getArrayColumn('users',2);
    let adminValue = arrayAdmin.includes(chatId);
    let userValue = arrayUser.includes(chatId);
    Logger.log(arrayAdmin)
    Logger.log(arrayUser)
    Logger.log(adminValue)
    Logger.log(userValue)
    if (adminValue) {
      admin(update);
      return;
    } else if (userValue) {
      user(update);
      return;
    } else {
      guest(update);
    }
    }