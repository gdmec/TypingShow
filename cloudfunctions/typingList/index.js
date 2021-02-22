// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
const typinglistCollection = db.collection('typing')
// 云函数入口函数  

const _ = db.command
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  return await typinglistCollection.where({}).update({
    data:{
      speed:_.inc(5)
    }
  })
  // 自动写入云存储，但是cdn刷新不及时，废弃
  // let res = await typinglistCollection.field({
  //   _id:false,
  //   name:true,
  //   speed:true,
  //   err:true
  // }).limit(num).orderBy('speed','desc').get()

  // let str = JSON.stringify(res.data)
  // let buf = Buffer.from(str,'utf-8')
  // return await cloud.uploadFile({
  //   cloudPath: 'typelist.json',
  //   fileContent: buf,
  // })

 
}