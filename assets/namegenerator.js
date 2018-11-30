const NAMESLIST = $("#names-list");
const DELETENAME = '<i class="fas fa-times-circle remove-name"></i>';
let names = [];

$(".submit").on("click", function(){
  let addName = $(".input").val();
  if (addName.length > 0 && $.inArray(addName, names) == -1) {
    names.push(addName);
    NAMESLIST.append('<li data-name="addName">' + addName + DELETENAME + '</li>');
  }
  console.log(names);
});

$(".remove-name").on("click", function(){
  let $parent = $(this).parent();
  let removeName = $parent.data("name");
  let index = names.indexOf(removeName);
  if (index > -1) {
    names.splice(index, 1);
  }
  $(this).parent().remove();
  console.log(names);
});
