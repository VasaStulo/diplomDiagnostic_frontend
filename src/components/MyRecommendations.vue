<template>
  <div class="recommendation">
    <div class="d-flex align-center justify-center mb-6">
      <h2 class="title_res">Рекомендации</h2>
      <ButtonMain class="ml-8" text="Скачать файл" />
    </div>
    <v-simple-table
        fixed-header
        height="600px"
    >
      <template v-slot:default>
        <thead>
        <tr>
          <th class="pa-8 text-center">
            Позиция анкеты
          </th>
          <th class="text-center">
            Рекомендуемое <br> содержание ДПО
          </th>
          <th class="text-center">
            Точки роста
          </th>
          <th class="text-center">
            Тип диагностики
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="(item, index) in recommendations"
            :key="index"
        >
          <td class="text-left">{{ item.pollPosition }}</td>
          <td class="text-left" v-html="item.recomendation">
            <a
                v-if="item.link"
               :href="item.link">
                Подробнее.
            </a>
          </td>
          <td class="text-left">{{ item.growpoint }}</td>
          <td class="text-left">{{ item.typeOfDiagnostic }}</td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>


import ButtonMain from "@/components/ButtonMain";
import {mapGetters} from "vuex";
export default {
  name: "MyRecommendations",
  components: {ButtonMain},
  computed: {
    ...mapGetters('user',['recommendations']),
  },
}
</script>

<style scoped lang="scss">
.recommendation{
  max-width: 1000px;
  :deep(.v-data-table__wrapper){
    background: rgba(255, 255, 255, 0.52);
    box-shadow: 0 25px 80px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
  }
  :deep(.theme--light.v-data-table){
    background-color: transparent !important;
  }
}

.title_res{
  font-size: 36px;
  font-weight: 500;
}

th{
  font-weight: 700 !important;
  font-size: 16px !important;
  line-height: 20px !important;
  color: #000000 !important;
}
td{
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 20px;
  color: #000000 !important;
  padding: 20px 15px !important;
}
</style>