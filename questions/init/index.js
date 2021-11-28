import Inquirer from 'inquirer';

const frameWork = ()=>{
  return {
    type: 'rawlist',
    message: '选择您的开发框架',
    name: "frameWork",
    choices: [
      {
        name: 'vue 2.x',
        value: 'vue2'
      },
      {
        name: 'vue 3.x',
        value: 'vue3'
      },
      {
        name: 'react',
        value: 'react'
      },
      {
        name: 'jQuery',
        value: 'jq'
      }
    ]
  }
}
export default async () => {
  return Inquirer.prompt([
    frameWork(),
  ])
}