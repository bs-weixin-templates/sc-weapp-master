## Button 按钮

### 使用指南
在 json 文件中配置button组件
```json
"usingComponents": {
  "sc-button": "path/to/vant-weapp/dist/button/index"
}
```

### 代码演示

#### 按钮类型
支持`default`、`primary`、`warning`、`danger`四种类型，默认为`default`

```html
<sc-button type="default">默认按钮</sc-button>
<sc-button type="primary">主要按钮</sc-button>
<sc-button type="warning">警告按钮</sc-button>
<sc-button type="danger">危险按钮</sc-button>
```

#### 朴素按钮

```html
<sc-button type="default" plain>默认按钮</sc-button>
<sc-button type="primary" plain>主要按钮</sc-button>
<sc-button type="warning" plain>警告按钮</sc-button>
<sc-button type="danger" plain>危险按钮</sc-button>
```

#### 按钮尺寸
支持`large`、`normal`、`small`、`mini`四种尺寸，默认为`normal`

```html 
<sc-button size="large">大号按钮</sc-button>
<sc-button size="normal">普通按钮</sc-button>
<sc-button size="small">小型按钮</sc-button>
<sc-button size="mini">迷你按钮</sc-button>
```

#### 禁用状态
通过`disabled`属性来禁用按钮，此时按钮不可点击

```html
<sc-button disabled>禁用状态</sc-button>
```

#### 加载状态

```html 
<sc-button loading />
<sc-button loading type="primary" />
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| type | 按钮类型，可选值为 `primary` `warning` `danger` | `String` | `default` |
| size | 按钮尺寸，可选值为 `normal` `large` `small` `mini` | `String` | `normal` |
| plain | 是否为朴素按钮 | `Boolean` | `false` |
| disabled | 是否禁用 | `Boolean` | `false` |
| loading | 是否显示为加载状态 | `Boolean` | `false` |
| block | 是否为块级元素 | `Boolean` | `false` |
| square | 是否为方形按钮 | `Boolean` | `false` |
| open-type | 微信开放能力，具体支持可参考 [微信官方文档](https://mp.weixin.qq.com/debug/wxadoc/dev/component/button.html) | `String` | - |
| app-parameter | 打开 APP 时，向 APP 传递的参数 | `String` | - |
| hover-start-time | 按住后多久出现点击态，单位毫秒 | `Number` | 20 |
| hover-stay-time | 手指松开后点击态保留时间，单位毫秒 | `Number` | 70 |
| lang | 指定返回用户信息的语言，zh_CN 简体中文，<br>zh_TW 繁体中文，en 英文 | `String` | `en` |
| session-from | 会话来源 | `String` | - |
| send-message-title | 会话内消息卡片标题 | `String` | 当前标题 |
| send-message-path | 会话内消息卡片点击跳转小程序路径 | `String` | 当前分享路径 |
| send-message-img | sendMessageImg | `String` | 截图 |
| show-message-card | 显示会话内消息卡片 | `String` | `false` |

### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| bind:click | 点击按钮且按钮状态不为加载或禁用时触发 | - |
| bind:getuserinfo | 用户点击该按钮时，会返回获取到的用户信息，<br>从返回参数的 detail 中获取到的值同 wx.getUserInfo | - |
| bind:contact | 客服消息回调 | - |
| bind:getphonenumber | 获取用户手机号回调 | - |
| bind:error | 当使用开放能力时，发生错误的回调 | - |

### 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 根节点样式类 |
| loading-class | 加载图标样式类 |