//your code here
// what to pass in array?
// function majority(){ // Moore's voting algo
// 	let max = 0, count=0;
// 	for(let i=0; i<nums.length; i++){
// 		if(count == 0) max = nums[i]; //  2,
// 		if(nums[i] == max) count++; // 1,
// 		else count--;
// 	}
// 	// return max;
// 	console.log(max);
// }
// majority();

function majorityElementChecker(arr)
{
	let map = new Map();
	for(let i = 0; i < arr.length; i++) {
		if (map.has(arr[i])) {
			let count = map.get(arr[i]) +1;
			if (count > arr.length /2) {
				document.write("Majority found :- " + arr[i]);
				return;
			} else
				map.set(arr[i], count);
		}
		else
			map.set(arr[i],1);
	}
	document.write(" No Majority element");
}
let arr = [2,1,2];
majorityElementChecker(arr);
