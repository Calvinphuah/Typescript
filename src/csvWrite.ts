// CSV Writer Project

interface Payment {
  id: number;
  amount: number;
  to: string;
  notes: string;
}

type PaymentColumns = ("id" | "amount" | "to" | "notes")[]; // Don't use tuple cause we want it to be or instead

class CSVWriter {
  constructor(private columns: PaymentColumns) {
    // Header row
    this.csv = this.columns.join(",") + "\n";
  }

  // string format of all diff rows
  private csv: string;

  addRows(values: Payment[]): void {
    const rows = values.map((value) => this.formatRow(value));
    // Rows: ['1,30,mario,web','2,75,bowser,something'] Array of strings
    this.csv += rows.join("\n");
    console.log(this.csv);
  }

  private formatRow(payment: Payment): string {
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
