<template>
    <q-list>
      <q-item-label class="list_header" header>
        <q-img src="../assets/game-logo.png" class="center"></q-img>
      </q-item-label>
    <q-card class="my-card q-pa-md q-ma-md">
      <img src="https://media.discordapp.net/attachments/1084917962487631913/1085265393574236200/the_apple_divided_into_two_parts_one_part_of_the_ap_f213ffcc-4c26-422d-b5b1-7ec2161f36a8.png?width=738&height=422">
      <q-list class="list_background">
        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="primary" name="keyboard_arrow_right" />
          </q-item-section>
          <q-item-section>
            <router-link to="game-1" class="link">
                <q-item-label>Соедини половинки</q-item-label>
                <q-item-label caption>Перейти</q-item-label>
            </router-link>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
    <q-card class="my-card q-pa-md q-ma-md">
      <img src="https://media.discordapp.net/attachments/1084917962487631913/1084921429163769856/sfsfadfadf_background_for_header_in_site_puzzles_games_and_brai_72671b22-88ce-4dc8-a89b-e7247e292af7.png?width=738&height=422">
      <q-list class="list_background">
        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="primary" name="keyboard_arrow_right" />
          </q-item-section>
          <q-item-section>
            <router-link to="game-2" class="link">
                <q-item-label>Найди правильный ответ
                </q-item-label>
                <q-item-label caption>Перейти</q-item-label>
            </router-link>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>

    <q-card class="my-card q-pa-md q-ma-md">
      <img src="https://media.discordapp.net/ephemeral-attachments/1084917962487631913/1087013080518639696/grid_0.webp?width=732&height=422">
      <q-list class="list_background">
        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="primary" name="keyboard_arrow_right" />
          </q-item-section>
          <q-item-section>
            <router-link to="game-3" class="link">
                <q-item-label>Игра на запоминание
                </q-item-label>
                <q-item-label caption>Перейти</q-item-label>
            </router-link>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>

    </q-list>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'NavList',
    setup() {
      const shape1 = ref('line')
      const shape2 = ref('line')
      const shape3 = ref('line')
      return{
        shape1,
        shape2,
        shape3
      }
    },
})
</script>
<style>
::-webkit-scrollbar{
  width: 5px;
}

::-webkit-scrollbar-track{
  background-color: black;
}

::-webkit-scrollbar-thumb{
  background-color: #000000;
  border-radius: 8px;
}

.q-drawer__content {
  background: url(../assets/fon-for-list.png);
  background-size: cover;
  background-position: center;
}

.list_header {
  background: #079270;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
