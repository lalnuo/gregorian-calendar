modulex.add("gregorian-calendar",["i18n!gregorian-calendar"],function(e,t,i){var s,r,a,n,o,f=e("i18n!gregorian-calendar");s=function(e){return e={SUNDAY:0,MONDAY:1,TUESDAY:2,WEDNESDAY:3,THURSDAY:4,FRIDAY:5,SATURDAY:6,JANUARY:0,FEBRUARY:1,MARCH:2,APRIL:3,MAY:4,JUNE:5,JULY:6,AUGUST:7,SEPTEMBER:8,OCTOBER:9,NOVEMBER:10,DECEMBER:11}}(),r=function(e){return e={timezoneOffset:-480,firstDayOfWeek:0,minimalDaysInFirstWeek:1,eras:["BC","AD"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortWeekdays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],ampms:["AM","PM"],datePatterns:["EEEE, MMMM d, yyyy","MMMM d, yyyy","MMM d, yyyy","M/d/yy"],timePatterns:["h:mm:ss a 'GMT'Z","h:mm:ss a","h:mm:ss a","h:mm a"],dateTimePattern:"{date} {time}"}}(),a=function(e){return e={timezoneOffset:480,firstDayOfWeek:1,minimalDaysInFirstWeek:1,eras:["公元前","公元"],months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],shortMonths:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],weekdays:["星期天","星期一","星期二","星期三","星期四","星期五","星期六"],shortWeekdays:["周日","周一","周二","周三","周四","周五","周六"],ampms:["上午","下午"],datePatterns:["yyyy'年'M'月'd'日' EEEE","yyyy'年'M'月'd'日'","yyyy-M-d","yy-M-d"],timePatterns:["ahh'时'mm'分'ss'秒' 'GMT'Z","ahh'时'mm'分'ss'秒'","H:mm:ss","ah:mm"],dateTimePattern:"{date} {time}"}}(),n=function(e){function t(t,i,s){return s+(e.isLeapYear(t)?f[i]:o[i])}function i(t){return t>=0?t%7:e.mod(t,7)}function r(t){var i,s,r,a,o,f,l,c,y;return i=t-1,o=n(i/h),s=e.mod(i,h),f=n(s/d),r=e.mod(s,d),l=n(r/m),a=e.mod(r,m),c=n(a/u),y=400*o+100*f+4*l+c,4!==f&&4!==c&&++y,y}e={};var a=s,n=Math.floor,o=[0,31,59,90,120,151,181,212,243,273,304,334],f=[0,31,60,91,121,152,182,213,244,274,305,335],u=365,m=1461,d=25*m-1,h=4*d+1,e=e={each:function(e,t){for(var i=0,s=e.length;s>i&&t(e[i],i,e)!==!1;i++);},mix:function(e,t){for(var i in t)e[i]=t[i]},isLeapYear:function(e){return 0!==(3&e)?!1:e%100!==0||e%400===0},mod:function(e,t){return e-t*n(e/t)},getFixedDate:function(e,i,s){var r=e-1;return u*r+n(r/4)-n(r/100)+n(r/400)+t(e,i,s)},getGregorianDateFromFixedDate:function(t){var s,n,u=r(t),m=e.getFixedDate(u,a.JANUARY,1),d=e.isLeapYear(u),h=d?f:o,l=t-m;for(n=0;n<h.length&&h[n]<=l;n++)s=n;var c=t-m-h[s]+1,y=i(t);return{year:u,month:s,dayOfMonth:c,dayOfWeek:y,isLeap:d}}};return e}(),o=function(e){function t(e,t){var i=[].slice.call(arguments,0);"object"==typeof e?(t=e,e=t.timezoneOffset):i.length>=3&&(e=t=null),t=t||h,this.locale=t,this.fields=[],this.time=void 0,this.timezoneOffset=e||t.timezoneOffset,this.firstDayOfWeek=t.firstDayOfWeek,this.minimalDaysInFirstWeek=t.minimalDaysInFirstWeek,this.fieldsComputed=!1,arguments.length>=3&&this.set.apply(this,i)}function i(e){var t=e.fields,i=t[M],s=t[g],r=o(i,s),a=t[E];a>r&&e.set(E,r)}function o(e,t){return L(e)?_[t]:N[t]}function u(e){return L(e)?366:365}function m(e,t,i){var s=d(t+6,e.firstDayOfWeek),r=s-t;r>=e.minimalDaysInFirstWeek&&(s-=7);var a=i-s;return J(a/7)+1}function d(e,t){return e-z(e-t,7)}var h,l=parseInt,c=n,y=r,D=a;h="undefined"!=typeof process?y:f;var O=s;c.mix(t,O),c.mix(t,{Utils:c,isLeapYear:c.isLeapYear,YEAR:1,MONTH:2,DAY_OF_MONTH:3,HOUR_OF_DAY:4,MINUTES:5,SECONDS:6,MILLISECONDS:7,WEEK_OF_YEAR:8,WEEK_OF_MONTH:9,DAY_OF_YEAR:10,DAY_OF_WEEK:11,DAY_OF_WEEK_IN_MONTH:12,AM:0,PM:1});var v=["","Year","Month","DayOfMonth","HourOfDay","Minutes","Seconds","Milliseconds","WeekOfYear","WeekOfMonth","DayOfYear","DayOfWeek","DayOfWeekInMonth"],M=t.YEAR,g=t.MONTH,E=t.DAY_OF_MONTH,k=t.HOUR_OF_DAY,A=t.MINUTES,W=t.SECONDS,F=t.MILLISECONDS,Y=t.DAY_OF_WEEK_IN_MONTH,p=t.DAY_OF_YEAR,S=t.DAY_OF_WEEK,T=t.WEEK_OF_MONTH,R=t.WEEK_OF_YEAR,N=[31,28,31,30,31,30,31,31,30,31,30,31],_=[31,29,31,30,31,30,31,31,30,31,30,31],I=1e3,U=60*I,C=60*U,b=24*C,w=7*b,x=719163,z=c.mod,L=c.isLeapYear,J=Math.floor,H=[void 0,1,t.JANUARY,1,0,0,0,0,1,void 0,1,t.SUNDAY,1],B=[void 0,292278994,t.DECEMBER,void 0,23,59,59,999,void 0,void 0,void 0,t.SATURDAY,void 0];t.prototype={constructor:t,isLeapYear:function(){return L(this.getYear())},getLocale:function(){return this.locale},getActualMinimum:function(e){if(void 0!==H[e])return H[e];var i=this.fields;if(e===T){var s=new t(i[M],i[g],1);return s.get(T)}throw new Error("minimum value not defined!")},getActualMaximum:function(e){if(void 0!==B[e])return B[e];var i,s=this.fields;switch(e){case E:i=o(s[M],s[g]);break;case R:var r=new t(s[M],t.DECEMBER,31);i=r.get(R),1===i&&(i=52);break;case T:var a=new t(s[M],s[g],o(s[M],s[g]));i=a.get(T);break;case p:i=u(s[M]);break;case Y:i=l((o(s[M],s[g])-1)/7)+1}if(void 0===i)throw new Error("maximum value not defined!");return i},isSet:function(e){return void 0!==this.fields[e]},computeFields:function(){var e=this.time,i=this.timezoneOffset*U,s=l(i/b),r=i%b;if(s+=l(e/b),r+=e%b,r>=b)r-=b,s++;else for(;0>r;)r+=b,s--;s+=x;var a=c.getGregorianDateFromFixedDate(s),n=a.year,o=this.fields;if(o[M]=n,o[g]=a.month,o[E]=a.dayOfMonth,o[S]=a.dayOfWeek,0!==r){o[k]=l(r/C);var f=r%C;o[A]=l(f/U),f%=U,o[W]=l(f/I),o[F]=f%I}else o[k]=o[A]=o[W]=o[F]=0;var h=c.getFixedDate(n,t.JANUARY,1),y=s-h+1,D=s-a.dayOfMonth+1;o[p]=y,o[Y]=l((a.dayOfMonth-1)/7)+1;var O=m(this,h,s);if(0===O){var v=h-1,N=h-u(n-1);O=m(this,N,v)}else if(O>=52){var _=h+u(n),w=d(_+6,this.firstDayOfWeek),z=w-_;z>=this.minimalDaysInFirstWeek&&s>=w-7&&(O=1)}o[R]=O,o[T]=m(this,D,s),this.fieldsComputed=!0},computeTime:function(){if(!this.isSet(M))throw new Error("year must be set for KISSY GregorianCalendar");var e=this.fields,t=e[M],i=0;this.isSet(k)&&(i+=e[k]),i*=60,i+=e[A]||0,i*=60,i+=e[W]||0,i*=1e3,i+=e[F]||0;var s=0;e[M]=t,s+=this.getFixedDate();var r=(s-x)*b+i;r-=this.timezoneOffset*U,this.time=r,this.computeFields()},complete:function(){void 0===this.time&&this.computeTime(),this.fieldsComputed||this.computeFields()},getFixedDate:function(){var e=this,i=e.fields,s=e.firstDayOfWeek,r=i[M],a=t.JANUARY;e.isSet(g)&&(a=i[g],a>t.DECEMBER?(r+=l(a/12),a%=12):a<t.JANUARY&&(r+=J(a/12),a=z(a,12)));var n,f=c.getFixedDate(r,a,1),u=e.firstDayOfWeek;if(e.isSet(S)&&(u=i[S]),e.isSet(g))if(e.isSet(E))f+=i[E]-1;else if(e.isSet(T))n=d(f+6,s),n-f>=e.minimalDaysInFirstWeek&&(n-=7),u!==s&&(n=d(n+6,u)),f=n+7*(i[T]-1);else{var m;m=e.isSet(Y)?i[Y]:1;var h=7*m;0>m&&(h=o(r,a)+7*(m+1)),f=d(f+h-1,u)}else e.isSet(p)?f+=i[p]-1:(n=d(f+6,s),n-f>=e.minimalDaysInFirstWeek&&(n-=7),u!==s&&(n=d(n+6,u)),f=n+7*(i[R]-1));return f},getTime:function(){return void 0===this.time&&this.computeTime(),this.time},setTime:function(e){this.time=e,this.fieldsComputed=!1,this.complete()},get:function(e){return this.complete(),this.fields[e]},set:function(e,t){var i=arguments.length;if(2===i)this.fields[e]=t;else{if(!(F+1>i))throw new Error("illegal arguments for KISSY GregorianCalendar set");for(var s=0;i>s;s++)this.fields[M+s]=arguments[s]}this.time=void 0},add:function(e,t){if(t){var s=this,r=s.fields,a=s.get(e);if(e===M)a+=t,s.set(M,a),i(s);else if(e===g){a+=t;var n=J(a/12);a=z(a,12),n&&s.set(M,r[M]+n),s.set(g,a),i(s)}else{switch(e){case k:t*=C;break;case A:t*=U;break;case W:t*=I;break;case F:break;case T:case R:case Y:t*=w;break;case S:case p:case E:t*=b;break;default:throw new Error("illegal field for add")}s.setTime(s.time+t)}}},getRolledValue:function(e,t,i,s){var r=e-i,a=s-i+1;return t%=a,i+(r+t+a)%a},roll:function(e,t){if(t){var s=this,r=s.get(e),a=s.getActualMinimum(e),n=s.getActualMaximum(e);switch(r=s.getRolledValue(r,t,a,n),s.set(e,r),e){case g:i(s);break;default:s.updateFieldsBySet(e)}}},updateFieldsBySet:function(e){var t=this.fields;switch(e){case T:t[E]=void 0;break;case p:t[g]=void 0;break;case S:t[E]=void 0;break;case R:t[p]=void 0,t[g]=void 0}},getTimezoneOffset:function(){return this.timezoneOffset},setTimezoneOffset:function(e){this.timezoneOffset!==e&&(this.fieldsComputed=void 0,this.timezoneOffset=e)},setFirstDayOfWeek:function(e){this.firstDayOfWeek!==e&&(this.firstDayOfWeek=e,this.fieldsComputed=!1)},getFirstDayOfWeek:function(){return this.firstDayOfWeek},setMinimalDaysInFirstWeek:function(e){this.minimalDaysInFirstWeek!==e&&(this.minimalDaysInFirstWeek=e,this.fieldsComputed=!1)},getMinimalDaysInFirstWeek:function(){return this.minimalDaysInFirstWeek},getWeeksInWeekYear:function(){var e=this.getWeekYear();if(e===this.get(M))return this.getActualMaximum(R);var t=this.clone();return t.setWeekDate(e,2,this.get(S)),t.getActualMaximum(R)},getWeekYear:function(){var e=this.get(M),i=this.get(R),s=this.get(g);return s===t.JANUARY?i>=52&&--e:s===t.DECEMBER&&1===i&&++e,e},setWeekDate:function(e,i,s){if(s<t.SUNDAY||s>t.SATURDAY)throw new Error("invalid dayOfWeek: "+s);var r=this.fields,a=this.clone();a.clear(),a.setTimezoneOffset(0),a.set(M,e),a.set(R,1),a.set(S,this.getFirstDayOfWeek());var n=s-this.getFirstDayOfWeek();0>n&&(n+=7),n+=7*(i-1),0!==n?a.add(p,n):a.complete(),r[M]=a.get(M),r[g]=a.get(g),r[E]=a.get(E),this.complete()},clone:function(){void 0===this.time&&this.computeTime();var e=new t(this.timezoneOffset,this.locale);return e.setTime(this.time),e},equals:function(e){return this.getTime()===e.getTime()&&this.firstDayOfWeek===e.firstDayOfWeek&&this.timezoneOffset===e.timezoneOffset&&this.minimalDaysInFirstWeek===e.minimalDaysInFirstWeek},clear:function(e){void 0===e?this.field=[]:this.fields[e]=void 0,this.time=void 0,this.fieldsComputed=!1}};var K=t.prototype;return c.each(v,function(e,t){e&&(K["get"+e]=function(){return this.get(t)},K["isSet"+e]=function(){return this.isSet(t)},K["set"+e]=function(e){return this.set(t,e)},K["add"+e]=function(e){return this.add(t,e)},K["roll"+e]=function(e){return this.roll(t,e)})}),e=t,t.version="1.0.1",t.enUsLocale=y,t.zhCnLocale=D,e}(),i.exports=o});