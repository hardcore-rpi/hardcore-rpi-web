(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[127],{"./node_modules/_highlight.js@9.15.10@highlight.js/lib/languages/properties.js":function(e,n){e.exports=function(e){var n="[ \\t\\f]*",a="("+n+"[:=]"+n+"|[ \\t\\f]+)",s="([^\\\\:= \\t\\f\\n]|\\\\.)+",t={end:a,relevance:0,starts:{className:"string",end:/$/,relevance:0,contains:[{begin:"\\\\\\n"}]}};return{case_insensitive:!0,illegal:/\S/,contains:[e.COMMENT("^\\s*[!#]","$"),{begin:"([^\\\\\\W:= \\t\\f\\n]|\\\\.)+"+a,returnBegin:!0,contains:[{className:"attr",begin:"([^\\\\\\W:= \\t\\f\\n]|\\\\.)+",endsParent:!0,relevance:0}],starts:t},{begin:s+a,returnBegin:!0,relevance:0,contains:[{className:"meta",begin:s,endsParent:!0,relevance:0}],starts:t},{className:"attr",relevance:0,begin:s+n+"$"}]}}}}]);