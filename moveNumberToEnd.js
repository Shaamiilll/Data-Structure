let array = [3, 2, 7, 9, 3, 4, 3, 2, 1, 3];

const moveNumberToEnd = function (array, number) {
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== number) {
            if (count !== i) {
                let temp = array[count];
                array[count] = array[i];
                array[i] = temp;
            }
            count++;
        }
    }

    return array;
}
const result = moveNumberToEnd(array, 3);
console.log(result);
