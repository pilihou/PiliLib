module pili {
	/**
	 * 用例：pili.CustomEffect.instance.typerEffect(aaa, "这是一个字符串");
	 * pili.CustomEffect.instance.destroyTyperEffect();
	 */
	export class CustomEffect {
		private static _instance:pili.CustomEffect;
		private arrTyperTimeId: number[];
		public static get instance():pili.CustomEffect{
			if(!this._instance) this._instance = new pili.CustomEffect();
			return this._instance;
		}
		/**
		* 文字打字机效果
		* obj 文本对象
		* content 文字
		* interval 打字间隔 毫秒
		* backFun 打字动画完成回调
		*/
		public typerEffect(obj, content: string = "", interval: number = 200, backFun: Function = null): void {
			this.arrTyperTimeId = [];
			let strArr: Array<any> = content.split("");
			let len: number = strArr.length;
			for (let i = 0; i < len; i++) {
				let timeId = egret.setTimeout(function () {
					egret.clearTimeout(timeId);
					obj.appendText(strArr[Number(this)]);
					if ((Number(this) >= len - 1) && (backFun != null)) {
						backFun();
					}
				}, i, interval * i);
				this.arrTyperTimeId.push(timeId);
			}
		}
		
		/**销毁打字机效果 */
		public destroyTyperEffect() {
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