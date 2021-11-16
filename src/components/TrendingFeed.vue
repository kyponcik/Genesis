<template>
   <div class="posts">
      <div :key="key.id" class="post" v-for="key of trends">
         <div class="post_head">
            <router-link :to="`/userinfo/${key.authorMeta.name}`" class="page_link"><img v-bind:src="key.authorMeta.avatar" alt="Аватар" class="avatar"></router-link>        
            <router-link :to="`/userinfo/${key.authorMeta.name}`" class="page_link username">{{key.authorMeta.nickName}}</router-link>
         </div>
         <video class="video_item" controls :src="key.videoUrl"></video>
         <p class="description">{{key.text}}</p>
         <span class="hashtags">{{key.hashtags.name}}</span>
         <div class="stats">
            <span class="comment-count">🗨{{key.commentCount}}</span>
            <span class="count-likes">🖤{{key.authorMeta.heart}}</span> 
         </div>    
      </div>      
   </div>
</template>
<script>
export default {
   name: 'TrendingFeed',

   data(){
      return{
         trends: [],
      }
   },

   created() {
      this.getTrendingFeeds()
   },

   methods: {
      getTrendingFeeds () {
         fetch("https://tiktok33.p.rapidapi.com/trending/feed", {
            "method": "GET",
            "headers": {
               "x-rapidapi-host": "tiktok33.p.rapidapi.com",
               "x-rapidapi-key": "ca8354802dmsh9a8514d83bc193bp1a5d67jsn9c7463bd4fc3"
	         }
         })
         .then(response => response.json())
         .then(response => this.trends = response)
      }
   },
}
</script>
<style scoped>
   *{
     box-sizing:border-box; 
   }
   a{
      text-decoration:none;
   }
   ul,li{
      margin:0;
      padding:0;
   }
   .posts{
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 30px;
      row-gap: 60px;
      justify-content: center;
   
   }
   .post{
      width: 350px;
      display: flex;
      flex-direction: column;
     
      box-shadow: 0 2px 12px 0 rgba(0,0, 0,0.1);
      border-radius:8px
   }
   .post_head{
      display: flex;
      padding: 10px;
      align-items: center;
   }

   .avatar{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
   }

   .page_link{
      color:black;
      display: block;
   }
   .username{
      padding-left: 10px;
      font-weight: 500;
   }

   .post_head > .page_link{
      border-radius:50%;
   }

   .video_item{
      display: block;
      width:100%;
      height:auto;
      margin:0 auto;
   }

   .description{
      font-size: 16px;
      margin-bottom: 10px;
      text-align: center;
      padding: 0 10px;
   }
   .stats{
      display: flex;
      margin-top: auto;
      align-items: flex-start;
      padding: 10px;
      justify-content: space-between;
   }
</style>