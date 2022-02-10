<script setup>
import { computed, ref } from 'vue'
import Input from './components/Input.vue';
import TaskList from './components/TaskList.vue';
import SelectType from './components/SelectType.vue';

const value = ref('')
const tasks = ref([])
const option = ref('all')

const items = computed(() => {
  if (option.value === 'actives') return tasks.value.filter((t) => !t.completed)
  if (option.value === 'completed')
    return tasks.value.filter((t) => t.completed)
  return tasks.value
})

const handlerEnter = (e) => {
  if (e.key === 'Enter' || e.keyCode === 13) {
    value.value = ''
    tasks.value.push({
      id: tasks.value.length,
      name: e.target.value,
      completed: false,
    })
  }
}

const markCompleted = (id) => {
  tasks.value[id].completed = true
}

const changeOption = (value) => (option.value = value)
</script>

<template>
  <div
    class="flex flex-col justify-center items-center h-screen w-full bg-nucba-black"
  >
    <div :class="`w-full p-4 md:w-2/5 ${value === '' ? 'animate-fade' : ''}`">
      <Input
        label="Tasks"
        placeholder="Escriba aqui el nombre de su tarea"
        v-model="value"
        @handlerEnter="handlerEnter"
      />
    </div>

    <div
      v-show="items.length > 0"
      class="w-full p-4 md:w-2/5 bg-nucba-black text-white shadow-md rounded-sm flex-shrink overflow-auto h-96 animate-swipUp"
    >
      <TaskList :tasks="items" @markCompleted="markCompleted" />
    </div>

    <div
      v-show="tasks.length > 0"
      class="w-full p-4 md:w-2/5 bg-nucba-black text-white shadow-md rounded-sm overflow-auto animate-swipUp"
    >
      <div class="flex justify-between p-2 py-4 border-b-2 border-b-slate-400">
        <div class="text-sm">Total: {{ items.length }}</div>
        <SelectType :option="option" @changeOption="changeOption" />
      </div>
    </div>
  </div>
</template>