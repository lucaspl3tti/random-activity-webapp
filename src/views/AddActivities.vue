<script>
export default {
  data() {
    return {
      playerCount: 0,
      playerActivityValue: '',
      amountOfPlayers: this.playerList.length,
      activeClass: "is-active",
      hiddenClass: "d-none",
      activityCounter: 0,
      activityError: false,
      inputError: false,
      finishedAllPlayers: false,
    };
  },
  methods: {
    onSubmitActivity() {
      if (this.playerActivityValue != "") {
        // push activity into the array
        this.activities.push(this.playerActivityValue);

        // add up activity counter
        this.activityCounter++;

        // reset input field and disable error
        this.playerActivityValue = '';
        this.inputError = false;
      } else {
        // show input error
        this.inputError = true;
      }
    },
    onClickNextPlayer() {
      if (
        this.activityCounter > 1 &&
        this.playerCount < this.amountOfPlayers - 1
      ) {
        // go next player
        this.playerCount++;

        // reset activityCounter to default
        this.activityCounter = 0;

        // set error notification to default
        this.activityError = false;
      } else {
        // show error
        this.activityError = true;
      }
    },
  },
  mounted() {},
};
</script>

<template>
  <div
    v-for="(player, key) in this.playerList"
    :key="player"
    class="add-activities"
    :class="[this.playerCount == key ? activeClass : hiddenClass]"
  >
    <div class="add-player-activities">
      <div class="text-wrapper">
        <h1>Hey {{ player }}!</h1>
        <p>
          Please add your activities to the list. You need to add at least two! If your are finished, just press the "Continue with next player" button!
        </p>
      </div>
      <form method="post" @submit.prevent="onSubmitActivity">
        <p v-if="this.inputError === true" class="error error-input">
          Input field must not be empty!
        </p>
        <input
          type="text"
          class="form-control"
          :id="`enterPlayerActivity-${key}`"
          placeholder="Your activity..."
          v-model="playerActivityValue"
        />
        <button type="submit" class="btn btn-primary btn-add-activity" :class="[playerActivityValue == '' ? 'btn-disabled' : '']">
          Add Activity to the list
        </button>
      </form>
      <div class="next-player">
        <p v-if="this.activityError === true" class="error error-input">
          You need to add at least two activities!
        </p>
        <button
          class="btn btn-primary btn-next-player"
          v-show="this.activityCounter > 1 && this.playerCount < this.amountOfPlayers - 1"
          @click="onClickNextPlayer"
        >
          Continue with next Player
        </button>
        <RouterLink
            to="/get-activity"
            v-show="this.activityCounter > 1 && this.playerCount == this.amountOfPlayers - 1"
            class="btn btn-primary btn-next">
            Start the game!
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/styles/addActivities.scss";
</style>
