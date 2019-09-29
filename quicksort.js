function makePartitionAndSort(array, startIndex, endIndex) {
    const pivot = array[startIndex];
    let i = startIndex - 1;
    let j = endIndex + 1;

    while (true) {
        do {
            i++;
        } 
        while (array[i] < pivot);

        do {
            j--;
        } 
        while (array[j] > pivot);

        if (i >= j) {
            return j;
        }

        [array[i], array[j]] = [array[j], array[i]];
    }
}

function quicksort(array, startIndex, endIndex) {
    if (startIndex < endIndex) {
        partitionIndex = makePartitionAndSort(array, startIndex, endIndex);
        quicksort(array, startIndex, partitionIndex);
        quicksort(array, partitionIndex + 1, endIndex);
    }

    return array;
}

function sort(array) {
    if (!array) {
        throw new Error('Empty array');
    }

    if (array.length === 1) {
        return array;
    }

    return quicksort(array, 0, array.length - 1);
}

const array = [6, -2, 0, 10, 99, -58];

console.log(sort(array));
