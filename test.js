const traverseDFS = (arr, k) => {
    let queue = [];
    n = arr.length;
    queue.push({ i: 0, k })
    while (queue.length > 0) {
        let { i, k } = queue.pop();
        console.log({ i, k })
        if(i==n-1 & k==0){
            return true
        }
        if(k<=0){
            continue;
        }
        if (i + arr[i] < n) {
            queue.push({i:i + arr[i],k:k-1})
        }
        if (i - arr[i] >= 0) {
            queue.push({i:i - arr[i],k:k-1})
        }
    }
    return false
};

let arr = [1, 2, 3, 1, 3, 2, 1, 2];
const k = 5
console.log(traverseDFS(arr,k))