<template>
  <el-container>
      <shop-side-bar v-model:filter="filter"></shop-side-bar>
      <shop-item-list :filter="filter"></shop-item-list>
  </el-container>
</template>

<script setup>
import { ref,reactive } from 'vue'
import  ShopItemList  from '../components/ShopItemList.vue'
import  ShopSideBar from '../components/ShopSideBar.vue'

const filter = reactive({
    type:['cap','cowboy','hat'],
    range:[0,1000],
    name:''
  }
)


</script>

<style scoped>


</style>