<template>
  <div class="index container">
    <div class="card" v-for="smoothie in smoothies" :key="smoothie.id">
      <div class="card-content">
        <i class="material-icons delete" @click="deleteSmoothie(smoothie.id)">delete</i>
        <h2 class="indigo-tex">{{smoothie.title}}</h2>
        <ul class="ingredients">
          <li v-for="(ing, index) in smoothie.ingredients" :key="index">
            <span class="chip">{{ing}}</span>
          </li>
        </ul>
      </div>
      <span class="btn-floating btn-large halfway-fab pink">
        <router-link :to="{name: 'EditSmoothie', params:{smoothie_slug: smoothie.slug}}">
          <i class="material-icons edit">edit</i>
        </router-link>
      </span>
    </div>
    </div>
</template>

<script>
import db from '@/firebase/init'
export default {
  name: 'Index',
  props: {

  },
  data(){
    return {
    smoothies:[ ]
  }
  },
  methods:{
    deleteSmoothie(id){
      console.log(id)
      //delete doc from firestore
      db.collection('smoothies').doc(id).delete()
      .then(() =>{
        this.smoothies = this.smoothies.filter(smoothie =>{
          return smoothie.id != id
        })
      })
      
    },
    editSmoothie(id){

      
    }
  },
  created(){
    //fetch data from firestorm
    db.collection('smoothies').get()
    .then(snapshot =>{
      snapshot.forEach(doc =>{
        console.log(doc.data(), doc.id)
        let smoothie = doc.data()
        smoothie.id = doc.id
        this.smoothies.push(smoothie)
      })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap:30px;
  margin-top:60px;
}
.index h2{
  font-size:1.8em;
  text-align:center;
  margin-top:0px; 
}
.index .ingredients{
  margin:30px auto;

}
.index .ingredients li{
  display:inline-block;
}
.index .delete{
  position:absolute;
  top:4px;
  right:4px;
  cursor:pointer;
  color: #aaa;
  font-size:1.4em;
}
</style>
