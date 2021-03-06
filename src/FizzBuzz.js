function fizzBuzz(){
    return customFizzBuzz(100, 3, 5);
}


function customFizzBuzz(targetSize, fizzValue, buzzValue, callback){
    var resultsArray = [];
    for(var i = 1; i <= targetSize; i++){

        if(fizzBuzzChecker(i, fizzValue,buzzValue) !== undefined){
            resultsArray.push(fizzBuzzChecker(i, fizzValue,buzzValue));

        } else if(fizzChecker(i, fizzValue) !== undefined){
            resultsArray.push(fizzChecker(i, fizzValue,buzzValue));

        } else if(buzzChecker(i, buzzValue) !== undefined){
            resultsArray.push(buzzChecker(i, buzzValue));

        } else {
            resultsArray.push(i);
        }

        if(callback){
            callback(resultsArray[resultsArray.length - 1], resultsArray.length - 1, resultsArray)
        }
    }
    return resultsArray;
}

function fizzBuzzChecker(value, fizzValue, buzzValue){
    if(!(value % fizzValue) && !(value % buzzValue)) return 'FizzBuzz';
}

function fizzChecker(value, fizzValue){
    if(!(value % fizzValue)) return 'Fizz';
}

function buzzChecker(value, buzzValue){
    if(!(value % buzzValue)) return 'Buzz';
}
