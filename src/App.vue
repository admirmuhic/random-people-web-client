<template>
  <div div="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "../src/components/Navbar";
export default {
  name: "App",
  components: { Navbar },
};
</script>

<style>
</style>
