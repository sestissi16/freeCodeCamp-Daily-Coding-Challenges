function imageSearch(images, term) {
  var lenOfImages = images.length;
  var imagesToRemove = [];

//   First for loop checks for matches and saves the ones that don't match to a separate array

  for (let i = 0; i < lenOfImages ; i++){
    let currentImage = images[i];
// the regular expresions allows for more complex search methods and lets me be case insenstive
    let regExSearch = new RegExp(term, "gi")
    var matchArr = currentImage.match(regExSearch)
    // match returns null if it doesn't match so I push it to the separate array
    if (matchArr == null) {
      imagesToRemove.push(currentImage)
    }
  }

  var lenofRemoval = imagesToRemove.length;

//   Second for loop finds the index of the image to remove and removes it
// Not doing it this way makes the for loop above break because the length of the images array would change if 
// I took it out right then
// There's probably a way to condense this but I'm not sure
  for(let i=0; i < lenofRemoval; i++){
    var itemToRemove = imagesToRemove[i];
    var index = images.indexOf(itemToRemove);
    if (index !== -1) {
        images.splice(index, 1);
    }
  }

  return images;
}

imageSearch(["dog.png", "cat.jpg", "parrot.jpeg"], "dog")