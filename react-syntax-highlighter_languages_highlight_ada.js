(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[5],{"./node_modules/_highlight.js@9.15.10@highlight.js/lib/languages/ada.js":function(e,n){e.exports=function(e){var n="[A-Za-z](_?[A-Za-z0-9.])*",s=e.COMMENT("--","$"),a={begin:"\\s+:\\s+",end:"\\s*(:=|;|\\)|=>|$)",illegal:"[]{}%#'\"",contains:[{beginKeywords:"loop for declare others",endsParent:!0},{className:"keyword",beginKeywords:"not null constant access function procedure in out aliased exception"},{className:"type",begin:n,endsParent:!0,relevance:0}]};return{case_insensitive:!0,keywords:{keyword:"abort else new return abs elsif not reverse abstract end accept entry select access exception of separate aliased exit or some all others subtype and for out synchronized array function overriding at tagged generic package task begin goto pragma terminate body private then if procedure type case in protected constant interface is raise use declare range delay limited record when delta loop rem while digits renames with do mod requeue xor",literal:"True False"},contains:[s,{className:"string",begin:/"/,end:/"/,contains:[{begin:/""/,relevance:0}]},{className:"string",begin:/'.'/},{className:"number",begin:"\\b(\\d(_|\\d)*#\\w+(\\.\\w+)?#([eE][-+]?\\d(_|\\d)*)?|\\d(_|\\d)*(\\.\\d(_|\\d)*)?([eE][-+]?\\d(_|\\d)*)?)",relevance:0},{className:"symbol",begin:"'"+n},{className:"title",begin:"(\\bwith\\s+)?(\\bprivate\\s+)?\\bpackage\\s+(\\bbody\\s+)?",end:"(is|$)",keywords:"package body",excludeBegin:!0,excludeEnd:!0,illegal:"[]{}%#'\""},{begin:"(\\b(with|overriding)\\s+)?\\b(function|procedure)\\s+",end:"(\\bis|\\bwith|\\brenames|\\)\\s*;)",keywords:"overriding function procedure with is renames return",returnBegin:!0,contains:[s,{className:"title",begin:"(\\bwith\\s+)?\\b(function|procedure)\\s+",end:"(\\(|\\s+|$)",excludeBegin:!0,excludeEnd:!0,illegal:"[]{}%#'\""},a,{className:"type",begin:"\\breturn\\s+",end:"(\\s+|;|$)",keywords:"return",excludeBegin:!0,excludeEnd:!0,endsParent:!0,illegal:"[]{}%#'\""}]},{className:"type",begin:"\\b(sub)?type\\s+",end:"\\s+",keywords:"type",excludeBegin:!0,illegal:"[]{}%#'\""},a]}}}}]);