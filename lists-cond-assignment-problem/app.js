Vue.createApp({
    data() {
        return {
            inputUserTask: '',
            tasks: [],
            isBtnListVisible: true
        };
    },
    methods: {
        btnAddTask(event) {
            this.tasks.push(this.inputUserTask),
            this.inputUserTask = ''
        },
        btnToggle() {
           this.isBtnListVisible = !this.isBtnListVisible
        }
    }
}).mount("#assignment");