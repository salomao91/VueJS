<template>
  <base-card>
    <form>
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea name="description" id="description" cols="30" rows="3"></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" type="url" />
      </div>
      <base-button type="submit">Add Resource</base-button>
    </form>
  </base-card>
</template>