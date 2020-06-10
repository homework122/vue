<template>
  <div id="app">
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark">
        <NavMenu></NavMenu>
      </div></el-col>
    </el-row>

  </div>
</template>

<script>
import NavMenu from "./views/NavMenu.vue";
export default {
  data() {
    return {};
  },
  components: {
    NavMenu
  },

  methods: {}
};
</script>

<style>
.section{
  background: firebrick;
  margin-left: 30px;
}
</style>
