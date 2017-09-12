// var order = ['red', 'yellow', 'blue', 'green', 'red']
// Page({
//   data: {
//     toView: 'red',
//     scrollTop: 100
//   },
//   upper: function(e) {
//     console.log(e)
//   },
//   lower: function(e) {
//     console.log(e)
//   },
//   scroll: function(e) {
//     console.log(e)
//   },
//   tap: function(e) {
//     for (var i = 0; i < order.length; ++i) {
//       if (order[i] === this.data.toView) {
//         this.setData({
//           toView: order[i + 1]
//         })
//         break
//       }
//     }
//   },
//   tapMove: function(e) {
//     this.setData({
//       scrollTop: this.data.scrollTop + 10
//     })
//   }
// })
Page({
  data:{
    imgUrls:[    'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    autoplay: true,
    interval: 5000
  },
  changeAuto:function(e){
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e){
    this.setData({
      interval:e.detail.value
    })
  }
})