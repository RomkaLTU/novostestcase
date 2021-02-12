<template>
    <div>
        <div><input type="text"></div>
        <div>
            <ul class="list">
                <li
                    class="list-item"
                    :class="{active:selected_items.includes(item)}"
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

<style lang="scss" scoped>
.list {
    list-style-type: none;

    &-item {
        background-color: azure;
        margin-bottom: 0.5rem;

        &:hover {
            cursor: pointer;
        }

        &.active {
            background-color: blueviolet;
        }
    }
}
</style>