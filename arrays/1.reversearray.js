function reverseArr(arr){
  let start=0
  let end=arr.length-1
  while(start<end){
    swap(arr,start,end)
    start++
    end--
  }
  return arr
}
function swap(arr,i,j){
  let temp=arr[i]
  arr[i]=arr[j]
  arr[j]=temp
}


const arr=[1,2,3,4,5,6,7,8,9]

console.log(reverseArr(arr))