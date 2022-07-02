<template>
  <section>
    <nav>
      <ul class="gp-header-menu">
        <li v-for="{ path, name } in routes">
          <RouterLink
            :to="path"
            >{{ name }}</RouterLink>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: "Header",
  props: {
    routes: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #111;
}

.router-link-active {
  background-color: #04AA6D;
}
</style>