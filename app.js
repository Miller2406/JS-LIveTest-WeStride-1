// #1 ลบเครื่องหมาย ส่วนท้าย
// function remove(word) {
//     if (word.slice(-1) == '!') {
//         const afterRemove = word.slice(0, -1)
//         return afterRemove;
//     } else {
//         return word;
//     }

// }

// console.log(remove('hi!'));
// console.log(remove('hi!!!'));
// console.log(remove('!hi'));
// console.log(remove('!hi!'));
// console.log(remove('hi! hi!'));
// console.log(remove('hi!'));

// #2 เขียนฟังก์ชั่น ผลรวมของเลขยกกำลังเดี่ยว  ยกำลังตามลำดับตำแหน่ง
// 89 // 123 //65 // 321

function multiPlus(nums) {
    let str = String(nums);
    let total = 0;
    for (let i = 0; i < str.length; i++) {
        total += Math.pow(str[i], [i + 1]);
    }
    return total;
}

console.log(multiPlus(89));
console.log(multiPlus(123));
console.log(multiPlus(65));
console.log(multiPlus(321));


//