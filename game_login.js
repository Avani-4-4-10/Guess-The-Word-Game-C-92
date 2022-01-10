function addUser(){
    player_1_name= document.getElementById("player1_input").value;
    player_2_name= document.getElementById("player2_input").value;

    localStorage.setItem("user1_name",player_1_name);
    localStorage.setItem("user2_name",player_2_name);

    window.location="game_page.html";
}