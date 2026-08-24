console.log("NEW SCRIPT LOADED");
/* =========================
DOM ELEMENTS
========================= */

const semesterContainer =
document.getElementById("semesterContainer");

const addSemesterBtn =
document.getElementById("addSemesterBtn");

const calculateBtn =
document.getElementById("calculateBtn");

const errorMessage =
document.getElementById("errorMessage");

const resultSection =
document.getElementById("resultSection");

const cgpaValue =
document.getElementById("cgpa");

const semesterCount =
document.getElementById("semesterCount");

const messageBox =
document.getElementById("messageBox");

/* =========================
SEMESTER COUNTER
========================= */

let semesterNumber =
document.querySelectorAll(".semester-card").length;

/* =========================
ADD SEMESTER
========================= */

function addSemester() {


semesterNumber++;

const semesterCard =
    document.createElement("div");

semesterCard.className =
    "semester-card";

semesterCard.dataset.semester =
    semesterNumber;

semesterCard.innerHTML = `

    <div class="semester-card-header">

        <h3 class="semester-title">
            Semester ${semesterNumber} Details
        </h3>
<button
    type="button"
    class="remove-semester"
    title="Remove Semester">

    <img
        src="./trash.jpg"
        alt="Remove">
</button>
    </div>


    <div class="semester-input-row">

        <label>
            SGPA
        </label>

        <input
            type="number"
            class="sgpa-input"
            placeholder="Enter SGPA"
            min="0"
            max="10"
            step="0.01"
        >

    </div>


    <div class="semester-input-row">

        <label>
            Credits
        </label>

        <input
            type="number"
            class="credits-input"
            placeholder="Enter Credits"
            min="1"
            step="1"
        >

    </div>

`;


semesterContainer.appendChild(
    semesterCard
);


/* =========================
   REMOVE SEMESTER
========================== */

const removeButton =
    semesterCard.querySelector(
        ".remove-semester"
    );


removeButton.addEventListener(
    "click",
    () => {

        semesterCard.remove();

        semesterNumber =
            document.querySelectorAll(
                ".semester-card"
            ).length;

        errorMessage.classList.remove(
            "show"
        );

    }
);


errorMessage.classList.remove(
    "show"
);


}


/* =========================
VALIDATE INPUTS
========================= */

function validateInputs() {


const sgpaInputs =
    document.querySelectorAll(
        ".sgpa-input"
    );

const creditInputs =
    document.querySelectorAll(
        ".credits-input"
    );


if (sgpaInputs.length === 0) {
    return false;
}


for (
    let i = 0;
    i < sgpaInputs.length;
    i++
) {

    const sgpa =
        parseFloat(
            sgpaInputs[i].value
        );

    const credits =
        parseFloat(
            creditInputs[i].value
        );


    /* SGPA must be between 0 and 10 */

    if (
        isNaN(sgpa) ||
        sgpa < 0 ||
        sgpa > 10
    ) {

        return false;

    }


    /* Credits must be greater than 0 */

    if (
        isNaN(credits) ||
        credits <= 0
    ) {

        return false;

    }

}


return true;


}

/* =========================
CALCULATE CGPA
========================= */

function calculateCGPA() {


if (!validateInputs()) {

    errorMessage.textContent =
        "Please enter valid SGPA and credit values for all semesters.";

    errorMessage.classList.add(
        "show"
    );

    return;
}


errorMessage.classList.remove(
    "show"
);


const sgpaInputs =
    document.querySelectorAll(
        ".sgpa-input"
    );

const creditInputs =
    document.querySelectorAll(
        ".credits-input"
    );


let totalCreditPoints = 0;

let totalCreditsValue = 0;


/* Calculate weighted points */

for (
    let i = 0;
    i < sgpaInputs.length;
    i++
) {

    const sgpa =
        parseFloat(
            sgpaInputs[i].value
        );

    const credits =
        parseFloat(
            creditInputs[i].value
        );


    totalCreditPoints +=
        sgpa * credits;

    totalCreditsValue +=
        credits;

}


/* Calculate CGPA */

const cgpa =
    totalCreditPoints /
    totalCreditsValue;


/* =========================
   DISPLAY RESULT
========================== */

cgpaValue.textContent =
    cgpa.toFixed(2);


semesterCount.textContent =
    sgpaInputs.length;


messageBox.textContent =
    getMotivationalMessage(cgpa);


/* Show result */

resultSection.classList.remove(
    "hidden"
);


/* Smoothly move to result */

resultSection.scrollIntoView({
    behavior: "smooth",
    block: "center"
});


}

/* =========================
CUSTOM CGPA MESSAGE
========================= */

function getMotivationalMessage(cgpa) {


if (cgpa >= 9.5) {

    return "✨ Outstanding! Keep reaching higher.";

}


if (cgpa >= 9.0) {

    return "🌟 Excellent work! Keep the momentum going.";

}


if (cgpa >= 8.0) {

    return "💫 Great progress! You're doing really well.";

}


if (cgpa >= 7.0) {

    return "🌱 Good going! Keep building on it.";

}


if (cgpa >= 6.0) {

    return "💪 Keep pushing! There's more ahead.";

}


if (cgpa >= 5.0) {

    return "🌟 Keep going! Every semester is a new opportunity.";

}


return "🌿 Progress takes time — trust the process.";


}

/* =========================
BUTTON EVENTS
=========================*/ 

addSemesterBtn.addEventListener(
"click",
addSemester
);

calculateBtn.addEventListener(
"click",
calculateCGPA
);

document.querySelector(".back-button").addEventListener("click", function () {
    window.location.href = "../Home/index.html";
});

// Static Snowflakes
const snowContainer = document.querySelector(".snow-container");

const snowflakes = [
    { left: "4%",  top: "8%",  size: 18 },
    { left: "12%", top: "22%", size: 10 },
    { left: "20%", top: "6%",  size: 26 },
    { left: "29%", top: "18%", size: 14 },
    { left: "38%", top: "10%", size: 20 },
    { left: "47%", top: "27%", size: 11 },
    { left: "56%", top: "7%",  size: 24 },
    { left: "65%", top: "20%", size: 15 },
    { left: "74%", top: "9%",  size: 28 },
    { left: "84%", top: "25%", size: 12 },
    { left: "93%", top: "12%", size: 21 },

    { left: "7%",  top: "42%", size: 12 },
    { left: "17%", top: "55%", size: 24 },
    { left: "27%", top: "45%", size: 16 },
    { left: "39%", top: "58%", size: 9 },
    { left: "51%", top: "43%", size: 22 },
    { left: "63%", top: "57%", size: 13 },
    { left: "76%", top: "46%", size: 25 },
    { left: "88%", top: "54%", size: 17 },

    { left: "4%",  top: "76%", size: 23 },
    { left: "15%", top: "88%", size: 11 },
    { left: "28%", top: "73%", size: 18 },
    { left: "42%", top: "91%", size: 14 },
    { left: "56%", top: "78%", size: 27 },
    { left: "69%", top: "89%", size: 10 },
    { left: "81%", top: "74%", size: 20 },
    { left: "94%", top: "87%", size: 15 }
];

snowflakes.forEach(flake => {

    const snowflake = document.createElement("span");

    snowflake.className = "snowflake";
    snowflake.innerHTML = "❄";

    snowflake.style.left = flake.left;
    snowflake.style.top = flake.top;
    snowflake.style.fontSize = flake.size + "px";

    snowContainer.appendChild(snowflake);
});