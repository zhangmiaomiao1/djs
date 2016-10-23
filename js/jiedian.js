/**
 * Created by Administrator on 2016/10/20.
 */
function getChilds(parent,type){
    var type=type===undefined?true:type;
    var childs=parent.childNodes;
    var arr=[];
    for(var i=0;i<childs.length;i++){
        if(type==true){
            if(childs[i].nodeType!==3&&childs[i].nodeType!==8){//获取子节点时不要文本，
                // 空也是文本，同时也不要注释，以为注释没有操作的必要
                arr.push(childs[i]);
            }
        }else if(type==false){
            if(!(childs[i].nodeType==3&&childs[i].nodeValue.
                replace(/^\s*|\s*$/g,"")==""||childs[i].nodeType==8)){
                arr.push(childs[i]);//要操作"我输了"
            }
        }
    }
    return arr;
}
//    var div=document.getElementsByTagName("div")[0]
//    console.log(getChilds(div,false).length)
//    获取第一个子节点
function getFirst(parent,type){
    var type=type===undefined?true:type;
    return getChilds(parent,type)[0]
}
//    获取最后一个子节点
function getLast(parent,type){
    var type=type===undefined?true:type;
    return getChilds(parent,type)[getChilds(parent,type).length-1]
}
//8.获得一个指定子节点
function getNum(parent,num,type){
    var type=type===undefined?true:type;
    return getChilds(parent,type)[num];
}
// console.log(getNum(div,false,2))
//获取上一个兄弟节点
//10.获得上一个兄弟节点
function getUp(parent,type){
    var type=type===undefined?true:type
    var up=parent.previousSibling;//null
    if(up==null){
        return false;
    }
    if(type==true){
        while(up.nodeType==3||up.nodeType==8){
            up=up.previousSibling;//只要不满足条件就继续寻找下一个是否满足条件
            if(up==null){
                return false;
            }
        }
    }else if(type==false){
        while(up.nodeType==3&&up.nodeValue.replace(/^\s*|\s*$/g,"")==""||up.nodeType==8){
            up=up.previousSibling;
            if(up==null){
                return false;
            }
        }
    }
    return up;
}
/*var son=document.getElementsByClassName("son")[0]
console.log(getUp(son,false))*/

//    获取下一个兄弟节点
function getNext(father,type){
    var type=type===undefined?true:type;
    var next=father.nextSibling;//null
    if(next==null){
        return false;
    }
    if(type==true){
        while(next.nodeType==3||next.nodeType==8){
            next=next.nextSibling;
            if(next==null){
                return false;
            }
        }
    }else if(type==false){
        while(next.nodeType==3&&next.nodeValue.replace(/^\s*|\s*$/g,"")==""||next.nodeType==8)
            next=next.nextSibling;
        if(next==null){
            return false;
        }
    }
    return next;
}
/*var son=document.getElementsByClassName("son")[0]
////alert(son)
console.log(getNext(son,false))*/


//    在某个元素后添加
//obj表示在谁的后面
//obj1表示要加入的元素
function After(parent,obj,obj1){
//        var parent=obj.parentNode
    var next=getNext(obj)
    if(!next){
        parent.appendChild(obj1)
        return;
    }
    parent.insertBefore(obj1,next)
}
//    把某个元素放在某个元素前面
//    不用获取爸爸是因为要往函数里面传入它的爸爸
function pre(parent,obj){
//    function  pre(parent,type,obj){
//        var type=type===undefined?true:type;//如果出现纯文本的情况就设置默认值
//        var first=getFirst(parent,type)
    var first=getFirst(parent)
    if(!first){
        parent.appendChild(obj)
        return;
    }
    parent.insertBefore(obj,first)
}