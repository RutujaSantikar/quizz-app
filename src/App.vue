<template>
  <div>
    
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
      userLoggedIn() {
        return this.$store.getters.currentUserLoggedIn;
      },
    },
}
</script>

<style>

</style>
