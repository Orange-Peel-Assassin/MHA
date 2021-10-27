var character = null; 

$(document).ready(function() {
    LoadChars();
    const params = new URLSearchParams(window.location.search);
    var name = params.get("name");

    Promise.all([
        d3.csv("../../Raw Chars/AllChars.csv", (row) => {
            row.group = (row.player === "GM")? "NPC": "PC";
            return row;
        })
    ]).then(([parsedCharacters]) => {
        characters = parsedCharacters;
        charByPlayer = d3.group(characters, d => d.group);
        let charListDiv = $("#char-lists");
        charByPlayer.forEach((v, k) => {
            let charGroup = $("<div/>");
            charGroup.append($(`<h2>${k}</h2>`));

            let charUl = $("<ul/>");
            charGroup.append(charUl);
                v.forEach(playerChar => {
                    charUl.append($(`<li><a href="?name=${playerChar.title}">${playerChar.title}</a></li>`));
                });
            charListDiv.append(charGroup);
        });

        if (name === null){
            $("#npc-page").hide();
                let pcList = $("#pc-list");
            /*characters.forEach(c => {
                let pclink = $("<a/>")
                    .attr("href", `?name=${c.title}`)
                    .text(c.title);
                pcList.append($("<li/>")
                    .html(pclink));
            });*/
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
    $("#info-box-img").attr("src",
        character.photo === ""? 
            "../../SVG/MHA-discord-seeklogo.svg":
            `${char.photo}` );
    $("#page-appearance").text(char.appearance);
    $("#page-quirk").text(char.quirkInfo);
    $("#page-backround").text(char.backround);
    let noteArray = character["notes"].split(",");
    noteArray.forEach(c => {
        $("#page-notes")
            .append($("<li/>")
            .text(c));
    });

}