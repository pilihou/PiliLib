module pili {
	export class STR {
		/**
		 * 将ori用fillStr来填充,如fill(1,"000")，输出001
		 * @param ori 要填充的源
		 * @param fillStr 填充内容
		 * @param isPre 是否放前面
		 */
		public static fill(ori: number | string, fillStr: string, isPre: boolean = true): string {
			let strOri: string = ori + "";
			let len: number = strOri.length;
			let fillLen: number = fillStr.length;
			return len >= fillLen ? strOri : isPre ? fillStr.substring(0, fillLen - len) + strOri : strOri + fillStr.substring(len);
		}
	}
}