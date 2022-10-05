export const htmlPage = `
<html lang="en" class="initial" data-lt-installed="true">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <link rel="icon" href="https://assets.contentsquare.com/design-tokens/assets/brand/logo/favicon.png" sizes="any">
    <link rel="icon" href="https://assets.contentsquare.com/design-tokens/assets/brand/logo/favicon.svg" type="image/svg+xml">
    <link rel="sitemap" href="/sitemap.xml">
    <title>WebView Tracking Tag - Contentsquare Technical Documentation</title>
    <link rel="canonical" href="https://docs.contentsquare.com/webview-tracking-tag/">
    <meta property="og:title" content="WebView Tracking Tag - Contentsquare Technical Documentation">
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://docs.contentsquare.com/webview-tracking-tag/">
    <meta property="og:locale" content="en">
    <meta name="description" property="og:description" content="All resources and tools needed for implementing Contentsquare">
    <meta property="og:site_name" content="Contentsquare Technical Documentation">
    <meta name="google-site-verification" content="hSbeaAXpnB-pLKRy22b0BDALc97oeKBKmRlzznpEXkE">
    <style>
    html{
    margin:0;padding:0;font-family:sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;scroll-padding-top:10rem
    }
    body{
    margin:0
    }
    article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{
    display:block
    }
    audio,canvas,progress,video{
    display:inline-block;vertical-align:baseline
    }
    audio:not([controls]){
    display:none;height:0
    }
    [hidden],template{
    display:none
    }
    a{
    background-color:transparent
    }
    a:active,a:hover{
    outline:0
    }
    abbr[title]{
    border-bottom:1px dotted
    }
    b,strong{
    font-weight:700
    }
    *{
    box-sizing:border-box
    }
    ol,ul{
    margin-top:0;margin-bottom:10px;padding-left:0;list-style:none
    }
    a{
    color:#337ab7;text-decoration:none;background-color:transparent
    }
    header{
    position:fixed;z-index:9999;width:100%;top:0
    }
    .header_home,header>a:first-child{
    position:relative;background:#3640e8;width:200px;top:0;left:0;height:5rem;padding:22px
    }
    .header_breadcrumb{
    text-transform:uppercase;font-size:14px;position:fixed;top:3rem;background:white;background:linear-gradient(180deg,white 0%,white 90%,rgba(255,255,255,.9) 100%);min-height:6.35em;z-index:2;width:900px;border-bottom:2px solid #0675c1;padding-bottom:.1em;font-weight:700
    }
    .header_breadcrumb a{
    display:inline-block;padding:30px 10px 7px 0;opacity:.7;position:relative;margin-right:10px;margin-top:30px;color:#111
    }
    .header_breadcrumb a:hover{
    opacity:1
    }
    .header_breadcrumb span{
    display:inline-block;padding:30px 0 7px;border-bottom:1px solid #fff;color:#0675c1
    }
    .header_breadcrumb a:after,.header_breadcrumb a:before{
    left:100%;top:65%;border:solid transparent;content:" ";height:0;width:0;position:absolute;pointer-events:none
    }
    .header_breadcrumb a:after{
    border-color:#88b7d500;border-left-color:#495366;border-width:4px;margin-top:-4px
    }
    .header_breadcrumb a:before{
    border-color:#fff0;border-left-color:#fff;border-width:5px;margin-top:-5px
    }
    .mainLogo{
    display:block;width:100%;margin:0 auto
    }
    aside{
    position:fixed;width:280px;height:100%;left:0;top:5rem;bottom:0;overflow-y:auto;background:#EDEFF2;padding-top:30px;line-height:1.3;z-index:1
    }
    aside::-webkit-scrollbar{
    width:5px
    }
    aside::-webkit-scrollbar-track{
    -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.25)
    }
    aside::-webkit-scrollbar-thumb{
    background-color:#00000080;outline:1px solid rgba(0,0,0,.5)
    }
    .aside_header{
    font-family:Brandon,sans-serif;text-transform:uppercase;font-size:22px;font-weight:700;line-height:23px;color:#495057;text-decoration:none!important;margin-left:1em;min-height:40px
    }
    .aside_header .blue{
    color:#4b8ae7;padding:inherit
    }
    body .aside_header{
    opacity:1;transform:translateY(0)
    }
    .aside_menu{
    font-size:1.1em;padding-top:20px;padding-bottom:120px
    }
    .aside_menu ul,.aside_menu li{
    list-style:none;margin:0;padding:0
    }
    .aside_menu a{
    display:block;color:#333;font-weight:300;padding:8px 10px 8px 15px;border-left:5px solid transparent
    }
    .aside_menu ul a{
    padding-left:40px;font-size:.9em
    }
    .menu a:hover{
    border-left:5px solid #bbb;color:#4b8ae7
    }
    .menu .active>a{
    border-left:5px solid #4B8AE7;color:#4b8ae7;font-weight:500
    }
    .container{
    width:auto;
    }
    .content{
    margin-top:5rem
    }
    .header_hamburger{
    display:none;position:fixed;padding:20px;top:0;right:0;cursor:pointer;border-radius:0 0 0 10px
    }
    @media screen and (min-width: 1200px){
    aside{
    width:300px
    }
    .container{
    margin-left:380px
    }
    }
    @media screen and (min-width: 1400px){
    aside{
    width:350px
    }
    .container{
    margin-left:500px
    }
    .header_home,header>a:first-child{
    width:200px
    }
    }
    @media screen and (max-width: 1024px){
    aside{
    left:-290px;transition:left .5s
    }
    aside.open{
    left:0
    }
    .container{
    margin:0 10px
    }
    .navbar .navbar-container .navbar-brand{
    margin:auto
    }
    .navbar-start>a.navbar-item:hover,.navbar-start>.navbar-item:hover>.navbar-link{
    text-decoration:underline
    }
    .header_breadcrumb{
    display:none!important
    }
    h1{
    font-size:2em!important;line-height:1.3em!important;margin-bottom:20px;padding-bottom:0
    }
    h2{
    font-size:1.6em!important
    }
    .header_hamburger{
    display:block;background-color:#3640e8
    }
    .navbar-menu.open{
    display:block;background-color:#3640e8;position:absolute;top:4rem;left:0;right:0;padding:1.25rem 0;height:calc(100vh - 4rem);overflow-y:auto
    }
    .navbar-menu.open .navbar-start{
    display:block
    }
    aside .sidebar-button{
    position:fixed;height:40px;width:30px;z-index:4;margin-top:5px;background-image:url(../images/right-arrow.svg);background-repeat:no-repeat;background-size:70%;background-position:center;background-color:#202020;cursor:pointer;left:0;top:75px;border-radius:0 5px 5px 0;transition:.3s
    }
    aside.open .sidebar-button{
    position:fixed;height:40px;width:30px;z-index:4;margin-top:5px;background-image:url(../images/left-arrow.svg);background-repeat:no-repeat;background-size:70%;background-position:center;background-color:#202020;cursor:pointer;left:280px;top:75px;border-radius:0 5px 5px 0;transition:.3s
    }
    }
    .text-warning{
    color:#65318f
    }
    .text-success{
    color:#19cd83
    }
    ::selection{
    background:#4B8AE7;color:#fff
    }
    @font-face{
    font-family:euclid-flex;font-style:normal;font-weight:400;font-display:block;src:url(/images/fonts/EuclidFlex-Regular-WebS.woff2) format("woff2"),url(/images/fonts/EuclidFlex-Regular-WebS.woff) format("woff")
    }
    @font-face{
    font-family:euclid-flex;font-style:normal;font-weight:700;font-display:block;src:url(/images/fonts/EuclidFlex-Bold-WebS.woff2) format("woff2"),url(/images/fonts/EuclidFlex-Bold-WebS.woff) format("woff")
    }
    @font-face{
    font-family:ProximaNova;src:url(/images/fonts/proxima-nova/proximanova-thin-webfont.eot);src:url(/images/fonts/proxima-nova/proximanova-thin-webfont.eot?#iefix) format("embedded-opentype"),url(/images/fonts/proxima-nova/proximanova-thin-webfont.woff) format("woff"),url(/images/fonts/proxima-nova/proximanova-thin-webfont.ttf) format("truetype"),url(/images/fonts/proxima-nova/proximanova-thin-webfont.svg#proxima_nova_cn_ththin) format("svg");font-weight:100;font-style:normal
    }
    @font-face{
    font-family:ProximaNova;src:url(/images/fonts/proxima-nova/proximanova-regular-webfont.eot);src:url(/images/fonts/proxima-nova/proximanova-regular-webfont.eot?#iefix) format("embedded-opentype"),url(/images/fonts/proxima-nova/proximanova-regular-webfont.woff) format("woff"),url(/images/fonts/proxima-nova/proximanova-regular-webfont.ttf) format("truetype"),url(/images/fonts/proxima-nova/proximanova-regular-webfont.svg#proxima_nova_cn_ththin) format("svg");font-weight:300;font-style:normal
    }
    @font-face{
    font-family:ProximaNova;src:url(/images/fonts/proxima-nova/proximanova-semibold-webfont.eot);src:url(/images/fonts/proxima-nova/proximanova-semibold-webfont.eot?#iefix) format("embedded-opentype"),url(/images/fonts/proxima-nova/proximanova-semibold-webfont.woff) format("woff"),url(/images/fonts/proxima-nova/proximanova-semibold-webfont.ttf) format("truetype"),url(/images/fonts/proxima-nova/proximanova-semibold-webfont.svg#proxima_nova_cn_ththin) format("svg");font-weight:500;font-style:normal
    }
    @font-face{
    font-family:ProximaNova;src:url(/images/fonts/proxima-nova/proximanova-bold-webfont.eot);src:url(/images/fonts/proxima-nova/proximanova-bold-webfont.eot?#iefix) format("embedded-opentype"),url(/images/fonts/proxima-nova/proximanova-bold-webfont.woff) format("woff"),url(/images/fonts/proxima-nova/proximanova-bold-webfont.ttf) format("truetype"),url(/images/fonts/proxima-nova/proximanova-bold-webfont.svg#proxima_nova_cn_ththin) format("svg");font-weight:700;font-style:normal
    }
    @font-face{
    font-family:Brandon;src:url(/images/fonts/brandon-grotesque/brandon-black.eot);src:url(/images/fonts/brandon-grotesque/brandon-black.eot?#iefix) format("embedded-opentype"),url(/images/fonts/brandon-grotesque/brandon-black.woff) format("woff"),url(/images/fonts/brandon-grotesque/brandon-black.ttf) format("truetype"),url(/images/fonts/brandon-grotesque/brandon-black.svg#proxima_nova_cn_ththin) format("svg");font-weight:700;font-style:normal
    }
    body{
    font-family:ProximaNova,sans-serif;font-size:16px;line-height:1.6;font-weight:300;color:#495057
    }
    p{
    margin:0 0 10px
    }
    strong,b{
    font-weight:500;color:#1a1a1a
    }
    h1{
    font-size:2.9em;font-weight:700;color:#4b8ae7;line-height:1.1
    }
    h2{
    margin-top:60px;margin-bottom:40px;font-size:2.9em;font-weight:700;color:#4b8ae7;line-height:1.1
    }
    h2:after{
    content:"";border-bottom:3px solid #4B8AE7;display:block;width:30px;margin-top:10px;line-height:1.1
    }
    h3{
    font-size:2em;font-weight:700;margin-top:50px;margin-bottom:20px;color:#4b8ae7;line-height:1.1
    }
    h4{
    font-size:1.1em;margin-top:40px;margin-bottom:15px;text-transform:uppercase;letter-spacing:1px;font-weight:500;color:#4b8ae7;line-height:1.1
    }
    h4:has(code){
    text-transform:none
    }
    h5{
    font-size:.9em;margin-top:30px;margin-bottom:10px;text-transform:uppercase;letter-spacing:1px;font-weight:500;color:#4b8ae7;line-height:1.1
    }
    h5:has(code){
    text-transform:none
    }
    h6{
    font-size:.9em;margin-top:30px;margin-bottom:10px;font-weight:500;color:#4b8ae7;line-height:1.1;font-style:italic
    }
    h6:before{
    content:"—"
    }
    blockquote{
    padding:10px 20px;margin:0 0 20px;font-size:17.5px;border-left:5px solid #eee
    }
    .table{
    border:1px dotted #ccc;margin:20px 0;max-width:850px
    }
    .table .table{
    margin:20px 0;width:95%
    }
    .table th,.table td{
    vertical-align:top;text-align:left;padding:10px 30px 10px 10px;border-bottom:1px dotted #ccc
    }
    .table th{
    background:#f3f3f3;text-align:left;font-weight:700
    }
    .table tr:last-child td,.table tr:last-child th{
    border-bottom:none
    }
    code{
    color:#fe4a66;background:rgba(254,74,102,.05)
    }
    td code{
    word-break:break-all
    }
    a{
    color:#53b6f9
    }
    a:hover{
    text-decoration:underline
    }
    .main-content a[href^="http://"]:not([href*="contentsquare.com"]):after,.main-content a[href^="https://"]:not([href*="contentsquare.com"]):after,.main-content .additional-link a:after{
    -webkit-mask-image:url(/images/link-external.svg);mask-image:url(/images/link-external.svg);background-repeat:no-repeat;background-position:center;content:"";display:inline-flex;height:.6rem;width:.6rem;margin:0 3px 0 4px;background-color:currentColor
    }
    h1{
    color:#495057;font-family:Brandon,sans-serif;text-transform:uppercase;font-size:5em;font-weight:700;line-height:70px;
    }
    h1>span[class=blue]{
    color:#4b8ae7
    }
    h1.after{
    display:none
    }
    .content img{
    max-width:100%;box-shadow:0 0 1px #0003;margin:20px 0
    }
    .content ul{
    padding-left:0
    }
    .content li{
    list-style:none;padding-left:50px;padding-top:10px;text-indent:-10px
    }
    .content li:before{
    content:"•";float:left;margin-right:10px
    }
    .content ol>li{
    list-style:decimal;text-indent:0;padding-left:10px;margin-left:40px
    }
    .content ol>li p{
    color:#495057
    }
    .content ol>li:before{
    display:none
    }
    .content p,.content pre,.content ul,.content ol{
    max-width:700px
    }
    .content h1,.content h2,.content h3,.content h4,.content h5,.content h6{
    max-width:900px;overflow-wrap:break-word
    }
    .sticker{
    background:#FEBF3C;color:#fff;display:inline-block;padding:3px 6px 2px;border-radius:3px;font-size:12px;margin-left:10px;letter-spacing:0;position:relative;top:-2px
    }
    .anchor{
    float:left;padding-right:5px;margin-left:-22px
    }
    .anchor svg{
    visibility:hidden;width:16px;height:16px;
    }
    h2:hover .anchor svg,h3:hover .anchor svg,h4:hover .anchor svg,h5:hover .anchor svg,h6:hover .anchor svg{
    visibility:visible
    }
    .truncatedKnowMore{
    transition:all 2s;position:relative;max-height:45px;overflow:hidden
    }
    .truncatedKnowMore:before{
    transition:all 2s;content:" ";position:absolute;bottom:0;right:0;left:0;background-image:linear-gradient(to top,white,rgba(255,255,255,0));height:45px
    }
    .truncatedKnowMore:after{
    transition:all 1s;content:"▼";position:absolute;bottom:0;right:50%;border-radius:20px;color:#fff;background:#495057;line-height:20px;font-size:12px;padding:0 10px;text-align:center;box-shadow:0 0 3px #0003;cursor:pointer;opacity:.9
    }
    html[lang=en] .truncatedKnowMore:after{
    content:"▼  Expand"
    }
    html[lang=fr] .truncatedKnowMore:after{
    content:"▼  étendre"
    }
    .truncatedKnowMore_show{
    max-height:inherit
    }
    .truncatedKnowMore_show:before{
    width:1px
    }
    .truncatedKnowMore_show:after{
    opacity:0
    }
    .autotab{
    border-radius:4px;margin-top:30px;margin-right:20px;background:linear-gradient(to right,rgba(0,0,0,.03) 0%,rgba(0,0,0,0) 100%)
    }
    .autotab-title{
    display:none
    }
    .autotab-content{
    padding:10px 30px;display:none
    }
    .autotab-content.autotab-content-display{
    display:block
    }
    .autotab-tabs{
    background:#4B8AE7;padding:5px;border-radius:4px
    }
    .content ul.autotab-tabs{
    max-width:none
    }
    .autotab-tabs li{
    line-height:18px;list-style:none;display:inline-block;padding:5px 10px;margin:0 0 0 5px;text-indent:0
    }
    .autotab-tabs li a{
    text-decoration:none;color:#fff
    }
    .autotab-tabs li:before{
    display:none
    }
    .autotab-tabs li.sel{
    background:#fff;border-radius:20px
    }
    .autotab-tabs li.sel a{
    color:#0d2b5a
    }
    .version-select{
    -webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;appearance:none;outline:0;box-shadow:none;border:0!important;background:#fff;background-image:none
    }
    .version-select::-ms-expand{
    display:none
    }
    .version-select-container{
    position:relative;display:flex;width:15em;height:2.5em;line-height:3;background:#fff;overflow:hidden;border-radius:.25em;margin-left:1em;margin-top:20px
    }
    .version-select{
    flex:1;padding:0 .5em;font-size:1em;cursor:pointer
    }
    .version-select:hover{
    color:#4b8ae7
    }
    .version-select-container:after{
    content:"▼";position:absolute;top:0;right:0;padding:0 1em;background:#fff;cursor:pointer;pointer-events:none;-webkit-transition:.25s all ease;-o-transition:.25s all ease;transition:.25s all ease
    }
    .version-select-container:hover:after{
    color:#4b8ae7
    }
    @media print{
    header.header,aside{
    display:none!important
    }
    .container{
    margin-left:0!important;text-align:left
    }
    .truncatedKnowMore{
    max-height:none
    }
    .truncatedKnowMore:before,.truncatedKnowMore:after{
    display:none
    }
    h1.heading{
    font-size:4em
    }
    .content ul.autotab-tabs{
    display:none
    }
    h3.autotab-title,h4.autotab-title,h5.autotab-title{
    display:block;padding:20px 10px;border-radius:0;font-style:normal;max-width:none;margin-top:0
    }
    .autotab-content{
    display:block;margin-bottom:30px;border-bottom:1px solid #ccc
    }
    .autotab-content:last-child{
    border-bottom:none
    }
    .autotab{
    background:none;border:1px solid #ccc;max-width:770px
    }
    }
    pre{
    background:#333;color:#eee;display:flex;padding:15px;margin:20px 0;font-size:13px;line-height:1.42857143;color:#333;word-break:break-all;word-wrap:break-word;text-indent:0px
    }
    pre code{
    padding:0;font-size:inherit;text-indent:0px;color:#eee;white-space:pre-wrap;background-color:transparent;border-radius:0;flex:0 0 95%
    }
    .navbar{
    background-color:#3640e8;height:5rem;z-index:10;line-height:1
    }
    .navbar .navbar-container{
    display:flex;align-items:center;height:inherit;font-family:euclid-flex,Arial,sans-serif!important;margin:0 auto;padding:0 3.25rem
    }
    .navbar,.navbar a{
    color:#fff
    }
    .navbar a:focus,.navbar a:hover{
    text-decoration:none
    }
    .navbar .current-component-name{
    display:none!important
    }
    .navbar-brand{
    display:flex;align-items:center
    }
    .navbar-brand .navbar-item{
    display:flex;height:42px;transition:height .5s ease
    }
    .navbar-item.login{
    -webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;display:-webkit-box;display:-ms-flexbox;display:flex;padding-right:1.25rem
    }
    .navbar-item.current{
    text-decoration:underline
    }
    .navbar-item.deprecated{
    opacity:.3
    }
    .navbar-brand img{
    height:100%
    }
    .navbar-burger{
    width:30px;height:19px;background:none;border:0;position:relative;margin-left:auto;padding:0
    }
    .navbar-burger span{
    display:block;width:inherit;height:4px;background:white;margin-bottom:3px;transition:all .3s ease-in-out;transform:translateZ(0)
    }
    .navbar-burger.is-active span{
    position:absolute
    }
    .navbar-burger.is-active span:nth-child(1){
    top:8px;transform:rotate(135deg)
    }
    .navbar-burger.is-active span:nth-child(2){
    opacity:0
    }
    .navbar-burger.is-active span:nth-child(3){
    top:8px;transform:rotate(-135deg)
    }
    .navbar-menu{
    display:none;flex-grow:1;-webkit-box-flex:1
    }
    .navbar-start{
    flex-grow:1;display:flex;align-items:center;font-size:1.0625rem;justify-content:flex-end
    }
    .navbar-start>a.navbar-item,.navbar-start>.navbar-item>.navbar-link{
    display:block;padding:.75rem 1.25rem;letter-spacing:-.025em;position:relative
    }
    a.navbar-item.has-dropdown:after,.navbar-item.has-dropdown>.navbar-link:after{
    content:"";position:absolute;background:url(../../../images/home/caret-down.svg) no-repeat 50% 50%;width:.875rem;height:.625rem;height:1rem;margin-left:.25rem
    }
    .navbar-dropdown{
    margin:0 1.25rem
    }
    .navbar-dropdown a{
    position:relative
    }
    .navbar-dropdown a:after{
    content:"";position:absolute;bottom:-3px;left:0;right:0;height:1px;background-color:#fff;transform:scale3d(0,.9999,.9999);transition:transform .3s
    }
    .navbar-dropdown a:focus:after,.navbar-dropdown a:hover:after{
    transform:scale3d(1,.9999,.9999);transition-timing-function:cubic-bezier(.4,0,.2,1)
    }
    .navbar-dropdown.explore .title{
    display:none
    }
    .navbar-dropdown ul{
    list-style:none;padding:.5rem 0;margin:0
    }
    .navbar-dropdown ul.two-cols{
    display:grid;grid-template-columns:repeat(2,auto);align-content:flex-start
    }
    .navbar-dropdown li{
    padding:.75rem 1rem .75rem 1.25rem
    }
    .navbar-link .version{
    text-transform:none
    }
    .navbar-dropdown li:hover{
    background-color:#1c1263
    }
    .navbar-dropdown li.heading{
    font-weight:var(--weight-bold)
    }
    .navbar-dropdown ul.two-cols li.heading{
    grid-column:1/3
    }
    @media screen and (min-width: 1024px){
    .navbar-start>a.navbar-item:hover,.navbar-start>.navbar-item:hover>.navbar-link{
    text-decoration:underline
    }
    .navbar-dropdown{
    visibility:hidden;position:absolute;box-shadow:-5px 6px 10px #19181899;opacity:0
    }
    .navbar-dropdown.explore .title{
    display:block;font-weight:var(--weight-bold);padding:1rem 1.25rem .75rem;background-color:#ccc
    }
    .navbar-dropdown .cols{
    display:flex;background:#728baa
    }
    }
    html.is-clipped--navbar{
    overflow-y:hidden
    }
    .navbar-menu.is-active{
    display:block;background-color:var(--color-navbar-bg);position:absolute;top:var(--height-navbar);left:0;right:0;padding:1.25rem 0;height:calc(100vh - var(--height-navbar));overflow-y:auto
    }
    .navbar-menu.is-active .navbar-start{
    display:block
    }
    .navbar-menu.is-active .navbar-item.search{
    justify-content:center;padding-left:1.25rem;height:2.5rem
    }
    .navbar-menu.is-active .navbar-end{
    text-align:center;margin:1rem 0
    }
    @media screen and (min-width: 1024px){
    .navbar-brand .navbar-item{
    height:47px;width:165px;justify-content:center
    }
    .navbar-burger{
    display:none
    }
    .navbar-menu{
    display:flex
    }
    .navbar-item.has-dropdown:hover .navbar-dropdown{
    visibility:visible;opacity:1;color:#f1655d
    }
    .navbar-item.has-dropdown:hover .navbar-dropdown:before{
    content:"";display:block;position:absolute;top:-2.5rem;right:0;left:0;height:2.5rem;z-index:999
    }
    }
    .main-content{
    position:relative;float:left
    }
    </style>
    <script type="text/javascript">
      (function() {
        var mt = document.createElement("script"); mt.type = "text/javascript"; mt.async = true;
        mt.src = "//t.contentsquare.net/wvt/web-view.js";
        document.getElementsByTagName("head")[0].appendChild(mt);
        }
        )();
    </script>
    <!-- Hotjar Tracking Code for https://docs.contentsquare.com -->
    <link rel="stylesheet" href="/assets/_...ed93f5de.css">
    <link rel="stylesheet" href="/assets/_...cf115740.css">
    <link rel="stylesheet" href="/assets/_...a497b35f.css">
    <script type="module" src="/hoisted.144a76fa.js"></script><script async="" src="https://static.hotjar.com/c/hotjar-3165629.js?sv=6"></script><script type="text/javascript" async="" src="//t.contentsquare.net/uxa/42676b0e4d727.js"></script><script async="" src="https://script.hotjar.com/modules.cbd9768ba80ba0be5b17.js" charset="utf-8"></script>
    <style type="text/css">iframe#_hjRemoteVarsFrame {
      display: none !important; width: 1px !important; height: 1px !important; opacity: 0 !important; pointer-events: none !important;
      }
    </style>
  </head>
  <body cz-shortcut-listen="true" class="">
    
    <div class="main-content">
      <div class="container">
        <div class="row">
          <a name="top"></a>
          <section class="content">
            <div class="header_breadcrumb">
              <a href="/">Technical Docs</a><!----><span>WebView Tracking Tag</span>
            </div>
            <div>
              <div>
                <!--[-->
                <h1 id="webview-tracking-tag-span-class-blue-doc-span-">WebView Tracking Tag <span class="blue">Doc</span></h1>
                <p>Use this document to enable WebView tracking in your mobile app. You'll need to implement the Contentsquare WebView JavaScript Tracking Tag in the web pages called in your mobile app to build a JavaScript Bridge between your WebView content and the native SDK.</p>
                <h2 id="get-started">
                  <a href="#get-started" class="anchor">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 57.67 57.67" style="enable-background:new 0 0 57.67 57.67;" xml:space="preserve" width="512px" height="512px">
                      <g>
                        <path d="M54.162,3.508c-4.678-4.678-12.287-4.678-16.964,0l-9.07,9.07c-3.477,3.477-4.364,8.573-2.671,12.881  c-1.381-0.541-2.864-0.831-4.396-0.831c-3.212,0-6.225,1.243-8.481,3.5l-9.071,9.07c-4.677,4.677-4.677,12.287,0,16.964  c2.338,2.339,5.41,3.508,8.482,3.508s6.144-1.169,8.482-3.508l9.07-9.07c3.477-3.477,4.364-8.573,2.671-12.881  c1.381,0.541,2.864,0.831,4.396,0.831c3.213,0,6.225-1.243,8.482-3.5l9.071-9.07C58.839,15.795,58.839,8.185,54.162,3.508z   M28.128,43.678l-9.07,9.07c-3.897,3.896-10.238,3.896-14.136,0c-3.896-3.897-3.896-10.238,0-14.136l9.071-9.07  c1.879-1.879,4.389-2.914,7.067-2.914c2.34,0,4.551,0.79,6.325,2.243l-8.589,8.589c-0.391,0.391-0.391,1.023,0,1.414  c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l8.588-8.588C32.009,34.208,31.786,40.019,28.128,43.678z   M52.748,19.058l-9.071,9.07c-1.879,1.879-4.389,2.914-7.068,2.914c-2.34,0-4.55-0.79-6.325-2.243l8.589-8.589  c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-8.588,8.588c-3.21-3.923-2.987-9.734,0.671-13.393l9.07-9.07  C40.561,2.974,43.121,2,45.68,2c2.56,0,5.12,0.975,7.068,2.923C56.646,8.82,56.646,15.161,52.748,19.058z" fill="#4B8AE7"></path>
                      </g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg>
                  </a>
                  Get Started
                </h2>
                <p>The WebView JavaScript Tracking Tag is responsible to establish communication with the SDK in the parent app. </p>
                <p>To set up, you just need to add the following lines of code on every page that will be called in a WebView of your app, either at the end of the body marker, or via a TMS.</p>
                <div class="code-buttons">
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>Copy to clipboard</title>
                      <path fill-rule="evenodd" d="M7.024 3.75c0-.966.784-1.75 1.75-1.75H20.25c.966 0 1.75.784 1.75 1.75v11.498a1.75 1.75 0 01-1.75 1.75H8.774a1.75 1.75 0 01-1.75-1.75V3.75zm1.75-.25a.25.25 0 00-.25.25v11.498c0 .139.112.25.25.25H20.25a.25.25 0 00.25-.25V3.75a.25.25 0 00-.25-.25H8.774z"></path>
                      <path d="M1.995 10.749a1.75 1.75 0 011.75-1.751H5.25a.75.75 0 110 1.5H3.745a.25.25 0 00-.25.25L3.5 20.25c0 .138.111.25.25.25h9.5a.25.25 0 00.25-.25v-1.51a.75.75 0 111.5 0v1.51A1.75 1.75 0 0113.25 22h-9.5A1.75 1.75 0 012 20.25l-.005-9.501z"></path>
                    </svg>
                  </button>
                  <div class="copied" style="display: none;">Copied!</div>
                </div>
                <pre style="margin-top: 0px; padding-top: 0px;"><code class="lang-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{
  </span>
<span class="token keyword">var</span> mt <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"script"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> mt<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">"text/javascript"</span><span class="token punctuation">;</span> mt<span class="token punctuation">.</span>async <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
mt<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">"//t.contentsquare.net/wvt/web-view.js"</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">"head"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>mt<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">
  }
  </span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre>
                <p>This code creates a function which will add an asynchronous call to a script and then execute the function. This is a way to avoid other elements loading being blocked on the page. This reduces the impact of the tag on the page's performances.</p>
                <h2 id="privacy">
                  <a href="#privacy" class="anchor">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 57.67 57.67" style="enable-background:new 0 0 57.67 57.67;" xml:space="preserve" width="512px" height="512px">
                      <g>
                        <path d="M54.162,3.508c-4.678-4.678-12.287-4.678-16.964,0l-9.07,9.07c-3.477,3.477-4.364,8.573-2.671,12.881  c-1.381-0.541-2.864-0.831-4.396-0.831c-3.212,0-6.225,1.243-8.481,3.5l-9.071,9.07c-4.677,4.677-4.677,12.287,0,16.964  c2.338,2.339,5.41,3.508,8.482,3.508s6.144-1.169,8.482-3.508l9.07-9.07c3.477-3.477,4.364-8.573,2.671-12.881  c1.381,0.541,2.864,0.831,4.396,0.831c3.213,0,6.225-1.243,8.482-3.5l9.071-9.07C58.839,15.795,58.839,8.185,54.162,3.508z   M28.128,43.678l-9.07,9.07c-3.897,3.896-10.238,3.896-14.136,0c-3.896-3.897-3.896-10.238,0-14.136l9.071-9.07  c1.879-1.879,4.389-2.914,7.067-2.914c2.34,0,4.551,0.79,6.325,2.243l-8.589,8.589c-0.391,0.391-0.391,1.023,0,1.414  c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l8.588-8.588C32.009,34.208,31.786,40.019,28.128,43.678z   M52.748,19.058l-9.071,9.07c-1.879,1.879-4.389,2.914-7.068,2.914c-2.34,0-4.55-0.79-6.325-2.243l8.589-8.589  c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-8.588,8.588c-3.21-3.923-2.987-9.734,0.671-13.393l9.07-9.07  C40.561,2.974,43.121,2,45.68,2c2.56,0,5.12,0.975,7.068,2.923C56.646,8.82,56.646,15.161,52.748,19.058z" fill="#4B8AE7"></path>
                      </g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg>
                  </a>
                  Privacy
                </h2>
                <h3 id="handling-user-consent">
                  <a href="#handling-user-consent" class="anchor">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 57.67 57.67" style="enable-background:new 0 0 57.67 57.67;" xml:space="preserve" width="512px" height="512px">
                      <g>
                        <path d="M54.162,3.508c-4.678-4.678-12.287-4.678-16.964,0l-9.07,9.07c-3.477,3.477-4.364,8.573-2.671,12.881  c-1.381-0.541-2.864-0.831-4.396-0.831c-3.212,0-6.225,1.243-8.481,3.5l-9.071,9.07c-4.677,4.677-4.677,12.287,0,16.964  c2.338,2.339,5.41,3.508,8.482,3.508s6.144-1.169,8.482-3.508l9.07-9.07c3.477-3.477,4.364-8.573,2.671-12.881  c1.381,0.541,2.864,0.831,4.396,0.831c3.213,0,6.225-1.243,8.482-3.5l9.071-9.07C58.839,15.795,58.839,8.185,54.162,3.508z   M28.128,43.678l-9.07,9.07c-3.897,3.896-10.238,3.896-14.136,0c-3.896-3.897-3.896-10.238,0-14.136l9.071-9.07  c1.879-1.879,4.389-2.914,7.067-2.914c2.34,0,4.551,0.79,6.325,2.243l-8.589,8.589c-0.391,0.391-0.391,1.023,0,1.414  c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l8.588-8.588C32.009,34.208,31.786,40.019,28.128,43.678z   M52.748,19.058l-9.071,9.07c-1.879,1.879-4.389,2.914-7.068,2.914c-2.34,0-4.55-0.79-6.325-2.243l8.589-8.589  c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-8.588,8.588c-3.21-3.923-2.987-9.734,0.671-13.393l9.07-9.07  C40.561,2.974,43.121,2,45.68,2c2.56,0,5.12,0.975,7.068,2.923C56.646,8.82,56.646,15.161,52.748,19.058z" fill="#4B8AE7"></path>
                      </g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg>
                  </a>
                  Handling User Consent
                </h3>
                <p>Even though Contentsquare only collects usage data on your app, the SDK will consider every new user to be opted-out. To start tracking, the SDK Opt-in API must be called.</p>
                <p>You are responsible for creating the UI asking the user for his consent and allowing him to manage his privacy settings and then calling the appropriate Contentsquare following functions (opt-in or opt-out).</p>
                <div class="note-container note-type-note">
                  <!---->
                  <p class="note-title">
                    <span class="note-icon">
                      <svg viewBox="0 0 18 18" width="16" height="16" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0114.25 14H1.75A1.75 1.75 0 010 12.25v-8.5zm1.75-.25a.25.25 0 00-.25.25v8.5c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25v-8.5a.25.25 0 00-.25-.25H1.75zM3.5 6.25a.75.75 0 01.75-.75h7a.75.75 0 010 1.5h-7a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h4a.75.75 0 000-1.5h-4z"></path>
                      </svg>
                    </span>
                    NOTE 
                  </p>
                  <!---->
                  <p class="note-content">
                    <!--[--> If for some reason you think that securing user consent is not required for your app, discuss it during the Implementation process with your main contact. <!--]-->
                  </p>
                </div>
                <h3 id="opt-in">
                  <a href="#opt-in" class="anchor">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 57.67 57.67" style="enable-background:new 0 0 57.67 57.67;" xml:space="preserve" width="512px" height="512px">
                      <g>
                        <path d="M54.162,3.508c-4.678-4.678-12.287-4.678-16.964,0l-9.07,9.07c-3.477,3.477-4.364,8.573-2.671,12.881  c-1.381-0.541-2.864-0.831-4.396-0.831c-3.212,0-6.225,1.243-8.481,3.5l-9.071,9.07c-4.677,4.677-4.677,12.287,0,16.964  c2.338,2.339,5.41,3.508,8.482,3.508s6.144-1.169,8.482-3.508l9.07-9.07c3.477-3.477,4.364-8.573,2.671-12.881  c1.381,0.541,2.864,0.831,4.396,0.831c3.213,0,6.225-1.243,8.482-3.5l9.071-9.07C58.839,15.795,58.839,8.185,54.162,3.508z   M28.128,43.678l-9.07,9.07c-3.897,3.896-10.238,3.896-14.136,0c-3.896-3.897-3.896-10.238,0-14.136l9.071-9.07  c1.879-1.879,4.389-2.914,7.067-2.914c2.34,0,4.551,0.79,6.325,2.243l-8.589,8.589c-0.391,0.391-0.391,1.023,0,1.414  c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l8.588-8.588C32.009,34.208,31.786,40.019,28.128,43.678z   M52.748,19.058l-9.071,9.07c-1.879,1.879-4.389,2.914-7.068,2.914c-2.34,0-4.55-0.79-6.325-2.243l8.589-8.589  c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-8.588,8.588c-3.21-3.923-2.987-9.734,0.671-13.393l9.07-9.07  C40.561,2.974,43.121,2,45.68,2c2.56,0,5.12,0.975,7.068,2.923C56.646,8.82,56.646,15.161,52.748,19.058z" fill="#4B8AE7"></path>
                      </g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg>
                  </a>
                  Opt-in
                </h3>
                <div class="note-container note-type-note">
                  <!---->
                  <p class="note-title">
                    <span class="note-icon">
                      <svg viewBox="0 0 18 18" width="16" height="16" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0114.25 14H1.75A1.75 1.75 0 010 12.25v-8.5zm1.75-.25a.25.25 0 00-.25.25v8.5c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25v-8.5a.25.25 0 00-.25-.25H1.75zM3.5 6.25a.75.75 0 01.75-.75h7a.75.75 0 010 1.5h-7a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h4a.75.75 0 000-1.5h-4z"></path>
                      </svg>
                    </span>
                    NOTE 
                  </p>
                  <!---->
                  <p class="note-content">
                    <!--[--> Opt-in command is compatible with iOS SDK &gt;= 4.13.0 and Android SDK &gt;= 4.10.0 <!--]-->
                  </p>
                </div>
                <p>Use the Opt-in API to get user consent. Calling this API will generate a user ID and initiate tracking.</p>
                <div class="code-buttons">
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>Copy to clipboard</title>
                      <path fill-rule="evenodd" d="M7.024 3.75c0-.966.784-1.75 1.75-1.75H20.25c.966 0 1.75.784 1.75 1.75v11.498a1.75 1.75 0 01-1.75 1.75H8.774a1.75 1.75 0 01-1.75-1.75V3.75zm1.75-.25a.25.25 0 00-.25.25v11.498c0 .139.112.25.25.25H20.25a.25.25 0 00.25-.25V3.75a.25.25 0 00-.25-.25H8.774z"></path>
                      <path d="M1.995 10.749a1.75 1.75 0 011.75-1.751H5.25a.75.75 0 110 1.5H3.745a.25.25 0 00-.25.25L3.5 20.25c0 .138.111.25.25.25h9.5a.25.25 0 00.25-.25v-1.51a.75.75 0 111.5 0v1.51A1.75 1.75 0 0113.25 22h-9.5A1.75 1.75 0 012 20.25l-.005-9.501z"></path>
                    </svg>
                  </button>
                  <div class="copied" style="display: none;">Copied!</div>
                </div>
                <pre style="margin-top: 0px; padding-top: 0px;"><code class="lang-javascript">window<span class="token punctuation">.</span>cs_wvt <span class="token operator">=</span> window<span class="token punctuation">.</span>cs_wvt <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
window<span class="token punctuation">.</span>cs_wvt<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'optin'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
                <h3 id="opt-out">
                  <a href="#opt-out" class="anchor">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 57.67 57.67" style="enable-background:new 0 0 57.67 57.67;" xml:space="preserve" width="512px" height="512px">
                      <g>
                        <path d="M54.162,3.508c-4.678-4.678-12.287-4.678-16.964,0l-9.07,9.07c-3.477,3.477-4.364,8.573-2.671,12.881  c-1.381-0.541-2.864-0.831-4.396-0.831c-3.212,0-6.225,1.243-8.481,3.5l-9.071,9.07c-4.677,4.677-4.677,12.287,0,16.964  c2.338,2.339,5.41,3.508,8.482,3.508s6.144-1.169,8.482-3.508l9.07-9.07c3.477-3.477,4.364-8.573,2.671-12.881  c1.381,0.541,2.864,0.831,4.396,0.831c3.213,0,6.225-1.243,8.482-3.5l9.071-9.07C58.839,15.795,58.839,8.185,54.162,3.508z   M28.128,43.678l-9.07,9.07c-3.897,3.896-10.238,3.896-14.136,0c-3.896-3.897-3.896-10.238,0-14.136l9.071-9.07  c1.879-1.879,4.389-2.914,7.067-2.914c2.34,0,4.551,0.79,6.325,2.243l-8.589,8.589c-0.391,0.391-0.391,1.023,0,1.414  c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l8.588-8.588C32.009,34.208,31.786,40.019,28.128,43.678z   M52.748,19.058l-9.071,9.07c-1.879,1.879-4.389,2.914-7.068,2.914c-2.34,0-4.55-0.79-6.325-2.243l8.589-8.589  c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-8.588,8.588c-3.21-3.923-2.987-9.734,0.671-13.393l9.07-9.07  C40.561,2.974,43.121,2,45.68,2c2.56,0,5.12,0.975,7.068,2.923C56.646,8.82,56.646,15.161,52.748,19.058z" fill="#4B8AE7"></path>
                      </g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg>
                  </a>
                  Opt-Out
                </h3>
                <div class="note-container note-type-note">
                  <!---->
                  <p class="note-title">
                    <span class="note-icon">
                      <svg viewBox="0 0 18 18" width="16" height="16" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0114.25 14H1.75A1.75 1.75 0 010 12.25v-8.5zm1.75-.25a.25.25 0 00-.25.25v8.5c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25v-8.5a.25.25 0 00-.25-.25H1.75zM3.5 6.25a.75.75 0 01.75-.75h7a.75.75 0 010 1.5h-7a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h4a.75.75 0 000-1.5h-4z"></path>
                      </svg>
                    </span>
                    NOTE 
                  </p>
                  <!---->
                  <p class="note-content">
                    <!--[--> Opt-in command is compatible with iOS SDK &gt;= 4.13.0 and Android SDK &gt;= 4.10.0 <!--]-->
                  </p>
                </div>
                <p><strong>Permanently breaking the link and stopping all data collection.</strong></p>
                <p>When this API is called, tracking stops immediately, all settings are reset (Session number, Page number...) and all files and directory regarding to Contentsquare are deleted. This means that the user ID is deleted. The SDK will never track and collect any data from the user's phone unless the Opt-in API is called again.</p>
                <div class="code-buttons">
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>Copy to clipboard</title>
                      <path fill-rule="evenodd" d="M7.024 3.75c0-.966.784-1.75 1.75-1.75H20.25c.966 0 1.75.784 1.75 1.75v11.498a1.75 1.75 0 01-1.75 1.75H8.774a1.75 1.75 0 01-1.75-1.75V3.75zm1.75-.25a.25.25 0 00-.25.25v11.498c0 .139.112.25.25.25H20.25a.25.25 0 00.25-.25V3.75a.25.25 0 00-.25-.25H8.774z"></path>
                      <path d="M1.995 10.749a1.75 1.75 0 011.75-1.751H5.25a.75.75 0 110 1.5H3.745a.25.25 0 00-.25.25L3.5 20.25c0 .138.111.25.25.25h9.5a.25.25 0 00.25-.25v-1.51a.75.75 0 111.5 0v1.51A1.75 1.75 0 0113.25 22h-9.5A1.75 1.75 0 012 20.25l-.005-9.501z"></path>
                    </svg>
                  </button>
                  <div class="copied" style="display: none;">Copied!</div>
                </div>
                <pre style="margin-top: 0px; padding-top: 0px;"><code class="lang-javascript">window<span class="token punctuation">.</span>cs_wvt <span class="token operator">=</span> window<span class="token punctuation">.</span>cs_wvt <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
window<span class="token punctuation">.</span>cs_wvt<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'optout'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
                <h2 id="track-pageviews">
                  <a href="#track-pageviews" class="anchor">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 57.67 57.67" style="enable-background:new 0 0 57.67 57.67;" xml:space="preserve" width="512px" height="512px">
                      <g>
                        <path d="M54.162,3.508c-4.678-4.678-12.287-4.678-16.964,0l-9.07,9.07c-3.477,3.477-4.364,8.573-2.671,12.881  c-1.381-0.541-2.864-0.831-4.396-0.831c-3.212,0-6.225,1.243-8.481,3.5l-9.071,9.07c-4.677,4.677-4.677,12.287,0,16.964  c2.338,2.339,5.41,3.508,8.482,3.508s6.144-1.169,8.482-3.508l9.07-9.07c3.477-3.477,4.364-8.573,2.671-12.881  c1.381,0.541,2.864,0.831,4.396,0.831c3.213,0,6.225-1.243,8.482-3.5l9.071-9.07C58.839,15.795,58.839,8.185,54.162,3.508z   M28.128,43.678l-9.07,9.07c-3.897,3.896-10.238,3.896-14.136,0c-3.896-3.897-3.896-10.238,0-14.136l9.071-9.07  c1.879-1.879,4.389-2.914,7.067-2.914c2.34,0,4.551,0.79,6.325,2.243l-8.589,8.589c-0.391,0.391-0.391,1.023,0,1.414  c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l8.588-8.588C32.009,34.208,31.786,40.019,28.128,43.678z   M52.748,19.058l-9.071,9.07c-1.879,1.879-4.389,2.914-7.068,2.914c-2.34,0-4.55-0.79-6.325-2.243l8.589-8.589  c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-8.588,8.588c-3.21-3.923-2.987-9.734,0.671-13.393l9.07-9.07  C40.561,2.974,43.121,2,45.68,2c2.56,0,5.12,0.975,7.068,2.923C56.646,8.82,56.646,15.161,52.748,19.058z" fill="#4B8AE7"></path>
                      </g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg>
                  </a>
                  Track Pageviews
                </h2>
                <p>Contentsquare aggregates user behavior and engagement at the screen/page level. To do so, it is required to track page transitions by calling a dedicated command. When the command is called, the WebView Tracking Tag logs a pageview event that identifies the new page with the <strong>Page Title</strong> provided.</p>
                <div class="code-buttons">
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>Copy to clipboard</title>
                      <path fill-rule="evenodd" d="M7.024 3.75c0-.966.784-1.75 1.75-1.75H20.25c.966 0 1.75.784 1.75 1.75v11.498a1.75 1.75 0 01-1.75 1.75H8.774a1.75 1.75 0 01-1.75-1.75V3.75zm1.75-.25a.25.25 0 00-.25.25v11.498c0 .139.112.25.25.25H20.25a.25.25 0 00.25-.25V3.75a.25.25 0 00-.25-.25H8.774z"></path>
                      <path d="M1.995 10.749a1.75 1.75 0 011.75-1.751H5.25a.75.75 0 110 1.5H3.745a.25.25 0 00-.25.25L3.5 20.25c0 .138.111.25.25.25h9.5a.25.25 0 00.25-.25v-1.51a.75.75 0 111.5 0v1.51A1.75 1.75 0 0113.25 22h-9.5A1.75 1.75 0 012 20.25l-.005-9.501z"></path>
                    </svg>
                  </button>
                  <div class="copied" style="display: none;">Copied!</div>
                </div>
                <pre style="margin-top: 0px; padding-top: 0px;"><code class="lang-javascript">window<span class="token punctuation">.</span>cs_wvt <span class="token operator">=</span> window<span class="token punctuation">.</span>cs_wvt <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
window<span class="token punctuation">.</span>cs_wvt<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'trackPageview'</span><span class="token punctuation">,</span> <span class="token string">'My Custom Page Title'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// triggers a pageview event with "My Custom Page Title" as the page title</span>
</code></pre>
                <h2 id="track-transactions">
                  <a href="#track-transactions" class="anchor">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 57.67 57.67" style="enable-background:new 0 0 57.67 57.67;" xml:space="preserve" width="512px" height="512px">
                      <g>
                        <path d="M54.162,3.508c-4.678-4.678-12.287-4.678-16.964,0l-9.07,9.07c-3.477,3.477-4.364,8.573-2.671,12.881  c-1.381-0.541-2.864-0.831-4.396-0.831c-3.212,0-6.225,1.243-8.481,3.5l-9.071,9.07c-4.677,4.677-4.677,12.287,0,16.964  c2.338,2.339,5.41,3.508,8.482,3.508s6.144-1.169,8.482-3.508l9.07-9.07c3.477-3.477,4.364-8.573,2.671-12.881  c1.381,0.541,2.864,0.831,4.396,0.831c3.213,0,6.225-1.243,8.482-3.5l9.071-9.07C58.839,15.795,58.839,8.185,54.162,3.508z   M28.128,43.678l-9.07,9.07c-3.897,3.896-10.238,3.896-14.136,0c-3.896-3.897-3.896-10.238,0-14.136l9.071-9.07  c1.879-1.879,4.389-2.914,7.067-2.914c2.34,0,4.551,0.79,6.325,2.243l-8.589,8.589c-0.391,0.391-0.391,1.023,0,1.414  c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l8.588-8.588C32.009,34.208,31.786,40.019,28.128,43.678z   M52.748,19.058l-9.071,9.07c-1.879,1.879-4.389,2.914-7.068,2.914c-2.34,0-4.55-0.79-6.325-2.243l8.589-8.589  c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-8.588,8.588c-3.21-3.923-2.987-9.734,0.671-13.393l9.07-9.07  C40.561,2.974,43.121,2,45.68,2c2.56,0,5.12,0.975,7.068,2.923C56.646,8.82,56.646,15.161,52.748,19.058z" fill="#4B8AE7"></path>
                      </g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg>
                  </a>
                  Track Transactions
                </h2>
                <div class="note-container note-type-note">
                  <!---->
                  <p class="note-title">
                    <span class="note-icon">
                      <svg viewBox="0 0 18 18" width="16" height="16" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0114.25 14H1.75A1.75 1.75 0 010 12.25v-8.5zm1.75-.25a.25.25 0 00-.25.25v8.5c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25v-8.5a.25.25 0 00-.25-.25H1.75zM3.5 6.25a.75.75 0 01.75-.75h7a.75.75 0 010 1.5h-7a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h4a.75.75 0 000-1.5h-4z"></path>
                      </svg>
                    </span>
                    NOTE 
                  </p>
                  <!---->
                  <p class="note-content">
                    <!--[--> Opt-in command is compatible with iOS SDK &gt;= 4.13.0 and Android SDK &gt;= 4.10.0 <!--]-->
                  </p>
                </div>
                <p>To associate a user's session with their potential purchases (and corresponding revenue), you must send the transaction via a dedicated API. For each transaction, we send:</p>
                <ul>
                  <li>price (mandatory)</li>
                  <li>currency (mandatory)</li>
                  <li>transaction ID (optional)</li>
                </ul>
                <div class="code-buttons">
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>Copy to clipboard</title>
                      <path fill-rule="evenodd" d="M7.024 3.75c0-.966.784-1.75 1.75-1.75H20.25c.966 0 1.75.784 1.75 1.75v11.498a1.75 1.75 0 01-1.75 1.75H8.774a1.75 1.75 0 01-1.75-1.75V3.75zm1.75-.25a.25.25 0 00-.25.25v11.498c0 .139.112.25.25.25H20.25a.25.25 0 00.25-.25V3.75a.25.25 0 00-.25-.25H8.774z"></path>
                      <path d="M1.995 10.749a1.75 1.75 0 011.75-1.751H5.25a.75.75 0 110 1.5H3.745a.25.25 0 00-.25.25L3.5 20.25c0 .138.111.25.25.25h9.5a.25.25 0 00.25-.25v-1.51a.75.75 0 111.5 0v1.51A1.75 1.75 0 0113.25 22h-9.5A1.75 1.75 0 012 20.25l-.005-9.501z"></path>
                    </svg>
                  </button>
                  <div class="copied" style="display: none;">Copied!</div>
                </div>
                <pre style="margin-top: 0px; padding-top: 0px;"><code class="lang-javascript">window<span class="token punctuation">.</span>cs_wvt <span class="token operator">=</span> window<span class="token punctuation">.</span>cs_wvt <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
window<span class="token punctuation">.</span>cs_wvt<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'trackTransaction'</span><span class="token punctuation">,</span> <span class="token punctuation">{
  </span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token literal-property property">currency</span><span class="token operator">:</span> <span class="token string">'EUR'</span><span class="token punctuation">,</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'my-transaction-id'</span><span class="token punctuation">
  }
  </span><span class="token punctuation">]</span><span class="token punctuation">)</span> 
<span class="token comment">// value is a float</span>
<span class="token comment">// currency is a string that must be inferior to 10 characters</span>
<span class="token comment">// id is a string or null</span>
</code></pre>
                <div class="note-container note-type-warning">
                  <p class="note-title">
                    <span class="note-icon">
                      <svg viewBox="-1 1 18 18" width="16" height="16" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8.9 1.5C8.7 1.2 8.4 1 8 1s-.7.2-.9.5l-7 12a1 1 0 0 0 0 1c.2.3.6.5 1 .5H15c.4 0 .7-.2.9-.5a1 1 0 0 0 0-1l-7-12zM9 13H7v-2h2v2zm0-3H7V6h2v4z"></path>
                      </svg>
                    </span>
                    WARNING 
                  </p>
                  <!----><!---->
                  <p class="note-content">
                    <!--[--><strong>Each transaction must only be sent once</strong>. A common mistake is to trigger the sending when the confirmation screen is displayed. This leads to triggering the transaction each time the user puts the app in background and then in foreground on the confirmation screen. <!--]-->
                  </p>
                </div>
                <h3 id="currency">
                  <a href="#currency" class="anchor">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 57.67 57.67" style="enable-background:new 0 0 57.67 57.67;" xml:space="preserve" width="512px" height="512px">
                      <g>
                        <path d="M54.162,3.508c-4.678-4.678-12.287-4.678-16.964,0l-9.07,9.07c-3.477,3.477-4.364,8.573-2.671,12.881  c-1.381-0.541-2.864-0.831-4.396-0.831c-3.212,0-6.225,1.243-8.481,3.5l-9.071,9.07c-4.677,4.677-4.677,12.287,0,16.964  c2.338,2.339,5.41,3.508,8.482,3.508s6.144-1.169,8.482-3.508l9.07-9.07c3.477-3.477,4.364-8.573,2.671-12.881  c1.381,0.541,2.864,0.831,4.396,0.831c3.213,0,6.225-1.243,8.482-3.5l9.071-9.07C58.839,15.795,58.839,8.185,54.162,3.508z   M28.128,43.678l-9.07,9.07c-3.897,3.896-10.238,3.896-14.136,0c-3.896-3.897-3.896-10.238,0-14.136l9.071-9.07  c1.879-1.879,4.389-2.914,7.067-2.914c2.34,0,4.551,0.79,6.325,2.243l-8.589,8.589c-0.391,0.391-0.391,1.023,0,1.414  c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l8.588-8.588C32.009,34.208,31.786,40.019,28.128,43.678z   M52.748,19.058l-9.071,9.07c-1.879,1.879-4.389,2.914-7.068,2.914c-2.34,0-4.55-0.79-6.325-2.243l8.589-8.589  c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-8.588,8.588c-3.21-3.923-2.987-9.734,0.671-13.393l9.07-9.07  C40.561,2.974,43.121,2,45.68,2c2.56,0,5.12,0.975,7.068,2.923C56.646,8.82,56.646,15.161,52.748,19.058z" fill="#4B8AE7"></path>
                      </g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg>
                  </a>
                  Currency
                </h3>
                <p>The currency is conforming to the ISO 4217 standard. The currency must be passed as an "alphanumeric code".</p>
                <p>If the currency passed doesn't match the supported currencies, the SDK will send a currency value of <code>-1</code>. It will be processed as the default currency of the project.</p>
                <h2 id="track-dynamic-variables">
                  <a href="#track-dynamic-variables" class="anchor">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 57.67 57.67" style="enable-background:new 0 0 57.67 57.67;" xml:space="preserve" width="512px" height="512px">
                      <g>
                        <path d="M54.162,3.508c-4.678-4.678-12.287-4.678-16.964,0l-9.07,9.07c-3.477,3.477-4.364,8.573-2.671,12.881  c-1.381-0.541-2.864-0.831-4.396-0.831c-3.212,0-6.225,1.243-8.481,3.5l-9.071,9.07c-4.677,4.677-4.677,12.287,0,16.964  c2.338,2.339,5.41,3.508,8.482,3.508s6.144-1.169,8.482-3.508l9.07-9.07c3.477-3.477,4.364-8.573,2.671-12.881  c1.381,0.541,2.864,0.831,4.396,0.831c3.213,0,6.225-1.243,8.482-3.5l9.071-9.07C58.839,15.795,58.839,8.185,54.162,3.508z   M28.128,43.678l-9.07,9.07c-3.897,3.896-10.238,3.896-14.136,0c-3.896-3.897-3.896-10.238,0-14.136l9.071-9.07  c1.879-1.879,4.389-2.914,7.067-2.914c2.34,0,4.551,0.79,6.325,2.243l-8.589,8.589c-0.391,0.391-0.391,1.023,0,1.414  c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l8.588-8.588C32.009,34.208,31.786,40.019,28.128,43.678z   M52.748,19.058l-9.071,9.07c-1.879,1.879-4.389,2.914-7.068,2.914c-2.34,0-4.55-0.79-6.325-2.243l8.589-8.589  c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-8.588,8.588c-3.21-3.923-2.987-9.734,0.671-13.393l9.07-9.07  C40.561,2.974,43.121,2,45.68,2c2.56,0,5.12,0.975,7.068,2.923C56.646,8.82,56.646,15.161,52.748,19.058z" fill="#4B8AE7"></path>
                      </g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg>
                  </a>
                  Track Dynamic Variables
                </h2>
                <div class="note-container note-type-note">
                  <!---->
                  <p class="note-title">
                    <span class="note-icon">
                      <svg viewBox="0 0 18 18" width="16" height="16" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0114.25 14H1.75A1.75 1.75 0 010 12.25v-8.5zm1.75-.25a.25.25 0 00-.25.25v8.5c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25v-8.5a.25.25 0 00-.25-.25H1.75zM3.5 6.25a.75.75 0 01.75-.75h7a.75.75 0 010 1.5h-7a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h4a.75.75 0 000-1.5h-4z"></path>
                      </svg>
                    </span>
                    NOTE 
                  </p>
                  <!---->
                  <p class="note-content">
                    <!--[--> Opt-in command is compatible with iOS SDK &gt;= 4.13.0 and Android SDK &gt;= 4.10.0 <!--]-->
                  </p>
                </div>
                <h3 id="general-principles">
                  <a href="#general-principles" class="anchor">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 57.67 57.67" style="enable-background:new 0 0 57.67 57.67;" xml:space="preserve" width="512px" height="512px">
                      <g>
                        <path d="M54.162,3.508c-4.678-4.678-12.287-4.678-16.964,0l-9.07,9.07c-3.477,3.477-4.364,8.573-2.671,12.881  c-1.381-0.541-2.864-0.831-4.396-0.831c-3.212,0-6.225,1.243-8.481,3.5l-9.071,9.07c-4.677,4.677-4.677,12.287,0,16.964  c2.338,2.339,5.41,3.508,8.482,3.508s6.144-1.169,8.482-3.508l9.07-9.07c3.477-3.477,4.364-8.573,2.671-12.881  c1.381,0.541,2.864,0.831,4.396,0.831c3.213,0,6.225-1.243,8.482-3.5l9.071-9.07C58.839,15.795,58.839,8.185,54.162,3.508z   M28.128,43.678l-9.07,9.07c-3.897,3.896-10.238,3.896-14.136,0c-3.896-3.897-3.896-10.238,0-14.136l9.071-9.07  c1.879-1.879,4.389-2.914,7.067-2.914c2.34,0,4.551,0.79,6.325,2.243l-8.589,8.589c-0.391,0.391-0.391,1.023,0,1.414  c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l8.588-8.588C32.009,34.208,31.786,40.019,28.128,43.678z   M52.748,19.058l-9.071,9.07c-1.879,1.879-4.389,2.914-7.068,2.914c-2.34,0-4.55-0.79-6.325-2.243l8.589-8.589  c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-8.588,8.588c-3.21-3.923-2.987-9.734,0.671-13.393l9.07-9.07  C40.561,2.974,43.121,2,45.68,2c2.56,0,5.12,0.975,7.068,2.923C56.646,8.82,56.646,15.161,52.748,19.058z" fill="#4B8AE7"></path>
                      </g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg>
                  </a>
                  General principles
                </h3>
                <h4 id="usage">
                  <a href="#usage" class="anchor">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 57.67 57.67" style="enable-background:new 0 0 57.67 57.67;" xml:space="preserve" width="512px" height="512px">
                      <g>
                        <path d="M54.162,3.508c-4.678-4.678-12.287-4.678-16.964,0l-9.07,9.07c-3.477,3.477-4.364,8.573-2.671,12.881  c-1.381-0.541-2.864-0.831-4.396-0.831c-3.212,0-6.225,1.243-8.481,3.5l-9.071,9.07c-4.677,4.677-4.677,12.287,0,16.964  c2.338,2.339,5.41,3.508,8.482,3.508s6.144-1.169,8.482-3.508l9.07-9.07c3.477-3.477,4.364-8.573,2.671-12.881  c1.381,0.541,2.864,0.831,4.396,0.831c3.213,0,6.225-1.243,8.482-3.5l9.071-9.07C58.839,15.795,58.839,8.185,54.162,3.508z   M28.128,43.678l-9.07,9.07c-3.897,3.896-10.238,3.896-14.136,0c-3.896-3.897-3.896-10.238,0-14.136l9.071-9.07  c1.879-1.879,4.389-2.914,7.067-2.914c2.34,0,4.551,0.79,6.325,2.243l-8.589,8.589c-0.391,0.391-0.391,1.023,0,1.414  c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l8.588-8.588C32.009,34.208,31.786,40.019,28.128,43.678z   M52.748,19.058l-9.071,9.07c-1.879,1.879-4.389,2.914-7.068,2.914c-2.34,0-4.55-0.79-6.325-2.243l8.589-8.589  c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-8.588,8.588c-3.21-3.923-2.987-9.734,0.671-13.393l9.07-9.07  C40.561,2.974,43.121,2,45.68,2c2.56,0,5.12,0.975,7.068,2.923C56.646,8.82,56.646,15.161,52.748,19.058z" fill="#4B8AE7"></path>
                      </g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg>
                  </a>
                  Usage
                </h4>
                <p><em>Dynamic variables</em> are additional information on the session that can be used to <em>segment sessions</em>.</p>
                <p>For example, they can include information on the A/B Test variations displayed to the current user.</p>
                <h4 id="limits">
                  <a href="#limits" class="anchor">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 57.67 57.67" style="enable-background:new 0 0 57.67 57.67;" xml:space="preserve" width="512px" height="512px">
                      <g>
                        <path d="M54.162,3.508c-4.678-4.678-12.287-4.678-16.964,0l-9.07,9.07c-3.477,3.477-4.364,8.573-2.671,12.881  c-1.381-0.541-2.864-0.831-4.396-0.831c-3.212,0-6.225,1.243-8.481,3.5l-9.071,9.07c-4.677,4.677-4.677,12.287,0,16.964  c2.338,2.339,5.41,3.508,8.482,3.508s6.144-1.169,8.482-3.508l9.07-9.07c3.477-3.477,4.364-8.573,2.671-12.881  c1.381,0.541,2.864,0.831,4.396,0.831c3.213,0,6.225-1.243,8.482-3.5l9.071-9.07C58.839,15.795,58.839,8.185,54.162,3.508z   M28.128,43.678l-9.07,9.07c-3.897,3.896-10.238,3.896-14.136,0c-3.896-3.897-3.896-10.238,0-14.136l9.071-9.07  c1.879-1.879,4.389-2.914,7.067-2.914c2.34,0,4.551,0.79,6.325,2.243l-8.589,8.589c-0.391,0.391-0.391,1.023,0,1.414  c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l8.588-8.588C32.009,34.208,31.786,40.019,28.128,43.678z   M52.748,19.058l-9.071,9.07c-1.879,1.879-4.389,2.914-7.068,2.914c-2.34,0-4.55-0.79-6.325-2.243l8.589-8.589  c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-8.588,8.588c-3.21-3.923-2.987-9.734,0.671-13.393l9.07-9.07  C40.561,2.974,43.121,2,45.68,2c2.56,0,5.12,0.975,7.068,2.923C56.646,8.82,56.646,15.161,52.748,19.058z" fill="#4B8AE7"></path>
                      </g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg>
                  </a>
                  Limits
                </h4>
                <h5 id="on-the-server-side">
                  <a href="#on-the-server-side" class="anchor">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 57.67 57.67" style="enable-background:new 0 0 57.67 57.67;" xml:space="preserve" width="512px" height="512px">
                      <g>
                        <path d="M54.162,3.508c-4.678-4.678-12.287-4.678-16.964,0l-9.07,9.07c-3.477,3.477-4.364,8.573-2.671,12.881  c-1.381-0.541-2.864-0.831-4.396-0.831c-3.212,0-6.225,1.243-8.481,3.5l-9.071,9.07c-4.677,4.677-4.677,12.287,0,16.964  c2.338,2.339,5.41,3.508,8.482,3.508s6.144-1.169,8.482-3.508l9.07-9.07c3.477-3.477,4.364-8.573,2.671-12.881  c1.381,0.541,2.864,0.831,4.396,0.831c3.213,0,6.225-1.243,8.482-3.5l9.071-9.07C58.839,15.795,58.839,8.185,54.162,3.508z   M28.128,43.678l-9.07,9.07c-3.897,3.896-10.238,3.896-14.136,0c-3.896-3.897-3.896-10.238,0-14.136l9.071-9.07  c1.879-1.879,4.389-2.914,7.067-2.914c2.34,0,4.551,0.79,6.325,2.243l-8.589,8.589c-0.391,0.391-0.391,1.023,0,1.414  c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l8.588-8.588C32.009,34.208,31.786,40.019,28.128,43.678z   M52.748,19.058l-9.071,9.07c-1.879,1.879-4.389,2.914-7.068,2.914c-2.34,0-4.55-0.79-6.325-2.243l8.589-8.589  c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-8.588,8.588c-3.21-3.923-2.987-9.734,0.671-13.393l9.07-9.07  C40.561,2.974,43.121,2,45.68,2c2.56,0,5.12,0.975,7.068,2.923C56.646,8.82,56.646,15.161,52.748,19.058z" fill="#4B8AE7"></path>
                      </g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg>
                  </a>
                  On the server side
                </h5>
                <ul>
                  <li>It is possible to save up to 40 distinct <em>dynamic variable keys</em> per screenview. If more are received, only the first 40 keys will be kept.</li>
                  <li>If you are using the same key twice on the same screenview, the last value associated with the key will be recorded.</li>
                </ul>
                <h5 id="on-the-sdk-side">
                  <a href="#on-the-sdk-side" class="anchor">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 57.67 57.67" style="enable-background:new 0 0 57.67 57.67;" xml:space="preserve" width="512px" height="512px">
                      <g>
                        <path d="M54.162,3.508c-4.678-4.678-12.287-4.678-16.964,0l-9.07,9.07c-3.477,3.477-4.364,8.573-2.671,12.881  c-1.381-0.541-2.864-0.831-4.396-0.831c-3.212,0-6.225,1.243-8.481,3.5l-9.071,9.07c-4.677,4.677-4.677,12.287,0,16.964  c2.338,2.339,5.41,3.508,8.482,3.508s6.144-1.169,8.482-3.508l9.07-9.07c3.477-3.477,4.364-8.573,2.671-12.881  c1.381,0.541,2.864,0.831,4.396,0.831c3.213,0,6.225-1.243,8.482-3.5l9.071-9.07C58.839,15.795,58.839,8.185,54.162,3.508z   M28.128,43.678l-9.07,9.07c-3.897,3.896-10.238,3.896-14.136,0c-3.896-3.897-3.896-10.238,0-14.136l9.071-9.07  c1.879-1.879,4.389-2.914,7.067-2.914c2.34,0,4.551,0.79,6.325,2.243l-8.589,8.589c-0.391,0.391-0.391,1.023,0,1.414  c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l8.588-8.588C32.009,34.208,31.786,40.019,28.128,43.678z   M52.748,19.058l-9.071,9.07c-1.879,1.879-4.389,2.914-7.068,2.914c-2.34,0-4.55-0.79-6.325-2.243l8.589-8.589  c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-8.588,8.588c-3.21-3.923-2.987-9.734,0.671-13.393l9.07-9.07  C40.561,2.974,43.121,2,45.68,2c2.56,0,5.12,0.975,7.068,2.923C56.646,8.82,56.646,15.161,52.748,19.058z" fill="#4B8AE7"></path>
                      </g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg>
                  </a>
                  On the SDK side
                </h5>
                <ul>
                  <li>Every dynamic variable is composed of a pair of key (max. 50 characters) and value (max. 255 characters string or number of type <code>Long</code> between 0 and 2^32 -1). In case these maximums length are reached, the SDK will automatically trim the exceeding characters.</li>
                  <li>If key or value are empty, the SDK will instead send the literal string "cs-empty".</li>
                </ul>
                <h3 id="defining-dynamic-variables">
                  <a href="#defining-dynamic-variables" class="anchor">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 57.67 57.67" style="enable-background:new 0 0 57.67 57.67;" xml:space="preserve" width="512px" height="512px">
                      <g>
                        <path d="M54.162,3.508c-4.678-4.678-12.287-4.678-16.964,0l-9.07,9.07c-3.477,3.477-4.364,8.573-2.671,12.881  c-1.381-0.541-2.864-0.831-4.396-0.831c-3.212,0-6.225,1.243-8.481,3.5l-9.071,9.07c-4.677,4.677-4.677,12.287,0,16.964  c2.338,2.339,5.41,3.508,8.482,3.508s6.144-1.169,8.482-3.508l9.07-9.07c3.477-3.477,4.364-8.573,2.671-12.881  c1.381,0.541,2.864,0.831,4.396,0.831c3.213,0,6.225-1.243,8.482-3.5l9.071-9.07C58.839,15.795,58.839,8.185,54.162,3.508z   M28.128,43.678l-9.07,9.07c-3.897,3.896-10.238,3.896-14.136,0c-3.896-3.897-3.896-10.238,0-14.136l9.071-9.07  c1.879-1.879,4.389-2.914,7.067-2.914c2.34,0,4.551,0.79,6.325,2.243l-8.589,8.589c-0.391,0.391-0.391,1.023,0,1.414  c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l8.588-8.588C32.009,34.208,31.786,40.019,28.128,43.678z   M52.748,19.058l-9.071,9.07c-1.879,1.879-4.389,2.914-7.068,2.914c-2.34,0-4.55-0.79-6.325-2.243l8.589-8.589  c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-8.588,8.588c-3.21-3.923-2.987-9.734,0.671-13.393l9.07-9.07  C40.561,2.974,43.121,2,45.68,2c2.56,0,5.12,0.975,7.068,2.923C56.646,8.82,56.646,15.161,52.748,19.058z" fill="#4B8AE7"></path>
                      </g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg>
                  </a>
                  Defining dynamic variables
                </h3>
                <p>To define and send a dynamic variable, directly use the key and String/Long value <strong>once a first screenview has been triggered</strong>:</p>
                <div class="code-buttons">
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>Copy to clipboard</title>
                      <path fill-rule="evenodd" d="M7.024 3.75c0-.966.784-1.75 1.75-1.75H20.25c.966 0 1.75.784 1.75 1.75v11.498a1.75 1.75 0 01-1.75 1.75H8.774a1.75 1.75 0 01-1.75-1.75V3.75zm1.75-.25a.25.25 0 00-.25.25v11.498c0 .139.112.25.25.25H20.25a.25.25 0 00.25-.25V3.75a.25.25 0 00-.25-.25H8.774z"></path>
                      <path d="M1.995 10.749a1.75 1.75 0 011.75-1.751H5.25a.75.75 0 110 1.5H3.745a.25.25 0 00-.25.25L3.5 20.25c0 .138.111.25.25.25h9.5a.25.25 0 00.25-.25v-1.51a.75.75 0 111.5 0v1.51A1.75 1.75 0 0113.25 22h-9.5A1.75 1.75 0 012 20.25l-.005-9.501z"></path>
                    </svg>
                  </button>
                  <div class="copied" style="display: none;">Copied!</div>
                </div>
                <pre style="margin-top: 0px; padding-top: 0px;"><code class="lang-javascript">window<span class="token punctuation">.</span>cs_wvt <span class="token operator">=</span> window<span class="token punctuation">.</span>cs_wvt <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
window<span class="token punctuation">.</span>cs_wvt<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'trackDynamicVariable'</span><span class="token punctuation">,</span> <span class="token punctuation">{
  </span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'my-string-dvar'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'my-awesome-string-value'</span> <span class="token punctuation">
  }
  </span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// key is a string</span>
<span class="token comment">// value is either a string or an integer</span>
</code></pre>
                <p><strong>Type of the value</strong> — The value can be either a <strong>whole number</strong> or a <strong>string</strong>. For each case, available features won't be the same in the Contentsquare app:</p>
                <ul>
                  <li>for <strong>whole numbers</strong>, you will be able to do some algebra. Example: <em>sessions with dynamic variable key = "numberOfFriends" and value &gt;= 10</em></li>
                  <li>for <strong>strings</strong>, auto-completion and Regular Expression will be available. Example: <em>sessions with dynamic variable key = "accountType" and value = "Premium"</em></li>
                </ul>
                <h2 id="collected-data">
                  <a href="#collected-data" class="anchor">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 57.67 57.67" style="enable-background:new 0 0 57.67 57.67;" xml:space="preserve" width="512px" height="512px">
                      <g>
                        <path d="M54.162,3.508c-4.678-4.678-12.287-4.678-16.964,0l-9.07,9.07c-3.477,3.477-4.364,8.573-2.671,12.881  c-1.381-0.541-2.864-0.831-4.396-0.831c-3.212,0-6.225,1.243-8.481,3.5l-9.071,9.07c-4.677,4.677-4.677,12.287,0,16.964  c2.338,2.339,5.41,3.508,8.482,3.508s6.144-1.169,8.482-3.508l9.07-9.07c3.477-3.477,4.364-8.573,2.671-12.881  c1.381,0.541,2.864,0.831,4.396,0.831c3.213,0,6.225-1.243,8.482-3.5l9.071-9.07C58.839,15.795,58.839,8.185,54.162,3.508z   M28.128,43.678l-9.07,9.07c-3.897,3.896-10.238,3.896-14.136,0c-3.896-3.897-3.896-10.238,0-14.136l9.071-9.07  c1.879-1.879,4.389-2.914,7.067-2.914c2.34,0,4.551,0.79,6.325,2.243l-8.589,8.589c-0.391,0.391-0.391,1.023,0,1.414  c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l8.588-8.588C32.009,34.208,31.786,40.019,28.128,43.678z   M52.748,19.058l-9.071,9.07c-1.879,1.879-4.389,2.914-7.068,2.914c-2.34,0-4.55-0.79-6.325-2.243l8.589-8.589  c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-8.588,8.588c-3.21-3.923-2.987-9.734,0.671-13.393l9.07-9.07  C40.561,2.974,43.121,2,45.68,2c2.56,0,5.12,0.975,7.068,2.923C56.646,8.82,56.646,15.161,52.748,19.058z" fill="#4B8AE7"></path>
                      </g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg>
                  </a>
                  Collected data
                </h2>
                <p>Once communication is established, the tag will start tracking the following events and pass them over to the SDK:</p>
                <ul>
                  <li><strong>pageviews</strong> manually triggered (with the dedicated command)</li>
                  <li><strong>transactions</strong> manually triggered (with the dedicated command)</li>
                  <li><strong>dynamic variables</strong> manually triggered (with the dedicated command)</li>
                  <li><strong>gestures</strong> automatically detected: <em>tap, long press, swipes (with finger direction)</em></li>
                  <li><strong>HTML DOM</strong> when a snapshot of the screen is triggered by the SDK <em>(see section on Enable Snapshot Mode in the <a href="#related-links">iOS/Android SDK docs</a>)</em>.</li>
                </ul>
                <h2 id="conflict-with-contentsquare-web-tracking-tag">
                  <a href="#conflict-with-contentsquare-web-tracking-tag" class="anchor">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 57.67 57.67" style="enable-background:new 0 0 57.67 57.67;" xml:space="preserve" width="512px" height="512px">
                      <g>
                        <path d="M54.162,3.508c-4.678-4.678-12.287-4.678-16.964,0l-9.07,9.07c-3.477,3.477-4.364,8.573-2.671,12.881  c-1.381-0.541-2.864-0.831-4.396-0.831c-3.212,0-6.225,1.243-8.481,3.5l-9.071,9.07c-4.677,4.677-4.677,12.287,0,16.964  c2.338,2.339,5.41,3.508,8.482,3.508s6.144-1.169,8.482-3.508l9.07-9.07c3.477-3.477,4.364-8.573,2.671-12.881  c1.381,0.541,2.864,0.831,4.396,0.831c3.213,0,6.225-1.243,8.482-3.5l9.071-9.07C58.839,15.795,58.839,8.185,54.162,3.508z   M28.128,43.678l-9.07,9.07c-3.897,3.896-10.238,3.896-14.136,0c-3.896-3.897-3.896-10.238,0-14.136l9.071-9.07  c1.879-1.879,4.389-2.914,7.067-2.914c2.34,0,4.551,0.79,6.325,2.243l-8.589,8.589c-0.391,0.391-0.391,1.023,0,1.414  c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l8.588-8.588C32.009,34.208,31.786,40.019,28.128,43.678z   M52.748,19.058l-9.071,9.07c-1.879,1.879-4.389,2.914-7.068,2.914c-2.34,0-4.55-0.79-6.325-2.243l8.589-8.589  c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-8.588,8.588c-3.21-3.923-2.987-9.734,0.671-13.393l9.07-9.07  C40.561,2.974,43.121,2,45.68,2c2.56,0,5.12,0.975,7.068,2.923C56.646,8.82,56.646,15.161,52.748,19.058z" fill="#4B8AE7"></path>
                      </g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg>
                  </a>
                  Conflict with Contentsquare Web Tracking Tag
                </h2>
                <p>If the pages called in your app's WebViews are also part of your main website and you are using the main Web Tracking Tag, please ensure that:</p>
                <ul>
                  <li>when the page is loaded in your app's webView: only the <strong>WebView Tracking Tag</strong> is loaded <em>(and not the main Web Tracking Tag)</em></li>
                  <li>when the page is NOT loaded in your app's webView: only the <strong>main Web Tracking Tag</strong> is loaded <em>(and not the WebView Tracking Tag)</em></li>
                </ul>
                <h2 id="changelog">
                  <a href="#changelog" class="anchor">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 57.67 57.67" style="enable-background:new 0 0 57.67 57.67;" xml:space="preserve" width="512px" height="512px">
                      <g>
                        <path d="M54.162,3.508c-4.678-4.678-12.287-4.678-16.964,0l-9.07,9.07c-3.477,3.477-4.364,8.573-2.671,12.881  c-1.381-0.541-2.864-0.831-4.396-0.831c-3.212,0-6.225,1.243-8.481,3.5l-9.071,9.07c-4.677,4.677-4.677,12.287,0,16.964  c2.338,2.339,5.41,3.508,8.482,3.508s6.144-1.169,8.482-3.508l9.07-9.07c3.477-3.477,4.364-8.573,2.671-12.881  c1.381,0.541,2.864,0.831,4.396,0.831c3.213,0,6.225-1.243,8.482-3.5l9.071-9.07C58.839,15.795,58.839,8.185,54.162,3.508z   M28.128,43.678l-9.07,9.07c-3.897,3.896-10.238,3.896-14.136,0c-3.896-3.897-3.896-10.238,0-14.136l9.071-9.07  c1.879-1.879,4.389-2.914,7.067-2.914c2.34,0,4.551,0.79,6.325,2.243l-8.589,8.589c-0.391,0.391-0.391,1.023,0,1.414  c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l8.588-8.588C32.009,34.208,31.786,40.019,28.128,43.678z   M52.748,19.058l-9.071,9.07c-1.879,1.879-4.389,2.914-7.068,2.914c-2.34,0-4.55-0.79-6.325-2.243l8.589-8.589  c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-8.588,8.588c-3.21-3.923-2.987-9.734,0.671-13.393l9.07-9.07  C40.561,2.974,43.121,2,45.68,2c2.56,0,5.12,0.975,7.068,2.923C56.646,8.82,56.646,15.161,52.748,19.058z" fill="#4B8AE7"></path>
                      </g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg>
                  </a>
                  Changelog
                </h2>
                <h3 id="1-3-0-2022-05-17">
                  <a href="#1-3-0-2022-05-17" class="anchor">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 57.67 57.67" style="enable-background:new 0 0 57.67 57.67;" xml:space="preserve" width="512px" height="512px">
                      <g>
                        <path d="M54.162,3.508c-4.678-4.678-12.287-4.678-16.964,0l-9.07,9.07c-3.477,3.477-4.364,8.573-2.671,12.881  c-1.381-0.541-2.864-0.831-4.396-0.831c-3.212,0-6.225,1.243-8.481,3.5l-9.071,9.07c-4.677,4.677-4.677,12.287,0,16.964  c2.338,2.339,5.41,3.508,8.482,3.508s6.144-1.169,8.482-3.508l9.07-9.07c3.477-3.477,4.364-8.573,2.671-12.881  c1.381,0.541,2.864,0.831,4.396,0.831c3.213,0,6.225-1.243,8.482-3.5l9.071-9.07C58.839,15.795,58.839,8.185,54.162,3.508z   M28.128,43.678l-9.07,9.07c-3.897,3.896-10.238,3.896-14.136,0c-3.896-3.897-3.896-10.238,0-14.136l9.071-9.07  c1.879-1.879,4.389-2.914,7.067-2.914c2.34,0,4.551,0.79,6.325,2.243l-8.589,8.589c-0.391,0.391-0.391,1.023,0,1.414  c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l8.588-8.588C32.009,34.208,31.786,40.019,28.128,43.678z   M52.748,19.058l-9.071,9.07c-1.879,1.879-4.389,2.914-7.068,2.914c-2.34,0-4.55-0.79-6.325-2.243l8.589-8.589  c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-8.588,8.588c-3.21-3.923-2.987-9.734,0.671-13.393l9.07-9.07  C40.561,2.974,43.121,2,45.68,2c2.56,0,5.12,0.975,7.068,2.923C56.646,8.82,56.646,15.161,52.748,19.058z" fill="#4B8AE7"></path>
                      </g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg>
                  </a>
                  1.3.0 - 2022.05.17
                </h3>
                <ul>
                  <li><strong>Privacy commands:</strong> Added commands to trigger <a href="#opt-in">opt-in</a> and <a href="#opt-out">opt-out</a></li>
                  <li><strong>Transaction:</strong> Added command to trigger a <a href="#track-transactions">transaction events</a></li>
                  <li><strong>Dynamic variables:</strong> Added command to trigger <a href="#track-dynamic-variables">dynamic variable events</a></li>
                </ul>
                <h4 id="versions-1-1-0-and-1-2-0-were-not-deployed">
                  <a href="#versions-1-1-0-and-1-2-0-were-not-deployed" class="anchor">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 57.67 57.67" style="enable-background:new 0 0 57.67 57.67;" xml:space="preserve" width="512px" height="512px">
                      <g>
                        <path d="M54.162,3.508c-4.678-4.678-12.287-4.678-16.964,0l-9.07,9.07c-3.477,3.477-4.364,8.573-2.671,12.881  c-1.381-0.541-2.864-0.831-4.396-0.831c-3.212,0-6.225,1.243-8.481,3.5l-9.071,9.07c-4.677,4.677-4.677,12.287,0,16.964  c2.338,2.339,5.41,3.508,8.482,3.508s6.144-1.169,8.482-3.508l9.07-9.07c3.477-3.477,4.364-8.573,2.671-12.881  c1.381,0.541,2.864,0.831,4.396,0.831c3.213,0,6.225-1.243,8.482-3.5l9.071-9.07C58.839,15.795,58.839,8.185,54.162,3.508z   M28.128,43.678l-9.07,9.07c-3.897,3.896-10.238,3.896-14.136,0c-3.896-3.897-3.896-10.238,0-14.136l9.071-9.07  c1.879-1.879,4.389-2.914,7.067-2.914c2.34,0,4.551,0.79,6.325,2.243l-8.589,8.589c-0.391,0.391-0.391,1.023,0,1.414  c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l8.588-8.588C32.009,34.208,31.786,40.019,28.128,43.678z   M52.748,19.058l-9.071,9.07c-1.879,1.879-4.389,2.914-7.068,2.914c-2.34,0-4.55-0.79-6.325-2.243l8.589-8.589  c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-8.588,8.588c-3.21-3.923-2.987-9.734,0.671-13.393l9.07-9.07  C40.561,2.974,43.121,2,45.68,2c2.56,0,5.12,0.975,7.068,2.923C56.646,8.82,56.646,15.161,52.748,19.058z" fill="#4B8AE7"></path>
                      </g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg>
                  </a>
                  Versions 1.1.0 and 1.2.0 were not deployed
                </h4>
                <h3 id="1-0-0-2021-01-19">
                  <a href="#1-0-0-2021-01-19" class="anchor">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 57.67 57.67" style="enable-background:new 0 0 57.67 57.67;" xml:space="preserve" width="512px" height="512px">
                      <g>
                        <path d="M54.162,3.508c-4.678-4.678-12.287-4.678-16.964,0l-9.07,9.07c-3.477,3.477-4.364,8.573-2.671,12.881  c-1.381-0.541-2.864-0.831-4.396-0.831c-3.212,0-6.225,1.243-8.481,3.5l-9.071,9.07c-4.677,4.677-4.677,12.287,0,16.964  c2.338,2.339,5.41,3.508,8.482,3.508s6.144-1.169,8.482-3.508l9.07-9.07c3.477-3.477,4.364-8.573,2.671-12.881  c1.381,0.541,2.864,0.831,4.396,0.831c3.213,0,6.225-1.243,8.482-3.5l9.071-9.07C58.839,15.795,58.839,8.185,54.162,3.508z   M28.128,43.678l-9.07,9.07c-3.897,3.896-10.238,3.896-14.136,0c-3.896-3.897-3.896-10.238,0-14.136l9.071-9.07  c1.879-1.879,4.389-2.914,7.067-2.914c2.34,0,4.551,0.79,6.325,2.243l-8.589,8.589c-0.391,0.391-0.391,1.023,0,1.414  c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l8.588-8.588C32.009,34.208,31.786,40.019,28.128,43.678z   M52.748,19.058l-9.071,9.07c-1.879,1.879-4.389,2.914-7.068,2.914c-2.34,0-4.55-0.79-6.325-2.243l8.589-8.589  c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-8.588,8.588c-3.21-3.923-2.987-9.734,0.671-13.393l9.07-9.07  C40.561,2.974,43.121,2,45.68,2c2.56,0,5.12,0.975,7.068,2.923C56.646,8.82,56.646,15.161,52.748,19.058z" fill="#4B8AE7"></path>
                      </g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg>
                  </a>
                  1.0.0 - 2021.01.19
                </h3>
                <ul>
                  <li>Initial release</li>
                </ul>
                <h2 id="related-links">
                  <a href="#related-links" class="anchor">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 57.67 57.67" style="enable-background:new 0 0 57.67 57.67;" xml:space="preserve" width="512px" height="512px">
                      <g>
                        <path d="M54.162,3.508c-4.678-4.678-12.287-4.678-16.964,0l-9.07,9.07c-3.477,3.477-4.364,8.573-2.671,12.881  c-1.381-0.541-2.864-0.831-4.396-0.831c-3.212,0-6.225,1.243-8.481,3.5l-9.071,9.07c-4.677,4.677-4.677,12.287,0,16.964  c2.338,2.339,5.41,3.508,8.482,3.508s6.144-1.169,8.482-3.508l9.07-9.07c3.477-3.477,4.364-8.573,2.671-12.881  c1.381,0.541,2.864,0.831,4.396,0.831c3.213,0,6.225-1.243,8.482-3.5l9.071-9.07C58.839,15.795,58.839,8.185,54.162,3.508z   M28.128,43.678l-9.07,9.07c-3.897,3.896-10.238,3.896-14.136,0c-3.896-3.897-3.896-10.238,0-14.136l9.071-9.07  c1.879-1.879,4.389-2.914,7.067-2.914c2.34,0,4.551,0.79,6.325,2.243l-8.589,8.589c-0.391,0.391-0.391,1.023,0,1.414  c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l8.588-8.588C32.009,34.208,31.786,40.019,28.128,43.678z   M52.748,19.058l-9.071,9.07c-1.879,1.879-4.389,2.914-7.068,2.914c-2.34,0-4.55-0.79-6.325-2.243l8.589-8.589  c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-8.588,8.588c-3.21-3.923-2.987-9.734,0.671-13.393l9.07-9.07  C40.561,2.974,43.121,2,45.68,2c2.56,0,5.12,0.975,7.068,2.923C56.646,8.82,56.646,15.161,52.748,19.058z" fill="#4B8AE7"></path>
                      </g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg>
                  </a>
                  Related Links
                </h2>
                <p><a href="/ios/#track-webviews">iOS SDK WebView tracking</a></p>
                <p><a href="/android/#track-webviews">Android SDK WebView tracking</a></p>
                <!--]-->
              </div>
            </div>
            <a id="button"></a><br><br><br><br>
          </section>
        </div>
      </div>
    </div>
    <script src="/_template/js/lib/jquery-3.1.1.min.js"></script><script src="/_template/js/main.js"></script>
    <template id="copyButtonTemplate">
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>Copy to clipboard</title>
          <path fill-rule="evenodd" d="M7.024 3.75c0-.966.784-1.75 1.75-1.75H20.25c.966 0 1.75.784 1.75 1.75v11.498a1.75 1.75 0 01-1.75 1.75H8.774a1.75 1.75 0 01-1.75-1.75V3.75zm1.75-.25a.25.25 0 00-.25.25v11.498c0 .139.112.25.25.25H20.25a.25.25 0 00.25-.25V3.75a.25.25 0 00-.25-.25H8.774z"></path>
          <path d="M1.995 10.749a1.75 1.75 0 011.75-1.751H5.25a.75.75 0 110 1.5H3.745a.25.25 0 00-.25.25L3.5 20.25c0 .138.111.25.25.25h9.5a.25.25 0 00.25-.25v-1.51a.75.75 0 111.5 0v1.51A1.75 1.75 0 0113.25 22h-9.5A1.75 1.75 0 012 20.25l-.005-9.501z"></path>
        </svg>
      </button>
    </template>
    <template id="copiedFeedbackTemplate">
      <div class="copied">Copied!</div>
    </template>
    <cs-native-frame-holder hidden=""></cs-native-frame-holder>
    <iframe id="_hjSafeContext_35038540" src="about:blank" style="display: none !important; width: 1px !important; height: 1px !important; opacity: 0 !important; pointer-events: none !important;"></iframe><iframe name="_hjRemoteVarsFrame" title="_hjRemoteVarsFrame" id="_hjRemoteVarsFrame" src="https://vars.hotjar.com/box-69edcc3187336f9b0a3fbb4c73be9fe6.html" style="display: none !important; width: 1px !important; height: 1px !important; opacity: 0 !important; pointer-events: none !important;" data-dashlane-frameid="564"></iframe>
  </body>
</html>
`;
