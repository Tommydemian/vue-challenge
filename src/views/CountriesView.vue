<template>
   <div class="dropdown-container">
     <select class="dropdown">
    <option
      class="dropdwown__content" 
      v-for="{code, name} in state.countries"
      :key="code" > <!-- destructure code and name from the Array -->
    <span>({{code}})</span> {{name}}
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
          countries: [] as Countries[]
        })
      
        onMounted(async () => {
          const {data} = await axios.get('https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json')
           state.countries = data
        })

       return {state}
      
    },
})
</script>

<style scoped>
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
    background-color: var(--bg-clr);
    border: none;  
}
</style>