// // add value to fron of array
// function pushFront(arr, val) {

//     arr[arr.length] = val
//     console.log(arr)
//     var temp = arr[1]
//     var temp2 = arr[0]
//     for (var i = 0; i< arr.length-1 && temp2 != undefined; i++) {
//         arr[i+1]= temp2
//         temp2 = temp
//         temp = arr[i+2]
//         console.log(arr)
//         console.log(temp, temp2)
//     }
//     arr[0] = temp2
//     console.log(arr)
//     return(arr[0])

// }

// console.log(pushFront([1,2,3,4], 24))




// // remove the first value from an array
// function popFront(arr) {
//     var capturedVal = arr[0]
//     console.log(arr)

//     for (var i = 1; i < arr.length; i++) {
//         arr[i-1] = arr[i]
//     }

//     arr.pop()
//     console.log(arr)

//     return capturedVal
// }

// console.log(popFront([1,2,3,4]))



// there is a bug to fix in the first conditional. Loosing one value
// insert new value into array at given index
function insertAt(arr, val, placeToAdd) {

    // arr[arr.length] = val
    console.log(arr)
    var temp = arr[placeToAdd+2]
    var temp2 = arr[placeToAdd+1]
    var finalVal = arr[arr.length - 1]

    for (var i = 0; i <= arr.length && temp2 != undefined; i++) {
        if(i == placeToAdd) {
            temp = temp2
            // temp2 = arr[i+2]
            temp2 = arr[i]
            arr[i+1] = arr[i]
            // arr[i+2] = temp2
            arr[i] = val

            console.log("add here")
        }
        if(i == arr.length-1) {
            arr[arr.length] = finalVal
            console.log("it's the last")
        }
        if(i > placeToAdd) {
            arr[i+1]= temp2
            temp2 = temp
            temp = arr[i+2]
            console.log("what happens after")
        }
        console.log(arr)

    }
}

insertAt([1,2,3,4,5,6,7,8,9,10], 29, 2)






