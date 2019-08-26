<template>
    <div>
        <div v-if="!done">
            <registration-body :value="done" @update="updateValue"></registration-body>
        </div>
        <div v-else>
            <confirm></confirm>
        </div>
    </div>
</template>

<script>
    module.exports = {
        data() {
            return { done: false }
        },
        methods: {
            updateValue(value) {
                this.done = value
            }
        }
    }
</script>

<style scoped>
</style>