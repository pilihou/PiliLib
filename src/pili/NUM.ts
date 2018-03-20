module pili {
	export class NUM {
		/**角度转成弧度 */
		public static degree2Radian(degree: number): number {
			return degree * Math.PI / 180;
		}

		/**弧度转成角度 */
		public static radian2Degree(radian: number): number {
			return radian / Math.PI / 180;
		}

		/**两点之间距离 */
		public static getDistance(x1: number, y1: number, x2: number, y2: number): number {
			return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
		}

		/**两点之间距离的平方 */
		public static getDistance2(x1: number, y1: number, x2: number, y2: number): number {
			return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
		}

		/**随机获取小于等于seed的正整数 */
		public static getRandInt(seed: number): number {
			return seed * Math.random() << 0;
		}

		/**获取介于min和max之间的随机数[min,max) */
		public static getBetweenRand(min: number, max: number): number {
			return Math.random() * (max - min) + min;
		}

		/**获取介于min和max之间的随机整数[min,max) */
		public static getBetweenRandInt(min: number, max: number): number {
			return Math.random() * (max - min) + min << 0;
		}
	}
}