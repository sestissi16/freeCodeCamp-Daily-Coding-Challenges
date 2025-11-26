function countWords(sentence) {
    const wordArray = sentence.split(" ");
    var wordCount = wordArray.length
    return wordCount;
}

console.log(countWords("I have five 5 words."))