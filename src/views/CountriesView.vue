<template>
    <h1 class="header" >{{state.title}}</h1>
   <div class="dropdown-container">
     <select 
       v-cloak
       class="dropdown">
       <option
         class="dropdwown__content" 
         v-for="{code, name} in state.countries"
         :key="code" > 
           <span>({{code}})</span> {{name}} <!-- destructure code and name from the Array -->
       </option>
     </select>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue'
import axios from 'axios';

import Countries from '../types/countries.interface';

export default defineComponent({
    name: 'CountriesView',
    setup() {

        const state = reactive({
          countries: [] as Countries[],
          title: 'Select your Country :' as string 
        });
      
        onMounted(async () => {
          const {data} = await axios.get('https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json')
           state.countries = data
        });

       return { state }
      
    },
})
</script>

<style scoped>

.header {
  text-align: center;
  margin-top:1em;
  font-size: 1.5rem;
  text-decoration: underline;


}
.dropdown-container {
  display: flex;
  justify-content:center;
  align-items:center;  
  margin: 5em;
}
.dropdown{
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  font-size:1rem;
  padding: .5em 1em;
  background-color: var(--bg-clr-100);
  border: none;  
}
.dropdown:focus,
.dropdown:active,
.dropdown:target,
.dropdown:visited{
  outline: 1px solid var(--bg-clr-200);

}

[v-cloak]{
  display: none;
}
</style>