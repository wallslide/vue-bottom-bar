<template>
  <BottomBar>
    <v-textarea :rows="1" placeholder="input here..." hide-details solo append-outer-icon="send" />
  </BottomBar>
</template>

<script>
import BottomBar from '@/components/BottomBar'

export default {
  components: { BottomBar }
}
</script>

<style>
</style>
