<template>
  <span class="container">
    <a :href="'/' + type + '/' + id">
      <img v-if="image != null" :src="image" class="image" />
      <img
        v-if="image == null"
        src="https://thaigifts.or.th/wp-content/uploads/2017/03/no-image.jpg"
        class="image"
      />
      <h3>{{ name }}</h3>
      <h4 v-if="type === 'products'">({{ area_name }})</h4>
      <h4 v-if="type === 'people'">({{ position }})</h4>
    </a>
    <location-link v-if="type==='areas'" :name="name"></location-link>
  </span>
</template>

<script>
export default {
  props: ['id', 'name', 'image', 'type', 'area_name', 'position'],
}
</script>

<style scoped>
img {
  object-position: 20% 10%;
  object-fit: cover;
  height: 300px;
  width: 235px;
}
span.container {
  display: inline-block;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgb(179, 179, 179);
  padding: 1rem;
  margin: 30px auto;
  width: 25rem;
  height: 25rem;
  margin-left: 30px;
}
a {
  text-decoration: None;
  color: #999999;
}
</style>
