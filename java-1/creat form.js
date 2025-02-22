

function dataSend(event){
event.preventDefault();

    let uName = document.getElementById('name').value;
let contact= document.getElementById('contact').value;
let remarks = document.getElementById('remarks').value;
let gender = document.querySelector('input[name="gender"]:checked');
let course = document.querySelectorAll('input[name="course"]:checked');
let location = document.getElementById('location').value;

<<<<<<< HEAD

let courseValue =[];
for (let i= 0; i<course.length; i++){
courseValue.push(course[i].value);

}

let output = "Name: " + uName+ "\n"
"Contact" + contact+ "\n"
+"Remarks" + remarks+ "\n"
+"Gender" + gender.value + "\n"
+"Courses: " + courseValue+ "\n"
+"Location: " + location+ "\n";

let newWindow = window.open('','_blank');
newWindow.document.write("<pre>"+ output +"</pre>");
}

let myform = document.getElementById('myform');
myform.addEventListener('submit',dataSend);
=======
let hobbyValue= [];

for(let i=0; i<hobby.length, i++){
hobbyValue.push()
}
>>>>>>> d510a15baf5fd6168afa6b4572483c5b47e3cb09













