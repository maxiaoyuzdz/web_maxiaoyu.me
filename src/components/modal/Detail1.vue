<template>

    <h4 class='part1'>I am a freelance web designer and marketer.</h4>
    <script type="x/template" id="modal-template">
     <div class="modal-mask" v-show="show" transition="modal">
     <div class="modal-wrapper">
     <div class="modal-container">

     <div class="modal-header">
     <slot name="header">
     default header
     </slot>
     </div>
     
     <div class="modal-body">
     <slot name="body">
     default body
     </slot>
     </div>

     <div class="modal-footer">
     <slot name="footer">
     default footer
     <button class="modal-default-button"
     @click="show = false">
     OK
     </button>
     </slot>
     </div>
     </div>
     </div>
     </div>
    </script>


  
</template>

<script>


 export default {
     template: '#modal-template',
     props: {
	 show: {
	     type: Boolean,
	     required: true,
	     twoWay: true    
	 }
     },
    data () {
	return {
	    msg: 'I\'m a CS Engineer!'
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

 .modal-mask {
     position: fixed;
     z-index: 9998;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     background-color: rgba(0, 0, 0, .5);
     display: table;
     transition: opacity .3s ease;
 }

</style>
