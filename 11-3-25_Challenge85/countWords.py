def count_words(sentence):
    wordArray = sentence.split(" ")
    wordCount = len(wordArray)
    return wordCount

print(count_words("I have five hello words."))