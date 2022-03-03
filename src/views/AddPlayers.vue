<script>
export default {
  mounted() {},
  data() {
    return {
      playerCount: 0,
      playerAmountValue: '',
      playerName: '',
      inputError: false,
      amountError: false,
      addPlayers: false,
    };
  },
  methods: {
    onSubmitAmount() {
      if (this.playerAmountValue != "" && this.playerAmountValue > 1) {
        this.playerAmount = this.playerAmountValue;
        this.addPlayers = true;
      } else {
        this.amountError = true;
      }
    },
    onSubmitPlayer() {
      if (this.playerCount < this.playerAmount) {
        if (this.playerName != '') {
          // push playerName to playerList array
          this.playerList.push(this.playerName);

          // reset input field and disable error
          this.playerName = '';
          this.inputError = false;

          // add up playerCount
          this.playerCount++;
        } else {
          // show input error
          this.inputError = true;
        }
      }
    },
  },
};
</script>

<template>
  <div
    v-if="this.playerAmount == 0 && this.addPlayers == false"
    class="add-players"
  >
    <div class="player-amount">
      <div class="text-wrapper">
        <h1>Player Amount</h1>
        <p>
          Please add the amount of players, who will participate in the game:
        </p>
      </div>
      <form method="post" @submit.prevent="onSubmitAmount">
        <p v-if="this.amountError === true" class="error error-input">
          You need at least two players!
        </p>
        <input
          type="number"
          class="form-control"
          name="playerAmount"
          id="enterPlayerAmount"
          placeholder="2"
          v-model="playerAmountValue"
        />
        <button type="submit" class="btn btn-primary btn-add-amount" :class="[playerAmountValue < 2 ? 'btn-disabled' : '']">
          Add Player Amount
        </button>
      </form>
    </div>
  </div>

  <div
    v-else-if="this.playerAmount > 0 && this.addPlayers == true"
    class="add-players"
  >
    <div v-if="this.playerCount < this.playerAmount" class="add-players">
      <div class="text-wrapper">
        <h1>Hello Player {{ this.playerCount + 1 }}</h1>
        <p>Please enter your name:</p>
      </div>
      <form method="post" @submit.prevent="onSubmitPlayer">
        <p v-if="this.inputError === true" class="error error-input">
          Input Field can not be empty!
        </p>
        <input
          class="form-control"
          type="text"
          name="name"
          id="enterPlayerName"
          placeholder="Enter your name..."
          v-model="playerName"
        />
        <button class="btn btn-primary btn-submit-player" :class="[playerName == '' ? 'btn-disabled' : '']" type="submit">
          Register Player
        </button>
      </form>
    </div>

    <div v-else class="add-players">
      <div class="text-wrapper">
        <h1>All Players added successfully</h1>
        <p>In the next step every player can add their own activities. Just press the "next" button</p>
      </div>
      <RouterLink to="/add-activities" class="btn btn-primary btn-next"
        >Next</RouterLink
      >
    </div>
  </div>
</template>

<style lang="scss">
@import "@/styles/addPlayer.scss";
</style>
