  var temp = document.querySelector('.time');
  var button = document.querySelector("button");
  var words = document.querySelector(".words");
  var words_translation = document.querySelector(".words_translation");
  var timerDiv = document.querySelector(".time");
  var scoreDiv = document.querySelector(".score");
  var points = 0;
  var spans;
  var typed;
  var seconds = 60;
  var spark = new Audio("http://k003.kiwi6.com/hotlink/qdpr7bioht/spark.mp3");

  function countdown() {
    points = 0;
    var timer = setInterval(function(){
      button.disabled = true;
        seconds--;
        temp.innerHTML = seconds;
        if (seconds === 0) {
          alert("Game over! Your score is " + points);
          scoreDiv.innerHTML = "0";
          words.innerHTML = "";
          words_translation.innerHTML = "";
          button.disabled = false;
          clearInterval(timer);
          seconds = 60;
          timerDiv.innerHTML = "60";
          button.disabled = false;  
        }
    }, 1000);
    }

    function random() {
      words.innerHTML = "";
      var list_keys = Object.keys(list);
      var random = Math.floor(Math.random() * (list_keys.length-1));
      var english_word = list_keys[random];
      var wordArray = list[english_word].split("");
      words_translation.innerHTML = english_word;
      console.log(wordArray);
      for (var i = 0; i < wordArray.length; i++) { //building the words with spans around the letters
        var span = document.createElement("span");
        span.classList.add("span");
        span.innerHTML = wordArray[i];
        words.appendChild(span);
      }
      spans = document.querySelectorAll(".span");
    }


    const list = {"head": "azeǧif", "brain": "aǧi", "hair": "acewaf", "ponytail": "ajeṭṭuy", "eyes": "tiṭṭawin", "eyebrows": "tammiwin", "eyelashes": "abriwen", "ear": "ameẓẓuɣ", "nose": "tinzar", "mouth": "aqemmum", "teeth": "tiɣmas", "lips": "ancucen", "tongue": "iřes", "throat": "iri", "shoulder": "taɣṛut", "back": "aɛrur", "hand": "afus", "finger": "aḍaḍ", "thumb": "imez", "nails": "iccaren", "bellybutton": "tamit", "belly": "aɛeddis", "knee": "afud", "foot": "aḍar", "toe": "tafdent", "water": "aman", "milk": "aceffay", "buttermilk": "aɣi", "sugar": "ssukar", "bread": "aɣrum", "meat": "aysum", "egg": "tamǧač", "honey": "tammant", "rice": "aruẓ", "tea": "atay", "coffee": "řqehwa", "olive oil": "zzect", "butter": "dhen", "cheese": "furmaj", "chocolate": "cukulati", "cookies": "ɣayita", "soft ice": "laḍu", "candy": "ḥalawat", "ice": "pulu", "apple": "tateffaḥt", "honey melon": "abettix", "water melon": "dellaḥ", "pommegranate": "aremman", "banana": "platanu / banan", "apricot": "řmecmec", "pear": "řfiras", "peach": "řxux", "plums": "řbaquq", "orange": "aletcini", "potato": "baṭaṭa", "peas": "tinifin", "onion": "řebser", "cucumber": "řexyar", "carrot": "xizzu", "garlic": "ticart", "pepper": "řferfeř", "tomato": "tumaɛtic", "almond": "ǧuz", "nuts": "tqawit", "walnut": "taɣyact", "bird": "ajḍiḍ", "pigeon": "adbir", "chick": "afiǧus", "chicken": "tayaziṭ", "rooster": "ayaẓiḍ", "donkey": "aɣyur", "horse": "ayis/akida", "camel": "ařɣem", "cat": "amuc", "dog": "aqzin", "lamb": "izmar", "sheep": "icarri", "cow": "tafunast", "calf": "aɛejmi", "bull": "ayenduz", "goat": "taɣat", "bunny": "aqenni", "bunny (in the wild)": "ayarẓiẓ", "hedgehog": "insi", "pig": "iřef", "lion": "buharu", "hyena": "ifis", "fox": "icɛeb", "panther": "aɣiřas", "monkey": "řqard", "snake": "afiɣar", "mouse": "aɣarda", "frog": "aqaqriw", "bee": "tazizwit", "grasshopper": "burxes", "scorpion": "taɣirdent", "worm": "akecca", "fishes": "iserman", "1 o'clock": "waḥit", "4 o'clock": "arebɛa ", "3 o'clock": "tesɛa", "12 o'clock": "tenɛac", "half past 2": "tnayen d uzyen", "half past 5": "xemsa d uzyen", "half past 10": "ɛecra d uzyen", "half past 12": "tenɛac d uzyen", "quarter past 3": "trata urbeɛ", "quarter to 4": "arebɛa qel arbeɛ", "5 minutes to 9": "tesɛa qel xemsa", "5 minutes over 6": "setta uxemsa", "10 minutes to 7": "sebɛa qel ɛecra", "10 minutes over 8": "tmenya uɛecra", "20 mintues before 2": "tnayen qel ɛicrin", "20 minutes over 11": "ḥitac uɛicrin", "25 mintues over 1": "waḥit uxemsa uɛicrin", "25 mintues before 12": "tenɛac qel xemsa uɛicrin", "yellow": "awraɣ", "black": "abarcan", "red": "azeggʷaɣ", "blue": "aḥmaymi", "purple": "azbaybi", "green": "azegza", "brown": "aqehwi", "pink": "arusa", "white": "acemřař"};

    button.addEventListener("click", function(e){
      countdown();
      random();
      button.disabled = true; 
    });


    function typing(e) {
        typed = e.key;
        console.log(typed);
        for (var i = 0; i < spans.length; i++) {
          if (spans[i].innerHTML === typed) { // if typed letter is the one from the word
            if (spans[i].classList.contains("bg")) { // if it already has class with the bacground color then check the next one
              continue;
            } else if (spans[i].classList.contains("bg") === false && spans[i-1] === undefined || spans[i-1].classList.contains("bg") !== false ) { // if it dont have class, if it is not first letter or if the letter before it dont have class (this is done to avoid marking the letters who are not in order for being checked, for example if you have two "A"s so to avoid marking both of them if the first one is at the index 0 and second at index 5 for example)
              spans[i].classList.add("bg");
              break;
            }
          }
        }
        var checker = 0;
        for (var j = 0; j < spans.length; j++) { //checking if all the letters are typed
          if (spans[j].className === "span bg") {
            checker++;
          }
          if (checker === spans.length) { // if so, animate the words with animate.css class
            spark.pause();
            spark.currentTime = 0;
            spark.play();
            words.classList.add("animated");
            words.classList.add("fadeOut");
            points++; // increment the points
            scoreDiv.innerHTML = points; //add points to the points div
            document.removeEventListener("keydown", typing, false);
            setTimeout(function(){
              words.className = "words"; // restart the classes
              random(); // give another word
              document.addEventListener("keydown", typing, false);
            }, 400);
          }

        }
    }

    document.addEventListener("keydown", typing, false);