"use strict";function getName(e){$(document).ready(function(){$("#first-container h1").slideUp("slow"),$("#first-container").css("margin-top","30px"),$("#second-container").css("min-height","90vh"),$(".girl-name").text(e)})}function pickRandomProperty(e){var n=void 0,i=0;for(var t in e)Math.random()<1/++i&&(n=t);return n}function newWord(){randKey=pickRandomProperty(words),currentBulgWord=words[randKey][0],document.getElementById("bulg-word").innerHTML=currentBulgWord,document.getElementById("word-pic").setAttribute("src",words[randKey][1]),document.getElementById("player-submit-text").setAttribute("placeholder","_ ".repeat(randKey.length))}function picModal(e,n){var i=document.getElementById("pics-modal-image");"princess"==n?(i.setAttribute("src","img/princesses/"+e+".jpg"),i.setAttribute("alt",e),document.getElementsByClassName("character-name")[0].innerText=princessObj[e],"aviva"==e?document.getElementsByClassName("character-name")[0].innerText="Авива и принцесите":"michaela"==e&&(document.getElementsByClassName("character-name")[0].innerText="Михаела и принцесите")):"emoji"==n?(i.setAttribute("src","img/emojis/"+e+".jpg"),i.setAttribute("alt",e),document.getElementsByClassName("character-name")[0].innerText=emojiObj[e]):"sofia"==n&&(i.setAttribute("src","img/sofia/"+e+".jpg"),i.setAttribute("alt",e),document.getElementsByClassName("character-name")[0].innerText=sofiaObj[e]),document.getElementById("modal-button").click()}function checkPoints(e,n){if("princess"===n){var i=document.getElementById("princesses-won");5===e?(i.innerHTML+="<img src='img/princesses/snowWhite.jpg' alt='Snow White' class='img-fluid'>",picModal("snowWhite","princess")):10===e?(i.innerHTML+="<img src='img/princesses/aurora.jpg' alt='Aurora' class='img-fluid'>",picModal("aurora","princess")):15===e?(i.innerHTML+="<img src='img/princesses/merida.jpg' alt='Merida' class='img-fluid'>",picModal("merida","princess")):20===e?(i.innerHTML+="<img src='img/princesses/jasmine.jpg' alt='Jasmine' class='img-fluid'>",picModal("jasmine","princess")):25===e?(i.innerHTML+="<img src='img/princesses/belle.jpg' alt='Belle' class='img-fluid'>",picModal("belle","princess")):30===e?(i.innerHTML+="<img src='img/princesses/mulan.jpg' alt='Mulan' class='img-fluid'>",picModal("mulan","princess")):35===e?(i.innerHTML+="<img src='img/princesses/ariel.jpg' alt='Ariel' class='img-fluid'>",picModal("ariel","princess")):40===e?(i.innerHTML+="<img src='img/princesses/pocahontas.jpg' alt='Pocahontas' class='img-fluid'>",picModal("pocahontas","princess")):45===e?(i.innerHTML+="<img src='img/princesses/cinderella.jpg' alt='Cinderella' class='img-fluid'>",picModal("cinderella","princess")):50===e?(i.innerHTML+="<img src='img/princesses/tiana.jpg' alt='Tiana' class='img-fluid'>",picModal("tiana","princess")):55===e?(i.innerHTML+="<img src='img/princesses/elsa.jpg' alt='Elsa' class='img-fluid'>",picModal("elsa","princess")):60===e?(i.innerHTML+="<img src='img/princesses/rapunzel.jpg' alt='Rapunzel' class='img-fluid'>",picModal("rapunzel","princess")):75===e&&("Авивче"==document.getElementsByClassName("girl-name")[0].innerText?(i.innerHTML+="<img src='img/princesses/aviva.jpg' alt='Aviva' class='img-fluid'>",picModal("aviva","princess")):"Михаелче"==document.getElementsByClassName("girl-name")[0].innerText&&(i.innerHTML+="<img src='img/princesses/michaela.jpg' alt='Michaela' class='img-fluid'>",picModal("michaela","princess")),"Авивче"!=document.getElementsByClassName("girl-name")[0].innerText&&"Михаелче"!=document.getElementsByClassName("girl-name")[0].innerText&&(i.innerHTML+="<img src='img/princesses/disney-princesses.jpg' alt='Aviva' class='img-fluid'>",picModal("disney-princesses","princess")))}else if("emoji"===n){var t=document.getElementById("emojis-won");6===e?(t.innerHTML+="<img src='img/emojis/maryMeh.jpg' alt='Mery Meh' class='img-fluid'>",picModal("maryMeh","emoji")):12===e?(t.innerHTML+="<img src='img/emojis/highFive.jpg' alt='High Five' class='img-fluid'>",picModal("highFive","emoji")):18===e?(t.innerHTML+="<img src='img/emojis/jailbreak.jpg' alt='Jailbreak' class='img-fluid'>",picModal("jailbreak","emoji")):24===e?(t.innerHTML+="<img src='img/emojis/melMeh.jpg' alt='Mel Meh' class='img-fluid'>",picModal("melMeh","emoji")):30===e?(t.innerHTML+="<img src='img/emojis/smiler.jpg' alt='Smiler' class='img-fluid'>",picModal("smiler","emoji")):36===e?(t.innerHTML+="<img src='img/emojis/gene.jpg' alt='Gene' class='img-fluid'>",picModal("gene","emoji")):42===e&&(t.innerHTML+="<img src='img/emojis/akiko.jpg' alt='Akiko' class='img-fluid'>",picModal("akiko","emoji"))}else if("sofia"===n){var s=document.getElementById("sofia-characters-won");4===e?(s.innerHTML+="<img src='img/sofia/clover.jpg' alt='Clover' class='img-fluid'>",picModal("clover","sofia")):8===e?(s.innerHTML+="<img src='img/sofia/hildegard.jpg' alt='Hildegard' class='img-fluid'>",picModal("hildegard","sofia")):12===e?(s.innerHTML+="<img src='img/sofia/jun.jpg' alt='Jun' class='img-fluid'>",picModal("jun","sofia")):16===e?(s.innerHTML+="<img src='img/sofia/miranda.jpg' alt='Miranda' class='img-fluid'>",picModal("miranda","sofia")):20===e?(s.innerHTML+="<img src='img/sofia/mia.jpg' alt='Mia' class='img-fluid'>",picModal("mia","sofia")):24===e?(s.innerHTML+="<img src='img/sofia/roland.jpg' alt='Roland' class='img-fluid'>",picModal("roland","sofia")):28===e?(s.innerHTML+="<img src='img/sofia/whatnaught.jpg' alt='Whatnaught' class='img-fluid'>",picModal("whatnaught","sofia")):32===e?(s.innerHTML+="<img src='img/sofia/amber.jpg' alt='Amber' class='img-fluid'>",picModal("amber","sofia")):36===e?(s.innerHTML+="<img src='img/sofia/crackle.jpg' alt='Crackle' class='img-fluid'>",picModal("crackle","sofia")):40===e?(s.innerHTML+="<img src='img/sofia/james.jpg' alt='James' class='img-fluid'>",picModal("james","sofia")):44===e?(s.innerHTML+="<img src='img/sofia/zooey.jpg' alt='Zooey' class='img-fluid'>",picModal("zooey","sofia")):48===e?(s.innerHTML+="<img src='img/sofia/minimus.jpg' alt='Minimus' class='img-fluid'>",picModal("minimus","sofia")):52===e?(s.innerHTML+="<img src='img/sofia/robin.jpg' alt='Robin' class='img-fluid'>",picModal("robin","sofia")):56===e?(s.innerHTML+="<img src='img/sofia/clio.jpg' alt='Clio' class='img-fluid'>",picModal("clio","sofia")):60===e?(s.innerHTML+="<img src='img/sofia/lulu.jpg' alt='Lulu' class='img-fluid'>",picModal("lulu","sofia")):64===e?(s.innerHTML+="<img src='img/sofia/leena.jpg' alt='Leena' class='img-fluid'>",picModal("leena","sofia")):68===e?(s.innerHTML+="<img src='img/sofia/vivian.jpg' alt='Vivian' class='img-fluid'>",picModal("vivian","sofia")):72===e&&(s.innerHTML+="<img src='img/sofia/sofia.jpg' alt='Sofia' class='img-fluid'>",picModal("sofia","sofia"))}}function startGame(e,n){function i(n){var i=void 0;"words-game-components"===n?i=3:"countries-game-components"===n&&(i=2);for(var t=0;t<=i;t++)document.getElementsByClassName(e)[t].classList.remove("d-none"),document.getElementsByClassName(e)[t].classList.add("animated"),document.getElementsByClassName(e)[t].classList.add("fadeIn")}"words-game-components"===e?(document.getElementById("words-game-start-button").setAttribute("class","d-none"),i(e),document.getElementsByClassName("words-game-components")[1].classList.add("d-flex"),newWord()):"countries-game-components"===e&&(document.getElementById("countries-start-button").setAttribute("class","d-none"),i(e),"countries"===n&&(startCountriesGame(),moveEmojis()))}function checkInput(){var e=document.getElementById("player-submit-text"),n=e.value.toLowerCase();if(document.getElementById("words-points").classList.remove("bounce"),n in words)words[n][0]===currentBulgWord&&(wordsPoints++,document.getElementById("words-points").innerText=wordsPoints.toString(),e.style.color="#1FCB54",e.value="БРАВО!",document.getElementById("words-points").classList.add("bounce"),setTimeout(function(){e.value="",e.style.color="#5252af"},700),checkPoints(wordsPoints,"princess"),newWord());else{var i=e.value;e.style.color="#587BF1",e.value="ОПИТАЙ ОТНОВО!",setTimeout(function(){e.value=i,e.style.color="#5252af"},700)}}function moveEmojis(){var e=document.getElementById("emojis-poster");e.style.top="-45px",e.style.left="-50px",e.style.width="200px",e.style.zIndex="5",e.style.transform="rotate(-15deg)"}function startCountriesGame(){function e(e,n){return Number((Math.random()*(n-e)+e).toFixed(0))}function n(n,i,t){for(var s=e(i,t);s==n;)s=e(i,t);return s}var i=e(0,43),t=n(i,0,43),s=function(){for(var e=n(i,0,43);e===i&&e===t;)e=n(i,0,43);return e}();document.getElementById("map-image").setAttribute("src",countries[i][3]),document.getElementById("flag-image").setAttribute("src",countries[i][2]);var r=e(0,2),a=n(r,0,2),o=void 0;1==r&&2==a?o=0:0==r&&2==a?o=1:0==r&&1==a?o=2:1==r&&0==a?o=2:2==r&&1==a?o=0:2==r&&0==a&&(o=1),realAnswer=countries[i][0],possibleAnswers[r].innerText=realAnswer,possibleAnswers[a].innerText=countries[t][0],possibleAnswers[o].innerText=countries[s][0],document.getElementById("countries-points").classList.add("bounce"),waitForAnswer(r,a,o)}function waitForAnswer(e,n,i){function t(){var a=possibleAnswers[0].innerText,o=possibleAnswers[1].innerText,l=possibleAnswers[2].innerText;if(1==r){for(var c=0;c<=2;c++)possibleAnswers[c].style.backgroundColor="blue",possibleAnswers[c].innerText="НОВА ДЪРЖАВА!";setTimeout(function(){for(var a=0;a<=2;a++)possibleAnswers[a].style.backgroundColor="#30cfc0";setTimeout(function(){document.getElementById("countries-points").classList.remove("bounce")},1400),startCountriesGame(),possibleAnswers[n].removeEventListener("click",t),possibleAnswers[i].removeEventListener("click",t),possibleAnswers[e].removeEventListener("click",s),r=0},1e3)}else{for(var m=0;m<=2;m++)possibleAnswers[m].style.backgroundColor="#e2b10f",possibleAnswers[m].innerText="ОПИТАЙ ОТНОВО!";setTimeout(function(){for(var e=0;e<=2;e++)possibleAnswers[e].style.backgroundColor="#30cfc0",possibleAnswers[0].innerText=a,possibleAnswers[1].innerText=o,possibleAnswers[2].innerText=l},400),setTimeout(function(){document.getElementById("countries-points").classList.remove("bounce")},1400),r++}}function s(){countriesPoints++,document.getElementById("countries-points").style.color="#5EBA5E",document.getElementById("countries-points").innerText=countriesPoints.toString();for(var a=0;a<=2;a++)possibleAnswers[a].style.backgroundColor="#5EBA5E";setTimeout(function(){for(var e=0;e<=2;e++)possibleAnswers[e].style.backgroundColor="#30cfc0"},700),possibleAnswers[e].removeEventListener("click",s),possibleAnswers[n].removeEventListener("click",t),possibleAnswers[i].removeEventListener("click",t),setTimeout(function(){document.getElementById("countries-points").classList.remove("bounce"),document.getElementById("countries-points").style.color="white"},1400),r=0,checkPoints(countriesPoints,"emoji"),startCountriesGame()}var r=0;possibleAnswers[n].addEventListener("click",t),possibleAnswers[i].addEventListener("click",t),possibleAnswers[e].addEventListener("click",s)}function getRandomArbitrary(e,n){return Number((Math.random()*(n-e)+e).toFixed(0))}function generateHebrewWord(){var e=getRandomArbitrary(0,65);if(-1==randomNumbers.indexOf(e)){document.getElementById("hebrew-phrase-translation").innerText=hebrewPhrases[e][0],document.getElementById("hebrew-phrase").innerText=hebrewPhrases[e][1],document.getElementById("hebrew-phrase-transcription").innerText=hebrewPhrases[e][2];30==randomNumbers.length&&(randomNumbers=[]),randomNumbers.push(e),console.log(randomNumbers)}else generateHebrewWord()}function checkHebrewInput(){var e=document.getElementById("hebrew-player-input").value;e==document.getElementById("hebrew-phrase").innerText?(hebrewPoints++,document.getElementById("hebrew-points").innerText=hebrewPoints,document.getElementById("hebrew-points").classList.add("bounce"),document.getElementById("hebrew-player-input").value="!БРАВО",document.getElementById("hebrew-player-input").style.color="#1FCB54",setTimeout(function(){document.getElementById("hebrew-player-input").value="",hebrewInput="",document.getElementById("hebrew-player-input").style.color="#000000",document.getElementById("hebrew-points").classList.remove("bounce")},1e3),checkPoints(hebrewPoints,"sofia"),generateHebrewWord()):(document.getElementById("hebrew-player-input").value="!ОПИТАЙ ОТНОВО",document.getElementById("hebrew-player-input").style.color="#587BF1",setTimeout(function(){document.getElementById("hebrew-player-input").value=e,document.getElementById("hebrew-player-input").style.color="#000000"},1e3))}function getRandomKey(e,n){return Number((Math.random()*(n-e)+e).toFixed(0))}function generateNewHebrewLetter(){document.getElementById("hebrew-letter-input").style.opacity=1,document.getElementById("hebrew-key-submit").classList.add("d-none");var e=getRandomKey(0,30);document.getElementById("hebrew-key-pic").setAttribute("src","img/keyboard/"+hebrewKeyboardArray[e]+".png"),currentHebrewLetter=hebrewKeyboardArray[e],console.log(currentHebrewLetter)}var loader=document.getElementById("loader");window.addEventListener("load",function(){$("#loader").fadeOut("slow"),setTimeout(function(){loader.style.display="none"},1e3)}),$(document).ready(function(){$("#background-container img").fadeTo(3e3,1),setTimeout(function(){$("#second-container").addClass("animated fadeIn")},0)}),document.getElementById("first-go-back-button").addEventListener("click",function(){$("#first-container h1").slideDown("slow"),$("#second-container").css("min-height","70vh")});var wordsPoints=0,randKey=void 0,currentBulgWord=void 0;document.getElementById("words-points").innerText=wordsPoints.toString();var words=function(){var e=null;return $.ajax({async:!1,global:!1,url:"js/words.json",dataType:"json",success:function(n){e=n}}),e}(),hebrewLetters=function(){var e=null;return $.ajax({async:!1,global:!1,url:"js/hebrew-letters.json",dataType:"json",success:function(n){e=n}}),e}(),princessObj={ariel:"Aриел",aurora:"Аврора",belle:"Бел",cinderella:"Пепеляшка",elsa:"Елза",jasmine:"Жасмин",merida:"Мерида",mulan:"Мулан",pocahontas:"Покахонтас",snowWhite:"Снежанка",rapunzel:"Рапунцел",tiana:"Тиана"},emojiObj={smiler:"Смайлър",gene:"Джин",highFive:"Дай 5",jailbreak:"Терабайт",maryMeh:"Мери Ме",akiko:"Акико",melMeh:"Мел Ме"},sofiaObj={amber:"Ембър",clio:"Клио",clover:"Кловър",crackle:"Кракъл",hildegard:"Хилдегард",james:"Джеймс",jun:"Джун",leena:"Лина",lulu:"Лулу",mia:"Мия",minimus:"Минимус",miranda:"Миранда",robin:"Робин",roland:"Роланд",sofia:"София",vivian:"Вивиян",whatnaught:"Уатнот",zooey:"Зууи"};document.getElementById("words-game-start-button").addEventListener("click",function(){startGame("words-game-components")});var countries=[["Албания","Тирана","img/countries/flag/albania.svg","img/countries/map/albania.jpg"],["Андора","Андора ла Веля","img/countries/flag/andorra.svg","img/countries/map/andorra.jpg"],["Австрия","Виена","img/countries/flag/austria.svg","img/countries/map/austria.jpg"],["Беларус","Минск","img/countries/flag/belarus.svg","img/countries/map/belarus.jpg"],["Белгия","Брюксел","img/countries/flag/belgium.svg","img/countries/map/belgium.jpg"],["Босна и Херцеговина","Сараево","img/countries/flag/bosnia.svg","img/countries/map/bosnia.jpg"],["България","София","img/countries/flag/bulgaria.svg","img/countries/map/bulgaria.jpg"],["Хърватия","Загреб","img/countries/flag/croatia.svg","img/countries/map/croatia.jpg"],["Кипър","Никозия","img/countries/flag/cyprus.svg","img/countries/map/cyprus.jpg"],["Чехия","Прага","img/countries/flag/czech-republic.svg","img/countries/map/czech-republic.jpg"],["Дания","Копенхаген","img/countries/flag/denmark.svg","img/countries/map/denmark.jpg"],["Естония","Талин","img/countries/flag/estonia.svg","img/countries/map/estonia.jpg"],["Финландия","Хелзинки","img/countries/flag/finland.svg","img/countries/map/finland.jpg"],["Франция","Париж","img/countries/flag/france.svg","img/countries/map/france.jpg"],["Германия","Берлин","img/countries/flag/germany.svg","img/countries/map/germany.jpg"],["Гърция","Атина","img/countries/flag/greece.svg","img/countries/map/greece.jpg"],["Унгария","Будапеща","img/countries/flag/hungary.svg","img/countries/map/hungary.jpg"],["Исландия","Рейкявик","img/countries/flag/iceland.svg","img/countries/map/iceland.jpg"],["Ирландия","Дъблин","img/countries/flag/ireland.svg","img/countries/map/ireland.jpg"],["Италия","Рим","img/countries/flag/italy.svg","img/countries/map/italy.jpg"],["Латвия","Рига","img/countries/flag/latvia.svg","img/countries/map/latvia.jpg"],["Литва","Вилнюс","img/countries/flag/liechtenstein.svg","img/countries/map/lithuania.jpg"],["Люксембург","Люксембург","img/countries/flag/luxembourg.svg","img/countries/map/luxembourg.jpg"],["Македония","Скопие","img/countries/flag/macedonia.svg","img/countries/map/macedonia.jpg"],["Малта","Валета","img/countries/flag/malta.svg","img/countries/map/malta.jpg"],["Молдова","Кишинев","img/countries/flag/moldova.svg","img/countries/map/moldova.jpg"],["Монако","Монако","img/countries/flag/monaco.svg","img/countries/map/monaco.jpg"],["Черна гора","Подгорица","img/countries/flag/montenegro.svg","img/countries/map/montenegro.jpg"],["Холандия","Амстердам","img/countries/flag/netherlands.svg","img/countries/map/netherlands.jpg"],["Норвегия","Осло","img/countries/flag/norway.svg","img/countries/map/norway.jpg"],["Полша","Варшава","img/countries/flag/poland.svg","img/countries/map/poland.jpg"],["Португалия","Лисабон","img/countries/flag/portugal.svg","img/countries/map/portugal.jpg"],["Румъния","Букурещ","img/countries/flag/romania.svg","img/countries/map/romania.jpg"],["Русия","Москва","img/countries/flag/russia.svg","img/countries/map/russia.jpg"],["Сан Марино","Сан Марино","img/countries/flag/san-marino.svg","img/countries/map/san-marino.jpg"],["Сърбия","Белград","img/countries/flag/serbia.svg","img/countries/map/serbia.jpg"],["Словакия","Братислава","img/countries/flag/slovakia.svg","img/countries/map/slovakia.jpg"],["Словения","Любляна","img/countries/flag/slovenia.png","img/countries/map/slovenia.jpg"],["Испания","Мадрид","img/countries/flag/spain.svg","img/countries/map/spain.jpg"],["Швеция","Стокхолм","img/countries/flag/sweden.svg","img/countries/map/sweden.jpg"],["Швейцария","Берн","img/countries/flag/switzerland.svg","img/countries/map/switzerland.jpg"],["Украйна","Киев","img/countries/flag/ukraine.svg","img/countries/map/ukraine.jpg"],["Великобритания","Лондон","img/countries/flag/united-kingdom.svg","img/countries/map/united-kingdom.jpg"],["Ватикан","Ватикан","img/countries/flag/vatican.svg","img/countries/map/vatican.jpg"]];document.getElementById("countries-start-button").addEventListener("click",function(){startGame("countries-game-components","countries")});var realAnswer=void 0,possibleAnswers=document.getElementsByClassName("possible-answers"),countriesPoints=0;document.getElementById("countries-points").innerText=countriesPoints.toString();var displayAllWords=function(){var e="";for(var n in words)e='<li><a href="#" class="word-click" onclick="dispWordComponents(\''+words[n][0]+"','"+n+"','"+words[n][1]+'\')"><img src="'+words[n][1]+'" class="word-click-images img-fluid">'+words[n][0]+"</a></li>",document.getElementById("display-all-words").innerHTML+=e};displayAllWords();var dispWordComponents=function(e,n,i){$("#learn-words-components-row > div").fadeOut("fast"),setTimeout(function(){document.getElementById("learn-words-bulg-word").innerText=e;document.getElementById("learn-words-eng-word").innerText=n;var t=document.getElementById("learn-words-pic");t.setAttribute("src",i),t.setAttribute("alt",n),$("#learn-words-components-row > div").fadeIn("fast")},400)},displayAllCountries=function(){for(var e="",n=0;n<=countries.length-1;n++)e+='<li><a href="#" class="country-click" onclick="dispCountryComponents(\''+countries[n][0]+"','"+countries[n][1]+"','"+countries[n][2]+"','"+countries[n][3]+'\')"><img src="'+countries[n][2]+'" class="country-click-images img-fluid">'+countries[n][0]+"</a></li>";document.getElementById("display-all-countries").innerHTML+=e};displayAllCountries();var dispCountryComponents=function(e,n,i,t){setTimeout(function(){var s=document.getElementById("learn-countries-country");s.innerText=e;document.getElementById("learn-countries-capital").innerText=n;var r=document.getElementById("learn-countries-pic");r.setAttribute("src",i),r.setAttribute("alt",s),r.style.border="1px solid black";document.getElementById("learn-countries-components-row").style.backgroundImage="url("+t+")"},200)},hebrewPhrases=[["Жаден съм","אני צמא","ани цаме"],["Подай ми чинията","תביא לי את הצלחת","тави ли ет хацалахат"],["Искам да играя цял ден","אני רוצה לשחק כל היום","ани роце лесахек кол хайом"],["Мога да пиша на иврит","אני יכול לכתוב בעברית","ани яхол лихтов беиврит"],["Вече не съм гладен","אני כבר לא רעב","ани квар ло раев"],["Хайде да излезем навън","בוא נצא החוצה","бо нице ахуца"],["Имам много приятели","יש לי הרבה חברים","йеш ли арбе хаверим"],["Ходи ми се на почивка","בא לי ללכת לחופשה","ба ли лалехет лехуфша"],["Гладен съм","אני רעב","ани раев"],["Искам да ям фалафел","אני רוצה לאכול פלאפל","ани роце леехол фалафел"],["Имам само пет шекела в джоба","יש לי רק חמישה שקלים בכיס","йеш ли рак хамиша шкалим ба кис"],["Днес бях в Йерусалим","היום הייתי בירושלים","хайом аити бейерушалайим"],["Трябва ми нова четка за зъби","אני צריך מברשת שיניים חדשה","ани царих миврешет шинайим хадаша"],["Отивам да си измия зъбите","אני הולך לצחצח שיניים","ани олех лецахцеах шинайим"],["Хайде да играем футбол","בוא נשחק כדורגל","бо несахек кадурегел"],["Обичам да слушам музика","אני אוהב לשמוע מוזיקה","ани оев лишмоа музика"],["Тази е любимата ми песен","זה השיר האהוב עליי","зе хашир хааув алай"],["Хайде да влезнем в морето","בוא נכנס לים","бо никанес лаям"],["Планината е много красива","ההר יפה מאוד","хаар яфе меод"],["Вкъщи си имаме куче","יש לנו כלב בבית","йеш лану келев бабайт"],["Виж колко високо скачам","תיראה כמה גבוה אני קופץ","тире кама гавоа ани кофец"],["Мога да говоря иврит","אני יכול לדבר עברית","ани яхол ледабер иврит"],["Много обичам да ям сладолед","אני מאוד אוהב לאכול גלידה","ани меод оев леехол глида"],["В Израел лятото е много топло","בקיץ חם מאוד בארץ","бакаиц меод хам баарец"],["Днес имам рожден ден","היום יש לי יום הולדת","хайом йеш ли йом уледет"],["Днес се научих да плувам","היום למדתי לשחות","хайом ламадети лисхот"],["Обичам да посещавам нови места","אני אוהב לבקר במקומות חדשים","ани оев левакер бемекомот хадашим"],["Искам да си лягам да спя","אני רוצה ללכת לישון","ани роце лалехет лишон"],["Ще си купя нещо за ядене","אני אקנה לעצמי משהו לאכול","ани екне леацми машеу леехол"],["Ти говориш английски","אתה מדבר אנגלית","ата медабер англит"],["Моля те загаси лампата","תכבה את האור בבקשה","техабе ет хаор бевакаша"],["Тази котка е много гладна","החתול הזה רעב מאוד","ахатул азе раев меод"],["Имам две сестри","יש לי שתי אחיות","йеш ли штей ахайот"],["Днес танцувах и много се уморих","היום רקדתי ומאוד התעייפתי","хайом ракадети вемеод итаяфти"],["Ще ти звънна по телефона","אתקשר אליך בטלפון","еткашер елейха бателефон"],["Филмът беше много интересен","הסרט היה מאוד מעניין","асерет ая меод меаниен"],["Той говори много бързо","הוא מדבר מהר מאוד","ху медабер маер меод"],["Днес ни дадоха много домашни","היום נתנו לנו הרבה שיעורי בית","хайом натну лану арбе шиурей байт"],["Утре ще учим история","מחר נלמד היסטוריה","махар нилмад история"],["Този самолет е бял на цвят","המטוס הזה בצבע לבן","хаматос азе бецева лаван"],["Съседът ми даде чаша захар","השכן הביא לי כוס סוכר","хашен еви ли кос сукар"],["Часът е девет сутринта","השעה היא תשע בבוקר","хашаа хи теша бабокер"],["Аз пиша в тетрадката ми","אני רושם במחברת שלי","ани рошем бамахберет шели"],["Телефонът ми е изключен","הטלפון שלי מכובה","хателефон шели мехубе"],["Ще гледам филм","אני הולך לראות סרט","ани олех лирот серет"]["есахек бамахшев"],["Помогни ми да отворя кутията","עזור לי לפתוח את הקופסה","азор ли лифтоах ет хакуфса"],["Навън е много студено","קר מאוד בחוץ","кар меод бахуц"],["Много съм щастлив","אני מאוד שמח","ани меод самеах"],["Днес ще уча химия","היום אלמד כימיה","хайом елмад химия"],["Искам да си лежа в леглото цял ден","בא לי לשכב במיטה כל היום","ба ли лишкав бамита кол хайом"],["Супата е много вкусна","המרק טעים מאוד","хамарак таим меод"],["Обичам да играя на компютъра","אני אוהב לשחק במחשב","ани оев лесахек бамахшев"],["Имам домашно по математика","יש לי שיעורי בית במטמתיקה","йеш ли шиурей байт бематематика"],["Днес цялото семейство ще ходим на басейн","היום כל המשפחה הולכים לבריכה","хайом кол хамишпаха олхим лебреха"],["Хайде да играем на криеница","בוא נשחק מחבואים","бо несахек махбоим"],["Пие ми се мляко","בא לי לשתות חלב","ба ли лиштот халав"],["Харесва ми тази тениска","אני אוהב את החולצה הזאת","ани оев ет хахулца хазот"],["Този стол е много удобен","הכיסא הזה מאוד נוח","хакисе хазе меод ноах"],["Хайде да излезем да се поразходим","בוא נצא לטייל קצת","бо нице летайел кцат"],["Този самолет е много голям","המטוס הזה גדול מאוד","хаматос хазе гадол меод"],["Много обичам да спортувам","אני מאוד אוהב לעשות ספורט","ани меод оев лаасот спорт"],["Днес учихме много интересни неща","היום למדנו דברים מאוד מעניינים","хайом ламадну дварим меод меаниеним"],["Тази игра е много интересна","המשחק הזה מאוד מעניין","хамисхак хазе меод меаниен"],["Яде ми се нещо сладко","בא לי לאכול משהו מתוק","ба ли леехол машеу маток"],["В междучасието ще играем футбол","בהפסקה הולכים לשחק כדורגל","бафсака олхим лесахек кадурегел"],["Научих се да свиря на китара","למדתי לנגן בגיטרה","ламадети ленаген бегитара"]],hebrewPoints=0;document.getElementById("hebrew-points").innerText=hebrewPoints;var randomNumbers=[];document.getElementById("hebrew-start-button").addEventListener("click",function(){document.getElementById("hebrew-start-button").setAttribute("class","d-none");for(var e=1;e<=3;e++)document.getElementsByClassName("hebrew-game-components")[e].classList.remove("d-none"),document.getElementsByClassName("hebrew-game-components")[e].classList.add("animated"),document.getElementsByClassName("hebrew-game-components")[e].classList.add("fadeIn");generateHebrewWord()});for(var hebrewInput="",i=0;i<=31;i++)document.getElementsByClassName("letter-key")[i].addEventListener("click",function(){hebrewInput+=hebrewLetters[this.getAttribute("alt")],document.getElementById("hebrew-player-input").value=hebrewInput});document.getElementById("hebrew-player-input").addEventListener("keypress",function(e){hebrewInput=document.getElementById("hebrew-player-input").value;var n=e.which||e.keyCode;n>=1488&&n<=1514||n>=32&&n<=64||n>=91&&n<=96||n>=123&&n<=126||13==n||deleteLetter()});var deleteLetter=function(){var e=(hebrewInput=document.getElementById("hebrew-player-input").value).split("");e.pop();var n=e.join("");hebrewInput=n,document.getElementById("hebrew-player-input").value=hebrewInput};document.getElementById("backspace-key").addEventListener("click",function(){deleteLetter()}),document.getElementById("enter-key").addEventListener("click",checkHebrewInput),document.getElementById("hebrew-phrase-submit").addEventListener("click",checkHebrewInput);var hebrewKeyboard={q:["q","/"],w:["w","'"],e:["e","ק"],r:["r","ר"],t:["t","א"],y:["y","ט"],u:["u","ו"],i:["i","ן"],o:["o","ם"],p:["p","פ"],a:["a","ש"],s:["s","ד"],d:["d","ג"],f:["f","כ"],g:["g","ע"],h:["h","י"],j:["j","ח"],k:["k","ל"],l:["l","ך"],colon:[";","ף"],apostrophe:["'",","],z:["z","ז"],x:["x","ס"],c:["c","ב"],v:["v","ה"],b:["b","נ"],n:["n","מ"],m:["m","צ"],"left-arrow":[",","ת"],"right-arrow":[".","ץ"],"question-mark":["/","."]},hebrewLettersList="";for(var key in hebrewKeyboard)hebrewLettersList+="<li><img src='img/keyboard/"+key+".png'></li>";document.getElementById("display-all-letters").innerHTML=hebrewLettersList;var hebrewKeyboardArray=Object.keys(hebrewKeyboard),currentHebrewLetter="";document.getElementById("hebrew-key-submit").addEventListener("click",generateNewHebrewLetter),document.getElementById("hebrew-letter-input").addEventListener("keypress",function(){console.log(hebrewKeyboard[currentHebrewLetter][0]),setTimeout(function(){document.getElementById("hebrew-letter-input").value==hebrewKeyboard[currentHebrewLetter][0]||document.getElementById("hebrew-letter-input").value==hebrewKeyboard[currentHebrewLetter][1]?(document.getElementById("hebrew-letter-input").value="",document.getElementById("hebrew-key-pic").style.border="5px solid #1FCB54",setTimeout(function(){document.getElementById("hebrew-key-pic").style.border="none"},500),generateNewHebrewLetter()):(document.getElementById("hebrew-letter-input").value="",document.getElementById("hebrew-key-pic").style.border="5px solid #587BF1",setTimeout(function(){document.getElementById("hebrew-key-pic").style.border="none"},500))},200)});
//# sourceMappingURL=main.js.map
