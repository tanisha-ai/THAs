// question1

var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
for(let item in student){
    console.log(item)
}
  

// question2
var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
console.log(student)

delete student.rollno

console.log(student)

// question3
var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
console.log(Object.keys(student).length)

// question4
var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];

for (var i = 0; i < library.length; i++) 
   {
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
      console.log("Already read " + book);
    } else
    {
     console.log("You still need to read " + book);
    }
   }

//    question5



  function Cylinder(height, diam) {
    this.height = height;
    this.diam = diam;
}
Cylinder.prototype.volume= function() {
    let radius = this.diam / 2;
    return (Math.PI * radius * radius * this.height).toFixed(4);
};
let cylinder = new Cylinder(15, 4);
console.log('Cylinder volume: ${cylinder.volume()}');


// question6






