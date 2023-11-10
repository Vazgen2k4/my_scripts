var whiteList = [
    "Alan Becker",
    "ALEKSEY MERCEDES",
    "ALEX LAB",
    "AlexGyver",
    "Alfedov",
    "Aloin",
    "Arlabus game",
    "Bayashi TV",
    "BrainsCloud",
    "ChessMaster",
    "City Chess",
    "Clash of Clans",
    "Clash Royale",
    "CodeX",
    "CodexWeb (бывший Master-CSS)",
    "Coding with Lewis",
    "Comedy Club",
    "console",
    "DarkCode",
    "DEB_Off",
    "Denis Filin",
    "Discovery Channel Россия",
    "dushenka",
    "ExtremeCode",
    "Firebase",
    "Flutter",
    "Flutter Guys",
    "Flutter Mapp",
    "foo52ru ТехноШаман",
    "FROST",
    "FrostDog",
    "Geek Code",
    "GeekBrains",
    "Give my Oscar",
    "Glo Academy",
    "Global Mind",
    "Green Apelsin",
    "guvmen",
    "HappyPC Shorts",
    "HeyFlutter․com",
    "HYPERPC",
    "HYPERPC SHORTS",
    "Insurgento",
    "IT DIVA - Карьера в IT и BigTech",
    "It's Mamix",
    "Jack Looney",
    "JOHAN",
    "Just_S",
    "KIRILL SARYCHEV",
    "komarov",
    "ksen",
    "Kuplinov Shorts",
    "Kuplinov ► Play",
    "LazyLoad Dart &amp; Flutter",
    "LazyLoad Swift &amp; iOS",
    "Learn App Code",
    "Learn Flutter with Me",
    "Marmok",
    "Metal Family Xydownik",
    "MetalFamily",
    "Minecraft",
    "Minecraft – téma",
    "MoDDyChat",
    "Mr Gridlock",
    "Nerkin",
    "Nerkin Live",
    "NOVA24",
    "Obsidian Time",
    "Onigiri",
    "Online Tutorials",
    "OREH",
    "perpetuumworld",
    "PewDiePie",
    "PRO Hi-Tech",
    "PWGood / Пугод",
    "RADIO TAPOK",
    "ROCK PRIVET",
    "RUKAMI KAVKAZA",
    "Rybakov Life",
    "Sadfman",
    "#SimpleCode",
    "SirPiligrim",
    "Sjbatya",
    "SJBody",
    "sndk",
    "Snr. Жираф",
    "Soderling",
    "SUPERNOVA",
    "TERRY / TERNOVOY",
    "The Coding Train",
    "The Flutter Way",
    "The Kitchen",
    "The Klyde",
    "TheBrianMaps",
    "This is Хорошо",
    "tophype",
    "Utopia Shorts",
    "Utopia Show",
    "Utopia Show Fan",
    "Valery Volkov",
    "VittaStrel",
    "What the Flutter",
    "windy31",
    "Wylsacom",
    "WylsaLive",
    "WylsaStream",
    "XeWilL / Хевил",
    "Zakviel Streams",
    "ZUBAREFFF",
    "Академия Брокколи и Сэма",
    "Академия Сэма Онеллы и Брокколи",
    "Алекс Лаб. Разработка",
    "Альбертович Научит",
    "Анна Блок",
    "Борис Трушин",
    "Бурёночек🛑",
    "Виз",
    "Виктор Блуд",
    "Виндяй",
    "Владилен Минин",
    "Гоша Дударь",
    "ДЕЛАЙ КАК БАТЯ",
    "ДЖАРАХОВ",
    "Данила Поперечный",
    "Джесси",
    "Заквиель",
    "Заметки Ардуинщика",
    "Знакомьтесь, Боб",
    "Иван Бер",
    "Иванчела",
    "Иванчела 2",
    "Ильнур",
    "Илья Петров | О фитнесе",
    "Кролик Мун",
    "Кухня Зака",
    "ЛИТВИН",
    "Лысый из браузера",
    "Мастерская Настроения",
    "Математик МГУ",
    "Мирби",
    "Мирбс",
    "Молвин",
    "Натурал Альбертович",
    "НеО",
    "Ники Райт",
    "Нитон",
    "Оскар Шмидт (shorts)",
    "Павел Воля",
    "Подозрительная cова и другие шоу 2x2",
    "Пятёрка",
    "Роман Сакутин - GameDev",
    "Саша Квашеная",
    "Слава Комиссаренко",
    "Студийная Банда",
    "Сырой Пугод",
    "ТНТ Shorts",
    "Телеканал ТНТ",
    "ФУГА TV",
    "Хауди Хо™ - Просто о мире IT!",
    "Школа itProger / Программирование",
];

const delay = async (ms) => await new Promise(resolve => setTimeout(resolve, ms));

async function unSubWithWhiteList() {

    let allSubs = document.querySelectorAll("ytd-channel-renderer:not(.ytd-item-section-renderer)");

    if (!allSubs) {
        return;
    }

    for (let index = 0; index < allSubs.length; index++) {
        const channel = allSubs[index];
        let channelName = channel.querySelector('yt-formatted-string.style-scope.ytd-channel-name').innerHTML;
        if (!channelName) {
            continue;
        }

        if (whiteList.includes(channelName)) {
            continue;
        }

        let btnToOpenDrop = channel.querySelector('button.yt-spec-button-shape-next.yt-spec-button-shape-next--tonal.yt-spec-button-shape-next--mono.yt-spec-button-shape-next--size-m.yt-spec-button-shape-next--icon-leading-trailing');
        btnToOpenDrop.click();
        
        console.log(1);
        await delay(250);
        
        let btnToUnSub = document.querySelector('ytd-menu-service-item-renderer:last-child');
        btnToUnSub.click();
        
        console.log(2);
        await delay(250);
        
        let confirmBtn = document.querySelector("button.yt-spec-button-shape-next.yt-spec-button-shape-next--text.yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--size-m");
        confirmBtn.click();
        
        console.log(3);
        await delay(250);
    }
}
