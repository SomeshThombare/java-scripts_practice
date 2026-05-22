const student = {
    name : 'sam',
    age : 22,
    eng : 89,
    math : 90,
    phy : 90,
    getAvg(){
        // let avg = (eng + math + phy) / 3; // et avg = (eng + math + phy) / 3;
        let avg = (this.eng + this.math + this.phy) / 3;
        // console.log(student.getAvg());
        console.log(avg);
    }
}
// console.log(student.getAvg());
student.getAvg();
// let avg_marks = student.getAvg();
// console.log(avg_marks);