import _ from 'lodash'
import {settings as DEFAULT_SETTING} from './constants'

const BLOG_NAME = `mskf's blog`

const isBrowser = ()=>{
  let hasWindow = 1
  try{
    window = window
  }catch (e) {
    hasWindow = 0
  }
  return !!hasWindow
}

const getBlogSetting = (name)=>{
  if(!isBrowser()) return []

  let str = window.localStorage.getItem(BLOG_NAME)
  let settings = {}
  if(!str){
    settings = setBlogSetting()
  }else{
    settings = JSON.parse(str)
  }
  return settings[name]
}

const setBlogSetting = (settings = DEFAULT_SETTING)=>{
  if(!isBrowser()) return

  let str = JSON.stringify(settings)
  window.localStorage.setItem(BLOG_NAME,str)
  return settings
}

export {getBlogSetting,setBlogSetting}