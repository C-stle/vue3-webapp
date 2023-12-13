<script setup></script>

<template>
  <div class="content-main">
    <div class="list">
      <div class="item-box">
        <div class="item">
          <div class="item-empty" />
          <div class="item-title">
            <span>닉네임, (만, 나이)</span>
          </div>
          <div class="item-subTitle">
            <span>직업, 거주지</span>
          </div>
        </div>
      </div>
      <div class="item-box">
        <div class="item">
          <div class="item-empty" />
          <div class="item-title">
            <span>닉네임, (만, 나이)</span>
          </div>
          <div class="item-subTitle">
            <span>직업, 거주지</span>
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

.item-box {
  position: relative;
  width: 100%;
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
