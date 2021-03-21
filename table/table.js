const techMoms = [
    { firstName: 'Tiff', lastName: 'Cameron' },
    { firstName: 'Jackie', lastName: 'Smith' },
    { firstName: 'Brooke', lastName: 'Mckeever' },
    { firstName: 'Calle', lastName: 'Larson' },
    { firstName: 'Laurie', lastName: 'Mecham' },
    { firstName: 'Anna', lastName: 'Gregory' },
    { firstName: 'Destiny', lastName: 'Kerr' },
    { firstName: 'Carrie', lastName: 'Johnson' },
    { firstName: 'Sherrie', lastName: 'Hall' },
    { firstName: 'Ashli', lastName: 'Jones' },
    { firstName: 'Monica', lastName: 'Parkinson' },
    { firstName: 'Jen', lastName: 'Smith' },
    { firstName: 'Katie', lastName: 'Swenson' },
    { firstName: 'Yolanda', lastName: 'Rowberry' },
    { firstName: 'Sandra', lastName: 'Hadlock' },
    { firstName: 'Amber', lastName: 'Watts' }
]

function generateTable() {
    var tblBody = document.getElementById("table-body");

    for (var row = 0; row < techMoms.length; row++) {
        // creates a table row
        var tbRow = document.createElement("tr");

        for (var column = 0; column < 2; column++) {
            // creates table data
            var cell = document.createElement("td");
            if (column == 0) {
                var tableData = document.createTextNode(techMoms[row].firstName);
            } else {
                var tableData = document.createTextNode(techMoms[row].lastName);
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