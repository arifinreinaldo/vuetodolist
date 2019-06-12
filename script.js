new Vue({
    el: '#app',
    data: {
        title: "To Do List",
        todolist: [],
        todoValue: '',
        todolistfilter: [],
        currid: '',
    },
    methods: {
        addList() {
            this.todolist.push({ id: this.getNewId(), value: this.todoValue });
        },
        getNewId() {
            if (this.todolist.length === 0) {
                return 1;
            } else {
                return this.todolist[this.todolist.length - 1].id + 1;
            }
        },
        editList(data) {
            this.todoValue = data.value;
            this.currid = data.id;
        },
        deleteList(data) {
            this.todolistfilter = [];
            for (let index = 0; index < this.todolist.length; index++) {
                const element = this.todolist[index];
                if (element.id != data.id) {
                    this.todolistfilter.push(element);
                }
            }
            this.todolist = this.todolistfilter;
        },
        save() {
            for (let index = 0; index < this.todolist.length; index++) {
                const element = this.todolist[index];
                if (element.id === this.currid) {
                    this.todolist[index].value = this.todoValue;
                }
            }
        },
        cancel() {
            this.currid = '';
        }
    }
});