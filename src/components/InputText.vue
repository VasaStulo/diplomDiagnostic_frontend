<template>
  <section :class="getClasses">
    <v-text-field
        :placeholder="placeholder"
        outlined
        :error="error"
        :error-messages="errorMessage"
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
    },
    error: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
      default: '',
    },
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
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
  }
}
</style>