<template>
  <section> 
    <div class="faq-container"> 
      <div class="question">{{faq.question}} <PlusIcon class="faq-icon" @click="faq.open = !faq.open" /></div>
      <div v-show="faq.open" class="question-reply">{{faq.answer}}</div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import PlusIcon from '../assets/icons/Plusicon.vue';
import MinusIcon from '../assets/icons/MinusIcon.vue'

import Faq from '../types/faq.interface';

export default defineComponent({
    name:'Accordion',
    components:{
      PlusIcon,
      MinusIcon  
    },
    props: {
      faq: {
        type: Object as PropType<Faq>,
        required: true
      },
    }
})
</script>

<style scoped>

section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3em;  
}

.faq-container {
    display: flex;
    flex-direction: column;
    row-gap: 1em;
    width: 60%;
    padding: 1em;
    background-color:var(--bg-clr-100);
    border-radius:6px;

}

.question {
  border: 1px solid var(--bg-clr-200);
  position: relative;
  font-size: 1.5rem;
  color: var(--bg-clr-300);
  transition: all 0.5s linear;
  display: flex;
  align-items: center;
  padding: 0.5em;
  border-radius: 6px;

}

.faq-icon {
  width: 1em;
  height: 1em;
  position: absolute;
  right: .5em;
  cursor: pointer;
}

.question-reply {
  font-size: 1rem;
  overflow-y: hidden;
  transition: all 0.5s ;
}




</style>
