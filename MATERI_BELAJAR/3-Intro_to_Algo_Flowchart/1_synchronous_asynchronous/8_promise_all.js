// DESKRIPSI : demonstrasi penggunaan promise.all

// `promise.all` menjalankan seluruh asynchronous function (promise) secara bersamaan

// Create a Promise
const task1 = new Promise((resolve) => {
  setTimeout(() => resolve('Task 1 selesai'), 5000);
});

const task2 = new Promise((resolve) => {
  setTimeout(() => resolve('Task 2 selesai'), 5000);
});

const task3 = new Promise((resolve) => {
  setTimeout(() => resolve('Task 3 selesai'), 5000);
});

// Promise all
Promise.all([task1, task2, task3])
  .then(results => {
    console.log(results); // ["Task 1 selesai", "Task 2 selesai", "Task 3 selesai"]
  })
  .catch(error => {
    console.error('Error:', error);
  });

// observasi :
// kalau dijalankan secara sekuensial maka akan memakan: 3*5 = 15 detik
// tetapi kenyataannya hanya sekitar 5 detik -> dijalankan hampir bersamaan.