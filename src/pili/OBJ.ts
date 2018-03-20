module pili {
	export class OBJ {
		/**判断obj是否为null或{} */
		public static isEmpty(obj:any):boolean{
			return obj ? Object.keys(obj).length == 0 : obj == null;
		}
		
		/**清空obj中的数据 */
		public static empty(obj:any){
			if(obj){
				if(obj instanceof Array) obj.length = 0;
				else{
					for(let key in obj){
						delete obj[key];
					}
				}
			}
		}

		/**进行对象的深度克隆,注意了,只支持普通的数据模式的对象,不支持带方法的对象克隆 */
		public static clone(obj:any):any{
			return obj ? JSON.parse(JSON.stringify(obj)) : null;
		}
	}
}