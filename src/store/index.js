import Vue from 'vue'
import Vuex from 'vuex'
import { EventBus } from '../event-bus.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list_a: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ],
    list_b: [],
    selected_a: [],
    selected_b: [],
  },
  mutations: {
    moveAllFromA(state) {
      if(state.list_a.length) {
        state.list_b = [...state.list_a, ...state.list_b];
        EventBus.$emit('items-moved');
        state.list_a = [];
      }
    },
    moveAllFromB(state) {
      if(state.list_b.length) {
        state.list_a = state.list_b;
        EventBus.$emit('items-moved');
        state.list_b = [];
      }
    },
    moveToSelectedA(state, payload) {
      state.selected_a = payload
    },
    moveToSelectedB(state, payload) {
      state.selected_b = payload
    },
    moveSelectedA(state) {
      if(state.selected_a.length) {
        state.list_b = [...new Set([...state.list_b, ...state.selected_a])];
        state.list_a = state.list_a.filter(item => !state.selected_a.includes(item));
        EventBus.$emit('items-moved');
        state.selected_a = [];
        state.selected_b = [];
      }
    },
    moveSelectedB(state) {
      if(state.selected_b.length) {
        state.list_a = [...new Set([...state.list_a, ...state.selected_b])];
        state.list_b = state.list_b.filter(item => !state.selected_b.includes(item));
        EventBus.$emit('items-moved');
        state.selected_a = [];
        state.selected_b = [];
      }
    },
  },
  actions: {
  },
  modules: {
  }
})
