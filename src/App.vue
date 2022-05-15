<template>
  <nav class="navigation">
    <router-link class="link" to="/">Home <HomeIcon class="nav-icon"/></router-link>  |
    <router-link class="link" to="/faq">Faq <FaqIcon class="nav-icon"/></router-link>  |
    <router-link class="link" to="/countries">Countries <FlagIcon class="nav-icon"/></router-link> |
  </nav>
  <router-view/>
</template>

<script>
import HomeIcon from './assets/icons/HomeIcon.vue';
import FaqIcon from './assets/icons/FaqIcon.vue';
import FlagIcon from './assets/icons/FlagIcon.vue';


export default{
  name: 'App',
  components: {
    HomeIcon,
    FaqIcon,
    FlagIcon
  },

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
:root{
  --primary-clr:#ffffff;
  --alternate-text-clr: #000000;
  --secondary-clr:#14213d;
  --bg-clr-100:#e5e5e5;
  --bg-clr-200: #9f9ea6;
  --bg-clr-300: #49494e;
  --accent-clr: #fca311; 
  --accent-clr-pseudo: #efac3f;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
.navigation {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: var(--secondary-clr);
  padding: 1.5em;
}
.link {
  text-decoration: none;
  display: flex;
  align-items: center;
  color: var(--primary-clr);
  transition:all 0.5s;
  font-size:1.1rem
}

.link:hover {
  font-size: 1.5rem;
}

.nav-icon{
  width: 1em;
  height: 1em;
  color: var(--primary-clr);
  cursor: pointer;
  margin: 1em;

}

nav a.router-link-exact-active {
  color: var(--accent-clr);
  font-weight: bold;
  font-size:1.2rem
}

</style>
