<template>
  <div id="home">
    <h3>Choose Grid to Design</h3>
    <div class="grid">
      <router-link to="/FirstGrid"> <FirstGrid/></router-link>
    </div>
    <div class="grid">
      <router-link to="/SecondGrid"> <SecondGrid/></router-link>
    </div>
    <div class="grid">
      <router-link to="/ComplexGrid"> <ComplexGrid/></router-link>
    </div>
    <div class="grid">
        <router-link to="/FlexGrid"> <FlexGrid/></router-link> 
    </div>
    <div class="grid">
        <router-link to="/SimpleGrid"> <SimpleGrid/></router-link> 
    </div>
    <div class="grid">
        <router-link to="/StaticGrid"> <StaticGrid/></router-link> 
     </div>
  </div>

</template>

<script>

import ComplexGrid from '../grids/ComplexGrid.vue';
import FlexGrid from '../grids/FlexGrid.vue';
import SimpleGrid from '../grids/SimpleGrid.vue';
import StaticGrid from '../grids/StaticGrid.vue';
import FirstGrid from '../grids/FirstGrid.vue';
import SecondGrid from '../grids/SecondGrid.vue';
export default {
  name: 'HomePage',
  components: {
    ComplexGrid,
    FlexGrid,
    SimpleGrid,
    StaticGrid,
    FirstGrid,
    SecondGrid,

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#home{
  width: 1050px;
}
.grid{
   width: 500px;
   height: 250px;
   display: inline-block;
   cursor: pointer;
   margin: 25px 10px;
}
.grid .container > :first-child{
   display: none;
}
.grid .container > :last-child{
   width: 500px;
   height: 250px;
   display: inline-block;
   cursor: pointer;
   position: initial;
}
.grid .container > :last-child span{
   display: none;
}
h3 {
    margin: 40px auto;
    width: 214px;
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
