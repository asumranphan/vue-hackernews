<template>
  <div id="app">
    <nav class="navbar">
      <div class="navbar-container">
        <router-link class="navbar-brand" to="/" exact>
          <img src="./assets/logo.png" width="32" height="32" alt="Hacker News">
        </router-link>

        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/top">Top</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/new">New</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/show">Show</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/ask">Ask</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/job">Jobs</router-link>
          </li>
        </ul>

        <ul class="navbar-nav navbar-right">
          <li class="nav-item">
            <a class="nav-link" href="https://github.com/asumranphan/vue-hackernews">
              Build with Vue.js
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<style lang="scss">
body {
  background: $body-bg;
  color: $body-color;
  font-family: $font-family-base;
  font-size: $font-size-base;
  line-height: 1.5;
  padding-top: 70px;
  margin: 0;
}

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: $navbar-background;
  padding-top: $navbar-padding-y;
  padding-bottom: $navbar-padding-y;
  z-index: 1;

  .navbar-container {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;
    padding-left: $navbar-padding-x;
    padding-right: $navbar-padding-x;
  }

  .navbar-brand {
    display: inline-block;
    margin-right: $spacer;
    color: $white;
    text-decoration: none;
    padding-top: $spacer * .25;
    padding-bottom: $spacer * .25;

    > img {
      display: block;
    }
  }

  .navbar-nav {
    display: flex;
    flex-direction: row;
    list-style: none;
    padding-left: 0;
    margin: 0;

    &.navbar-right {
      margin-left: auto;

      .nav-item {
        margin-right: 0;
        margin-left: $spacer * .5;
      }
    }

    .nav-item {
      margin-right: $spacer * .5;

      .nav-link {
        display: block;
        color: $navbar-link-color;
        padding: $spacer * .5;
        text-decoration: none;
        transition: color .25s ease;

        &:hover {
          color: $navbar-link-hover-color;
        }

        &.router-link-active {
          color: $navbar-link-active-color;
        }
      }
    }
  }
}
</style>
