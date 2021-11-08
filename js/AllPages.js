

$(document).keypress(function(e){
    if (e.which == 13){
        $("#searchButton").click();
    }
});

function result() {
    var searchedName = document.getElementById("txtInput").value;
        if (searchedName !== ""){
            console.log(`${searchedName}`);
             window.location.href = `NPCs/NPC.html?name=${searchedName}`;
        };
 }