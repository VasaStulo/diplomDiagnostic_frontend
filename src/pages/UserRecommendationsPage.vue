<template>
  <div class="recommendation">
    <h2 class="title_res mb-6">Рекомендации</h2>
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
          <td class="text-left">
            <span v-html="item.recomendation"/>.
            <a
                v-if="item.link"
                target="_blank"
                :href="item.link">
              Подробнее...
            </a>
          </td>
          <td class="text-left">{{ item.growpoint }}</td>
          <td class="text-left">{{ item.typeOfDiagnostic }}</td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
    <div class="d-flex flex-column flex-md-row mt-8">
      <ButtonMain text="Подробнее о точках роста" type="second" link= "" class="mt-2"/>
      <ButtonMain text="Скачать файл" class="mt-2 ml-md-4" />
    </div>
  </div>
</template>

<script>


import ButtonMain from "@/components/ButtonMain";
import {mapGetters} from "vuex";
export default {
  name: "UserRecommendationsPage",
  components: {ButtonMain},
  computed: {
    ...mapGetters('user',['recommendations']),
  },
}
</script>

<style scoped lang="scss">
.recommendation{
  padding: 40px 120px;
  text-align: left;
  @media(max-width: 1230px) {
    padding: 40px 20px;
  }
  :deep(.v-data-table__wrapper){
    background: rgba(255, 255, 255, 0.52);
    box-shadow: 0 25px 80px rgba(0, 0, 0, 0.15);
    border-radius: 20px 0 0 20px;
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