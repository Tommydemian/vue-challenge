<template>
    <h1>This is the Faq page</h1>
    <Accordion
      v-for="(faq, i) in faqs" 
      :key="faq.id"
      :faq="faq"
      :index="i"
       />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import Accordion from '../components/Accordion.vue';
import Faq from '../types/faq.interface';



export default defineComponent({
    name:'FaqView',
    components: {
        Accordion
    },
    setup() {
      const faqs = ref<Faq[]>([
        {
          question:'What is cold brew coffee?',
          answer:'Cold Brewed Coffee—also known as cold water extract or cold press or slow brewed—is a surprisingly simple coffee-brewing technique. Rather than hot water being used to extract the flavor from the ground coffee, which speeds up the brewing process, Cold Brewed coffee is made simply using ground coffee, a coffee filter, and room temperature/cold water.',
          open: false,
          id:1
        },
        {
          question:'What makes Cold Brew Lab coffee better?',
          answer:'A great cup of cold brew starts with high-quality coffee beans. We use USDA organic certified chemical-free Colombian Arabica beans. Then, we use best-in-class professional roasters to get the perfect caramelized roast levels.',
          open: false,
          id:2
        },
        {
          question:'How long does a bag of coffee last?',
          answer:'Unopened bags can last up to a year but we do recommend enjoying the beans within 6 months of purchase for optimal freshness. Once opened, we recommend using within 2-3 weeks to ensure the best taste. ',
          open: false,
          id:3
        },
        {
          question:'How long does cold brewed coffee last in the fridge?',
          answer:'Once cold brew coffee is brewed, it lasts 7 days in the fridge.',
          open: false,
          id:4
        },
        ])

        return {faqs}

        },
    });
</script>