<template>
	<view class="emoji">
		<view class="emoji-line" v-for="(line,i) in emoji" :key="i">
			<view class="emoji-line-item" v-for="(item,index) in line" :key="index" @tap="clickEmoji(item)">{{item}}</view>
		</view>
		<view class="padding"></view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				emoji:[
					['😀','😃','😄','😁','😆'],
					['😅','🤣','😂','🙂','🙃'],
					['😉','😊','😇','😍','🤩'],
					['😗','😚','😙','😋','😘'],
					['😛','😜','🤪','😝','🤑'],
					['🤗','🤭','🤫','🤔','🤐'],
					['🤨','😐','😑','😶','😏'],
					['😒','🙄','😬','🤥','😔'],
					['😪','🤤','😴','😷','🤒'],
					['🤕','🤢','🤮','🤧','😵'],
					['🤯','🤠','😎','🤓','🧐'],
					['😕','😟','🙁','😮','😯'],
					['😲','😳','😦','😧','😨'],
					['😰','😥','😢','😭','😱'],
					['😖','😣','😞','😓','😩'],
					['😫','😤','😡','🤬','😈'],
				]
			}
		},
		methods:{
			clickEmoji(e){
				this.$emit('emotion',e)
			}
		}
	}
</script>

<style>
	.emoji{
		width: 100%;
		height: 200px;
		background-color: #292a33;
		overflow: hidden;
		overflow-y: auto ;
	}
	.emoji-line{
		display: flex;
		margin-left: 5px;
	}
	.emoji-line-item{
		flex: 1;
		width: 20%;
		font-size: 30px;		
		text-align: center;
	}
	.padding{
		width: 100%;
		height: 50px;
	}
</style>
