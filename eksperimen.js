// ===== Potongan A =====
console.log("  Hai Kawan  ".trim().length); // tebak: 9 → hasil: 9
console.log("Kopi Susu".toUpperCase().slice(0, 4)); // tebak: "KOPI" → hasil: "KOPI"
console.log("a,b,c".split(",").length); // tebak: 3 → hasil: 3
console.log("banana".replace("a", "o")); // tebak: "bonana" → hasil: "bonana"
console.log("banana".replaceAll("a", "o")); // tebak: "bonono" → hasil: "bonono"
console.log(parseInt("42px")); // tebak: 42 → hasil: 42
console.log(Number("42px")); // tebak: NaN → hasil: NaN
console.log(parseInt("3.99")); // tebak: 3 → hasil: 3
console.log(typeof (3.14159).toFixed(2)); // tebak: "string" → hasil: "string"
console.log((0.1 + 0.2).toFixed(2)); // tebak: "0.30" → hasil: "0.30"
console.log("10" + 5 * 2); // tebak: "1010" → hasil: "1010"
console.log(!0 && !""); // tebak: true → hasil: true

// ===== Potongan B =====
let angka = [10, 20, 30, 40];
let potongan = angka.slice(1, 3);
let hapus = angka.splice(1, 2);
console.log(potongan); // tebak: [20,30] → hasil: [20,30]
console.log(hapus); // tebak: [20,30] → hasil: [20,30]
console.log(angka); // tebak: [10,40] → hasil: [10,40]

function ganda(n) { return n * 2; }
function cetak(n) { console.log(n * 2); }
console.log(ganda(4) + ganda(1)); // tebak: 10 → hasil: 10
console.log(cetak(4)); // tebak: 8, undefined → hasil: 8, undefined

const toko = {
  nama: "Senja", stok: 5,
  jual(n) { this.stok -= n; return this.stok; },
};
toko.jual(2);
console.log(toko.jual(1)); // tebak: 2 → hasil: 2
console.log("stok" in toko); // tebak: true → hasil: true
for (let k in toko) { console.log(k); } // tebak: nama, stok, jual → hasil: nama, stok, jual

// ===== Potongan C =====
let hasil = "";
for (let i = 1; i <= 6; i++) {
  if (i === 2) continue;
  if (i === 5) break;
  hasil += i;
}
console.log(hasil); // tebak: "134" → hasil: "134"

let n = 3; let kali = 1;
while (n > 0) { kali *= n; n--; }
console.log(kali); // tebak: 6 → hasil: 6

let x = 0;
do { x += 5; } while (x < 3);
console.log(x); // tebak: 5 → hasil: 5

for (let huruf of "ABC") { console.log(huruf + huruf.toLowerCase()); }
// tebak: "Aa","Bb","Cc" → hasil: "Aa","Bb","Cc" >>
//===========================
// ===== Potongan A =====
console.log("  Hai Kawan  ".trim().length); // tebak: 9 → hasil: 9
console.log("Kopi Susu".toUpperCase().slice(0, 4)); // tebak: "KOPI" → hasil: "KOPI"
console.log("a,b,c".split(",").length); // tebak: 3 → hasil: 3
console.log("banana".replace("a", "o")); // tebak: "bonana" → hasil: "bonana"
console.log("banana".replaceAll("a", "o")); // tebak: "bonono" → hasil: "bonono"
console.log(parseInt("42px")); // tebak: 42 → hasil: 42
console.log(Number("42px")); // tebak: NaN → hasil: NaN
console.log(parseInt("3.99")); // tebak: 3 → hasil: 3
console.log(typeof (3.14159).toFixed(2)); // tebak: "string" → hasil: "string"
console.log((0.1 + 0.2).toFixed(2)); // tebak: "0.30" → hasil: "0.30"
console.log("10" + 5 * 2); // tebak: "1010" → hasil: "1010"
console.log(!0 && !""); // tebak: true → hasil: true

// ===== Potongan B =====
let angka = [10, 20, 30, 40];
let potongan = angka.slice(1, 3);
let hapus = angka.splice(1, 2);
console.log(potongan); // tebak: [20,30] → hasil: [20,30]
console.log(hapus); // tebak: [20,30] → hasil: [20,30]
console.log(angka); // tebak: [10,40] → hasil: [10,40]

function ganda(n) { return n * 2; }
function cetak(n) { console.log(n * 2); }
console.log(ganda(4) + ganda(1)); // tebak: 10 → hasil: 10
console.log(cetak(4)); // tebak: 8, undefined → hasil: 8, undefined

const toko = {
  nama: "Senja", stok: 5,
  jual(n) { this.stok -= n; return this.stok; },
};
toko.jual(2);
console.log(toko.jual(1)); // tebak: 2 → hasil: 2
console.log("stok" in toko); // tebak: true → hasil: true
for (let k in toko) { console.log(k); } // tebak: nama, stok, jual → hasil: nama, stok, jual

// ===== Potongan C =====
let hasil = "";
for (let i = 1; i <= 6; i++) {
  if (i === 2) continue;
  if (i === 5) break;
  hasil += i;
}
console.log(hasil); // tebak: "134" → hasil: "134"

let n = 3; let kali = 1;
while (n > 0) { kali *= n; n--; }
console.log(kali); // tebak: 6 → hasil: 6

let x = 0;
do { x += 5; } while (x < 3);
console.log(x); // tebak: 5 → hasil: 5

for (let huruf of "ABC") { console.log(huruf + huruf.toLowerCase()); }
// tebak: "Aa","Bb","Cc" → hasil: "Aa","Bb","Cc"
//===========================
// ===== Potongan A =====
console.log("  Hai Kawan  ".trim().length); // tebak: 9 → hasil: 9
console.log("Kopi Susu".toUpperCase().slice(0, 4)); // tebak: "KOPI" → hasil: "KOPI"
console.log("a,b,c".split(",").length); // tebak: 3 → hasil: 3
console.log("banana".replace("a", "o")); // tebak: "bonana" → hasil: "bonana"
console.log("banana".replaceAll("a", "o")); // tebak: "bonono" → hasil: "bonono"
console.log(parseInt("42px")); // tebak: 42 → hasil: 42
console.log(Number("42px")); // tebak: NaN → hasil: NaN
console.log(parseInt("3.99")); // tebak: 3 → hasil: 3
console.log(typeof (3.14159).toFixed(2)); // tebak: "string" → hasil: "string"
console.log((0.1 + 0.2).toFixed(2)); // tebak: "0.30" → hasil: "0.30"
console.log("10" + 5 * 2); // tebak: "1010" → hasil: "1010"
console.log(!0 && !""); // tebak: true → hasil: true

// ===== Potongan B =====
let angka = [10, 20, 30, 40];
let potongan = angka.slice(1, 3);
let hapus = angka.splice(1, 2);
console.log(potongan); // tebak: [20,30] → hasil: [20,30]
console.log(hapus); // tebak: [20,30] → hasil: [20,30]
console.log(angka); // tebak: [10,40] → hasil: [10,40]

function ganda(n) { return n * 2; }
function cetak(n) { console.log(n * 2); }
console.log(ganda(4) + ganda(1)); // tebak: 10 → hasil: 10
console.log(cetak(4)); // tebak: 8, undefined → hasil: 8, undefined

const toko = {
  nama: "Senja", stok: 5,
  jual(n) { this.stok -= n; return this.stok; },
};
toko.jual(2);
console.log(toko.jual(1)); // tebak: 2 → hasil: 2
console.log("stok" in toko); // tebak: true → hasil: true
for (let k in toko) { console.log(k); } // tebak: nama, stok, jual → hasil: nama, stok, jual

// ===== Potongan C =====
let hasil = "";
for (let i = 1; i <= 6; i++) {
  if (i === 2) continue;
  if (i === 5) break;
  hasil += i;
}
console.log(hasil); // tebak: "134" → hasil: "134"

let n = 3; let kali = 1;
while (n > 0) { kali *= n; n--; }
console.log(kali); // tebak: 6 → hasil: 6

let x = 0;
do { x += 5; } while (x < 3);
console.log(x); // tebak: 5 → hasil: 5

for (let huruf of "ABC") { console.log(huruf + huruf.toLowerCase()); }
// tebak: "Aa","Bb","Cc" → hasil: "Aa","Bb","Cc"
//===========================
// ===== Potongan A =====
console.log("  Hai Kawan  ".trim().length); // tebak: 9 → hasil: 9
console.log("Kopi Susu".toUpperCase().slice(0, 4)); // tebak: "KOPI" → hasil: "KOPI"
console.log("a,b,c".split(",").length); // tebak: 3 → hasil: 3
console.log("banana".replace("a", "o")); // tebak: "bonana" → hasil: "bonana"
console.log("banana".replaceAll("a", "o")); // tebak: "bonono" → hasil: "bonono"
console.log(parseInt("42px")); // tebak: 42 → hasil: 42
console.log(Number("42px")); // tebak: NaN → hasil: NaN
console.log(parseInt("3.99")); // tebak: 3 → hasil: 3
console.log(typeof (3.14159).toFixed(2)); // tebak: "string" → hasil: "string"
console.log((0.1 + 0.2).toFixed(2)); // tebak: "0.30" → hasil: "0.30"
console.log("10" + 5 * 2); // tebak: "1010" → hasil: "1010"
console.log(!0 && !""); // tebak: true → hasil: true

// ===== Potongan B =====
let angka = [10, 20, 30, 40];
let potongan = angka.slice(1, 3);
let hapus = angka.splice(1, 2);
console.log(potongan); // tebak: [20,30] → hasil: [20,30]
console.log(hapus); // tebak: [20,30] → hasil: [20,30]
console.log(angka); // tebak: [10,40] → hasil: [10,40]

function ganda(n) { return n * 2; }
function cetak(n) { console.log(n * 2); }
console.log(ganda(4) + ganda(1)); // tebak: 10 → hasil: 10
console.log(cetak(4)); // tebak: 8, undefined → hasil: 8, undefined

const toko = {
  nama: "Senja", stok: 5,
  jual(n) { this.stok -= n; return this.stok; },
};
toko.jual(2);
console.log(toko.jual(1)); // tebak: 2 → hasil: 2
console.log("stok" in toko); // tebak: true → hasil: true
for (let k in toko) { console.log(k); } // tebak: nama, stok, jual → hasil: nama, stok, jual

// ===== Potongan C =====
let hasil = "";
for (let i = 1; i <= 6; i++) {
  if (i === 2) continue;
  if (i === 5) break;
  hasil += i;
}
console.log(hasil); // tebak: "134" → hasil: "134"

let n = 3; let kali = 1;
while (n > 0) { kali *= n; n--; }
console.log(kali); // tebak: 6 → hasil: 6

let x = 0;
do { x += 5; } while (x < 3);
console.log(x); // tebak: 5 → hasil: 5

for (let huruf of "ABC") { console.log(huruf + huruf.toLowerCase()); }
// tebak: "Aa","Bb","Cc" → hasil: "Aa","Bb","Cc"
//===========================