<template>
  <div class="layout">
    <ul>
      <li v-for="item in listName" :key="item.id" @click="goList(item)">
        {{ item.name }}
      </li>
    </ul>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      listName: [
        {
          id: 1,
          name: "主页",
          to: "home",
        },
        {
          id: 2,
          name: "分类",
          to: "classify",
        },
        {
          id: 3,
          name: "购物车",
          to: "cart",
        },
        {
          id: 4,
          name: "我的",
          to: "me",
        },
      ],
    };
  },
  methods: {
    goList(i) {
      this.$router.push(i.to);
    },
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
<style lang="scss" scoped>
.layout {
  width: 100%;
  background-color: #ccc;
  ul {
    padding-left: 20px;
    display: flex;
    width: 40%;
    height: 40px;
    justify-content: space-around;
    align-items: center;
    li {
      cursor: pointer;
    }
  }
}
</style>