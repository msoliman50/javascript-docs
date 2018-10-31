class Task {

    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.isCompleted = false;
    }

    complete() {
        console.log('completing task:', this.title);
        this.isCompleted = true;
    }
};

const t1 = new Task('Task 1', 'Description 1');
const t2 = new Task('Task 2', 'Description 2');
const t3 = new Task('Task 3', 'Description 3');

t1.complete();
t2.complete();
console.log(t3);