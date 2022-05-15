<template>
  <div class="home">
   <InputValidations /> 
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InputValidations from '../components/InputValidations.vue';

export default defineComponent({
  name: 'HomeView',
  components:{
    InputValidations
  }
});
</script>