<template>
  <v-card height="100vh" width="100wh">
    <v-row no-gutters>
      <v-col cols="4" md="2">
        <v-btn @click="overlay_user = !overlay_user">
          <v-icon>mdi-shield-account</v-icon>
          Changer mon nom d'utilisateur
        </v-btn>
      <v-overlay v-model="overlay_user" contained class="align-center justify-center">
      <v-row no-gutters>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="4" md="4">
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      </v-overlay>
      </v-col>
      <v-col cols="4" md="2">
        <v-btn @click="overlay_password = !overlay_password">
          <v-icon>mdi-lock</v-icon>
          Changer mon mot de passe
        </v-btn>
        <v-overlay v-model="overlay_password" contained class="align-center justify-center" >
      <v-row no-gutters>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="password"
            :rules="nameRules"
            label="Ancien mot de passe"
            type="password"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            label="Nouveau mot de passe"
            type="password"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      </v-overlay>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      overlay_user: false,
      overlay_password: false,
    }),
  }
</script>