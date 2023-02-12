<template>
  <v-btn
      :disabled="loading"
      class="ma-1"
      color="grey"
      plain
  >
    {{text}}
  </v-btn>
</template>

<script>
export default {
  name: "ButtonText.vue",
  props: {
    text:{
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>