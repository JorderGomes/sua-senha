const rules = {
  hasLower: /[a-z]/,
  hasUpper: /[A-Z]/,
  hasNumber: /[0-9]/,
  hasSpecial: /[!@#$%^&*]/,
};

const FEEDBACK_DICT = [
  { min: 1, max: 2, text: "Só isso? Tá querendo entregar sua conta é?", img: "assets/score-1-2.jpeg"},
  { min: 3, max: 4, text: "Hmm, espero que essa conta não seja tão importante." , img: "assets/score-3-4.jpeg"},
  { min: 5, max: 6, text: "Acha que essa senha tá na média?" , img: "assets/score-5-6.jpeg"},
  { min: 7, max: 8, text: "Talvez sirva, né?" , img: "assets/score-7-8.jpeg"},
  { min: 9, max: 10, text: "É, acho que está boa. Só espero que lembre disso aí.", img: "assets/score-9-10.jpeg"} 
];

const INITIAL_MESSAGE = "Ainda não escreveu nada? Ótimo.";
const INITIAL_IMAGE_SRC = "assets/score-0.jpeg";

const passwordInput = document.getElementById('password-field');
const resultDiv = document.getElementById('result');
const toggleBtn = document.getElementById('toggle-password');
const eyeIcon = document.getElementById('eye-icon');

function analyzePassword(password) {
  if (!password || typeof password !== 'string') return 0;

  let score = 0;
  const len = password.length;

  if (rules.hasLower.test(password)) score += 1;
  if (rules.hasUpper.test(password)) score += 1;
  if (rules.hasNumber.test(password)) score += 1;
  if (rules.hasSpecial.test(password)) score += 1;

  if (len >= 16) {
    score += 6;
  } else if (len >= 12) {
    score += 4;
  } else if (len >= 8) {
    score += 2;
  } else if (len >= 4) {
    score += 1;
  }

  return Math.max(1, Math.min(score, 10));
}

function getFeedback(score) {
  const feedback = FEEDBACK_DICT.find(item => score >= item.min && score <= item.max);
  
  // return feedback ? feedback.text : "Não sei nem o que dizer sobre essa senha.";
  return feedback;
}

passwordInput.addEventListener('input', () => {
  const password = passwordInput.value;

  if (password.length === 0) {
    resultDiv.textContent = INITIAL_MESSAGE;
    document.getElementById('status-character').src = INITIAL_IMAGE_SRC;
    return;
  }

  const score = analyzePassword(password);
  const feedback = getFeedback(score);
  
  resultDiv.textContent = feedback.text;
  document.getElementById('status-character').src = feedback.img;
});

toggleBtn.addEventListener('click', () => {
    // Alterna o tipo do input
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // Alterna o ícone (opcional: pode usar ícones do Bootstrap ou emojis)
    eyeIcon.textContent = type === 'password' ? '👁️' : '🙈';
});