console.log('Portal BKPSDM Layout Loaded');
console.log('Portal BKPSDM v2 Part 6');
console.log('Portal BKPSDM v2 Final Assets');
document.addEventListener('DOMContentLoaded', () => { console.log('Theme loaded successfully.'); });

const API = 'GANTI_DENGAN_URL_WEB_APP';

async function cekStatus() {
    const nipInput = document.getElementById('nip').value.trim();
    const loadingDiv = document.getElementById('loading');
    const hasilDiv = document.getElementById('hasil');
    const namaTxt = document.getElementById('nama');
    const outnipTxt = document.getElementById('outnip');
    const statusTxt = document.getElementById('status');
    const catatanTxt = document.getElementById('catatan');
    const updateTxt = document.getElementById('update');
    if (!/^\d{18}$/.test(nipInput)) { alert('Format salah! NIP harus berisi tepat 18 digit angka.'); return; }
    loadingDiv.classList.remove('hidden'); hasilDiv.classList.add('hidden');
    try {
        const response = await fetch(API + '?nip=' + encodeURIComponent(nipInput));
        const data = await response.json();
        loadingDiv.classList.add('hidden'); hasilDiv.classList.remove('hidden');
        namaTxt.textContent = data.nama || '-';
        outnipTxt.textContent = nipInput;
        statusTxt.textContent = data.status_berkas || 'Diproses';
        catatanTxt.textContent = data.keterangan || '-';
        updateTxt.textContent = data.update || '-';
    } catch (error) {
        loadingDiv.classList.add('hidden');
        alert('Gagal memproses data. Silakan periksa koneksi internet atau validasi setelan URL Web App Anda.');
    }
}