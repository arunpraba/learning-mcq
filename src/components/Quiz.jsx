import { useState } from "react";
import confetti from "canvas-confetti";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

import { getQuestions } from "../utils/getQuestions";
import { questionsByCategory } from "../data";

export default function Quiz({ selectedTopic }) {
    const [questions, setCurrentQuestions] = useLocalStorageState(
        "questions",
        () => getQuestions({ questions: questionsByCategory[selectedTopic] })
    );
    const [selectedOptions, setSelectedOptions] = useLocalStorageState(
        "selectedOptions",
        {}
    );
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const score = Object.keys(selectedOptions).reduce((acc, questionIndex) => {
        const isCorrect =
            selectedOptions[questionIndex] ===
            questions[questionIndex].correctAnswer;
        if (isCorrect) {
            acc++;
        }
        return acc;
    }, 0);

    const handleOptionSelect = (option) => {
        setSelectedOptions({
            ...selectedOptions,
            [currentQuestionIndex]: option,
        });
        if (option === questions[currentQuestionIndex].correctAnswer) {
            // Define your rewards
            const rewards = ["🎉", "🎁", "🏆", "🥇", "🥈", "🥉"];

            // Select a random reward
            const reward = rewards[Math.floor(Math.random() * rewards.length)];

            // Display the reward using confetti
            confetti({
                particleCount: 200,
                startVelocity: 30,
                spread: 500,
                origin: { y: 0.1 },
                shapes: [reward],
            });

            // Go to the next question after 1 second
            setTimeout(goToNextQuestion, 1000);
        }
    };

    const goToNextQuestion = () => {
        // Remove the focus from the selected option
        document.activeElement.blur();
        if (currentQuestionIndex === questions.length - 1) {
            handleSubmit();
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const goToPreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const resetQuestions = () => {
        setCurrentQuestions(getQuestions);
        setCurrentQuestionIndex(0);
        setSelectedOptions({});
    };

    const handleSubmit = () => {
        const percentage = (score / questions.length) * 100;
        let emoji;
        if (percentage >= 70) {
            emoji = "🎉";
        } else if (percentage >= 30) {
            emoji = "😊";
        } else {
            emoji = "😢";
        }
        alert(`
      Your score is ${parseInt(percentage)}%! ${emoji}

      Number of correct answers: ${score} / ${questions.length}
      
      Number of incorrect answers: ${questions.length - score} / ${
            questions.length
        }
    `);
    };

    const question = questions[currentQuestionIndex];

    if (!question) {
        return <div>No questions found</div>;
    }

    return (
        <div className="quiz-container">
            <div className="question-section">
                <div className="question-count">
                    <span>Question: {currentQuestionIndex + 1}</span>
                </div>
                <div className="question-text">{question.text}</div>
            </div>
            <div className="option-section">
                {question.options.map((option) => (
                    <button
                        key={option.id}
                        className={`option-button ${
                            selectedOptions[currentQuestionIndex] === option.id
                                ? "selected"
                                : ""
                        }`}
                        onClick={() => handleOptionSelect(option.id)}
                    >
                        {option.text}
                    </button>
                ))}
            </div>
            <div className="navigation-section">
                <button
                    onClick={goToPreviousQuestion}
                    disabled={currentQuestionIndex === 0}
                >
                    Prev
                </button>
                <button
                    onClick={goToNextQuestion}
                    disabled={currentQuestionIndex === questions.length - 1}
                >
                    Next
                </button>
            </div>
            <div className="score-section">
                Score: {score}/{questions.length}
            </div>
            <div className="navigation-section">
                <button onClick={resetQuestions}>Reset Questions</button>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}
