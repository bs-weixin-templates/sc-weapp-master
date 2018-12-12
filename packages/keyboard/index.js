


import { create } from '../common/create';
import { mergeOptionsToData } from '../common/utils'
import { $scBackdrop } from '../index'
const defaults = {
    className: '',
    titleText: '安全键盘',
    cancelText: '取消',
    inputText: '输入数字密码',
    showCancel: true,
    keys:[],
     visible:false,
    disorder: false,
  
}

/**
 * 给指一位数组随机生成二维数组
 * 
 * @param {boolean} [isRandom=false] 是否随机
 * @param {array} [arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]] 默认数组
 * @returns 
 */
const upsetNums = (isRandom = false, arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) => {
    if (isRandom) {
        const floor = Math.floor
        const random = Math.random
        const len = arr.length
        let i, j, temp, n = floor(len / 2) + 1
        while (n--) {
            i = floor(random() * len)
            j = floor(random() * len)
            if (i !== j) {
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }

    let nums = []

    for (let i = 0; i < 4; i++) {
        nums.push(arr.slice(i * 3, (i + 1) * 3))
    }

    return nums
}
create({
  props:{
    titleText: {
      type: String,
      value: '安全键盘'
    },
    cancelText: {
      type: String,
      value: '取消'
    },
    inputText: {
      type: String,
      value: '输入数字密码'
    },
    value: {
      type: String,
      value: ''
    },
    showCancel: {
      type: Boolean,
      value: true

    },
    keys: {
      type:Array,
      value: [1, 2, 3, 4, 5, 6]
    },
    show:{
      type: Boolean,
    value: false

  },
    disorder: {
      type: Boolean,
      value: false

    }
  },
  data: mergeOptionsToData(defaults),
  ready() {
    let {disorder}=this.data
    let nums= upsetNums(disorder)

    this.setData({ nums})

  },
    methods: {
      toggleBottomPopup() {
        this.setData({
          "show": !this.data.show,
          value:''
        });
      },
     
      /**
       * 隐藏
       */
      hide() {
        this.$$setData({ show: false })
  
      },
     
      /**
       * 增加
       */
      increase(e) {
        const dataset = e.currentTarget.dataset
        const value = String(dataset.value)
        const keyboard = this.data
        const length = keyboard.value.length
        const callback = () => {
          if (length === 5) {
           // const preCloseCallback = this.data.onConfirm
         
            const performCloseDialog = () => {
              this.updateValue()
              this.hide()
            }

        
            //if (preCloseCallback && typeof preCloseCallback === `function`) {
              const preCloseCallbackResult =this.$emit("onConfirm",keyboard.value); // preCloseCallback.call(this, keyboard.value)
            console.log(preCloseCallbackResult)
              if (typeof preCloseCallbackResult === 'object') {
                if (preCloseCallbackResult.closePromise) {
                  preCloseCallbackResult.closePromise.then(performCloseDialog, this.updateValue)
                } else {
                  preCloseCallbackResult.then(performCloseDialog, this.updateValue)
                }
              } else if (preCloseCallbackResult !== false) {
                performCloseDialog()
              } else {
                this.updateValue()
              }
            //} else {
             // performCloseDialog()
          //  }
          }
        }

        if (length >= 6) {
          return false
        }

        this.updateValue(keyboard.value + value, callback)
      },
      /**
       * 减少
       */
      decrease(e) {
        const dataset = e.currentTarget.dataset
        const value = String(dataset.value)
        const keyboard = this.data
        const length = keyboard.value.length

        if (length === 0) {
          return false
        }

        this.updateValue(keyboard.value.substr(0, length - 1))
      },
      /**
       * 更新
       */
      updateValue(value = '', callback = () => { }) {
        this.$$setData({ value }).then(() => this.$$requestAnimationFrame(callback))
      },
    },
    created() {
      //this.$scBackdrop = $scBackdrop('#sc-backdrop', this)
    },
  }
);

