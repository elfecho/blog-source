#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e
if [ -z $1 ];then  
  echo "params is necessary"   
  exit 1
fi 

# 生成静态文件
npm run build

# 推入服务器
# scp -P 22  -r /Users/admin/Desktop/myCode/blog/docs/.vuepress/dist root@118.25.210.106:/opt/nginx/html/blog

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'Elfecho.cn' > CNAME

git init
git add -A
git commit -m $1

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:elfecho/elfecho.git master

# 这里需要建两个仓库  一个放项目源文件 一个放gitpage  下面就是提交项目源文件的脚本
cd ../../../

git init
git add .
git commit -m $1
# git push -u origin master
git push -f git@github.com:elfecho/blog-source.git master