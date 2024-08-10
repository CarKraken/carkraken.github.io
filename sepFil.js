var uni = 0;

//put all the variables in an array so I can iterate through them!! :0
const allEquipmentTypesArray = {
    "BadmintonNet":0, 
    "BadmintonPoles":0,
};

//"integer keys are automatically converted to strings" - must turn into int to increment?
//try incremement allEquipArray while on main_sc and setItem to its array counterpart in same fxn
localStorage.setItem("badPol", "0");

function testLocStor(){
    //ALT:
    //localStorage.setItem("badPol") = 1 + parseInt(document.getElementById("bmn_pl"));
    //localStorage.setItem("badPol") = 1 + parseInt(localStorage.getItem("badPol"));
    //document.getElementById("bmn_pl").innerHTML = localStorage.getItem("badPol");

    //ALT: following 2 lines
    //works 1x, but it seems like badPool isn't incrementing past 0
    document.getElementById("bmn_pl").innerHTML = parseInt(localStorage.getItem("badPol")) + 1;
    localStorage.setItem("badPol") = getElementById("bmn_pl");
}

//clearn local storage after user sends finished log