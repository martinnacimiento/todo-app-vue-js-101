<template>
  <div
    v-for="task in tasks"
    :key="task.id"
    class="flex justify-between p-2 border-b-[0.89px] border-b-[#6D7996] animate-swipIn"
  >
    <div :class="task.completed ? 'line-through text-gray-400' : ''">
      #{{ task.id + 1 }} - {{ task.name }}
    </div>
    <button
      v-if="!task.completed"
      class="p-2 rounded-md bg-nucba-gradient"
      @click="$emit('markCompleted', task.id)"
    >
      Mark as complete
    </button>
  </div>
</template>

<script setup>
defineProps({
  tasks: {
    type: Array,
    required: true,
  },
})

defineEmits(['markCompleted'])
</script>
