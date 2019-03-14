class CompoTaskList {
    constructor(param) {
        this.param = param;
    }
   /**
     * Retourne la liste de tâches passées en paramètre au constructeur
     */
    getTaskList() {
        return this.param.taskList;
    }
   /**
     * Retourne l'élément du DOM passé en paramètre au constructeur
     */
    getElement() {
        return this.param.element;
    }
 /**
     * Affiche la liste de tâches dans l'élément du DOM
     */
    render() {
        let children = [];
        if (this.param.taskList) {
            console.log(this.param.taskList);
            for (let i = 0; i < this.param.taskList.getTasks().length; i++) {
                let item = document.createElement('div');
                this.param.element.appendChild(item);
                new CompoTask({
                    task: this.param.taskList.getTasks()[i],
                    element: item}).render();
            }
        }
    }
}