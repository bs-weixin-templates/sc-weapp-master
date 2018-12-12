## Tag 标签

### 使用指南

在 index.json 中引入组件
```json
"usingComponents": {
  "sc-tag": "path/to/vant-weapp/dist/tag/index"
}
```

### 代码演示

#### 基础用法
通过 type 属性控制 Tag 颜色，默认为灰色

```html
<sc-tag>标签</sc-tag>
<sc-tag type="danger">标签</sc-tag>
<sc-tag type="success">标签</sc-tag>
<sc-tag type="primary">标签</sc-tag>
```

#### 空心样式
设置`plain`属性设置为空心样式

```html
<sc-tag plain>标签</sc-tag>
<sc-tag plain type="danger">标签</sc-tag>
<sc-tag plain type="primary">标签</sc-tag>
<sc-tag plain type="success">标签</sc-tag>
```

#### 圆角样式
通过`mark`设置为圆角样式

```html
<sc-tag mark>标签</sc-tag>
<sc-tag mark type="danger">标签</sc-tag>
<sc-tag mark type="primary">标签</sc-tag>
<sc-tag mark type="success">标签</sc-tag>
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|-------|
| type | 类型，可选值为`primary` `success` `danger` | `String` | `''`|
| plain | 是否为空心样式 | `Boolean` | `false` |
| mark | 是否为圆角样式 | `Boolean` | `false` |

### Slot

| 名称 | 说明 |
|------|------|
| default | 自定义 Tag 显示内容 |

### 外部样式类

| 类名 | 说明 |
|------|------|
| custom-class | 根节点样式类 |
