<template>
    <div class="matrix">
        <div class="mat-r" v-for="(row, rowIdx) in matrix">
            <div class="cube" v-for="(cell, colIdx) in row" v-bind:style="{width: blockSize + 'px', height: blockSize + 'px', 'background-color': getColor(cell)}" @click="handleCubePress(rowIdx, colIdx)"></div>
        </div>
    </div>
</template>

<script lang="ts">
    const WIDTH = 500;
    const HEIGHT = 500;

    import {Component, Prop, Vue} from "vue-property-decorator";
    import MatrixService from '@/services/Matrix';

    @Component
    export default class Matrix extends Vue {
        @Prop() public editable!: boolean;

        get blockSize() {
            let x = this.$store.getters.matrixDimensions.x;
            let y = this.$store.getters.matrixDimensions.y;

            return (x > y) ? (WIDTH / x) : (HEIGHT / y);
        }

        get matrix() {
            return this.$store.getters.matrix
        }

        getColor(val: number) {
            if(MatrixService.colors[val] === undefined) {
                MatrixService.colors[val] = '#'+Math.floor(Math.random()*16777215).toString(16);
            }

            return MatrixService.colors[val];
        }

        handleCubePress(rowIdx: number, colIdx: number) {
            if(!this.editable) return;

            let mat = this.$store.getters.matrix;
            mat[rowIdx][colIdx] = mat[rowIdx][colIdx] ? 0 : 1;

            this.$store.commit('updateMatrix', mat.slice(0));
        }
    }

</script>

<style scoped>
    .mat-r:nth-child(odd) .cube {
        border-top: 1px solid #000;
        border-bottom: 1px solid #000;
    }

    .mat-r:first-child .cube {
        border-top: 1px solid #000;
    }

    .mat-r:last-child .cube {
        border-bottom: 1px solid #000;
    }

    .cube {
        float: left;
        border-right: 1px solid #000;
    }

    .cube:first-child {
        border-left: 1px solid #000;
    }
</style>

