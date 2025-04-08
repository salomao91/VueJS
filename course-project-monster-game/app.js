function getRandomValue(min, max) {
    Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterhealth: 100
        }
    },
    methods: {
        attackMonster() {
            console.log('atackMonster');
            const attackValue = getRandomValue(5, 12);
            this.monsterhealth -= attackValue;
            this.attackPlayer();
        },
        attackPlayer() {
            console.log('atackPlayer');
            const attackValue = getRandomValue(8, 15);
            this.playerHealth -= attackValue;
        }
    }
}).mount('#game');