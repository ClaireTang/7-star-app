<template>
	<view class="page_box">
		<view class="head_box"></view>
		<view class="content_box">
			<view class="">
				<!-- 打卡日历页面 -->
				<view class="calendar">
					<view class="sign-everyday x-bc pad">
						<text class="sign-everyday-title">每日签到</text>
						<view class="sign-num-box">
							本月共签到
							<text class="sign-num">{{ totalSignDays }}</text>
							天
						</view>
					</view>
					<view class="bar x-c">
						<!-- 年月 -->
						<view class="previous" @click="handleCalendar(0)">
							<uni-icons type="arrowleft" size="30"></uni-icons>
						</view>
						<view class="date">{{ cur_year || '--' }} 年 {{ cur_month || '--' }} 月</view>
						<view class="next" @click="handleCalendar(1)">
							<uni-icons type="arrowright" size="30"></uni-icons>
						</view>
					</view>
					<!-- 显示星期 -->
					<view class="week x-f">
						<view class="week-item x-c" v-for="(item, index) in weeks_ch" :key="index">{{ item }}</view>
					</view>
					<!-- 日历表 -->
					<view class="myDateTable">
						<view v-for="(item, j) in days" :key="j" class="dateCell x-c">
							<view v-if="item.date == undefined || item.date == null" class="cell"><text :decode="true">&nbsp;&nbsp;</text></view>
							<view v-else>
								<!-- 已签到日期 -->
								<view v-if="item.is_sign" class="cell is-sign">
									<text>{{ item.day }}</text>
								</view>
								<!-- 漏签 -->
								<view
									class="cell forget-sign"
									v-else-if="
										cur_year < toYear || (cur_year == toYear && cur_month < toMonth) || (cur_year == toYear && cur_month == toMonth && item.date < today)
									"
								>
									<!-- 小程序不兼容这个 v-else-if="(new Date(cur_year+'-'+cur_month+'-'+item.date))<(new Date())"> -->
									<text>{{ item.day }}</text>
								</view>
								<!-- 今日未签到-->
								<!-- <view @click="clickSignUp(item.date, 1)" class="cell whiteColor bgBlue" v-else-if="item.date == today && cur_month == toMonth && cur_year == toYear">
										<text>签到</text>
									</view> -->
								<!-- 当前日期之后 -->
								<view class="cell" v-else>
									<text>{{ item.day }}</text>
								</view>
							</view>
						</view>
						<!-- 签到按钮 -->
						<view class="x-c sign-box">
							<button :disabled="isPresentMonth || isSign" @tap="onSign" class="cu-btn sign-btn">{{ isSign ? '已签到' : '签到' }}</button>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="foot_box"></view>
		<shop-modal v-if="showSign">
			<block slot="modalContent">
				<view class="sign-modal-box">
					<view class="modal-head y-f">
						<image class="modal-bg" src="http://shopro.7wpp.com/imgs/modal/sign_modal_bg.jpg" mode=""></image>
						<image class="sign-tag" src="http://shopro.7wpp.com/imgs/modal/sign_modal_succeed.png" mode=""></image>
						<view class="sign-num-box">
							已连续打卡
							<text class="sign-num">{{ continueDays }}</text>
							天
						</view>
					</view>
					<view class="modal-content y-f">
						<text class="sign-success">签到成功</text>
						<text class="sign-score">恭喜您获得{{ score }}积分</text>
					</view>
					<view class="modal-bottom"><button class="cu-btn confirem-btn" @tap="onConfirem">确认</button></view>
				</view>
			</block>
		</shop-modal>
		<!-- 自定义底部导航 -->
	</view>
</template>

<script>
import uniIcons from "@/components/uni-icon/uni-icon.vue";	
import shopModal from '@/components/modal/modal.vue';

export default {
	components: {
		shopModal,
		uniIcons
	},
	data() {
		return {
			days: [],
			totalSignDays: 0,
			continueDays: 0,
			score: '',
			cur_year: 0, //当前选的年
			cur_month: 0, //当前选的月
			cur_day: 0, //当前选择的天
			today: parseInt(new Date().getDate()), //本日
			toMonth: parseInt(new Date().getMonth() + 1), //本月
			toYear: parseInt(new Date().getFullYear()), //本年
			weeks_ch: ['日', '一', '二', '三', '四', '五', '六'],
			isPresentMonth: false,
			isSign: false,
			showSign: false
		};
	},
	computed: {},
	onLoad() {
		this.cur_year = this.toYear;
		this.cur_month = this.toMonth;
		this.cur_day = this.today;
		this.getSignList();
	},
	methods: {
		onConfirem() {
			this.showSign = false;
		},
		// 当前签到记录
		getSignList() {
			let that = this;
			let month = that.cur_month.toString().padStart(2, '0');
			let today = that.cur_day.toString().padStart(2, '0');
			let query = `${that.cur_year}-${month}`;
			that.$api.getSignDay({
				month: query
			},res => {
				console.log(res.data,'res')
				if (res.code == 200) {
					let emptyDays = that.calculateEmptyGrids();
					that.totalSignDays =  res.data.month_total;
					that.days = [...emptyDays, ...res.data.days];
					that.selSign();
				}
			});
		},
		// 选择日期
		selSign() {
			let that = this;
			let selToday = `${that.toYear}-${that.toMonth.toString().padStart(2, '0')}-${that.today.toString().padStart(2, '0')}`;
			let newDay = `${that.cur_year}-${that.cur_month.toString().padStart(2, '0')}-${that.cur_day.toString().padStart(2, '0')}`;
			if (selToday === newDay) {
				let day = that.days.find(item => {
					return item.date === selToday;
				});
				that.isSign = day.is_sign;
			}
		},
		// 计算当月1号前空了几个格子
		calculateEmptyGrids() {
			let that = this;
			let emptyDays = [];
			const firstDayOfWeek = new Date(Date.UTC(that.cur_year, that.cur_month - 1, 1)).getDay();
			if (firstDayOfWeek > 0) {
				for (let i = 0; i < firstDayOfWeek; i++) {
					var obj = {
						day: null,
						is_sign: false
					};
					emptyDays.push(obj);
				}
			}
			return emptyDays;
		},
		//签到
		onSign() {
			let that = this;
			let month = that.cur_month.toString().padStart(2, '0');
			let query = `${that.cur_year}-${month}`;
			let today = `${that.cur_year}-${that.toMonth.toString().padStart(2, '0')}-${that.today.toString().padStart(2, '0')}`;
			that.$api.signDay({
				month: query
			},res => {
				if (res.code == 200) {
					that.showSign = true;
					that.score = res.data.score;
					that.continueDays = res.data.sign_row;
					that.getSignList();
				}else{
					that.$common.errorToShow(res.msg);
				}
			});
		},

		// 切换控制年月，上一个月，下一个月
		handleCalendar(type) {
			const cur_year = parseInt(this.cur_year);
			const cur_month = parseInt(this.cur_month);
			let newMonth = cur_month;
			let newYear = cur_year;
			if (type === 0) {
				//上个月
				newMonth = cur_month - 1;
				this.isPresentMonth = true;
				if (newMonth < 1) {
					newYear = cur_year - 1;
					newMonth = 12;
				}
				if (newYear < this.toYear || (newYear === this.toYear && newMonth <= this.toMonth)) {
					this.isPresentMonth = false;
				}
			} else {
				newMonth = cur_month + 1;
				if (newMonth > 12) {
					newYear = cur_year + 1;
					newMonth = 1;
				}

				if (newYear > this.toYear || (newYear === this.toYear && newMonth > this.toMonth)) {
					this.isPresentMonth = true;
				}
			}
			this.cur_year = newYear;
			this.cur_month = newMonth;
			this.getSignList();
			this.$emit('dateChange', this.cur_year + '-' + this.cur_month); //传给调用模板页面去拿新数据
		},

		// 补签
		clickSignUp(date, type) {
			//0补签，1当日签到
			var str = '签到';
			if (type == 0) {
				//如果不需要补签功能直接在这阻止不执行后面的代码就行。
				str = '补签';
			}
			this.$emit('clickChange', this.cur_year + '-' + this.cur_month + '-' + date); //传给调用模板页面
		}
	}
};
</script>

<style lang="scss">
	
.pad {
	padding: 0 30upx;
}
// 格式化页面
.page_box {
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	overflow-x: hidden;
	background: #f6f6f6;
}
.scroll-box {
	flex: 1;
	height: 100%;
	position: relative;
}
.content_box {
	flex: 1;
	overflow-y: auto;
}
/*单行文本溢出省略号*/
.one-t {
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	transition: all linear 0.2s;
}
/*多行文本溢出省略号*/
.more-t {
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	transition: all linear 0.2s;
}
	/* ==================
	          flex布局(colorui里面也有相关基础样式)
	 ==================== */
	/* x水平排列*/
	.x-f {
		display: flex;
		align-items: center;
	}
	/*x两端且水平居中*/
	.x-bc {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	/*x平分且水平居中*/
	.x-ac {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	/*x水平靠上对齐*/
	.x-start {
		display: flex;
		align-items: flex-start;
	}
	/*x水平靠下对齐*/
	.x-end {
		display: flex;
		align-items: flex-end;
	}
	/*上下左右居中*/
	.x-c {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	/*y竖直靠左*/
	.y-start {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	/*y竖直靠右*/
	.y-end {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}
	/*y竖直居中*/
	.y-f {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	// y竖直两端
	.y-b {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	/*y竖直两端居中*/
	.y-bc {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}
/* 补签 */
.resign-box {
	background: #fff;
	padding: 30rpx 35rpx 40rpx;
	.title-box {
		.resign-title {
			font-size: 32rpx;
			font-weight: 600;
		}
		.resign-card-num {
			color: #e3ad5b;
			font-size: 32rpx;
			font-weight: 600;
		}
	}
	.invite-box {
		width: 677rpx;
		height: 118rpx;
		background: rgba(233, 184, 103, 0.2);
		border-radius: 59rpx;
		padding: 0 25rpx;
		margin-top: 40rpx;
		.invite-tag {
			width: 80rpx;
			height: 80rpx;
			border-radius: 50%;
		}
		.invite-notice {
			font-size: 24rpx;
			font-weight: 500;
			color: rgba(227, 173, 91, 1);
		}
		.invite-btn {
			width: 119rpx;
			height: 50rpx;
			background: linear-gradient(90deg, rgba(233, 180, 97, 1), rgba(238, 204, 137, 1));
			border-radius: 25rpx;
			font-size: 24rpx;
			font-weight: 500;
			padding: 0;
			color: rgba(255, 255, 255, 0.9);
		}
	}
}

// 日历
.calendar {
	background: #fff;
	// 每日签到
	.sign-everyday {
		height: 100rpx;
		background: rgba(255, 255, 255, 1);
		border: 1rpx solid rgba(223, 223, 223, 0.4);
		.sign-everyday-title {
			font-size: 32rpx;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
		}
		.sign-num-box {
			font-size: 26rpx;
			font-weight: 500;
			color: rgba(153, 153, 153, 1);
			.sign-num {
				font-weight: 600;
				color: #e3ad5b;
				padding: 0 10rpx;
			}
		}
	}
	// 年月日
	.bar {
		height: 100rpx;
		.bar-btn {
			background: none;
			.cuIcon-back,
			.cuIcon-right {
				color: #c4c4c4;
			}
		}
		.date {
			font-weight: 600;
		}
	}
	// 星期
	.week {
		.week-item {
			font-size: 24rpx;
			font-weight: 500;
			color: rgba(153, 153, 153, 1);
			flex: 1;
		}
	}
	// 日历表
	.myDateTable {
		display: flex;
		flex-wrap: wrap;
		.dateCell {
			width: (750rpx/7);
			height: 80rpx;
			font-size: 26rpx;
			font-family: DINPro;
			font-weight: 400;
			color: rgba(51, 51, 51, 1);
			.cell {
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}
}

.is-sign {
	width: 40rpx;
	height: 40rpx;
	background: linear-gradient(132deg, rgba(243, 223, 177, 1), rgba(243, 223, 177, 1), rgba(236, 190, 96, 1));
	border-radius: 50%;
	box-shadow: 0 0 4rpx 4rpx rgba(#e3ad5b, 0.4);
	color: #fff;
}
// .forget-sign {
// 	color: #dd524d;
// }

// 签到按钮
.sign-box {
	height: 140rpx;
	width: 100%;
	.sign-btn {
		width: 219rpx;
		height: 70rpx;
		background: linear-gradient(90deg, rgba(233, 180, 97, 1), rgba(238, 204, 137, 1));
		border-radius: 35rpx;
		font-size: 28rpx;
		font-weight: 500;
		color: rgba(255, 255, 255, 0.9);
	}
}

.sign-modal-box {
	width: 520rpx;
	background: #fff;
	border-radius: 20rpx;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	position: absolute;
	overflow: hidden;

	.modal-head {
		height: 320rpx;
		// background:linear-gradient(177deg,rgba(233,180,97,1) 0%,rgba(238,204,137,1) 100%);
		align-items: center;
		justify-content: center;
		position: relative;
		.modal-bg {
			width: 100%;
			height: 100%;
		}
		.sign-tag {
			width: 70rpx;
			height: 70rpx;
			// background: #ccc;
			position: absolute;
			top: 50rpx;
			left: 50%;
			transform: translateX(-50%);
		}
		.sign-num-box {
			font-size: 30rpx;
			color: #fff;
			position: absolute;
			top: 150rpx;
			left: 50%;
			transform: translateX(-50%);
			.sign-num {
				font-size: 36rpx;
				font-weight: 600;
				padding: 0 10rpx;
			}
		}
	}
	.modal-content {
		padding: 30rpx 0;
		.sign-success {
			font-size: 34rpx;
			font-family: PingFang SC;
			font-weight: bold;
			color: rgba(227, 173, 91, 1);
		}
		.sign-score {
			font-size: 26rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(153, 153, 153, 1);
			padding-top: 16rpx;
		}
	}
	.modal-bottom {
		padding-bottom: 47rpx;
		.confirem-btn {
			width: 300rpx;
			height: 70rpx;
			background: linear-gradient(90deg, rgba(233, 180, 97, 1), rgba(238, 204, 137, 1));
			border-radius: 35rpx;
			padding: 0;
			font-size: 28rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(255, 255, 255, 0.9);
		}
	}
}
</style>
