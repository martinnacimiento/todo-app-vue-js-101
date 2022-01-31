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
    tasks.value.push({
      id: tasks.value.length,
      name: e.target.value,
      completed: false,
    })
    value.value = ''
  }
}

const markCompleted = (id) => {
  tasks.value[id].completed = true
}

const changeOption = (value) => (option.value = value)
</script>

<template>
  <div
    class="flex flex-col justify-center items-center h-screen w-full bg-slate-100"
  >
    <div class="w-2/5">
      <Input
        label="Tasks"
        placeholder="Lavar la ropa.."
        v-model="value"
        @handlerEnter="handlerEnter"
      />
    </div>

    <div
      v-if="items.length > 0"
      class="w-2/5 bg-white shadow-md rounded-sm p-2 flex-shrink overflow-auto h-96"
    >
      <TaskList :tasks="items" @markCompleted="markCompleted" />
    </div>

    <div
      v-if="tasks.length > 0"
      class="w-2/5 bg-white shadow-md rounded-sm p-2 overflow-auto"
    >
      <div class="flex justify-between p-2 border-b-2 border-b-slate-400">
        <div>Total: {{ items.length }}</div>
        <SelectType :option="option" @changeOption="changeOption" />
        <div>
          <button>Clear completed</button>
        </div>
      </div>
    </div>
  </div>
</template>
