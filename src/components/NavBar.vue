<template>

<el-menu mode='horizontal' router>
  <el-menu-item class="nav_link_home">
    <a href="/">
      <img src="/src/assets/thelogo.png" alt="">
    </a>
    <el-divider direction="vertical"></el-divider>
  </el-menu-item>
  <el-menu-item class="nav_link" index='/'>
    Home
  </el-menu-item>
  <el-menu-item class="nav_link" index='/about'>
    About
  </el-menu-item>
  <el-menu-item class="nav_link" index='/shop'>
    Shop
  </el-menu-item>
  <!-- <el-menu-item class="nav_link" index='/login'>
    Login
  </el-menu-item> -->
</el-menu>
</template>

<script setup>
</script>

<style scoped>
.el-menu{
  
}
.nav_link_home{
  padding-right: 0px;
}
.nav_link_home >a{
  font-size: 1.6rem;
  font-weight: 700;
  text-decoration: none;
}
.nav_link_home a img{
  height: 100%;
}.nav_link_home a {
  width:100%;
  height: 100%;
}
.nav_link{
  font-size: 1.2rem;
}
.el-menu-item{
  height:75px;
  width:150px;
}

</style>