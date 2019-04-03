<template>
    <div>
        <table id="table">
            <thead>
                <th :key="index" v-for="(value,index) in thArray">{{value}}</th>
            </thead>
            <tbody>
                <tr :key="index" v-for='(item, index) in thArrayData'>
                    <td :key='indexs' v-for="(items,indexs) in item" >{{items}}</td>
                </tr>
            </tbody>
        </table>
        <el-row>
            <el-button type="primary">button</el-button>
        </el-row>

        <div>
            <button :class="[ 'myBtn', myBtnMoveOver ]" @mouseover="MoveOver" @mouseout="MouseOut" >button</button>
        </div>

    </div>
</template>

<script>
export default {
    name:'tabelVue',
    data(){
        return {
            thArray:['th1','th2','th3','th4','th5','th6'],
            thArrayData:[
                [1,2,3,4,5,6],
                [7,8,9,10,11,12],
                [1,1,1,1,1,1],
                [233,123,123,134,53,13],
                ['tr',34,21,66,2,7]
            ],
            showBtn:false,
            //myBtn:'myBtn',
            myBtnMoveOver:'',
        }
    },
    methods:{
        MoveOver(){
            this.showBtn=true;
            this.myBtnMoveOver='myBtnMoveOver';
        },
        MouseOut(){
            this.showBtn-false;
            this.myBtnMoveOver='';
        }
    }

}
</script>

<style scoped>

#table{
    width:96%;
    height: 300px;
    margin-left: 2%;
}
thead{
    background-color: aliceblue;
}

.myBtn{
    width:5rem;
    height: 2rem;
    background-color: coral;
    margin-top: 0.5rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
}
.myBtnMoveOver{
    color: #fff;

}



</style>


