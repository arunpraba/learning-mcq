export const getQuestions = ({ questions }) => {
    if (!questions) return [];
    return questions
        .sort(() => Math.random() - 0.5)
        .map((question) => {
            const options = question.options.sort(() => Math.random() - 0.5);
            return { ...question, options };
        });
};
