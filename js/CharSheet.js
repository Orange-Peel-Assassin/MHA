$(document).ready(function() {
    let name = getURLName();
    loadCsv().then(() => {
        name = name.toLowerCase();
        character = characters.find(c => c.title.toLowerCase() === name);
        if (character.name !== "N/A" && character.name !== null){
            $("#charSheet-name").html(character.name);
            $("#title-title").html(`${character.name} Character Sheet`);
        }
        else{
            $("#charSheet-name").html(character.title);
            $("#title-title").html(`${character.title} Character Sheet`);
        }
        $("#charSheet-backround").html(character.backround);
        $("#charSheet-blood").html(character.bloodType);
        $("#charSheet-age").html(character.age);
        $("#charSheet-alias").html(character.alias);
        $("#charSheet-quirk").html(character.quirkInfo);
        $("#charSheet-class").html(character.class);
        $("#charSheet-quirkType").html(character.quirkType);
        $("#charSheet-equipment").html(character.equipment);
        $("#charSheet-stat-0").html(character.stats[0]);
        $("#charSheet-stat-1").html(character.stats[1]);
        $("#charSheet-stat-2").html(character.stats[2]);
        $("#charSheet-stat-3").html(character.stats[3]);
        $("#charSheet-stat-4").html(character.stats[4]);
        $("#charSheet-stat-5").html(character.stats[5]);
        $("#charSheet-stat-6").html(character.stats[6]);
        $("#charSheet-stat-7").html(character.stats[7]);
        PhotoToHTML("charSheet-photo",character);
        erosFunction();
    });
});

