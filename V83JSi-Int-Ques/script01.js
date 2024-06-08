// let obj = {
//     a:1,
//     b:"Harry"
// }

// console.log(obj)
// house alert question

let students = ["aditya","chinmaya","sesma","ishi","priyaranjanpatra","priyalinita","sanmsleshita","pusparanjan"]

let houses = []

for(const student of students){
    if(student.length<6){
        houses.push("Griffindoor");
    }
    else if(student.length<8){
        houses.push("Huffule");
    }
    else if(student.length<12){
        houses.push("Gorbutcher");
    }
    else{
        houses.push("sterlin")
    }
}

console.log(houses)