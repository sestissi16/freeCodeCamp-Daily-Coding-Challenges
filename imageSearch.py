def imageSearch(images, term):
    lenOfImages = len(images)
    imagesCasefold = [image.casefold() for image in images]
    termCasefold = term.casefold()
    imagesToRemove = []

    for image in images:
        if term not in image:
            imagesToRemove.append(image)

    for image in imagesToRemove:
        imageIndex = images.index(image)
        del images[imageIndex]

    return images

print(imageSearch(["dog.png", "cat.jpg", "parrot.jpeg"], "dog"))
