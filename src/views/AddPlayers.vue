<script>
export default {
    mounted() {},
    data(){
        return {
            playerCount: 0,
            inputError: false,
        }
    },
    methods: {
        onSubmitPlayer() {
            if (this.playerCount < this.playerAmount) {
                // get player name
                const playerNameInput = document.querySelector('#enterPlayerName');
                const playerName = playerNameInput.value;

                // if input value is not empty push player name to array, else put out an error
                if (playerName != '') {
                    this.playerList.push(playerName);
                    playerNameInput.value = '';
                    this.inputError = false;
                    this.playerCount++;
                } else {
                    this.inputError = true;
                }
            }
        },
    }
}
</script>

<template>
    <div v-if="this.playerCount < this.playerAmount" class="add-players">
        <div class="text-wrapper">
            <h1>Hello Player... </h1>
            <p>Please enter your name:</p>
        </div>
        <form method="post" @submit.prevent="onSubmitPlayer">
            <p v-if="this.inputError === true" class="error error-input">Input Field can not be empty!</p>
            <input class="form-control" type="text" name="name" id="enterPlayerName">
            <button class="btn btn-primary btn-submit-player" type="submit">Register Name</button>
        </form>
    </div>

    <div v-else class="add-players">
        <div class="text-wrapper">
            <h1>All Players added successfully</h1>
            <p>To move forward just press the next button!</p>
        </div>
        <RouterLink to="/activity" class="btn btn-primary btn-next">Start</RouterLink>
    </div>
</template>

<style lang="scss">
@import "@/styles/addPlayer.scss";
</style>
