<template>
	<div class="head-top clearfix">
		<h1 class="logo">
			<img src="../assets/img/logo.png" height="50" width="223" alt="上海久科信息技术有限公司">
		</h1>
		<div class="quit-box">
			<span>管理员，您好！</span>
			<a href="###" class="quit">退出</a>
		</div>
	</div>
</template>
<script>
	
</script>
<style lang="scss" scope>
@import "../style/mixin";
	.head-top{
		width:100%;
		position: fixed;
		left:0;
		right:0;
		top:0;
		height:50px;
		background:#27b5f0;
		.logo{
			display:block;
			float:left;
		}
		.quit-box{
			float:right;			
			font-size:14px;
			line-height:50px;
			padding-right:15px;
			color:#fff;
			.quit{
				font-size:14px;
				color:#fff;
			}
		}
	}
</style>