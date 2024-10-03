function findMissingValue(arr) {
    arr.sort((a,b) => a - b);
    const n = arr[arr.length - 1] - arr[0] + 1;
    const a = arr[0];
    const un = arr[arr.length - 1]
    const Sn = ((n/2)*(a+un))

    const sum = arr.reduce((akumulasi ,a) => akumulasi+a, 0)
    return -(sum - Sn);
}

const arr = [1000,1001,1002,1004,1005]
console.info('arr 1 = ' + arr)
console.info('Nilai yang hilang array 1 = '+ findMissingValue(arr))
const arr2 = [3, 0, 2, 4]
console.info('arr 1 = ' + arr2)
console.info('Nilai yang hilang array 2 = '+ findMissingValue(arr2))
const arr3 = [ 3106, 3102, 3104, 3105, 3107]
console.info('arr 1 = ' + arr3)
console.info('Nilai yang hilang array 3 = '+ findMissingValue(arr3))

