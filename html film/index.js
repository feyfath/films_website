
        // <!-- THIS IS JAVASCRIPT-->
        
                 var x = document.getElementsByClassName("scroll");
                 var n = document.querySelectorAll('.scroll');
                 var search = document.getElementsByClassName('search');
        function d(){
             for(var i=0;i<n.length;i++){
                 n[i].style.backgroundColor = 'black';
             }
             search[0].style.backgroundColor = 'black'
             search[0].style.color = 'white'
                document.getElementById('body').style.backgroundColor='black'
                document.getElementById('menu_icon').style.color='white'
				document.getElementById('menu_icon').style.backgroundColor='black'
                document.getElementById('top').style.backgroundColor='black'
                document.getElementById('top').style.borderBottom='1px solid white'
                //document.getElementById('latest_films').style.boxShadow='1px -1px 5px white'

                document.getElementById('divlight').disabled=false 
                document.getElementById('divlight').style.cursor='pointer'
                document.getElementById('divlight').style.opacity='1'
                document.getElementById('divdark').disabled=true
                document.getElementById('divdark').style.cursor='no-drop'
                document.getElementById('divdark').style.opacity='0.3'
         }
        function l(){
            for(var i=0;i<n.length;i++){
                n[i].style.backgroundColor = 'white';
            }
              search[0].style.backgroundColor = 'white'
              search[0].style.color = 'black'

			     document.getElementById('menu_icon').style.color='black'
				 document.getElementById('menu_icon').style.backgroundColor='#e8e5e5'
                 document.getElementById('body').style.backgroundColor='white'
                 document.getElementById('top').style.backgroundColor='white'

                document.getElementById('divdark').disabled=false
                document.getElementById('divdark').style.cursor='pointer'
                document.getElementById('divdark').style.opacity='1'
                document.getElementById('divlight').disabled=true
                document.getElementById('divlight').style.cursor='no-drop'
                document.getElementById('divlight').style.opacity='0.3'
            }
 //-*****************************this is java script for scrolling**********************************-->
             var pace=200;
             function if_left(){
                 scrollTo(document.querySelector('.scroll'), -pace , 600);
             }
             document.querySelector('.b_scroll_right').addEventListener('click', function(){
                scrollTo( document.querySelector('.scroll'), pace , 600 );
             });
             
             function scrollTo(element, to, duration) {
                 var start = element.scrollLeft,
                     currentTime = 100,
                     increment = 20;
             
                 var animateScroll = function(){
                     currentTime += increment;
                     var val = Math.easeInOutQuad(currentTime, start, to, duration);
                     element.scrollLeft = val;
             
                     if(currentTime < duration) {
                         setTimeout(animateScroll, increment);
                     }
                 };
                 animateScroll();
             }
             //t = current time
             //b = start value
             //c = change in value
             //d = duration
             Math.easeInOutQuad = function (t, b, c, d) {
               t /= d/2;
               if (t < 1) return c/2*t*t + b;
               t--;
               return -c/2 * (t*(t-2) - 1) + b;
             };
         
         