const NAMESLIST = $("#names-list");
let names = [];

$(".submit").on("click", function(){
  let addName = $(this).val();
  if (addName.length > 0 && $.inArray(addName, names) == -1) {
    items.push(boxvalue);
    NAMESLIST.append("hello");
  }
});
