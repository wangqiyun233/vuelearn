<template>
    <div>
        <ul>
            <li :key="index" v-for="(item,index) in items" >
                <lichild >
                    <span slot="name">{{item.name}}</span>
                    <span v-if="item.show">{{index}}</span>
                </lichild>
            </li>
        </ul>
    </div>
</template>

<script>
import lichild from "@/components/lichild";

export default {
    name:'newcomponent',
    data(){
        return {
            items:[
            {name:"name1",show:true},
            {name:"name2",show:false}]
        }
    },
    components:{
        lichild
    }
}
</script>

<style scoped>

li{
    text-align: left;
}
</style>



