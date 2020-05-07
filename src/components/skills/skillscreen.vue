<template>
    <div classs="container">
        <div class="row">
            <div class="col-md-2 m-1" v-for="(item, index) in mainDataa.skills"  :key="index">
              {{item}}
            </div>
        </div>
    </div>   
</template>

<script>
import maindata from "@/assets/data/main.json";
export default {
    name: "skillscomp",
  data: () => ({
    mainDataa: maindata,
  }),
  methods: {}
}
</script>