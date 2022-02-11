$(document).ready(function() {
    let urlname = getURLName();

    loadCsv().then(() => {
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

        if (urlname === null){
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
            urlname = urlname.toLowerCase();
            character = characters.find(c => c.title.toLowerCase() === urlname);
            ShowCharInfo(character);
            $("#npc-page").show();
            $("#npc-home-page").hide();
            $("#title-title").html(character.title);
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
    $("#info-box-charSheet").html($(`<a href="CharSheet.html?name=${char.title}">${char.title}</a>`));

    // $("#info-box-img").attr("src",
    //     character.photo === ""? 
    //         "../../SVG/MHA-discord-seeklogo.svg":
    //         `${char.photo}` );
    PhotoToHTML("info-box-img", char);
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
    data.filter(function(d){ return d.name == "todo" })
}