<template>
  <div class="container">
    <LeftNav/>
    <div class="FirstGrid"> 

    <div class="left"></div>
    <div class="body"></div>
    <div class="right"></div>
</div>
    
  </div>
</template>

<script>
import Vue from 'vue';
import FreeTransform from 'vue-free-transform'

import LeftNav  from '../Nav/LeftNav.vue';


export default {
  name: 'FirstGrid',
  components: {
    FreeTransform,
    LeftNav,
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
    position: relative;
}
.FirstGrid {
    left: 214px;
    border: 1px solid;
    width: 800px;
    height: 430px;
    position: absolute;
    top: 153px;
}
span{
    position: absolute;
    top: -110px;
    right: 337px;
    font-size: 23px;
}
.left{
    width: 15%;
    height: 96%;
    border: 1px solid;
    margin: 1%;
    display: inline-block;
}
.body{
    width: 60%;
    height: 96%;
    border: 1px solid;
    margin: 1%;
    display: inline-block;
}
.right{
    width: 15%;
    height: 96%;
    border: 1px solid;
    margin: 1%;
    display: inline-block;
}

a {
  color: #42b983;
}
</style>