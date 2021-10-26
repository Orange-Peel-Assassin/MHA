var character = null; 

$(document).ready(function() {
    LoadChars();
    const params = new URLSearchParams(window.location.search);
    var name = params.get("name");

    Promise.all([
        d3.csv("../../Raw Chars/AllChars.csv")
    ]).then(([parsedCharacters]) => {
        characters = parsedCharacters;
        if (name === null){
            $("#npc-page").hide();

            let pcList = $("#pc-list");
            characters.forEach(c => {
                let pclink = $("<a/>")
                    .attr("href", `?name=${c.title}`)
                    .text(c.title);
                pcList.append($("<li/>")
                    .html(pclink));
            });
        }
        else{
            name = name.toLowerCase();
            character = characters.find(c => c.title.toLowerCase() === name);
            ShowCharInfo(character);
            $("#npc-page").show();
            $("#npc-home-page").hide();
        }
    });
});

function ShowCharInfo(char){
    $("#info-box-title").text(char.title);
    $("#info-box-name").text(char.name);
    let aliasArray = character["alias"].split(",");
    aliasArray.forEach(c => {
        $("#info-box-alias")
            .append($("<li/>")
            .text(c));
    });
    $("#info-box-pronouns").text(char.pronouns);
    $("#info-box-quirk").text(char.quirk);
    let affArr = character["affiliation"].split(",");
    affArr.forEach(c => {
        $("#info-box-affiliation")
            .append($("<li/>")
            .text(c));
    });
    $("#info-box-player").text(char.player);
    if (character["photo"] === null){
        $("#info-box-img").attr("src", `../../SVG/MHA-discord-seeklogo.svg`);
    }
    else{
        $("#info-box-img").attr("src", `${char.photo}`);
    }

}