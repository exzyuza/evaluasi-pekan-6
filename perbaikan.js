const TARIF_PAJAK = 0.11;
const harga = { kopi: 20000, teh: 7500, roti: 15000 };
let keranjang = ["kopi", "teh", "roti", "teh"];
let jumlahMember = "5";

const pelanggan = {
  nama: "rina",
  saldo: 100000,
  bayar(jumlah) {
    // FIX: gunakan this.saldo
    this.saldo -= jumlah;
    return this.saldo;
  },
};

let subtotal = 0;
for (let i = 0; i < keranjang.length; i++) { // FIX: < bukan <=
  subtotal += harga[keranjang[i]];
}

let persen;
// FIX: urutan kondisi (cek >=50000 dulu)
if (subtotal >= 50000) persen = 10;
else if (subtotal >= 25000) persen = 5;
else persen = 0;
let diskon = (subtotal * persen) / 100;

let hari = "jumat";
let promo;
switch (hari) {
  case "jumat":
    promo = 3000;
    break; // FIX: tambah break
  case "sabtu":
  case "minggu":
    promo = 5000;
    break;
  default:
    promo = 0;
    break;
}

// FIX: kurung kurawal untuk (subtotal - diskon - promo)
let pajak = (subtotal - diskon - promo) * TARIF_PAJAK;

let total = subtotal - diskon - promo + pajak;

let uangBayarTeks = "100.000";
// FIX: hapus titik dulu sebelum parseInt
let uangBayar = parseInt(uangBayarTeks.replaceAll(".", ""));
let kembalian = uangBayar - total;

let status;
// FIX: === bukan =
if (uangBayar >= total) status = "Lunas";
else status = "Kurang";

// FIX: slice(1) bukan slice(0)
let namaRapi = pelanggan.nama.slice(0, 1).toUpperCase() + pelanggan.nama.slice(1);

// FIX: splice(1,1) bukan slice(1,1)
keranjang.splice(1, 1);
// FIX: push bukan unshift
keranjang.push("air");

// FIX: ubah jumlahMember ke Number dulu
let jumlahMemberBaru = Number(jumlahMember) + 1;

//=========================
/*
CATATAN BUG (15 kesalahan):
1. bayar: `saldo -= jumlah` → ReferenceError (saldo tidak dideklarasikan). Jenis: ERROR.
2. perulangan `i <= length` → undefined, hasil salah. Jenis: HASIL SALAH.
3. Urutan if/else if (25000 didahulukan) → diskon salah. HASIL SALAH.
4. switch case "jumat" tanpa break → promo jatuh ke 5000. HASIL SALAH.
5. `subtotal - diskon - promo * TARIF_PAJAK` → prioritas operator salah. HASIL SALAH.
6. `parseInt("100.000")` → 100, bukan 100000. HASIL SALAH.
7. `if (uangBayar = total)` → assignment, bukan perbandingan; uangBayar tertimpa. HASIL SALAH.
8. `slice(0)` pada namaRapi → "Rina" jadi "rina" (kapital hilang). HASIL SALAH.
9. `slice(1,1)` tidak menghapus apa pun; harus splice. HASIL SALAH.
10. `unshift("air")` menambah di awal; harus push. HASIL SALAH.
11. `"5" + 1` → "51" (string concat). HASIL SALAH.
12. `toFixed` menghasilkan teks; `"..." + 10` → concat. HASIL SALAH.
13. `formatRupiah` tidak return → undefined. HASIL SALAH.
14. `for...of` pada object → TypeError (harga bukan iterable). ERROR.
15. Tidak ada `break` di `case "jumat"` juga membuat promo salah untuk hari jumat
    (poin ini merujuk pada bug yang sama dengan nomor 4; jika dihitung terpisah,
    perbaikan tambahan: `let` vs `const` TARIF — tetap sama).
*/