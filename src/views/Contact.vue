<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <contactcomp/>
            </div>
        </div>
    </div>   
</template>
<script>
import contactcomp from '@/components/contact/contacts'
export default {
    name:'ContactComponent',
    components:{
        contactcomp
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