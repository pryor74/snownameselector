const NAMESLIST = $("#names-list");
const DELETENAME = '<i class="fas fa-times-circle remove-name"></i>';
const WINNER = $(".winner");
let names = [];

function randomIntFromInterval(min,max) // min and max included
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function displayWinner(){
    if (names.length > 0) {
        WINNER.html("");
        let winnerIndex = randomIntFromInterval(0, (names.length - 1));
        let winner  = names[winnerIndex];
        var winnerElements = winner.split("").map(function(c) {
            return $('<span id="' + c + '">' + c + '</span>');
        });
        var delay = 250; // Tune this for different letter delays.
        winnerElements.forEach(function(e, i) {
            WINNER.append(e);
            e.hide();
            setTimeout(function() {
                e.fadeIn(300)
            }, 100 + i * delay)
        })
    }  
}

$(".submit").on("click", function(){
  let addName = $(".input").val();
  if (addName.length > 0 && $.inArray(addName, names) == -1) {
    names.push(addName);
    NAMESLIST.append('<li data-name="' + addName  + '">' + addName + DELETENAME + '</li>');
  }
  console.log(names);
});

$(document).on("click", ".remove-name", function(){
  let $parent = $(this).parent();
  let removeName = $parent.data("name");
  let index = names.indexOf(removeName);
  if (index > -1) {
    names.splice(index, 1);
  }
  $parent.remove();
  console.log(names);
});

$(".generate").on("click", function(){
    displayWinner();
});
