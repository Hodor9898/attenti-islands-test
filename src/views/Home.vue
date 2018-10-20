<template>
  <div class="home">
    <h1>Please enter bitmap size:</h1>

    <div class="row mb-2">
      <div class="col text-center">
        <input class="form-control" type="text" v-model="size"/>
      </div>
    </div>

    <div class="row mb-1">
      <div class="col text-center">
        <button class="btn btn-primary" @click="randomize()"> Randomize </button>
      </div>
    </div>

    <div class="row">
      <div class="col text-center">
        <button class="btn btn-primary" @click="bonusDraw()"> Bonus Draw </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
    private size: string = '';

    randomize() {
      if(!this.size.match(/^[0-9]*[x][0-9]*$/g)) return alert('Please enter the matrix size with the format 100x100');

      let dim = this.initMatrix();

      let randomMatrix: number[][] = [];

      for(let i = 0; i < dim.rows; i ++) {
          randomMatrix.push([]);

          for(let j = 0; j < dim.cols; j++) {
              randomMatrix[i].push(Math.round(Math.random()))
          }
      }

      this.$store.commit('updateMatrix', randomMatrix);
      this.$router.push('preview')
    }

    bonusDraw() {
        if(!this.size.match(/^[0-9]*[x][0-9]*$/g)) return alert('Please enter the matrix size with the format 100x100');

        let dim = this.initMatrix();

        let emptyMatrix: number[][] = [];

        for(let i = 0; i < dim.rows; i ++) {
            emptyMatrix.push([]);

            for(let j = 0; j < dim.cols; j++) {
                emptyMatrix[i].push(0)
            }
        }

        this.$store.commit('updateMatrix', emptyMatrix);
        this.$router.push('bonus')
    }

    initMatrix() {
        const dimRows: number = parseInt(this.size.split('x')[0]);
        const dimCols: number = parseInt(this.size.split('x')[1]);

        const dimensions = {
            rows: dimRows,
            cols: dimCols
        };

        this.$store.commit('updateMatrixDimensions', dimensions);

        return dimensions;
    }
}
</script>
