/*
Copyright 2017 Christos Christou
Github: https://github.com/christosnc/reveal-effect.js

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

$(function() {
  var originalColor = "rgba(155,155,155, 0)", lightColor = "rgba(255,255,255,0.75)";
  var x, y, xy, bgWebKit, bgMoz, gradientSize = 60;

  $('.reveal-effect').each(function(i) {
    var r1 = document.createElement("div");
    var r2 = document.createElement("div");
    var r3 = document.createElement("div");
    var r4 = document.createElement("div");
    r1.className = "reveal";
    r2.className = "reveal";
    r3.className = "reveal";
    r4.className = "reveal";
    r1.style.top = this.offsetTop - 1 + "px";
    r1.style.left = this.offsetLeft + "px";
    r1.style.width = this.clientWidth + "px";
    r1.style.height = "2px";
    r1.style.borderRadius = "100% 100% 0% 0%";
    r1.style.position = "absolute";
    r2.style.top = this.offsetTop - 1 + this.clientHeight + "px";
    r2.style.left = this.offsetLeft + "px";
    r2.style.width = this.clientWidth + "px";
    r2.style.height = "2px";
    r2.style.borderRadius = "0% 0% 100% 100%";
    r2.style.position = "absolute";
    r3.style.top = this.offsetTop + "px";
    r3.style.left = this.offsetLeft - 1 + "px";
    r3.style.width = "2px";
    r3.style.height = this.clientHeight + "px";
    r3.style.borderRadius = "100% 0% 0% 100%";
    r3.style.position = "absolute";
    r4.style.top = this.offsetTop + "px";
    r4.style.left = this.offsetLeft - 1 + this.clientWidth + "px";
    r4.style.width = "2px";
    r4.style.height = this.clientHeight + "px";
    r4.style.borderRadius = "0% 100% 100% 0%";
    r4.style.position = "absolute";
    this.appendChild(r1);
    this.appendChild(r2);
    this.appendChild(r3);
    this.appendChild(r4);
  });

  window.addEventListener("resize", function(e){
    $(".reveal").remove();
    $('.reveal-effect').each(function(i) {
      var r1 = document.createElement("div");
      var r2 = document.createElement("div");
      var r3 = document.createElement("div");
      var r4 = document.createElement("div");
      r1.className = "reveal";
      r2.className = "reveal";
      r3.className = "reveal";
      r4.className = "reveal";
      r1.style.top = this.offsetTop - 1 + "px";
      r1.style.left = this.offsetLeft + "px";
      r1.style.width = this.clientWidth + "px";
      r1.style.height = "2px";
      r1.style.borderRadius = "100% 100% 0% 0%";
      r1.style.position = "absolute";
      r2.style.top = this.offsetTop - 1 + this.clientHeight + "px";
      r2.style.left = this.offsetLeft + "px";
      r2.style.width = this.clientWidth + "px";
      r2.style.height = "2px";
      r2.style.borderRadius = "0% 0% 100% 100%";
      r2.style.position = "absolute";
      r3.style.top = this.offsetTop + "px";
      r3.style.left = this.offsetLeft - 1 + "px";
      r3.style.width = "2px";
      r3.style.height = this.clientHeight + "px";
      r3.style.borderRadius = "100% 0% 0% 100%";
      r3.style.position = "absolute";
      r4.style.top = this.offsetTop + "px";
      r4.style.left = this.offsetLeft - 1 + this.clientWidth + "px";
      r4.style.width = "2px";
      r4.style.height = this.clientHeight + "px";
      r4.style.borderRadius = "0% 100% 100% 0%";
      r4.style.position = "absolute";
      this.appendChild(r1);
      this.appendChild(r2);
      this.appendChild(r3);
      this.appendChild(r4);
    });
  });

  $("*").mousemove(function(e) {
    $('.reveal').each(function(i) {
      x = e.pageX - this.getBoundingClientRect().left - document.body.scrollLeft;
      y = e.pageY - this.getBoundingClientRect().top - document.body.scrollTop;
      xy = x + " " + y;
      bgWebKit = "-webkit-gradient(radial, " + xy + ", 0, " + xy + ", " + gradientSize + ", from(" + lightColor + "), to(rgba(255,255,255,0.0))), " + originalColor;
      bgMoz    = "-moz-radial-gradient(" + x + "px " + y + "px 45deg, circle, " + lightColor + " 0%, " + originalColor + " " + gradientSize + "px)";
      $(this).css({ 'background': bgWebKit });
    });
  });
});
