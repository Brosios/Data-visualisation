
/* Creating a canvas element and appending it to a div element. */
/////////////////////////////////////////////////////////////////
let div = document.createElement('div');
let canvas = document.createElement('canvas');
canvas.id = 'canvas1';
canvas.width = 800;
div.append(canvas);

/* Getting the table element and inserting the canvas element before it. */
/////////////////////////////////////////////////////////////////
const table1 = document.getElementById('table1');
table1.parentNode.insertBefore(div, table1);

/**
 * It takes a string, replaces any commas with periods,
 * and returns the result as a float.
 * @param e - The number to be converted.
 * @returns A function that takes a parameter e and returns a float.
 */
/////////////////////////////////////////////////////////////////
function point(e) {
    return parseFloat((e + "").replace(",", "."));
}
/* Creating an gloabal arrays. */
/////////////////////////////////////////////////////////////////
let DCountry=[];
let DGlobal = [];
let lYears = [];
/**
 * It takes the table data and pushes it into an array.
 * @param e - the table element
 */
/////////////////////////////////////////////////////////////////
function DataDom(e) {
    /* Getting the number of rows in the table. */
    let rowLength = e.rows.length;
    let years = e.rows[1];
    let yearsLength = years.cells.length;

/* Getting the years from the table and pushing them into an array. */
/////////////////////////////////////////////////////////////////
    for(let j = 2; j < yearsLength; j++) {
        let yrs = years.cells[j].innerText;
        lYears.push(yrs);
    }
/* Getting the data from the table and pushing it into an array. */
/////////////////////////////////////////////////////////////////
    for (let i = 1; i < rowLength; i++) {
        /* Getting the cells of the table. */
        let row = e.rows[i];
        let colCountry = row.cells[1].innerText;
        DCountry.push(colCountry);
        /* Creating an empty array. */
        let empty = [];
        for (var j = 2, col; col = row.cells[j]; j++) {
            empty.push(point(col.innerText));
        }
        /* Pushing the empty array into the DGlobal array. */
        DGlobal.push(empty)
        
    }
}
/////////////////////////////////////////////////////////////////
console.log(DCountry);

console.log(DGlobal);

console.log(lYears)

DataDom(table1);

/* Creating a new object for each country. */
/////////////////////////////////////////////////////////////////
const Belgium = {
    label: DCountry[1],
    data: DGlobal[1],
    backgroundColor: [
    'rgb(255, 165, 0)',
    ],
    borderColor: [
    'rgb(255, 165, 0)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Bulgaria = {
    label: DCountry[2],
    data: DGlobal[2],
    backgroundColor: [
    'rgba(34,139,34)',
    ],
    borderColor: [
    'rgba(34,139,34)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Czech = {
    label: DCountry[3],
    data: DGlobal[3],
    backgroundColor: [
    'rgb(0, 0, 255)',
    ],
    borderColor: [
    'rgb(0, 0, 255)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Denmark = {
    label: DCountry[4],
    data: DGlobal[4],
    backgroundColor: [
    'rgba(255, 0, 0)',
    ],
    borderColor: [
    'rgba(255, 0, 0)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Germany = {
    label: DCountry[5],
    data: DGlobal[5],
    backgroundColor: [
    'rgb(60, 60, 60)',
    ],
    borderColor: [
    'rgb(60, 60, 60)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Estonia = {
    label: DCountry[6],
    data: DGlobal[6],
    backgroundColor: [
    'rgb(24, 116, 152)',
    ],
    borderColor: [
    'rgb(24, 116, 152)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Ireland = {
    label: DCountry[7],
    data: DGlobal[7],
    backgroundColor: [
    'rgb(26, 77, 46)',
    ],
    borderColor: [
    'rgb(26, 77, 46)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Greece = {
    label: DCountry[8],
    data: DGlobal[8],
    backgroundColor: [
    'rgba(139,0,0)',
    ],
    borderColor: [
    'rgba(139,0,0)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Spain = {
    label: DCountry[9],
    data: DGlobal[9],
    backgroundColor: [
    'rgba(255, 99, 132)',
    ],
    borderColor: [
    'rgba(255, 99, 132)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const France = {
    label: DCountry[10],
    data: DGlobal[10],
    backgroundColor: [
    'rgb(255, 159, 41)',
    ],
    borderColor: [
    'rgb(255, 159, 41)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Croatia = {
    label: DCountry[11],
    data: DGlobal[11],
    backgroundColor: [
    'rgba(220, 20, 60)',
    ],
    borderColor: [
    'rgba(220, 20, 60)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Italy = {
    label: DCountry[12],
    data: DGlobal[12],
    backgroundColor: [
    'rgba(255,105,180)',
    ],
    borderColor: [
    'rgba(255,105,180)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Cyprus = {
    label: DCountry[13],
    data: DGlobal[13],
    backgroundColor: [
    'rgba(255, 127, 80)',
    ],
    borderColor: [
    'rgba(255, 127, 80)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Latvia = {
    label: DCountry[14],
    data: DGlobal[14],
    backgroundColor: [
    'rgba(233, 150, 122)',
    ],
    borderColor: [
    'rgba(233, 150, 122)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Lithuania = {
    label: DCountry[15],
    data: DGlobal[15],
    backgroundColor: [
    'rgba(173,255,47)',
    ],
    borderColor: [
    'rgba(173,255,47)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Luxembourg = {
    label: DCountry[16],
    data: DGlobal[16],
    backgroundColor: [
    'rgba(176,224, 230)',
    ],
    borderColor: [
    'rgba(176,224, 230)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Hungary = {
    label: DCountry[17],
    data: DGlobal[17],
    backgroundColor: [
    'rgba(85, 107, 47)',
    ],
    borderColor: [
    'rgba(85, 107, 47)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Malta = {
    label: DCountry[18],
    data: DGlobal[18],
    backgroundColor: [
    'rgba(255, 222, 173)',
    ],
    borderColor: [
    'rgba(255, 222, 173)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Dutch = {
    label: DCountry[19],
    data: DGlobal[19],
    backgroundColor: [
    'rgb(255, 91, 0)',
    ],
    borderColor: [
    'rgb(255, 91, 0)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Austria = {
    label: DCountry[20],
    data: DGlobal[20],
    backgroundColor: [
    'rgb(153, 0, 0)',
    ],
    borderColor: [
    'rgb(153, 0, 0)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Poland = {
    label: DCountry[21],
    data: DGlobal[21],
    backgroundColor: [
    'rgba(255, 69, 0)',
    ],
    borderColor: [
    'rgba(255, 69, 0)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Portugal = {
    label: DCountry[22],
    data: DGlobal[22],
    backgroundColor: [
    'rgba(220, 20, 60)',
    ],
    borderColor: [
    'rgba(220, 20, 60)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Romania = {
    label: DCountry[23],
    data: DGlobal[23],
    backgroundColor: [
    'rgba(204, 204, 0)',
    ],
    borderColor: [
    'rgba(204, 204, 0)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Slovenia = {
    label: DCountry[24],
    data: DGlobal[24],
    backgroundColor: [
    'rgba(205,92,92)',
    ],
    borderColor: [
    'rgba(205,92,92)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Slovakia = {
    label: DCountry[25],
    data: DGlobal[25],
    backgroundColor: [
    'rgba(255, 160, 122)',
    ],
    borderColor: [
    'rgba(255, 160, 122)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Finland = {
    label: DCountry[26],
    data: DGlobal[26],
    backgroundColor: [
    'rgba(0, 0, 255)',
    ],
    borderColor: [
    'rgba(0, 0, 255)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Sweden = {
    label: DCountry[27],
    data: DGlobal[27],
    backgroundColor: [
    'rgba(70, 13à, 180)',
    ],
    borderColor: [
    'rgba(70, 13à, 180)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Iceland = {
    label: DCountry[28],
    data: DGlobal[28],
    backgroundColor: [
    'rgba(240, 128, 128)',
    ],
    borderColor: [
    'rgba(240, 128, 128)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Liechtenstein = {
    label: DCountry[29],
    data: DGlobal[29],
    backgroundColor: [
    'rgba(178, 34, 34)',
    ],
    borderColor: [
    'rgba(178, 34, 34)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Norway = {
    label: DCountry[30],
    data: DGlobal[30],
    backgroundColor: [
    'rgba(0, 191, 255)',
    ],
    borderColor: [
    'rgba(0, 191, 255)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Switzerland = {
    label: DCountry[31],
    data: DGlobal[31],
    backgroundColor: [
    'rgba(255, 99, 71)',
    ],
    borderColor: [
    'rgba(255, 99, 71)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Montenegro = {
    label: DCountry[32],
    data: DGlobal[32],
    backgroundColor: [
    'rgba(189, 183, 107)',
    ],
    borderColor: [
    'rgba(189, 183, 107)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Macedonia = {
    label: DCountry[33],
    data: DGlobal[33],
    backgroundColor: [
    'rgba(255, 255, 0)',
    ],
    borderColor: [
    'rgba(255, 255, 0)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Serbia = {
    label: DCountry[34],
    data: DGlobal[34],
    backgroundColor: [
    'rgba(65, 105, 225)',
    ],
    borderColor: [
    'rgba(65, 105, 225)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
const Turkey = {
    label: DCountry[35],
    data: DGlobal[35],
    backgroundColor: [
    'rgba(255, 0, 0)',
    ],
    borderColor: [
    'rgba(255, 0, 0)',
    ],
    borderWidth: 8
}
/////////////////////////////////////////////////////////////////
/* Creating a new chart. */
/////////////////////////////////////////////////////////////////
const ctx = document.getElementById('canvas1');
const chartTable1 = new Chart(ctx, {
    type: 'bubble',
    data: {
        labels: lYears,
        datasets: [Belgium, Bulgaria, Czech, Denmark,
        Germany, Estonia, Ireland, Greece, Spain, France, 
        Croatia, Italy, Cyprus, Latvia, Lithuania,
        Luxembourg, Hungary, Malta, Dutch, Austria, Poland,
        Portugal, Romania, Slovenia, Slovakia, Finland,
        Sweden, Iceland, Liechtenstein, Norway, Switzerland,
        Montenegro, Macedonia, Serbia, Turkey]
    },
    options: {
    }
});


