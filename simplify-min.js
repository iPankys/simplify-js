/*
 Copyright (c) 2012, Vladimir Agafonkin
 Simplify.js is a high-performance polyline simplification library.
 http://mourner.github.com/simplify-js/
*/
(function(a,b){function c(a,b){var c=a.x-b.x,d=a.y-b.y;return c*c+d*d}function d(a,b,c){var d=b.x,e=b.y,f=c.x-d,g=c.y-e,h;if(f!==0||g!==0)h=((a.x-d)*f+(a.y-e)*g)/(f*f+g*g),h>1?(d=c.x,e=c.y):h>0&&(d+=f*h,e+=g*h);return f=a.x-d,g=a.y-e,f*f+g*g}function e(a,b){var d=a[0],e=[d],f=a.length,g,h;for(g=1;g<f;g++)h=a[g],c(h,d)>b&&(e.push(h),d=h);return d!==h&&e.push(h),e}function f(a,b,c,e,f){var g,h,i,j,k=[],l=[];while(f){g=0;for(h=e+1;h<f;h++)i=d(a[h],a[e],a[f]),i>g&&(j=h,g=i);g>c&&(b[j]=1,k.push(e),l.push(j),k.push(j),l.push(f)),e=k.pop(),f=l.pop()}}function g(a,c){var d=a.length,e=Uint8Array!==b?Uint8Array:Array,g=new e(d),h,i=[];g[0]=g[d-1]=1,f(a,g,c,0,d-1);for(h=0;h<d;h++)g[h]&&i.push(a[h]);return i}"use strict";var h=typeof exports!="undefined"?exports:a;h.simplify=function(a,c,d){c=c!==b?c:1,d=d!==b?d:!1;var f=c*c;return d||(a=e(a,f)),a=g(a,f),a}})(this)