<template>
  <div class="container">
    <h2 style="text-align:center">About Me </h2>
      <div class="container">
         <AboutHome/>
      </div>
  </div>
</template>

<script>
import AboutHome from '@/components/about/aboutscreen'
  export default {
    name:'AboutComponent',
    components:{AboutHome},
    data:()=>({

    }),
    methods:{

    }
  }
</script>