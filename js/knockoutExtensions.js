ko.observableArray.fn.filterByProperty = function (property, value) {
    return ko.pureComputed(function () {
        var items = this(),
            matches = [],
            current = null,
            i, l;
        for (i = 0, l = items.length; i < l; i++) {
            current = items[i];
            if (ko.unwrap(current[property]) === value) {
                matches.push(current);
            }
        }
        return matches;
    }, this);
};