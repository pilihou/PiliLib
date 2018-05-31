module pili {
	/**
	 * 用例：let typerEffect = new pili.TyperEffect(aaa, "这是一个字符串");
	 * typerEffect.destroy();
	 */
	export class TyperEffect {
		private arrTyperTimeId: number[];
		/**
		* 文字打字机效果
		* label 文本对象
		* content 文字
		* interval 打字间隔 毫秒
		* backFun 打字动画完成回调
		*/
		public constructor(label: eui.Label | egret.TextField, content: string = "", interval: number = 200, backFun: Function = null) {
			this.arrTyperTimeId = [];
			let strArr: Array<any> = content.split("");
			let len: number = strArr.length;
			for (let i = 0; i < len; i++) {
				let timeId = egret.setTimeout(function () {
					egret.clearTimeout(timeId);
					label.appendText(strArr[Number(this)]);
					if ((Number(this) >= len - 1) && (backFun != null)) {
						backFun();
					}
				}, i, interval * i);
				this.arrTyperTimeId.push(timeId);
			}
		}

		/**销毁打字机效果 */
		public destroy() {
			if (this.arrTyperTimeId) {
				for (let i: number = 0, len: number = this.arrTyperTimeId.length; i < len; i++) {
					if (this.arrTyperTimeId[i]) {
						egret.clearTimeout(this.arrTyperTimeId[i]);
					}
				}
				this.arrTyperTimeId.length = 0;
				this.arrTyperTimeId = null;
			}
		}
	}
}