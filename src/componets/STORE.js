const STORE = {
    Projects : [
        {
            id: 1,
            name: 'Penny Thoughts',
            live:'https://penny-thoughts.vercel.app/',
            summary: "This app is an uplifting, anonymous, message sharing app. Negative messages are filtered out using a toxicity filter from TensorFlow.",
            repo: "https://github.com/thinkful-ei-narwhal/penny-thoughts-client",
            tech: ["html","css","js"],
            img:"/images/QuizApp.png"
        },
        {
            id: 2,
            name: 'Space Rep',
            live:'https://spaced-rep-french.vercel.app',
            summary: "This app helps users implement the spaced repetition technique to help users learn ten preloaded French words. New Users can create an account. Returning users can log in and begin practicing with instant feedback and reinforcement.",
            repo: "https://github.com/thinkful-ei-narwhal/french-langue-cesarkevin",
            tech: ["html","css","js"],
            img:"/images/QuizApp.png"
        },
        {
            id: 3,
            name: 'Quiz App',
            live:'https://thinkful-ei-narwhal.github.io/Quiz-App_Cesar_Yousef/',
            summary: "Quiz app is a game for anyone that wants to test their knowledge. The game tracks the user's current progression, as well as whether the user has selected the correct or incorrect answer. Then it will display that information after each question has been answered. At the end the user will be provided with their score and how many questions they got correct or incorrect. I made this as a tool to help me study for future tests.",
            repo: "https://github.com/thinkful-ei-narwhal/Quiz-App_Cesar_Yousef",
            tech: ["html","css","js","jquery"],
            img:"/images/QuizApp.png"
        }
    ]
}
export default STORE;