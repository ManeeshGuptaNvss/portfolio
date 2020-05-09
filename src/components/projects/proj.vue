<template>
  <div class="container">
    <div class="row">
        <div class="col-md-12">
            <h2 >My Projects</h2>
        </div>
    </div>
    
    <div class="row">
      <div class="col-md-12" v-for="(item, index) in mainDataa.projects"  :key="index">
        <div class="card">
          <h4>{{ item.title }}</h4><br>
          <p>{{ item.des }}</p>
          <a :href="item.link" target="blank">Project Link</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import maindata from "@/assets/data/main.json";
export default {
  name: "projcomp",
  data: () => ({
    mainDataa: maindata,
  }),
  methods: {}
};
</script>

<style>
.card{
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: auto; 
  padding-left:auto;
  margin:30px auto;
  border-radius: 2px;
  text-align: center;
  border-left-color: black ;
  border-left-width: 5px;
   border-top-color:  black ;
  border-top-width: 6px;
  border-right-color: black;
   border-bottom-color: black;
  max-width:100%;
  
  
}
.card:hover{
   color:white;
   background-color: black;
}
h2{
  text-align: center;
}
h4{
  text-align: center;
}


</style>