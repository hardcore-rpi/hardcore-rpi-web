(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[126],{"./node_modules/_highlight.js@9.15.10@highlight.js/lib/languages/prolog.js":function(n,e){n.exports=function(n){var e={begin:/\(/,end:/\)/,relevance:0},a={begin:/\[/,end:/\]/},s={className:"comment",begin:/%/,end:/$/,contains:[n.PHRASAL_WORDS_MODE]},i={className:"string",begin:/`/,end:/`/,contains:[n.BACKSLASH_ESCAPE]},_=[{begin:/[a-z][A-Za-z0-9_]*/,relevance:0},{className:"symbol",variants:[{begin:/[A-Z][a-zA-Z0-9_]*/},{begin:/_[A-Za-z0-9_]*/}],relevance:0},e,{begin:/:-/},a,s,n.C_BLOCK_COMMENT_MODE,n.QUOTE_STRING_MODE,n.APOS_STRING_MODE,i,{className:"string",begin:/0\'(\\\'|.)/},{className:"string",begin:/0\'\\s/},n.C_NUMBER_MODE];return e.contains=_,a.contains=_,{contains:_.concat([{begin:/\.$/}])}}}}]);