const form = document.getElementById('registrationForm');
const message = document.getElementById('message');

form.addEventListener('submit',
 (event) => {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;


    // Validasi
    if (password !== confirmPassword) {
        message.textContent = 'Password tidak cocok';
        return;
    }

    if (password.length < 8) {
        message.textContent = 'Password harus minimal 8 karakter';
        return;
    }

    // Jika validasi berhasil, tampilkan pesan sukses
    message.textContent = 'Pendaftaran Berhasil';
    // Di sini Anda bisa menambahkan logika untuk mengirimkan data ke server
});