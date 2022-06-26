/* Creating a canvas element and appending it to the div. */
/////////////////////////////////////////////////////////////////
let div = document.createElement('div');
let canvas = document.createElement('canvas');
canvas.id = 'canvas2';
canvas.width = 800;
div.append(canvas);

/* Inserting the div element before the table element. */
/////////////////////////////////////////////////////////////////
const table2 = document.getElementById('table2');
table2.parentNode.insertBefore(div, table2);

/* Creating two global arrays. */
/////////////////////////////////////////////////////////////////
let DCountry1=[];
let DGlobal1 = [];
/**
 * It takes a table and pushes the data into two arrays.
 * @param e - the table element
 * 
 */
/////////////////////////////////////////////////////////////////

function DataDom1(e) {
    /* Getting the number of rows in the table. */
    let rowLength = e.rows.length;
    for (let i = 1; i < rowLength; i++) {
        /* Getting the cells of the table. */
        let row = e.rows[i];
        
        let colCountry = row.cells[1].innerText;
        DCountry1.push(colCountry);
        let temp = [];
        for (var j = 2, col; col = row.cells[j]; j++) {
            temp.push(col.innerText);
        }
        DGlobal1.push(temp)
    }
}
/////////////////////////////////////////////////////////////////
DataDom1(table2);
console.log(DGlobal1);
console.log(DCountry1);
/////////////////////////////////////////////////////////////////


const labelYrs = ['2007-09', '2010-12']

/* Creating a new object for each country. */
/////////////////////////////////////////////////////////////////
const Latvia = {
    label: DCountry1[1],
    data: DGlobal1[1],
    backgroundColor: [
        'rgba(245, 245, 220)',
        ],
        borderColor: [
        'rgba(245, 245, 220)',
        ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Lithuania= {
    label: DCountry1[2],
    data: DGlobal1[2],
    backgroundColor: [
        'rgba(173,255,47)',
        ],
        borderColor: [
        'rgba(173,255,47)',
        ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Czech= {
    label: DCountry1[3],
    data: DGlobal1[3],
    backgroundColor: [
        'rgba(173, 216, 230)',
        ],
        borderColor: [
        'rgba(173, 216, 230)',
        ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Poland= {
    label: DCountry1[4],
    data: DGlobal1[4],
    backgroundColor: [
        'rgba(255, 69, 0)',
        ],
        borderColor: [
        'rgba(255, 69, 0)',
        ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Slovakia= {
    label: DCountry1[5],
    data: DGlobal1[5],
    backgroundColor: [
        'rgba(255, 160, 122)',
        ],
        borderColor: [
        'rgba(255, 160, 122)',
        ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Hungary= {
    label: DCountry1[6],
    data: DGlobal1[6],
    backgroundColor: [
        'rgba(85, 107, 47)',
        ],
        borderColor: [
        'rgba(85, 107, 47)',
        ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const England= {
    label: DCountry1[7],
    data: DGlobal1[7],
    backgroundColor: [
    'rgb(255, 99, 132)',
    ],
    borderColor: [
    'rgb(255, 99, 132)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Scotland= {
    label: DCountry1[8],
    data: DGlobal1[8],
    backgroundColor: [
    'rgb(128,0,0)',
    ],
    borderColor: [
    'rgb(128,0,0)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Spain= {
    label: DCountry1[9],
    data: DGlobal1[9],
    backgroundColor: [
    'rgb(255,165,0)',
    ],
    borderColor: [
    'rgb(255,165,0)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Romania= {
    label: DCountry1[10],
    data: DGlobal1[10],
    backgroundColor: [
    'rgb(255,140,0)',
    ],
    borderColor: [
    'rgb(255,140,0)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Malta= {
    label: DCountry1[11],
    data: DGlobal1[11],
    backgroundColor: [
    'rgb(75,0,130)',
    ],
    borderColor: [
    'rgb(75,0,130)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Bulgaria= {
    label: DCountry1[12],
    data: DGlobal1[12],
    backgroundColor: [
    'rgb(255,0,255)',
    ],
    borderColor: [
    'rgb(255,0,255)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Luxembourg= {
    label: DCountry1[13],
    data: DGlobal1[13],
    backgroundColor: [
    'rgb(34,139,34)',
    ],
    borderColor: [
    'rgb(34,139,34)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Portugal= {
    label: DCountry1[14],
    data: DGlobal1[14],
    backgroundColor: [
    'rgb(0,255,127)',
    ],
    borderColor: [
    'rgb(0,255,127)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Croatia= {
    label: DCountry1[15],
    data: DGlobal1[15],
    backgroundColor: [
    'rgb(128,128,0)',
    ],
    borderColor: [
    'rgb(128,128,0)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Italy= {
    label: DCountry1[16],
    data: DGlobal1[16],
    backgroundColor: [
    'rgb(47,79,79)',
    ],
    borderColor: [
    'rgb(47,79,79)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Greece= {
    label: DCountry1[17],
    data: DGlobal1[17],
    backgroundColor: [
    'rgb(128,128,128)',
    ],
    borderColor: [
    'rgb(128,128,128)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const France= {
    label: DCountry1[18],
    data: DGlobal1[18],
    backgroundColor: [
    'rgb(0,191,255)',
    ],
    borderColor: [
    'rgb(0,191,255)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Austria= {
    label: DCountry1[19],
    data: DGlobal1[19],
    backgroundColor: [
    'rgb(255,0,0)',
    ],
    borderColor: [
    'rgb(0255,0,0)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Belgium= {
    label: DCountry1[20],
    data: DGlobal1[20],
    backgroundColor: [
    'rgb(128,0,0)',
    ],
    borderColor: [
    'rgb(128,0,0)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const NorthIreland= {
    label: DCountry1[21],
    data: DGlobal1[21],
    backgroundColor: [
    'rgb(0,139,139)',
    ],
    borderColor: [
    'rgb(0,139,139)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Dutch= {
    label: DCountry1[22],
    data: DGlobal1[22],
    backgroundColor: [
    'rgb(128,128,0)',
    ],
    borderColor: [
    'rgb(128,128,0)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Germany= {
    label: DCountry1[23],
    data: DGlobal1[23],
    backgroundColor: [
    'rgb(189,183,107)',
    ],
    borderColor: [
    'rgb(189,183,107)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Ireland= {
    label: DCountry1[24],
    data: DGlobal1[24],
    backgroundColor: [
    'rgb(154,205,50)',
    ],
    borderColor: [
    'rgb(154,205,50)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Cyprus= {
    label: DCountry1[25],
    data: DGlobal1[25],
    backgroundColor: [
        'rgba(255, 127, 80)',
        ],
        borderColor: [
        'rgba(255, 127, 80)',
        ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Denmark= {
    label: DCountry1[26],
    data: DGlobal1[26],
    backgroundColor: [
    'rgb(255,99,71)',
    ],
    borderColor: [
    'rgb(255,99,71)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Sweden= {
    label: DCountry1[27],
    data: DGlobal1[27],
    backgroundColor: [
    'rgb(95,158,160)',
    ],
    borderColor: [
    'rgb(95,158,160)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Slovenia= {
    label: DCountry1[28],
    data: DGlobal1[28],
    backgroundColor: [
    'rgb(106,90,205)',
    ],
    borderColor: [
    'rgb(106,90,205)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Finland= {
    label: DCountry1[29],
    data: DGlobal1[29],
    backgroundColor: [
    'rgb(0,0,139)',
    ],
    borderColor: [
    'rgb(0,0,139)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const ctx = document.getElementById('canvas2');
const chartTable2 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labelYrs, 
        datasets: [Latvia, Lithuania, Czech, Poland, Slovakia,
        Hungary, England, Scotland, Spain, Romania, Malta, Bulgaria,
        Luxembourg, Portugal, Croatia, Italy, Greece, France, Austria,
        Belgium, NorthIreland, Dutch, Germany, Ireland, Cyprus, Denmark,
        Sweden, Slovenia, Finland]
    },
    options: {
        
    }
});
/////////////////////////////////////////////////////////////////

