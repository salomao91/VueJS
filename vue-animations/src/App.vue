<template>
  <div class="container">
    <div class="block" :class="{ animate: isAnimatedBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <transition>
      <p v-if="isParagraphVisible">This is sometimes visible...</p>
    </transition>
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>
  <base-modal @close="hideDialog" v-if="dialogIsVisible">
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
      };
  },
  methods: {
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

/* these css classes v-enter and v-leave are applied to the html element inside the <transition> component wrapper */
.v-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.v-enter-active {
  /* it tells vue to watch for all css properties that might be animted, like opacity and transform */
  transition: all 1s ease-out;
}

.v-enter-to {
  opacity: 1;
  transform: translateY(0);  
}

.v-leave-from {
  opacity: 1;
  transform: translateY(0); 
}

.v-leave-active {
  transition: all 1s ease-in;
}

.v-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

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