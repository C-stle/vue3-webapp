<script setup></script>

<template>
  <div class="main">
    <div class="list">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
  </div>
</template>

<style scoped>
.main {
  width: 100%;
  height: calc(100% - 180px);
  min-height: 448px;
  overflow-y: auto;
}

.list {
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  gap: 16px;
}

.item {
  width: 350px;
  height: 300px;
  border: 1px solid black;
  border-radius: 40px;
}
</style>
