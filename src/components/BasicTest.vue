<template>
  <v-main>
    <v-responsive class="mx-auto" max-width="400">
      <h1 v-bind:class="titleClass">Dynamic Attribute Bindings</h1>
      <h1 :class="titleClass">Dynamic Attribute Bindings</h1>
    </v-responsive>
    <v-responsive class="mx-auto" max-width="400">
      <v-btn @click="increment">count is {{ count }}</v-btn>
    </v-responsive>
    <v-responsive class="mx-auto" max-width="400">
      <v-text-field
        v-model="text"
        clearable="true"
        hint="hint text"
        label="Label Text"
      ></v-text-field>
      <p>input value is {{ text }}</p>
    </v-responsive>
    <v-responsive class="mx-auto" max-width="400">
      <v-btn @click="toggle">toggle</v-btn>
      <h2 v-if="awesome">Awesome is True</h2>
      <h2 v-else>Awesome is False</h2>
    </v-responsive>
    <v-responsive class="mx-auto" max-width="400">
      <form @submit.prevent="addTodo">
        <v-text-field v-model="newTodo" clearable="true"></v-text-field>
      </form>
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          {{ todo.text }}
          <v-btn @click="removeTodo(todo.id)">X</v-btn>
        </li>
      </ul>
    </v-responsive>
  </v-main>
</template>

<style scoped></style>

<script setup>
import { reactive, ref } from "vue";

const titleClass = ref("title");

const count = ref(0);
const increment = () => {
  count.value++;
};

const text = ref("");

// const onClearInput = () => {
//   alert('clear clicked');
// }

const awesome = ref(true);
const toggle = () => {
  awesome.value = !awesome.value;
};

const newTodo = ref("");

let id = 0;

const todos = reactive([
  { id: id++, text: "Learn HTML", done: true },
  { id: id++, text: "Learn JavaScript", done: true },
  { id: id++, text: "Learn Vue", done: false },
]);

const addTodo = () => {
  if (newTodo.value) {
    todos.value.push({ id: id++, text: newTodo.value, done: false });
    newTodo.value = "";
  }
};

const removeTodo = (id) => {
  todos.value = todos.value.filter((el) => el.id !== id);
};
</script>