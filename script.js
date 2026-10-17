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

for (const trx of transaksi) {
  const pesananBersih = [];
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
//===========================================================
/*
1. parseInt mengubah teks menjadi bilangan bulat (berhenti di titik/koma pertama).
   parseFloat mengubah teks menjadi bilangan desimal. Number mengubah seluruh teks
   menjadi angka dan null jika tidak valid. ubahKeAngka harus menghapus titik dulu
   karena parseInt("150.000") = 150 (berhenti di titik), bukan 150000.

2. toFixed mengembalikan TEKS. Bukti: typeof (5).toFixed(1) === "string".
   Akibatnya (5).toFixed(1) + 1 = "5.01" (penggabungan teks), bukan 6.1.

3. replace mengganti kemunculan pertama saja, replaceAll mengganti semua.
   Di ubahKeAngka saya pakai replaceAll(".", "") agar semua titik ribuan hilang,
   bukan hanya titik pertama.

4. kode.toUpperCase() mengembalikan string BARU; string di JavaScript immutable.
   Variabel kode asli tidak diubah karena method tidak memodifikasi nilai aslinya.

5. bersihkanNama = function declaration, agar bisa dipanggil di mana saja (hoisting).
   ubahKeAngka = function expression, karena saya ingin mendefinisikan sebagai nilai variabel.
   ambilPersenVoucher = arrow function, karena singkat dan tidak butuh this.
*/
//===========================================================
const TARGET_KAS = 10000000; // besar dulu supaya semua diproses

const kasir = {
  menu: menu,
  saldoKas: 0,
  riwayat: [],
  pecahan: [50000, 20000, 10000, 5000, 2000, 1000],

  cariMenu(nama) {
    for (const item of this.menu) {
      if (item.nama === nama) return item;
    }
    return null;
  },

  hitungSubtotal(pesanan) {
    let subtotal = 0;
    const itemValid = [];
    const itemTidakValid = [];

    for (const item of pesanan) {
      const found = this.cariMenu(item.menu);
      if (!found) {
        itemTidakValid.push({ menu: item.menu, alasan: "Menu tidak ditemukan" });
        continue;
      }
      if (item.jumlah <= 0) {
        itemTidakValid.push({ menu: item.menu, alasan: "Jumlah tidak valid" });
        continue;
      }
      if (found.stok < item.jumlah) {
        itemTidakValid.push({ menu: item.menu, alasan: "Stok tidak cukup" });
        continue;
      }
      subtotal += found.harga * item.jumlah;
      itemValid.push({ menu: item.menu, jumlah: item.jumlah, harga: found.harga });
    }

    return { subtotal, itemValid, itemTidakValid };
  },

  hitungPromoHari(hari) {
    let promo = 0;
    switch (hari) {
      case "jumat":
        promo = 3000;
        break;
      case "sabtu":
      case "minggu":
        promo = 5000;
        break;
      default:
        promo = 0;
        break;
    }
    return promo;
  },

  hitungDiskon(subtotal, persenVoucher) {
    let persenSubtotal;
    if (subtotal >= 100000) persenSubtotal = 15;
    else if (subtotal >= 50000) persenSubtotal = 10;
    else if (subtotal >= 25000) persenSubtotal = 5;
    else persenSubtotal = 0;

    const persen = Math.max(persenSubtotal, persenVoucher);
    return Math.round((subtotal * persen) / 100);
  },

  hitungPajak(nilai, tarif = 0.11) {
    return Math.round(nilai * tarif);
  },

  hitungKembalianPecahan(kembalian) {
    if (kembalian < 0) return null;
    const hasil = {};
    let sisa = kembalian;
    for (const nilai of this.pecahan) {
      let lembar = 0;
      while (sisa >= nilai) {
        sisa -= nilai;
        lembar++;
      }
      if (lembar > 0) hasil[nilai] = lembar;
    }
    hasil.sisa = sisa;
    return hasil;
  },

  prosesTransaksi(trx) {
    if (!trx.pelanggan) {
      const hasil = { kode: trx.kode, pelanggan: trx.pelanggan, status: "DITOLAK", alasan: "Nama pelanggan kosong" };
      this.riwayat.push(hasil);
      return hasil;
    }
    if (!trx.pesanan.length) {
      const hasil = { kode: trx.kode, pelanggan: trx.pelanggan, status: "DITOLAK", alasan: "Pesanan kosong" };
      this.riwayat.push(hasil);
      return hasil;
    }

    const { subtotal, itemValid, itemTidakValid } = this.hitungSubtotal(trx.pesanan);
    if (itemValid.length === 0) {
      const hasil = { kode: trx.kode, pelanggan: trx.pelanggan, status: "DITOLAK", alasan: "Tidak ada item valid" };
      this.riwayat.push(hasil);
      return hasil;
    }

    const promoHari = this.hitungPromoHari(trx.hari);
    const diskon = this.hitungDiskon(subtotal, trx.persenVoucher);
    let setelahDiskon = subtotal - diskon - promoHari;
    if (setelahDiskon < 0) setelahDiskon = 0;
    const pajak = this.hitungPajak(setelahDiskon);
    const total = setelahDiskon + pajak;
    const kembalian = trx.uangBayar - total;
    const status = trx.uangBayar >= total ? "LUNAS" : "KURANG";

    const hasil = {
      kode: trx.kode,
      pelanggan: trx.pelanggan,
      status,
      subtotal,
      promoHari,
      diskon,
      pajak,
      total,
      uangBayar: trx.uangBayar,
      kembalian,
      pecahanKembalian: null,
      itemValid,
      itemTidakValid,
    };

    if (status === "LUNAS") {
      for (const item of itemValid) {
        const found = this.cariMenu(item.menu);
        found.stok -= item.jumlah;
      }
      this.saldoKas += total;
      hasil.pecahanKembalian = this.hitungKembalianPecahan(kembalian);
    }

    this.riwayat.push(hasil);
    return hasil;
  },

  cetakStruk(hasil) {
    console.log("========================================");
    console.log(`Kode      : ${hasil.kode}`);
    console.log(`Pelanggan : ${hasil.pelanggan}`);

    if (hasil.status === "DITOLAK") {
      console.log(`Alasan    : ${hasil.alasan}`);
      console.log("========================================");
      return;
    }

    console.log("--- Item ---");
    for (let i = 0; i < hasil.itemValid.length; i++) {
      const it = hasil.itemValid[i];
      console.log(`${i + 1}. ${it.menu} x${it.jumlah} @ ${formatRupiah(it.harga)}`);
    }
    if (hasil.itemTidakValid.length > 0) {
      console.log("--- Item Tidak Valid ---");
      for (const it of hasil.itemTidakValid) {
        console.log(`- ${it.menu}: ${it.alasan}`);
      }
    }
    console.log(`Subtotal  : ${formatRupiah(hasil.subtotal)}`);
    console.log(`Promo Hari: ${formatRupiah(hasil.promoHari)}`);
    console.log(`Diskon    : ${formatRupiah(hasil.diskon)}`);
    console.log(`Pajak     : ${formatRupiah(hasil.pajak)}`);
    console.log(`Total     : ${formatRupiah(hasil.total)}`);
    console.log(`Bayar     : ${formatRupiah(hasil.uangBayar)}`);
    console.log(`Kembalian : ${formatRupiah(hasil.kembalian)}`);
    console.log(`Status    : ${hasil.status}`);
    if (hasil.pecahanKembalian) {
      console.log("Pecahan   :", hasil.pecahanKembalian);
    }
    console.log("========================================");
  },
};

for (const trx of transaksiBersih) {
  const hasil = kasir.prosesTransaksi(trx);
  kasir.cetakStruk(hasil);
  if (kasir.saldoKas >= TARGET_KAS) {
    console.log("Target kas tercapai");
    break;
  }
}
//===========================================================
/*
1. Karena menu adalah properti object kasir. `this` merujuk pada object kasir itu sendiri.

2. Switch lebih cocok karena hari adalah satu nilai diskret dengan banyak kasus.
   Saya sengaja tidak menulis break di case "sabtu" agar alurnya jatuh ke "minggu"
   (dua hari berbagi promo 5000). Hasilnya tetap benar karena satu case menangani keduanya.

3. !trx.pesanan.length bernilai true ketika panjang array 0.
   3 nilai Falsy: 0, "", null (juga: false, undefined, NaN).

4. break: menghentikan perulangan for transaksi saat target tercapai.
   continue: melewati item yang tidak valid di hitungSubtotal.
   Bedanya: break menghentikan seluruh perulangan, continue hanya melompati iterasi saat ini.

5. Karena kita perlu tahu item mana yang valid (untuk mengurangi stok & struk) dan
   mana yang tidak valid (untuk dilaporkan), bukan hanya totalnya.

6. while di dalam for...of dipakai untuk "mengambil" pecahan satu per satu sampai
   tidak cukup lagi. Bisa diganti dengan Math.floor(sisa / nilai) dan sisa %= nilai.
*/
//===========================================================
const laporan = {
  jumlahTransaksi: 0,
  jumlahLunas: 0,
  jumlahKurang: 0,
  jumlahDitolak: 0,
  pendapatan: 0,
  rataRata: 0,
  transaksiTerbesar: null,
  penjualanPerMenu: {},
  menuTerlaris: "",
  daftarDitolak: [],
  kodeLunas: [],
  ringkasanKode: "",
  menuStokMenipis: [],
};

for (const trx of kasir.riwayat) {
  laporan.jumlahTransaksi++;
  if (trx.status === "LUNAS") {
    laporan.jumlahLunas++;
    laporan.pendapatan += trx.total;
    laporan.kodeLunas.push(trx.kode);

    if (!laporan.transaksiTerbesar || trx.total > laporan.transaksiTerbesar.total) {
      laporan.transaksiTerbesar = trx;
    }
    for (const item of trx.itemValid) {
      if (item.menu in laporan.penjualanPerMenu) {
        laporan.penjualanPerMenu[item.menu] += item.jumlah;
      } else {
        laporan.penjualanPerMenu[item.menu] = item.jumlah;
      }
    }
  } else if (trx.status === "KURANG") {
    laporan.jumlahKurang++;
  } else {
    laporan.jumlahDitolak++;
    laporan.daftarDitolak.push({ kode: trx.kode, alasan: trx.alasan });
  }
}

laporan.rataRata = laporan.jumlahLunas > 0
  ? Math.round(Number((laporan.pendapatan / laporan.jumlahLunas).toFixed(0)))
  : 0;

let maxTerjual = 0;
for (const nama in laporan.penjualanPerMenu) {
  if (laporan.penjualanPerMenu[nama] > maxTerjual) {
    maxTerjual = laporan.penjualanPerMenu[nama];
    laporan.menuTerlaris = nama;
  }
}

for (const m of kasir.menu) {
  if (m.stok < 3) laporan.menuStokMenipis.push(m.nama);
}

for (const kode of laporan.kodeLunas) {
  laporan.ringkasanKode += (laporan.ringkasanKode === "" ? "" : ", ") + kode;
}

// Cetak laporan
console.log(`=== ${kedai.nama.toUpperCase()} ===`);
console.log(`Jumlah Transaksi : ${laporan.jumlahTransaksi}`);
console.log(`Lunas            : ${laporan.jumlahLunas}`);
console.log(`Kurang           : ${laporan.jumlahKurang}`);
console.log(`Ditolak          : ${laporan.jumlahDitolak}`);
console.log(`Pendapatan       : ${formatRupiah(laporan.pendapatan)}`);
console.log(`Rata-rata        : ${formatRupiah(laporan.rataRata)}`);
console.log(`Terbesar         : ${laporan.transaksiTerbesar ? laporan.transaksiTerbesar.kode + " (" + formatRupiah(laporan.transaksiTerbesar.total) + ")" : "-"}`);
console.log(`Menu Terlaris    : ${laporan.menuTerlaris}`);
console.log(`Stok Menipis     : ${laporan.menuStokMenipis.join(", ")}`);
console.log("--- Penjualan per Menu ---");
for (const nama in laporan.penjualanPerMenu) {
  console.log(`${nama}: ${laporan.penjualanPerMenu[nama]}`);
}
console.log("Object.keys  :", Object.keys(laporan.penjualanPerMenu));
console.log("Object.values:", Object.values(laporan.penjualanPerMenu));

const jumlahKodeCocok = laporan.ringkasanKode.split(", ").length === laporan.jumlahLunas;
console.log("Jumlah kode cocok dengan jumlahLunas?", jumlahKodeCocok);

// Demo array method
console.log("includes TRX-001:", laporan.kodeLunas.includes("TRX-001"));
console.log("indexOf TRX-002 :", laporan.kodeLunas.indexOf("TRX-002"));
console.log("slice(0,2)      :", laporan.kodeLunas.slice(0, 2));
const salinan = laporan.kodeLunas.slice();
salinan.splice(0, 1);
console.log("salinan setelah splice:", salinan);
console.log("kodeLunas asli        :", laporan.kodeLunas); 
//===========================================================
const laporan = {
  jumlahTransaksi: 0,
  jumlahLunas: 0,
  jumlahKurang: 0,
  jumlahDitolak: 0,
  pendapatan: 0,
  rataRata: 0,
  transaksiTerbesar: null,
  penjualanPerMenu: {},
  menuTerlaris: "",
  daftarDitolak: [],
  kodeLunas: [],
  ringkasanKode: "",
  menuStokMenipis: [],
};

for (const trx of kasir.riwayat) {
  laporan.jumlahTransaksi++;
  if (trx.status === "LUNAS") {
    laporan.jumlahLunas++;
    laporan.pendapatan += trx.total;
    laporan.kodeLunas.push(trx.kode);

    if (!laporan.transaksiTerbesar || trx.total > laporan.transaksiTerbesar.total) {
      laporan.transaksiTerbesar = trx;
    }
    for (const item of trx.itemValid) {
      if (item.menu in laporan.penjualanPerMenu) {
        laporan.penjualanPerMenu[item.menu] += item.jumlah;
      } else {
        laporan.penjualanPerMenu[item.menu] = item.jumlah;
      }
    }
  } else if (trx.status === "KURANG") {
    laporan.jumlahKurang++;
  } else {
    laporan.jumlahDitolak++;
    laporan.daftarDitolak.push({ kode: trx.kode, alasan: trx.alasan });
  }
}

laporan.rataRata = laporan.jumlahLunas > 0
  ? Math.round(Number((laporan.pendapatan / laporan.jumlahLunas).toFixed(0)))
  : 0;

let maxTerjual = 0;
for (const nama in laporan.penjualanPerMenu) {
  if (laporan.penjualanPerMenu[nama] > maxTerjual) {
    maxTerjual = laporan.penjualanPerMenu[nama];
    laporan.menuTerlaris = nama;
  }
}

for (const m of kasir.menu) {
  if (m.stok < 3) laporan.menuStokMenipis.push(m.nama);
}

for (const kode of laporan.kodeLunas) {
  laporan.ringkasanKode += (laporan.ringkasanKode === "" ? "" : ", ") + kode;
}

// Cetak laporan
console.log(`=== ${kedai.nama.toUpperCase()} ===`);
console.log(`Jumlah Transaksi : ${laporan.jumlahTransaksi}`);
console.log(`Lunas            : ${laporan.jumlahLunas}`);
console.log(`Kurang           : ${laporan.jumlahKurang}`);
console.log(`Ditolak          : ${laporan.jumlahDitolak}`);
console.log(`Pendapatan       : ${formatRupiah(laporan.pendapatan)}`);
console.log(`Rata-rata        : ${formatRupiah(laporan.rataRata)}`);
console.log(`Terbesar         : ${laporan.transaksiTerbesar ? laporan.transaksiTerbesar.kode + " (" + formatRupiah(laporan.transaksiTerbesar.total) + ")" : "-"}`);
console.log(`Menu Terlaris    : ${laporan.menuTerlaris}`);
console.log(`Stok Menipis     : ${laporan.menuStokMenipis.join(", ")}`);
console.log("--- Penjualan per Menu ---");
for (const nama in laporan.penjualanPerMenu) {
  console.log(`${nama}: ${laporan.penjualanPerMenu[nama]}`);
}
console.log("Object.keys  :", Object.keys(laporan.penjualanPerMenu));
console.log("Object.values:", Object.values(laporan.penjualanPerMenu));

const jumlahKodeCocok = laporan.ringkasanKode.split(", ").length === laporan.jumlahLunas;
console.log("Jumlah kode cocok dengan jumlahLunas?", jumlahKodeCocok);

// Demo array method
console.log("includes TRX-001:", laporan.kodeLunas.includes("TRX-001"));
console.log("indexOf TRX-002 :", laporan.kodeLunas.indexOf("TRX-002"));
console.log("slice(0,2)      :", laporan.kodeLunas.slice(0, 2));
const salinan = laporan.kodeLunas.slice();
salinan.splice(0, 1);
console.log("salinan setelah splice:", salinan);
console.log("kodeLunas asli        :", laporan.kodeLunas);
//===========================================================
/*
1. penjualanPerMenu object karena kuncinya nama menu (string dinamis), bukan indeks urut.
   Bracket notation dipakai karena nama menu berupa variabel/hasil kalkulasi, bukan literal.

2. Object.keys menghasilkan array kunci (nama menu). Object.values menghasilkan
   array nilainya (jumlah terjual). Contoh di code: kunci ["Kopi Susu", ...], nilai [2, ...].

3. slice tidak mengubah asli, splice mengubah salinan (yang dibuat dengan slice).
   Bukti: kodeLunas asli tetap utuh setelah salinan di-splice.

4. Karena toFixed mengembalikan teks; jika tidak diubah kembali ke Number, hasilnya
   akan menjadi string dan operasi aritmetika berikutnya bisa salah (concatenation).

5. Hasilnya true jika semua kode lunas tercatat dan ringkasan dibangun dengan benar.
   Karena ringkasanKode memakai pemisah ", " dan setiap kode lunas di-push satu kali.
*/