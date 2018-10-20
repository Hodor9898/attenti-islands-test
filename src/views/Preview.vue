<template>
    <div class="preview">

        <h1>This is the matrix that we will solve: </h1>

        <div class="row">
            <div class="mx-auto">
                <Matrix :editable="false"></Matrix>
            </div>
        </div>

        <div class="row mt-2 text-center">
            <div class="col">
                <button class="btn btn-primary" @click="solve">Solve!</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Matrix from '@/components/Matrix.vue'
    import MatrixService from '@/services/Matrix';

    @Component({
        components: {
            Matrix
        }
    })
    export default class Home extends Vue {
        solve() {
            MatrixService.numberOfIslands(
                this.$store.getters.matrix,
                this.$store.getters.matrixDimensions.rows,
                this.$store.getters.matrixDimensions.cols,
            )
                .then((count: any) => {
                    this.$store.commit('updateNumberOfIslands', count);
                    this.$router.push('solution');
                });
        }
    }
</script>
