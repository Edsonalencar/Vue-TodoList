<template>
  <div>
    <v-list
      flat
      subheader
    >
      <v-list-item-group
        multiple
        active-class=""
      >
      <div v-for="tarefa, index in $store.state.tarefas"
      :key="index">
       <Tarefa
       :tarefa='tarefa'
       />
      </div>

      </v-list-item-group>
    </v-list>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  import Tarefa from '../components/tarefa.vue'

  export default Vue.extend({
    name: 'Tarefas',

    components: {
      Tarefa,
    },
    data() {
      return {
        imput: null,
      }
    },
    methods: {
      Addnotion() {
        if (this.imput) {
          this.$store.commit('Handleaddnotion', this.imput)
          this.imput = null
        }
      }
    },
  })
</script>
