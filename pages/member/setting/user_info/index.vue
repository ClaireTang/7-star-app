<template>
	<view class="content">
		<view class="content-top">
			<view class='cell-group'>
				<view class='cell-item user-head'>
					<view class='cell-item-hd'>
						<view class='cell-hd-title'>头像</view>
					</view>
					<view class='cell-item-ft'>
						<image class='cell-ft-next user-head-img have-none' mode="aspectFill" :src="avatar" @click="uploadAvatar"></image>
					</view>
				</view>
				<view class='cell-item cell-item-mid'>
					<view class='cell-item-hd'>
						<view class='cell-hd-title'>手机号</view>
					</view>
					<view class='cell-item-bd'>
						<input class='cell-bd-input' placeholder='' disabled="" v-model="mobile" ></input>
					</view>
				</view>
				<view class='cell-item cell-item-mid'>
					<view class='cell-item-hd'>
						<view class='cell-hd-title'>昵称</view>
					</view>
					<view class='cell-item-bd'>
						<input class='cell-bd-input' placeholder='' v-model="nickname" ></input>
					</view>
				</view>
				
				<!-- #ifndef MP-TOUTIAO || MP-ALIPAY -->
					<view class='cell-item cell-item-mid right-img'>
						<view class='cell-item-hd'>
							<view class='cell-hd-title'>性别</view>
						</view>
						<view class='cell-item-bd'>
							<!-- <view class="uni-list">
								<view class="uni-list-cell-db"> -->
									<picker mode="selector" @change="bindPickerChange" :value="index" :range="objectSex" class="w-100">
										<view class="flex space-between w-100">
											<view class="uni-input">{{objectSex[sex]}}</view>
											<image class='icon' src='/static/image/ic-pull-down.png'></image>
										</view>
										
									</picker>
							<!-- 	</view>
							</view> -->
						</view>
						<!-- <view class='cell-item-ft'>
							<image class='cell-ft-next icon' src='/static/image/ic-pull-down.png'></image>
						</view> -->
					</view>
				<!-- #endif -->
				<view class='cell-item cell-item-mid right-img'>
					<view class='cell-item-hd'>
						<view class='cell-hd-title'>生日</view>
					</view>
					<view class='cell-item-bd'>
						<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange" class="w-100">
							<view class="flex space-between w-100">
								<view class="uni-input">{{birthday}}</view>
								<image class='cell-ft-next icon' src='/static/image/ic-pull-down.png'></image>
							</view>
						</picker>
					</view>
				</view>
				<view class='cell-item cell-item-mid right-img'>
					<view class='cell-item-hd'>
						<view class='cell-hd-title'>类别</view>
					</view>
					<view class='cell-item-bd'>
						<picker mode="selector" @change="bindTypePickerChange" :value="indexType" :range="objectType" class="w-100">
							<view class="flex space-between w-100">
								<view class="uni-input">{{objectType[type]}}</view>
								<image class='cell-ft-next icon' src='/static/image/ic-pull-down.png'></image>
							</view>
						</picker>
					</view>
				</view>
				<view class='cell-item right-img' v-if="type === 1">
					<view class='cell-item-hd'>
						<view class='cell-hd-title'>营业执照</view>
					</view>
					<view class='cell-item-bd evaluate-c-b'>
						<view class="goods-img-item" v-for="(item, key) in images" :key="key">
							<image class="del" src="/static/image/del.png" mode="" @click="delImage(item)"></image>
							<image class="" :src="item.url" mode="" @click="clickImg(item.url)"></image>
						</view>
						<view class="upload-img" v-show="isImage" @click="upImage">
							<image class="icon" src="/static/image/camera.png" mode=""></image>
							<view class="">上传照片</view>
						</view>
					</view>
				</view>
				<view class='cell-item cell-item-mid'>
					<view class='cell-item-hd'>
						<view class='cell-hd-title'>运营码</view>
					</view>
					<view class='cell-item-bd'>
						<input class='cell-bd-input' placeholder='由运营人员提供' v-model="op_code" :disabled="isAble"></input>
					</view>
				</view>
			</view>
		</view>
		<view class="button-bottom">
			<button class="btn btn-square btn-b"  hover-class="btn-hover2" @click="submitHandler()" :disabled='submitStatus' :loading='submitStatus'>保存</button>
		</view>
	</view>
</template>

<script>
export default {
    data() {
        return {
			title: 'picker',
			avatar: '',
			objectSex: ['男', '女', '未知'],
			objectType: ['个人','商户','未知'],
			index: 2,
			indexType: 2,
			nickname: '',
			mobile: '',
			date: '1990-01-01',
			birthday: '请选择',
			sex: 0,
			type: 0,
			submitStatus: false,
			images:[],
			image_max: 1,
			op_code: '',
			isAble: false
        }
    },
    computed: {
        startDate() {
            return this.getDate('start');
        },
        endDate() {
            return this.getDate('end');
        },
		isImage() {
			let num = this.image_max - this.images.length;
			if(num > 0) {
				return true;
			}else{
				return false;
			}
		}
    },
    methods: {
		//性别
		bindPickerChange(e) {
			this.sex = e.target.value;
			console.log(this.sex,'sex')
		},
		//类型
		bindTypePickerChange(e) {
			this.type = e.target.value;
			console.log(this.type,'type')
		},
		//生日
		bindDateChange(e) {
			this.birthday = e.target.value;
		},
        getDate(type) {
            const date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();

            if (type === 'start') {
                year = year - 60;
            } else if (type === 'end') {
                year = year + 2;
            }
            month = month > 9 ? month : '0' + month;;
            day = day > 9 ? day : '0' + day;
            return `${year}-${month}-${day}`;
        },
		// 用户上传头像
		uploadAvatar () {
			this.$api.uploadFiles(res => {
				if (res.status) {
					let avatar = res.data.url // 上传成功的图片地址
		            // 执行头像修改
		            this.$api.changeAvatar({
		                avatar: avatar
		            }, res => {
		                if (res.status) {
							this.$common.successToShow('上传成功', () => {
								this.avatar = res.data.avatar
							})
		                } else {
							this.$common.errorToShow(res.msg)
						}
		            })
				} else {
					this.$common.errorToShow(res.msg)
				}
			})
		},
		//上传图片
		upImage() {
			let num = this.image_max - this.images.length;
			if(num > 0){
				this.$api.uploadImage(num, res => {
					if(res.status){
						this.images.push(res.data);
						this.$common.successToShow(res.msg);
					}else{
						this.$common.errorToShow(res.msg);
					}
				});
			}
		},
		//删除图片
		delImage(e) {
			let newImages = [];
			for(var i = 0; i < this.images.length; i++) {
				if(this.images[i].image_id != e.image_id){
					newImages.push(this.images[i]);
				}
			}
			this.images = newImages;
		},
		// 图片点击放大
		clickImg (img) {
			// 预览图片
			uni.previewImage({
				urls: img.split()
			});
		},
		// 保存资料
		submitHandler() {
			this.submitStatus = true;
			let sex = this.sex +1;
			let type = this.type +1;
			
			// if(this.birthday == '请选择'){
			// 	this.$common.errorToShow('请选择出生日期');
			// 	this.submitStatus = false;
			// 	return false;
			// }
			if(this.type === 1 && this.images.length === 0) {
				this.$common.errorToShow('请上传营业执照');
				this.submitStatus = false;
				return false;
			}
			if(this.type === 2) {
				this.$common.errorToShow('请选择类别');
				this.submitStatus = false;
				return false;
			}
			this.$api.editInfo({
					sex: sex,
					type: type,
					birthday: this.birthday == '请选择' ? '' : this.birthday,
					nickname: this.nickname,
					business_license: this.type === 1 ? this.images[0].image_id : '',
					op_code: this.op_code
				}, res => {
					this.$common.successToShow(res.msg, result => {
						// this.submitStatus = false;
						// uni.navigateBack({
						// 	delta: 1
						// });
						uni.switchTab({
							url: '/pages/member/index/index'
						})
					});
				},res => {
					this.submitStatus = false;
				}
			);
			
		}
    },
	onLoad: function() {
		var _this = this;
		_this.$api.userInfo({}, function(res) {
			if (res.status) {
				var the_sex = res.data.sex - 1;
				var the_type = res.data.type - 1;
				if (res.data.birthday == null) {
					res.data.birthday = '请选择';
				}
				_this.nickname = res.data.nickname;
				_this.mobile = res.data.mobile;
				_this.sex = the_sex;
				_this.index = the_sex;
				_this.type = the_type;
				_this.indexType = the_type;
				_this.birthday = res.data.birthday;
				_this.avatar = res.data.avatar;
				
				if(_this.birthday!='请选择'){
					_this.date = _this.birthday;
				}
				if(_this.type === 1) {
					_this.images.push(res.data.business_license)
				}
				_this.op_code = res.data.op_code
				_this.isAble = res.data.op_code - 0 > 0 ? true : false
			} else {
				//报错了
				_this.$common.errorToShow(res.msg);
			}
		});
	}
}
</script>

<style>
.user-head{
	height: 100upx;
}
.user-head-img{
	height: 90upx;
	width: 90upx;
	border-radius: 50%;
}
.cell-hd-title{
	color: #333;
}
.cell-item-bd{
	color: #666;
	font-size: 26upx;
	width: 100%;
	padding-right: 0;
}
.cell-item-hd{
	width: 160rpx;
}


.evaluate-c-b{
	overflow: hidden;
	padding: 0 20upx;
}
.upload-img{
	width: 146upx;
	height: 146upx;
	margin: 14upx;
	text-align: center;
	color: #999999;
	font-size: 22upx;
	border: 2upx solid #E1E1E1;
	border-radius: 4upx;
	display: inline-block;
	float: left;
	padding: 24upx 0;
}
.goods-img-item{
	width: 174upx;
	height: 174upx;
	padding: 14upx;
	float: left;
	position: relative;
}
.goods-img-item:nth-child(4n){
	margin-right: 0;
}
.goods-img-item image{
	width: 100%;
	height: 100%;
}
.del{
	width: 30upx !important;
	height: 30upx !important;
	position: absolute;
	right: 0;
	top: 0;
	z-index: 999;
}
</style>
