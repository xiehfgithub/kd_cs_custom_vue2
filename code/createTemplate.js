/*
 * @Author: haifeng_xie haifeng_xie@kingdee.com
 * @Date: 2024-07-30 17:04:42
 * @LastEditors: haifeng_xie haifeng_xie@kingdee.com
 * @LastEditTime: 2024-07-31 09:51:10
 * @FilePath: \code\createTemplate.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const fs = require('fs');
const path = require('path');
const util = require('util');
const inquirer = require('inquirer')
 
const copyFile = util.promisify(fs.copyFile);
const mkdir = util.promisify(fs.mkdir);
const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const renameFile = util.promisify(fs.rename);

// const args = process.argv.slice(2);
// console.log('命令行参数:', args);

let fileName = "abc";
const parentFolder= "MainComponent"; // 父级主文件夹, 新建目录存放地址 自行修改

async function createTemplateFolder(sourceDir, destDir, keywords) {
  await mkdir(destDir);
  const files = await readdir(path.join(sourceDir, ''));
  for (const file of files) {
    const sourcePath = path.join(sourceDir, file);
    const destPath = path.join(destDir, file);    
    console.log("生成模板", destPath);
    await copyFile(sourcePath, destPath);
    let content = await readFile(destPath, 'utf8');
    for (const [keyword, replacement] of Object.entries(keywords)) {
      content = content.replace(new RegExp(keyword, 'g'), replacement);
    }
    await writeFile(destPath, content, 'utf8');

    const oldPath = destPath;
    const newPath = oldPath.replace(new RegExp("TemplateComponent", 'g'), fileName); 
    console.log("替换模板", newPath);
    await renameFile(oldPath, newPath);
  }
}

// 读取输入新建组件名称并新建
let question = [
  {
    name: "name",
    type: 'input',
    message: "请输入新建组件名称「首字母大写」",
    validate (val) {
      if (val === '') {
        return 'Name is required!';
      } else {
        return true;
      }
    }
  }
]
inquirer.prompt(question).then(answers => {
  fileName = answers.name;
  console.log(fileName);
  // 使用示例
  const sourceDir = './src/components/TemplateComponent';
  const destDir = path.join('./src/components/', parentFolder, fileName);
  const keywords = {
    'TemplateComponent': fileName,
  };

  createTemplateFolder(sourceDir, destDir, keywords).then(() => {
    console.log(`Template folder created and keywords[" ${fileName}} "] replaced.`);
    console.log(`新组件文件夹${fileName}创建完成: `, destDir);
  }).catch(error => {
    console.error('Error creating template folder:', error);
  });

})

