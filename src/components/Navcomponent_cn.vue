<template>


  <nav class="navbar navbar-dark navbar-fixed-top" role="navigation">
            <div class="container">
                <div class="navbar-header page-scroll">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                        <i class="fa fa-bars"></i>
                    </button>
                    <a class="navbar-brand" href="#page-top">
                        <span class="logo">
			    MAXIAOYU.ME
                        </span>
                    </a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse navbar-right navbar-main-collapse">
                    <ul class="nav navbar-nav">
                        <!-- Hidden li included to remove active class from about link when scrolled up past about section -->
                        <li class="hidden">
                            <a href="#page-top"></a>
                        </li>
                        <li class="page-scroll">
                            <a href="#about">个人介绍</a>
                        </li>
                        <li class="page-scroll">
                            <a href="#clients">工作状态</a>
                        </li>
			<li class="page-scroll">
                            <a href="#portfolio">工作教育经历</a>
                        </li>

			<li class="page-scroll">
                            <a href="#technology">技术栈</a>
                        </li>



                        <li class="page-scroll">
                            <a href="#contact">联系方式</a>
                        </li>
                        <li class="page-scroll">
                            <a href="/index_en.html">ENGLISH</a>
                        </li>
                    </ul>
                </div>
                <!-- /.navbar-collapse -->
            </div>
            <!-- /.container -->
        </nav>
  
</template>

<script>


export default {
    data () {
	return {
	    msg: 'navgation1'
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .logo{
     margin-top:15px;
     margin-bottom:15px;
 }

</style>

