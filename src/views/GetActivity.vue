<script>
export default {
  mounted() {},
  data() {
    return {
      randomPlayer: "",
      randomTask: "",
      acceptTask: false,
      groupDecision: false,
    };
  },
  methods: {
    pickRandomPlayer() {
      return (this.randomPlayer =
        this.playerList[Math.floor(Math.random() * this.playerList.length)]);
    },
    pickRandomActivity() {
      return (this.randomTask =
        this.activities[Math.floor(Math.random() * this.activities.length)]);
    },
    onClickBtnAccept() {
      // show accept activity container
      this.acceptTask = true;
    },
    onClickBtnDecide() {
      // show group decision container
      this.groupDecision = true;
    },
    onClickBtnNext() {
      let activityIndex = null;

      // assign key of current activity to activityIndex
      this.activities.forEach((element, key) => {
        if (element === this.randomTask) {
          activityIndex = key;
        }
      });

      // remove current activity from the activities array
      this.activities.splice(activityIndex, 1);

      // get new random activity and new random player
      this.randomPlayer =
        this.playerList[Math.floor(Math.random() * this.playerList.length)];
      this.randomTask =
        this.activities[Math.floor(Math.random() * this.activities.length)];

      // set acceptTask and groupDecision to default
      this.acceptTask = false;
      this.groupDecision = false;
    },
    onClickBtnNew() {
      // get new random activity and new random player
      this.randomPlayer =
        this.playerList[Math.floor(Math.random() * this.playerList.length)];
      this.randomTask =
        this.activities[Math.floor(Math.random() * this.activities.length)];

      // set acceptTask and groupDecision to default
      this.acceptTask = false;
      this.groupDecision = false;
    },
  },
};
</script>

<template>
  <div v-if="this.activities.length > 0" class="activity-conainer">
    <div
      v-if="this.acceptTask === false && this.groupDecision === false"
      class="activity"
    >
      <div class="text-wrapper">
        <h1>Player {{ pickRandomPlayer() }}, it's your turn!</h1>
        <p>
            Your Activity is:<br/>
            {{ pickRandomActivity() }}
        </p>
        <p>Do you want to do the activity with your group?<br/> Or aren't you sure and wanna let the group decide?</p>
      </div>
      <button class="btn btn-primary btn-accept" @click="onClickBtnAccept">
        Do It
      </button>
      <button class="btn btn-primary btn-decide" @click="onClickBtnDecide">
        Let the group decide
      </button>
    </div>

    <div v-else-if="this.acceptTask === true" class="accepted-task">
      <div class="text-wrapper">
        <h1>You accepted the activity!</h1>
        <p>When the activity is done just press the "Next Activity" button</p>
      </div>
      <button class="btn btn-primary btn-next" @click="onClickBtnNext">
        Next Activity
      </button>
    </div>

    <div v-else-if="this.groupDecision === true" class="group-decision">
      <div class="text-wrapper">
        <h1>You wanted the group to decide!</h1>
        <p>Talk about it and decide together if you want to do the activity or just get a new one</p>
      </div>
      <button class="btn btn-primary btn-accept" @click="onClickBtnAccept">
        Do It
      </button>
      <button class="btn btn-primary btn-next" @click="onClickBtnNew">
        Get New Activity
      </button>
    </div>
  </div>
  <div v-else class="no-activities-left">
    <div class="text-wrapper">
      <h1>No activities left!</h1>
      <p>Y'all did a great job! &#128158; There aren't any activities left in the list.</p>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/styles/activity.scss";
</style>
