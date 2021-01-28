//name: chaitli K phoneNum: 8971884344
//writing a function to write the logic
function printOccurence(stringInput){

    //declare a new string var
    var newString=""
    //looping the characters of a string
    for(var i=0;i<stringInput.length;i++){
        //condition checking every character and passing unique value to new string
        if(!newString.includes(stringInput.charAt(i))){
            //concatinating and storing sequence of characters to new string
            newString+=stringInput.charAt(i)
        }
    }
    //printing the new array
    console.log(newString)
}
//first test case
//var stringInput="aasdvasvavda"
//second test case
var stringInput="sajhags"
//calling the function
printOccurence(stringInput)