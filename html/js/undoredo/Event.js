GTE.TREE = (function (parentModule) {
    "use strict";

    /**
    * Creates a new Event.
    * @class
    */
    function Event(unit, mode) {
        this.unit = unit;
        this.mode = mode;
    }


    Event.prototype.execute = function() {
        var curMode = GTE.MODE;
        GTE.MODE  = this.mode;
        this.unit.onClick();
        GTE.MODE = curMode;
    };

    // Add class to parent module
    parentModule.Event = Event;

    return parentModule;
}(GTE.TREE)); // Add to GTE.TREE sub-module