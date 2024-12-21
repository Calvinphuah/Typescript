// enums
enum Priority {
  Lowest = 0,
  Low = 1,
  Medium = 2,
  High = 3,
  Urgent = 4,
}

function addTicket(details: string, priority: Priority) {
  if (priority === Priority.Medium) {
    console.log("Medium priority");
  }
  if (priority === 1) {
    console.log("Low priority");
  }
  if (priority === 2) {
  }
  if (priority === 3) {
  }
  if (priority === 4) {
  }
}

addTicket("Fix computer", Priority.Low);
