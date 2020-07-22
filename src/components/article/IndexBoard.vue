<template>
<div style="margin:0 2rem;">
    <el-input
    placeholder="输入关键字进行过滤"
    v-model="filterText">
    </el-input>

    <div style="overflow:auto;height:150px;">
        <el-tree
        :data="data"
        :props="defaultProps"
        node-key="id"
        :filter-node-method="filterNode"
        ref="tree">
        <span class="custom-tree-node" slot-scope="{ node, data }">
            {{ node.label }}
            <i href="www.baidu.com" class="el-icon-right"></i>
        </span>
        </el-tree>
    </div>
</div>
</template>

<script>
export default {
    data() {
        const data = [{
            id: 1,
            label: '一级 1',
            children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
                id: 9,
                label: '三级 1-1-1'
            }, {
                id: 10,
                label: '三级 1-1-2'
            }]
            }]
        }, {
            id: 2,
            label: '一级 2',
            children: [{
            id: 5,
            label: '二级 2-1'
            }, {
            id: 6,
            label: '二级 2-2'
            }]
        }, {
            id: 3,
            label: '一级 3',
            children: [{
            id: 7,
            label: '二级 3-1'
            }, {
            id: 8,
            label: '二级 3-2'
            }]
        }];
        return {
            filterText: '',
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            data: JSON.parse(JSON.stringify(data)),
            data: JSON.parse(JSON.stringify(data))
        }
    },
    watch: {
      filterText(val) {
        this.$refs.tree.filter(val);
      }
    },

    methods: {
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      }
    },
};
</script>