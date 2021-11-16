<template lang="">
   <header>
      <router-link to="/">Main</router-link>
   </header>
   <div class="container">
      <router-view></router-view>
   </div>
   
  

   
</template>
<script>



export default {
   
}
</script>
<style>
   @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
   html{
      font-family: 'Roboto', sans-serif;
   }
   .container{
      width:1600px;
      margin:0 auto;
      padding:20px;
   }

</style>