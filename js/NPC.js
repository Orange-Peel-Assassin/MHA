var character = null;

$(document).ready(function() {
    const params = new URLSearchParams(window.location.search);
    character = params.get("name");
    if (character === null){
        $("#npc-page").hide();
    }
    else{
        $("#npc-home-page").hide();
    }

});