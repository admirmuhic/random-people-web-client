import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        filteredPeople: [],
    },

    getters: {},

    mutations: {
        /**
         * Use this function to fill the filteredPeople list with search data 
         * @param {*} state State
         * @param {*} payload A list of people
         */
        filterPeople(state, payload) {
            state.filteredPeople = [];
            payload.forEach(element => {
                state.filteredPeople.push(element);
            });
        }
    }
});