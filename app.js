// app.js (diperbarui) — menambahkan mode Survival + timer per-soal + simpan hasil user
const el = {
category: $("#category"),
level: $("#level"),
btnStart: $("#btn-start"),
btnSurvival: $("#btn-survival"),
btnRandom: $("#btn-random"),
home: $("#home"),
quiz: $("#quiz"),
result: $("#result"),
meta: $("#meta"),
progressText: $("#progressText"),
scoreEl: $("#score"),
totalQuestions: $("#totalQuestions"),
pfill: $("#pfill"),
questionText: $("#questionText"),
questionImage: $("#questionImage"),
options: $("#options"),
explain: $("#explain"),
explainTitle: $("#explainTitle"),
explainText: $("#explainText"),
btnNext: $("#btn-next"),
btnRetry: $("#btn-retry"),
btnHome: $("#btn-home"),
resultText: $("#resultText"),
btnResRetry: $("#btn-res-retry"),
btnResHome: $("#btn-res-home"),
timerDisplay: $("#timerDisplay"),
usernameInputQuiz: $("#usernameInputQuiz"),
btnLoginQuiz: $("#btnLoginQuiz"),
btnLogoutQuiz: $("#btnLogoutQuiz"),
userDisplay: $("#userDisplay"),
savedScoreInfo: $("#savedScoreInfo"),
resultSavedInfo: $("#resultSavedInfo")
};


let currentQuestions = [];
let currentIndex = 0;
let score = 0;


function show(node){ node?.classList.remove("hidden"); }
function hide(node){ node?.classList.add("hidden"); }


async function loadQuestionBank(){
try{
const res = await fetch("questions.json?cacheBust=" + Date.now());
if(!res.ok) throw new Error("HTTP " + res.status);
QUESTION_BANK = await res.json();
rebuildCategorySelect();
}catch(err){
console.error("Gagal memuat questions.json:", err);
alert("Gagal memuat bank soal dari questions.json. Pastikan file quest
