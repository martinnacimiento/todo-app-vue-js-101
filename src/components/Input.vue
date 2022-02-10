<template>
  <div class="pb-1 bg-nucba-gradient">
    <input
      type="text"
      id="task"
      class="shadow-md bg-nucba-black text-white text-sm focus:border-none active:border-none focus-visible:border-none focus-visible:outline-none block w-full p-2.5"
      :placeholder="placeholder"
      required
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @keyup="$emit('handlerEnter', $event)"
    />
  </div>
</template>

<script setup>
defineProps({
  modelValue: String,
  label: String,
  placeholder: String,
})
defineEmits(['update:modelValue', 'handlerEnter'])
</script>
