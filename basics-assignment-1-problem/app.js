Vue.createApp({
    data() {
        return {
            name: 'Salomao',
            age: 33,
            imageLink:'https://montreal.citynews.ca/wp-content/blogs.dir/sites/19/2023/07/Bonjour-Montreal-e1688579348910.jpg'
        };
    },
    methods: {
        getFutureAge() {
            return this.age + 5;
        },
        getRandomNumber() {
            return Math.random();
        },
        getImageLink() {
            return this.imageLink;
        }
    }
}).mount('#assignment');