class Task {
    constructor(title, description, startDate, endDate) {
        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.subtasks = [];
    }

    addSubtask(subtask) {
        this.subtasks.push(subtask);
    }
}

class ExecutableTask extends Task {
    constructor(title, description, startDate, endDate, completionPercentage = 0, isCompleted = false) {
        super(title, description, startDate, endDate);
        this.completionPercentage = completionPercentage;
        this.isCompleted = isCompleted;
    }

    markAsCompleted() {
        this.isCompleted = true;
    }
}

const mainTask = new Task("Main Task", "Description of the main task", "2024-05-03", "2024-05-10");
const subtask1 = new ExecutableTask("Subtask 1", "Description of subtask 1", "2024-05-05", "2024-05-08", 50);
const subtask2 = new ExecutableTask("Subtask 2", "Description of subtask 2", "2024-05-06", "2024-05-09");

mainTask.addSubtask(subtask1);
mainTask.addSubtask(subtask2);

console.log(mainTask);
console.log(subtask1);