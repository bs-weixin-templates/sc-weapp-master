import {
  create
} from '../common/create';

Component({
  properties: {
    showPop: Boolean
  },
data:{
  years: [],
  months: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
  value: [9, 0],
  initValue: [9, 0]
},
  methods: {
    onPopupClose() {
      this.triggerEvent('close');
    },
    init() {
      const now = new Date();
      const currentYear = now.getFullYear();
      const currentMonth = now.getMonth();
      const years = [];
      const value = [9, currentMonth];
      for (let i = 9; i >= 0; i--) {
        years.push(currentYear - i);
      }
      this.setData({
        years,
        value,
        initValue: value,
      })
    },
    onChange(e) {
      this.setData({
        value: e.detail.value,
      });
    },
    reset() {
      // const { initValue } = this.data;
      // this.setData({
      //   value: initValue
      // })
      this.triggerEvent('close');
    },
    handleConfirm() {
      var that = this;
      setTimeout(function(){
        const { years, months, value } = that.data;
        const outPutValue = years[value[0]] + '-' + months[value[1]];
        that.triggerEvent('confirm', outPutValue);
      },500);
    }
  },
  attached(){
    this.init();
  },
  ready(){
    this.init();
  }
});