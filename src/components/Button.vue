<template>
    <button class="button">{{btnText}}</button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    name:'Button',
    props: {
      btnText:{
        type: String as PropType<String>,
        default: 'Submit'
        },
    },
})
</script>

<style scoped>
.button {
  cursor: pointer;
  border: none;
  border-radius:6px;
  padding: 1em 1.5em; 
  margin:1em;
  color: var(--alternate-text-clr);
  background-color: var(--accent-clr);
}
.button:hover,
.button.focus {
  background-color: var(--accent-clr-pseudo);
}

</style>
