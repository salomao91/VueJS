Vue.createApp({
    data() {
        return {
            counter: 0
        }
    },
    computed: {
        message() {
            if (this.counter < 37) {
                return 'Not there yet';
            } else if (this.counter === 37) {
                return this.counter;
            } else {
                return 'Too much!';
            }
        }
    },
    watch: {
        //it watches the computed property 'message', when it changes this watch it executed/triggered
        message() {
            console.log('watcher executing...');
            setTimeout(() => {
                this.counter = 0;
            }, 5000);
        }
    },
    methods: {
        btnIncrementCounter(number) {
            this.counter = this.counter + number;
        }
    }
}).mount('#assignment');