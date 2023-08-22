class Search{
  linear(arr,key){
    for(let idx=0;idx<arr.length;idx++){
      if(arr[idx]==key) return idx
    }
    return -1
  }
  binary(arr,key){
    let start=0
    let end=arr.length-1
    while(start<=end){
      let mid=parseInt((start+end)/2)
      if(arr[mid]==key) return mid
      else if(arr[mid]>key) end=mid-1
      else start=mid+1
    }
    return -1
  }
}

const search=new Search()
const arr=[52,12,45,687,44,14,12,36,778,95,12,36,12,16,15,17,25]
console.log(search.linear(arr,778))
const sorted_arr=[12,16,24,38,41,59,72,88,92]
console.log(search.binary(sorted_arr,59))