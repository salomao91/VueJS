Vue.createApp({
    data() {
        return {
            userInputValue: '',
            userInputValueWhenEnter: ''
        };
    },
    methods: {
        btnShowAlert() {
            alert('Boutton clicked!');
        },
        btnSaveInput(event) {
            this.userInputValue = event.target.value;
        },
        btnSaveInputWhenEnter(event) {
            this.userInputValueWhenEnter = event.target.value;
        }
    }
}).mount('#assignment');