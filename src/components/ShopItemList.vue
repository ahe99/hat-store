<template>
    <el-scrollbar height="100vh">
    <el-main class="item_container">
      <el-row :gutter="15">
        <el-col class="item"  :span="6" v-for='i in 4' :key="i"></el-col>
        <el-col class="item"  :span="6" v-for='item in filterItems' :key="item.id">
          <el-skeleton :loading="loading" animated >
            <template #template>
              <el-card >
                <el-skeleton-item class="item_skeleton_img" variant="image"></el-skeleton-item>
                <div class="item_skeleton_information">
                  <el-skeleton-item class="item_skeleton_title" variant="h3"></el-skeleton-item>
                  <el-skeleton-item class="item_skeleton_price" variant="text"></el-skeleton-item>
                </div>
              </el-card>
            </template>
            <template #default>
              <el-card >
                <img :src="item.url" alt="" >
                <div class="item_information">
                  <p class="item_title">{{item.name}}</p>
                  <span class="item_price">
                      NTD {{item.price}}$
                  </span>
                </div>
              </el-card>
            </template>
          </el-skeleton>
        </el-col>
        <el-col class="item noitem"  :span="6" v-if="noItemFound">
          <el-card >
            <img src="/src/assets/items/none.png" alt="" >
            <div class="item_information">
              <p class="item_title">沒有符合的結果</p>
              <span class="item_price">
                  </span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
    </el-scrollbar>
</template>

<script setup>
import axios from 'axios'
import { treeProps } from 'element-plus/es/components/tree-v2/src/virtual-tree';
import { reactive,ref,computed,defineProps } from "vue";

const props = defineProps({
  filter:Object,
})
let loading = ref(true);
const items = reactive([]);
const filterItems = computed( ()=>{
    return items.filter(x=>{
        if(props.filter.type.indexOf(x.type)===-1){
          return false
        }else if(props.filter.range[0]>=x.price || props.filter.range[1]<=x.price){
          return false
        }else if(props.filter.name!==''){
          if(x.name.indexOf(props.filter.name)===-1){
            return false
          }
        }
        return true
      }
    )
  }
)
const noItemFound = computed(()=>{
  return items.filter(x=>{
        if(props.filter.type.indexOf(x.type)===-1){
          return false
        }else if(props.filter.range[0]>=x.price || props.filter.range[1]<=x.price){
          return false
        }else if(props.filter.name!==''){
          if(x.name.indexOf(props.filter.name)===-1){
            return false
          }
        }
        return true
      }
    ).length === 0 ?  true : false
})
setTimeout(()=>{loading.value = false},2500);
const url = 'https://raw.githubusercontent.com/ahe99/HatStore/main/src'

axios.get(url + 'data.json')
.then(res=>{
  for(let item of res.data){
    item.url ='https://raw.githubusercontent.com/ahe99/HatStore/main/assets/items/'+ item.name + '.png'
    items.push(item)
  }
}).catch(err=>{
  console.log(err)
})
</script>

<style scoped>

.item_container{
  background-color: rgb(216, 255, 218);
  padding: 40px;
  width:80vw;
  margin-bottom: 80px;
}
.item_skeleton_img{
  width:100%;
  height: 170px;
}
.item_skeleton_title, .item_skeleton_price{
  height: 30px;
}
.item_skeleton_title{
  margin-bottom: 10px;
}
.item_skeleton_price{
  width:50%
}
.el-card{
  margin-bottom: 15px;
}
.el-card__body img{
  color:rgb(100, 100, 100);
  width: 100%;
  padding-bottom: 10%;
}
.el-card__body{
  text-align: left;
}
.el-card:hover{
  transform: translateY(-3px);
  cursor: pointer;

}
.item_information,.item_skeleton_information{
  width: 100%;
  text-align: left;
}
.item_skeleton_information{
  padding-top: 10px;
}
/* .item_sold_amount ,.item_stock_amount{
  color:rgb(100, 100, 100);
  font-size: 0.7rem;
  bottom: 0;
  position: relative;
} */
.item_title ,.item_price{
  font-size: 1.1rem;
  color: black;
  width: 100%;
  display: inline-block;
  min-width: 100px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow:hidden
}
.item_price{
  font-weight: 800;
  color: rgb(110, 110, 110);
}
.item_buy{
  font-size:0.9rem;
}

</style>