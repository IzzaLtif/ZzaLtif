// app.js - handle image preview & simple UX
document.addEventListener('DOMContentLoaded', function () {
  const fileInput = document.getElementById('fileInput');
  const changeBtn = document.getElementById('changeBtn');
  const previewImg = document.getElementById('previewImg');
  const descText = document.getElementById('descText');

  // klik tombol -> buka dialog file
  changeBtn.addEventListener('click', () => fileInput.click());

  // saat pilih file -> preview
  fileInput.addEventListener('change', (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      alert('Pilih file gambar (jpg/png/gif).');
      return;
    }
    const reader = new FileReader();
    reader.onload = function (ev) {
      previewImg.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  });

  // saat user selesai edit (blur), kita bisa simpan ke localStorage (opsional)
  descText.addEventListener('blur', () => {
    localStorage.setItem('imageBoxDesc', descText.innerText.trim());
  });

  // load saved description
  const saved = localStorage.getItem('imageBoxDesc');
  if (saved) descText.innerText = saved;
});
