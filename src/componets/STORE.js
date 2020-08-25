const STORE = {
    Projects : [
        {
            id: 1,
            name: 'Penny Thoughts',
            live:'https://penny-thoughts.vercel.app/',
            summary: "In a world where COVID-19, boiling racial tensions, and deepening political divides are deteriorating a large portion of the population's mental health, Penny Thoughts was built to help fight off negativity. It is a space where the common folk can motivate those who fell victim to these stressful times by anonymously sharing and receiving uplifting messages. Taking into account that some users may not have the best intentions, TensorFlow AI was used as a filter to ensure all messages sent are appropriate.",
            repo: "https://github.com/thinkful-ei-narwhal/penny-thoughts-client",
            tech: ["html","css","js","node","postgresql","react","knex", "mocha","express"],
            img:"/images/Penny-Thoughts.png"
        },
        {
            id: 2,
            name: 'Space Rep',
            live:'https://spaced-rep-french.vercel.app',
            summary: "This app was built to help anyone trying to learn French. It has implemented the spaced repetition technique to help its users quickly learn ten preloaded French words. New users can create an account, whereas returning users can log in and begin practicing with instant feedback and reinforcement.",
            repo: "https://github.com/thinkful-ei-narwhal/french-langue-cesarkevin",
            tech: ["html","css","js","node","postgresql","react","knex", "mocha","express"],
            img:"/images/Spaced-Rep.png"
        },
        {
            id: 3,
            name: 'My Discipline - Habit Tracker',
            live:'https://my-discipline.now.sh/',
            summary: "My Discipline was built for individuals looking to better themselves by keeping track and organizing all of their habits. The user starts by setting the goals they want to meet. Then generating a collection of habits they want to have, and quickly seeing their consistency in a calendar every time they log in.",
            repo: "https://github.com/cesarlenin/my-discipline",
            tech: ["html","css","js","node","postgresql","react","knex", "mocha","express"],
            img:"/images/My-Discipline.png"
        },
        {
            id: 4,
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