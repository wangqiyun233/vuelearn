<template>
    <div>
        <span>物品</span>
        <div>
            <ul>
                <li v-for="(item,index) in products">
                    <span>{{item.name}}</span>
                    <span>-</span>
                    <span>{{item.count}}</span>
                    <span>+</span>
                </li>
            </ul>
            
        </div>
        <div>
            <el-button type="text" @click="dialogFormVisible = true">新增物品</el-button>

            <el-dialog title="新增物品" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                    <el-form-item label="物品名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="物品数量" :label-width="formLabelWidth">
                    <el-select v-model="form.count" placeholder="请选择数量">
                        <el-option label="1" value="1"></el-option>
                        <el-option label="2" value="2"></el-option>
                    </el-select>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="addnewProduct">确 定</el-button>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>

import {mapState,mapMutations} from 'Vuex'

export default {
    name:"products",
    data(){
        return {
            form:{
                name:null,
                count:null
            },
            dialogFormVisible: false,
            formLabelWidth: '120px'
        }
    },
    computed:mapState(['products']),
    methods:{
        ...mapMutations(['addProduct']),
        addnewProduct(){
            this.addProduct(this.form);
            this.dialogFormVisible = false;
        }
    }
}
</script>

<style scoped>

</style>

