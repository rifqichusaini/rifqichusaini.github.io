// Mendapatkan semua elemen input PIN
const pinInputs = document.querySelectorAll('.pin-number-input');
const errorElement = document.querySelector('.pin-input-error'); // Elemen pesan error

// Fungsi untuk memindahkan fokus saat input terisi
function handleInput(event) {
    const input = event.target;
    const nextInput = input.nextElementSibling;

    // Hanya izinkan angka sebagai input, hapus karakter selain angka
    if (/\D/.test(input.value)) {
        input.value = ''; // Hapus karakter non-angka
        errorElement.textContent = 'PIN hanya boleh berisi angka.';
        errorElement.style.display = 'block';
    } else {
        errorElement.style.display = 'none';
    }

    // Pindah ke input berikutnya jika sudah terisi
    if (input.value && nextInput && nextInput.classList.contains('pin-number-input')) {
        nextInput.focus();
    }

    checkPin();
}

// Fungsi untuk pindah ke input sebelumnya saat backspace ditekan pada input yang kosong
function handleBackspace(event) {
    const input = event.target;
    const prevInput = input.previousElementSibling;

    // Pindah ke input sebelumnya jika backspace ditekan dan input kosong
    if (event.key === "Backspace" && !input.value && prevInput) {
        prevInput.focus();
    }
}

// Fungsi untuk menampilkan pesan error jika PIN salah
function checkPin() {
    // Menggabungkan nilai dari setiap input menjadi satu string
    const pin = Array.from(pinInputs).map(input => input.value).join('');

    // Jika panjang PIN sudah 8, cek apakah PIN sesuai
    if (pin.length === 8) {
        if (pin === '04122005') {
            // Pindah ke halaman 'home.html' jika PIN benar
            window.location.href = 'main-home.html';
        } else {
            // Tampilkan pesan jika PIN salah
            errorElement.textContent = 'PIN salah, silakan coba lagi.';
            errorElement.style.display = 'block';
        }
    }
}

// Menyembunyikan elemen error di awal
errorElement.style.display = 'none';

// Menambahkan event listener untuk setiap input
pinInputs.forEach(input => {
    input.addEventListener('input', handleInput);
    input.addEventListener('keydown', handleBackspace); // Tambahkan listener untuk backspace
});
