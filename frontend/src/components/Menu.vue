<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer expand-on-hover rail>
        <v-list>
          <v-list-item
            prepend-avatar="$store.state.user.avatar"
            title="$store.state.user.name"
            subtitle="store.state.user.email"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <router-link style="text-decoration: none; color: inherit;" to="/Personal"><v-list-item prepend-icon="mdi-folder" title="Personnel" value="myfiles"></v-list-item></router-link>
          <router-link style="text-decoration: none; color: inherit;" to="/Compagnie"><v-list-item prepend-icon="mdi-account-multiple" title="{{$store.state.compagnie}}" value="shared"></v-list-item></router-link>
          <router-link style="text-decoration: none; color: inherit;" to="/Settings"><v-list-item prepend-icon="mdi-cog" title="Compte" value="starred"></v-list-item></router-link>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 100vh;">
      <slot />
      </v-main>

    </v-layout>
  </v-card>
</template>

<script>

export default {
  name: 'HelloWorld',

  data: () => ({

  }),
}
</script>
