<template>
  <div class="wrapper">
    <h1 class="title_select">Выберите диагностику</h1>
    <div class="card_diagnostic">
      <div class="card_one" @click="$router.push('/diagnostic/standard')">
        <img class="img_card" src="../assets/img/card_1.png">
        <p class="text_card">{{textItems[0]}}</p>
      </div>
      <div class="card_two" @click="$router.push('/diagnostic/dppsh')">
        <img class="img_card" src="../assets/img/card_2.png">
        <p class="text_card">{{textItems[1]}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectionDiagnosticPage",
  data: () => ({textItems:
        [
            'Диагностика общепедагогической профессиональной компетентности',
            'Диагностика компетентности педагога допрофессиональной педагогической подготовки'
        ] }),
}
</script>

<style lang="scss" scoped>
.wrapper{
  padding-top: 50px;
  padding-left: 150px;
  display: flex;
}

.title_select{
  font-size: 36px;
  font-weight: 500;
}
.card_diagnostic{
  padding-top: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-bottom: 50px;
}

.img_card{
  position: absolute;
  top: 30px;
  width: 395px;
}
.text_card{
  position: absolute;
  margin-top: 300px;
  font-size: 18px;


}

.card_one, .card_two{
  cursor: pointer;
  display: flex;
  position: relative;
  width: 455px;
  height: 420px;
  padding: 10px 30px 0;
  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  background-color: #fff;
  &:hover{
    box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.25);
   }
}

</style>