/**
 * 使用mockjs模拟数据接口
 */

import Mock from 'mockjs'
import data from './data1.json'

Mock.mock('/api/homeImg',{
  code:0,
  data :data.homeImg
})


//不需要export，在mainjs引入就行
