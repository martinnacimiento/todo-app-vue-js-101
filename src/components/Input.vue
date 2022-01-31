<template>
  <label
    for="task"
    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    >{{ label }}</label
  >
  <input
    type="text"
    id="task"
    class="shadow-md rounded-sm bg-white border text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    :placeholder="placeholder"
    required
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    @keyup="$emit('handlerEnter', $event)"
  />
</template>

<script setup>
defineProps({
  modelValue: String,
  label: String,
  placeholder: String,
})
defineEmits(['update:modelValue', 'handlerEnter'])
</script>
