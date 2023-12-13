<script setup>
import { ref } from "vue";

const sendList = ref(Array.from({ length: 2 }));
const receiveList = ref(Array.from({ length: 2 }));

const onClickSendSeeMore = () => {
  sendList.value.length === 2
    ? (sendList.value = Array.from({ length: 5 }))
    : (sendList.value = Array.from({ length: 2 }));
};

const onClickReceiveSeeMore = () => {
  receiveList.value.length === 2
    ? (receiveList.value = Array.from({ length: 4 }))
    : (receiveList.value = Array.from({ length: 2 }));
};
</script>

<template>
  <div class="content-main">
    <div class="list">
      <div class="send">
        <div class="send-title">
          <span>내가 보낸 플러팅</span>
          <span @click="onClickSendSeeMore">더보기</span>
        </div>
        <div class="send-grid">
          <div
            v-for="(item, i) in sendList"
            :key="i"
            :class="[i > 1 && 'animate']"
            class="item-box"
          >
            <div class="item"></div>
          </div>
        </div>
      </div>
      <div class="receive">
        <div class="receive-title">
          <span>내가 받은 플러팅</span>
          <span @click="onClickReceiveSeeMore">더보기</span>
        </div>
        <div class="receive-grid">
          <div
            v-for="(item, i) in receiveList"
            :key="i"
            :class="[i > 1 && 'animate']"
            class="item-box"
          >
            <div class="item"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-main {
  width: 100%;
  height: calc(100% - 180px);
  min-height: 448px;
  overflow-y: auto;
  padding: 24px;
}

.list {
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
}

.send,
.receive {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.send-title,
.receive-title {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.send-grid,
.receive-grid {
  width: 100%;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr 1fr;
}

.item-box {
  position: relative;
  width: 100%;
}

.animate {
  animation-name: show;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

@keyframes show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.item-box::after {
  display: block;
  content: "";
  padding-bottom: 100%;
}

.item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 1px solid black;
  border-radius: 24px;

  display: flex;
  padding: 24px;
  flex-direction: column;
}

.item-empty {
  height: 100%;
}

.item-title {
  font-weight: bold;
}

.item-subTitle {
}
</style>