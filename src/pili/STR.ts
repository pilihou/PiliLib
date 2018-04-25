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

		/**将html文本转成textFlow可用的格式*/
		public static getTextFlow(str: string): egret.ITextElement[] {
			let styleParser = new egret.HtmlTextParser();
			return styleParser.parse(str);
		}

		/**删除目标字符串两端的空格 */
		public static trim(targetString: string): string {
            return STR.trimLeft(STR.trimRight(targetString));
        }

		/**删除目标字符串左侧的空格 */
        public static trimLeft(targetString: string): string {
            var tempChar: string = "";
            for (var i: number = 0; i < targetString.length; i++) {
                tempChar = targetString.charAt(i);
                if (tempChar != " " && tempChar != "\n" && tempChar != "\r") {
                    break;
                }
            }
            return targetString.substr(i);
        }

		/**删除目标字符串右侧的空格 */
        public static trimRight(targetString: string): string {
            var tempChar: string = "";
            for (var i: number = targetString.length - 1; i >= 0; i--) {
                tempChar = targetString.charAt(i);
                if (tempChar != " " && tempChar != "\n" && tempChar != "\r") {
                    break;
                }
            }
            return targetString.substring(0, i + 1);
        }
	}
}