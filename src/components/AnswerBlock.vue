<template>
    <div>
    {{answer}}
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {
        const answer = ref<String>('')

        return {answer}

    },

})
</script>
