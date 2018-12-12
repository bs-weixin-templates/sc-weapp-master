## Notify 消息提示

### 使用指南
在 index.json 中引入组件
```json
{
  "usingComponents": {
    "sc-notify": "path/to/vant-weapp/dist/notify/index"
  }
}
```

### 代码演示

### 基础用法

```js
import Notify from 'path/to/vant-weapp/dist/notify/notify';

Notify('通知内容')
```

```html
<sc-notify id="sc-notify" />
```

### 自定义配置

```js
Notify({
  text: '通知内容',
  duration: 1000,
  selector: '#custom-selector',
  backgroundColor: '#38f'
});
```

```html
<sc-notify id="custom-selector" />
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| text | 展示文案 | `String` | - |
| duration | 持续时间 | `Number` | `3000` |
| selector | 自定义选择器 | `String` | `sc-notify` |
| color | 字体颜色 | `String` | `#fff` | |
| backgroundColor | 背景色 | `String` | `#e64340` |
