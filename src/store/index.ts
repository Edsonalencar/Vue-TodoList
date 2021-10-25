import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas: [
      {id: 1, titulo: 'Estudar', concluido: false},
      {id: 2, titulo: 'Ir ao mercado', concluido: true},
      {id: 3, titulo: 'Comprar Carne', concluido: false},
    ]
  },
  mutations: {
    Handleaddnotion(state, titulo) {
      if (titulo) {
        state.tarefas.push({
          id: new Date().getTime(),
          titulo, 
          concluido: false}),
        titulo = null
      }
    },
    Removenotion(state, id){
      state.tarefas = state.tarefas.filter(tarefa => tarefa.id !== id)
    }
  },
  actions: {
  },
  modules: {
  }
})
