import Page from '../../../common/page';

Page({
  data: {
    show:false
    
  },
  onConfirm(customEvent ){
    console.log(customEvent.detail)
    this.setData({ show: false })
  },

  open(){
    this.setData({show:true})
  }
});
