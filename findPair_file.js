//name: chaitli K MobileNo: 8971884344

//writing the findPair method to write the logic
function findPair(arrayInput,key){
    
    var newArray=[]
    //looping the whole input element by element
    for(var i=0;i<arrayInput.length-1;i++){
        //checking if consecutive element sum equals the key value
        if(arrayInput[i]+arrayInput[i+1]==key){
            //adding the consecutive sum pair to the new array
            newArray.push(arrayInput[i])
            newArray.push(arrayInput[i+1])
            //returning int[] array 
            return newArray
        }
    }

}
//var arrayInput=[3,9,2,5,6,7] (first test case)
//var key=11
//second testcase input and key
var arrayInput=[4,6,5,7,3,3,9,1,4]
var key=5
//storing the returned array into the variable
var result= findPair(arrayInput,key)
//printing the returned array through variables
console.log(result)