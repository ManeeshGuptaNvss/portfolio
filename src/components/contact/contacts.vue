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
      <div class="col-md-12" >
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
 
     
       <div class="row py-5">
        <div class="col-md-12"  id="coll">
          <div class="card" id="icon" >
                  <h4>You can also find me at</h4>
                  <!-- <div class="card" id="ic"> -->
                  <a href="https://www.linkedin.com/in/sonali-a989a8192/" target="blank"><span class="mdi mdi-linkedin"  id="li" style="list-style:none; margin:0 15px;"></span></a>
                  <a href="https://github.com/Sonali12920" target="blank"><span class="mdi mdi-github" style="list-style:none; margin:0 15px;"></span></a>
                  <a href="https://www.facebook.com/profile.php?id=100038520653307" target="blank"><span class="mdi mdi-facebook" style="list-style:none; margin:0 15px;"></span></a>
                  <a href="https://www.instagram.com/_.sona2921._/" target="blank"><span class="mdi mdi-instagram" style="list-style:none; margin:0 15px;"></span></a> 
                  <!-- </div> -->
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
      name:'',
      email:'',
      mas:'',
      spinner:false
  }),
  methods: {
      addData(){
      this.spinner=true
      if(this.name.length>0 && this.email.length>0 && this.msg.length>0){
        let obj={
          name:this.name,
          email:this.email,
          msg: this.msg
        }
       firebase.firestore.collection('msgs').add(obj).then(res=>{
          console.log(res)
          this.spinner = false
          alert('Message Sent')
          this.name=''
          this.email=''
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
  padding:35px 35px;
  max-width:100%;
}
h4{
  text-align:center;
}
.from-control{
  margin:auto auto;
  max-width:80%;

}
#coll{
  text-align: center;
}
#icon{
display:inline-block;
max-width:100%;
border:transparent;
text-align:center;

}
.mdi{
  font-size: 30px;
  transition:0.6s;
  color:#000;
  width:30%;
  height:30%;
  border-radius:50%;
}



</style>