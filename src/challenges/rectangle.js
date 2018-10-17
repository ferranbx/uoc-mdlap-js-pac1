const rectangleArea = (rectangle) => {
    rectangle = validRectangle(rectangle);
    if(!rectangle) { return Error('Not a rectangle') };
    const distances = distanceToFirstPoint(rectangle).sort();
    return distances[1] * distances[2];
}

const validRectangle = (rectangle) => {
    rectangle = validQuadrilateral(rectangle);
    if(!rectangle) { return false };
    const distances = distanceToFirstPoint(rectangle).sort();
    if(distanceBetweenTwoPoints([ 0,0 ], [ distances[1],distances[2] ]) !== distances[3] ) { return false }
    return rectangle;
}

const distanceToFirstPoint = (quadrilateral) => {
    quadrilateral = validQuadrilateral(quadrilateral);
    if(!quadrilateral) { return false }
    const firstPoint = quadrilateral[0];
    return quadrilateral.map(point => distanceBetweenTwoPoints(firstPoint, point));
}

const distanceBetweenTwoPoints = (A,B) => {
    if(!validPoint(A) || !validPoint(B)) { return false }
    return Math.sqrt(Math.pow(A[0] - B[0], 2) + Math.pow(A[1] - B[1], 2));
}

const validQuadrilateral = (quadrilateral) => {
    if(!quadrilateral || quadrilateral.length !== 4) { return false }
    return quadrilateral.map(point => validPoint(point));
}

const validPoint = (point) => {
    if(point.length === 2) { return point };
    const regex = /\d+/g;
    return point.match(regex).map(coordinate => Number(coordinate));
}

export default rectangleArea;