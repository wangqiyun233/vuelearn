<template>
    <div>
        <p>child:</p>
        <button @click="sendChildInfo">发送</button>
        <p>{{childInfo}}</p>
    </div>
</template>

<script>
export default {
    name:'communication',
    props:{
        Info:String|Number
    },
    data(){
        return {
            childInfo : this.Info,
            selfInfo:'this is selfinfo',
            count:0,
        }
    },
    methods:{
        sendChildInfo(){
            this.count++;
            this.$emit('send',this.count);
        }
    },
    watch:{
        Info(newValue,oldValue){
            this.childInfo=newValue;
        }
    }
}
</script>

