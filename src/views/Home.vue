<template>
  <div class="home">
    <div class="one">
      <div class="left"></div>
      <div class="right">
        <div class="top"></div>
        <div class="bottom"></div>
      </div>
    </div>
    <div class="two"></div>
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
.home {
  width: 100%;
  height: 100%;
  .one {
    width: 100%;
    height: 48%;
    background-color: #ccc;
  }
  .two {
    width: 100%;
    margin-top: 2%;
    height: 48%;
    background-color: #ccc;
  }
}
</style>
