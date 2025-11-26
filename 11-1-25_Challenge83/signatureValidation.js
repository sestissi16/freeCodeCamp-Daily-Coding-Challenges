function verify(message, key, signature) {
    var isValid = false;
    // Indexes are the number value for each character
    const charKey = ["","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

    var messageNumCount = 0
    var keyNumCount = 0

    // calculate message value
    var splitMessage = message.split("")
    for (let i = 0 ; i < splitMessage.length ; i++){
        var numValue = charKey.indexOf(splitMessage[i])
        if (numValue == -1) {
            numValue = 0
            messageNumCount = messageNumCount + numValue
        } else {
            messageNumCount = messageNumCount + numValue
        }
    }

    // calculate key value
    var splitKey = key.split("")
    for (let i = 0 ; i < splitKey.length ; i++){
        var numValue = charKey.indexOf(splitKey[i])
        if (numValue == -1) {
            numValue = 0
            keyNumCount = keyNumCount + numValue
        } else {
            keyNumCount = keyNumCount + numValue
        }
    }

    //add values and compare with signature
    var totalNumCount = messageNumCount + keyNumCount
    isValid = (totalNumCount == signature)

    return isValid;
}

verify("abcABC!", "abc!@ ", 96)