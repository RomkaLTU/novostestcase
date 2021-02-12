<template>
    <div class="max-w-800px mx-auto px-4">
        <div class="flex flex-col lg:flex-row">
            <div class="flex-1">
                <list
                    @items-changed="setFromA"
                    :items="$store.state.list_a" />
            </div>
            <div class="flex-none lg:w-40px flex flex-row lg:flex-col justify-center items-center space-x-2 lg:space-x-0 lg:space-y-1 my-4 lg:my-0">
                <button class="transform rotate-90 lg:rotate-0 bg-gray-200 hover:bg-gray-300 p-2 rounded-md" @click.prevent="moveAllFromA">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                </button>
                <button class="transform rotate-90 lg:rotate-0 bg-green-200 hover:bg-green-300 p-2 rounded-md" @click.prevent="moveFromA">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                </button>
                <button class="transform rotate-90 lg:rotate-0 bg-green-200 hover:bg-green-300 p-2 rounded-md" @click.prevent="moveFromB">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                </button>
                <button class="transform rotate-90 lg:rotate-0 bg-gray-200 hover:bg-gray-300 p-2 rounded-md" @click.prevent="moveAllFromB">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
            <div class="flex-1">
                <list @items-changed="setFromB" :items="$store.state.list_b" />
            </div>
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