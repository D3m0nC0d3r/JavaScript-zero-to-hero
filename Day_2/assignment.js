// Create a array with 10 numbers and print only the even numbers with a loop from that array

let nums = [77,48,56,21,39,67,13,24,5,48];

for(let i=0; i<10; i++){
    if(nums[i]%2==0){
        console.log(`even nums: ${nums[i]}`);
    }
}


// Create a array with five city names and print it in reverse order
let cities = ['Mumbai', 'Pune', 'Aurangabad', 'Nashik', 'Alibag'];

for(let i = cities.length-1; i >= 0; i--){
    console.log(cities[i]);
}