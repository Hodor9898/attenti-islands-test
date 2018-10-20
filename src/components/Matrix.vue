<template>
    <div class="clearfix" id="matrix" v-on:click="handleMatrixClick">
        <canvas ref="board" width="500" height="500"></canvas>
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

        getColor(val: number) {
            if(MatrixService.colors[val] === undefined) {
                MatrixService.colors[val] = '#'+Math.floor(Math.random()*16777215).toString(16);
            }

            return MatrixService.colors[val];
        }

        get cellWidth() {
            return WIDTH / this.$store.getters.matrixDimensions.cols;
        }

        get cellHeight() {
            return HEIGHT / this.$store.getters.matrixDimensions.rows;
        }

        handleMatrixClick(event: any) {
            if(!this.editable) return;

            const can: any = this.$refs.board;
            const ctx = can.getContext("2d");

            const x = event.clientX - event.target.offsetLeft;
            const y = event.clientY - event.target.offsetTop;

            let col = Math.floor(x / this.cellWidth);
            let row = Math.floor(y / this.cellHeight);

            this.$store.getters.matrix[row][col] = this.$store.getters.matrix[row][col] === 1 ? 0 : 1;

            ctx.fillStyle = this.getColor(this.$store.getters.matrix[row][col]);
            ctx.fillRect(col * this.cellWidth , row * this.cellHeight, this.cellWidth, this.cellHeight);

            ctx.strokeStyle = '#000';
            ctx.strokeRect(col * this.cellWidth , row * this.cellHeight, this.cellWidth, this.cellHeight);

            ctx.fill();
        }

        mounted() {
            let can: any = this.$refs.board;
            let ctx = can.getContext("2d");

            const mat = this.$store.getters.matrix.slice(0);
            const rows = this.$store.getters.matrixDimensions.rows;
            const cols = this.$store.getters.matrixDimensions.cols;

            const cellWidth = this.cellWidth;
            const cellHeight = this.cellHeight;

            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    if(mat[i][j]) {
                        ctx.fillStyle = this.getColor(mat[i][j]);
                        ctx.fillRect(j * cellWidth , i * cellHeight, cellWidth, cellHeight);
                    }

                    ctx.strokeStyle = this.getColor(mat[i][j] || 1);
                    ctx.strokeRect(j * cellWidth, i* cellHeight, cellWidth, cellHeight);
                }
            }

            ctx.fill();
        }
    }

</script>

<style>
</style>

