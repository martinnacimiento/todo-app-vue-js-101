<script setup>
import { computed, ref } from 'vue'
import Input from './components/Input.vue'
import TaskList from './components/TaskList.vue'
import SelectType from './components/SelectType.vue'
import Logo from './assets/logo-nucba0.png'

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
    <img class="w-10 h-10 animate-rotate" :src="Logo" alt="nucba-logo" />
    <div :class="`w-full p-4 md:w-2/5 ${value === '' ? 'animate-fade' : ''}`">
      <Input
        label="Tasks"
        placeholder="Escriba aqui el nombre de su tarea"
        v-model="value"
        @handlerEnter="handlerEnter"
      />
    </div>

    <div
      class="w-full p-4 md:w-2/5 bg-nucba-black text-white shadow-md rounded-sm flex-shrink overflow-auto h-96 animate-swipUp"
    >
      <TaskList
        v-show="items.length > 0"
        :tasks="items"
        @markCompleted="markCompleted"
      />
      <div
        v-if="tasks.length > 0 && items.length === 0"
        class="w-full h-full flex justify-center items-center animate-fade"
      >
        <h1>No tasks to complete :D</h1>
      </div>
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
    <div class="fixed bottom-0 pb-1 absolute text-white hover:animate-pulse">
      <span>💻 with 💖 in <a class="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600" href="https://nucba.com.ar/">Nucba</a></span>
    </div>
  </div>
</template>
