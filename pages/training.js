const questions = [ '1. What is the normal range for adult blood pressure?',
                    '2. Which of the following is a priority assessment for a patient receiving opioids?',
                    '3. The nurse is caring for a client with heart failure. Which of the following findings \
                    would be most concerning?',
                    '4. Which vital sign should be assessed first in a patient who is lethargic and has a decreased \
                    level of consciousness?',
                    '5. A nurse is preparing to administer digoxin. What is the most important assessment prior to administration?',
                    '6. What dietary restriction is essential for a patient taking warfarin?',
                    '7. When should a nurse obtain a blood culture?',
                    '8. Which lab value would the nurse monitor for a patient receiving chemotherapy?',
                    '9. A patient with a history of smoking presents with a cough and hemoptysis. What should the nurse assess for first?',
                    '10. A patient has a postassium level of 3.0 mEq/L. What is the priority nursing intervention?',
                    '11. In caring for a patient with diabetes, what is the priority teaching to prevent complications?',
                    '12. Which of the following signs may indicate a patient is in shock?',
                    '13. The nurse reviews a patient\'s medication history and finds a prescription for multiple medications. \
                    What should the nurse assess for?',
                    '14. What is the primary purpose of performing a focused assessment?',
                    '15. For which patient would the nurse expect to see the most urgent call for an interpreter?'
                  ];
                
const options = [ [' A) 90/60 to 120/80',' B) 120/80 to 140/90',' C) 90/50 to 110/70',' D) 140/90 to 160/100'],
                [' A) Skin assessment', ' B) Bowel sounds', ' C) Respiratory rate', ' D) Blood glucose'],
                [' A) Edema', ' B) Shortness of breath at rest', ' C) Increased appetite', ' D) Weight gain of 2 lbs in 1 week'],
                [' A) Pulse', ' B) Blood pressure', ' C) Temperature', ' D) Respiratory rate'],
                [' A) Blood pressure', ' B) Heart rate', ' C) Oxygen saturation', ' D) Blood glucose'],
                [' A) Increased carbohydrates', ' B) Low-sodium diet', ' C) Foods high in vitamin K', ' D) High-protein diet'],
                [' A) Before antiobiotic administration', ' B) After antibiotic administration', ' C) Any time during the admission',
                ' D) Only if the patient has a fever'],
                [' A) Increased liver function tests', ' B) Elevated potassium', ' C) Low white blood cell count', ' D) Decreased hemoglobin'],
                [' A) Lung sounds', ' B) Chest pain', ' C) Jugular vein distention', ' D) Capillary refill'],
                [' A) Increase oral potassium intake', ' B) Administer potassium IV', ' C) Assess blood pressure', ' D) Administer a diuretic'],
                [' A) Eat a high fiber diet', ' B) Regular foot assessments', ' C) Monitor blood pressure', ' D) Maintain a healthy weight'],
                [' A) Bradycardia', ' B) Warm, dry skin', ' C) Hypotension', ' D) Hyperventilation'],
                [' A) Patient\'s adherence to the physician\'s orders', ' B) Potential drug interactions', ' C) Medication timing', ' D) Cost of medications'],
                [' A) To assess the patient\'s vital signs', ' B) To gather comprehensive health history', ' C) To address specific problems \
                identified in the nursing diagnosis', ' D) To prepare a teaching plan'],
                [' A) An elderly patient', ' B) A patient with a hearing impairment', ' C) A patient who speaks a different language',
                ' D) A patient with mild cognitive impairment']
                ];

const correctAnswers = ['A', 'C', 'B', 'D', 'B', 'C', 'A', 'C', 'A', 'B', 'B', 'C', 'B', 'C', 'C'];

let questionCount = 0
let gotCorrect = 0

document.getElementById("start").onclick = start;
document.getElementById("check").onclick = check;
document.getElementById("next").onclick = next;
document.getElementById("return").onclick = back;




//initial setup
function start() {
    questionCount = 0
    gotCorrect = 0

    document.getElementById("description").style.display = 'none';
    document.getElementById("start").style.display = 'none';

    const questionDiv = document.getElementById('question');
    questionDiv.style.display = 'block';
    questionDiv.innerHTML = questions[0];

    const optionsDiv = document.getElementById("options");
    const options1 = options[0];
    let htmlString = "";

    for (const i of options1) {
        let tempString =`<label for='${i[1]}'><input type='radio' id='${i[1]}' value='${i[1]}' name='question${questionCount+1}'>${i}</label>`;
        htmlString += tempString;
    }

    optionsDiv.innerHTML = htmlString;
    optionsDiv.style.display = 'flex';
    optionsDiv.style.flexDirection = 'column';

    document.getElementById("check").style.display = "block";
}



//check for correct answer
function check() {
    let label;

    if(document.querySelector(`input[value='${correctAnswers[questionCount]}']`).checked) {
        label = document.querySelector(`label[for=${correctAnswers[questionCount]}]`);
        label.innerHTML += "&nbsp;&nbsp;&nbsp; Correct!";
        label.style.color = 'green';
        gotCorrect++
    } else {
        let checked = document.querySelector(`input[name='question${questionCount+1}']:checked`);
        let value = checked.value;
        label = document.querySelector(`label[for=${value}]`);
        label.innerHTML += `&nbsp;&nbsp;&nbsp; Incorrect. &nbsp;The correct answer was ${correctAnswers[questionCount]}.`;
        label.style.color = 'red';
    }

    document.getElementById("check").style.display = 'none';
    document.getElementById("next").style.display = 'block';

}



//next question or end of questionnaire
function next() {
    questionCount++
    const questionDiv = document.getElementById('question');
    const optionsDiv = document.getElementById("options");
    const questionOptions = options[questionCount];


    if (questionCount <= 14) {
        questionDiv.innerHTML = questions[questionCount];
        let htmlString = "";

        for (const i of questionOptions) {
            let tempString =`<label for='${i[1]}'><input type='radio' id='${i[1]}' value='${i[1]}' name='question${questionCount+1}'>${i}</label>`;
            htmlString += tempString;
        }
    
        optionsDiv.innerHTML = htmlString;
        document.getElementById("next").style.display = 'none';
        document.getElementById("check").style.display = "block";

    } else {
        questionDiv.innerHTML = "Congratulations!"
        document.getElementById("options").style.display = 'none';
        document.getElementById("next").style.display = 'none';
        document.getElementById("description").innerHTML = `You completed the questionnaire. You got ${gotCorrect}/15 questions correct.`
        document.getElementById("description").style.display = 'block';
        document.getElementById("return").style.display = 'block';
    }
}



//go back to training page
function back() {
    document.getElementById("return").style.display = 'none';
    window.location.replace("training.html")
}