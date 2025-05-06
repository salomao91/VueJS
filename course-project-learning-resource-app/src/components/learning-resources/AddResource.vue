<template>
<base-dialog v-if="inputIsInvalid" title="Invalid Input">

    <template v-slot:default>
        <p>An input value is invalid.</p>
        <p>Please correct it and try again.</p>
    </template>

    <template v-slot:actions >
        <base-button @click="confirmError">Okay</base-button>
    </template>

</base-dialog>
  <base-card>
    <form @submit.prevent="submitFormData">
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" v-model="title"/>
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea name="description" id="description" cols="30" rows="3" v-model="description"></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" type="url" v-model="link"/>
      </div>
      <base-button type="submit">Add Resource</base-button>
    </form>
  </base-card>
</template>

<script>
    export default {
        data() {
            return {
                title: '',
                description: '',
                link: '',
                inputIsInvalid: false,
            }
        },
        inject: ['addResource'],
        methods: {
            submitFormData() {
                if (this.title.trim() === '' || this.description.trim() === '' || this.link.trim() === '') {
                    this.inputIsInvalid = true;
                    return;
                }                
                this.addResource(this.title, this.description, this.link);
            },
            confirmError() {
                this.inputIsInvalid = false;
            }
        },
    }
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>