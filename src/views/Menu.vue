<!--
 * @Author: your name
 * @Date: 2020-12-03 22:12:48
 * @LastEditTime: 2020-12-04 02:03:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-web_ui\src\views\Menu.vue
-->
<template>
  <div style="display: flex; width: 256px; height: 100%">
    <a-menu
      :selectedKeys="selectedItem"
      :openKeys="openKeys"
      mode="inline"
      theme="dark"
      :inlineCollapsed="collapsed"
      @openChange="openChange"
      @select="selectChagne"
    >
      <a-sub-menu :key="item.key" v-for="item in rootSubmenuKeys">
        <!-- 一级标题 -->
        <span slot="title">
            <a-icon type="desktop" /><span>{{ item.title }}</span>
        </span>
        <!-- 三级标题 -->
        <a-sub-menu :key="item.key" v-for="item in item.title2">
          <span slot="title"><a-icon type="smile"/><span>{{item.title3}}</span></span>
          <a-menu-item :key="item.key" v-for="item in item.title4"> {{item.title5}} </a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>
    <!-- 汉堡菜单 -->
    <a-button style="margin: 16px" @click="toggleCollapsed">
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      collapsed: false,
      rootSubmenuKeys: [
        {
          key: "14",
          title: "菜单栏",
          hidden: true
        },
        {
          key: "sub1",
          title: "一级标题1",
          title2: [
            {
              key: "2",
              title3: "二级标题1",
            },
            {
              key: "3",
              title3: "二级标题2",
            },
          ],
        },
        {
          key: "sub2",
          title: "一级标题2",
          title2: [
            {
              key: "7",
              title3: "二级标题1",
            },
            {
              key: "8",
              title3: "二级标题2",
            },
            {
              key: "9",
              title3: "二级标题3",
              title4: [
                {
                  key: "5",
                  title5: "三级标题1",
                },
                {
                  key: "6",
                  title5: "三级标题2",
                },
              ],
            }]
        }
      ],
      // 默认展开项
      openKeys: ["sub1"],
      // 默认选中的标题
      selectedItem: ["2"],
    };
  },
  methods: {
    // 侧边栏是否展开
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    // SubMenu 展开/关闭的回调
    openChange(openKeys) {
      const latestOpenKey = openKeys.find(
        (key) => this.openKeys.indexOf(key) === -1
      );
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
    // 被选中的标题
    selectChagne({ item, key, selectedKeys }) {
      this.selectedItem = selectedKeys;
    },
  },
};
</script>
<style lang="less" scoped>
.ant-menu-item,
.ant-menu-submenu {
  text-align: left;
}
</style>
