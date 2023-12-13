<script setup>
// eslint-disable-next-line no-undef
const props = defineProps(["tabIdx"]);

// eslint-disable-next-line no-undef
defineEmits(["set"]);
</script>

<template>
  <div class="tab-body">
    <div class="tab-main">
      <div
        :class="[props.tabIdx === 1 && 'selected']"
        class="tab"
        @click="$emit('set', 1)"
      >
        <span>이번주 프로필</span>
      </div>
      <div class="tab-separator" />
      <div
        :class="[props.tabIdx === 2 && 'selected']"
        class="tab"
        @click="$emit('set', 2)"
      >
        <span>플러팅 현황</span>
      </div>
      <div class="tab-separator" />
      <div
        :class="[props.tabIdx === 3 && 'selected']"
        class="tab"
        @click="$emit('set', 3)"
      >
        <span>매니저</span>
        <span>전담 소개</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tab-body {
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
}

.tab-main {
  width: 100%;
  height: 58px;
  padding-inline: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 5px;
}

.tab {
  height: 100%;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid white;
  padding-top: 1px;
}

.tab-separator {
  height: 75%;
  width: 1px;
  background: black;
}

.selected {
  border-bottom: 1px solid #eeb0b0;
  transition: all 0.1s ease-in-out;
}
</style>
