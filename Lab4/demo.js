function createDenseArray(size) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr[i] = Math.floor(Math.random() * 1000) - 500; // від -500 до 499
    }
    return arr;
}

function createSparseArray(size) {
    let arr = [];
    arr[0] = 15;
    arr[1] = -42;
    arr[2] = 7;
    arr[Math.floor(size / 2)] = 999;
    arr[size - 1] = -1;
    return arr;
}

function previewArray(arr) {
    let n = arr.length;
    if (n <= 20) {
        return JSON.stringify(arr);
    }
    let start = arr.slice(0, 10);
    let end = arr.slice(n - 10, n);
    return JSON.stringify(start) + "  ...  " + JSON.stringify(end);
}


function runAllAlgorithms(sourceArray, title) {
    console.log(title + " (довжина: " + sourceArray.length + ")");

    let methods = [
        { name: "Обмін (бульбашкою)", fn: SortLib.bubbleSort },
        { name: "Мінімальні елементи (вибір)", fn: SortLib.selectionSort },
        { name: "Вставки", fn: SortLib.insertionSort },
        { name: "Шелла", fn: SortLib.shellSort },
        { name: "Хоара (швидке)", fn: SortLib.quickSort }
    ];

    let directions = [
        { label: "за зростанням", ascending: true },
        { label: "за спаданням", ascending: false }
    ];

    for (let m = 0; m < methods.length; m++) {
        for (let d = 0; d < directions.length; d++) {
            console.log(methods[m].name + " (" + directions[d].label + ")");
            let sortedArray = methods[m].fn(sourceArray, directions[d].ascending);
            console.log("Результат: " + previewArray(sortedArray));
        }
    }
}

let denseArray = createDenseArray(100);
let sparseArray = createSparseArray(100);

runAllAlgorithms(denseArray, "1. Нерозріджений масив");
runAllAlgorithms(sparseArray, "2. Розріджений масив (з undefined)");