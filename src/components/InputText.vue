<template>
  <section :class="getClasses">
    <v-text-field
        :placeholder="placeholder"
        outlined
        v-model="inputValue"
    />
  </section>
</template>
<script>
export default {
  name: 'InputText',
  props:{
    placeholder:{
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 'M'
    },
    value:{
      type: String,
      default: '',
    }
  },
  computed: {
    getClasses: function() {
      return [
          'main-input',
          `size-${this.size}`
      ];
    },
    inputValue:{
      get(){
        return this.value;
      },
      set(newValue){
        this.inputSet(newValue);
      }
    }
  },
  methods: {
    inputSet(newValue){
      this.$emit('input',newValue);
    }
  }

}
</script>
<style scoped lang="scss">
//контроль над высотой инпутов
.main-input {
  &.size {
    &-S {
      &::v-deep .v-input__slot {
        min-height: 45px !important;
      }
    }

    &-M {
      &::v-deep .v-input__slot {
        min-height: 51px !important;
      }
    }
  }
  .v-input {
    &::v-deep fieldset {
      border-style: none !important;
      box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15);
    }
  }
}
</style>