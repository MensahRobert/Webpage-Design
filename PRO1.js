const questions = [
    {
        question: "1. What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyper Tabular Markup Language", "High Tabular Markup Language"],
        answer: 0
    },
    {
        question: "2. Which tag is used to insert an image in HTML?",
        options: ["<image>", "<img>", "<pic>", "<src>"],
        answer: 1
    },
    {
        question: "3. Which CSS property sets the background color?",
        options: ["background", "background-color", "color", "bgcolor"],
        answer: 1
    },
    {
        question: "4. What is a <div> in HTML?",
        options: ["An image tag", "An inline tag", "A block-level container", "A list item"],
        answer: 2
    },
    {
        question: "5. What is the default display of a <span> element?",
        options: ["block", "inline", "none", "flex"],
        answer: 1
    },
    {
        question: "6. Which tag is used to create a link?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        answer: 1
    },
    {
        question: "7. What is the purpose of the alt attribute in <img>?",
        options: ["To style the image", "To change the file path", "To describe the image", "To hide the image"],
        answer: 2
    },
    {
        question: "8. What is the correct syntax to link a CSS file?",
        options: ["<style src='style.css'>", "<css link='style.css'>", "<link rel='stylesheet' href='style.css'>", "<script href='style.css'>"],
        answer: 2
    },
    {
        question: "9. Which unit is relative to the root font-size?",
        options: ["em", "rem", "%", "px"],
        answer: 1
    },
    {
        question: "10. What does CSS stand for?",
        options: ["Cascading Style Sheet", "Creative Styling Sheets", "Computer Style Sheet", "Central Style Service"],
        answer: 0
    },
    {
        question: "11. What is a responsive web design?",
        options: ["Fixed layout", "Only works on mobile", "Auto adjusts layout for all devices", "Print-friendly layout"],
        answer: 2
    },
    {
        question: "12. Which property changes font size?",
        options: ["font-size", "text-size", "size", "text-style"],
        answer: 0
    },
    {
        question: "13. Which tag represents a navigation menu?",
        options: ["<menu>", "<nav>", "<navigation>", "<header>"],
        answer: 1
    },
    {
        question: "14. What is the viewport meta tag for?",
        options: ["For screen readers", "For SEO", "To control layout on mobile browsers", "To change background color"],
        answer: 2
    },
    {
        question: "15. Which of the following is an HTML5 semantic tag?",
        options: ["<section>", "<font>", "<center>", "<big>"],
        answer: 0
    },
    {
        question: "16. Which selector selects all elements with class 'item'?",
        options: [".item", "#item", "item", "*item"],
        answer: 0
    },
    {
        question: "17. How do you comment in CSS?",
        options: ["// comment", "<!-- comment -->", "/* comment */", "# comment"],
        answer: 2
    },
    {
        question: "18. What is the use of <meta charset='UTF-8'>?",
        options: ["Set page title", "Set viewport", "Define character encoding", "Embed scripts"],
        answer: 2
    },
    {
        question: "19. Which CSS property controls the spacing outside an element?",
        options: ["padding", "border", "margin", "gap"],
        answer: 2
    },
    {
        question: "20. Which HTML tag defines a table row?",
        options: ["<tr>", "<td>", "<th>", "<table-row>"],
        answer: 0
    },
    {
        question: "21. What does Z-index control?",
        options: ["Font size", "Element stacking order", "Padding", "Color depth"],
        answer: 1
    },
    {
        question: "22. Which element is used to define a form in HTML?",
        options: ["<form>", "<input>", "<label>", "<textarea>"],
        answer: 0
    },
    {
        question: "23. What does the 'action' attribute in <form> specify?",
        options: ["Button label", "URL to send form data", "Form ID", "CSS styling"],
        answer: 1
    },
    {
        question: "24. Which HTML element groups options in a drop-down list?",
        options: ["<option>", "<input>", "<optgroup>", "<select>"],
        answer: 2
    },
    {
        question: "25. Which HTML5 element is used for footnotes?",
        options: ["<aside>", "<footer>", "<bottom>", "<note>"],
        answer: 1
    },
    {
        question: "26. Which CSS property creates shadow on text?",
        options: ["box-shadow", "text-shadow", "shadow-text", "font-shadow"],
        answer: 1
    },
    {
        question: "27. Which layout system uses rows and columns?",
        options: ["Float", "Flexbox", "CSS Grid", "Inline-block"],
        answer: 2
    },
    {
        question: "28. Which of these is not a semantic HTML element?",
        options: ["<article>", "<header>", "<div>", "<footer>"],
        answer: 2
    },
    {
        question: "29. How do you apply a CSS style to all <p> elements?",
        options: ["#p {}", ".p {}", "p {}", "*p {}"],
        answer: 2
    },
    {
        question: "30. Which is used to animate transitions?",
        options: ["transform", "transition", "hover", "style"],
        answer: 1
    },
    {
        question: "31. Which is not a valid CSS position value?",
        options: ["absolute", "relative", "fixed", "centered"],
        answer: 3
    },
    {
        question: "32. How do you embed JavaScript in HTML?",
        options: ["<script>", "<js>", "<code>", "<javascript>"],
        answer: 0
    },
    {
        question: "33. What is a pseudo-class in CSS?",
        options: ["A fake class", "A class that only works with JavaScript", "A keyword added to selectors that specifies a special state", "A CSS variable"],
        answer: 2
    },
    {
        question: "34. What is ARIA in web design?",
        options: ["A layout framework", "Accessibility guidelines", "Attributes for improving accessibility", "SEO tool"],
        answer: 2
    },
    {
        question: "35. Which attribute disables an HTML input field?",
        options: ["disabled", "readonly", "inactive", "stop"],
        answer: 0
    },
    {
        question: "36. Which tag is used for embedding videos in HTML5?",
        options: ["<media>", "<movie>", "<video>", "<mp4>"],
        answer: 2
    },
    {
        question: "37. What does 'em' unit represent?",
        options: ["Fixed size", "Root font size", "Relative to current font size", "Pixels"],
        answer: 2
    },
    {
        question: "38. Which tool helps organize and test CSS visually?",
        options: ["Git", "Photoshop", "Figma", "Chrome DevTools"],
        answer: 3
    },
    {
        question: "39. Which selector applies styles to all elements?",
        options: ["*", "all", "universal", "document"],
        answer: 0
    },
    {
        question: "40. What is a breakpoint in responsive design?",
        options: ["Font resize point", "Image resolution", "CSS variable", "Screen width where layout changes"],
        answer: 3
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('quiz');
const nextButton = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result');

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerHTML = `
        <div class="quiz-container">
            <h2>${currentQuestion.question}</h2>
            <form id="quiz-form">
                ${currentQuestion.options.map((option, index) => `
                    <div class="question">
                        <label class="option">
                            <input type="radio" name="option" value="${index}">
                            ${option}
                        </label>
                    </div>
                `).join('')}
            </form>
        </div>
    `;
    resultContainer.innerHTML = "";
}

function displayResult() {
    const totalQuestions = questions.length;
    questionContainer.innerHTML = `
        <div class="quiz-container">
            <h2>Quiz Completed!</h2>
            <p>Your Score: ${score}/${totalQuestions}</p>
        </div>
    `;
    resultContainer.innerHTML = "";
}

nextButton.addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const answerIndex = parseInt(selectedOption.value);
        if (answerIndex === questions[currentQuestionIndex].answer) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            displayResult();
            nextButton.style.display = 'none';
        }
    } else {
        alert("Please select an answer before proceeding!");
    }
});

// Initialize the quiz
loadQuestion();
