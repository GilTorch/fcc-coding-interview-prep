
// Symmetric Difference
// get the elements that are not present in all arrays 
// example: 

// sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 4, 5].
// sym([1, 2, 3], [5, 2, 1, 4]) should contain only three elements.
// sym([1, 2, 3, 3], [5, 2, 1, 4]) should return [3, 4, 5].
// sym([1, 2, 3, 3], [5, 2, 1, 4]) should contain only three elements.
// sym([1, 2, 3], [5, 2, 1, 4, 5]) should return [3, 4, 5].
// sym([1, 2, 3], [5, 2, 1, 4, 5]) should contain only three elements.
// sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5].
// sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should contain only three elements.
// sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5].
// sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should contain only three elements.
// sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should return [2, 3, 4, 6, 7].
// sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should contain only five elements.
// sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should return [1, 2, 4, 5, 6, 7, 8, 9].
// sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should contain only eight elements.

// input: multiple arrays. can we pass one arrray
// ouput: 1 array

function sym2(arg1,arg2){
    let result = []
    let hasBeenChecked = []
        for(let element of arg1){
            if(!arg2.includes(element) && !hasBeenChecked.includes(element)){
                hasBeenChecked.push(element)
                result.push(element)
            }
        }

        for(let newElement of arg2){
            console.log(newElement)
            if(!arg1.includes(newElement) && !hasBeenChecked.includes(newElement)){
                hasBeenChecked.push(newElement)
                result.push(newElement)
            }
        }
        console.log(result)
        return result
}

function sym(...args){

    let result = args[0]
    for(let i = 1; i < args.length; i++){
        console.log(args[i])
       result =  sym2(result,args[i])
    }
    console.log(result)
    return result
}

// console.log(sym([1,2,4]))
// console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]))
// console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) )
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) )

// -> sym(firstArg,secondArg)
    
