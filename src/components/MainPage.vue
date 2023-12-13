<script setup>
import MainFooter from "@/components/MainFooter.vue";
import MainHeader from "@/components/MainHeader.vue";
import MainTabs from "@/components/MainTabs.vue";
import { ref } from "vue";
import MainWeekendProfile from "@/components/MainWeekendProfile.vue";
import MainCurrentSituation from "@/components/MainCurrentSituation.vue";

const tabIdx = ref(1);

const setTabIdx = (idx) => {
  tabIdx.value = idx;
};
</script>

<template>
  <div class="main">
    <MainHeader />
    <MainTabs :tabIdx="tabIdx" @set="setTabIdx" />
    <MainWeekendProfile v-if="tabIdx === 1" />
    <MainCurrentSituation v-if="tabIdx === 2" />
    <MainWeekendProfile v-if="tabIdx === 3" />
    <MainFooter />
  </div>
</template>

<style scoped>
.main {
  height: 100vh;
  width: clamp(280px, 100%, 430px);
  margin: 0 auto;
}
</style>