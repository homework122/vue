<!-- 进行中 -->
<template>
  <div>
    <el-container>
      <el-header>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="进行中" name="first"></el-tab-pane>
          <el-tab-pane label="未开始" name="second"> </el-tab-pane>
          <el-tab-pane label="以结束" name="third"></el-tab-pane>
        </el-tabs>
      </el-header>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first"
    };
  },
  created() {
    this.activeName = this.$route.name;
  },

  methods: {
    handleClick() {
      if (this.activeName == "first") {
        this.$router.push({ path: "/special_conduct" });
      }
      if (this.activeName == "second") {
        this.$router.push({ path: "/special_Not" });
      }
      if (this.activeName == "third") {
        this.$router.push({ path: "/special_End" });
      }
    }
  }
};
</script>
<style scoped></style>
