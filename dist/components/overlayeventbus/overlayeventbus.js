this.primereact = this.primereact || {};
this.primereact.overlayeventbus = (function () {
    'use strict';

    function EventBus () {
      var allHandlers = new Map();
      return {
        on: function on(type, handler) {
          var handlers = allHandlers.get(type);
          if (!handlers) handlers = [handler];else handlers.push(handler);
          allHandlers.set(type, handlers);
        },
        off: function off(type, handler) {
          var handlers = allHandlers.get(type);
          handlers && handlers.splice(handlers.indexOf(handler) >>> 0, 1);
        },
        emit: function emit(type, evt) {
          var handlers = allHandlers.get(type);
          handlers && handlers.slice().forEach(function (handler) {
            return handler(evt);
          });
        }
      };
    }

    var OverlayEventBus = EventBus();

    return OverlayEventBus;

})();
