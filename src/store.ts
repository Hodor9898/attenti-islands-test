import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        matrix: [],
        matrixDimensions: {
            x: 0,
            y: 0,
        },
        numberOfIslands: 0
    },
    mutations: {
        updateMatrix(state, matrix) { state.matrix = matrix;  },
        updateMatrixDimensions(state, matrixDimensions) { state.matrixDimensions = matrixDimensions; },
        updateNumberOfIslands(state, numberOfIslands) { state.numberOfIslands = numberOfIslands; },
    },
    actions: {

    },
    getters: {
        matrixDimensions: (state) => { return state.matrixDimensions; },
        matrix: (state) => { return state.matrix; },
        numberOfIslands: (state) => { return state.numberOfIslands; },
    },
});
