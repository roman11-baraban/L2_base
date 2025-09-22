function isCircleSorted( arr ){
 if (arr.length <= 1) 
   return true;
  let c = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) c++;
  }
  if (arr[arr.length - 1] > arr[0]) c++;
  return c <= 1;
}