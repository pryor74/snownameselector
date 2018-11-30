const NAMESLIST = $("#names-list");
const DELETENAME = "<i class=""fas fa-times-circle remove-name""></i>";
let names = [];

$(".submit").on("click", function(){
  let addName = $(".input").val();
  if (addName.length > 0 && $.inArray(addName, names) == -1) {
    names.push(addName);
    NAMESLIST.append("<li>" + addName + DELETENAME + "</li>");
  }
});
