<template>
  <el-aside>
    <div class="filter_wrapper">
      <h3>
        商品分類
      </h3>
      <el-checkbox-group @change="emit('update:filter',props.filter)" v-model="filter.type">
        <el-checkbox label="cap" ></el-checkbox>
        <el-checkbox label="cowboy" ></el-checkbox>
        <el-checkbox label="hat" ></el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="filter_wrapper">
      <h3>
        商品搜尋
      </h3>
      <el-input @change="emit('update:filter',props.filter)" v-model.trim="filter.name" placeholder="search...">
      </el-input>
    </div>
    <div class="filter_wrapper">
      <h3>
        商品價格
      </h3>
      <div class="range_container">
        <el-input-number :step="100" :min="0" :max="1000" @change="emit('update:filter',props.filter)" v-model="props.filter.range[0]"></el-input-number>
        <p>~</p>
        <el-input-number :step="100" :min="0" :max="1000" step-strictly @change="emit('update:filter',props.filter)" v-model="props.filter.range[1]"></el-input-number>
      </div>
    </div>
  </el-aside>
</template>

<script setup>
import { computed, defineProps, reactive, ref } from 'vue';
const props = defineProps({
  filter:Object,
})
const emit = defineEmits(['update:filter'])

</script>

<style scoped>
.el-aside{
  width:20vw;
  box-shadow: 3px 0px 10px rgb(90, 90, 90);
  z-index: 5;
  font-size: 1.2rem;
  padding: 10px;
  padding-top:15px
}
.filter_wrapper{
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: rgba(199, 199, 199, 0.3) 3px dashed;
}
.el-checkbox-group{
  text-align: left;
}
.el-checkbox{
  margin-left: 20px;
  display: block;
}
:deep(.el-checkbox__label){
  font-size: 1.2rem;
}
.range_container{
  width:80%;
  left: 50%;
  position: relative;
  transform: translateX(-50%);
}
.range_container p{
  font-size: 1.5rem;
  transform: rotate(90deg);
}
.el-input{
  width: 80%;
}
</style>