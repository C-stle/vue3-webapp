<script setup>
import { ref } from "vue";

const selected = ref("");

const onClick = (key) => {
  selected.value = key;
};
</script>

<template>
  <div class="tab-main">
    <div
      :class="[selected === 'a' && 'selected']"
      class="tab"
      @click="() => onClick('a')"
    >
      <span>소개</span>
    </div>
    <div
      :class="[selected === 'b' && 'selected']"
      class="tab"
      @click="() => onClick('b')"
    >
      <span>매니저</span>
    </div>
    <div
      :class="[selected === 'c' && 'selected']"
      class="tab"
      @click="() => onClick('c')"
    >
      <span>프로필</span>
    </div>
  </div>
</template>

<style scoped>
.tab-main {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #eeb0b0;
}

.tab {
  height: 100%;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.selected {
  background: white;
}
</style>