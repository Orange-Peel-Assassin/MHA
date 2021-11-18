var character = null;

$(document).ready(function() {
    LoadChars();
    const params = new URLSearchParams(window.location.search);
    var name = params.get("name");

    Promise.all([
        d3.csv("../../Raw Chars/AllChars.csv", (row) => {
            row.player = row.player.split(",");
            row.group = (row.player[0] === "GM")? "NPC": "PC"; //GM will always be 0 if the list if the gm is in control
            row.alias = row.alias.split(",");
            row.affiliation = row.affiliation.split(",");
            row.notes = row.notes.split(",");
            row.skills = row.skills.split(",");
            return row;
        })
    ]).then(([parsedCharacters]) => {
        characters = parsedCharacters;
        charByPlayer = d3.group(characters, d => d.group,d => d.affiliation[0]); //the first [0] affiliation will be the strongest
        let charListDiv = $("#char-lists");
        charByPlayer.forEach((factionMap, ControllingEntity) => {
            let charGroup = $("<div/>");
            charGroup.append($(`<h2>${ControllingEntity}</h2>`));
                
            factionMap.forEach((charList, faction) => {
                let charUl = $(`<ul><h2>${faction}</h2></ul>`);
                charGroup.append(charUl);
                    charList.map(playerChar => playerChar.title)
                        .sort()
                        .forEach(title => {
                            charUl.append($(`<li><a href="?name=${title}">${title}</a></li>`));
                    });
            charListDiv.append(charGroup);
            });


           
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
        erosFunction();
    });
});

function ShowCharInfo(char){
    $("#info-box-title").html(char.title);
    $("#info-box-name").html(char.name);
    character.alias.forEach(c => {
        $("#info-box-alias")
            .append($("<li/>")
            .html(c));
    });
    $("#info-box-pronouns").html(char.pronouns);
    $("#info-box-quirk").html(char.quirk);
    character.affiliation.forEach(c => {
        $("#info-box-affiliation")
            .append($("<li/>")
            .html(c));
    });
    character.player.forEach(c => {
        $("#info-box-player")
            .append($("<li/>")
            .html(c));
    });
    // $("#info-box-img").attr("src",
    //     character.photo === ""? 
    //         "../../SVG/MHA-discord-seeklogo.svg":
    //         `${char.photo}` );
    if (localStorage.getItem("erosKey") === "true" && (character.photoEros != "")) {
        var srcVar = `${char.photoEros}`
    }
    else if (character.photo === "") {
        var srcVar = "../../SVG/MHA-discord-seeklogo.svg"
    } 
    else {
        var srcVar = `${char.photo}`
    }
    $("#info-box-img").attr("src",srcVar)
    $("#page-appearance").html(char.appearance);
    $("#page-quirk").html(char.quirkInfo);
    $("#page-backround").html(char.backround);
    character.skills.forEach(c => {
        $("#page-skills")
            .append($("<li/>")
            .html(c));
    });
    character.notes.forEach(c => {
        $("#page-notes")
            .append($("<li/>")
            .html(c));
    });

}



function searchedFunction() {
    data.filter(function(d){ return d.name == "toto" })
}