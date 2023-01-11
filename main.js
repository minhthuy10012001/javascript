//De quy bai toan con tho
function rabbit(value){
  if(value <= 2){
    return 1;  
  }
  return rabbit(value - 1) + rabbit(value - 2) ;

}
console.log(rabbit(4))


//Tính tổng các phần tử trong mảng
function sumArray(arr){
  let sum = 0;
  var length = arr.length
//   Cach1
  for(var i = 0; i < length; i++){
    sum += arr[i];
  }
 
//   Cach2
  for(var i in arr){
    sum += arr[i]; 
  }
  
//   Cach3
  arr.forEach(function (num) {
    sum += num;
  });

//   Cach4
  let i = 0;
  while(i < length){  
    sum += arr[i];   
    i++;
  }
  return sum;

}
var array = [1,2,6,4,8];
console.log(sumArray(array));