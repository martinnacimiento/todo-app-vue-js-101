<template>
  <div
    v-for="task in tasks"
    :key="task.id"
    class="flex justify-between p-2 border-b-2 border-b-slate-400"
  >
    <div :class="task.completed ? 'line-through text-gray-400' : ''">
      #{{ task.id + 1 }} - {{ task.name }}
    </div>
    <button
      v-if="!task.completed"
      class="p-1 rounded-md bg-red-300"
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
