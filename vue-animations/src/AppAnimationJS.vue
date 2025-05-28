<template>
<h3>Animation using Javascript</h3>
  <div class="container">
    <div class="block" :class="{ animate: isAnimatedBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <transition
      name="parag"
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <p v-if="isParagraphVisible">This is sometimes visible...</p>
    </transition>
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>
  <div class="container">
    <transition name="fade-button" mode="out-in">
      <!-- we can have two transition child elements here, because only one child will be added to the DOM -->
      <button @click="showUsers" v-if="!isUserVisible">Show Users</button>
      <button @click="hideUsers" v-else>Hide Users</button>
    </transition>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>  

<script>
export default {
  data() {
    return { 
      dialogIsVisible: false,
      isAnimatedBlock: false,
      isParagraphVisible: false,
      isUserVisible: false,
      enterInterval: null,
      leaveinterval: null
      };
  },
  methods: {
    beforeEnter(element) {
      console.log('beforeEnter()');
      console.log(element);
      element.style.opacity = 0;
    },
    enter(element, done) {
      console.log('enter');
      console.log(element);
      let round = 1;
      const interval = setInterval(function() {
        element.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(interval);
          done();
        }
      }, 20);   
    },
    afterEnter(element) {
      console.log('afterEnter');
      console.log(element);
    },    
    beforeLeave(element) {
      console.log('beforeLeave()');
      console.log(element);
      element.opacity = 1;
    },
    leave(element, done) {
      console.log('leave()');
      console.log(element);
      let round = 1;
      const interval = setInterval(function() {
        element.style.opacity = 1 - round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(interval);
          done();
        }
      }, 20);      
    },
    afterLeave(element) {
      console.log('afterLeave()');
      console.log(element);
    },
    showUsers() {
      this.isUserVisible = true;
    },
    hideUsers() { 
      this.isUserVisible = false;
    },
    animateBlock() {
      this.isAnimatedBlock = true;
    },
    toggleParagraph() {
      this.isParagraphVisible = !this.isParagraphVisible;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* property name that it'll be applied, time and type of way */
  /* transition: transform 0.3s ease-out; */

}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /* transform: translateX(-150px); */ 
  animation: slide-fade 1s ease-out forwards;
}

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 2s ease-out;
}

.fade-butto-leave-active {
  transition: opacity 2s ease-in;
}

.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}


/* alternative: using the <transition> wrapper component with css animations is also supported */

/* .v-enter-from {
}

.v-enter-active {
  animation: slide-scale 1s ease-out;
}

.v-enter-to {
}

.v-leave-from {
}

.v-leave-active {
  animation: slide-scale 1s ease-out;
}
 
.v-leave-to {
} */

@keyframes slide-scale {
  /* animation behave and different states */
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
     transform: translateX(-120px) scale(1.3);
  }
  100% {
     transform: translateX(-150px) scale(1);
  }

}

</style>