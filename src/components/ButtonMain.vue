<template>
  <v-btn @click="$emit('click', $event)" depressed :class="getClasses" :ripple="false">
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
    },
    type:{
      type: String,
      default: 'primary',
    }
  },
  computed: {
    getClasses: function () {
      return [
        'btn-main',
        `type-${this.type}`
      ];
    },
  },
}
</script>

<style scoped lang="scss">
@import '../scss/colors.scss';
.btn-main{
  font-weight: 700  !important;
  padding: 15px 15px !important;
  border-radius: 10px;
  &.type{
    &-primary{
        background-color: map-get($yellow, 'base') !important;
        color: map-get($blue,'bright') !important;
    }
    &-secondary{
      background: transparent !important;
      border: 1px map-get($yellow, 'base') solid ;
      color: white;
    }
  }
}
</style>