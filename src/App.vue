<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import NavBar from './components/NavBar.vue'

</script>

<template>
  <el-container>
    <el-header>
      <nav-bar></nav-bar>
    </el-header>
      <el-main>
        <router-view v-slot="{ Component }"><!--vue3-->
          <transition name="fade">
            <component :is="Component" />
          </transition>
        </router-view>
      </el-main>
  </el-container>
  <el-backtop />

</template>

<style>
*{
  padding: 0;
  margin: 0;
  overflow: hidden;
}
@font-face{
  font-family: qingsong;
  src:url('/public/JasonHandwriting5p.ttf');
}
#app {
  font-family: qingsong, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */

}

.el-header{
  /* top: 0px;
  position: sticky;*/
  z-index: 5;
  height: 75px;
  box-shadow: 0px 0px 5px rgb(90, 90, 90);
  margin-bottom: 3px;
}
.el-main{
  overflow: hidden;
  padding: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
} 
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
