<template>
  <section> 
    <div class="faq-container">
      <div class="question">{{faq.question}} <PlusIcon class="faq-icon" /></div>
      <div class="question-reply">{{faq.answer}}</div>
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
      index: {
        type: Number as PropType<Number>
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
  border: 1px solid black
}

.faq-container {
    display: flex;
    flex-direction: column;
    row-gap: 1em;
    width: 60%;
    outline: 1px solid red;
    padding: 1em;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);

}

.question {
  border: 1px solid black;
  position: relative;
  font-size: 1.5rem;
  color: var(--bg-clr-300);
  transition: all 0.5s linear;
  display: flex;
  align-items: center;

}

.faq-icon {
  width: 1em;
  height: 1em;
  position: absolute;
  right: .5em;
}

.question-reply {
  font-size: 1rem;
  overflow-y: hidden;
  transition: all 0.5s ;
  display: none;
}




</style>
