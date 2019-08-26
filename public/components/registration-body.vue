<template>
    <div>
        <p>Rejestracja!</p>
        <button v-on:click="registration(value)">Zarejestruj się</button>
    </div>
</template>

<script>
    module.exports = {
        props: ['value'],
        methods: {
            registration(value) {
                this.$emit('update', !value);
            }
        }
    }
</script>

<style scoped>
</style>