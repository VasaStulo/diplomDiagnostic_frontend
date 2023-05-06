<template>
  <v-btn
      :ripple="false"
      class="ma-1"
      color="grey"
      @click="$emit('click')"
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