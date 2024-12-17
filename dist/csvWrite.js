"use strict";
// CSV Writer Project
class CSVWriter {
    constructor(columns) {
        this.columns = columns;
        // Header row
        this.csv = this.columns.join(",") + "\n";
    }
    addRows(values) {
        const rows = values.map((value) => this.formatRow(value));
        // Rows: ['1,30,mario,web','2,75,bowser,something'] Array of strings
        this.csv += rows.join("\n");
        console.log(this.csv);
    }
    formatRow(payment) {
        // So that it is in the correct order and format
        // E.g. ['1', 50, 'mario']
        return this.columns.map((col) => payment[col]).join(",");
    }
}
const writer = new CSVWriter(["id", "amount", "to", "notes"]);
writer.addRows([
    { id: 1, amount: 30, to: "mario", notes: "web" },
    { id: 2, amount: 75, to: "bowser", notes: "something" },
    { id: 3, amount: 100, to: "luigi", notes: "something else" },
]);
