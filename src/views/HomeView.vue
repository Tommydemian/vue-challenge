<template>
  <div class="home">
   <InputValid /> 
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InputValid from '../components/InputValid.vue';

export default defineComponent({
  name: 'HomeView',
  components:{
    InputValid
  }
});
</script>
