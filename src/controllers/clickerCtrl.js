let input, button, game;
input = document.getElementById("clickerInput"),
button = document.getElementById("clickerButton"),
game = {
    score:0,
    start: function() {
        game.score = 0;
        button.onclick = game.click;
        button.innerHTML = "Press";
        setTimeout (game.finish,10000);
    },
    click: function() {
        game.score++;
        input.value = game.score;
    },
    finish: function() {
        alert(game.score);
        button.onclick = game.start;
        button.innerHTML = "Start";
    }
}
button.onclick = game.start;

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(json => console.log(json))