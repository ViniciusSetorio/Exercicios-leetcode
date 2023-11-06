const list = (nums, target) => {
    nums = [7, 11, 15, 2]
    target = 9
    for (let a = 0; a < nums.length; a++) {
        for (let b = a + 1; b < nums.length; b++) {
            if (nums[a] + nums[b] == target) {
                console.log([a, b])
            }
        }
    }
}

list()