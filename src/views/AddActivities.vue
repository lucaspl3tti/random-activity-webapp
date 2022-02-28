<script>
export default {
  data() {
    return {
      playerCount: 0,
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
      // get activity input value
      const activityInput = document.querySelector(
        "#enterPlayerActivity-" + this.playerCount
      );
      const activityInputValue = activityInput.value;

      if (activityInputValue != "") {
        // push activity into the array
        this.activities.push(activityInputValue);

        // add up activity counter
        this.activityCounter++;

        // reset input field and disable error
        activityInput.value = "";
        this.inputError = false;
      } else {
        // show input error
        this.inputError = true;
      }

      console.log(this.activityCounter);
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
      } else if (
        this.activityCounter > 1 &&
        this.playerCount == this.amountOfPlayers - 1
      ) {
        this.finishedAllPlayers = true;
        this.playerCount = -1;
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
    :key="key"
    class="add-activities"
    :class="[this.playerCount == key ? activeClass : hiddenClass]"
  >
    <div class="add-player-activities">
      <div class="text-wrapper">
        <h1>Hey {{ player }}!</h1>
        <p>
          Please add your activities to the list. If your are finished, just press the "Continue with next player" button!
        </p>
      </div>
      <form method="post" @submit.prevent="onSubmitActivity">
        <p v-if="this.inputError === true" class="error error-input">
          Input field must not be empty!
        </p>
        <input
          type="text"
          class="form-control"
          name="addActivity"
          :id="`enterPlayerActivity-${key}`"
          placeholder="Your activity..."
        />
        <button type="submit" class="btn btn-primary btn-add-activity">
          Add Activity to the list
        </button>
      </form>
      <div class="next-player">
        <p v-if="this.activityError === true" class="error error-input">
          You need to add at least two activities!
        </p>
        <button
          class="btn btn-primary btn-next-player"
          @click="onClickNextPlayer"
        >
          Continue with next Player
        </button>
      </div>
    </div>
  </div>

  <div v-if="this.finishedAllPlayers == true" class="finished-all-players">
    <div class="text-wrapper">
      <h1>All players added their activities!</h1>
      <p>To continue with the game just press the "next" button!</p>
    </div>
    <RouterLink to="/get-activity" class="btn btn-primary btn-next"
      >Next</RouterLink
    >
  </div>
</template>

<style lang="scss">
@import "@/styles/addActivities.scss";
</style>
