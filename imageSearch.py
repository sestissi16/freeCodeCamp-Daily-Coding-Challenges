def imageSearch(images, term):
    lenOfImages = len(images)
    imagesCasefold = [image.casefold() for image in images]
    termCasefold = term.casefold()
    imagesToRemove = []

    # determine if term is in images using casefold to make search case insensitive
    for image in imagesCasefold:
        if term not in image:
            # indexes in images and imagesCasefold should match
            # so I can use the the current index to grab the exact image name that I'm going to remove next
            imageIndex = imagesCasefold.index(image)
            imagesToRemove.append(images[imageIndex])

    # removes the images that don't match the term
    for image in imagesToRemove:
        imageIndex = images.index(image)
        del images[imageIndex]

    return images

print(imageSearch(["Sunset.jpg", "Beach.png", "sunflower.jpeg"], "sun"))
