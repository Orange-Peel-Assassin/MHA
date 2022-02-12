$(document).ready(function() {
    let urlname = getURLName();

    loadCsvWep().then(() => {
        let wepListDiv = $("#wep-lists");
        wepByType.forEach((typeMap, ControllingEntity) => {
            let wepGroup = $("<div/>");
            
            typeMap.forEach((wepList, type) => {
                let wepUl = $(`<ul><h2>${type}</h2></ul>`);
                wepGroup.append(wepUl);
                    wepList.map(typeWep => typeWep.name)
                        .sort()
                        .forEach(name => {
                            wepUl.append($(`<li><a href="?name=${name}">${name}</a></li>`));
                    });
            wepListDiv.append(wepGroup);
            });
        });

        if (urlname === null){
            $("#wep-page").hide();
                let wList = $("#w-list");
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
            weapon = weapons.find(c => c.name.toLowerCase() === urlname);
            ShowWepInfo(weapon);
            $("#wep-page").show();
            $("#wep-home-page").hide();
            $("#title-title").html(weapon.name);
        }
        erosFunction();
    });
});

function ShowWepInfo(wep){
    $("#info-box-name").html(wep.name);
    wep.type.forEach(c => {
        $("#info-box-type")
            .append($("<li/>")
            .html(c));
    });
    wep.knownUsers.forEach(c => {
        $("#info-box-knownUsers")
            .append($("<li/>")
            .html(c));
    });
    
    // $("#info-box-img").attr("src",
    //     character.photo === ""? 
    //         "../../SVG/MHA-discord-seeklogo.svg":
    //         `${char.photo}` );
    PhotoToHTML("info-box-img", wep);
    $("#page-appearance").html(wep.appearance);
    wep.notes.forEach(c => {
        $("#page-notes")
            .append($("<li/>")
            .html(c));
    });

}
