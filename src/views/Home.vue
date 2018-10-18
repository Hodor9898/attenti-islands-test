<template>
  <div class="home">
    <h1>Please enter bitmap size:</h1>

    <div class="row mb-2">
      <div class="col text-center">
        <input class="form-control" type="number" v-model="size"/>
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
    private size: number = 0;

    randomize() {
        this.size = parseInt(this.size.toString());

        if(this.size <= 0 || isNaN(this.size)) return alert('The matrix`s size must be greater than 0');

        let dim = this.initMatrix();

      let randomMatrix: number[][] = [];

      for(let i = 0; i < dim.x; i ++) {
          randomMatrix.push([]);

          for(let j = 0; j < dim.y; j++) {
              randomMatrix[i].push(Math.round(Math.random()))
          }
      }

      this.$store.commit('updateMatrix', randomMatrix);
      this.$router.push('preview')
    }

    bonusDraw() {
        this.size = parseInt(this.size.toString());

        if(this.size <= 0 || isNaN(this.size)) return alert('The matrix`s size must be greater than 0');

        let dim = this.initMatrix();

        let emptyMatrix: number[][] = [];

        for(let i = 0; i < dim.x; i ++) {
            emptyMatrix.push([]);

            for(let j = 0; j < dim.y; j++) {
                emptyMatrix[i].push(0)
            }
        }

        this.$store.commit('updateMatrix', emptyMatrix);
        this.$router.push('bonus')
    }

    initMatrix() {
        const dimX: number = parseInt(Math.sqrt(this.size).toFixed(0));
        const dimY: number = parseInt((this.size / dimX).toFixed(0));

        const dimensions = {
            x: dimX,
            y: dimY
        };

        this.$store.commit('updateMatrixDimensions', dimensions);

        return dimensions;
    }
}
</script>
