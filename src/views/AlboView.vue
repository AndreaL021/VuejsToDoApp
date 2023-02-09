<template>
    <v-container>
      <v-row class="d-flex justify-center">
        <button @click="prev" class="align-self-center light-green--text accent-3">
          <font-awesome-icon icon="fa-solid fa-circle-left" size="3x" />
        </button>
        <v-card
          class="mx-3 my-12 text-center"
          max-width="450"
        >
            <h1>{{item.safe_title}}</h1>
            <v-img :src="item.img" contain></v-img>
            <p class="grey--text mt-2">
              #{{item.num}}
            </p>
            <p>Img: <a :href="item.img">{{item.img}}</a></p>
            <v-divider class="mx-4"></v-divider>
            <v-card-text>
              {{item.day}}-{{item.month}}-{{item.year}}
            </v-card-text>
        </v-card>
        <button @click="next" class="align-self-center light-green--text accent-3">
          <font-awesome-icon icon="fa-solid fa-circle-right" size="3x" />
        </button>
      </v-row>
      
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'AlboView',
    data(){
      return{
        name:"",
        done:null,
        item:{},
        link:100
      }
    },
    methods:{
        next(){
            this.link++
            this.axios.get('http://localhost:8080/'+this.link+'/info.0.json')
            .then(response => this.item= response.data)
            this.$forceUpdate();
        },
        prev(){
            this.link--
            this.axios.get('http://localhost:8080/'+this.link+'/info.0.json')
            .then(response => this.item= response.data)
            this.$forceUpdate();
        },
    },
    mounted: function(){
        this.axios.get('http://localhost:8080/'+this.link+'/info.0.json')
            .then(response => this.item= response.data)
    },
    computed:{
    
    }
  }
</script>
  