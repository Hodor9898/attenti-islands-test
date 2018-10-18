<template>
    <div class="solution">
        <Matrix></Matrix>

        <label>There are <b>{{ numberOfIslands }}</b> islands</label>

        <div class="row">
            <div class="col text-center">
                <button class="btn btn-primary" @click="reset">Reset!</button>
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
        },
    })
    export default class Solution extends Vue {
        get numberOfIslands() {
            return this.$store.getters.numberOfIslands;
        }

        reset() {
            this.$router.push('/');
        }
    }
</script>
