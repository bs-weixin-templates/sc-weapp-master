## Tab 标签页

### 使用指南
在 index.json 中引入组件
```json
"usingComponents": {
  "sc-tab": "path/to/vant-weapp/dist/tab/index",
  "sc-tabs": "path/to/vant-weapp/dist/tabs/index"
}
```

### 代码演示

#### 基础用法

默认情况下启用第一个标签，可以通过`active`设定当前激活的标签索引，在回调参数的`event.detail`中可以取得被点击标签的标题和索引

```html
<sc-tabs active="{{ active }}" bind:change="onChange">
  <sc-tab title="标签 1">内容 1</sc-tab>
  <sc-tab title="标签 2">内容 2</sc-tab>
  <sc-tab title="标签 3">内容 3</sc-tab>
  <sc-tab title="标签 4">内容 4</sc-tab>
</sc-tabs>
```

```js
Page({
  data: {
    active: 1
  },

  onChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.index + 1}`,
      icon: 'none'
    });
  }
});
```

#### 横向滚动

多于 4 个标签时，Tab 可以横向滚动

```html
<sc-tabs active="{{ active }}">
  <sc-tab title="标签 1">内容 1</sc-tab>
  <sc-tab title="标签 2">内容 2</sc-tab>
  <sc-tab title="标签 3">内容 3</sc-tab>
  <sc-tab title="标签 4">内容 4</sc-tab>
  <sc-tab title="标签 5">内容 5</sc-tab>
  <sc-tab title="标签 6">内容 6</sc-tab>
</sc-tabs>
```

#### 禁用标签

设置`disabled`属性即可禁用标签。如果需要监听禁用标签的点击事件，可以在`sc-tabs`上监听`disabled`事件

```html
<sc-tabs bind:disabled="onClickDisabled">
  <sc-tab title="标签 1">内容 1</sc-tab>
  <sc-tab title="标签 2" disabled>内容 2</sc-tab>
  <sc-tab title="标签 3">内容 3</sc-tab>
</sc-tabs>
```

```javascript
Page({
  onClickDisabled(event) {
    wx.showToast({
      title: `标签 ${event.detail.index + 1} 已被禁用`,
      icon: 'none'
    });
  }
});
```

#### 样式风格

`Tab`支持两种样式风格：`line`和`card`，默认为`line`样式，可以通过`type`属性修改样式风格

```html
<sc-tabs type="card">
  <sc-tab title="标签 1">内容 1</sc-tab>
  <sc-tab title="标签 2">内容 2</sc-tab>
  <sc-tab title="标签 3">内容 3</sc-tab>
</sc-tabs>
```

#### 点击事件

可以在`sc-tabs`上绑定`click`事件，在回调参数的`event.detail`中可以取得被点击标签的标题和索引

```html
<sc-tabs bind:click="onClick">
  <sc-tab title="标签 1">内容 1</sc-tab>
  <sc-tab title="标签 2">内容 2</sc-tab>
</sc-tabs>
```

```javascript
Page({
  onClick(event) {
    wx.showToast({
      title: `点击标签 ${event.detail.index + 1}`,
      icon: 'none'
    });
  }
});
```

### Tabs API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| active | 当前激活标签的索引 | `String` `Number` | `0` |
| color | 标签颜色 | `String` | `#f44` |
| type | 样式风格，可选值为 `card` | `String` | `line` |
| duration | 动画时间 (单位秒)  | `Number` | `0.2` |
| line-width | 底部条宽度 (px) | `Number` | 与当前标签等宽 |
| swipe-threshold | 滚动阈值，设置标签数量超过多少个可滚动 | `Number` | `4` |

### Tab API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| title | 标题 | `String` | - |
| disabled | 是否禁用标签 | `Boolean` | `false` |

### Tab Slot

| 名称 | 说明 |
|-----------|-----------|
| - | 标签页内容 |

### Tabs Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| bind:click | 点击标签时触发 | index：标签索引，title：标题 |
| bind:change | 当前激活的标签改变时触发 | index：标签索引，title：标题 |
| bind:disabled | 点击被禁用的标签时触发 | index：标签索引，title：标题 |
