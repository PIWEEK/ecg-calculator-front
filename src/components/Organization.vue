<template>
  <div class='container'>
    <div class="row">
      <main-header></main-header>
    </div>
    <div class="row">
      <main-navbar section="organization"></main-navbar>
    </div>
    <div class="row">
      <h1>Organization</h1>
    </div>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader'
import MainNavbar from '@/components/MainNavbar'

export default {
  name: 'organization',
  components: {
    MainHeader,
    MainNavbar
  }
}
</script>

<style scoped>
</style>
