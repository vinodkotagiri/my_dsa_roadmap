function lowerbound(arr,val){
  let start=0
  let end=arr.length-1
  let ans=undefined
  while(start<=end){
    let mid=parseInt((start+end)/2)
    if(arr[mid]<=val){
      ans=arr[mid]
      start=mid+1
    }else{
      end=mid-1
    }
  }
  return ans
}

const arr=[1,1,2,3,4,6]
console.log(lowerbound(arr,5))