module skin {
	/**
	 *
	 * @author 
	 *
	 */
	export class CardSort {
    	
    	public static sort(cardNos:number[]):number[]
    	{
            cardNos.sort(function(a,b){return a<b?1:-1});//从大到小排序
            return cardNos;
    	}
        
        //isDesc = 1 从大到小排序 isDesc = -1从小到大排序
        public static sortSimpleCard(cardNos:any[],isDesc = 1):any[]
        {
            cardNos.sort(
                function(a,b)
                {
                    if(Number(a.length)<Number(b.length))
                    {
                        return isDesc;
                    }
                    else if(Number(a.length) > Number(b.length))
                    {
                        return -isDesc;
                    }
                    else
                    {
                        return a[0] < b[0] ? isDesc : -isDesc;
                    }
                }
            );
            return cardNos;
        }
        
        //从大到小排序
        public static sortById(cardNos:any[],isDesc = 1):any[]
        {
            cardNos.sort(function(a,b){return Number(a.id)<Number(b.id)?isDesc:-isDesc});
            return cardNos;
        }
        
        //从小到大排序
        public static sortByArrLen(cardNos:any[]):any[]
        {
            cardNos.sort(function(a,b){return Number(a.length)<Number(b.length)?-1:1});
            return cardNos;
        }
        
        public static cardsToIds(cardNos:any[]):any[]
        {
            var ids = [];
            for(var key in cardNos)
            {
                ids.push(cardNos[key].id);
            }
            return ids;
        }
	}
}
