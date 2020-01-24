<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <h1 class="text-center pink--text white--text display-2 mb-5 mt-5">
          Dashboard
        </h1>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center">Name</th>
                <th class="text-center">Description</th>
                <th class="text-center">Stocks</th>
                <th class="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="tire in allTires" :key="tire.id">
                <td class="text-center">{{ tire.name }}</td>
                <td class="text-center">{{ tire.description }}</td>
                <td class="text-center">{{ tire.stock }}</td>
                <td class="text-center">
                  <router-link
                    :to="{ name: 'EditItem', params: { id: tire.id } }"
                  >
                    <v-icon
                      class="mt-1 pa-2 action-buttons"
                      color="green darken-1"
                      >mdi-pencil</v-icon
                    >
                  </router-link>
                  <v-icon
                    class="mt-1 pa-2 action-buttons"
                    color="red darken-1"
                    @click="deleteItem(tire.id)"
                    >mdi-delete</v-icon
                  >
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
// import AddItem from '@/components/AddItem.vue';

export default {
  name: 'Index',
  methods: {
    ...mapActions(['getItems', 'deleteItem', 'reset'])
  },
  computed: mapGetters(['allTires']),
  created() {
    this.reset();
    this.getItems();
  }
  // components: { AddItem }
};
</script>
