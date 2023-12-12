<template>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<script setup></script>

<style>
.main {
  height: 100vh;
  width: clamp(280px, 100%, 430px);
  margin: 0 auto;
}
</style>
