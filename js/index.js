// Качество сна
const ctx = document.getElementById("myChart");

const config = {
    type: "line",
    data: {
        labels: [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
            "29",
            "30",
        ],
        datasets: [{
                label: "продолжительность сна",
                data: [],
                backgroundColor: ["#ff91b8"],
                borderColor: ["#ff91b8"],
                borderWidth: 1,
                yAxisID: "dollars",
                order: 2,
            },
            {
                label: "количество пробуждений",
                data: [],
                backgroundColor: ["#141516"],
                borderColor: ["#141516"],
                borderWidth: 1,
                type: "line",
                yAxisID: "quantity",
                order: 1,
            },
        ],
    },
    options: {
        scales: {
            dollars: {
                beginAtZero: true,
                type: "linear",
                position: "right",
            },
            quantity: {
                beginAtZero: true,
                type: "linear",
                position: "left",
                grid: {
                    display: false,
                },
            },
        },
    },
};
const myChart = new Chart(ctx, config);

function getListValueSlQuality() {
    var selectedOptionSlQ, stSlQ;
    selectedOptionSlQ = document.getElementById("myListCount").selectedIndex;
    stSlQ =
        document.getElementById("myListCount").options[selectedOptionSlQ].value;

    document.getElementById("myTextBoxResultCount").value = stSlQ;
    config.data.datasets[1].data.push(stSlQ);

    var selectedOption2SlQ, st2SlQ;
    selectedOption2SlQ = document.getElementById("myListSleep").selectedIndex;
    st2SlQ =
        document.getElementById("myListSleep").options[selectedOption2SlQ].value;

    document.getElementById("myTextBoxResultSleep").value = st2SlQ;
    config.data.datasets[0].data.push(st2SlQ);
    myChart.update();
}

// function updateChart() {
//     const inputSleepDuration = document.getElementById("input-sleep-duration");
//     const inputNumberOfAwakenings = document.getElementById(
//         "input-number-of-awakenings"
//     );

//     config.data.datasets[0].data.push(inputSleepDuration.value);
//     config.data.datasets[1].data.push(inputNumberOfAwakenings.value);

//     myChart.update();
// }

// Самочуствие

const ctx2 = document.getElementById("myChart2");

const config2 = {
    type: "line",
    data: {
        labels: [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
            "29",
            "30",
        ],
        datasets: [{
                label: "энергичность",
                data: [],
                backgroundColor: ["#ff91b8"],
                borderColor: ["#ff91b8"],
                borderWidth: 1,
                yAxisID: "dollars",
                order: 2,
            },
            {
                label: "утомляемость",
                data: [],
                backgroundColor: ["#141516"],
                borderColor: ["#141516"],
                borderWidth: 1,
                type: "line",
                yAxisID: "quantity",
                order: 1,
            },
        ],
    },
    options: {
        scales: {
            dollars: {
                beginAtZero: true,
                type: "linear",
                position: "right",
            },
            quantity: {
                beginAtZero: true,
                type: "linear",
                position: "left",
                grid: {
                    display: false,
                },
            },
        },
    },
};
const myChart2 = new Chart(ctx2, config2);

function getListValue() {
    var selectedOption, st;
    selectedOption = document.getElementById("myListEnergy").selectedIndex;
    st = document.getElementById("myListEnergy").options[selectedOption].value;

    document.getElementById("myTextBoxResult").value = st;
    config2.data.datasets[0].data.push(st);

    var selectedOption2, st2;
    selectedOption2 = document.getElementById("myListFatigue").selectedIndex;
    st2 = document.getElementById("myListFatigue").options[selectedOption2].value;

    document.getElementById("myTextBoxResult2").value = st2;
    config2.data.datasets[1].data.push(st2);
    myChart2.update();
}

//Трекер воды
const ctx3 = document.getElementById("myChart3");

const myChart3 = new Chart(ctx3, {
    type: "bar",
    data: {
        labels: [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
            "29",
            "30",
        ],
        datasets: [{
            label: "количество выпитых стаканов воды",
            data: [],
            backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
        }, ],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});

function getListValueWater() {
    var selectedOptionWater, stWater;
    selectedOptionWater = document.getElementById("myListWater").selectedIndex;
    stWater =
        document.getElementById("myListWater").options[selectedOptionWater].value;

    document.getElementById("myTextBoxResultWater").value = stWater;
    myChart3.data.datasets[0].data.push(stWater);
    myChart3.update();
}

// show Calendar
// datepickerInput.addEventListener('focus', (event) => {
//     showCalendar();
// });

// $(function() {
//     var n = 0;
//     setInterval(function() {
//         n = Math.floor((Math.random() * 5));
//         $("#background-text div").hide();
//         $("#background-text").find('div:eq(' + n + ')').show();
//     }, 100 * 60 * 60 * 24);
// });

// var r_text = new Array();
// r_text[0] = "text1";
// r_text[1] = "text2";
// r_text[2] = "text3";
// r_text[3] = "text4";
// r_text[4] = "text5";
// r_text[5] = "text6";
// r_text[6] = "text7";
// var i = Math.floor(7 * Math.random())

// alert((r_text[i]))
const arrText = [
    " Все мои желания исполняются одно за другим",
    "Мои мечты сбываются! Я знаю, что это так!",
    "Я наполняюсь духом творчества, любви и свободы",
    " Божественная любовь переполняет меня",
    "Слова и мысли обладают великой силой",
    "Сегодня лучший день моей жизни",
    "Я благодарю Вселенную за все, что у меня есть",
    "Все что ищу, я нахожу ",
    "Каждый день мне приносит новое счастье",
    "Я притягиваю изобилие в свою жизнь ",
    "Моя лучезарная улыбка наполняет светом сердца окружающих людей ",
    "Счастьем пронизана каждая клеточка моего тела",
    "Все в моей жизни приведет к чему-то хорошему",
    "У меня сильная интуиция, которая помогает мне принимать верные решения",
    "Я позволяю себе быть любимой и желанной",
    "Я излучаю любовь. И она возвращается ко мне",
    "Мое сердце открыто для нежных чувств",
    "Я здорова, энергична и полна счастья",
    'Я верю в свою мечту',
    'Я полна идей',
    'Вселенная помогает исполнить любую мою мечту',
    'Я всегда получаю величайшее благо',
    'Изобилие приходит ко мне с легкостью',
    'Я ощущаю спокойствие и гармонию',
    'Вселенная наделила меня талантами',
    'Я замечаю красоту этого мира',
    'В моей душе царят гармония и любовь',
    ' Все двери распахиваются передо мной',
    'Все дороги для меня открыты',
    'В моем мире все желания исполняются',
    'Мне открывается истина обо всем',
    'Я хорошо сплю и просыпаюсь с ощущением свежести и бодрости',
    'Жизнь преподносит мне только лучшие перемены',
    'Я в поиске своего предназначения',
    'Мой дом – место любви и радости',
    'Мое тело энергично, сильно и молодо',
    'Я отдыхаю внутри себя',
    'Мой настрой позитивный. Это мой день',
    'Вселенная помогает мне двигаться вперед и подсказывает',
    'Я насыщаю свой разум идеями успеха',
    'Я веду активный образ жизни',
    'Сегодня я полна энергии',
    'Я поддерживаю себя в прекрасной форме',
    'Я заслуживаю любви и здоровья, радости и счастья',
    'Я выбираю мысли, которые ведут меня счастливыми дорогами',
    'Я нахожусь в потоке',
    'Я обретаю равновесие',
    'Я посылаю любовь и исцеление',
    'Я вечно обновляюсь и раскрываюсь',
    'Мое тело знает путь к здоровью',
    'Я открываюсь для всех благ щедрой Вселенной',
    'Через меня протекает мощный поток света',
    'Я вечно обновляюсь и раскрываюсь',
    'Я заряжена чистой энергией',
    ' Я заслуживаю любви и здоровья, радости и счастья',
    'Мое тело обладает мудростью',
    'Мне легко открывается суть вещей',
    'Я занимаюсь созидательной деятельностью',
    'Вселенная открывает передо мной двери успеха',
    ' Мое тело и сознание в гармонии',
    'Я умею расслабиться и успокоиться',
    'Любовь к себе повышает мое благополучие',
    'Я чувствую и понимаю свое тело',
    'Все что я делаю, я делаю гениально, легко и с радостью',
    'Мой разум спокоен, мое тело расслаблено',
    'Я отпускаю напряжение в душе и теле',
    'Все события в моей жизни ведут к лучшему',
    'Я развиваюсь и становлюсь лучше во всем',
    'Я знаю, что я творец своей судьбы',
    'Я смело иду по пути процветания и успеха',
    'Мой душевный покой – путь к изобилию и счастью',
    'Я лучше слышу и понимаю себя',
    'Я ощущаю легкость во всем теле',
    'Я легко извлекаю смысл во всем',
    'Я с радостью принимаю все жизненные блага',
    'Я позволяю идеям процветания войти в мою жизнь',
    'Я легко обретаю гармонию и мудрость',
    'Успех ищет и находит меня',
    'Я выбираю красоту и здоровье',
    'Я радуюсь успехам других, потому что успеха хватит на всех',
    'Передо мной открыты все горизонты',
    'Моя душа настроена на любовь и мудрость',
    'Сейчас пришло время раскрыть мой потенциал',
    'Я канал процветания и любви',
    'Я работаю вдохновенно и эффективно',
    'Мои желания наполняют меня энергией',
    'Мой потенциал безграничен',
    'Я открываюсь потоку изобилия',
    'Мое тело воплощение божественного и прекрасного',
    'Я получаю исцеляющую энергию космоса',
    'Энергия природы дает исцеление организму',
    'Я архитектор своей жизни',
    'Любовь во мне и вокруг меня',
    'Я создатель моей реальности',
    'Во мне заключена великая сила',
    'Я открыта всем дарам Вселенной',
    'Я создаю свою счастливую реальность',
    'Каждый мой день неповторим',
    'Вселенная хранит меня',
    'Мои мысли плодотворны',
    'Каждый день я приношу людям радость, свет и счастье'
];
let backgroundText = document.getElementById("background-text");

setInterval(() => {
    backgroundText.textContent =
        arrText[Math.floor(Math.random() * arrText.length)];
}, 1000 * 3600 * 24);