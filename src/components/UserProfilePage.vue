<template>
  <div class="wrapper">
    <div class="offer">
      <h1>hui</h1>
        <h1>{{user.user_id}}</h1>
      <h1>{{user.name}}</h1>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'UserProfilePage',
  computed: {
    ...mapState('user',['user']),
  }
}
</script>

<style scoped lang="scss">
.wrapper{
  color: #000000;
}
</style>