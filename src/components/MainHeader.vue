<template>
  <div class="header">
    <router-link :to="{name: 'Landing'}" class="logo"><img src="../assets/ebc-mini.png" /></router-link>
    <div class="user">
      <span class="glyphicon glyphicon-user"></span>
      <router-link to="#">Mi cuenta</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main-header',
  props: ['section']
}
</script>

<style scoped>
  .header {
    align-items: center;
    display: flex;
    min-height: 100px;
    padding: 0 1rem;
  }

  .logo {
    flex-grow: 0;
  }

  .logo img {
    max-height: 70px;
  }

  .user {
    color: #4d9899;
    display: flex;
    flex-grow: 1;
    font-size: 150%;
    justify-content: flex-end;
    text-transform: uppercase;
  }

  .user .glyphicon {
    margin-right: 1rem;
  }
</style>
