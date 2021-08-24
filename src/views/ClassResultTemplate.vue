<template>
  <div class="flex-column pageDiv">
    <div class="subname">
      <div class="shareButton">
        <img src="../assets/share_icon.svg" alt="share" @click="shareToPage"/>
      </div>
      <slot name="subname"/>
    </div>
    <div class="classname">
      <slot name="classname"/>
    </div>
    <div class ="classimage">
      <slot name="classimage"/>
    </div>
    <div class="classintro">
      <slot name="classintro"/>
    </div>
  </div>
</template>

<script>

</script>