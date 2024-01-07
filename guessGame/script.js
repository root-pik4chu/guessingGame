var rand_text = document.getElementById("rand_text");
var hint_id = document.getElementById("hint_id");
var button = document.getElementById("ref");
var check_ele = document.getElementById("check");
var word = document.getElementById("word");
var correct_word; // !for storing the word 


var time = document.getElementById("wakt");
var time_int;

function timer_fun(sec ){
    clearInterval(time_int);
    time_int = setInterval(function(){
        // time.innerText = sec;
        // document.write(sec);
        if(sec > 0){
            sec --;
            return time.innerText = sec;

        }
        clearInterval(time_int);
        game();
    } , 1000);
        
}

function game(){    
    timer_fun(10);
    var word_obj = words[Math.floor(Math.random()*words.length)];
    var rand = word_obj.word.split("");

    var i , j;
    for ( i=rand.length-1 ;i >0 ; i--) {
        j = Math.floor(Math.random() * (i+1));
        [rand[i] , rand[j]] = [rand[j] , rand[i]];

    }

    rand_text.innerHTML = rand.join("");
    hint_id.innerHTML = word_obj.hint;
    
    correct_word = word_obj.word;
    word.value="";
    console.log(word_obj);
    console.log(rand);


}

game();

button.onclick = function( ){
    game();
}

function check_word(){
   var user_input =  word.value.toLocaleLowerCase(); // maek the word in lower case 
//    alert(user_input);

    if(user_input != ""){
        if(user_input == correct_word ){
            alert('Congratulation! You got it right');
            game();
            
        }else{
            alert(`ooooppppppsiiiii .... correct word -  ${correct_word}` );
            word.value="";
            timer_fun(10);
        }


    }else {
        alert("please write the word");
    }




}

check_ele.onclick = function( ){
    check_word();
}




