jQuery(document).ready(function(e){function i(e,i,s){animating||(i.toggleClass("is-visible",s),t(e,s),e.toggleClass("selected-table",s))}function t(i,t){animating=!0;var s=i.width(),n=i.height(),c=i.offset().top-e(window).scrollTop(),v=i.offset().left,m=e(".cd-form"),w=m.find(".cd-plan-info"),C=a(),g=l(),b=o(g),y=d(C),x=c-b,k=v-y;e(window).width(),e(window).height();t?(w.html(i.html()),w.velocity({width:s+"px",height:n+"px"},50,function(){w.velocity({width:r+"px",height:u+"px"},h,[220,20])}),m.velocity({width:s+"px",height:n+"px",top:b,left:y,translateX:k+"px",translateY:x+"px",opacity:1},50,function(){i.addClass("empty-box"),m.velocity({width:C+"px",height:g+"px",translateX:0,translateY:0},h,[220,20],function(){animating=!1,setTimeout(function(){m.children("form").addClass("is-scrollable")},300)}).addClass("is-visible")})):(m.children("form").removeClass("is-scrollable"),w.velocity({width:s+"px"},{duration:p,easing:"easeOutCubic",delay:f}),m.velocity({width:s+"px",height:n+"px",translateX:k+"px",translateY:x+"px"},{duration:p,easing:"easeOutCubic",delay:f,complete:function(){i.removeClass("empty-box"),m.velocity({translateX:0,translateY:0,opacity:0},0).find("form").scrollTop(0),animating=!1}}).removeClass("is-visible"),e(".no-csstransitions").length>0&&i.removeClass("empty-box"))}function s(){var e=window.getComputedStyle(document.querySelector(".cd-form"),"::before").getPropertyValue("content").replace(/"/g,"").replace(/'/g,"");return e}function n(){var i=s(),t=e(".cd-form");if(r="mobile"==i?.9*e(window).width():210,u="mobile"==i?93:255,t.hasClass("is-visible")){var n=a(),c=l(),h=o(c),f=d(n);t.velocity({width:n,height:c,top:h,left:f},0).find(".cd-plan-info").velocity({width:r+"px",height:u+"px"},0)}}function a(){return formMaxWidth<=.9*e(window).width()?formMaxWidth:.9*e(window).width()}function l(){return formMaxHeight<=.9*e(window).height()?formMaxHeight:.9*e(window).height()}function o(i){return(e(window).height()-i)/2}function d(i){return(e(window).width()-i)/2}if(e(".cd-form").length>0){var c=s(),r="mobile"==c?.9*e(window).width():210,u="mobile"==c?93:255;formMaxWidth=900,formMaxHeight=650,animating=!1;var h=800,f=200,p=h-f,v=e(".cd-pricing"),m=e(".cd-overlay");v.on("click","a",function(t){t.preventDefault(),i(e(this).parents(".cd-pricing-footer").parent("li"),m,!0)}),e(".cd-form").on("click",".cd-close",function(e){e.preventDefault(),i(v.find(".selected-table"),m,!1)}),e(document).keyup(function(e){"27"==e.which&&i(v.find(".selected-table"),m,!1)}),m.on("click",function(e){e.preventDefault(),i(v.find(".selected-table"),m,!1)}),e(window).on("resize",function(){requestAnimationFrame(n)}),e(".cd-payment-gateways").on("change",function(){e("#card").is(":checked")?e(".cd-credit-card").velocity("slideDown",{duration:300}):e(".cd-credit-card").velocity("slideUp",{duration:300})})}}),jQuery(document).ready(function(e){function i(){f.children("ul").removeClass("is-visible"),n.addClass("is-visible"),a.addClass("is-selected"),l.removeClass("is-selected"),o.removeClass("is-selected"),c.addClass("selected"),r.removeClass("selected")}function t(){f.children("ul").removeClass("is-visible"),n.addClass("is-visible"),a.removeClass("is-selected"),l.addClass("is-selected"),o.removeClass("is-selected"),c.removeClass("selected"),r.addClass("selected")}function s(){a.removeClass("is-selected"),l.removeClass("is-selected"),o.addClass("is-selected")}var n=e(".cd-user-modal"),a=n.find("#cd-login"),l=n.find("#cd-signup"),o=n.find("#cd-reset-password"),d=e(".cd-switcher"),c=d.children("li").eq(0).children("a"),r=d.children("li").eq(1).children("a"),u=a.find(".cd-form-bottom-message a"),h=o.find(".cd-form-bottom-message a"),f=e(".main-nav");f.on("click",function(i){e(i.target).is(f)&&f.children("ul").toggleClass("is-visible")}),f.on("click",".cd-signup",t),f.on("click",".cd-signin",i),n.on("click",function(i){(e(i.target).is(n)||e(i.target).is(".cd-close-form"))&&n.removeClass("is-visible")}),e(document).keyup(function(e){"27"==e.which&&n.removeClass("is-visible")}),d.on("click",function(s){s.preventDefault(),e(s.target).is(c)?i():t()}),e(".hide-password").on("click",function(){var i=e(this),t=i.prev("input");"password"==t.attr("type")?t.attr("type","text"):t.attr("type","password"),"Hide"==i.text()?i.text("Show"):i.text("Hide"),t.putCursorAtEnd()}),u.on("click",function(e){e.preventDefault(),s()}),h.on("click",function(e){e.preventDefault(),i()}),a.find('input[type="submit"]').on("click",function(e){e.preventDefault(),a.find('input[type="email"]').toggleClass("has-error").next("span").toggleClass("is-visible")}),l.find('input[type="submit"]').on("click",function(e){e.preventDefault(),l.find('input[type="email"]').toggleClass("has-error").next("span").toggleClass("is-visible")}),Modernizr.input.placeholder||(e("[placeholder]").focus(function(){var i=e(this);i.val()==i.attr("placeholder")&&i.val("")}).blur(function(){var i=e(this);(""==i.val()||i.val()==i.attr("placeholder"))&&i.val(i.attr("placeholder"))}).blur(),e("[placeholder]").parents("form").submit(function(){e(this).find("[placeholder]").each(function(){var i=e(this);i.val()==i.attr("placeholder")&&i.val("")})}))}),jQuery.fn.putCursorAtEnd=function(){return this.each(function(){if(this.setSelectionRange){var e=2*$(this).val().length;this.focus(),this.setSelectionRange(e,e)}else $(this).val($(this).val())})},jQuery(document).ready(function(e){function t(){s(e(".cd-headline.letters").find("b")),n(e(".cd-headline"))}function s(t){t.each(function(){var t=e(this),s=t.text().split(""),n=t.hasClass("is-visible");for(i in s)t.parents(".rotate-2").length>0&&(s[i]="<em>"+s[i]+"</em>"),s[i]=n?'<i class="in">'+s[i]+"</i>":"<i>"+s[i]+"</i>";var a=s.join("");t.html(a).css("opacity",1)})}function n(i){var t=u;i.each(function(){var i=e(this);if(i.hasClass("loading-bar"))t=h,setTimeout(function(){i.find(".cd-words-wrapper").addClass("is-loading")},f);else if(i.hasClass("clip")){var s=i.find(".cd-words-wrapper"),n=s.width()+10;s.css("width",n)}else if(!i.hasClass("type")){var l=i.find(".cd-words-wrapper b"),o=0;l.each(function(){var i=e(this).width();i>o&&(o=i)}),i.find(".cd-words-wrapper").css("width",o)}setTimeout(function(){a(i.find(".is-visible").eq(0))},t)})}function a(e){var i=c(e);if(e.parents(".cd-headline").hasClass("type")){var t=e.parent(".cd-words-wrapper");t.addClass("selected").removeClass("waiting"),setTimeout(function(){t.removeClass("selected"),e.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")},m),setTimeout(function(){l(i,v)},w)}else if(e.parents(".cd-headline").hasClass("letters")){var s=e.children("i").length>=i.children("i").length?!0:!1;o(e.find("i").eq(0),e,s,p),d(i.find("i").eq(0),i,s,p)}else e.parents(".cd-headline").hasClass("clip")?e.parents(".cd-words-wrapper").animate({width:"2px"},C,function(){r(e,i),l(i)}):e.parents(".cd-headline").hasClass("loading-bar")?(e.parents(".cd-words-wrapper").removeClass("is-loading"),r(e,i),setTimeout(function(){a(i)},h),setTimeout(function(){e.parents(".cd-words-wrapper").addClass("is-loading")},f)):(r(e,i),setTimeout(function(){a(i)},u))}function l(e,i){e.parents(".cd-headline").hasClass("type")?(d(e.find("i").eq(0),e,!1,i),e.addClass("is-visible").removeClass("is-hidden")):e.parents(".cd-headline").hasClass("clip")&&e.parents(".cd-words-wrapper").animate({width:e.width()+10},C,function(){setTimeout(function(){a(e)},g)})}function o(i,t,s,n){if(i.removeClass("in").addClass("out"),i.is(":last-child")?s&&setTimeout(function(){a(c(t))},u):setTimeout(function(){o(i.next(),t,s,n)},n),i.is(":last-child")&&e("html").hasClass("no-csstransitions")){var l=c(t);r(t,l)}}function d(e,i,t,s){e.addClass("in").removeClass("out"),e.is(":last-child")?(i.parents(".cd-headline").hasClass("type")&&setTimeout(function(){i.parents(".cd-words-wrapper").addClass("waiting")},200),t||setTimeout(function(){a(i)},u)):setTimeout(function(){d(e.next(),i,t,s)},s)}function c(e){return e.is(":last-child")?e.parent().children().eq(0):e.next()}function r(e,i){e.removeClass("is-visible").addClass("is-hidden"),i.removeClass("is-hidden").addClass("is-visible")}var u=2500,h=3800,f=h-3e3,p=50,v=150,m=500,w=m+800,C=600,g=1500;t()});