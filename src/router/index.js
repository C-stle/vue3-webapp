import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/hello", // [경로]
    name: "HelloWorld", // [이름]
    component: () => import("@/components/HelloWorld.vue"), // [로드 파일]
  },
  {
    path: "/BasicTest", // [경로]
    name: "BasicTest", // [이름]
    component: () => import("@/components/BasicTest.vue"), // [로드 파일]
  },
  {
    path: "/", // [경로]
    name: "MainPage", // [이름]
    component: () => import("@/components/MainPage.vue"), // [로드 파일]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
