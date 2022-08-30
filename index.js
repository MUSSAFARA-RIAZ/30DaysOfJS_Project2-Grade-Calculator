function calc() {
    let grade = " "
    let m = document.getElementById("mth").value;
    let p = document.getElementById("phy").value;
    let PL = document.getElementById("pl").value;
    let d = document.getElementById("dbms").value;
    let obtained_marks = parseFloat(m) + parseFloat(p) + parseFloat(PL) + parseFloat(d);

    alert("Your total marks is " + obtained_marks);
    const total = 400;
    let Percentage = (obtained_marks * 100) / 400;

    alert("Your percentage is " + Percentage);

    if (Percentage >= 80 && Percentage <= 100) {
        grade = 'A+'
        alert('Your grade is A+');
    }
    else if (Percentage >= 70 && Percentage <= 79) {
        grade = 'A';
        alert('your grade is A');
    }
    else if (Percentage >= 60 && Percentage < 70) {
        grade = 'B';
        alert("Your grade is B");

    }
    else if (Percentage >= 50 && Percentage < 60) {
        grade = 'C';
        alert("Your grade is C");
    }
    else if (Percentage >= 40 && Percentage < 50) {
        grade = 'D';
        alert("Your grade is D");


    }
    else if (Percentage >= 33 && Percentage < 40) {
        grade = 'E';
        alert("Your grade is E");
    }
    else {
        grade = 'F'
        alert("YOU NEED TO WORK HARD");
    }

    if (Percentage >= 70 && Percentage <= 100) {
       document.getElementById("showdata").innerHTML = `Congratulation! You got an excellent Result  Your total marks is ${total} and your obtained ${obtained_marks} <br> and your percentage is ${Percentage}`;



    }
    else if (Percentage > 50 && Percentage < 70) {
        document.getElementById("showdata").innerHTML = `Dont lose hope! Need your more attention for better result`;

    }
    else if (Percentage >= 0 && Percentage < 50) {
        document.getElementById("showdata").innerHTML = `You fail!`;
    }
    
}
