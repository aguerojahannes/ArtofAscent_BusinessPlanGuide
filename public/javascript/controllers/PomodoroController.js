(function() {
	'use strict';
	angular.module('app')
	.controller('PomodoroController', PomodoroController);

	function PomodoroController($interval,$timeout) {
		var pom = this;

               pom.shours = [0,1,2,3,4,5,6,7,8,9,10,11,12];
            	pom.smins = [0, 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,
            									31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59];
            	pom.ssec = [0, 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,
            								 31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59];
            	pom.bhours = [0,1,2,3,4,5,6,7,8,9,10,11,12];
            	pom.bmins = [0, 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,
            						 		31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59];
            	pom.bsec = [0, 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,
            						 31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59];
            pom.shr =0;
            pom.ssecond =0;
            pom.smin =0;
            pom.stime = 0;
            pom.bhr = 0;
            pom.bsecond =0;
            pom.bmin =0;
            pom.btime = 0;
            var i = 0;
            var j = 0;
            pom.stime = 0;

            pom.getValues = function() {
            	var h = document.getElementById("shrid");
            	var m = document.getElementById("sminid");
            	var s = document.getElementById("ssecid");
            	var bh = document.getElementById("bhrid");
            	var bm = document.getElementById("bminid");
            	var bs = document.getElementById("bsecid");

            	pom.shr = h.options[h.selectedIndex].value;
            	pom.smin = m.options[m.selectedIndex].value;
              pom.ssecond = s.options[s.selectedIndex].value;
            	pom.bhr = bh.options[bh.selectedIndex].value;
            	pom.bmin = bm.options[bm.selectedIndex].value;
            	pom.bsecond = bs.options[bs.selectedIndex].value;

            	pom.stime = (pom.shr*3600) + (pom.smin*60 )+( pom.ssecond*1);
            	pom.btime = (pom.bhr*3600) + (pom.bmin*60 )+( pom.bsecond*1);

            	pom.sstart();
            };

            pom.sstart = function(){
            	i = pom.stime;

            	var xsec = pom.ssecond;
            	var xmin = pom.smin;
            	var xhr = pom.shr;
            	var st = i;

            	pom.strack();

            pom.sloop =	$interval( function(){

               if((i===(pom.stime -(xmin*60 + xsec)) || i%3600 === 0) && i>=3600 ){
            			pom.shr--;
            			pom.smin += 59;
            	   	}

            	if((i===(pom.stime - xsec ) ||( i%60 === 0)) && i>0 ){
            				if(i%3600 !== 0 && pom.smin > 0 &&  i>0) {
            					pom.smin--;
            					}
            			pom.ssecond += 59;
            		  }

            			if (i%3600 !== 0 && i%60 !==0 && pom.ssecond >0 && i >0){
            				pom.ssecond--;
            			}


            		if(i === 0){
            			pom.ssecond = xsec;
            			pom.smin = xmin;
            			pom.shr = xhr;
            			i = st;
            		}
            		i--;
            	}, 1000,(pom.stime+1));

            };
            pom.strack =  function(){
            	i= pom.stime;
            	var xsec = pom.ssecond;
            	var xmin = pom.smin;
            	var xhr = pom.shr;
            	var smili = pom.stime*1000;
            	$timeout(function(){
            		pom.bstart(); },smili);
            };

            pom.btrack =  function(){
            	j = pom.btime;
            	var ksec = pom.bsecond;
            	var kmin = pom.bmin;
            	var khr = pom.bhr;
            	var bmili = pom.btime*1000;
            	$timeout(function(){
            		pom.sstart(); },bmili);
            };

            pom.bstart = function(){
            	j = pom.btime;

            	var ksec = pom.bsecond;
            	var kmin = pom.bmin;
            	var khr = pom.bhr;
            	var kt = j;
            	pom.btrack();

            pom.bloop = $interval( function(){

            			  if((j===(pom.btime -(kmin*60 + ksec)) || j%3600 === 0) && j>=3600 ){
            			 		pom.bhr--;
            			 		pom.bmin += 59;
            			 		}

            			 if((j===(pom.btime - ksec ) ||( j%60 === 0)) && j>0 ){
            			 			if(j%3600 !== 0 && pom.bmin > 0) {
            			 				pom.bmin--;
            			 				}
            			 		pom.bsecond += 59;
            			 		}

            			 		if (j%3600 !== 0 && j%60 !==0 && pom.bsecond >0){
            			 			pom.bsecond--;
            						// console.log(pom.bsecond + "minus one break second");
            			 		}

            				if(j === 0){
            					pom.bsecond = ksec;
            					pom.bmin = kmin;
            					pom.bhr = khr;
            					j =kt;
            				}
            				j--;
            			}, 1000, (pom.btime+1));

            	};

            pom.stop = function(){
            	$interval.cancel(pom.sloop);
              $interval.cancel(pom.bloop);

           };
// END
	}
})();
