<template>
  <div id="bottom-bar">
    <slot />
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 15px;
  transition: padding-bottom 0.5s;
}

/* Prevents IOS keyboard bar from hiding text input */
@supports (-webkit-overflow-scrolling: touch) {
  #bottom-bar {
    padding-bottom: 20px;
  }

  #bottom-bar:focus-within {
    padding-bottom: 60px;
    transition: padding-bottom 0.5s;
  }
}
</style>
