<script setup>
import SelectionType from './SelectionType.vue';
defineProps({
  option: {
    type: String,
    required: true,
  },
})

defineEmits(['changeOption'])
</script>

<template>
  <div class="flex w-10/12 justify-around items-center gap-2">
    <SelectionType
      :option="option"
      @change-option="(value) => $emit('changeOption', value)"
      type="all"
      label="All"
    />
    <SelectionType
      :option="option"
      @change-option="(value) => $emit('changeOption', value)"
      type="actives"
      label="Actives"
    />
    <SelectionType
      :option="option"
      @change-option="(value) => $emit('changeOption', value)"
      type="completed"
      label="Completed"
    />
  </div>
</template>
