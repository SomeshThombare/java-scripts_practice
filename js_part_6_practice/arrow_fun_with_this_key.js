const student = {
    name : 'sam',
    marks : 98,
    prop : this,
    getName: function() {
        console.log(this);
        // return this.name;
        console.log(this.name);

    },
    getMarks: () => {
        console.log(this);
        // return this.marks;
        console.log(this.marks);
    },
    getInfo1 : function(){
        setTimeout(() =>{
            console.log(this);
        },2000)
    },
    getInfo2 : function(){
        setTimeout(function () {
            console.log(this);
        })
    }
}
student.getName();  
student.getMarks(); 
student.getInfo1(); 
student.getInfo2(); 