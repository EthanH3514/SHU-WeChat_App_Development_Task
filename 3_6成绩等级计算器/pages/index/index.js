// index.js
Page({
  data: {
    score:0
  },
  scoreInput:function(e){
    this.setData({
      score:e.detail.value
    })
  }
})
