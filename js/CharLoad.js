var characters
var character = null;

function getChar() {
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
    if (localStorage.getItem("erosKey") === "true" && (character.photoEros != "")) {
        var srcVar = `${char.photoEros}`
    }
    else if (character.photo === "") {
        var srcVar = "../../SVG/MHA-discord-seeklogo.svg"
    } 
    else {
        var srcVar = `${char.photo}`
    }
    $(`#${r}`).attr("src",srcVar)
 }