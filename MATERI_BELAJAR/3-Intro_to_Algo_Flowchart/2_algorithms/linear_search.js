// Array harus diurutkan terlebih dahulu
arr = [1, 2, 3, 4, 5, 6, 7].sort((a, b) => a - b);

let left_idx = 0;
let right_idx = arr.length - 1;
let value_to_search_idx = -1;

const value_to_search = 6; // Nilai yang dicari, bukan index

while (left_idx <= right_idx) {
    let mid = Math.floor((left_idx + right_idx) / 2);
    console.log(mid);
    
    if (arr[mid] === value_to_search) {
        value_to_search_idx = mid;
        break;
    } else if (arr[mid] < value_to_search) {
        left_idx = mid + 1;
    } else {
        right_idx = mid - 1;
    }
}

console.log("Left index:", left_idx);
console.log("Right index:", right_idx);

if (value_to_search_idx !== -1) {
    console.log("Value found at index:", value_to_search_idx);
} else {
    console.log("Value not found in the array");
}