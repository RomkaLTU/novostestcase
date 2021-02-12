<template>
    <div>
        <div>
            <input type="search" placeholder="Start typing..." class="p-1 text-sm border border-gray-200 w-full">
        </div>
        <div class="border border-gray-200 mt-4 min-h-200px p-1">
            <ul class="list flex flex-col space-y-1">
                <li
                    class="list-item text-left bg-gray-200 hover:bg-gray-300 p-1 text-sm cursor-pointer"
                    :class="{'bg-gray-300':selected_items.includes(item)}"
                    @click="toggleItem(item)"
                    v-for="(item,index) in items"
                    :key="`index_${index}`">{{ item }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { EventBus } from '../event-bus.js';

export default {
    name: 'list',

    props: ['items'],

    data() {
        return {
            selected_items: [],
        }
    },

    watch: {
        selected_items(items) {
            this.$emit('items-changed', items);
        }
    },

    mounted() {
        EventBus.$on('items-moved', () => this.selected_items = []);
    },

    methods: {
        toggleItem(item) {
            if(!this.selected_items.includes(item)) {

                this.selected_items.push(item);

            } else {
                const itemIndex = this.selected_items.indexOf(item);

                if (itemIndex !== -1) {
                    this.selected_items.splice(itemIndex, 1);
                }
            }
        },
    },
}
</script>
