<template>
  <v-checkbox
      @change="$emit('change', $event)"
      depressed
      color="#5E4D46"
      hide-details
      :class="getClasses"
      :ripple="false">
    <template #label>
      <div class="label">
        {{label}}
      </div>
    </template>
  </v-checkbox>

</template>

<script>
export default {
  name: "CheckboxMain",
  props: {
    label:{
      type: String,
      required: true
    },
  },
  computed: {
    getClasses: function () {
      return [
        'checkbox-main',
      ];
    },
  },
}
</script>

<style scoped lang="scss">
@import '../scss/colors.scss';
.checkbox-main{
 .label{
   margin-left: 10px;
   font-weight: 500;
   font-size: 20px;
   line-height: 24px;
   color: #fff;
 }
}
</style>