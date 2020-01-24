import Vue from 'vue';
import Vuex from 'vuex';
import db from '@/firebase/init';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tires: []
  },
  getters: {
    allTires: state => state.tires
  },
  mutations: {
    newItem: (state, item) => state.tires.unshift(item),
    removeItem: (state, id) =>
      (state.tires = state.tires.filter(item => item.id != id)),
    updateItem: (state, item) =>
      (state.tires = state.tires.map(i => (i.id === item.id ? item : i))),
    reset: state => (state.tires = [])
  },
  actions: {
    async getItems({ commit }) {
      await db.collection('stocks').onSnapshot(snapshot => {
        snapshot.docChanges().forEach(docChange => {
          const item = docChange.doc.data();
          item.id = docChange.doc.id;

          if (docChange.type === 'added') {
            commit('newItem', item);
          } else if (docChange.type === 'removed') {
            commit('removeItem', item.id);
          } else if (docChange.type === 'modified') {
            commit('updateItem', item);
          }
        });
      });
    },
    async addItem({ commit }, item) {
      await db.collection('stocks').add(item);
      commit('newItem', item);
    },
    async deleteItem({ commit }, id) {
      await db
        .collection('stocks')
        .doc(id)
        .delete();
      commit('removeItem', id);
    },
    reset() {
      this.commit('reset');
    }
  },
  modules: {}
});
