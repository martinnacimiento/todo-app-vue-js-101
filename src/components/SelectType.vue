<script setup>
defineProps({
  option: {
    type: String,
    required: true,
  },
})

defineEmits(['changeOption'])
</script>

<template>
  <div>
    <span
      :class="`mr-2 ${
        option === 'all' ? 'rounded-md p-2 border-2 border-violet-500' : ''
      }`"
      @click="$emit('changeOption', 'all')"
      >All</span
    >
    <span
      :class="`mr-2 ${
        option === 'actives' ? 'rounded-md p-2 border-2 border-violet-500' : ''
      }`"
      @click="$emit('changeOption', 'actives')"
      >Actives</span
    >
    <span
      :class="`mr-2 ${
        option === 'completed'
          ? 'rounded-md p-2 border-2 border-violet-500'
          : ''
      }`"
      @click="$emit('changeOption', 'completed')"
      >Completed</span
    >
  </div>
</template>
