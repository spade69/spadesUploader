# spadesUploader
###Author Jason

Simplify FEX's WebUploader . Make it more easier to use.
##Feature:
- 简化配置多个上传实例
- 封装配置操作
- 提供模板渲染上传
- 提供暴露的class 供配置样式
 

##Usage
* 请在你的项目目录新建upload文件夹，并把webuploader所有文件
* 保存到里面 如:
* upload/webuploader.js upload/Uploader.swf ... 的形式

传入的参数
```
options= { 
    serverPath:'../balight/photo/uploadcode',
     number: 2,   //创建的上传实例个数
     type: img,//img or file 上传图片 or  上传普通文件
     divId:id,  // 你要在页面哪个div下创建这个上传组件
    fileSizeLimit:,// int  所有文件的总上传大小不超过这个值
     pickText:'选择XX' ,//选择文件 or 选择图片 选择编码显示的
    uploadText:'' //标签显示的文本``
  };
 ```

