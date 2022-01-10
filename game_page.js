player1_name= localStorage.getItem("user1_name");
player2_name= localStorage.getItem("user2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name + " : "
document.getElementById("player2_name").innerHTML=player2_name + " : "

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("question_turn").innerHTML="Question Turn - "+ player1_name;
document.getElementById("answer_turn").innerHTML="Answer Turn - "+ player2_name;

function send(){
    var getWord= document.getElementById("word").value;
    word = getWord.toLowerCase();
    second_letter=word.charAt(1)
    length= word.length
    middleLetter=word.charAt(Math.floor(length/2))
    lastLetter=word.charAt(length-1)
    remove_s_letter=word.replace(second_letter,"_")
    remove_m_letter=remove_s_letter.replace(middleLetter,"_");
    remove_l_letter=remove_m_letter.replace(lastLetter,"_");
    console.log(remove_l_letter);
    question_tag= "<h4 id='word_display'>Q. " + remove_l_letter+"</h4>";
    input_tag= "<br>Answer <input id='input_check_box' type='text'>";
    button_tag= "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row= question_tag+input_tag+button_tag;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";

}
question_turn="player_1";
answer_turn="player_2";

function check(){
    get_Answer=document.getElementById("input_check_box").value;
    answer= get_Answer.toLowerCase();

    if(answer==word){
        if(answer_turn=="player_1"){
            player1_score= player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;

        }
    }
    if(question_turn=="player_1"){
        question_turn="player_2"
        document.getElementById("question_turn").innerHTML="Question Turn - "+ player2_name;

    }
    else{
        question_turn="player_1"
        document.getElementById("question_turn").innerHTML="Question Turn - "+ player1_name;

    }
    if(answer_turn=="player_1"){
        answer_turn="player_2"
        document.getElementById("answer_turn").innerHTML="Answer Turn - "+ player2_name;

    } 
    else{
        answer_turn="player_1";
        document.getElementById("answer_turn").innerHTML="Answer Turn - "+ player1_name;

    }
    document.getElementById("output").innerHTML=""
}
