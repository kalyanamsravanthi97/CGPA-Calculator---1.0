let display = document.querySelector(".display");

function myFunction() {
    let credit1 = document.querySelector("#credit1");
    let grade1 = document.querySelector("#grade1");
    let credit2 = document.querySelector("#credit2");
    let grade2 = document.querySelector("#grade2");
    let credit3 = document.querySelector("#credit3");
    let grade3 = document.querySelector("#grade3");
    let credit4 = document.querySelector("#credit4");
    let grade4 = document.querySelector("#grade4");
    let credit5 = document.querySelector("#credit5");
    let grade5 = document.querySelector("#grade5");
    let credit6 = document.querySelector("#credit6");
    let grade6 = document.querySelector("#grade6");
    let credit7 = document.querySelector("#credit7");
    let grade7 = document.querySelector("#grade7");
    let credit8 = document.querySelector("#credit8");
    let grade8 = document.querySelector("#grade8");
    
    credit1 = Number(credit1.value);
    credit2 = Number(credit2.value);
    credit3 = Number(credit3.value);
    credit4 = Number(credit4.value);
    credit5 = Number(credit5.value);
    credit6 = Number(credit6.value);
    credit7 = Number(credit7.value);
    credit8 = Number(credit8.value);
    let total_credit = credit1 + credit2 + credit3 + credit4 + credit5 + credit6 + credit7 + credit8;

    grade1 = Number((grade1).value);
    grade2 = Number((grade2).value);
    grade3 = Number((grade3).value);
    grade4 = Number((grade4).value);
    grade5 = Number((grade5).value);
    grade6 = Number((grade6).value);
    grade7 = Number((grade7).value);
    grade8 = Number((grade8).value);


    let total_credits = (credit1 * grade1) + (credit2 * grade2) + (credit3 * grade3) + (credit4 * grade4) + (credit5 * grade5) + (credit6 * grade6) + (credit7 * grade7) + (credit8 * grade8);

    let CGPA = (total_credits / total_credit).toFixed(2);

    display.innerHTML="Your total Credit Point is: " + total_credit + "<br>Your CGPA is: " + CGPA;
}

function reset() {
    credit1.value="";
    grade1.value="";
    credit2.value="";
    grade2.value="";
    credit3.value="";
    grade3.value="";
    credit4.value="";
    grade4.value="";
    credit5.value="";
    grade5.value="";
    credit6.value="";
    grade6.value="";
    credit7.value="";
    grade7.value="";
    credit8.value="";
    grade8.value="";

    display.innerHTML="¯\\_(ツ)_/¯"
}