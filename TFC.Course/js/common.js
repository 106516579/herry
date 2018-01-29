var basePath = "http://api.course.tfchina.org/";

function CallApi(apiUrl, type, requestData, successCallBack, errorCallback) {
    if (type == undefined || type.length === 0) {
        type = "get";
    }
    if (requestData == undefined) {
        requestData = null;
    }
    $.ajax({
        url: basePath + apiUrl,
        type: type,
        dataType: "json",
        data: requestData,
        success: function(data) {
            if (data.Status === 1) {
                if (typeof successCallBack === 'function') {
                    successCallBack(data);
                }
            } else if (data.Status <= 0) {
                if (typeof errorCallback === 'function' && errorCallback != undefined) {
                    errorCallback(data);
                }
            } else {
                alert("请求出错", data.Message);
            }
        },
        error: function(xmlHttpRequest, textStatus, errorThrown) {
            console.log("url:" + apiUrl);
            console.log("xmlHttpRequest:" + xmlHttpRequest);
            console.log("textStatus:" + textStatus);
            console.log("errorThrown:" + errorThrown);
            //alert("加载中", "AJAX请求出错，请联系管理员");
        }
    });
}


function islogin() {
    var userId = $.cookie('UserId');
    if (userId == null || userId == undefined || isNaN(+userId) || +userId === 0) {
        window.location.href = 'Default.html';
    }
}

$.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

Date.prototype.Format = function(fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12, //小时
        "H+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    var week = {
        "0": "/u65e5",
        "1": "/u4e00",
        "2": "/u4e8c",
        "3": "/u4e09",
        "4": "/u56db",
        "5": "/u4e94",
        "6": "/u516d"
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    if (/(E+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468") : "") + week[this.getDay() + ""]);
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
};

function DateFormat(value, format) {
    if (format == undefined) {
        format = "yyyy-MM-dd";
    }
    if (format === "full") {
        format = "yyyy-MM-dd HH:mm";
    }
    if (value == null) {
        return "";
    }
    return new Date(value).Format(format);
}

function StringFormat() {
    if (arguments.length === 0)
        return null;
    var str = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        var re = new RegExp("\\{" + (i - 1) + "\\}", "gm");
        str = str.replace(re, arguments[i]);
    }
    return str;
}

function NullFormat(value) {
    if (value == null) {
        return "";
    }
    return value;
}

function NumberFormat(value, fixed) {
    if (value == null) {
        return "";
    }
    return value.toFixed(fixed);
}

function BooleanFormat(value) {
    if (value) {
        return "是";
    }
    return "否";
}

//判断是否
function judge(ele){
    if(ele){
        return '是';
    }else{
        return '否';
    }
}

function GetRegionName(region) {
    region = region.toUpperCase();
    var displayName = '';
    switch (region) {
        case 'YN':
            displayName = '云南';
            break;
        case 'GG':
            displayName = '广甘';
            break;
        case 'YM':
            displayName = '粤闽';
            break;
        default:
            displayName = '未知';
    }
    return displayName;
}

function GetSectorName(Sector) {
    var displaySector = '';
    switch (Sector) {
        case '15-17':
            displaySector = '2015-2017届';
            break;
        case '16-18':
            displaySector = '2016-2018届';
            break;
        case '17-19':
            displaySector = '2017-2019届';
            break;
        default:
            displaySector = "未知"

    }
    return displaySector;
}
function formateDateAndTimeToString(date)  
{  
    var hours = date.getHours();  
    var mins = date.getMinutes();  
    var secs = date.getSeconds();  
    var msecs = date.getMilliseconds();  
    if(hours<10) hours = "0"+hours;  
    if(mins<10) mins = "0"+mins;  
    if(secs<10) secs = "0"+secs;  
    if(msecs<10) secs = "0"+msecs;  
    return formatDateToString(date)+hours+mins+secs+msecs;  
}  