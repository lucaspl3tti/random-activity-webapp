<template>
  <div class="start-screen">
    <div class="text-wrapper">
      <h1>random activity app</h1>
      <p>
        Get cool activities for the evening from a list you and your friends create
      </p>
    </div>

    <div class="start-game">
      <RouterLink
        to="/start"
        class="btn btn-primary btn-start"
        id="startGameButton"
        >Start Game</RouterLink
      >
    </div>
  </div>
</template>

<style lang="scss">
@import "@/styles/startGame.scss";
</style>
