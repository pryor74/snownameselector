const NAMESLIST = $("#names-list");
const DELETENAME = '<i class="fas fa-times-circle remove-name"></i>';
let names = [];

function randomIntFromInterval(min,max) // min and max included
{
    return Math.floor(Math.random()*(max-min+1)+min);
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
  console.log(randomIntFromInterval(0, names.length));
});
