/****
*Feature:
* 简化配置多个上传实例
* 封装配置操作
* 提供模板渲染上传
* 提供暴露的class 供配置样式
* 
* 
* Usage
* 请在你的项目目录新建upload文件夹，并把webuploader所有文件
* 保存到里面 如:
* upload/webuploader.js upload/Uploader.swf ... 的形式
*
* options= {
*     serverPath:'../balight/photo/uploadcode',
*     number: 2,   //创建的上传实例个数
*     type: img,//img or file 上传图片 or  上传普通文件
*     divId:id,  // 你要在页面哪个div下创建这个上传组件
*     fileSizeLimit:,// int  所有文件的总上传大小不超过这个值
*     pickText:'选择XX' ,//选择文件 or 选择图片 选择编码显示的
* }   uploadText: ,
*   
* 
*Author Jason
*Date 2016/11/25
*****/

(function(jQuery,WebUploader){
    //param  setting  Global variable
    var rootx=this;
    var resize=false,
        swf='upload/Uploader.swf',
        uploadId='upload',
        classRoot='uploadRoot',
        classUploadList='uploader-list',
        picker='pick',
        classBtn='btn',
        extendsion='gif,jpg,jpeg,bmp,png',
        imgTitle='Images'
        msgHint={img:'选择图片',file:'选择文件',text:''};
        
    //判断传入是否为对象
    function isObject(value){
        var type=typeof obj;
        return type==='function'||type==='object'&&!!obj;
    }
    //generate random string
   function randomString(len){
        len=len||32;
        var chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var maxPos=chars.length;
        var pwd='';
        for(var i=0;i<len;i++){
            //Math.random()  乘以最大长度然后取整，就能生成随机的一位字符
            //随机的其实是这个index 下标
            pwd+=chars.charAt(Math.floor(Math.random()*maxPos));
        }
        return pwd;
    }

    function render(options){
        var classObj={};
        var type=options.type;
        var id=options.divId;
        var item=document.getElementById(id);
        var hintx=(options.type==='img')?msgHint['img']:msgHint['file'];
        picker+=randomString();
        uploadId+=randomString();
        
        var uploadDom='<div id='+uploadId+'class='+classRoot+'>'+
            '<div class='+classUploadList+'></div>'+'<div id='+picker+'>'+hintx+'</div>'
        +'</div>';

        item.innerHTML+=uploadDom;
    }

    //初始化，创建上传实例 
    function initUploader(options){
        if(!rootx.isObject(options)){
                console.log("error");
                return ;
        }
        else if(!WebUploader.Uploader.support()){
            var error="上传组件不支持你的浏览器！请使用Chrome!";
            alert(error);
            return ;
        }
        else{
            //common setting
            var settings={
                    method:'POST',
                    // swf文件路径
                    swf:swf,
                    // 文件接收服务端。
                    server:options.serverPath,
                    // 选择文件的按钮。可选。
                    // 内部根据当前运行是创建，可能是input元素，也可能是flash.
                    fileSizeLimit:options.fileSizeLimit, 
                    pick: picker // picker id 
                };
            if(options.type==='img'){
                settings['auto'] = true;
                settings['accept']={
                    title:imgTitle,
                    extensions:extendsion,
                    mimeTypes:'image/*'
                }
            }else if(options.type==='file'){
                settings['resize']=false;
            }
            var uploader=WebUploader.create(settings);
        }
        return uploader;
    }

    function createUpload(options){
        rootx.uploader=initUploader(options);
        // 当有文件添加进来的时候
        rootx.uploader.on('fileQueued',function(file){

        });
    }

    return createUpload;
})(jQuery,WebUploader);


