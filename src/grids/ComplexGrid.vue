
<template>
  <div class="container">
    <LeftNav/>
    <div class="ComplexGrid"> 

    <div class="header"></div>
    <div class="body"></div>
    <div class="footer"></div>
</div>
    
  </div>
</template>

<script>
import Vue from 'vue';
import FreeTransform from 'vue-free-transform'

import LeftNav  from '../Nav/LeftNav.vue';


export default {
  name: 'ComplexGrid',
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
.ComplexGrid {
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
.header{
    width: 98%;
    height: 15%;
    border: 1px solid;
    margin: 1%;
}
.body{
    width: 98%;
    height: 60%;
    border: 1px solid;
    margin: 1%;
}
.footer{
    width: 98%;
    height: 15%;
    border: 1px solid;
    margin: 1%;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
