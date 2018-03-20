module pili {
	export class ARR {
		/**将list拆分成length个一组的数组 */
		public static slice(list: any[], len: number): any[][] {
			let result: any[][] = [];
			for (let i: number = 0, len: number = list.length; i < len; i += length) {
				result.push(list.slice(i, i + length));
			}
			return result;
		}

		/**（随机排序）使用Fisher Yates洗牌算法 */
		public static shuffle(list:any[]):any[] {
			let j:number;
			let temp:any;
			for (let i:number = list.length - 1; i > 0; i--) {
				j = Math.floor(Math.random() * (i + 1));
				temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
			return list;
		}

	}
}