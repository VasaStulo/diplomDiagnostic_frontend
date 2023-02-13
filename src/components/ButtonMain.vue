<template>
  <v-btn>
    {{ text }}
  </v-btn>

</template>

<script>
export default {
  name: "ButtonMain",
  props: {
    text:{
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
//.v-btn{
//background: map-get($yellow, 'base') !important;
//}
</style>