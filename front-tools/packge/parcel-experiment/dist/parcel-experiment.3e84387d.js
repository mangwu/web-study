(function () {function b(e){h(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn(new Error().stack)),new Date(NaN))}function h(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function x(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function p(e,r){h(2,arguments);var $=b(e),t=b(r),g=$.getTime()-t.getTime();return g<0?-1:g>0?1:g}function z(e,r){h(2,arguments);var t=b(e),$=b(r);return 12*(t.getFullYear()-$.getFullYear())+(t.getMonth()-$.getMonth())}function A(e,r){h(2,arguments);var $=b(e),o=b(r);return $.getTime()-o.getTime()}function B(e,r){h(2,arguments);var $,t=b(e),a=b(r),l=p(t,a),u=Math.abs(z(t,a));if(u<1)$=0;else{1===t.getMonth()&&t.getDate()>27&&t.setDate(30),t.setMonth(t.getMonth()-l*u);var o=p(t,a)===-l;C(b(e))&&1===u&&1===p(e,a)&&(o=!1),$=l*(u-o)}return 0===$?0:$}function C(e){h(1,arguments);var r=b(e);return E(r).getTime()===F(r).getTime()}function E(e){h(1,arguments);var r=b(e);return r.setHours(23,59,59,999),r}function F(e){h(1,arguments);var r=b(e),t=r.getMonth();return r.setFullYear(r.getFullYear(),t+1,0),r.setHours(23,59,59,999),r}function G(e,r){h(2,arguments);var $=A(e,r)/1e3;return $>0?Math.floor($):Math.ceil($)}var q={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function H(o,e,t){var a;return t=t||{},a="string"==typeof q[o]?q[o]:1===e?q[o].one:q[o].other.replace("{{count}}",e),t.addSuffix?t.comparison>0?"in "+a:a+" ago":a}function v(t){return function(r){var e=r||{},$=e.width?String(e.width):t.defaultWidth;return t.formats[$]||t.formats[t.defaultWidth]}}var I={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},J={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},K={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},L={date:v({formats:I,defaultWidth:"full"}),time:v({formats:J,defaultWidth:"full"}),dateTime:v({formats:K,defaultWidth:"full"})};var N={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function O(e,t,a,o){return N[e]}function j(t){return function(a,e){var l,r=e||{};if("formatting"===(r.context?String(r.context):"standalone")&&t.formattingValues){var n=t.defaultFormattingWidth||t.defaultWidth,i=r.width?String(r.width):n;l=t.formattingValues[i]||t.formattingValues[n]}else{var u=t.defaultWidth,d=r.width?String(r.width):t.defaultWidth;l=t.values[d]||t.values[u]}return l[t.argumentCallback?t.argumentCallback(a):a]}}var P={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Q={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},R={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},S={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},T={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},U={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}};function W(n,e){var a=Number(n),r=a%100;if(r>20||r<10)switch(r%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd";}return a+"th"}var X={ordinalNumber:W,era:j({values:P,defaultWidth:"wide"}),quarter:j({values:Q,defaultWidth:"wide",argumentCallback:function(n){return Number(n)-1}}),month:j({values:R,defaultWidth:"wide"}),day:j({values:S,defaultWidth:"wide"}),dayPeriod:j({values:T,defaultWidth:"wide",formattingValues:U,defaultFormattingWidth:"wide"})};function Y(a){return function(r,t){var e=String(r),l=t||{},u=e.match(a.matchPattern);if(!u)return null;var n=u[0],c=e.match(a.parsePattern);if(!c)return null;var $=a.valueCallback?a.valueCallback(c[0]):c[0];return{value:$=l.valueCallback?l.valueCallback($):$,rest:e.slice(n.length)}}}function k(t){return function(r,e){var a=String(r),n=e||{},u=n.width,l=u&&t.matchPatterns[u]||t.matchPatterns[t.defaultMatchWidth],$=a.match(l);if(!$)return null;var f,i=$[0],c=u&&t.parsePatterns[u]||t.parsePatterns[t.defaultParseWidth];return f="[object Array]"===Object.prototype.toString.call(c)?_(c,function(t){return t.test(i)}):Z(c,function(t){return t.test(i)}),f=t.valueCallback?t.valueCallback(f):f,{value:f=n.valueCallback?n.valueCallback(f):f,rest:a.slice(i.length)}}}function Z(t,r){for(var e in t)if(t.hasOwnProperty(e)&&r(t[e]))return e}function _(t,r){for(var e=0;e<t.length;e++)if(r(t[e]))return e}var aa=/^(\d+)(th|st|nd|rd)?/i,ba=/\d+/i,ca={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},da={any:[/^b/i,/^(a|c)/i]},ea={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},fa={any:[/1/i,/2/i,/3/i,/4/i]},ga={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},ha={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},ia={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},ja={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},ka={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},la={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},ma={ordinalNumber:Y({matchPattern:aa,parsePattern:ba,valueCallback:function(a){return parseInt(a,10)}}),era:k({matchPatterns:ca,defaultMatchWidth:"wide",parsePatterns:da,defaultParseWidth:"any"}),quarter:k({matchPatterns:ea,defaultMatchWidth:"wide",parsePatterns:fa,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:k({matchPatterns:ga,defaultMatchWidth:"wide",parsePatterns:ha,defaultParseWidth:"any"}),day:k({matchPatterns:ia,defaultMatchWidth:"wide",parsePatterns:ja,defaultParseWidth:"any"}),dayPeriod:k({matchPatterns:ka,defaultMatchWidth:"any",parsePatterns:la,defaultParseWidth:"any"})};var na={code:"en-US",formatDistance:H,formatLong:L,formatRelative:O,localize:X,match:ma,options:{weekStartsOn:0,firstWeekContainsDate:1}};function oa(t){return pa({},t)}function pa(r,e){if(null==r)throw new TypeError("assign requires that input parameter not be null or undefined");for(var t in e=e||{})e.hasOwnProperty(t)&&(r[t]=e[t]);return r}var y=1440,qa=2520,w=43200,ra=86400;function sa(e,r,o){h(2,arguments);var a=o||{},t=a.locale||na;if(!t.formatDistance)throw new RangeError("locale must contain formatDistance property");var s=p(e,r);if(isNaN(s))throw new RangeError("Invalid time value");var n,$,c=oa(a);c.addSuffix=Boolean(a.addSuffix),c.comparison=s,s>0?(n=b(r),$=b(e)):(n=b(e),$=b(r));var i,f=G($,n),u=(x($)-x(n))/1e3,l=Math.round((f-u)/60);if(l<2)return a.includeSeconds?f<5?t.formatDistance("lessThanXSeconds",5,c):f<10?t.formatDistance("lessThanXSeconds",10,c):f<20?t.formatDistance("lessThanXSeconds",20,c):f<40?t.formatDistance("halfAMinute",null,c):f<60?t.formatDistance("lessThanXMinutes",1,c):t.formatDistance("xMinutes",1,c):0===l?t.formatDistance("lessThanXMinutes",1,c):t.formatDistance("xMinutes",l,c);if(l<45)return t.formatDistance("xMinutes",l,c);if(l<90)return t.formatDistance("aboutXHours",1,c);if(l<y){var m=Math.round(l/60);return t.formatDistance("aboutXHours",m,c)}if(l<qa)return t.formatDistance("xDays",1,c);if(l<w){var d=Math.round(l/y);return t.formatDistance("xDays",d,c)}if(l<ra)return i=Math.round(l/w),t.formatDistance("aboutXMonths",i,c);if((i=B($,n))<12){var M=Math.round(l/w);return t.formatDistance("xMonths",M,c)}var V=i%12,D=Math.floor(i/12);return V<3?t.formatDistance("aboutXYears",D,c):V<9?t.formatDistance("overXYears",D,c):t.formatDistance("almostXYears",D+1,c)}function ta(e,r){return h(1,arguments),sa(e,Date.now(),r)}var ua="1996-09-13 10:00:00";document.body.textContent=ta(new Date(ua))+" ago";})();