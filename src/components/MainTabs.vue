<script setup>
import { ref } from "vue";

const selectedIdx = ref(1);

const onClick = (key) => {
  selectedIdx.value = key;
};

// const indicatorClass = computed(() => {
//   // const custom = {
//   //   "tab-indicator": true,
//   // };
//   switch (selectedIdx.value) {
//     case 1:
//       return {
//         width: "44px",
//         left: "20px",
//       };
//     case 2:
//       return {
//         width: "44px",
//         left: "95px",
//       };
//     case 3:
//       return {
//         width: "77px",
//         left: "170px",
//       };
//   }
//   return {};
// });
</script>

<template>
  <div class="main">
    <div class="tab-main">
      <div
        :class="[selectedIdx === 1 && 'selected']"
        class="tab"
        @click="() => onClick(1)"
      >
        <span>이번주 프로필</span>
        <!--        <span>프로필</span>-->
      </div>
      <div class="tab-separator" />
      <div
        :class="[selectedIdx === 2 && 'selected']"
        class="tab"
        @click="() => onClick(2)"
      >
        <span>플러팅 현황</span>
        <!--        <span>현황</span>-->
      </div>
      <div class="tab-separator" />
      <div
        :class="[selectedIdx === 3 && 'selected']"
        class="tab"
        @click="() => onClick(3)"
      >
        <span>매니저</span>
        <span>전담 소개</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
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