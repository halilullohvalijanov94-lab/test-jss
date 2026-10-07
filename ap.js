const questions = [
    {
        question: "pop() nima qiladi?",
        options: [
            "Array boshiga element qo‘shadi",
            "Array oxirgi elementini o‘chiradi",
            "Arrayni teskari qiladi",
            "Arrayni tartiblaydi"
        ],
        answer: 1
    },

    {
        question: "push() nima qiladi?",
        options: [
            "Array oxiriga element qo‘shadi",
            "Array boshidagi elementni o‘chiradi",
            "Arrayni teskari qiladi",
            "Arrayni bo‘shatadi"
        ],
        answer: 0
    },

    {
        question: "shift() nima qiladi?",
        options: [
            "Array oxiriga element qo‘shadi",
            "Arrayni tartiblaydi",
            "Array boshidagi elementni o‘chiradi",
            "Arrayni teskari qiladi"
        ],
        answer: 2
    },

    {
        question: "unshift() nima qiladi?",
        options: [
            "Array boshiga element qo‘shadi",
            "Array oxiridagi elementni o‘chiradi",
            "Arrayni tartiblaydi",
            "Arrayni string qiladi"
        ],
        answer: 0
    },

    {
        question: "reverse() nima qiladi?",
        options: [
            "Arrayni tartiblaydi",
            "Arrayni teskari qiladi",
            "Arrayni string qiladi",
            "Arrayni o‘chiradi"
        ],
        answer: 1
    },

    {
        question: "sort() nima qiladi?",
        options: [
            "Arrayni tartiblaydi",
            "Arrayni teskari qiladi",
            "Arrayni o‘chiradi",
            "Arrayni string qiladi"
        ],
        answer: 0
    },

    {
        question: "join() nima qiladi?",
        options: [
            "Arrayni teskari qiladi",
            "Array elementlarini birlashtirib string qaytaradi",
            "Arrayni o‘chiradi",
            "Faqat birinchi elementni oladi"
        ],
        answer: 1
    },

    {
        question: "flat() nima qiladi?",
        options: [
            "Ichma-ich arraylarni yoyadi",
            "Arrayni teskari qiladi",
            "Arrayni string qiladi",
            "Arrayga element qo‘shadi"
        ],
        answer: 0
    },

    {
        question: "includes() nima qiladi?",
        options: [
            "Qiymat bor yoki yo‘qligini tekshiradi",
            "Arrayni teskari qiladi",
            "Arrayni tartiblaydi",
            "Qiymatni o‘chiradi"
        ],
        answer: 0
    },

    {
        question: "concat() nima qiladi?",
        options: [
            "Arraylarni birlashtiradi",
            "Arrayni o‘chiradi",
            "Arrayni teskari qiladi",
            "Arrayni tartiblaydi"
        ],
        answer: 0
    },

    {
        question: "filter() nima qiladi?",
        options: [
            "Barcha elementlarni o‘chiradi",
            "Shartga mos elementlarni yangi arrayda qaytaradi",
            "Arrayni teskari qiladi",
            "String qaytaradi"
        ],
        answer: 1
    },

    {
        question: "map() nima qiladi?",
        options: [
            "Elementlar ustida amal bajarib yangi array qaytaradi",
            "Hech narsa qilmaydi",
            "Faqat birinchi elementni qaytaradi",
            "Arrayni o‘chiradi"
        ],
        answer: 0
    },

    {
        question: "forEach() nima qiladi?",
        options: [
            "Yangi array qaytaradi",
            "Har bir element ustida amal bajaradi",
            "Arrayni teskari qiladi",
            "Arrayni o‘chiradi"
        ],
        answer: 1
    },

    {
        question: "reduce() nima qiladi?",
        options: [
            "Elementlarni bitta qiymatga qisqartiradi",
            "Arrayni teskari qiladi",
            "Arrayga element qo‘shadi",
            "Qiymat mavjudligini tekshiradi"
        ],
        answer: 0
    },

    {
        question: "some() nima qiladi?",
        options: [
            "Hamma elementni tekshiradi",
            "Kamida bitta element shartga mos kelsa true qaytaradi",
            "Arrayni teskari qiladi",
            "Index qaytaradi"
        ],
        answer: 1
    },

    {
        question: "every() nima qiladi?",
        options: [
            "Bitta elementni tekshiradi",
            "Hamma element shartga mos kelsa true qaytaradi",
            "Arrayni o‘chiradi",
            "String qaytaradi"
        ],
        answer: 1
    },

    {
        question: "find() nima qiladi?",
        options: [
            "Shartga mos birinchi qiymatni qaytaradi",
            "Shartga mos indexni qaytaradi",
            "Arrayni teskari qiladi",
            "Arrayni bo‘shatadi"
        ],
        answer: 0
    },

    {
        question: "findIndex() nima qiladi?",
        options: [
            "Qiymatni qaytaradi",
            "Shartga mos element indexini qaytaradi",
            "Arrayni tartiblaydi",
            "String qaytaradi"
        ],
        answer: 1
    },

    {
        question: "splice() nima qiladi?",
        options: [
            "Arrayga element qo‘shish yoki o‘chirish mumkin",
            "Arrayni faqat o‘qiydi",
            "Arrayni string qiladi",
            "Arrayni teskari qiladi"
        ],
        answer: 0
    },

    {
        question: "Math.floor(4.8) natijasi nima?",
        options: [
            "5",
            "4",
            "4.8",
            "3"
        ],
        answer: 1
    },

    {
        question: "Math.ceil(4.2) natijasi nima?",
        options: [
            "4",
            "3",
            "5",
            "4.2"
        ],
        answer: 2
    },

    {
        question: "Math.round(4.6) natijasi nima?",
        options: [
            "4",
            "5",
            "4.6",
            "6"
        ],
        answer: 1
    },

    {
        question: "Math.abs(-10) natijasi nima?",
        options: [
            "-10",
            "0",
            "10",
            "1"
        ],
        answer: 2
    },

    {
        question: "Math.max(10, 20, 5) nima qaytaradi?",
        options: [
            "5",
            "10",
            "20",
            "35"
        ],
        answer: 2
    },

    {
        question: "Math.min(10, 20, 5) nima qaytaradi?",
        options: [
            "5",
            "10",
            "20",
            "35"
        ],
        answer: 0
    },

    {
        question: "Math.random() nima beradi?",
        options: [
            "Faqat 1",
            "0 dan 1 gacha tasodifiy son",
            "Faqat 0",
            "Faqat butun son"
        ],
        answer: 1
    },

    {
        question: "getElementById() nima qiladi?",
        options: [
            "ID orqali element topadi",
            "Class orqali element topadi",
            "Element yaratadi",
            "Elementni o‘chiradi"
        ],
        answer: 0
    },

    {
        question: "getElementsByClassName() nima qiladi?",
        options: [
            "ID orqali topadi",
            "Class orqali elementlarni topadi",
            "Tag orqali topadi",
            "Element yaratadi"
        ],
        answer: 1
    },

    {
        question: "querySelector() nima qiladi?",
        options: [
            "Birinchi mos elementni topadi",
            "Barcha elementlarni topadi",
            "Element yaratadi",
            "Elementni o‘chiradi"
        ],
        answer: 0
    },

    {
        question: "querySelectorAll() nima qiladi?",
        options: [
            "Faqat birinchi elementni topadi",
            "Barcha mos elementlarni topadi",
            "Element yaratadi",
            "IDni o‘zgartiradi"
        ],
        answer: 1
    },

    {
        question: "addEventListener() nima qiladi?",
        options: [
            "Event/hodisa qo‘shadi",
            "Element yaratadi",
            "CSS qo‘shadi",
            "Arrayni tartiblaydi"
        ],
        answer: 0
    },

    {
        question: "click eventi qachon ishlaydi?",
        options: [
            "Sichqoncha kirganda",
            "Element bosilganda",
            "Klaviatura bosilganda",
            "Sichqoncha chiqqanda"
        ],
        answer: 1
    },

    {
        question: "dblclick qachon ishlaydi?",
        options: [
            "Bir marta bosilganda",
            "Ikki marta bosilganda",
            "Klaviatura bosilganda",
            "Input o‘zgarganda"
        ],
        answer: 1
    },

    {
        question: "keydown qachon ishlaydi?",
        options: [
            "Klaviatura tugmasi bosilganda",
            "Tugma qo‘yib yuborilganda",
            "Mouse kirganda",
            "Input o‘chirilganda"
        ],
        answer: 0
    },

    {
        question: "keyup qachon ishlaydi?",
        options: [
            "Tugma bosilganda",
            "Tugma qo‘yib yuborilganda",
            "Mouse bosilganda",
            "Sahifa ochilganda"
        ],
        answer: 1
    },

    {
        question: "localStorage nima?",
        options: [
            "Brauzerda ma’lumot saqlash xotirasi",
            "CSS metodi",
            "Array metodi",
            "HTML elementi"
        ],
        answer: 0
    },

    {
        question: "setItem() nima qiladi?",
        options: [
            "Ma’lumotni oladi",
            "Ma’lumotni saqlaydi",
            "Ma’lumotni o‘chiradi",
            "Hammasini o‘chiradi"
        ],
        answer: 1
    },

    {
        question: "getItem() nima qiladi?",
        options: [
            "Ma’lumotni saqlaydi",
            "Ma’lumotni oladi",
            "Ma’lumotni o‘chiradi",
            "Storage yaratadi"
        ],
        answer: 1
    },

    {
        question: "removeItem() nima qiladi?",
        options: [
            "Bitta ma’lumotni o‘chiradi",
            "Ma’lumot saqlaydi",
            "Ma’lumot oladi",
            "Barcha HTMLni o‘chiradi"
        ],
        answer: 0
    },

    {
        question: "clear() nima qiladi?",
        options: [
            "Bitta ma’lumotni o‘chiradi",
            "Barcha storage ma’lumotlarini o‘chiradi",
            "Ma’lumot saqlaydi",
            "Array yaratadi"
        ],
        answer: 1
    },

    {
        question: "JSON.stringify() nima qiladi?",
        options: [
            "Stringni object qiladi",
            "Qiymatni JSON stringga aylantiradi",
            "Objectni o‘chiradi",
            "Arrayni teskari qiladi"
        ],
        answer: 1
    },

    {
        question: "JSON.parse() nima qiladi?",
        options: [
            "JSON stringni JavaScript qiymatiga aylantiradi",
            "Objectni string qiladi",
            "Arrayni o‘chiradi",
            "CSS yaratadi"
        ],
        answer: 0
    },

    {
        question: "Object.keys() nima qaytaradi?",
        options: [
            "Object qiymatlarini",
            "Object keylarini",
            "Objectni stringni",
            "Objectni o‘chiradi"
        ],
        answer: 1
    },

    {
        question: "Object.values() nima qaytaradi?",
        options: [
            "Object keylarini",
            "Object qiymatlarini",
            "Object indexlarini",
            "Objectni o‘chiradi"
        ],
        answer: 1
    },

    {
        question: "Object.entries() nima qaytaradi?",
        options: [
            "Key-value juftliklarini",
            "Faqat keylarni",
            "Faqat qiymatlarni",
            "Faqat indexlarni"
        ],
        answer: 0
    },

    {
        question: "Destructuring nima uchun ishlatiladi?",
        options: [
            "Array yoki object qiymatlarini ajratib olish uchun",
            "HTML o‘chirish uchun",
            "CSS yozish uchun",
            "Arrayni sort qilish uchun"
        ],
        answer: 0
    },

    {
        question: "classList.add() nima qiladi?",
        options: [
            "Class qo‘shadi",
            "Class o‘chiradi",
            "Classni almashtiradi",
            "Element yaratadi"
        ],
        answer: 0
    },

    {
        question: "classList.remove() nima qiladi?",
        options: [
            "Class qo‘shadi",
            "Classni o‘chiradi",
            "Element yaratadi",
            "HTMLni o‘zgartiradi"
        ],
        answer: 1
    },

    {
        question: "classList.toggle() nima qiladi?",
        options: [
            "Classni faqat qo‘shadi",
            "Classni faqat o‘chiradi",
            "Class bo‘lsa o‘chiradi, bo‘lmasa qo‘shadi",
            "Elementni o‘chiradi"
        ],
        answer: 2
    },

    {
        question: "innerHTML nima qiladi?",
        options: [
            "Element ichidagi HTMLni olish yoki o‘zgartirish",
            "CSSni o‘zgartirish",
            "Array yaratish",
            "Event qo‘shish"
        ],
        answer: 0
    },

    {
        question: "innerText nima qiladi?",
        options: [
            "Element ichidagi matnni olish yoki o‘zgartirish",
            "Element yaratish",
            "Class o‘chirish",
            "Arrayni sort qilish"
        ],
        answer: 0
    },

    {
        question: "createElement() nima qiladi?",
        options: [
            "Yangi HTML element yaratadi",
            "Elementni o‘chiradi",
            "Class qo‘shadi",
            "Array yaratadi"
        ],
        answer: 0
    },

    {
        question: "appendChild() nima qiladi?",
        options: [
            "Elementni o‘chiradi",
            "Child element qo‘shadi",
            "Classni o‘chiradi",
            "HTMLni string qiladi"
        ],
        answer: 1
    }
];


// ===============================
// O'ZGARUVCHILAR
// ===============================

let currentQuestion = 0;
let score = 0;
let answered = false;


// ===============================
// HTML ELEMENTLAR
// ===============================

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const checkBtn = document.getElementById("checkBtn");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");
const counterEl = document.getElementById("counter");
const progressBar = document.getElementById("progressBar");
const correctEl = document.getElementById("correct");
const wrongEl = document.getElementById("wrong");


// ===============================
// SAVOLNI CHIQARISH
// ===============================

function loadQuestion() {

    const question = questions[currentQuestion];

    answered = false;

    questionEl.textContent =
        `${currentQuestion + 1}. ${question.question}`;

    counterEl.textContent =
        `${currentQuestion + 1} / ${questions.length}`;

    progressBar.style.width =
        `${((currentQuestion) / questions.length) * 100}%`;

    optionsEl.innerHTML = "";

    resultEl.style.display = "none";
    resultEl.className = "";

    checkBtn.disabled = true;
    nextBtn.disabled = true;

    question.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.className = "option";

        button.textContent =
            `${String.fromCharCode(65 + index)}) ${option}`;

        button.dataset.index = index;

        button.addEventListener("click", function () {

            if (answered) return;

            document
                .querySelectorAll(".option")
                .forEach(btn => {
                    btn.classList.remove("selected");
                });

            button.classList.add("selected");

            checkBtn.disabled = false;

        });

        optionsEl.appendChild(button);
    });
}


// ===============================
// TEKSHIRISH
// ===============================

checkBtn.addEventListener("click", function () {

    if (answered) return;

    const selected =
        document.querySelector(".option.selected");

    if (!selected) return;

    answered = true;

    const selectedIndex =
        Number(selected.dataset.index);

    const correctAnswer =
        questions[currentQuestion].answer;

    const allOptions =
        document.querySelectorAll(".option");


    allOptions.forEach(button => {

        button.disabled = true;

        const index =
            Number(button.dataset.index);

        if (index === correctAnswer) {
            button.classList.add("correct");
        }

    });


    if (selectedIndex === correctAnswer) {

        score++;

        correctEl.textContent = score;

        resultEl.textContent =
            "✅ To‘g‘ri javob!";

        resultEl.className =
            "result-correct";

    } else {

        selected.classList.add("wrong");

        const wrongCount =
            currentQuestion + 1 - score;

        wrongEl.textContent = wrongCount;

        resultEl.innerHTML =
            `❌ Noto‘g‘ri! To‘g‘ri javob: <b>${
                questions[currentQuestion].options[correctAnswer]
            }</b>`;

        resultEl.className =
            "result-wrong";
    }

    resultEl.style.display = "block";

    checkBtn.disabled = true;

    nextBtn.disabled = false;

});


// ===============================
// KEYINGI
// ===============================

nextBtn.addEventListener("click", function () {

    currentQuestion++;

    if (currentQuestion >= questions.length) {

        finishTest();

        return;
    }

    loadQuestion();
});


// ===============================
// TEST TUGADI
// ===============================

function finishTest() {

    const percentage =
        Math.round((score / questions.length) * 100);

    document.querySelector(".container").innerHTML = `
        <div class="finish">

            <h1>🏆 Test tugadi!</h1>

            <h2>${percentage}%</h2>

            <p>✅ To‘g‘ri: <b>${score}</b></p>

            <p>❌ Xato: <b>${
                questions.length - score
            }</b></p>

            <p>📚 Jami: <b>${
                questions.length
            }</b> ta savol</p>

            <button
                class="restart"
                onclick="location.reload()"
            >
                🔄 Qaytadan boshlash
            </button>

        </div>
    `;
}


// ===============================
// BOSHLASH
// ===============================

loadQuestion();