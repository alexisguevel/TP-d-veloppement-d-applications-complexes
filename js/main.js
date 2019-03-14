let list = new TaskList();
let tasks = new CompoTaskList({
    element: document.getElementById('tasks'),
    taskList: list
});
let premiereTask = new Task('Première tâche', null);
let deuxièmeTask = new Task('Deuxième tâche', null);
let troisièmeTask = new Task('Troisième tâche', null);
list.add(premiereTask);
list.add(deuxièmeTask);
list.add(troisièmeTask);
tasks.render();