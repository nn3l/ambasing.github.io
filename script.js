let jumlahClick = 0;

document.querySelector(".no").addEventListener("click", function () {
  let noUkuran = document.querySelector(".no");
  jumlahClick++;

  let krngiUkuran = noUkuran.offsetWidth;
  let ukranBaru = krngiUkuran * 0.5;

  // animasi serta pengurangan ukuran button no
  noUkuran.style.width = ukranBaru + "px";
  noUkuran.style.transition = "width 0.5s ease";

  // Mengatur perubahan ukuran fontSize, padding, dan borderRadius
  let currentFontSize = parseInt(window.getComputedStyle(noUkuran).fontSize);
  let currentPadding = parseInt(window.getComputedStyle(noUkuran).padding);
  let currentBorderRadius = parseInt(
    window.getComputedStyle(noUkuran).borderRadius
  );

  let newFontSize = currentFontSize * 0.9; // Misalnya, mengurangi 10% dari ukuran sebelumnya
  let newPadding = currentPadding * 0.9;
  let newBorderRadius = currentBorderRadius * 0.9;

  noUkuran.style.fontSize = newFontSize + "px";
  noUkuran.style.padding = newPadding + "px";
  noUkuran.style.borderRadius = newBorderRadius + "px";

  if (jumlahClick >= 7) {
    noUkuran.style.opacity = "0";
    noUkuran.style.display = "none";
  }

  if (jumlahClick === 1) {
    // Mengganti gambar 'sedih' dengan gambar 'sad-2'
    document.querySelector(".p1").remove();
    document.querySelector(".sedih").style.display = "none";
    document.querySelector("#sad-2").style.display = "block";
    document.querySelector("#sad-2").style.width = "300px";
    document.querySelector(".p2").style.display = "block";
  } else if (jumlahClick === 2) {
    // Mengganti gambar 'sad-2' dengan gambar 'sad-3'
    document.querySelector(".p2").remove();
    document.querySelector("#sad-2").style.display = "none";
    document.querySelector("#sad-3").style.display = "block";
    document.querySelector("#sad-3").style.width = "250px";
    document.querySelector(".p3").style.display = "block";
  } else if (jumlahClick === 3) {
    document.querySelector(".p3").remove();
    document.querySelector("#sad-3").style.display = "none";
    document.querySelector("#sad-4").style.display = "block";
    document.querySelector("#sad-4").style.width = "30%";
    document.querySelector("#sad-4").style.height = '400px'
    document.querySelector(".p4").style.display = "block";
  } else if (jumlahClick === 4) {
    document.querySelector(".p4").remove();
    document.querySelector("#sad-4").style.display = "none";
    document.querySelector("#sad-5").style.display = "block";
    document.querySelector("#sad-5").style.width = "300px";
    document.querySelector(".p5").style.display = "block";
  } else {
    console.log("Anda sudah mengklik tombol No sebanyak 2 kali.");
  }
});

document.querySelector(".yes").addEventListener("click", function () {
  document.querySelector("body").style.background = "rgb(219, 22, 226)";
  let p1Element = document.querySelector(".p1");
  if (p1Element) {
    p1Element.remove();
  }
  let p2Element = document.querySelector(".p2");
  if (p2Element) {
    p2Element.remove();
  }
  let p3Element = document.querySelector(".p3");
  if (p3Element) {
    p3Element.remove();
  }
  let p4Element = document.querySelector(".p4");
  if (p4Element) {
    p4Element.remove();
  }
  let p5Element = document.querySelector(".p5");
  if (p5Element) {
    p5Element.remove();
  }
  document.querySelector(".sedih").style.display = "none"; // Sembunyikan gambar 'sedih'
  document.querySelector("#sad-2").style.display = "none"; // Sembunyikan gambar 'sad-2'
  document.querySelector("#sad-3").style.display = "none"; // Sembunyikan gambar 'sad-3'
  document.querySelector("#sad-4").style.display = "none"; // Sembunyikan gambar 'sad-4'
  document.querySelector("#sad-5").style.display = "none"; // Sembunyikan gambar 'sad-5'
  document.querySelector("#happy-1").style.display = "block"; // Tampilkan gambar 'happy-1'

  // Mengubah lebar gambar dengan sumber "images.jpeg" menjadi 200 piksel
  document.querySelector("#happy-1").style.width = "300px";
  document.querySelector("#happy-1").style.marginTop = "100px";

  document.querySelector(".no").remove(); // Menambahkan tanda kurung untuk memanggil metode remove()
  document.querySelector(".yes").remove(); // Menambahkan tanda kurung untuk memanggil metode remove()

  document.getElementById("pesan-diterima").style.display = "block"; //menambahkan pesan 'hahaha makasih' ketika mengclick button yes
  document.getElementById("pesan-diterima").style.marginTop = "20px";
});
