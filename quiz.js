function submitQuiz() {
    const answers = document.querySelectorAll('input[type="radio"]:checked');
    const results = [];
    
    answers.forEach((answer) => results.push(answer.value));

    const frequentResponses = results.filter((res) => res === "Frequently" || res === "Always").length;

    let feedback = "";

    if (frequentResponses >= 8) {
        feedback = "Your responses indicate you may be experiencing significant stress or mental health challenges. It is recommended to seek support from a mental health professional.";
    } else if (frequentResponses >= 5) {
        feedback = "You may be facing some mental health struggles. Consider exploring self-care techniques or talking to someone you trust.";
    } else {
        feedback = "Your responses suggest you are managing well overall. Continue practicing healthy habits and self-care.";
    }

    document.getElementById("quizResult").innerText = feedback;
}
