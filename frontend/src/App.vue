<template>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:focus {
  outline: none;
}

html,
body {
  overflow-x: hidden;
  height: 100%;
  font-family: "Noto Sans KR", sans-serif;
}

ul,
li {
  list-style: none;
}

a {
  /* color: inherit;
  text-decoration: none; */
}

h1 {
	font: inherit;
}

button {
  background: none;
  color: inherit;
  border: none;
  cursor: pointer;
  outline: inherit;
  font-family: "Noto Sans KR", sans-serif;
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-thumb {
  background-color: #6AA1F1;
  border: 10px;
  border-radius: 10px;
}

::-webkit-scrollbar-track {
  background-color: #eee;
  border-radius: 10px;
}

#app {
  width: 100%;
  height: 100%;
  text-align: center;
  color: #333;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>
