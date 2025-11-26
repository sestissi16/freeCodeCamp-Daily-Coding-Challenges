def verify(message, key, signature):
    isValid = False
    charKey = ["","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

    messageNumCount = 0
    keyNumCount = 0

    messageSplit = [char for char in message]
    keySplit = [char for char in key]

    for char in messageSplit:
        numValue = charKey.index(char) if char in charKey else 0
        messageNumCount = messageNumCount + numValue

    for char in keySplit:
        numValue = charKey.index(char) if char in charKey else 0
        keyNumCount = keyNumCount + numValue

    totalNumCount = messageNumCount + keyNumCount
    isValid = totalNumCount == signature

    return isValid

verify("abcABC!", "abc", 95)