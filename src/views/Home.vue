<template>
  <div class="home">
    <div class="inner">
      <div class="one">
        <div class="left"></div>
        <div class="right">
          <div class="top"></div>
          <div class="bottom"></div>
        </div>
      </div>
      <div class="two"></div>
    </div>
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
<style lang="scss" scoped>
*{
  box-sizing: border-box;
}
.home{
  width: 100vw;
  height: calc(100vh - 40px);
  padding: 20px;
  background-color: #e2e2e2;
  .inner{
    width:auto;
    height: 100%;
    background-color: #fff;
    padding: 20px;
    .one{
      width:100%;
      height: 48%;
      background-color: #ccc;
    }
    .two{
      width:100%;
      margin-top: 2%;
      height: 48%;
      background-color: #ccc;
    }
  }
}
</style>
