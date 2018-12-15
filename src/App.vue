<template>
  <div id="app">
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>

export default {
  name: 'app',
};

</script>

<style>
body{
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
main{
  margin: 0 auto;
  padding: 30px;
  background-color: white;
  width: 1024px;

}
</style>
