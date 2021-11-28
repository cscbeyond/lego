import fs from 'fs'
import path from 'path'
import Commander from 'commander'
import downLoad from '../gitOperation/download.js'
import initSelections from '../questions/init/index.js'

Commander.command('init <project-name>')
.description('初始化项目')
.action(async (cmd)=>{
  console.log('cmd:', cmd)
  let result = await initSelections();
  console.log('result', result)
  downLoad({
    projectName: cmd, 
    type: result.frameWork
  })
})
Commander.parse(process.argv);

export default ()=>{
  return {
  }
}