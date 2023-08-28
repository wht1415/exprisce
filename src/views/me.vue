<template>
  <div class="me">
    <div class="top">
      <div class="left"></div>
      <div class="right"></div>
    </div>
    <div class="bottom"></div>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss">
.me {
  width: 100%;
  height: calc(100vh - 116px);
  display: flex;
  flex-wrap:wrap;
  align-content: space-evenly;
  .top {
    width: 100%;
    height: 20%;
    justify-content: space-between;
    display: flex;
    margin-bottom: 1%;
    .left {
      width: 20%;
      height: 100%;
      background-color: #999;
      display: inline-block;
    }
    .right{
      width: 79%;
      height: 100%;
      background-color: #999;
    }
  }
  .bottom{
    width: 100%;
    height: 465px;
    background-color: #999;
  }
}
</style>