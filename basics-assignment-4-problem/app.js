Vue.createApp({
    data() {
        return {
            userInput: '',
            isParagraphVisible: true,
            inputBackgroundColor: ''
        }
    },
    methods: {
        btnToggle() {
            this.isParagraphVisible = !this.isParagraphVisible;
        }
    },
    computed: {
        classesList() {
            return {
                user1: this.userInput === 'user1',
                user2: this.userInput === 'user2',
                visible: this.isParagraphVisible,
                hidden: !this.isParagraphVisible
            };
        }
    }
}).mount('#assignment');