import Page from '../../common/page';

Page({
  data: {
    show3:false,
    fruit: [{
      id: 1,
      name: '香蕉',
    }, {
      id: 2,
      name: '苹果'
    }, {
      id: 3,
      name: '西瓜'
    }, {
      id: 4,
      name: '葡萄',
    }],
    current: '苹果',
    position: 'left',
    animal: '熊猫',
    checked: false,
    disabled: false,
  },
  handleFruitChange({ detail = {} }) {
    this.setData({
      current: detail.value
    });
  },
  handleClick() {
    this.setData({
      position: this.data.position.indexOf('left') !== -1 ? 'right' : 'left',
    });
  },
  handleDisabled() {
    this.setData({
      disabled: !this.data.disabled
    });
  },
  handleAnimalChange({ detail = {} }) {
    this.setData({
      checked: detail.current
    });
  },
  toggleActionSheet3() {
    this.toggle('show3');
  },

  toggle(type) {
    this.setData({
      [type]: !this.data[type]
    });
  },
});
