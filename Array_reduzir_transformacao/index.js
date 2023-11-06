const reduce = (nums, fn, init) => {    
    if (nums.length === 0) {
      console.log(`O valor inicial é: ${init}.`);
    } else {
        let tot = 0;
        for (let val = 0; val < nums.length; val++) {
            tot += fn(init, nums[val]);
        };
        console.log(`O valor final é: ${tot}.`);
    };
};
reduce([1,2,3,4], fn = (sum, atual) => sum + atual, 0);