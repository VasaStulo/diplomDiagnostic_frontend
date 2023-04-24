<template>
  <div class="wrapper">
    <div class="text_method">
      <div class="text_method_main">
        <div>
          <h1 class="title_diag">Особенности методики диагностики</h1>
          <p class="text_diag">{{titleItems[0]}}</p>
          <h1 class="title_diag">Как пройти диагностику</h1>
          <p class="text_diag">{{titleItems[1]}}</p>
          <h1 class="title_diag">Что делать после</h1>
          <p class="text_diag">{{titleItems[2]}}</p>
          <ButtonMain class="btn_start" @click="$router.push('/diagnostic/selection')" text="ПЕРЕЙТИ К ДИАГНОСТИКЕ"/>
        </div>
      </div>
    </div>
    <div class="img_diag">
      <img src="../assets/img/hand.jpg">
    </div>
  </div>
</template>

<script>
import ButtonMain from "@/components/ButtonMain";
export default {
  name: "DescriptionDiagnosticPage.vue",
  data: () => ({titleItems:
    [
      'Данная диагностическая методика представляет собой самооценивание педагогом своей профессиональной компетентности. Ключевая идея основывается на позициях экзистенциализма, а именно: человек определяется исключительно его собственными свободными решениями. То есть Ваши поступки определяют Вашу природу, каждый Ваш выбор свободен, а Вы несёте за него полную ответственность. Данная методика не является проверкой знаний и умений, не используется в целях контроля, она предназначена для понимания педагогом своих профессиональных потребностей и осознания профессиональных дефицитов',
      'Вам будут последовательно предлагаться 45 утверждений. Если Вы согласны с утверждением, то нажимаете «согласен», если Вы сомневаетесь или не понимаете, о чем идет речь, нажимаете «не согласен». По результатам самооценивания Вам будут предложены рекомендации по содержанию Вашего дополнительного профессионального образования и рекомендации по конструированию индивидуального образовательного маршрута',
      'Вы сможете сохранить рекомендации и cо своими результатами обратиться к тьютору, который поможет Вам составить индивидуальный план профессионального развития, выбрать необходимые образовательные мероприятия. Записаться к тьютору'
 ] }),
  components: {ButtonMain},
}
</script>

<style scoped>
.wrapper{
  padding-left: 20px;
  padding-top: 150px;
  padding-bottom: 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.title_diag{
  font-weight: 500;
  font-size: 36px;
  padding-right: 20px;
}

.img_diag{
  width: 500px;
  height: 660px;
  filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.15));
  padding-left: 80px;
  padding-top: 60px;
}

.btn_start{
  margin-top: 30px
}

.text_method_main{
  background: url('../assets/img/ellipse_diag.svg') no-repeat;
  padding: 40px 0 0 70px;
}
</style>