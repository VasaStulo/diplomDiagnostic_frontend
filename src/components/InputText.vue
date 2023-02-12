<template>
    <v-text-field
        :counter="10"
        :placeholder="placeholder"
        required
    ></v-text-field>
</template>
<script>
export default {
  name: 'InputText',
  props:{
    placeholder:{
      type: String,
      required: true
    }
  }
}
</script>
<style scoped lang="scss">
.v-text-field{
width: 325px;
}
</style>