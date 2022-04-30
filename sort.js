const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];


function bubbleSort(array){
    const length = array.length;
    for(let i=0; i<length; i++){
        for(let j=0; j<length; j++){
            if(array[j] > array[j+1]){
                //Swap numbers
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }

  
}

console.log('initial array: '+numbers);
bubbleSort(numbers);
console.log("Bubble Sort - ")
console.log('sorted array: '+numbers);


const numbers2 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
function selectionSort(array){
    const length = array.length;
    for(let i=0; i<length; i++){
        //set current index as minimum
        let min=i;
        let temp = array[i];
        for(let j=i+1; j<length; j++){
            if(array[j] < array[min]){
                min = j;
            }
        }
        array[i] = array[min];
        array[min] = temp;
    }
    return array;
}

selectionSort(numbers2);
console.log("Selection Sort - ")
console.log('sorted array: '+numbers2);

const numbers3 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array){
    const length = array.length;
    for(let i=0; i<length; i++){
        if(array[i] < array[0]){
        //move number to the next position
        array.unshift(array.splice(i,1)[0]);
    }else{
        //find where number should go
        for(let j=1; j<i; j++){
            if(array[i] > array[j-1] && array[i] < array[j]){
                //move number to the right spot
                array.splice(j,0,array.splice(i,1)[0]);
            }
        }
    }
}
}

selectionSort(numbers3);
console.log("Insertion Sort - ")
console.log('sorted array: '+numbers3);

const numbers4 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array){
    if(array.length === 1){
        return array
    } 
//Split Array into right and left
const length = array.length;
const middle = Math.floor(length/2)
const left = array.slice(0, middle)
const right = array.slice(middle)


return merge{
    mergeSort(left),
    mergeSort(right)
}

}

function merge(left, right){
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while(leftIndex < left.length && 
        rightIndex < right.length){
            if(left[leftIndex] < right[rightIndex]){
                result.push(left[leftIndex]);
                leftIndex++;
            }else{
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }

        //console.log
        return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


const numbers5 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right){
  const len = array.length; 
  let pivot;
  let partitionIndex;

  if(left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);
    
    //sort left and right
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}
   
function partition(array, pivot, left, right){
  let pivotValue = array[pivot];
  let partitionIndex = left;

  for(let i = left; i < right; i++) {
    if(array[i] < pivotValue){
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex){
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers5, 0, numbers5.length - 1);
console.log(numbers5);