let recursionQuestions = [
    {
        text: "What is recursion in programming?",
        options: [
            { id: "A", text: "A loop that runs indefinitely" },
            {
                id: "B",
                text: "A programming concept where a function calls itself to solve a problem",
            },
            { id: "C", text: "A method to increase program efficiency" },
            { id: "D", text: "A way to create complex data structures" },
        ],
        correctAnswer: "B",
    },
    {
        text: "In recursion, how is a complex problem typically approached?",
        options: [
            { id: "A", text: "By avoiding it" },
            {
                id: "B",
                text: "By breaking it down into simpler, similar subproblems",
            },
            { id: "C", text: "By solving it all at once" },
            { id: "D", text: "By using a loop" },
        ],
        correctAnswer: "B",
    },
    {
        text: "What is the purpose of a base case in a recursive function?",
        options: [
            { id: "A", text: "To make the code more complex" },
            {
                id: "B",
                text: "To stop the recursion and provide the final solution",
            },
            { id: "C", text: "To introduce errors" },
            { id: "D", text: "To confuse the programmer" },
        ],
        correctAnswer: "B",
    },
    {
        text: "Which programming problem involves calculating the factorial of a number using recursion?",
        options: [
            { id: "A", text: "Fibonacci sequence" },
            { id: "B", text: "Binary tree traversal" },
            { id: "C", text: "Factorial calculation" },
            { id: "D", text: "Tetris game development" },
        ],
        correctAnswer: "C",
    },
    {
        text: "What is the recursive formula to calculate the factorial of a number 'n'?",
        options: [
            { id: "A", text: "n! = n * (n+1)!" },
            { id: "B", text: "n! = n - (n-1)!" },
            { id: "C", text: "n! = n * (n-1)!" },
            { id: "D", text: "n! = n * (n-1)! * (n-2)!" },
        ],
        correctAnswer: "C",
    },
    {
        text: "In the Fibonacci sequence, what are the base cases?",
        options: [
            { id: "A", text: "F(0) = 0 and F(1) = 1" },
            { id: "B", text: "F(0) = 1 and F(1) = 2" },
            { id: "C", text: "F(0) = 0 and F(1) = 2" },
            { id: "D", text: "F(0) = 1 and F(1) = 0" },
        ],
        correctAnswer: "A",
    },
    {
        text: "How is the Fibonacci sequence generated using recursion?",
        options: [
            { id: "A", text: "F(n) = F(n+1) + F(n-1)" },
            { id: "B", text: "F(n) = F(n-2) * F(n-1)" },
            { id: "C", text: "F(n) = F(n-1) - F(n-2)" },
            { id: "D", text: "F(n) = F(n-1) + F(n-2)" },
        ],
        correctAnswer: "D",
    },
    {
        text: "Which type of tree traversal can be implemented using recursion?",
        options: [
            { id: "A", text: "Waterfall traversal" },
            { id: "B", text: "Zigzag traversal" },
            {
                id: "C",
                text: "In-order, pre-order, and post-order tree traversal",
            },
            { id: "D", text: "Random traversal" },
        ],
        correctAnswer: "C",
    },
    {
        text: "In a binary tree, what is the purpose of in-order traversal?",
        options: [
            { id: "A", text: "To sort the tree elements" },
            { id: "B", text: "To find the largest element" },
            { id: "C", text: "To explore the left subtree first" },
            { id: "D", text: "To explore the right subtree first" },
        ],
        correctAnswer: "A",
    },
    {
        text: "What is a key takeaway when working with recursion?",
        options: [
            { id: "A", text: "Recursion should always be avoided" },
            { id: "B", text: "Recursion is only useful for simple problems" },
            {
                id: "C",
                text: "Understanding the base case and recursive case is essential",
            },
            {
                id: "D",
                text: "Recursion can only be applied to mathematical problems",
            },
        ],
        correctAnswer: "C",
    },
    {
        text: "In recursion, what happens when the base case is reached?",
        options: [
            { id: "A", text: "The program crashes" },
            { id: "B", text: "The recursion continues indefinitely" },
            {
                id: "C",
                text: "The recursion stops, providing the final solution",
            },
            { id: "D", text: "The recursion restarts from the beginning" },
        ],
        correctAnswer: "C",
    },
    {
        text: "Which of the following is NOT an example of a recursive problem?",
        options: [
            { id: "A", text: "Calculating the factorial of a number" },
            { id: "B", text: "Solving a Sudoku puzzle" },
            { id: "C", text: "Searching for an element in an array" },
            {
                id: "D",
                text: "Computing the nth term of the Fibonacci sequence",
            },
        ],
        correctAnswer: "C",
    },
    {
        text: "In recursion, what does each subproblem contribute towards?",
        options: [
            { id: "A", text: "Increasing the complexity of the problem" },
            { id: "B", text: "Stopping the recursion" },
            { id: "C", text: "Providing the final solution" },
            { id: "D", text: "Solving a simpler part of the problem" },
        ],
        correctAnswer: "D",
    },
    {
        text: "What is the recursive formula for generating the nth term of the Fibonacci sequence?",
        options: [
            { id: "A", text: "F(n) = F(n-1) + F(n-2)" },
            { id: "B", text: "F(n) = F(n+1) * F(n-1)" },
            { id: "C", text: "F(n) = F(n-1) - F(n-2)" },
            { id: "D", text: "F(n) = F(n-1) / F(n-2)" },
        ],
        correctAnswer: "A",
    },
    {
        text: "How can recursion be described as a problem-solving approach?",
        options: [
            {
                id: "A",
                text: "By dividing a complex problem into simpler, similar subproblems",
            },
            { id: "B", text: "By avoiding the use of functions" },
            { id: "C", text: "By creating complex data structures" },
            { id: "D", text: "By using only loops" },
        ],
        correctAnswer: "A",
    },
];

export const questionsByCategory = {
    Recursion: recursionQuestions,
    Array: [],
};
