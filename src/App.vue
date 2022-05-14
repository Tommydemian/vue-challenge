<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/faq">Faq</router-link> |
    <router-link to="/countries">Countries</router-link> |
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


:root{
  --primary-clr:#ffffff;
  --alternate-text-clr: #000000;
  --secondary-clr:#14213d;
  --accent-clr: #fca311; 
  --accent-clr-pseudo: #efac3f;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
