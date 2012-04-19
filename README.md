fitText
=====

A Raphael.js plugin that fits Raphael text elements to certain width, simulating 
the `text-overflow: ellipsis;` CSS declaration.

Usage
-----

fitText can be applied to any non-removed Raphael text element.
Non-text elements (i.e. path) will be ignored.

Accepts the following parameters:

* `width` - _mandatory_ width in pixels
* `text` - _optional_ text to set

Example
-----

Working example available at http://jsfiddle.net/sCEBD/

Fit existing text to width

    paper.text(50, 50, 'Hello world!').fitText(30);

Update an existing text and fit to width

    paper.text(50, 50, 'Hello world!').fitText(40, 'Hello worrrrrlllldddd!');

The fitText method is chainable

    paper.text().attr({
        'font-size': 30
    }).fitText(50, 'Hello worrrrrlllldddd!').attr({
        'fill': 'red'
    });


License
-------

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.