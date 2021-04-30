<template>
    <div class="flex items-center mr-4 mb-4">
        <label class="my-checkbox-label flex items-center cursor-pointer text-xl w-full">
            <input :value="value.id" :type="type" :name="name" class="hidden my-checkbox" :checked="isChecked"
                   v-on:change="updateInput"/>
            <span :class="`w-6 h-6 inline-block mr-2 ${radioOrCheckBoxClass} ${checkedClass} border border-black flex-no-shrink`"></span>
            <slot></slot>
        </label>
    </div>
</template>

<script>

import {some, remove} from 'lodash-es';
export default {
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        checked: {
        },
        value: {
            type: Object
        },
        name: {
            type: String
        },
        type: {
            type: String,
            default: 'radio'
        },
    },
    computed: {
        radioOrCheckBoxClass(){
            return (this.type == 'radio') ? 'rounded-full' : '';
        },
        checkedClass() {
            return this.isChecked ? 'checked' : '';
        },
        isChecked() {
            if (this.checked instanceof Array) {
                return some(this.checked, ['id', this.value.id])
            }
            return this.checked?.id === this.value.id
        }
    },
    methods: {
        updateInput(event) {
            let isChecked = event.target.checked
            let thisValue = this.value;
            if (this.checked instanceof Array) {
                let newValue = [...this.checked]
                if (isChecked) {
                    newValue.push(thisValue)
                } else {
                    remove(newValue, el => el.id === thisValue.id)
                }
                this.$emit('update:checked', newValue)
            } else {
                this.$emit('update:checked', isChecked ? thisValue : null)
            }
        }
    }
}
</script>

<style scoped>

.my-checkbox + .my-checkbox-label span {
    transition: background .2s,
    transform .2s;
}

.my-checkbox + .my-checkbox-label span:hover,
.my-checkbox + .my-checkbox-label:hover span {
    transform: scale(1.2);
}

.my-checkbox-label span.checked,
.my-checkbox-label span.checked {
    box-shadow: 0px 0px 0px 6px black inset;
    background: white;
}

.my-checkbox-label.checked {
    color: black;
}
</style>
