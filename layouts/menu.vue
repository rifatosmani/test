<template>
<div>
    <the-header></the-header>
    <Nuxt/>
    <the-footer></the-footer>
</div>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

div {
  width: 100%;
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.allButFooter {
    min-height: calc(100vh - 150px);
}
</style>