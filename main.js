document.getElementById('salesForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const buyerName = document.getElementById('buyerName').value;
    const itemName = document.getElementById('itemName').value;
    const itemPrice = parseFloat(document.getElementById('itemPrice').value);
    const itemQuantity = parseInt(document.getElementById('itemQuantity').value);
    const paymentAmount = parseFloat(document.getElementById('paymentAmount').value);

    const totalPrice = itemPrice * itemQuantity;
    const changeAmount = paymentAmount - totalPrice;

    const newRow = `
        <tr>
            <td>${buyerName}</td>
            <td>${itemName}</td>
            <td>${itemPrice.toFixed(2)}</td>
            <td>${itemQuantity}</td>
            <td>${totalPrice.toFixed(2)}</td>
            <td>${paymentAmount.toFixed(2)}</td>
            <td>${changeAmount.toFixed(2)}</td>
        </tr>
    `;

    document.getElementById('buyerData').insertAdjacentHTML('beforeend', newRow);

    this.reset();
});

document.querySelector('button[type="reset"]').addEventListener('click', function() {
    document.getElementById('buyerData').innerHTML = '';
});




function tambahPeminjam() {
    var nama = document.getElementById("nama").value;
    var umur = document.getElementById("umur").value;
    var alamat = document.getElementById("alamat").value;
    var jenisKelamin = document.getElementById("jenisKelamin").value;
    var buku = document.getElementById("buku").value;

    if (nama && umur && alamat && jenisKelamin && buku) {
        var tabelPeminjam = document.getElementById("tabelPeminjam");
        var row = tabelPeminjam.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);

        cell1.innerHTML = nama;
        cell2.innerHTML = umur;
        cell3.innerHTML = alamat;
        cell4.innerHTML = jenisKelamin;
        cell5.innerHTML = buku;

        document.getElementById("formPeminjaman").reset();
    } else {
        alert("Mohon isi semua data peminjam.");
    }
}

function resetTable() {
    var tabelPeminjam = document.getElementById("tabelPeminjam");
    tabelPeminjam.innerHTML = "";
}


const questions = [
    {
        question: "Apa ibu kota Indonesia?",
        answers: [
            { text: "Jakarta", correct: true },
            { text: "Bandung", correct: false },
            { text: "Surabaya", correct: false },
            { text: "Medan", correct: false }
        ]
    },
    {
        question: "Apa ibu kota Jepang?",
        answers: [
            { text: "Tokyo", correct: true },
            { text: "Kyoto", correct: false },
            { text: "Osaka", correct: false },
            { text: "Nagoya", correct: false }
        ]
    },
    {
        question: "Apa ibu kota Perancis?",
        answers: [
            { text: "Paris", correct: true },
            { text: "Lyon", correct: false },
            { text: "Marseille", correct: false },
            { text: "Nice", correct: false }
        ]
    }
];

const startButton = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-btn');

let shuffledQuestions, currentQuestionIndex, score;

startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', startGame);

function startGame() {
    startButton.classList.add('d-none');
    resultContainer.classList.add('d-none');
    questionContainer.classList.remove('d-none');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn', 'btn-outline-primary');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        setNextQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    questionContainer.classList.add('d-none');
    resultContainer.classList.remove('d-none');
    scoreElement.innerText = `Skor Anda: ${score}`;
}
