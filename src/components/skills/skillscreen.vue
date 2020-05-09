<template>
    <div classs="container"><br>
        <h5>Languages</h5><br>
        <div class="row" >
         <div class="col-md-3" v-for="(item, index) in mainDataa.lang"  :key="index" >
            <div class="card" style="width: 10rem;">
                <img class="icons" :src="item.imgUrl" alt=""><br>
                <p style="text-align:center;">{{item.title}}</p>
            </div>   
         </div>  
        </div>

         <br ><br> <h5>Database</h5><br>
        <div class="row" >
         <div class="col-md-3" v-for="(item, index) in mainDataa.databases"  :key="index" >
            <div class="card" style="width: 10rem;">
                <img class="icons" :src="item.imgUrl" alt=""><br>
                <p style="text-align:center;">{{item.title}}</p>
            </div>   
         </div>  
        </div>

        <br> <br> <h5>Frameworks</h5><br>
        <div class="row" >
         <div class="col-md-3" v-for="(item, index) in mainDataa.frameworks"  :key="index" >
            <div class="card" style="width: 10rem;">
                <img class="icons" :src="item.imgUrl" alt=""><br>
                <p style="text-align:center;">{{item.title}}</p>
            </div>   
         </div>  
        </div>

       <br> <br> <h5>Devlopment Platform</h5><br>
        <div class="row" >
         <div class="col-md-3" v-for="(item, index) in mainDataa.devplatform"  :key="index" >
            <div class="card" style="width: 10rem;">
                <img class="icons" :src="item.imgUrl" alt=""><br>
                <p style="text-align:center;">{{item.title}}</p>
            </div>   
         </div>  
        </div>

        <br><br> <h5>Version Control System</h5><br>
        <div class="row" >
         <div class="col-md-3" v-for="(item, index) in mainDataa.verscontrsyst"  :key="index" >
            <div class="card" style="width: 10rem;">
                <img class="icons" :src="item.imgUrl" alt=""><br>
                <p style="text-align:center;">{{item.title}}</p>
            </div>   
         </div>  
        </div>

       <br><br> <h5>Development Tools</h5><br>
        <div class="row" >
         <div class="col-md-3" v-for="(item, index) in mainDataa.devtools"  :key="index" >
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
   max-width:100%;
   padding:7px, 10px;
   text-align: center;
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
h5{
text-align: center;
}
</style>




