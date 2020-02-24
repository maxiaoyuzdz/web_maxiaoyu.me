import Vue from 'vue'



import Navcomponent from './components/Navcomponent'
import Brief from './components/Brief'
import Aboutperson from './components/Aboutperson'
import History from './components/History'
import Technology from './components/Technology'
import Projects from './components/Projects'
import Services from './components/Services'
import Clients from './components/Clients'
import Contact from './components/Contact'

import Navcomponent_cn from './components/Navcomponent_cn'
import Brief_cn from './components/Brief_cn'
import Aboutperson_cn from './components/Aboutperson_cn'
import History_cn from './components/History_cn'
import Technology_cn from './components/Technology_cn'
import Contact_cn from './components/Contact_cn'


//global.jQuery = require('./assets/js/jquery-1.10.2.js')
//require('jquery')

//global.jQuery = require('jquery')

//window.jQuery = $

//bootstrap
require('./assets/css/bootstrap/bootstrap.min.css')

//fonts
require('./assets/css/devicon.css')
//require('./assets/css/plugins/font-awesome/css/font-awesome.min.css')
require('./assets/css/font-awesome.min.css')
require('./assets/css/webdev-font.css')
require('./assets/css/font-mfizz.css')

//require('http://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic')
//require('http://fonts.googleapis.com/css?family=Montserrat:400,700')
//require('http://fonts.googleapis.com/css?family=Pacifico')

//rtina images plugin
require('./assets/js/plugins/retina/retina.min.js')

//plugin 
require('./assets/css/plugins/hover/hover.min.css')
require('./assets/css/plugins/owl.carousel/owl.carousel.css')
require('./assets/css/plugins/owl.carousel/owl.theme.css')
require('./assets/css/plugins/owl.carousel/owl.transitions.css')
require('./assets/css/plugins/jquery.fs.wallpaper/jquery.fs.wallpaper.css')
require('./assets/css/plugins/magnific-popup/magnific-popup.css')



//require('./assets/css/spectrum-orange.css')
require('./assets/css/spectrum.css')




//require('./assets/js/bootstrap/bootstrap.js')

//require('./assets/js/modernizr.custom.js')

//plugin js
//require('./assets/js/plugins/jquery.easing/jquery.easing.1.3.js')
//require('./assets/js/plugins/jquery.fitvids/jquery.fitvids.js')
//require('./assets/js/plugins/jquery.fs.wallpaper/jquery.fs.wallpaper.min.js')
//require('./assets/js/plugins/jquery.magnific-popup/jquery.magnific-popup.min.js')
//require('./assets/js/plugins/jquery.tubular/jquery.tubular.1.0.js')
//require('./assets/js/plugins/owl.carousel/owl.carousel.min.js')
//require('./assets/js/plugins/scrollReveal/scrollReveal.js')

//require('./assets/js/plugins/stellar/stellar.js')

//require('./assets/js/plugins/SmoothScroll/SmoothScroll.js')
//require('./assets/js/plugins/jqBootstrapValidation/jqBootstrapValidation.js')

//var $ = require('jquery')
//require('./assets/js/contact_me.js')
//require('./assets/js/plugins/isotope/isotope.pkgd.min.js')

//Spectrum JavaScript 
//require('./assets/js/spectrum.nav.js')
//require('./assets/js/spectrum.js')




/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { 
    Navcomponent,
    Brief,
    Aboutperson,
    History,
    Technology,
      Projects,
      Services,
      Clients,
    Contact,

    Navcomponent_cn,
    Brief_cn,
    Aboutperson_cn,
    History_cn,
    Technology_cn,
    Contact_cn
	      }
})
