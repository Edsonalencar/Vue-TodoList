<template>
  <div>
    <v-list-item
    :class="{'grey lighten-2':tarefa.concluido}"
    @click="tarefa.concluido = !tarefa.concluido"
    >
          <template v-slot:default="{}">
            <v-list-item-action>
              <v-checkbox :input-value="tarefa.concluido"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title 
              :class="{'text-decoration-line-through':tarefa.concluido}"
              >
                {{tarefa.titulo}}
              </v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn
              icon
              @click.stop="Headleremovenotion(tarefa.id)">
                <v-icon color="grey lighten-1">mdi-dots-vertical</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>

        <v-divider></v-divider>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Tarefa',
    props: [
      'tarefa'
      ],
    data: () => ({
    }),
    methods: {
      Headleremovenotion(id){
        this.$store.commit('Removenotion', id)
      }
    },
  })
</script>
