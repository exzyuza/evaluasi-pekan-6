function hitungFaktorial(n) {
  if (n < 0) return null;
  let hasil = 1;
  for (let i = 1; i <= n; i++) hasil *= i;
  return hasil;
}
console.log(hitungFaktorial(5), hitungFaktorial(0), hitungFaktorial(1), hitungFaktorial(-3));

function cekPalindrom(teks) {
  if (teks.trim() === "") return false;
  const bersih = teks.trim().toLowerCase();
  let kiri = 0, kanan = bersih.length - 1;
  while (kiri < kanan) {
    if (bersih[kiri] !== bersih[kanan]) return false;
    kiri++; kanan--;
  }
  return true;
}
console.log(cekPalindrom("Katak"), cekPalindrom(" Malam "), cekPalindrom("Kopi"), cekPalindrom(""));

function hitungVokal(teks) {
  const vokal = "aiueo";
  let jumlah = 0;
  for (const huruf of teks.toLowerCase()) {
    if (vokal.includes(huruf)) jumlah++;
  }
  return jumlah;
}
console.log(hitungVokal("Kedai Senja"), hitungVokal("RHYTHM"), hitungVokal("Aiueo"));

function cariTerbesar(daftar) {
  if (daftar.length === 0) return null;
  let nilai = daftar[0], indeks = 0;
  for (let i = 1; i < daftar.length; i++) {
    if (daftar[i] > nilai) { nilai = daftar[i]; indeks = i; }
  }
  return { nilai, indeks };
}
console.log(cariTerbesar([12, 45, 7, 45, 30]));
console.log(cariTerbesar([3]));
console.log(cariTerbesar([]));

function hapusDuplikat(daftar) {
  const hasil = [];
  for (const el of daftar) {
    if (!hasil.includes(el)) hasil.push(el);
  }
  return hasil;
}
const asli = [1, 2, 2, 3, 1];
console.log(hapusDuplikat(asli), asli);
console.log(hapusDuplikat(["a", "b", "a"]));
console.log(hapusDuplikat([]));

function cekBilanganPrima(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(cekBilanganPrima(2), cekBilanganPrima(17), cekBilanganPrima(15), cekBilanganPrima(1), cekBilanganPrima(0));
//================================================================================
/*
1. hitungFaktorial(5): hasil=1, i=1 → hasil=1; i=2 → 2; i=3 → 6; i=4 → 24; i=5 → 120. Return 120.

2. hapusDuplikat tidak mengubah array asli karena hanya membaca; membuat array baru.
   Saya pakai includes untuk memeriksa keberadaan sederhana (O(n) tapi sederhana).

3. cekBilanganPrima memakai return false di dalam loop (bukan break).
   Jika return dihapus, program bisa salah (tetap menganggap prima) atau minimal lebih lambat.

4. cariTerbesar([]) → null karena tidak ada nilai; 0 akan menyesatkan (bisa jadi nilai asli).
   Dengan null, jelas bahwa tidak ada data.

5. cekPalindrom memakai while (dua pointer dari luar ke dalam).
   hapusDuplikat memakai for...of karena kita hanya perlu menelusuri semua elemen.
*/
//==================================================================================
