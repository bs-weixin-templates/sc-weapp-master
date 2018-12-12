//index.js
var wxbarcode = require('../../../utils/index.js');
import Page from '../../../common/page';
Page({

  data: {
    bankList: [{ "id": "4779E76CAE454C28A28138AC750B66D2", "memberId": "472A3B179AF14FF1A230E75092CC9CA2", "accountNo": "0018", "showAccountNo": "平安银行储蓄卡(0018)", "paymentName": "平安银行", "paymentCode": "PAB", "paywayType": "01", "createtime": 1533192713673, "channelId": "c8b1fc12930e4d7dbce55d664d0c3c48", "seqnum": 0, "agreementNo": "e47ea13128c5429d814cded1fc60ddce", "contractNo": "A20180802000000000003", "accountType": "01", "extendFlag": "0" }],
    showBankList: false,
    code: '1234567890123456789'
  },
  toggle(type) {
    this.setData({
      [type]: !this.data[type]
    });
  },
  selectBankClick(){
    this.toggle('showBankList')
  },
  onLoad: function () {
   
    wxbarcode.qrcode('qrcode', '1234567890123456789', 420, 420);
  },
    handleFruitChange({ detail = {} }) {
      this.selectBankClick()
  },
})
