console.log("Number Typs");
console.log("\n");
let a: number;
let b: number = 2;
a = NaN;
console.log("Value:\n");
console.log("a = " + a + "\nb = " + b);
console.log("\n");
console.log("Typeof:\n");
console.log("typeof(a) = " + typeof (a) + "\ntypeof(b) = " + typeof (b));
console.log("\n");
console.log("a + 0 = " + (a + 0));
console.log("a ** 0 = " + a ** 0);
console.log("\n");

console.log("BigInt Types");
const c = BigInt(Number.MAX_SAFE_INTEGER)
console.log(c);
console.log("\n");

console.log("String with Backticks");
let d: string = "1 + 4";
let e: string = d + "=" + `${d}`; // not work
let f: number = eval(d);
let g: string = d + "=" + f; // not work
console.log(e);
console.log(g);



