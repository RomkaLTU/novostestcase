<template>
    <div>
        <div class="">
            <list @items-changed="setFromA" :items="$store.state.list_a" />
            <div>
                <button @click.prevent="moveFromA">Prideti pasirinktus is A</button>
                <button @click.prevent="moveAllFromA">Prideti visus A</button>
                <button @click.prevent="moveFromB">Prideti pasirinktus is B</button>
                <button @click.prevent="moveAllFromB">Prideti visus B</button>
            </div>
            <list @items-changed="setFromB" :items="$store.state.list_b" />
        </div>
    </div>
</template>

<script>
import List from './List.vue'

export default {
    name: 'lists',

    data() {
        return {
            list_a: [],
            list_b: [],
        }
    },

    components: {
        List,
    },

    mounted() {
        this.setLists();
    },

    methods: {
        moveAllFromA() {
            this.$store.commit('moveAllFromA');
            this.setLists();
        },
        moveAllFromB() {
            this.$store.commit('moveAllFromB');
            this.setLists();
        },


        setFromA(items) {
            this.$store.commit('moveToSelectedA', items);
        },
        setFromB(items) {
            this.$store.commit('moveToSelectedB', items);
        },

        moveFromA() {
            this.$store.commit('moveSelectedA');
            this.setLists();
        },
        moveFromB() {
            this.$store.commit('moveSelectedB');
            this.setLists();
        },

        setLists() {
            this.list_a = this.$store.state.list_a;
            this.list_b = this.$store.state.list_b;
        }
    },
}
</script>