<template>
    <div class="container">
        <div class="row py-5 align-items-center">
            <div class="col-md-12 text-center">
                <img class="profileimg" :src="maindata1.imgUrl" alt="">
            </div>
        </div>
        <div class="row py-4 text-center" >
             <div class="col-md-12">
                  <h1>{{maindata1.name}}</h1><br>
                     <p>Student at IGDTUW || Community Manager at InCampus Ltd ||
                    <br>|| GigIndia and NEO Campus Ambassador || DSC member ||</p>
            </div>
        </div>
    </div>
</template>
<script>
import maindata from '@/assets/data/main.json'
    export default {
        name:'HomeScreen',
        data:()=>({
            maindata1:maindata
        })
    }
</script>

<style>
    .profileimg{
        border-radius: 50%;
        max-width: 25%;
        max-height:15%;
        margin-left: auto;
        margin-right: auto;
    }
</style>