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
		
		/**
		* 将转换数字为xx万,xx亿（采用截掉保留小数位数之后的数值）
		* @param num 要转换的值
		* @param {number} fix 保留几位小数，默认1位
		* @param {number} power 大于等于这个数量级开始转换，如大于等于100000开始转，这里传5
		* @returns {string}
		*/
		public static formatNumByType2(num:number, fix:number=1, power:number=0):string {
			//亿 万亿 兆 万兆
			if(num<Math.pow(10, power)){
				return STR.toFixed(num, fix);
			}
			let unit = ["万", "亿", "兆", "万兆", "亿兆"];
			let powArrs = [4, 8, 12, 16, 20];
			let strNum;
			for (let i = powArrs.length - 1; i >= 0; i--) {
				let n = Math.pow(10, powArrs[i]);
				if (num >= n) {
					strNum = STR.toFixed(num/n, fix);
					return strNum + unit[i];
				}
			}
		}
		/**
		 * 将数字保留小数位,多余的数字丢弃，如6.17=>6.1
		 * @param {number} num 要转换的值
		 * @param {number} fix 保留几位小数，默认1位
		 */
		public static toFixed(num, fix=1):string{
			let strNum = num+"";
			if (fix == 0) {
				strNum = strNum.split('.')[0];
			}else{
				if (strNum.indexOf(".") > 0) {
					strNum = strNum.substr(0, strNum.indexOf(".") + fix+1);
				} else {
					strNum = strNum;
				}
			}
			return strNum;
		}
	}
}