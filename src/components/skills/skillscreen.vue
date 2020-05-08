<template>
    <div classs="container">
        <div class="row" >
         <div class="col-md-3" v-for="(item, index) in mainDataa.skills"  :key="index" >
            <div class="card" style="width: 10rem;">
                <img class="icons" :src="item.imgUrl" alt=""><br>
                <p style="text-align:center;">{{item.title}}</p>
            </div>   
         </div>  
        </div>
    </div>   
</template>

<script>
import maindata from "@/assets/data/main.json"
export default {
    name: "skillscomp",
  data: () => ({
    mainDataa: maindata,
 
  }),
  methods: {
     
  }
}
</script>

<style>
.row{
   margin:auto auto;
   max-width:80%;
   padding:10px, 15px;
}
.card{
   margin: auto auto;
   max-width:95%;
   padding:10px 5px; 
   text-emphasis:bold;
   text-align: center;
   align-items: center;
   border-color: transparent;
}
.card:hover{
   color:white;
   background-color: black;
}
.icons{
   max-width:70%;
   max-height:70%;
}
.col-md-3{
   padding:8px 8px;
}
</style>




