
const recursiveFn = (arr, i, k) => {
    if(i >= arr.length || i<0){
        return false;
    }
    if(i==arr.length-1){
        return k==0
    }else{
        if(k<=0){
            return false;
        }
    }
    k--;
    return recursiveFn(arr, i + arr[i], k) || recursiveFn(arr, i - arr[i], k)
};


let arr = [1, 2, 3, 1, 3, 2, 1, 2];
const k = 500000

console.log(recursiveFn(arr,0,k));

