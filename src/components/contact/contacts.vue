<template>
    <div class="conatiner">
        <br><h4>Get in Touch</h4>
        <div class="row">
            <div class="col-md-8 offset-2">  
                <div class="card text:center">
                    
                    <div class="row  py-4">
                        <div class="col-md-4">
                              <div class="form-group">
                                <input type="name" class="form-control" id="name1" placeholder="Name" >
                              </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                 <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" style="margin-left:150px; ">
                            </div>
                        </div>
                        <div class="row">
                          <div class="col-md-12">
                              <div class="form-group" >
                                  <textarea class="form-control1" id="exampleFormControlTextarea1" rows="3" placeholder="Message" style="width:500px; height:170px;"></textarea>
                              </div>
                          </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                            <button type="button" class="btn btn-primary" style="margin-left:280px ; margin-top:-15px">Send Message</button>
                            </div>
                        </div>    
                    </div>
                </div>     
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h4>You can also find me at </h4>
                <br>
                
            </div>
        </div>
     </div>   
</template>
<script>
import maindata from "@/assets/data/main.json";
export default {
    name: "contactcomp",
    data: () => ({
  }),
  methods: {}
    
}
</script>
<style>
.row{
    margin:10px 30px;
}
.card{
    margin:30px 20px;
    border-left-color:rgb(57, 135, 236);
    border-left-width: 9px;
    border-radius: 15%;
    border-right-color: rgb(57, 135, 236);
    border-right-width: 9px;
    border-top-color: rgb(38, 148, 182);
    border-top-width: 1px;
    border-bottom-color: rgb(38, 148, 182);
    border-bottom-width: 1px;
}
.form-control1{
    margin-left: 90px;
}
.form-control{
    margin-left:85px;
}
h4{
    text-align: center;
}

</style>