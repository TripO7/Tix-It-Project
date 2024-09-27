<template>
  <div v-if= "isRectVisible" class ="rectangle">
  </div>

</template>
<script>
export default {
  name: 'Rectangle',
  props: {
    isRectVisible: {
      type: Boolean,
      default: true
    }
  }
}
</script>



<style scoped >
.rectangle {
  width: 400px;
  height:500px;
  border-radius :20px;
  margin-left : auto;
  margin-right: auto;
  background-color:#00C2C7;
}
/*.mini-logo{
  width:100px;
  height:50px;
  margin-left: auto;
}*/



</style>