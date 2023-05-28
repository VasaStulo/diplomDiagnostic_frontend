<template>
  <div class="wrapper">
    <h1 class="title_select">Выберите диагностику</h1>
    <div class="card_diagnostic">
      <div class="card_one" @click="$router.push('/diagnostic/standard')">
        <div class="text_card">{{textItems[0]}}</div>
      </div>
      <div class="card_two ml-7" @click="$router.push('/diagnostic/dppsh')">
        <div class="text_card">{{textItems[1]}}</div>
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
  padding: 10px 10px 50px;
}

.title_select{
  font-size: 36px;
  font-weight: 500;
  text-align: center;
}
.card_diagnostic{
  padding-top: 30px;
  display: flex;
  justify-content: center;
}

.text_card{
  font-size: 18px;
  position: absolute;
  top: 300px;
  @media(max-width: 800px){
    top: 250px;
    font-size: 16px;
  }
  @media(max-width: 620px) {
    top: 180px;
    font-size: 14px;
  }
}

.card_one, .card_two{
  cursor: pointer;
  display: flex;
  position: relative;
  width: 455px;
  height: 420px;
  padding: 30px 30px 0;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  &:hover{
    box-shadow: 0 25px 80px rgba(0, 0, 0, 0.15);
   }
  @media(max-width: 800px){
    height: 360px;
  }
  @media(max-width: 620px){
    height: 300px;
  }
}

.card_one{
  background: #fff url('../assets/img/card_1.png') no-repeat;
  background-origin: content-box;
  background-size: contain;
}

.card_two{
  background: #fff url('../assets/img/card_2.png') no-repeat;
  background-origin: content-box;
  background-size: contain;
}
</style>