
// DOM Elements
const schemeSelect = document.getElementById("schemeSelect");

const subjectSection = document.getElementById("subjectSection");
const viewResultBtn = document.getElementById("viewResultBtn");

const resultPopup = document.getElementById("resultPopup");

const closePopup = document.getElementById("closePopup");

const resultTableBody = document.getElementById("resultTableBody");

const popupCredits = document.getElementById("popupCredits");

const popupPoints = document.getElementById("popupPoints");

const popupSGPA = document.getElementById("popupSGPA");
const subjectCount = document.getElementById("subjectCount");

const tableSection = document.getElementById("tableSection");

const tableBody = document.getElementById("tableBody");

const calculateBtn = document.getElementById("calculateBtn");

const resultSection = document.getElementById("resultSection");
const totalCreditsDisplay = document.getElementById("totalCredits");

const totalCreditPointsDisplay = document.getElementById("totalCreditPoints");

const sgpaDisplay = document.getElementById("sgpa");

const messageBox = document.getElementById("messageBox");

// Scheme Selection
schemeSelect.addEventListener("change", function () {
    if (schemeSelect.value === "P24") {
        subjectSection.classList.remove("hidden");
    }
});

// Generate Table
subjectCount.addEventListener("input", function () {
    let count = parseInt(subjectCount.value);
    tableBody.innerHTML = "";
    tableSection.classList.add("hidden");
    if (!count || count <= 0) {

        return;
    }

    for (let i = 1; i <= count; i++) {
        let row = document.createElement("tr");

        row.innerHTML = `

        <td>${i}</td>
        <td>
            <input 
            type="text"
            class="course"
            placeholder="Course Title">
        </td>

        <td>
            <input 
            type="number"
            class="credits"
            min="1"
            placeholder="Credits">
        </td>

        <td>
            <input 
            type="number"
            class="seeMarks"
            min="0"
            max="100"
            placeholder="SEE Marks">
        </td>

        <td>
            <input 
            type="number"
            class="internals"
            min="0"
            max="50"
            placeholder="Internals">
        </td>

        `;

        tableBody.appendChild(row);
    }

    tableSection.classList.remove("hidden");
});

// Grade Point Calculation

function calculateGradePoint(totalMarks){
    if(totalMarks >= 90)
        return 10;

    else if(totalMarks >= 80)
        return 9;

    else if(totalMarks >= 70)
        return 8;

    else if(totalMarks >= 60)
        return 7;

    else if(totalMarks >= 50)
        return 6;

    else if(totalMarks >= 40)
        return 5;

    else if(totalMarks >= 35)
        return 4;

    else
        return 0;
}

function getGrade(gradePoint){

    if(gradePoint == 10)
        return "O";

    else if(gradePoint == 9)
        return "A+";

    else if(gradePoint == 8)
        return "A";

    else if(gradePoint == 7)
        return "B+";

    else if(gradePoint == 6)
        return "B";

    else if(gradePoint == 5)
        return "C";

    else if(gradePoint == 4)
        return "P";

    else
        return "F";

}
// SGPA Calculation

calculateBtn.addEventListener("click", function(){
    messageBox.innerHTML = "";
    let credits =
    document.querySelectorAll(".credits");
    let seeMarks =
    document.querySelectorAll(".seeMarks");

    let internals =
    document.querySelectorAll(".internals");

    let totalCredits = 0;
    let totalCreditPoints = 0;

    for(let i=0; i<credits.length; i++){

        let credit = Number(credits[i].value);

        let see = Number(seeMarks[i].value);

        let internal = Number(internals[i].value);

        // Validation

        if(
            credit <0 ||
            see <0 ||
            see >100 ||
            internal <0 ||
            internal >50 ||
            isNaN(credit) ||
            isNaN(see) ||
            isNaN(internal)
        ){

            messageBox.innerHTML =
            "Please enter valid values for all subjects.";

            resultSection.classList.add("hidden");

            return;

        }

        // SEE conversion
        let reducedSEE =
        Math.round(see / 2);
        let totalMarks =
        reducedSEE + internal;

        let gradePoint =
        calculateGradePoint(totalMarks);

        let creditPoint =
        credit * gradePoint;

        totalCredits += credit;
        totalCreditPoints += creditPoint;
    }

    if(totalCredits === 0){

        messageBox.innerHTML =
        "Credits cannot be zero.";
        return;
    }

    let sgpa =
    totalCreditPoints / totalCredits;

sgpaDisplay.innerHTML =
sgpa.toFixed(2);

totalCreditsDisplay.innerHTML =
totalCredits;

totalCreditPointsDisplay.innerHTML =
totalCreditPoints.toFixed(2);

viewResultBtn.classList.remove("hidden");
resultSection.classList.remove("hidden");

// View Result Card Popup

viewResultBtn.onclick = function(){

    resultTableBody.innerHTML = "";


    let credits = document.querySelectorAll(".credits");
    let courses = document.querySelectorAll(".course");
    let seeMarks = document.querySelectorAll(".seeMarks");
    let internals = document.querySelectorAll(".internals");


    let totalCredits = 0;
    let totalPoints = 0;


    for(let i = 0; i < credits.length; i++){


        let credit = Number(credits[i].value);

        let see = Number(seeMarks[i].value);

        let internal = Number(internals[i].value);


        let reducedSEE = Math.round(see / 2);

        let totalMarks = reducedSEE + internal;


        let gradePoint = calculateGradePoint(totalMarks);


        let creditPoint = credit * gradePoint;


        totalCredits += credit;

        totalPoints += creditPoint;



        let row = document.createElement("tr");


        row.innerHTML = `

        <td>${i+1}</td>

        <td>${courses[i].value}</td>

        <td>${credit}</td>

        <td>${getGrade(gradePoint)}</td>

        <td>${creditPoint}</td>

        `;


        resultTableBody.appendChild(row);

    }


    popupCredits.innerHTML = totalCredits;

    popupPoints.innerHTML = totalPoints;


    popupSGPA.innerHTML =
    (totalPoints / totalCredits).toFixed(2);


    resultPopup.classList.remove("hidden");

};
// Close Result Popup

closePopup.onclick = function(){

    resultPopup.classList.add("hidden");

};
// Scroll directly to the calculator section
function scrollToCalculator() {
    const calculator = document.getElementById("calculator-section");

    if (calculator) {
        calculator.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}
const calculatorLink = document.getElementById("calculatorLink");
const calculatorSection = document.getElementById("calculator-section");

if (calculatorLink && calculatorSection) {
    calculatorLink.addEventListener("click", function () {
        calculatorSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}
});
document.querySelector(".back-button").addEventListener("click", function () {
    window.location.href = "../Home/index.html";
});
// =========================
// STATIC SNOWFLAKES
// =========================
const snowContainer = document.querySelector(".snow-container");

if (snowContainer) {
    const snowflakes = [
    // Left side
    { left: "3%",  top: "7%",  size: "28px" },
    { left: "9%",  top: "22%", size: "20px" },
    { left: "5%",  top: "42%", size: "25px" },
    { left: "12%", top: "58%", size: "18px" },
    { left: "4%",  top: "76%", size: "27px" },
    { left: "10%", top: "91%", size: "21px" },

    // Upper area
    { left: "20%", top: "5%",  size: "24px" },
    { left: "31%", top: "14%", size: "18px" },
    { left: "43%", top: "6%",  size: "30px" },
    { left: "58%", top: "11%", size: "24px" },
    { left: "72%", top: "5%",  size: "21px" },
    { left: "84%", top: "15%", size: "29px" },
    { left: "94%", top: "7%",  size: "20px" },

    // Small number in center
    { left: "46%", top: "32%", size: "17px" },
    { left: "57%", top: "45%", size: "20px" },
    { left: "38%", top: "57%", size: "16px" },

    // Right side
    { left: "91%", top: "29%", size: "26px" },
    { left: "84%", top: "45%", size: "19px" },
    { left: "94%", top: "54%", size: "30px" },
    { left: "87%", top: "69%", size: "22px" },
    { left: "96%", top: "82%", size: "27px" },

    // Lower area / sides
    { left: "6%",  top: "95%", size: "24px" },
    { left: "18%", top: "82%", size: "19px" },
    { left: "29%", top: "94%", size: "26px" },
    { left: "67%", top: "91%", size: "22px" },
    { left: "78%", top: "81%", size: "28px" },
    { left: "90%", top: "94%", size: "23px" }
];
snowflakes.forEach(flake => {

        const snow = document.createElement("div");

        snow.className = "snowflake";
        snow.innerHTML = "❄";

        snow.style.left = flake.left;
        snow.style.top = flake.top;
        snow.style.fontSize = flake.size;

        snowContainer.appendChild(snow);
    });
}