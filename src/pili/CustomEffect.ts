module pili {
	export class CustomEffect {
		/**
		* 文字打字机效果
		* obj 文本对象
		* content 文字
		* interval 打字间隔 毫秒
		* backFun 打字动画完成回调
		*/
		private typerEffect(obj, content: string = "", interval: number = 200, backFun: Function = null): void {
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
			}
		}
	}
}