Vue.createApp({
    data() {
        return {
            isParagraphVisible: true,
            userInputColor: ''
        }
    },
    methods: {
        btnToggle() {
            console.log("toggle");
            this.isParagraphVisible = !this.isParagraphVisible;
        }
    }
}).mount('#assignment');