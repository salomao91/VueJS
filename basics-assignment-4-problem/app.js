Vue.createApp({
    data() {
        return {
            userInput: '',
            isParagraphVisible: true
        }
    },
    methods: {
        btnToggle() {
            this.isParagraphVisible = !this.isParagraphVisible;
        }
    }
}).mount('#assignment');