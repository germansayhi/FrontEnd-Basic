//DOM Element
const demo = $("#demo");
const squares = $(".square");

// DOM HTML 
demo.text(" Học java thật thú vị")
demo.val("abc")

//DOM CSS
demo.css({
    fontFamily: "Cambria",
    fontSize: "2em",
    color: "red",
    backgroundColor: "yellow"
});
squares.addClass("square-red");