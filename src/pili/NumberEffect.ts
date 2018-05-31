module pili {
	/**
	 * 用例：let numEffect:pili.NumberEffect = new pili.NumberEffect(this.label, 2, 100);
	 * numEffect.destory();
	 */
	export class NumberEffect {
		private _label: egret.TextField | eui.Label | eui.BitmapLabel;
		private _scoreData: any;
		private endValue: number;
		/**
		 * 数字滚动增加
		 * label 文本对象
		 * startValue 起始值
		 * endValue 结束值
		 */
		public constructor(label: egret.TextField | eui.Label | eui.BitmapLabel, startValue: number, endValue: number, customDT?: number) {
			let self = this;
			self._label = label;
			self._scoreData = { num: startValue };
			self.endValue = endValue;
			let dt: number;
			if (customDT != undefined) {
				dt = customDT;
			} else {
				let addValue = endValue - startValue;
				if (addValue > 100) dt = 300;
				else if (addValue > 10) dt = 50;
				else dt = 10;
			}

			egret.Tween.get(self._scoreData, { onChange: self._onChange, onChangeObj: self }).to({ num: endValue }, 300).call(
				function(){
					egret.Tween.removeTweens(self._scoreData);
				});
		}

		_onChange() {
			this._label.text = (this._scoreData.num << 0) + "";
		}

		public destory() {
			egret.Tween.removeTweens(this._scoreData);
			this._scoreData = null;
		}
	}
}