// Get the root element
    var r = document.querySelector(':root');


    // Create a function for setting a variable value
    function myFunction_set() {
      // Set the value of variable --blue to another value (in this case "lightblue")
      r.style.setProperty('--nav-color', '#470000');
      r.style.setProperty('--bg-color', '#850000');
      r.style.setProperty('--secondary-color', '#FF4D79');
      r.style.setProperty('--thrid-color', '#FF1A40');
      r.style.setProperty('--font-color', '#FF809D');
    
    }

    function erosFunction() {
        if (localStorage.getItem("erosKey") === "true") {
            myFunction_set();
            $(".erosClass").show();
            $(".erosHideClass").hide();
        };
    }

$(document).ready(function() {
    erosFunction();
});


//enter also acts like a click on the search Button
$(document).keypress(function(e){
    if (e.which == 13){
        $("#searchButton").click();
    }
});


//the actual search 
function result() {
    var searchedName = document.getElementById("txtInput").value;
        if (searchedName === "erosKey") {
            localStorage.setItem("erosKey","true");
            myFunction_set();
        }
        else if (searchedName !== ""){
            console.log(`${searchedName}`);
            window.location.href = `NPCs/NPC.html?name=${searchedName}`;
        };
 }