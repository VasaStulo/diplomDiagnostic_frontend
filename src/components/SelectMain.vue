<template>
  <v-autocomplete
      :class="getClasses"
      v-model="inputValue"
      :items="items"
      :placeholder="placeholder"
      no-data-text="Данных нет"
      clearable
      hide-details
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
      type: String,
      default: '',
    },
    items:{
      type: Array,
      default: ()=>[],
    }
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
    box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.05) !important;
  }
}
</style>