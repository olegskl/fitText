/**
 * @fileOverview This file contains a Raphael fitText plugin.
 * @author Oleg Sklyanchuk
 * @version 0.1.0
 */

/**
 * Assigns a functionality to fit Raphael text elements to certain width.
 * @requires Raphael
 */

(function (Raphael) {
    // ECMAScript 5 strict mode:
    'use strict';
    // Raphael must be defined and 
    // must expose the .el property:
    if (!Raphael || !Raphael.el) {
        return;
    }
    // Abort if another plugin with
    // the same name is already in use:
    if (Raphael.el.fitText) {
        return;
    }
    /**
     * Fits a new or existing text to a specified width.
     * Note 1: Doesn't handle line breaks yet.
     * Note 2: Only fits to width.
     * @param {Number} width A width to which the text should fit.
     * @param {String} [text] An text to set. Same as el.attr('text', text);
     * @returns {RaphaelElement} Raphael element object with type "text".
     */
    Raphael.el.fitText = function(width, text) {
        // Can be applied to non-removed text elements only:
        if (this.removed || this.type !== 'text') {
            return this;
        }
        // Must have width:
        if (typeof width !== 'number') {
            return this; // < maybe throw an error instead?
        }
        // When text is unavailable or incorrectly defined
        // just use what is already in the 'text' attribute:
        if (typeof text === 'string') {
            this.attr('text', text);
        } else {
            text = this.attr('text');
        }
        // Cache the current width of the text element:
        var currentWidth = this.getBBox().width;
        // Check if the text fits already:
        if (currentWidth > width) {
            var avgCharWidth = currentWidth / text.length;
            var textLengthThatFits = Math.round(width / avgCharWidth);
            var textThatFits = text.substr(0, textLengthThatFits - 3);
            // Cut the text to fitting length
            // and set it together with the
            // hover tooltip that shows the
            // original text:
            this.attr({
                'text': textThatFits + '...',
                'title': text
            });
            // Average character width is not sufficient
            // to determine the exact length of a string
            // that fits the width, so we adjust a bit:
            while (this.getBBox().width > width && textThatFits.length > 0) {
                textThatFits = textThatFits.slice(0, -1);
                this.attr('text', textThatFits + '...');
            }
        } else {
            // The text fits, so there's
            // no need for a hover tooltip
            // and we should clear it:
            this.attr('title', '');
        }
        // Make chainable:
        return this;
    }
})(Raphael);