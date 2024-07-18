$(document).ready(function () {
  // Add Element
  $(".addbtn").click(function () {
    let value = $("input").val();

    if (value == "") {
      alert("Please Enter Note");
    } else {
      $("ol").append(
        "<li>" + value + "<i class='fa-solid fa-trash'></i>" + "</li>"
      );
      $("input").val("");
    }

    // Remove Element
    $(".fa-solid").click(function () {
      $("li").addClass("removeEle");
      $(".removeEle").click(function () {
        $(this).fadeOut("slow");
      });
    });
  });
});
