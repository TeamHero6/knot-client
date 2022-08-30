const initialStata = {
    search: null,
    account: [
        {
            id: 1,
            Ques: "How to create a CEO account?",
            Ans: "After going to the signup page then type your name, email and select your role as a CEO and fillup other information with company logo then click the signup button.",
        },
        {
            id: 2,
            Ques: "How to create a manager account?",
            Ans: "After going to the signup page then type your name, email and select your role as a manager and fill up other information with the company logo then click the signup button.",
        },
        {
            id: 3,
            Ques: "How to create an employee account?",
            Ans: "After going to the signup page then type your name, email and select your role as an employee and fill up other information with company secret code then click the signup button.",
        },
        {
            id: 4,
            Ques: "How can I sign in Knot?",
            Ans: "3 ways to sign in to our website. #When you have CEO account sign in with email, role and password, #When you have manager account sign in with email , role and password, #When you have employee account sign in with email, role , password and company secret code ",
        },
        {
            id: 5,
            Ques: "How to access your profile?",
            Ans: "If you have an account then go to the home page . There you can see profile icon. After clicking the profile icon it will show settings. There you can access your profile.",
        },
        {
            id: 6,
            Ques: "How to change your account profile picture?",
            Ans: "After going to the profile setting page, you can see edit option. After clicking the edit option you can change your profile picture.",
        },
        {
            id: 7,
            Ques: "How to update full name?",
            Ans: "After going to the profile setting page, you can see edit option. After clicking the edit option you can update your full name.",
        },
        {
            id: 8,
            Ques: "Do you want to create a strong password?",
            Ans: "If you want to create a strong password then use some capital word, special symbol and use numbers.",
        },
    ],
};

const FaqReducer = (state = initialStata, action) => {
    if (action.type === "FAQ") {
        return {
            ...state,
            searchTerm: {
                ...state.searchTerm,
                value: action.payload,
            },
        };
    } else {
        return state;
    }
};

export default FaqReducer;
