function animate_slogan() {
    let slogan1 = "Think Petroleum... Think Energy!!!";
    let slogan2 = "Think Petroleum... Think UENR!!!";
    let slogan_tag = document.querySelector("#slogan");

    // Alternates between slogan1 and slogan2 at regular intervals
    if (slogan_tag.innerHTML === slogan1) {
        slogan_tag.innerHTML = slogan2;
    } else {
        if (slogan_tag.innerHTML === slogan2) {
            slogan_tag.innerHTML = slogan1
        }
    }
}

function initialize_voice() {
    // Gets the speechSynthesis object
    var engine = window.speechSynthesis;

    // Creates a new speechSynthesis utterance
    var utterance = new SpeechSynthesisUtterance();

    // Sets voice to use (optional)
    var voices = engine.getVoices();
    utterance.voice = voices[0];

    // Sets voice pitch (optional)
    utterance.pitch = 1.0;

    // Sets voice rate (optional)
    utterance.rate = 1.0;

    var outputValue = [engine, utterance];
    return outputValue;
}


async function start_quiz() {
    if ("speechSynthesis" in window) {

        var currentData = await fetchData(); 
        var qset_tag = document.querySelector("#qset");

        const voiceOutput = initialize_voice();
        const utterance = voiceOutput[1];
        const engine = voiceOutput[0];

        // Displays and reads-out question and answer in a recursive loop
        setTimeout(() => {
            // Sets text to be spoken
            utterance.text = currentData.questionV;

            // Displays question on qset tag
            qset_tag.innerHTML = currentData.question;

            // Speaks text
            engine.speak(utterance);

            // Display and speak answer on qset tag after 2 secs
            // .onend is calls the corresponding function after the engine has finished speaking
            utterance.onend = () => {
                setTimeout(() => {
                    qset_tag.innerHTML = currentData.answer;
                    utterance.text = `The correct answer is ${currentData.answerV}`;
                    engine.speak(utterance);
                    
                    // Restarts the recursion loop after the engine finishes speaking
                    utterance.onend = start_quiz;
                }, 2000);
            }
        }, 2000);

    } else {
        console.log("Sorry, your browser does not suppor the Web Speech API");
    }
}


async function fetchData() {
    try {
        const response = await fetch("http://127.0.0.1:8000/quiz.data");
        const newData = await response.json();
        return newData;
    } catch(error) {
        console.log("Error: ", error);
    }
}


document.addEventListener("DOMContentLoaded", () => {
    setTimeout(start_quiz, 3000);
    setInterval(animate_slogan, 5000);
});

/* an async function creates a desynchronized function that can run without distorting the main code
for example, by using the await statement, the function is delayed until a response is fetched or 
obtained. However, this does not affect the execution of the main code like a normal function would. */