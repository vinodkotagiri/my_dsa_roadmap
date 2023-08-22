// Bruteforce O(n3)
function largestSumOfSubarraysBruteForce(arr){
    let largestSum=0
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
      let currentSum=0
      for(k=i;k<=j;k++){
        currentSum+=arr[k]
      }
      largestSum=Math.max(largestSum,currentSum)
      
    }
  }
  return largestSum
}

//Prefix Sum O(n2)
function largestSumSubArrayPrefixSums(arr){
  const prefixSums=[]
  prefixSums[0]=arr[0]
  for(let i=1;i<arr.length;i++){
    prefixSums[i]=prefixSums[i-1]+arr[i]
  }

  let largestSum=0
  for(let i=0;i<arr.length;i++){
    for(let j=i;j<arr.length;j++){
      let currentSum=i>0?prefixSums[j]-prefixSums[i-1]:prefixSums[j]
      largestSum=Math.max(largestSum,currentSum)
    }
  }
  return largestSum
}

// Kadanes Algorithm O(n)
function largestSumSubArrayKadanes(arr){
  let largestSum=0
  let currentSum=0
  for(let i=0;i<arr.length;i++){
    currentSum+=arr[i]
    if(currentSum<0) currentSum=0
    largestSum=Math.max(largestSum,currentSum)
  }
  return largestSum
}


// NOTE: If array contains all negative elements, handle seperately

function largestSumSubArrayKadanesAllNeg(arr){

  //All negative
  let allNegative=true
  let largest=-Infinity
  for(const num of arr){
    if(num>0) {
      allNegative=false
    }
    largest=Math.max(largest,num)
  
  }
  if(allNegative) return largest

  let largestSum=0
  let currentSum=0
  for(let i=0;i<arr.length;i++){
    currentSum+=arr[i]
    if(currentSum<0) currentSum=0
    largestSum=Math.max(largestSum,currentSum)
  }
  return largestSum
}

const arr=[-2,3,4,-1,5,-12,6,1,3]
console.log(largestSumOfSubarraysBruteForce(arr))
console.log(largestSumSubArrayPrefixSums(arr))
console.log(largestSumSubArrayKadanes(arr))

// sepcial cases
const arr2=[1,3,-2,4,6,-13,1,2]
const arr3=[-2,-4,-5,-6,-1,-8]
console.log(largestSumSubArrayKadanesAllNeg(arr2))
console.log(largestSumSubArrayKadanesAllNeg(arr3))
