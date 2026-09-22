let SortLib = {};

function removeUndefined(arr) {
    let numbers = [];
    let undefinedCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === undefined) {
            undefinedCount = undefinedCount + 1;
        } else {
            numbers.push(arr[i]);
        }
    }

    if (undefinedCount > 0) {
        console.log("Увага: у масиві " + undefinedCount +" undefined-елемент(ів). Вони будуть у кінці результату."
        );
    }

    return { numbers: numbers, undefinedCount: undefinedCount };
}

function addUndefinedBack(arr, count) {
    for (let i = 0; i < count; i++) {
        arr.push(undefined);
    }
}

function isBefore(a, b, ascending) {
    if (ascending) {
        return a < b;
    } else {
        return a > b;
    }
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

//Сортування обміном (бульбашкою)

SortLib.bubbleSort = function (inputArr, ascending) {
    let data = removeUndefined(inputArr);
    let arr = data.numbers;
    let comparisons = 0;
    let swaps = 0;
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            comparisons++;
            if (isBefore(arr[j + 1], arr[j], ascending)) {
                swap(arr, j, j + 1);
                swaps++;
            }
        }
    }

    addUndefinedBack(arr, data.undefinedCount);
    console.log("Сортування обміном: порівнянь = " + comparisons + ", обмінів = " + swaps);
    return arr;
};

//Сортування мінімальних елементів (вибором)

SortLib.selectionSort = function (inputArr, ascending) {
    let data = removeUndefined(inputArr);
    let arr = data.numbers;
    let comparisons = 0;
    let swaps = 0;
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let selected = i;
        for (let j = i + 1; j < n; j++) {
            comparisons++;
            if (isBefore(arr[j], arr[selected], ascending)) {
                selected = j;
            }
        }
        if (selected !== i) {
            swap(arr, i, selected);
            swaps++;
        }
    }

    addUndefinedBack(arr, data.undefinedCount);
    console.log("Сортування мінімальних елементів: порівнянь = " + comparisons + ", обмінів = " + swaps);
    return arr;
};

//Сортування вставками

SortLib.insertionSort = function (inputArr, ascending) {
    let data = removeUndefined(inputArr);
    let arr = data.numbers;
    let comparisons = 0;
    let moves = 0;
    let n = arr.length;

    for (let i = 1; i < n; i++) {
        let current = arr[i];
        let j = i - 1;

        while (j >= 0) {
            comparisons++;
            if (isBefore(current, arr[j], ascending)) {
                arr[j + 1] = arr[j]; // зсуваємо елемент праворуч
                moves++;
                j--;
            } else {
                break;
            }
        }
        arr[j + 1] = current;
    }

    addUndefinedBack(arr, data.undefinedCount);
    console.log("Сортування вставками: порівнянь = " + comparisons + ", переміщень = " + moves);
    return arr;
};

// Сортування Шелла

SortLib.shellSort = function (inputArr, ascending) {
    let data = removeUndefined(inputArr);
    let arr = data.numbers;
    let comparisons = 0;
    let moves = 0;
    let n = arr.length;

    let gap = Math.floor(n / 2);
    while (gap > 0) {
        for (let i = gap; i < n; i++) {
            let current = arr[i];
            let j = i;

            while (j >= gap) {
                comparisons++;
                if (isBefore(current, arr[j - gap], ascending)) {
                    arr[j] = arr[j - gap];
                    moves++;
                    j = j - gap;
                } else {
                    break;
                }
            }
            arr[j] = current;
        }
        gap = Math.floor(gap / 2);
    }

    addUndefinedBack(arr, data.undefinedCount);
    console.log("Сортування Шелла: порівнянь = " + comparisons + ", переміщень = " + moves);
    return arr;
};

// Сортування Хоара (швидке сортування)

SortLib.quickSort = function (inputArr, ascending) {
    let data = removeUndefined(inputArr);
    let arr = data.numbers;
    let comparisons = 0;
    let swaps = 0;

    function partition(low, high) {
        let pivot = arr[Math.floor((low + high) / 2)];
        let i = low - 1;
        let j = high + 1;

        while (true) {
            i++;
            comparisons++;
            while (isBefore(arr[i], pivot, ascending)) {
                i++;
                comparisons++;
            }

            j--;
            comparisons++;
            while (isBefore(pivot, arr[j], ascending)) {
                j--;
                comparisons++;
            }

            if (i >= j) {
                return j;
            }
            swap(arr, i, j);
            swaps++;
        }
    }

    function quickSortPart(low, high) {
        if (low < high) {
            let splitIndex = partition(low, high);
            quickSortPart(low, splitIndex);
            quickSortPart(splitIndex + 1, high);
        }
    }

    quickSortPart(0, arr.length - 1);

    addUndefinedBack(arr, data.undefinedCount);
    console.log("Швидке сортування (Хоара): порівнянь = " + comparisons + ", обмінів = " + swaps);
    return arr;
};