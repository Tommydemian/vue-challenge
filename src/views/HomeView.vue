<template>
  <div class="home">
   <h1>Welcome to Your Vue.js + TypeScript App</h1>
   <InputValidations /> 
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InputValidations from '@/components/InputValidations.vue';

export default defineComponent({
  name: 'HomeView',
  components:{
    InputValidations
  }
});
</script>
