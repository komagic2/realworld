<template>
  <div>
    <form class="card comment-form">
        <div class="card-block">
        <textarea class="form-control" placeholder="Write a comment..." rows="3"></textarea>
        </div>
        <div class="card-footer">
        <img :src="article.author.image" class="comment-author-img" />
        <button class="btn btn-sm btn-primary">
            Post Comment
        </button>
        </div>
    </form>
        
    <div class="card" 
        v-for="comment in comments" 
        :key="comment.id">
        <div class="card-block">
            <p class="card-text">{{ comment.body }}</p>
        </div>
        <div class="card-footer">
            <nuxt-link class="comment-author"
                :to="{
                    name: 'profile', 
                        params: {
                        username: comment.author.username
                    }
                }"
                >
                <img class="comment-author-img" :src="comment.author.image" />
            </nuxt-link>
            &nbsp;
            <nuxt-link
                :to="{
                    name: 'profile', 
                        params: {
                        username: comment.author.username
                    }
                }"
                class="comment-author">{{ comment.author.username }}</nuxt-link>
            <span class="date-posted">{{ comment.createdAt | date }}</span>
        </div>
    </div>

  </div>
</template>

<script>
import { getComments } from '@/api/articles.js'

export default {
  name: 'ArticleComments',
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
        comments: []
    };
  },
  computed:{
  },
  watch:{
  },
  mounted() {
    this.getComments()
  },
  methods: {
    async getComments() {
        const { data } = await getComments(this.article.slug)
        this.comments = data.comments
    }
  },
};
</script>

<style scoped>

</style>