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

        <div>
            <h4>父子通信</h4><button @click="changeInfo">change</button>
            <communication :Info="parentInfo" @send="addItem"></communication>
        </div>

    </div>
</template>

<script>
import lichild from "@/components/lichild";
import communication from "@/components/communication";

export default {
    name:'newcomponent',
    data(){
        return {
            items:[
            {name:"name1",show:true},
            {name:"name2",show:false}],

            parentInfo:`this is parent's infomation 233`,

            count:0,
        }
    },
    components:{
        lichild,
        communication
    },
    methods:{
        changeInfo(){
            this.count++;
            this.parentInfo=this.count;
            console.log(this.parentInfo);
        },
        addItem(num){
            this.items.push( {name:num,show:true} );
        }
    }
}
</script>

<style scoped>

li{
    text-align: left;
}
</style>



