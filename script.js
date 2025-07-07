const questions = [
    {
      question: "What is Aishwarya’s full name?",
      answers: [
        { text: "Aishwarya singh", correct: false },
        { text: "Aishwarya dubey", correct: false },
        { text: "Aishwarya Gowda", correct: true },
        { text: "Aishwarya parmar", correct: false }

      ]
    },
    {
      question: "Where did Aishwarya and I first meet?",
      answers: [
        { text: "office", correct: false },
        { text: "Carrom", correct: true },
        { text: "school", correct: false },
        { text: "club", correct: false }

      ]
    },
    {
      question: "What’s Aishwarya’s favorite hobby?",
      answers: [
        { text: "Reading", correct: false },
        { text: "Singing", correct: false },
        { text: "sleeping", correct: true },
        { text: "Cooking", correct: false }

      ]
    },
    {
      question: "Which place would Aishwarya likes in bed?",
      answers: [
        { text: "bdsm", correct: true },
        { text: " simple ", correct: false },
        { text: "dominating", correct: false },
        { text: "nothing", correct: false }

      ]
    },
    {
      question: "What’s Aishwarya’s favorite body part of mine?",
      answers: [
        { text: "eyes", correct: false },
        { text: "dick", correct: true },
        { text: "hands", correct: false },
        { text: "legs", correct: false }

      ]
    }
  ];
  
  const questionContainer = document.getElementById("question-container");
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  const startButton = document.getElementById("start-btn");
  const music = document.getElementById("bg-music");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  startButton.addEventListener("click", () => {
    music.play();
    startButton.style.display = "none";
    startQuiz();
  });
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
  
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
      answerButtons.appendChild(button);
    });
  }
  
  function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }
  
  function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
      score++;
      selectedBtn.style.background = "green";
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else {
      selectedBtn.style.background = "darkred";
    }
    Array.from(answerButtons.children).forEach(button => {
      button.disabled = true;
    });
    nextButton.style.display = "block";
  }
  
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  });
  
  function showScore() {
    resetState();
  
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.4 }
    });
  
    questionElement.innerHTML = `
      <h2>🎉 Aishwarya, you scored ${score} out of ${questions.length}! 🎉</h2>
      <p> Hey birthday girl hope u like the game . I know u like playing the games isiliye usse banaya . And i know itna koi khaas game nhi hai but I hoped u liked the game.

Okay so 

So mujhe YHI kehena hai ki Thank you for coming into my life in a friendly way😂 yarr tumhara aane se meri life aur masti bhari hogyi hai..I like talking to u...and agar koi stress raha toh idk but baat karke woh km ho jaata hai ..tho stress reheta nhi but jab bhi ho woh km hota hai... I know him virtually mile but ek strong connection sa hogaya tumhare tho hum kabhi mile nhi face to face but hope ye jaldi ho aapke shaadi se pehele 😂...and I am sorry ki mai aapka birthday grand tarike se nhi kar pata but jitna ho saka i tried my best. And haa u are my favourite and one and only slave. And will always be...hehe... Hope aapke woh jo other side hai jismai saare dukh hai woh hamesha keliye durr ho jaaye and hamesha khush rahiye... Ya ya I know tum khush hi ho and u are a wondergirl but fir bhi as ur well wisher mujhe aisa lagta hai.  I think bohot boll lia 

Aur bass jaate jaate ye kahunga ki.




"Dooriyon ka kya gila karein,
Dil toh roz mil jaate hain,

Tere har lafz mein dosti ki mehak hai,
Jise hum saans saans mehsoos kar jaate hain.

Tu bhi apni si lagti hai,
Khushiyon ki wajah ban jaati hai,

Jitni khaas hai teri yaari,
Utni hi pyaari teri har baat lagti hai.

Janmdin par tere, yeh dil dua kare,
Teri har subah khushiyon se saja kare.

Tere jaise dost par hum bhi naaz karein,
Bas yun hi humari dosti hamesha raaz kare."</p>
      <p>May your 26th year be filled with joy, success, and endless smiles!</p>
      <h3>💖 Happy Birthday, Aishwarya! 💖</h3>
    `;
    nextButton.innerText = "Play Again";
    nextButton.style.display = "block";
    nextButton.onclick = startQuiz;
  }
  