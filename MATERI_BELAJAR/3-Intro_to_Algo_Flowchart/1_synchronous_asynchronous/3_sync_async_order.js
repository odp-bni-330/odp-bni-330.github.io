// DESKRIPSI : Membuktikan bahwa fungsi synchronous akan dijalankan lebih dulu dari asynchronous
    // meskipun delay async. dibuat nol dan juga asynchronous baris kodenya di atas synchronous.

setTimeout(() => {      // async.
    console.log("DUAR!");
        
}, 0);

for (let i = 0;i<100;i++){  // sync.
    console.log(i);
}

// Pengamatan:
// sync. akan dijalankan dulu semua 
// Callbacks in the queue only run when the stack is empty