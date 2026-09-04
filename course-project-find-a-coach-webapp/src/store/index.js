import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index.js';

const store = createStore({
  modules: {
    // coaches is the namespace, coachesModule is the name of the module imported from the coaches/index.js file. 
    // It contains the state, mutations, actions, and getters for the coaches module.
    coaches: coachesModule
  }
});

export default store;
