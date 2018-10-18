<template>
    <div class="bonus">
        <h1>Please click on the cells you would like to draw...</h1>

        <div class="row">
            <div class="mx-auto">
                <Matrix :editable="true"></Matrix>
            </div>
        </div>

        <div class="row mt-2 text-center">
            <div class="col">
                <button class="btn btn-primary" @click="done">Done!</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Matrix from '@/components/Matrix.vue'

    @Component({
        components: {
            Matrix
        }
    })
    export default class Bonus extends Vue {
        done() {
            this.$router.push('preview');
        }
    }
</script>
