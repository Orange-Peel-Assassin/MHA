// Get the root element
    var r = document.querySelector(':root');


    // Create a function for setting a variable value
    function ErosColor() {
      // Set the value of variable --blue to another value (in this case "lightblue")
      r.style.setProperty('--nav-color', '#470000');
      r.style.setProperty('--bg-color', '#850000');
      r.style.setProperty('--secondary-color', '#FF4D79');
      r.style.setProperty('--thrid-color', '#FF1A40');
      r.style.setProperty('--font-color', '#FF809D');
    
    }

    function ErosCheck() {
        if (localStorage.getItem("erosKey") === "true") {
            ErosColor();
            $(".erosClass").show();
            $(".erosHideClass").hide();
        };
    }

    function ErosSet() {
        localStorage.setItem("erosKey","true");
        ErosCheck();
    }



    function DevColor() {
        // Set the value of variable --blue to another value (in this case "lightblue")
        r.style.setProperty('--nav-color', '#470047');
        r.style.setProperty('--bg-color', '#850085');
        r.style.setProperty('--secondary-color', '#d24dff');
        r.style.setProperty('--thrid-color', '#d919ff');
        r.style.setProperty('--font-color', '#e180ff');
      
      }
  
      function DevCheck() {
          if (localStorage.getItem("devKey") === "true") {
              DevColor();
              $(".devClass").show();
              $(".devHideClass").hide();
          };
      }
  
      function DevSet() {
          localStorage.setItem("devKey","true");
          DevCheck();
      }

      function ResetColor() {
        // Set the value of variable --blue to another value (in this case "lightblue")
        r.style.setProperty('--nav-color', '#0C143A');
        r.style.setProperty('--bg-color', '#2E365A');
        r.style.setProperty('--secondary-color', '#5897F2');
        r.style.setProperty('--thrid-color', '#7283A6');
        r.style.setProperty('--font-color', '#AAB9D0');
      }

      function ResetKeys() {
          localStorage.setItem("devKey","false");
          localStorage.setItem("erosKey","false");
          ResetColor();
          CheckKeys();
      }

      function CheckKeys() {
        ErosCheck();
        DevCheck();
        if (localStorage.getItem("admin") === "true") {
            $(".adminShow").show();
        };
      }










$(document).ready(function() {
    CheckKeys();
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
        if (searchedName === "Admin") {
            localStorage.setItem("admin","true");
            CheckKeys();
        }
        else if (searchedName !== "" && window.location.href.indexOf("index") > -1){
            console.log(`${searchedName}`);
            window.location.href = `Pages/NPCs/NPC.html?name=${searchedName}`;
        }
        else if (searchedName !== "") {
            console.log(`${searchedName}`);
            window.location.href = `NPCs/NPC.html?name=${searchedName}`;
        }
        ;
 }
