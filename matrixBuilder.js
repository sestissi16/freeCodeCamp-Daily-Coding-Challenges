function buildMatrix(rows, cols) {
    var newMatrix = new Array(rows);
    
    for (let i=0; i < newMatrix.length; i++ ){
        newMatrix[i] = new Array(cols).fill(0)
    }

    return newMatrix;
}

buildMatrix(4, 2)