// Fungsi untuk menangani pengiriman form
function submitSuggestionForm() {
    // Mengambil nilai dari input form
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validasi sederhana
    if (name === '' || email === '' || message === '') {
        alert('Semua kolom harus diisi!');
        return; // Hentikan eksekusi jika ada kolom yang kosong
    }

    // Validasi format email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Masukkan email yang valid!');
        return;
    }

    // Menampilkan pesan konfirmasi
    alert('Terima kasih atas saran dan masukan Anda, ' + name + '! Kami akan segera menindaklanjuti pesan Anda.');

    // Mengosongkan form setelah pengiriman
    document.getElementById('suggestion-form').reset();
}
