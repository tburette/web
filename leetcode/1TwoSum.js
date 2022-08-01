"use strict";
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j] == target) return [i, j];
        }
    }
};


var twoSum = function(nums, target) {
    // k = value, v = index
    // if multiple time the same value, keep the bigger index
    let m = new Map();
    // can't use Object.entries(nums) because it convert index into string
    for(let[index, value] of nums.entries())m.set(value, index);
    
    for(let i=0;i<nums.length;i++){
        let remainder = target-nums[i];
        if(m.has(remainder) && m.get(remainder) != i){
            return [i, m.get(remainder)];
        } 
    }
};

console.log(twoSum([3,2,4], 6));