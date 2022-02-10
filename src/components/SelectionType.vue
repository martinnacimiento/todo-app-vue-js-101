<script setup>
defineProps({
  option: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
})

defineEmits(['changeOption'])
</script>

<template>
  <div
    :class="`p-[.90px] ${
      option === type ? 'bg-nucba-gradient' : 'bg-nucba-black'
    }`"
  >
    <div
      class="mr-2 text-xs bg-nucba-black w-full text-center"
      @click="$emit('changeOption', type)"
    >
      {{ label }}
    </div>
  </div>
</template>
