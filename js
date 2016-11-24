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
