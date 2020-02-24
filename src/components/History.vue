<template>

<div class="history container" id="portfolio">
    <div class="page-header">
        <h1 id="timeline">Timeline of My Career</h1>
    </div>
    <ul class="timeline">


        <li>
            <div class="timeline-badge">
		<i class="fa fa-university" aria-hidden="true"></i>
	    </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">The Degree of Bchelor for Computer Science</h4>
              <p><small class="text-muted">

		  <i class="glyphicon glyphicon-time"></i>
		  from 2003.09 to 2007.07</small></p>
            </div>
            <div class="timeline-body">
              <p>Studied at <a href="www.sdu.edu.cn">Shandong University</a> ( <a href="https://en.wikipedia.org/wiki/Shandong_University">wiki</a>  )</p>
<p>Major: Computer Science</p>
            </div>
          </div>
        </li>


        <li class="timeline-inverted">
            <div class="timeline-badge warning">
		<i class="fa fa-weibo" aria-hidden="true"></i>
	    </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">Video System Engineer</h4>
	      <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> from 2008.01 to 2011.04</small></p>
            </div>
            <div class="timeline-body">
              <p>Work at SINA (NASDAQ:SINA)</p>
	      <p>In charge of the development of web video stream system</p>
	      <p>At that time, our live video service was the one of the biggest live video content service in China</p>
            </div>
          </div>
        </li>



        <li>
            <div class="timeline-badge danger">
		<i class="fa fa-university" aria-hidden="true"></i>
	    </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">The Degree of Master for Computer Science </h4>
	      <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> from 2011.08 to 2013.01</small></p>
            </div>
            <div class="timeline-body">
	                  <p>Studied at <a href="http://www.hull.ac.uk">The University of Hull (UK)</a> </p>
<p>Major: Computer Science</p>
<p>Area: Graphic Programming, GPU Computing, CUDA</p>
            </div>
          </div>
        </li>

        <li class="timeline-inverted">
	    <div class="timeline-badge warning">
		<i class="fa fa-usd" aria-hidden="true"></i>
	    </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">Forex Autotrading Program</h4>
	      <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> from 2013.04 to 2014.07</small></p>
            </div>
            <div class="timeline-body">
              <p>During this period, I focused on Metatrader platform, and developed some complicated autotrading system for my customers.</p>
            </div>
          </div>
        </li>

	<li class="timeline-inverted">
	    <div class="timeline-badge dark"><i class="glyphicon glyphicon-credit-card"></i></div>
            <div class="timeline-panel">
		<div class="timeline-heading">
		    <h4 class="timeline-title">ECommerce Spider System</h4>
		    <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> from 2014.07 to 2015.01</small></p>
		</div>
		<div class="timeline-body">
		    <p>Because forex trading require special information, I developed a spider system, but I found it's really nice to spide Amazon and others. At that time, it supervise 8 website with millions of kinds of products, update all data 4 times per day. Based on it, we developed a small business.</p>
		</div>
            </div>
        </li>


        <li>
            <div class="timeline-badge info">
		<i class="fa fa-cube" aria-hidden="true"></i>
	    </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">Team Leader at a newly-established firm</h4>
              <h5 class="timeline-title">Financing from Alibaba, Buaa and HQ</h5>
	      <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> from 2015.01 to 2016.09</small></p>
            </div>
            <div class="timeline-body">
		<p>The product get finance support from Alibaba  directly, all the products were developed by myself initially, which covered over PC, ios app, mobile website, wechat public service and wechat group auto spread tools (Wechat  <i class="icon-color-wechat bicon-word fa fa-weixin" aria-hidden="true"></i> Robot). And I recruited and leaded a small dev team having 4 developers, 2 ios developers and 2 web front-end developers. Because the direction of the firm's development changed, so I chose to leave.</p>

            </div>
          </div>
        </li><li class="timeline-inverted">
            <div class="timeline-badge success">
		<i class="fa fa-male" aria-hidden="true"></i>
	    </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">Engineer</h4>
<p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> from 2016.09 to 2017.07</small></p>
            </div>
            <div class="timeline-body">
              <p>I always believe I have the capacity to create, I will go along this way. I started to learn Math, Machine Learning, CAD and other new things. </p>
            </div>
          </div>
        </li>

</li><li class="timeline">
            <div class="timeline-badge success">
		<i class="fa fa-male" aria-hidden="true"></i>
	    </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">Founder</h4>
<p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> from 2017.08 to Right Now</small></p>
            </div>
            <div class="timeline-body">
              <p>I build a machine studio, so that I can build any robots by myself, and I could help other guys to make new robots ! Located at my hometown JINAN, and I welcome anyone to contact me ! </p>
            </div>
          </div>
        </li>



        
    </ul>
</div>
  
</template>

<script>


export default {
    data () {
	return {
	    msg: 'history2'
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.timeline {
    list-style: none;
    padding: 20px 0 20px;
    position: relative;
}

    .timeline:before {
        top: 0;
        bottom: 0;
        position: absolute;
        content: " ";
        width: 3px;
        background-color: #eeeeee;
        left: 50%;
        margin-left: -1.5px;
    }

    .timeline > li {
        margin-bottom: 20px;
        position: relative;
    }

        .timeline > li:before,
        .timeline > li:after {
            content: " ";
            display: table;
        }

        .timeline > li:after {
            clear: both;
        }

        .timeline > li:before,
        .timeline > li:after {
            content: " ";
            display: table;
        }

        .timeline > li:after {
            clear: both;
        }

        .timeline > li > .timeline-panel {
            width: 46%;
            float: left;
            border: 1px solid #d4d4d4;
            border-radius: 2px;
            padding: 20px;
            position: relative;
            -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);
            box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);
        }

            .timeline > li > .timeline-panel:before {
                position: absolute;
                top: 26px;
                right: -15px;
                display: inline-block;
                border-top: 15px solid transparent;
                border-left: 15px solid #ccc;
                border-right: 0 solid #ccc;
                border-bottom: 15px solid transparent;
                content: " ";
            }

            .timeline > li > .timeline-panel:after {
                position: absolute;
                top: 27px;
                right: -14px;
                display: inline-block;
                border-top: 14px solid transparent;
                border-left: 14px solid #fff;
                border-right: 0 solid #fff;
                border-bottom: 14px solid transparent;
                content: " ";
            }

        .timeline > li > .timeline-badge {
            color: #fff;
            width: 50px;
            height: 50px;
            line-height: 50px;
            font-size: 1.4em;
            text-align: center;
            position: absolute;
            top: 16px;
            left: 50%;
            margin-left: -25px;
            background-color: #999999;
            z-index: 100;
            border-top-right-radius: 50%;
            border-top-left-radius: 50%;
            border-bottom-right-radius: 50%;
            border-bottom-left-radius: 50%;
        }

        .timeline > li.timeline-inverted > .timeline-panel {
            float: right;
        }

            .timeline > li.timeline-inverted > .timeline-panel:before {
                border-left-width: 0;
                border-right-width: 15px;
                left: -15px;
                right: auto;
            }

            .timeline > li.timeline-inverted > .timeline-panel:after {
                border-left-width: 0;
                border-right-width: 14px;
                left: -14px;
                right: auto;
            }

.timeline-badge.primary {
    background-color: #2e6da4 !important;
}

.timeline-badge.success {
    background-color: #3f903f !important;
}

.timeline-badge.warning {
    background-color: #f0ad4e !important;
}

.timeline-badge.danger {
    background-color: #d9534f !important;
}

.timeline-badge.info {
    background-color: #5bc0de !important;
}

.timeline-title {
    margin-top: 0;
    color: inherit;
}

.timeline-body > p,
.timeline-body > ul {
    margin-bottom: 0;
}

    .timeline-body > p + p {
        margin-top: 5px;
    }

.youtubevideo{
    width:100%;
    height:100%;
    max-height:315;
    max-width:560;
 }

 .icon-color-wechat{
     color:#73ae1f;
 }

@media (max-width: 767px) {
    ul.timeline:before {
        left: 40px;
    }

    ul.timeline > li > .timeline-panel {
        width: calc(100% - 90px);
        width: -moz-calc(100% - 90px);
        width: -webkit-calc(100% - 90px);
    }

    ul.timeline > li > .timeline-badge {
        left: 15px;
        margin-left: 0;
        top: 16px;
    }

    ul.timeline > li > .timeline-panel {
        float: right;
    }

        ul.timeline > li > .timeline-panel:before {
            border-left-width: 0;
            border-right-width: 15px;
            left: -15px;
            right: auto;
        }

        ul.timeline > li > .timeline-panel:after {
            border-left-width: 0;
            border-right-width: 14px;
            left: -14px;
            right: auto;
        }
}




</style>

