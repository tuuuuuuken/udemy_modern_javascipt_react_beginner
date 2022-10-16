// var var1 = "var変数";
// console.log(var1);

// var1 = "上書きできる";
// console.log(var1);

// var var1 = "再宣言できる";
// console.log(var1);

// let let2 = "let変数"
// console.log(let2);

// let2 = "上書きできる";
// console.log(let2);

// let let2 = "再宣言できない";

// const const3 = "constで定義";
// console.log(const3);

// const3 = "上書きはできない";
// const const3 = "再定義もできない";

// constで定義したオブジェクトのプロパティは書き換えられる
// constで定義したオブジェクトの参照を書き換えられない
// const const4 = {
//   name: "tuuuuuuken",
//   age: 26,
// };

// console.log(const4);

// const4.name = "とぅーけん";
// const4.age = 334;
// const4.address = "福岡";
// console.log(const4);

// const4 = {
//   name: "tuuuuuuken",
//   age: 26,
// };

// constで定義した配列は書き換えられる
// const const5 = ['dog', 'cat'];
// const5[0] = 'bird';
// const5.push('monkey');
// console.log(const5);

// テンプレート文字列
// const name = "tuuuuuuken";
// const age = 26;

// const message = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message);

// アロー関数
// 従来
// function func1(str) {
//   return str;
// }
// console.log(func1("func1です"));

// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(1, 2));

// 分割代入
// const myProfile = {
//   name: "tuuuuuken",
//   age: 26
// };

// const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile2 = ["tuuuuuuken", 26];
// const message2 = `私の名前は${myProfile2[0]}です。年齢は${myProfile2[1]}です。`;
// console.log(message2);

// const [name2, age2] = myProfile2;
// const message3 = `私の名前は${name2}です。年齢は${age2}です。`;
// console.log(message3);

/**
 * デフォルト値、引数など
 */

// const sayHello = (name = "名無し") => console.log(`こんにちは!${name}さん!`);
// sayHello();
// sayHello("tuuuuuuken");

/**
 * スプレッド構文 ...
 */

// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sum = (num1, num2) => console.log(num1 + num2);
// sum(arr1[0], arr1[1]);
// sum(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, arr5];
// console.log(arr7);

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["taaaaaaken", "tiiiiiiken", "tuuuuuuken"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// nameArr.map((name) => console.log(name));

// const numArr = [1, 2, 3, 4, 5];
// numArr.filter((num) => num % 2 === 1).map((num) => console.log(num));

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const newNameArr = nameArr.map((name) => {
//   if (name === "tuuuuuuken") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 論理演算子の本当の意味を知ろう && ||
 */
// 左側がfalseなら右の値を返す
// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

// 左側がtrueなら右の値を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されています";
// console.log(fee2);
