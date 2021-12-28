<template>
  <div class="home">
    <el-carousel :interval="2500" :pause-on-hover="false" arrow="never" indicator-position="none">
      <el-carousel-item>
        <img src="https://raw.githubusercontent.com/ahe99/HatStore/main/src/assets/banners/mainbanner.png" alt="">
      </el-carousel-item>
      <el-carousel-item v-for="item in banners" :key="item">
        <img :src="item.url" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import axios from 'axios';
import { reactive } from 'vue';
const banners = reactive([
    {
      "name": "banner1"
    },
    {
      "name": "banner2"
    }, {
      "name": "banner3"
    }, {
      "name": "banner4"
    }
])
for (let item of banners){
  item.url = 'https://raw.githubusercontent.com/ahe99/HatStore/main/src/assets/banners/' + item.name +'.png'
}

</script>

<style>
.home{
  height: 200vh;
}
.el-carousel__container{
  min-height: 80vh;
}
.el-carousel__item img {
  width: 100%;
}

</style>