<template>
  <v-app id="inspire">
    <v-navigation-drawer 
      v-model="drawer"
      app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Vue.js
          </v-list-item-title>
          <v-list-item-subtitle>
            Lista de Tarefas
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to='item.to'
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      prominent
      color="#6A76AB"
      dark
      src="../public/img/bg-home.png"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon 
          @click="drawer = !drawer">
      </v-app-bar-nav-icon>

      <v-col
      cols="11">
        <v-text-field
            v-model="$store.state.imput"
            label="Add Notion"
            outlined
            clearable
            @keyup.enter="Addnotion"
        ></v-text-field>
      </v-col>
    </v-app-bar>

    <v-main>

      <router-view/>

    </v-main>

  </v-app>
</template>

<script>
  export default {
    data: () => ({ 
      drawer: null,
      items: [
          { title: 'Tarefas', icon: 'mdi-view-dashboard', to: '/' },
          { title: 'Sobre', icon: 'mdi-help-box', to: '/sobre' },
        ],
 }),
  }
</script>