// data we would get from a server. We'd make an api call to get this data.
const techMoms = [
    { name: 'Mickey', species: 'Mouse' },
    { name: 'Dumbo', species: 'Elephant' },
    { name: 'Bambi', species: 'Deer' },
    { name: 'Babe', species: 'Pig' },
    { name: 'Sebastian', species: 'Crab' },
    { name: 'Mushu', species: 'Dragon' },
    { name: 'Simba', species: 'Lion' },
    { name: 'Abu', species: 'Monkey' },
    { name: 'Abu', species: 'Monkey' },
    { name: 'Bruce', species: 'Shark' },
];


function generateTable() {
    var tblBody = document.getElementById("table-body");

    for (var row = 0; row < techMoms.length; row++) {
        console.log(`Index: ${row}`, techMoms[row]);

        // creates a table row
        var tbRow = document.createElement("tr");

        for (var column = 0; column < 2; column++) {
            // creates table data
            var cell = document.createElement("td");
            if (column == 0) {
                var tableData = document.createTextNode(techMoms[row].name);
            } else {
                var tableData = document.createTextNode(techMoms[row].species);
            }

            if (row % 2 == 0) {
                cell.setAttribute("style", "background-color: lightGray;")
            }

            cell.appendChild(tableData);
            tbRow.appendChild(cell);
        }

        tblBody.appendChild(tbRow);
    }
}