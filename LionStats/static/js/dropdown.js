
function dropdown()
{
var teamData;
$.ajax({
    async: false,
    url: 'http://localhost:8000/api/dropdown/',
    success: function(data)
    {
        teamData = data;
    }
});
let dropdown = document.getElementById('dropdown')
let option;
while(dropdown.firstChild)
{
    dropdown.removeChild(dropdown.firstChild);
}

option = document.createElement("option");
option.value = "";
dropdown.appendChild(option);

for (var i = 0; i < teamData.data.length; i++)
{
    option = document.createElement("option");
    option.text = teamData.data[i].name;
    dropdown.appendChild(option);
}
}

//function val(dropdown)
//{
//    var selected = document.getElementById(dropdown).value;
//    console.log(selected);
//}

function dropdownAthlete()
{
var teamData;
$.ajax({
    async: false,
    url: 'http://localhost:8000/api/dropdown/team',
    success: function(data)
    {
        teamData = data;
    }
});
let dropdown = document.getElementById('dropdownAthlete')
let option;
while(dropdown.firstChild)
{
    dropdown.removeChild(dropdown.firstChild);
}

var lst = [];
for (var i = 0; i < teamData.data.players.length; i++)
{
//    option = document.createElement("option");
    let first = teamData.data.players[i].first_name;
    let last  = teamData.data.players[i].last_name;
    let pos = teamData.data.players[i].role;
    let combo = first.concat(" ", last, " (", pos, ")")
    lst.push(combo);
//    dropdown.appendChild(option);
}

$(document).ready(function() {
var select2 = $('#dropdownAthlete').select2({
    placeholder: "Select",
    width: '500px',
    data:lst,
    multiple: true,
    closeOnSelect: false,
})

select2.trigger("change");
});
}

function dropdownPosition()
{
var teamData;
$.ajax({
    async: false,
    url: 'http://localhost:8000/api/dropdown/team',
    success: function(data)
    {
        teamData = data;
    }
});
let dropdown = document.getElementById('dropdownPosition')
let option;
while(dropdown.firstChild)
{
    dropdown.removeChild(dropdown.firstChild);
}

for (var i = 0; i < teamData.data.players.length; i++)
{
    option = document.createElement("option");
    option.text = teamData.data.players[i].role;
    dropdown.appendChild(option);
}
var usedNames = {};
$("select[name='position'] > option").each(function () {
    if(usedNames[this.text]) {
        $(this).remove();
    } else {
        usedNames[this.text] = this.value;
    }
});

}

function dropdownSession()
{
var teamData;
$.ajax({
    async: false,
    url: 'http://localhost:8000/api/dropdown/sessions',
    success: function(data)
    {
        teamData = data;
    }
});
let dropdown = document.getElementById('dropdownSession')
let option;
while(dropdown.firstChild)
{
    dropdown.removeChild(dropdown.firstChild);
}

for (var i = 0; i < teamData.date.length; i++)
{
    option = document.createElement("option");
    option.text = teamData.date[i];
    dropdown.appendChild(option);
}
}

window.onload = function()
{
    let btn = document.getElementById("dropdown");
    let sessionBtn = document.getElementById("sessionBtn");

    dropdown();
    btn.onclick = function(){dropdownAthlete(); dropdownPosition();};
    sessionBtn.onclick = function(){dropdownSession();};
}
