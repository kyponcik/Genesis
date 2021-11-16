<template>
   <div class="wrapper">
      
      <div class="head-info">
         <img :src="user.user.avatarMedium" alt="" class="avatar">
         <div class="names">
            <p class="uniqueid">{{user.user.uniqueId}}</p>
            <p class="nickname">{{user.user.nickname}}</p>
         </div>  
      </div>  
      <div class="stats">
         <span class="following-count"><b>{{user.stats.followingCount}}</b> Подписки</span>
         <span class="followers-count"><b>{{user.stats.followerCount}}</b> Подписчики</span>
         <span class="likes-count"><b>{{user.stats.heart}}</b> Лайки</span>
      </div>
      <pre>{{user.user.signature}}</pre>
      <!-- <pre>{{feed}}</pre> -->
      <!-- Здесь через v-for должны быть выведены последние посты -->
   </div>
</template>
<script>
export default {

   data(){
      return{
         user: null,
         feed: null,

      }
   },

    created() {
      this.getUserInfo(),
      this.getUserFeed()
   },

   methods: {
      getUserInfo () {
         fetch(`https://tiktok33.p.rapidapi.com/user/info/${this.$route.params.id}`, {
            "method": "GET",
            "headers": {
               "x-rapidapi-host": "tiktok33.p.rapidapi.com",
               "x-rapidapi-key": "ca8354802dmsh9a8514d83bc193bp1a5d67jsn9c7463bd4fc3"
            }
         })
         .then(response => response.json())
         .then(response => this.user = response)
      },
      getUserFeed () {
         fetch(`https://tiktok33.p.rapidapi.com/user/feed/${this.$route.params.id}`, {
            "method": "GET",
            "headers": {
               "x-rapidapi-host": "tiktok33.p.rapidapi.com",
               "x-rapidapi-key": "ca8354802dmsh9a8514d83bc193bp1a5d67jsn9c7463bd4fc3"
            }
         })
         .then(response => response.json())
         .then(response => this.feed = response)
      }
   },
}




</script>
<style scoped>
   .wrapper{
      width: 1200px;
      margin:0 auto;
   }
   .head-info{
      display: flex;
      margin-bottom: 20px;
   }
   .avatar{
      width: 116px;
      height: 116px;
      border-radius:50%;
   }
   .names{
      padding-left: 10px;
   }
   .uniqueid{
      margin:0;
      font-size:32px;
      font-weight:500;
   }
   .nickname{
      font-size: 18px;
      font-weight:500;
   }
   .stats{
      display: flex;
      column-gap:20px;
   }
   b{
      font-size: 18px;
   }
   pre{
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
   }
</style>

