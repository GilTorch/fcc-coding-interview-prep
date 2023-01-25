
function updateInventory(arr1, arr2) {

    // check if array 1 contains elements of arr2 
    // if yes -> update quantity of element in array1
    // if not -> add new item in array 1
    // sort alphabetically

    const currentInventory = arr1
    const freshDelivery = arr2 

    let currentInventoryItemNames = currentInventory.map(item => item[1])
    currentInventoryItemNames = currentInventoryItemNames.sort()

    for(let freshItem of freshDelivery){
        let freshItemName = freshItem[1]
        if(currentInventoryItemNames.includes(freshItemName)){
            let positionOfItem = currentInventoryItemNames.findIndex((element) => element == freshItemName)
            if(positionOfItem > - 1){
                currentInventory[positionOfItem][0] += freshItem[0]
            }
        }else{
            currentInventoryItemNames.push(freshItem[1])
            currentInventory.push(freshItem)
            currentInventoryItemNames = currentInventoryItemNames.sort()
        }
    }

    let sortedInventory = currentInventoryItemNames 

    for(let i = 0; i < sortedInventory.length; i++){
        let item = currentInventory.find(item => item[1] === sortedInventory[i])
        if(item){
            sortedInventory[i] = item
        }
    }

    return sortedInventory;
}

updateInventory(
    [
        [21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], 
        [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]
    ]
)
// updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].
// updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []) should return [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]].
// updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) should return [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].
// updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]) should return [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]].`