<template>
   <h1>This is the countries page</h1>
     <select class="dropdown">
    <option :key="country.code" v-for="country in countries">
    <span>({{country.code}})</span> {{country.name}}
    </option>
    </select>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios';

export default defineComponent({
    name: 'CountriesView',
    data() {
      return{
        countries : [] as Array<String | Number>
      }
    },
     async mounted() {
     const {data} = await axios.get('https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json')
     this.countries = data
     console.info(this.countries)
        
    }
})
</script>

<style scoped>
.dropdown{
    
}
</style>