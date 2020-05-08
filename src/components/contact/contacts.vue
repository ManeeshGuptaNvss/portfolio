<template>
  <div class="container">
    <h4>Get in Touch</h4>
    <div class="card">
      <div class="row">
      <div class="col-md-6">
          <div class="form-group">
              <input type="name" class="form-control"  v-model="name" id="name1" placeholder="Name" >
          </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
            <input type="email" class="form-control"   v-model="email" id="exampleFormControlInput1" placeholder="Email">
         </div>
      </div>
      <div class="col-md-12">
        <div class="form-group" >
        <textarea class="form-control" id="exampleFormControlTextarea1" v-model="msg" rows="4" placeholder="Message"></textarea>
        </div>
      </div>
      <div class="col-md-12" style="text-align:center;">
         <button v-if ="spinner == false" v-on:click="addData"  id="but" class="btn btn-primary">Send Message</button>
       <div v-else class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
       </div>
      </div> 
    </div>
   </div> 
      <div class="row py-5" >
         <div class="col-md-12">
              <div class="card" style="max-width:60%">
                  <h4>You can also find me at</h4>
                  <i class="material-icons md-18">emailicon</i>
                  <span class="mdi mdi-facebook-box"></span>
                  <span class="mdi mdi-github-circle"></span>
                  <span class="mdi mdi-instagram"></span>
                  
             </div>
         </div>
      </div>
</div>
</template>
<script>
import maindata from '@/assets/data/main.json'
import firebase from '@/components/config/firebase'
export default {
    name: "contactcomp",
    data: () => ({
      msg:'',
      spinner:false
  }),
  methods: {
      addData(){
      this.spinner=true
      if(this.msg.length>0){
        let AddData={
          msg: this.msg
        }
       firebase.firestore.collection('msgs').add(AddData).then(res=>{
          console.log(res)
          this.spinner = false
          alert('Message Sent')
          this.msg = ''
        }).catch(e=>{
          this.spinner = false
          console.log(e)
        })
      }else{
        this.spinner = false
        alert('You must write something first')
      }
    }
  }
    
}
</script>
<style>
.card{
  margin:auto auto;
  padding:30px 30px;
  max-width:70%;
}
/* .row{
    margin:10px 30px;
}
.card{
    margin:auto auto;
    padding: auto auto;
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
   margin:0% auto;
   max-width: 500px;
} 
.form-control{

}
h4{
    text-align: center;
} */
h4{
  text-align:center;
}
.from-control{
  margin:auto auto;
  max-width:60%;
}



</style>