// Reverse-- change the order of the values in place
function reverse(arr) {
    console.log(arr)
    for(var i = 0; i < arr.length/2; i++) {
        var temp = arr[i]
        arr[i] = arr[arr.length -1 - i]
        arr[arr.length -1 -i] = temp
    }
    console.log(arr)
    return arr
}

reverse([1,2,3,4])
reverse([12, 4, 6, 9, 9])




// Rotate-- offset array values by given argument
function rotate(arr, numToOffsetBy) {
    pass
}


// Filter Range-- keep only the values between a min and max
function filterRange(arr, min, max) {
    var toRemoveCount = 0
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < min || arr[i] > max) {

            toRemoveCount += 1
            //move it to the end, then add to var count
        }
    }
    // move thing to the end
}
// Concat-- replicate JS's concat() function