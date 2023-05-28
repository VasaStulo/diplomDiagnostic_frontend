<template>
  <v-autocomplete
      :class="getClasses"
      v-model="inputValue"
      :items="items"
      :error="error"
      :error-messages="errorMessage"
      :placeholder="placeholder"
      no-data-text="Данных нет"
      clearable
      hide-selected
      item-text="name"
      item-value="id"
      :label="placeholder"
      solo
  />
</template>

<script>
export default {
  name: "SelectMain",
  props: {
    placeholder:{
      type: String,
      default: '',
    },
    value:{
      type: [String, Number],
      default: '',
    },
    items:{
      type: Array,
      default: ()=>[],
    },
    error: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
      default: 'Некорректный ввод',
    },
  },
  computed: {
    getClasses: function () {
      return [
        'select-main',
        `type-${this.type}`
      ];
    },
    inputValue:{
      get(){
        return this.value;
      },
      set(newValue){
        this.$emit('change', newValue);
      }
    }
  },
}
</script>

<style scoped lang="scss">
@import '../scss/colors.scss';
.select-main {
  ::v-deep .v-input__slot {
    box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0 !important;
  }
}
</style>