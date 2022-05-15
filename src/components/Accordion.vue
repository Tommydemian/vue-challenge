<template>
  <section> 
    <div class="container">
      <div class="question-box">
        <h3>Test <PlusIcon class="accordion__icon" /> <MinusIcon class="accordion__icon" /> </h3>
          <div class="question-reply">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores modi suscipit, expedita perferendis quos accusantium delectus eum magnam.</p>
         </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PlusIcon from '../assets/icons/Plusicon.vue';
import MinusIcon from '../assets/icons/MinusIcon.vue'

export default defineComponent({
    name:'Accordion',
    components:{
      PlusIcon,
      MinusIcon  
    },
    setup() {
        
    },
})
</script>

<style scoped>

section {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
    display: flex;

}

.question-box {
  width: 60%;
  background-color:var(--bg-clr);
  border: 1px solid black
}

.accordion__icon {
width: 1.5em;
height: 1.5em;
}


</style>
