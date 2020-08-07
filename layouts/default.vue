<template>
  <div class="main">
    <Nuxt />
  </div>
</template>

<style>
html,
body {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  background: #7f7fd5;
  background: -webkit-linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5);
  background: linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5);
  height: 100%;
}

.main {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  display: none;
}
::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.3);
  outline: 1px solid slategrey;
}
</style>
