<template>
  <v-container>
    <v-row justify="center" class="mt-5">
      <v-col cols="10" lg="6" md="8">
        <v-form @submit="onSubmit">
          <h1 class="text-center pink--text white--text display-2 mb-2">
            Edit {{ this.item.name }}
          </h1>
          <v-row>
            <v-col class="text-center">
              <v-row>
                <v-col>
                  <v-text-field label="Name" v-model="item.name"></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-textarea
                    label="Description"
                    v-model="item.description"
                    clear-icon="mdi-close"
                    clearable
                    counter
                    auto-grow
                    row-height="1"
                  ></v-textarea>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="6">
                  <v-text-field
                    label="Stocks"
                    v-model="item.stock"
                    type="number"
                    min="0"
                  ></v-text-field>
                </v-col>

                <v-col cols="6">
                  <v-text-field
                    label="Price"
                    v-model="item.price"
                    prefix="$"
                    type="number"
                    min="0"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-btn color="warning" large @click="clear">Clear</v-btn>
                </v-col>
                <v-col>
                  <v-btn type="submit" color="green" large dark
                    >Edit Item</v-btn
                  >
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';
import db from '@/firebase/init';

export default {
  name: 'EditItem',
  data() {
    return {
      item: {
        name: '',
        description: '',
        stock: '',
        price: ''
      }
    };
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault();
      const { name, description, stock, price } = this.item;
      await db
        .collection('stocks')
        .doc(this.$route.params.id)
        .update({
          name: name,
          description: description,
          stock: stock,
          price: price
        })
        .then(() => this.$router.push({ name: 'Index' }));
    },
    clear() {
      this.item = {
        name: '',
        description: '',
        stock: '',
        price: ''
      };
    },
    ...mapActions(['updateItem'])
  },
  created() {
    db.collection('stocks')
      .doc(this.$route.params.id)
      .get()
      .then(doc => {
        const { name, description, stock, price } = doc.data();
        this.item.name = name;
        this.item.description = description;
        this.item.stock = stock;
        this.item.price = price;
        this.id = doc.id;
      });
  }
};
</script>
