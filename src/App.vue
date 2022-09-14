<template>
  <header>
    <router-link to="/">
      <span class="home-button">&lt;</span>
      <h1>
        <span>ABN</span>-Shows
      </h1>
    </router-link>
  </header>
  <router-view />
</template>
 
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: $font-primary;

  &::selection {
    background: $color-bg-selection;
  }
}

body {
  background-color: $color-body;
}

a {
  text-decoration: none;
}

header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  background-color: $color-primary-bg;
  box-shadow: $box-shadow-1;

  h1 {
    color: $color-white;
    font-size: 28px;

    span {
      color: $color-primary;
    }
  }

  .home-button {
    font-size: 36px;
    position: absolute;
    left: 16px;
    top: 1px;
    color: $color-pale-orange;
  }
}
</style>
