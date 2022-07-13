<template>
  <v-content fill-height>
    <Menu>
      <slot />
    </Menu>
      <v-footer color="grey" fixed>
      <Footer>
      </Footer>
    </v-footer>
   
    
  </v-content>
</template>

<script>
import Menu from '@/components/Menu.vue';
import Footer from '@/components/Footer.vue';

export default ({
  name: 'DefaultLayout',

  components: {
    Menu,
    Footer,
  },
});

</script>
