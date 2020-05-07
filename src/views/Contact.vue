<template>
    <div class="conatiner">
        <div class="row">
            <div class="col-md-12">
                <Contactcomp/>
            </div>
        </div>
    </div>   
</template>
<script>
import Contactcomp from '@/components/contact/contacts'
export default {
    name:'ContactComponent',
    components:{
        Contactcomp
    },
    data:()=>({

    }),
    methods:{

    }
}
</script>
<style >
h2{
    text-align: center;
}
</style>