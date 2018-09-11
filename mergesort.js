function merge(leftArray, rightArray) {
    const leftLength = leftArray.length-1;
    const rightLength = rightArray.length-1;

    if (leftArray[leftLength] < rightArray[0]) {
        return [...leftArray, ...rightArray];
    }
    
    if (rightArray[rightLength] < leftArray[0]) {
        return [...rightArray, ...leftArray];
    }

    const result = [];
    
    let i = 0;
    let j = 0;

    while (i <= leftLength || j <= rightLength) {
        if (leftArray[i] <= rightArray[j]) {
            result.push(leftArray[i]);
            i++;
        } else {
            result.push(rightArray[j]);
            j++;
        }
    }

    return result;
}

function sort(array) {
    if (array.length <= 1) {
        return array;
    }

    const medium = Number.parseInt(array.length/2, 10);

    const left = sort(array.slice(0, medium));
    const right = sort(array.slice(medium));

    return merge(left, right);
}

const arrayToSort = [6, -2, 0, 10, 99, -58];

console.log(sort(arrayToSort));
