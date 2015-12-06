module game {
	/**
	 *
	 * @author 
	 *
	 */
	export class Func {
		public constructor() {
		}
		
		public static getArrIndex(arr:any[],val)
		{
            for(var key in arr) {
//                console.log("key:" + key + " _ " + arr[key]+" val:"+val);
		        if(arr[key] == val){
                    return key;
		        }
		    }
            return -1;
		}
		
        public static getArrIndexs(arr:any[],val):number[]
        {
            var arr = [];
            for(var key in arr) {
                //                console.log("key:" + key + " _ " + arr[key]);
                if(arr[key] == val){
                    arr.push(key);
                }
            }
            return arr;
        }
		//差集
        public static mini(arr1:number[],arr2:number[]):number[]{   
            var arr3 = [];
            for(var i=0; i < arr1.length; i++){   
                var flag = true;   
                for(var j=0; j < arr2.length; j++){   
                    if(arr1[i] == arr2[j])   
                        flag = false;   
                    }   
                    if(flag)   
                        arr3.push(arr1[i]);   
                }  
            return arr3;
        }
	}
}
