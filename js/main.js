"use strict";function getName(e){$(document).ready(function(){$("#first-container h1").slideUp("slow"),$("#first-container").css("margin-top","30px"),$("#second-container").css("min-height","90vh"),$(".girl-name").text(e)})}function pickRandomProperty(e){var i=void 0,s=0;for(var n in e)Math.random()<1/++s&&(i=n);return i}function newWord(){randKey=pickRandomProperty(words),currentBulgWord=words[randKey][0],document.getElementById("bulg-word").innerHTML=currentBulgWord,document.getElementById("word-pic").setAttribute("src",words[randKey][1]),document.getElementById("player-submit-text").setAttribute("placeholder","_ ".repeat(randKey.length))}function picModal(e,i){var s=document.getElementById("pics-modal-image");"princess"==i&&(s.setAttribute("src","img/princesses/"+e+".jpg"),s.setAttribute("alt",e),document.getElementsByClassName("character-name")[0].innerText=princessObj[e],"aviva"==e?document.getElementsByClassName("character-name")[0].innerText="Авива и принцесите":"michaela"==e&&(document.getElementsByClassName("character-name")[0].innerText="Михаела и принцесите")),"emoji"==i&&(s.setAttribute("src","img/emojis/"+e+".jpg"),s.setAttribute("alt",e),document.getElementsByClassName("character-name")[0].innerText=emojiObj[e]),document.getElementById("modal-button").click()}function checkPoints(e,i){if("princess"===i){var s=document.getElementById("princesses-won");5===e?(s.innerHTML+="<img src='img/princesses/snowWhite.jpg' alt='Snow White' class='img-fluid'>",picModal("snowWhite","princess")):10===e?(s.innerHTML+="<img src='img/princesses/aurora.jpg' alt='Aurora' class='img-fluid'>",picModal("aurora","princess")):15===e?(s.innerHTML+="<img src='img/princesses/merida.jpg' alt='Merida' class='img-fluid'>",picModal("merida","princess")):20===e?(s.innerHTML+="<img src='img/princesses/jasmine.jpg' alt='Jasmine' class='img-fluid'>",picModal("jasmine","princess")):25===e?(s.innerHTML+="<img src='img/princesses/belle.jpg' alt='Belle' class='img-fluid'>",picModal("belle","princess")):30===e?(s.innerHTML+="<img src='img/princesses/mulan.jpg' alt='Mulan' class='img-fluid'>",picModal("mulan","princess")):35===e?(s.innerHTML+="<img src='img/princesses/ariel.jpg' alt='Ariel' class='img-fluid'>",picModal("ariel","princess")):40===e?(s.innerHTML+="<img src='img/princesses/pocahontas.jpg' alt='Pocahontas' class='img-fluid'>",picModal("pocahontas","princess")):45===e?(s.innerHTML+="<img src='img/princesses/cinderella.jpg' alt='Cinderella' class='img-fluid'>",picModal("cinderella","princess")):50===e?(s.innerHTML+="<img src='img/princesses/tiana.jpg' alt='Tiana' class='img-fluid'>",picModal("tiana","princess")):55===e?(s.innerHTML+="<img src='img/princesses/elsa.jpg' alt='Elsa' class='img-fluid'>",picModal("elsa","princess")):60===e?(s.innerHTML+="<img src='img/princesses/rapunzel.jpg' alt='Rapunzel' class='img-fluid'>",picModal("rapunzel","princess")):75===e&&("Авивче"==document.getElementsByClassName("girl-name")[0].innerText?(s.innerHTML+="<img src='img/princesses/aviva.jpg' alt='Aviva' class='img-fluid'>",picModal("aviva","princess")):"Михаелче"==document.getElementsByClassName("girl-name")[0].innerText&&(s.innerHTML+="<img src='img/princesses/michaela.jpg' alt='Michaela' class='img-fluid'>",picModal("michaela","princess")),"Авивче"!=document.getElementsByClassName("girl-name")[0].innerText&&"Михаелче"!=document.getElementsByClassName("girl-name")[0].innerText&&(s.innerHTML+="<img src='img/princesses/disney-princesses.jpg' alt='Aviva' class='img-fluid'>",picModal("disney-princesses","princess")))}else if("emoji"===i){var n=document.getElementById("emojis-won");6===e?(n.innerHTML+="<img src='img/emojis/maryMeh.jpg' alt='Mery Meh' class='img-fluid'>",picModal("maryMeh","emoji")):12===e?(n.innerHTML+="<img src='img/emojis/highFive.jpg' alt='High Five' class='img-fluid'>",picModal("highFive","emoji")):18===e?(n.innerHTML+="<img src='img/emojis/jailbreak.jpg' alt='Jailbreak' class='img-fluid'>",picModal("jailbreak","emoji")):24===e?(n.innerHTML+="<img src='img/emojis/melMeh.jpg' alt='Mel Meh' class='img-fluid'>",picModal("melMeh","emoji")):30===e?(n.innerHTML+="<img src='img/emojis/smiler.jpg' alt='Smiler' class='img-fluid'>",picModal("smiler","emoji")):36===e?(n.innerHTML+="<img src='img/emojis/gene.jpg' alt='Gene' class='img-fluid'>",picModal("gene","emoji")):42===e&&(n.innerHTML+="<img src='img/emojis/akiko.jpg' alt='Akiko' class='img-fluid'>",picModal("akiko","emoji"))}}function startGame(e,i){function s(i){var s=void 0;"words-game-components"===i?s=3:"countries-game-components"===i&&(s=2);for(var n=0;n<=s;n++)document.getElementsByClassName(e)[n].classList.remove("d-none"),document.getElementsByClassName(e)[n].classList.add("animated"),document.getElementsByClassName(e)[n].classList.add("fadeIn")}"words-game-components"===e?(document.getElementById("words-game-start-button").setAttribute("class","d-none"),s(e),document.getElementsByClassName("words-game-components")[1].classList.add("d-flex"),newWord()):"countries-game-components"===e&&(document.getElementById("countries-start-button").setAttribute("class","d-none"),s(e),"countries"===i&&(startCountriesGame(),moveEmojis()))}function checkInput(){var e=document.getElementById("player-submit-text"),i=e.value.toLowerCase();if(document.getElementById("words-points").classList.remove("bounce"),i in words)words[i][0]===currentBulgWord&&(wordsPoints++,document.getElementById("words-points").innerText=wordsPoints.toString(),e.style.color="#1FCB54",e.value="БРАВО!",document.getElementById("words-points").classList.add("bounce"),setTimeout(function(){e.value="",e.style.color="#5252af"},700),checkPoints(wordsPoints,"princess"),newWord());else{var s=e.value;e.style.color="#587BF1",e.value="ОПИТАЙ ОТНОВО!",setTimeout(function(){e.value=s,e.style.color="#5252af"},700)}}function moveEmojis(){var e=document.getElementById("emojis-poster");e.style.top="-45px",e.style.left="-50px",e.style.width="200px",e.style.zIndex="5",e.style.transform="rotate(-15deg)"}function startCountriesGame(){function e(e,i){return Number((Math.random()*(i-e)+e).toFixed(0))}function i(i,s,n){for(var t=e(s,n);t==i;)t=e(s,n);return t}var s=e(0,43),n=i(s,0,43),t=function(){for(var e=i(s,0,43);e===s&&e===n;)e=i(s,0,43);return e}();document.getElementById("map-image").setAttribute("src",countries[s][3]),document.getElementById("flag-image").setAttribute("src",countries[s][2]);var r=e(0,2),o=i(r,0,2),a=void 0;1==r&&2==o?a=0:0==r&&2==o?a=1:0==r&&1==o?a=2:1==r&&0==o?a=2:2==r&&1==o?a=0:2==r&&0==o&&(a=1),realAnswer=countries[s][0],possibleAnswers[r].innerText=realAnswer,possibleAnswers[o].innerText=countries[n][0],possibleAnswers[a].innerText=countries[t][0],document.getElementById("countries-points").classList.add("bounce"),waitForAnswer(r,o,a)}function waitForAnswer(e,i,s){function n(){var o=possibleAnswers[0].innerText,a=possibleAnswers[1].innerText,c=possibleAnswers[2].innerText;if(1==r){for(var m=0;m<=2;m++)possibleAnswers[m].style.backgroundColor="blue",possibleAnswers[m].innerText="НОВА ДЪРЖАВА!";setTimeout(function(){for(var o=0;o<=2;o++)possibleAnswers[o].style.backgroundColor="#30cfc0";setTimeout(function(){document.getElementById("countries-points").classList.remove("bounce")},1400),startCountriesGame(),possibleAnswers[i].removeEventListener("click",n),possibleAnswers[s].removeEventListener("click",n),possibleAnswers[e].removeEventListener("click",t),r=0},1e3)}else{for(var l=0;l<=2;l++)possibleAnswers[l].style.backgroundColor="#e2b10f",possibleAnswers[l].innerText="ОПИТАЙ ОТНОВО!";setTimeout(function(){for(var e=0;e<=2;e++)possibleAnswers[e].style.backgroundColor="#30cfc0",possibleAnswers[0].innerText=o,possibleAnswers[1].innerText=a,possibleAnswers[2].innerText=c},400),setTimeout(function(){document.getElementById("countries-points").classList.remove("bounce")},1400),r++}}function t(){countriesPoints++,document.getElementById("countries-points").style.color="#5EBA5E",document.getElementById("countries-points").innerText=countriesPoints.toString();for(var o=0;o<=2;o++)possibleAnswers[o].style.backgroundColor="#5EBA5E";setTimeout(function(){for(var e=0;e<=2;e++)possibleAnswers[e].style.backgroundColor="#30cfc0"},700),possibleAnswers[e].removeEventListener("click",t),possibleAnswers[i].removeEventListener("click",n),possibleAnswers[s].removeEventListener("click",n),setTimeout(function(){document.getElementById("countries-points").classList.remove("bounce"),document.getElementById("countries-points").style.color="white"},1400),r=0,checkPoints(countriesPoints,"emoji"),startCountriesGame()}var r=0;possibleAnswers[i].addEventListener("click",n),possibleAnswers[s].addEventListener("click",n),possibleAnswers[e].addEventListener("click",t)}var loader=document.getElementById("loader");window.addEventListener("load",function(){$("#loader").fadeOut("slow"),setTimeout(function(){loader.style.display="none"},1e3)}),$(document).ready(function(){$("#background-container img").fadeTo(3e3,1),setTimeout(function(){$("#second-container").addClass("animated fadeIn")},4500)}),document.getElementById("first-go-back-button").addEventListener("click",function(){$("#first-container h1").slideDown("slow"),$("#second-container").css("min-height","70vh")});var wordsPoints=0,randKey=void 0,currentBulgWord=void 0;document.getElementById("words-points").innerText=wordsPoints.toString();var words=function(){var e=null;return $.ajax({async:!1,global:!1,url:"js/words.json",dataType:"json",success:function(i){e=i}}),e}(),princessObj={ariel:"Aриел",aurora:"Аврора",belle:"Бел",cinderella:"Пепеляшка",elsa:"Елза",jasmine:"Жасмин",merida:"Мерида",mulan:"Мулан",pocahontas:"Покахонтас",snowWhite:"Снежанка",rapunzel:"Рапунцел",tiana:"Тиана"},emojiObj={smiler:"Смайлър",gene:"Джин",highFive:"Дай 5",jailbreak:"Терабайт",maryMeh:"Мери Ме",akiko:"Акико",melMeh:"Мел Ме"};document.getElementById("words-game-start-button").addEventListener("click",function(){startGame("words-game-components")});var countries=[["Албания","Тирана","img/countries/flag/albania.svg","img/countries/map/albania.jpg"],["Андора","Андора ла Веля","img/countries/flag/andorra.svg","img/countries/map/andorra.jpg"],["Австрия","Виена","img/countries/flag/austria.svg","img/countries/map/austria.jpg"],["Беларус","Минск","img/countries/flag/belarus.svg","img/countries/map/belarus.jpg"],["Белгия","Брюксел","img/countries/flag/belgium.svg","img/countries/map/belgium.jpg"],["Босна и Херцеговина","Сараево","img/countries/flag/bosnia.svg","img/countries/map/bosnia.jpg"],["България","София","img/countries/flag/bulgaria.svg","img/countries/map/bulgaria.jpg"],["Хърватия","Загреб","img/countries/flag/croatia.svg","img/countries/map/croatia.jpg"],["Кипър","Никозия","img/countries/flag/cyprus.svg","img/countries/map/cyprus.jpg"],["Чехия","Прага","img/countries/flag/czech-republic.svg","img/countries/map/czech-republic.jpg"],["Дания","Копенхаген","img/countries/flag/denmark.svg","img/countries/map/denmark.jpg"],["Естония","Талин","img/countries/flag/estonia.svg","img/countries/map/estonia.jpg"],["Финландия","Хелзинки","img/countries/flag/finland.svg","img/countries/map/finland.jpg"],["Франция","Париж","img/countries/flag/france.svg","img/countries/map/france.jpg"],["Германия","Берлин","img/countries/flag/germany.svg","img/countries/map/germany.jpg"],["Гърция","Атина","img/countries/flag/greece.svg","img/countries/map/greece.jpg"],["Унгария","Будапеща","img/countries/flag/hungary.svg","img/countries/map/hungary.jpg"],["Исландия","Рейкявик","img/countries/flag/iceland.svg","img/countries/map/iceland.jpg"],["Ирландия","Дъблин","img/countries/flag/ireland.svg","img/countries/map/ireland.jpg"],["Италия","Рим","img/countries/flag/italy.svg","img/countries/map/italy.jpg"],["Латвия","Рига","img/countries/flag/latvia.svg","img/countries/map/latvia.jpg"],["Литва","Вилнюс","img/countries/flag/liechtenstein.svg","img/countries/map/lithuania.jpg"],["Люксембург","Люксембург","img/countries/flag/luxembourg.svg","img/countries/map/luxembourg.jpg"],["Македония","Скопие","img/countries/flag/macedonia.svg","img/countries/map/macedonia.jpg"],["Малта","Валета","img/countries/flag/malta.svg","img/countries/map/malta.jpg"],["Молдова","Кишинев","img/countries/flag/moldova.svg","img/countries/map/moldova.jpg"],["Монако","Монако","img/countries/flag/monaco.svg","img/countries/map/monaco.jpg"],["Черна гора","Подгорица","img/countries/flag/montenegro.svg","img/countries/map/montenegro.jpg"],["Холандия","Амстердам","img/countries/flag/netherlands.svg","img/countries/map/netherlands.jpg"],["Норвегия","Осло","img/countries/flag/norway.svg","img/countries/map/norway.jpg"],["Полша","Варшава","img/countries/flag/poland.svg","img/countries/map/poland.jpg"],["Португалия","Лисабон","img/countries/flag/portugal.svg","img/countries/map/portugal.jpg"],["Румъния","Букурещ","img/countries/flag/romania.svg","img/countries/map/romania.jpg"],["Русия","Москва","img/countries/flag/russia.svg","img/countries/map/russia.jpg"],["Сан Марино","Сан Марино","img/countries/flag/san-marino.svg","img/countries/map/san-marino.jpg"],["Сърбия","Белград","img/countries/flag/serbia.svg","img/countries/map/serbia.jpg"],["Словакия","Братислава","img/countries/flag/slovakia.svg","img/countries/map/slovakia.jpg"],["Словения","Любляна","img/countries/flag/slovenia.png","img/countries/map/slovenia.jpg"],["Испания","Мадрид","img/countries/flag/spain.svg","img/countries/map/spain.jpg"],["Швеция","Стокхолм","img/countries/flag/sweden.svg","img/countries/map/sweden.jpg"],["Швейцария","Берн","img/countries/flag/switzerland.svg","img/countries/map/switzerland.jpg"],["Украйна","Киев","img/countries/flag/ukraine.svg","img/countries/map/ukraine.jpg"],["Великобритания","Лондон","img/countries/flag/united-kingdom.svg","img/countries/map/united-kingdom.jpg"],["Ватикан","Ватикан","img/countries/flag/vatican.svg","img/countries/map/vatican.jpg"]];document.getElementById("countries-start-button").addEventListener("click",function(){startGame("countries-game-components","countries")});var realAnswer=void 0,possibleAnswers=document.getElementsByClassName("possible-answers"),countriesPoints=0;document.getElementById("countries-points").innerText=countriesPoints.toString();var displayAllWords=function(){var e="";for(var i in words)e='<li><a href="#" class="word-click" onclick="dispWordComponents(\''+words[i][0]+"','"+i+"','"+words[i][1]+'\')"><img src="'+words[i][1]+'" class="word-click-images img-fluid">'+words[i][0]+"</a></li>",document.getElementById("display-all-words").innerHTML+=e};displayAllWords();var dispWordComponents=function(e,i,s){$("#learn-words-components-row > div").fadeOut("fast"),setTimeout(function(){document.getElementById("learn-words-bulg-word").innerText=e;document.getElementById("learn-words-eng-word").innerText=i;var n=document.getElementById("learn-words-pic");n.setAttribute("src",s),n.setAttribute("alt",i),$("#learn-words-components-row > div").fadeIn("fast")},400)},displayAllCountries=function(){for(var e="",i=0;i<=countries.length-1;i++)e+='<li><a href="#" class="country-click" onclick="dispCountryComponents(\''+countries[i][0]+"','"+countries[i][1]+"','"+countries[i][2]+"','"+countries[i][3]+'\')"><img src="'+countries[i][2]+'" class="country-click-images img-fluid">'+countries[i][0]+"</a></li>";document.getElementById("display-all-countries").innerHTML+=e};displayAllCountries();var dispCountryComponents=function(e,i,s,n){setTimeout(function(){var t=document.getElementById("learn-countries-country");t.innerText=e;document.getElementById("learn-countries-capital").innerText=i;var r=document.getElementById("learn-countries-pic");r.setAttribute("src",s),r.setAttribute("alt",t),r.style.border="1px solid black";document.getElementById("learn-countries-components-row").style.backgroundImage="url("+n+")"},200)};
//# sourceMappingURL=main.js.map
