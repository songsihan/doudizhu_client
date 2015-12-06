var game;
(function (game) {
    /**
     *
     * @author
     *
     */
    var Func = (function () {
        function Func() {
        }
        var d = __define,c=Func;p=c.prototype;
        Func.getArrIndex = function (arr, val) {
            for (var key in arr) {
                //                console.log("key:" + key + " _ " + arr[key]+" val:"+val);
                if (arr[key] == val) {
                    return key;
                }
            }
            return -1;
        };
        Func.getArrIndexs = function (arr, val) {
            var arr = [];
            for (var key in arr) {
                //                console.log("key:" + key + " _ " + arr[key]);
                if (arr[key] == val) {
                    arr.push(key);
                }
            }
            return arr;
        };
        //差集
        Func.mini = function (arr1, arr2) {
            var arr3 = [];
            for (var i = 0; i < arr1.length; i++) {
                var flag = true;
                for (var j = 0; j < arr2.length; j++) {
                    if (arr1[i] == arr2[j])
                        flag = false;
                }
                if (flag)
                    arr3.push(arr1[i]);
            }
            return arr3;
        };
        return Func;
    })();
    game.Func = Func;
    egret.registerClass(Func,"game.Func");
})(game || (game = {}));
