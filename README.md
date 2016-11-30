# spadesUploader
###Author Jason

Simplify FEX's WebUploader . Make it more easier to use.
##Feature:
- 简化配置多个上传实例
- 封装配置操作
- 提供上传组件的基本UI
- 可以作为jQuery插件使用,导入jQuery即可，但不依赖jQuery
- 提供暴露的class 供配置样式

 

##Usage
* 请在你的项目目录新建upload文件夹，并把webuploader所有文件
* 保存到里面 如:  upload/webuploader.js upload/Uploader.swf ... 的形式
* 在你的index.html中包含: webuploader.js 、 webuploader.css 以及 simpleSpade.js

传入的参数，options
```
options= { 
    serverPath:'../balight/photo/uploadcode',//提交服务端的URL
     number: 1,   //创建的上传实例个数，默认1个。
     type: img,//img or file 上传图片 or  上传普通文件
     divId:id,  // 你要在页面哪个div下创建这个上传组件
    fileSizeLimit:,//  所有文件的总上传大小不超过这个值，
    uploadText:'', //标签显示的文本``
    thumbnailSize:100 //缩略图的大小
  };
 ```
 
 示例代码:
 ```
 //options的部分参数的意义参见WebUploader官方文档，后续会继续更新加入更多可配置的参数，使得组件更灵活易用
 	var options={
			serverPath:'../balight/photo/uploadcode',
			number:1,
			type:'file',
			divId:'testupload',
			uploadText:'上传组件示例',
			thumbnailSize:100
		};
		//这种是jQuery引入的方式，所以必须先把jQuery引入工程。
  $.fn.createUpload(optionsx);
 ```
 
