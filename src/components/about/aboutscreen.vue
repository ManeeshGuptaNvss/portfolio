<template>
    <div class="container">
        <div class="row py-5 align-items-center">
         <div class="col-md-6">
              <div class="card">
                 <div class="card-body">
                     <h3>I am</h3>
                   {{maindata1.aboutiam}}
                  </div>
              </div>  
         </div>
          <div class="col-md-6">
              <div class="card">
                 <div class="card-body">
                     <h3>I am passionate</h3>
                   {{maindata1.aboutimpass}}
                 </div>
              </div>  
          </div> 
        </div>

        <div class="row py-5 align-items-center">
         <div class="col-md-6">
              <div class="card">
                 <div class="card-body">
                     <h3>I was</h3>
                   {{maindata1.aboutiwas}}
                 </div>
              </div>  
          </div>
          <div class="col-md-6">
              <div class="card">
                 <div class="card-body">
                     <h3>I am also</h3>
                   {{maindata1.aboutextraact}}
                 </div>
              </div>  
          </div>
         </div> 
    </div>
</template>
<script>
import maindata from '@/assets/data/main.json'
    export default {
        name:'AboutHome',
        data:()=>({
            maindata1:maindata
        })
    }
</script>
<style>
.profileimgs{
    width:350px;
    height:400px;
    padding: 30px;
}
.card{
    padding:auto auto;
    margin:auto auto;
    text-align: center;
    border-left-color:  rgb(97, 203, 245) ;
    border-left-width: 5px;
    border-radius: 3px;
    max-width:100%;
}
.card:hover{
   color:white;
   background-color: black;
}
</style>
