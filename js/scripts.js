// Get the modal
$(document).ready(function(){
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btns = $(".bn");



// Get the <span> element that closes the modal
var spans = $(".close");

// When the user clicks the button, open the modal
// btns.forEach(function (btn) {
 btns.click(function() {
     modal.style.display = "block";
 });
// });

// When the user clicks on <span> (x), close the modal
// spans.forEach(function(span) {
 spans.click(function() {
     modal.style.display = "none";
 });
// });

// When the user clicks anywhere outside of the modal, close it
});
