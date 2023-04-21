let questions = [
    {
        "question": "Wer trainierte Mainz und Dortmund?",
        "answer_1": "Julian Nagelsmann",
        "answer_2": "Hansi Flick",
        "answer_3": "Jürgen Klopp",
        "answer_4": "Bruno Labadia",
        "right_answer": 3,
    },
    {
        "question": "Wo liegen die Langerhanschen Inseln?",
        "answer_1": "In der Bauchspeicheldrüse",
        "answer_2": "In der Karibik",
        "answer_3": "Im Gehirn",
        "answer_4": "Nahe Kanada",
        "right_answer": 1,
    },
    {
        "question": "Wie heißt ein Charakter der Spieleserie 'Call of Duty'?",
        "answer_1": "John Snow",
        "answer_2": "Nucky Johnson",
        "answer_3": "Jason Array",
        "answer_4": "Soap MacTavish",
        "right_answer": 4,
    },
    {
        "question": "Welches Tier schmückt das Wappen des Hauses Baratheon aus der Serie 'Game of Thrones'?",
        "answer_1": "Krake",
        "answer_2": "Löwe",
        "answer_3": "Hirsch",
        "answer_4": "Wolf",
        "right_answer": 3,
    },
    {
        "question": "Welches Land gehört nicht zum Baltikum?",
        "answer_1": "Litauen",
        "answer_2": "Moldawien",
        "answer_3": "Estland",
        "answer_4": "Lettland",
        "right_answer": 2,
    },
    {
        "question": "Welcher Superheld gehört zu den Avengers?",
        "answer_1": "Superman",
        "answer_2": "Iron Man",
        "answer_3": "Batman",
        "answer_4": "Flash",
        "right_answer": 2,
    },
    {
        "question": "Welcher Fußballklub wird auch 'die alte Dame' genannt?",
        "answer_1": "Real Madrid",
        "answer_2": "AC Mailand",
        "answer_3": "Manchester United",
        "answer_4": "Juventus Turin",
        "right_answer": 4,
    },
    {
        "question": "Welcher ist der flächenmäßig größte US-Bundesstaat?",
        "answer_1": "Alaska",
        "answer_2": "Texas",
        "answer_3": "Kalifornien",
        "answer_4": "Michigan",
        "right_answer": 1,
    },
    {
        "question": "Welcher ist der erfolreicheste Kinofilm aller Zeiten?",
        "answer_1": "Avengers: Endgame",
        "answer_2": "Titanic",
        "answer_3": "Star Wars: Das Erwachen der Macht",
        "answer_4": "Avatar",
        "right_answer": 4,
    },
    {
        "question": "In welchem Jahr begann der 2. Weltkrieg?",
        "answer_1": "1942",
        "answer_2": "1945",
        "answer_3": "1939",
        "answer_4": "1936",
        "right_answer": 3,
    },
    
];


let currentQuestion = 0;
let rightQuestion = 0;
let AUDIO_SUCCESS = new Audio('audio/correct.mp3');
let AUDIO_FAIL = new Audio('audio/wrong.mp3');


function init() {
    document.getElementById('amount').innerHTML = questions.length;

    showQuestion();
}


function showQuestion() {

    if (currentQuestion >= questions.length) {
        showEndScreen();
    } else {
        showNextQuestion();
        updateProgressBar();
    }
}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;
    
    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).classList.add('bg-success');
        document.getElementById('overlayout').classList.remove('d-none');
        rightQuestion++;
        AUDIO_SUCCESS.play();
    } else {
        document.getElementById(selection).classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).classList.add('bg-success');
        document.getElementById('overlayout').classList.remove('d-none');
        AUDIO_FAIL.play();
    }
    document.getElementById('next-button').disabled = false;
}


function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    document.getElementById('overlayout').classList.add('d-none');

    resetAnswerButtons();
    showQuestion();
}


function resetAnswerButtons() {
    document.getElementById('answer_1').classList.remove('bg-danger');
    document.getElementById('answer_1').classList.remove('bg-success');
    document.getElementById('answer_2').classList.remove('bg-danger');
    document.getElementById('answer_2').classList.remove('bg-success');
    document.getElementById('answer_3').classList.remove('bg-danger');
    document.getElementById('answer_3').classList.remove('bg-success');
    document.getElementById('answer_4').classList.remove('bg-danger');
    document.getElementById('answer_4').classList.remove('bg-success');
}


function restartGame() {
    document.getElementById('header-image').src = 'img/card.jpg';
    document.getElementById('end-screen').style = 'display: none';
    document.getElementById('question-body').style = '';
    currentQuestion = 0;
    rightQuestion = 0;
    init();
}


function showEndScreen() {
    document.getElementById('end-screen').style = '';
    document.getElementById('question-body').style = 'display: none';
    document.getElementById('amountOfQuestions').innerHTML = questions.length;
    document.getElementById('amount-of-right-questions').innerHTML = rightQuestion;
    document.getElementById('header-image').src = 'img/winner.png';
}

function showNextQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}


function updateProgressBar() {
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent} %`;
    document.getElementById('progress-bar').style = `width: ${percent}%`;
}