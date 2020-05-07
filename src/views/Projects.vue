<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
           <projcompo/>
      </div>  
    </div>
  </div>
</template>
<script>
import projcompo from "@/components/projects/proj";

export default {
  name: "projcompon",
  components: {
    projcompo
  },
  data: () => ({}),
  methods: {},
};
</script>