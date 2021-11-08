var characters

$(document).keypress(function(e){
    if (e.which == 13){
        $("#searchButton").click();
    }
});

function LoadChars() {
   /* Promise.all([
        d3.csv("../../Raw Chars/AllChars.csv")
    ]).then(([parsedCharacters]) => {
        characters = parsedCharacters;
    }); */
}

function result() {
    var searchedName = document.getElementById("txtInput").value;
        if (searchedName !== ""){
            console.log(`${searchedName}`);
             window.location.href = `?name=${searchedName}`;
        };
 }