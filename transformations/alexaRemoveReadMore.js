// First, tell the mapper what value types this transformation is valid for
exports.type = "string";
// Then, implement the transformation function

exports.transform = function (content) {

    if (content.length > 0) {
        var removeReadMore = content.substr(0, content.indexOf('\n\nread more')); 
        return removeReadMore;
    }

    return content;
};