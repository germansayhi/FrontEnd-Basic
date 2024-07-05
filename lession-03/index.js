//cú pháp khởi tạo biến
// [const, let, var] <tên biến> = [giá_trị_khởi_tạo]
const Pi =3.14;
//Pi =4
console.log("Pi= "+ Pi);

let a =10;
a =100;
console.log("a ="+ a);

// Kiểu boolean
const isLoading = true;
console.log("isLoading = " + isLoading);
// Chú ý: 0, "", null, undefined, NaN bị coi là false
console.log("Boolean(0) = " + Boolean(0));
console.log("Boolean('') = " + Boolean(""));
console.log("Boolean(null) = " + Boolean(null));
console.log("Boolean(undefined) = " + Boolean(undefined));
console.log("Boolean(NaN) = " + Boolean(NaN));

// undefined
let b;
console.log("b = " + b);

// Kiểu number
const c =9;
const d =8.5;
console.log("c ="+ c);
console.log("d ="+d);

// kiểu string
const phone= "iphone 15";
const s1 =" Tôi mới mua "+ phone+ "vào ngày hôm qua";
console.log(s1);

// String template
const s2 = `Tôi mới mua ${phone} vào ngày hôm qua`
console.log(s2);

// NaN: Not a number
const nan = 100 /a;
console.log("nan: "+ nan);

// Ìninity
const max =1/0;
console.log("max = "+max);
// Sử dụng isNaN để kiểm tra NaN
console.log("nan == NaN = " + (nan == NaN));
console.log("nan === NaN = " + (nan === NaN));
console.log("isNaN(nan) = " + isNaN(nan));

// Kiểu array
const fruits = ["Cam", "Táo", "Đào", "Ổi"];
console.log("fruits = " + fruits);
console.log("fruits.length = " + fruits.length);
// Thêm phần tử vào cuối
fruits.push("Thanh Long");
console.log("fruits = " + fruits);

//Xóa phần tử ở cuối
fruits.pop();
console.log("fruits =" +fruits);

// Thêm phần tử ở đầu
fruits.unshift("Lê")
console.log("fruits = " + fruits);

//Xóa phần tử ở đầu
fruits.shift();
console.log("fruits = " + fruits);

//Kiểu object
const dog = {
	name: "Milu",
	age: 2,
	showInfo: function () {
		console.log(`dog[name=${this.name},age=${this.age}]`);
	}
};
console.log(dog);
dog.showInfo;

// Truy cập thuộc tính: <tên object>.<tên thuộc tính>
console.log("dog.name = "+ dog.name);
 // <tên thuộc tính>["tên thuộc tính"]
 console.log('dog[age] = '+dog["age"]);

 const property = "name";
 console.log('dog[property] = ' +dog['name']);

 // For index
for (let i = 0; i < fruits.length; i++) {
    const fruit =fruits[i];
    console.log("🎈fruit =" + fruit);
}
// For of
for (const fruit of fruits){
    console.log("❤️ fruit = "+ fruit);
}

// For in
for (const key in dog) {
    console.log(`key = ${key}, value = ${dog[key]}`);
}

//typeof
console.log("typeof isLoading = "+ typeof isLoading);
console.log("typeof Pi = "+ typeof Pi);
console.log("typeof fruits = "+ typeof fruits);
console.log("typeof dog = "+ typeof dog);

// Chú ý
console.log("typeof NaN = "+ typeof NaN);
console.log("typeof null = "+ typeof null);
console.log("typeof undefined = "+ typeof undefined);
console.log("typeof infinity = "+ typeof Infinity);

// == vs ===
console.log(null == undefined);
console.log(null === undefined);
console.log(" " == false);
console.log(" " === false);

// normal fuction
function sum(a,b){
    return a+b;
}
console.log("sum(1,10) =" +sum(1,10));


// Anonymous function
const hello = function (name){
    console.log("Chào bạn: " +name);
};
hello("Duc")

// Arow function
const square = x => x * x;
console.log("square(5) = "+ square(5));

//Ứng dụng
fruits.map(fruit => fruit.length )
.forEach(length => console.log("🎈fruit length =" + length))

// Try catch finally
try {
    throw "Bạn chưa đủ 18t";
} catch (e) {
    console.log("exception = " +e); 
}finally{
    console.log("finally luôn được gọi");
}

// Scope: Phạm vi sử dụng
// Local scope, Global scope
let k = 0;
{
    let k =10;
     console.log("k =" +k);
}
console.log("K = "+ k);
var m =10;
{
    var m =100;
     console.log("m =" +m);
}
console.log("m = "+ m);

// Loop scope
for (let i=0; i<2 ; i++){}
console.log("i = " +i);
for (var i=0; i<2 ; i++){}
console.log("i = " +i);