module pili {
	/**
	 * 绘制星形
	 * @param graphics 绘制的对象
	 * @param innerRadius 内半径
	 * @param outerRadius 外半径
	 * @param x 中心点X
	 * @param y 中心点Y
	 * @param points 角的个数
	 * @param angle 起始角度
	 * @param thickness 线的大小
	 * @param lineColor 线的颜色
	 * @param fillColor 填充色
	 */
	export function drawStar(graphics: egret.Graphics, innerRadius: number, outerRadius: number, x: number = 0, y: number = 0, points: number = 5, angle: number = 90, thickness: number = 1, lineColor: number = 0x00, fillColor?: number): void {
		graphics.clear();
		graphics.lineStyle(thickness, lineColor);
		if (fillColor != undefined) {
			graphics.beginFill(fillColor);
		}
		let count: number = Math.abs(points);
		if (count >= 2) {
			// calculate distance between points 
			let step: number = (Math.PI * 2) / points;
			let halfStep: number = step / 2;
			// calculate starting angle in radians 
			let start: number = (angle / 180) * Math.PI;
			graphics.moveTo(x + (Math.cos(start) * outerRadius), y - (Math.sin(start) * outerRadius));

			// draw lines 
			for (let i: number = 1; i <= count; i++) {
				graphics.lineTo(x + Math.cos(start + (step * i) - halfStep) * innerRadius, y - Math.sin(start + (step * i) - halfStep) * innerRadius);
				graphics.lineTo(x + Math.cos(start + (step * i)) * outerRadius, y - Math.sin(start + (step * i)) * outerRadius);
			}
		}
		if (fillColor != undefined) {
			graphics.endFill();
		}
	}

	/**
	 * 绘制扇形
	 * @param graphics 绘制的对象
	 * @param radius 半径
	 * @param angle 当前角度
	 * @param fillColor 填充色(默认：红色)
	 * @param startAngle 起始角度(默认：0度)
	 * @param anticlockwise 逆时针(默认：顺时针方向)
	 * @param x 中心点X(默认：0)
	 * @param y 中心点Y(默认：0)
	 */
	export function drawSector(graphics: egret.Graphics, radius: number, angle: number, fillColor: number = 0xff0000, startAngle: number = -90, anticlockwise: boolean = false, x: number = 0, y: number = 0) {
		graphics.clear();
		graphics.beginFill(0xff0000);
		graphics.moveTo(x, y);//绘制中心点移到(x, y)点
		graphics.lineTo(x + radius, 0);//画线到弧的起始点
		graphics.drawArc(x, y, radius, startAngle * Math.PI / 180, (startAngle + angle) * Math.PI / 180, anticlockwise);//从起始点顺时针画弧到终点
		graphics.lineTo(x, y);//从终点画线到圆形。到此扇形的封闭区域形成
		graphics.endFill();
	}

	/**
     * 将[[物品Id,数量],[物品Id,数量]...]=>[{itemId:物品Id,count:数量},{itemId:物品Id,count:数量}...]
     * @param arr [[物品Id,数量],[物品Id,数量]...]
     * @returns {any[]} [{itemId:物品Id,count:数量},{itemId:物品Id,count:数量}...]
     */
	export function itemArr2objArr(arr): any[] {
		let objArr: any[] = [];
		if (arr && arr.length > 0) {
			let itemArr: number[];
			for (let i: number = 0, len: number = arr.length; i < len; i++) {
				itemArr = arr[i];
				objArr.push({ itemId: itemArr[0], count: itemArr[1] });
			}
		}
		return objArr;
	}

    /**
     * 将[[物品Id,数量],[物品Id,数量]...]=>{物品Id:数量,物品Id:数量,...}
     * @param arr [[物品Id,数量],[物品Id,数量]...]
     * @returns {any} {物品Id:数量,物品Id:数量,...}
     */
	export function itemArr2obj(arr): any {
		let obj: any = {};
		if (arr && arr.length > 0) {
			let itemArr: number[];
			for (let i: number = 0, len: number = arr.length; i < len; i++) {
				itemArr = arr[i];
				obj[itemArr[0]] = itemArr[1];
			}
		}
		return obj;
	}
}