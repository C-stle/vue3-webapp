<template>
  <!--    <router-view></router-view>-->
  <router-view v-slot="{ Component }">
    <transition :name="transitionName">
      <div :key="route.name">
        <component :is="Component" />
      </div>
    </transition>
  </router-view>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

let transitionName = ref("none");
let isGoBack = false;

const route = useRoute();

window.addEventListener("popstate", () => {
  // 뒤로가기시
  console.log("popstate");
  isGoBack = true;
});

watch(
  () => route.name,
  (to, from) => {
    console.log("watch");
    transitionName.value = "none";
    if (isGoBack) {
      // 뒤로 가기 버튼 눌렸을 시 왼쪽에서 덮임
      transitionName.value = "slide-left";
      isGoBack = false;
    } else {
      if (from === undefined) return; // 새로고침시
      transitionName.value = "slide-right";
    }
  }
);
</script>

<style>
/* 슬라이드 START */
.none-enter-active,
.none-leave-active {
  display: none;
}

.none-enter-from {
  display: none;
}

.none-leave-to {
  display: none;
}

/* slide right */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.2s ease;
}

.slide-right-enter-from {
  transform: translateX(100%);
}

.slide-right-leave-to {
  transform: translateX(-100%);
}

/* slide left */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.2s ease;
}

.slide-left-enter-from {
  transform: translateX(-100%);
}

.slide-left-leave-to {
  transform: translateX(100%);
}

/* 슬라이드 END */
</style>