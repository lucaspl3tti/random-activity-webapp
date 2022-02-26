<script setup>
defineProps({
    msg: {
        type: String,
        required: false
    }
});
</script>

<template>
    <div class="start-screen">
        <div class="text-wrapper">
            <h1>random activity app</h1>
            <p>Create an activity list together with your friends for when y'all are tripping or rolling.</p>
        </div>

        <div class="start-game">
            <RouterLink to="/start" class="btn btn-primary btn-start" id="startGameButton">Start</RouterLink>
        </div>
    </div>
</template>

<style lang="scss">
@import "@/styles/startGame.scss";
</style>
