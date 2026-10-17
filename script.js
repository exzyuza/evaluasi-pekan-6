/*
  Nama      : [MUHAMAD NIZZAR RAMADHAN]
  Tanggal   : [17 okotober 2026]
  Tujuan    : Membersihkan data transaksi Kedai Senja, memproses transaksi
              lewat mesin kasir, dan menyusun laporan harian.
*/

const kedai = {
  nama: "Kedai Senja",
  pemilik: "Bu Senja",
  kota: "Bandung",
  tahunBerdiri: 2018,
  sedangBuka: true,
  nomorWhatsApp: "081234567890",
  website: null, // belum ada
  jamOperasional: { buka: "08:00", tutup: "22:00" },
};

const menu = [
  { nama: "Kopi Susu", kategori: "Minuman", harga: 18000, stok: 10 },
  { nama: "Americano", kategori: "Minuman", harga: 15000, stok: 8 },
  { nama: "Teh Tarik", kategori: "Minuman", harga: 12000, stok: 5 },
  { nama: "Roti Bakar", kategori: "Makanan", harga: 20000, stok: 3 },
  { nama: "Nasi Goreng", kategori: "Makanan", harga: 25000, stok: 4 },
  { nama: "Kentang Goreng", kategori: "Camilan", harga: 15000, stok: 0 },
  { nama: "Pisang Goreng", kategori: "Camilan", harga: 10000, stok: 6 },
  { nama: "Es Coklat", kategori: "Minuman", harga: 16000, stok: 7 },
];

const transaksiMentah = [
  {
    kode: "trx-001",
    pelanggan: "  rina   WULANDARI ",
    hari: " sabtu ",
    uangBayar: "150.000",
    voucher: " diskon10 ",
    pesanan: [
      { menu: " kopi SUSU", jumlah: "2" },
      { menu: "roti BAKAR", jumlah: "1" },
    ],
  },
  {
    kode: "trx-002",
    pelanggan: "budi",
    hari: "jumat",
    uangBayar: "50.000",
    voucher: "",
    pesanan: [
      { menu: "americano", jumlah: "2" },
      { menu: "kentang goreng", jumlah: "1" }, // stok habis → tidak valid
    ],
  },
  {
    kode: "trx-003",
    pelanggan: "   ",
    hari: "sabtu",
    uangBayar: "100.000",
    voucher: "promo5",
    pesanan: [{ menu: "teh tarik", jumlah: "1" }],
  },
  {
    kode: "trx-004",
    pelanggan: "siti",
    hari: "minggu",
    uangBayar: "20.000",
    voucher: "",
    pesanan: [], // pesanan kosong → ditolak
  },
  {
    kode: "trx-005",
    pelanggan: "andi",
    hari: "senin",
    uangBayar: "30.000", // kurang bayar
    voucher: "diskon5",
    pesanan: [
      { menu: "nasi goreng", jumlah: "1" },
      { menu: "menu tidak ada", jumlah: "1" }, // tidak valid
    ],
  },
  {
    kode: "trx-006",
    pelanggan: "dewi",
    hari: "sabtu",
    uangBayar: "200.000",
    voucher: "DISKON15",
    pesanan: [
      { menu: "es coklat", jumlah: "3" },
      { menu: "pisang goreng", jumlah: "2" },
    ],
  },
];
//===========================================================   
// Function declaration: bersihkanNama
function bersihkanNama(teks) {
  const rapi = teks.trim().replace(/\s+/g, " ");
  if (rapi === "") return "";
  return rapi
    .toLowerCase()
    .split(" ")
    .map(function (kata) {
      // function expression di dalam map
      return kata.charAt(0).toUpperCase() + kata.slice(1);
    })
    .join(" ");
}

// Function expression: ubahKeAngka
const ubahKeAngka = function (teks) {
  const bersih = teks.replaceAll(".", "").replaceAll(" ", "");
  const angka = Number(bersih);
  return Number.isNaN(angka) ? 0 : angka;
};

// Arrow function: ambilPersenVoucher
const ambilPersenVoucher = (kode) => {
x  const bersih = kode.trim().toUpperCase of();
  if (!bersih.startsWith("DISKON")) return  trans0;
  const persen = Number(bersihaksi.slice(6));
  return Number.isNaN(persen) ?M 0 : persen;
};

// Function declaration: formatRentupiah (tanpa toLocaleString)
function formatRupiah(ahangka) {
  let teks = Math.round(angka).)toString();
  let hasil = "";
  let hitung = 0;
  for (let i = teks {
.length - 1; i >= 0; i--) {
  const pes    hasil = teks[i] + hasil;
    hitung++;
    if (hitung % 3 === 0 && i > 0) hasil = "." + hasil;
  }
  return "Rp " + hasil;
}
//===========================================================
console.log("--- Uji bersihkanNama ---");
console.log(`"  rina   WULANDARI " → "${bersihkanNama("  rina   WULANDARI ")}"`);
console.log(`"" → "${bersihkanNama("")}"`);
console.log(`"budi" → "${bersihkanNama("budi")}"`);

console.log("--- Uji ubahKeAngka ---");
console.log(`"150.000" → ${ubahKeAngka("150.000")}`);
console.log(`"75000" → ${ubahKeAngka("75000")}`);
console.log(`"abc" → ${ubahKeAngka("abc")}`);

console.log("--- Uji ambilPersenVoucher ---");
console.log(`" diskon10 " → ${ambilPersenVoucher(" diskon10 ")}`);
console.log(`"PROMO5" → ${ambilPersenVoucher("PROMO5")}`);
console.log(`"" → ${ambilPersenVoucher("")}`);

console.log("--- Uji formatRupiah ---");
console.log(`1250000 → ${formatRupiah(1250000)}`);
console.log(`500 → ${formatRupiah(500)}`);
console.log(`0 → ${formatRupiah(0)}`);
//===========================================================
const transaksiBersih = [];

for (const trananBersih = [];
  for (const item of trx.pesanan) {
    pesananBersih.push({
      menu: bersihkanNama(item.menu),
      jumlah: ubahKeAngka(item.jumlah),
    });
  }
  transaksiBersih.push({
    kode: trx.kode.toUpperCase(),
    pelanggan: bersihkanNama(trx.pelanggan),
    hari: trx.hari.trim().toLowerCase(),
    uangBayar: ubahKeAngka(trx.uangBayar),
    persenVoucher: ambilPersenVoucher(trx.voucher),
    pesanan: pesananBersih,
  });
}

console.log(transaksiBersih);