<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resources')"
      :mode="storedResourcesButtonMode"
      >Stored Resources</base-button
    >
    <base-button @click="setSelectedTab('add-resource')"
      :mode="AddResourceButtonMode"
      >Add Resource</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    StoredResources,
    AddResource,
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation',
          link: 'https://vue.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.com',
        },
      ],
    };
  },
  provide() {
    return {
      //all child components will have access to it
      resources: this.storedResources,
      addResource: this.addResource
    };
  },
  computed: {
    storedResourcesButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    AddResourceButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, url) {
        const newResource = {
            id: new Date().toISOString(),
            title: title,
            description: description,
            link: url
        };

        //unshift push(add) an element but in the beginig of the array
        this.storedResources.unshift(newResource);

        this.selectedTab = 'stored-resources';
    }
  },
};
</script>
