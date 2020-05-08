<template>
    <div class="conatiner">
        <h2 style="text-align:center">Skills</h2><br>
      <div class="row">
        <div class="col-md-12">
            <Skillscomp/>
        </div>
      </div> 
    </div>   
</template>

<script>
import Skillscomp from "@/components/skills/skillscreen"
export default {
    name:"skillscompo",
    components:{
        Skillscomp
    },
    data:()=>({

    }),
    methods:{

    }
}
</script>