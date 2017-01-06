//克隆对象
var cloneObj = function(obj){
    var str, newobj = obj.constructor === Array ? [] : {};
    if(typeof obj !== 'object'){
        return;
    } else if(window.JSON){
        str = JSON.stringify(obj), //系列化对象
        newobj = JSON.parse(str); //还原
    } else {
        for(var i in obj){
            newobj[i] = typeof obj[i] === 'object' ? 
            cloneObj(obj[i]) : obj[i]; 
        }
    }
    return newobj;
};


/* 动态控制小数位数 */
Subtr = function(arg1,arg2){
	var r1,r2,m,n;
	try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
	try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
	m=Math.pow(10,Math.max(r1,r2));
	//动态控制精度长度
	n=(r1>=r2)?r1:r2;
return ((arg1*m-arg2*m)/m).toFixed(n);
}



//ajax下载
/* jQuery下载  */
jQuery.download = function(url, data, method) {
	if (url && data) {
		data = typeof data == 'string' ? data : jQuery.param(data);
		var inputs = '';
		jQuery.each(
						data.split('&'),
						function() {
							var pair = this.split('=');
							inputs += '<input type="hidden" name="'+ pair[0] +'" value="'+ pair[1] +'" />';
						});
		jQuery('<form action="' + url + '" method="'
						+ (method || 'post') + '">' + inputs
						+ '</form>').appendTo('body').submit().remove();
	}
};


//js数字千分位格式化（正则表达式版）
function toThousands(num) {
    return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
}
