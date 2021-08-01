const students = [
    {name:"Adhi", gender:"male"},
    {name:"Ahamed", gender:"male"},
    {name:"Rutika kadam", gender:"female"},
    {name:"Priyadarsini", gender:"female"}
];

console.log(students.filter(record=>record["gender"]=="female"))
console.log(students.filter(record=>record["name"].charAt(0)=='a' || record["name"].charAt(0)=='A'));
function countMales(Students){
    let count =0;
    for(let i=0;i<Students.length;i++){
        if(Students[i].gender=="male")
        {
            count++;
        }
    }
    return count;
}
console.log(countMales(students));