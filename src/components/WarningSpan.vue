<template>
    <span>{{message}}</span>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    name: 'WarningMssg',
    props: {
        message: {
            type: String as PropType<String>,
            default: 'invalid value'
        },
    }
    
})
</script>
