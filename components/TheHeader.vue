<template>
  <header>
    
    <nav>
      <ul>
        <li id="logo">
            <nuxt-link to="/">ICT COMPANY </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/people">Our Team</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/products">Our Products</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/areas">Our Areas</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">About Us</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contacts">Contact Us</nuxt-link>
        </li>
      </ul>
    </nav>
    
  </header>

</template>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #11005c;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #ffffff;
  display: inline-block;
  padding: 0.75rem;
}

a:active,
a:hover,
a.nuxt-link-active {
  border: 1px solid #ffffff;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

header nav {
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
}

li {
  margin: 0 auto;
  flex-shrink: 5;
}
#logo{
  background-color: rgb(22, 94, 230);
}

</style>
