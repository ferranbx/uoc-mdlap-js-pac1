const rectangleArea = (candidate) => {

    // AVOID EMPTY INPUT
    if(!candidate) { return Error('Empty input') };

    // FORMAT INPUT
    // Transform input into a bidimensional Array
    candidate = candidate.map(vertex => {
        const regex = /[-+]?(\d*\.\d+|\d+)/g;
        let v = vertex.match(regex).map(coordinate => Number(coordinate));
        return v;
    });

    // QUADRILATERAL
    // Shall be an array of 4 numbers
    if(!isValidQuadrilateral(candidate)) { return Error('Not a quadrilater') };    

    // RECTANGLE
    // Shall have 90 degrees angles
    // Therefore, the distance from any vertex to the other 3 shall comply with pythagoras theorem
    let distances = candidate.map(vertex => distanceBetweenVertex(candidate[0],vertex)).sort();    
    if(pythagoras(distances[1],distances[2]) !== distances[3]) { return Error('Not a rectangle') };
    
    // COMPUTE AREA
    return distances[1]*distances[2];

};

const isValidVertex = (candidate) => {

    // Vertex shall be an array of 2 numbers
    if(Array.isArray(candidate) && candidate.length === 2 && candidate.every(coordinate => typeof coordinate === "number")) {
        return true;
    } else {
        return false;
    };

};

const isValidQuadrilateral = (candidate) => {

    // Rectangle shall be an array of 4 numbers
    if(Array.isArray(candidate) && candidate.length === 4 && candidate.every(vertex => isValidVertex(vertex))) {
        return true;
    } else {
        return false;
    };

};

const pythagoras = (cathetus1,cathetus2) => {
    return Math.sqrt(Math.pow(cathetus1, 2) + Math.pow(cathetus2, 2));
}

const distanceBetweenVertex = (A, B) => {

    // Validate inputs are arrays of 2 numbers
    if(!isValidVertex(A) || !isValidVertex(B)) { return false };

    // Use pythagoras theorem to compute the distance between two points
    return pythagoras(A[0] - B[0],A[1] - B[1]);

};

export default rectangleArea;