
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

for (var i = 0; i < teamData.data.length; i++)
{
    option = document.createElement("option");
    option.text = teamData.data[i].name;
    dropdown.appendChild(option);
}
}

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

for (var i = 0; i < teamData.data.players.length; i++)
{
    option = document.createElement("option");
    let first = teamData.data.players[i].first_name;
    let last  = teamData.data.players[i].last_name;
    option.text = first.concat(" ", last);
    dropdown.appendChild(option);
}
}

window.onload = function()
{
    let btn = document.getElementById("dropdown");

    dropdown();
    btn.onclick = dropdownAthlete();
}

