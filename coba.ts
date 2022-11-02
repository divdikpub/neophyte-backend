// menentukan tipe data primitif
const فلان: string = "Iqbal Awaluddin";
const bilangan: number = 77000;
const bilanganBesar: bigint = 7273892749826767533276472n;
console.log(فلان);

// menentukan tipe data array
const numbers: number[] = [1, 2, 3, 4, 5];

// menentukan tipe data objek
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Harja",
  age: 80,
};

// menentukan tipe data hasil return dari function
function main(): string {
  return "8";
}

// menentukan tipe data custom (langsung)
let arah: "UTARA" | "TIMUR" | "SELATAN" | "BARAT";
arah = "TIMUR";

// menentukan tipe data custom (ditampung dulu)
type Arah = "UTARA" | "TIMUR" | "SELATAN" | "BARAT";
let arah2: Arah;

interface Shalat {
  negara: string;
  arah: Arah;
}

interface MenyembahBerhala {
  negara: string;
  agama: string;
  arah: Arah;
}
