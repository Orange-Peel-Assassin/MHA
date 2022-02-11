var characters
var character = null;
var weapons
var weapon = null;

function getURLName() {
    const params = new URLSearchParams(window.location.search);
    return params.get("name");
   /* Promise.all([
        d3.csv("../../Raw Chars/AllChars.csv")
    ]).then(([parsedCharacters]) => {
        characters = parsedCharacters;
    }); */
}

async function loadCsv() {
    const [parsedCharacters] = await Promise.all([
        d3.csv("../../Raw Chars/AllChars.csv", (row) => {
            row.player = row.player.split(",");
            row.group = (row.player[0] === "GM") ? "NPC" : "PC"; //GM will always be 0 if the list if the gm is in control
            row.alias = row.alias.split(",");
            row.affiliation = row.affiliation.split(",");
            row.notes = row.notes.split(",");
            row.skills = row.skills.split(",");
            row.stats = row.stats.split(",");
            return row;
        })
    ]);
    characters = parsedCharacters;
    charByPlayer = d3.group(characters, d => d.group, d_1 => d_1.affiliation[0]); //the first [0] affiliation will be the strongest
}


function PhotoToHTML(r, char) {
    if (localStorage.getItem("erosKey") === "true" && (char.photoEros != "")) {
        var srcVar = `${char.photoEros}`
    }
    else if (char.photo === "") {
        var srcVar = "../../SVG/MHA-discord-seeklogo.svg"
    } 
    else {
        var srcVar = `${char.photo}`
    }
    $(`#${r}`).attr("src",srcVar)
 }


//  weapons


async function loadCsvWep() {
    const [parsedWeapons] = await Promise.all([
        d3.csv("../../Weapons/AllWeapons.csv", (row) => {
            row.type = row.type.split(",");
            row.notes = row.notes.split(",");
            return row;
        })
    ]);
    weapons = parsedWeapons;
    wepByType = d3.group(weapons, d => d.group, d_1 => d_1.type[0]); //the first [0] type will be the strongest
}

