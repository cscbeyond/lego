import shell from 'shelljs';
import fs from 'fs';
import path from 'path'
const downLoad = (obj)=>{
  if(shell.which('git')){
    console.log(process.cwd())
    let curPath = process.cwd();
    shell.exec(`cd ${process.cwd()}`);
    var isexist = fs.existsSync( `curPath/${obj.name}` )
    console.log('isexist', isexist)
    if(!isexist){
      // fs.mkdirSync(path.resolve(`${obj.name}`))
      // shell.exec(`fs.mkdir('')`)
    }
    // shell.exec(`git clone ${gitUrl}`)
  }
}
export default downLoad;