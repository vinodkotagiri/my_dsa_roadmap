function subArrays(arr){
  for(let i=0;i<arr.length;i++){
    for(let j=i;j<arr.length;j++){
      for(k=i;k<=j;k++){
        console.log(arr[k])
      }
      console.log('----')
    }
  }
}

const arr=[1,2,3,4,5]

console.log(subArrays(arr))