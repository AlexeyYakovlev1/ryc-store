/******/
(function(modules) { // webpackBootstrap
    /******/ // The module cache
    /******/
    var installedModules = {};
    /******/
    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/
        if (installedModules[moduleId]) {
            /******/
            return installedModules[moduleId].exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/
            i: moduleId,
            /******/
            l: false,
            /******/
            exports: {}
            /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/
    __webpack_require__.d = function(exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
            /******/
            Object.defineProperty(exports, name, { enumerable: true, get: getter });
            /******/
        }
        /******/
    };
    /******/
    /******/ // define __esModule on exports
    /******/
    __webpack_require__.r = function(exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/
            Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
            /******/
        }
        /******/
        Object.defineProperty(exports, '__esModule', { value: true });
        /******/
    };
    /******/
    /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 8|1: behave like require
    /******/
    __webpack_require__.t = function(value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/
        if (mode & 8) return value;
        /******/
        if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
        /******/
        var ns = Object.create(null);
        /******/
        __webpack_require__.r(ns);
        /******/
        Object.defineProperty(ns, 'default', { enumerable: true, value: value });
        /******/
        if (mode & 2 && typeof value != 'string')
            for (var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
        /******/
        return ns;
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function(module) {
        /******/
        var getter = module && module.__esModule ?
            /******/
            function getDefault() { return module['default']; } :
            /******/
            function getModuleExports() { return module; };
        /******/
        __webpack_require__.d(getter, 'a', getter);
        /******/
        return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
    /******/
    /******/ // __webpack_public_path__
    /******/
    __webpack_require__.p = "";
    /******/
    /******/
    /******/ // Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = "./src/public/js/main.js");
    /******/
})
/************************************************************************/
/******/
({

    /***/
    "./node_modules/@glidejs/glide/dist/glide.esm.js":
    /*!*******************************************************!*\
      !*** ./node_modules/@glidejs/glide/dist/glide.esm.js ***!
      \*******************************************************/
    /*! exports provided: default */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /*!
         * Glide.js v3.4.1
         * (c) 2013-2019 Jędrzej Chałubek <jedrzej.chalubek@gmail.com> (http://jedrzejchalubek.com/)
         * Released under the MIT License.
         */

        var defaults = {
            /**
             * Type of the movement.
             *
             * Available types:
             * `slider` - Rewinds slider to the start/end when it reaches the first or last slide.
             * `carousel` - Changes slides without starting over when it reaches the first or last slide.
             *
             * @type {String}
             */
            type: 'slider',

            /**
             * Start at specific slide number defined with zero-based index.
             *
             * @type {Number}
             */
            startAt: 0,

            /**
             * A number of slides visible on the single viewport.
             *
             * @type {Number}
             */
            perView: 1,

            /**
             * Focus currently active slide at a specified position in the track.
             *
             * Available inputs:
             * `center` - Current slide will be always focused at the center of a track.
             * `0,1,2,3...` - Current slide will be focused on the specified zero-based index.
             *
             * @type {String|Number}
             */
            focusAt: 0,

            /**
             * A size of the gap added between slides.
             *
             * @type {Number}
             */
            gap: 10,

            /**
             * Change slides after a specified interval. Use `false` for turning off autoplay.
             *
             * @type {Number|Boolean}
             */
            autoplay: false,

            /**
             * Stop autoplay on mouseover event.
             *
             * @type {Boolean}
             */
            hoverpause: true,

            /**
             * Allow for changing slides with left and right keyboard arrows.
             *
             * @type {Boolean}
             */
            keyboard: true,

            /**
             * Stop running `perView` number of slides from the end. Use this
             * option if you don't want to have an empty space after
             * a slider. Works only with `slider` type and a
             * non-centered `focusAt` setting.
             *
             * @type {Boolean}
             */
            bound: false,

            /**
             * Minimal swipe distance needed to change the slide. Use `false` for turning off a swiping.
             *
             * @type {Number|Boolean}
             */
            swipeThreshold: 80,

            /**
             * Minimal mouse drag distance needed to change the slide. Use `false` for turning off a dragging.
             *
             * @type {Number|Boolean}
             */
            dragThreshold: 120,

            /**
             * A maximum number of slides to which movement will be made on swiping or dragging. Use `false` for unlimited.
             *
             * @type {Number|Boolean}
             */
            perTouch: false,

            /**
             * Moving distance ratio of the slides on a swiping and dragging.
             *
             * @type {Number}
             */
            touchRatio: 0.5,

            /**
             * Angle required to activate slides moving on swiping or dragging.
             *
             * @type {Number}
             */
            touchAngle: 45,

            /**
             * Duration of the animation in milliseconds.
             *
             * @type {Number}
             */
            animationDuration: 400,

            /**
             * Allows looping the `slider` type. Slider will rewind to the first/last slide when it's at the start/end.
             *
             * @type {Boolean}
             */
            rewind: true,

            /**
             * Duration of the rewinding animation of the `slider` type in milliseconds.
             *
             * @type {Number}
             */
            rewindDuration: 800,

            /**
             * Easing function for the animation.
             *
             * @type {String}
             */
            animationTimingFunc: 'cubic-bezier(.165, .840, .440, 1)',

            /**
             * Throttle costly events at most once per every wait milliseconds.
             *
             * @type {Number}
             */
            throttle: 10,

            /**
             * Moving direction mode.
             *
             * Available inputs:
             * - 'ltr' - left to right movement,
             * - 'rtl' - right to left movement.
             *
             * @type {String}
             */
            direction: 'ltr',

            /**
             * The distance value of the next and previous viewports which
             * have to peek in the current view. Accepts number and
             * pixels as a string. Left and right peeking can be
             * set up separately with a directions object.
             *
             * For example:
             * `100` - Peek 100px on the both sides.
             * { before: 100, after: 50 }` - Peek 100px on the left side and 50px on the right side.
             *
             * @type {Number|String|Object}
             */
            peek: 0,

            /**
             * Collection of options applied at specified media breakpoints.
             * For example: display two slides per view under 800px.
             * `{
             *   '800px': {
             *     perView: 2
             *   }
             * }`
             */
            breakpoints: {},

            /**
             * Collection of internally used HTML classes.
             *
             * @todo Refactor `slider` and `carousel` properties to single `type: { slider: '', carousel: '' }` object
             * @type {Object}
             */
            classes: {
                direction: {
                    ltr: 'glide--ltr',
                    rtl: 'glide--rtl'
                },
                slider: 'glide--slider',
                carousel: 'glide--carousel',
                swipeable: 'glide--swipeable',
                dragging: 'glide--dragging',
                cloneSlide: 'glide__slide--clone',
                activeNav: 'glide__bullet--active',
                activeSlide: 'glide__slide--active',
                disabledArrow: 'glide__arrow--disabled'
            }
        };

        /**
         * Outputs warning message to the bowser console.
         *
         * @param  {String} msg
         * @return {Void}
         */
        function warn(msg) {
            console.error("[Glide warn]: " + msg);
        }

        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };

        var classCallCheck = function(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        };

        var createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }

            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();

        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];

                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }

            return target;
        };

        var get = function get(object, property, receiver) {
            if (object === null) object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);

            if (desc === undefined) {
                var parent = Object.getPrototypeOf(object);

                if (parent === null) {
                    return undefined;
                } else {
                    return get(parent, property, receiver);
                }
            } else if ("value" in desc) {
                return desc.value;
            } else {
                var getter = desc.get;

                if (getter === undefined) {
                    return undefined;
                }

                return getter.call(receiver);
            }
        };

        var inherits = function(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }

            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        };

        var possibleConstructorReturn = function(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }

            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        };

        /**
         * Converts value entered as number
         * or string to integer value.
         *
         * @param {String} value
         * @returns {Number}
         */
        function toInt(value) {
            return parseInt(value);
        }

        /**
         * Converts value entered as number
         * or string to flat value.
         *
         * @param {String} value
         * @returns {Number}
         */
        function toFloat(value) {
            return parseFloat(value);
        }

        /**
         * Indicates whether the specified value is a string.
         *
         * @param  {*}   value
         * @return {Boolean}
         */
        function isString(value) {
            return typeof value === 'string';
        }

        /**
         * Indicates whether the specified value is an object.
         *
         * @param  {*} value
         * @return {Boolean}
         *
         * @see https://github.com/jashkenas/underscore
         */
        function isObject(value) {
            var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

            return type === 'function' || type === 'object' && !!value; // eslint-disable-line no-mixed-operators
        }

        /**
         * Indicates whether the specified value is a number.
         *
         * @param  {*} value
         * @return {Boolean}
         */
        function isNumber(value) {
            return typeof value === 'number';
        }

        /**
         * Indicates whether the specified value is a function.
         *
         * @param  {*} value
         * @return {Boolean}
         */
        function isFunction(value) {
            return typeof value === 'function';
        }

        /**
         * Indicates whether the specified value is undefined.
         *
         * @param  {*} value
         * @return {Boolean}
         */
        function isUndefined(value) {
            return typeof value === 'undefined';
        }

        /**
         * Indicates whether the specified value is an array.
         *
         * @param  {*} value
         * @return {Boolean}
         */
        function isArray(value) {
            return value.constructor === Array;
        }

        /**
         * Creates and initializes specified collection of extensions.
         * Each extension receives access to instance of glide and rest of components.
         *
         * @param {Object} glide
         * @param {Object} extensions
         *
         * @returns {Object}
         */
        function mount(glide, extensions, events) {
            var components = {};

            for (var name in extensions) {
                if (isFunction(extensions[name])) {
                    components[name] = extensions[name](glide, components, events);
                } else {
                    warn('Extension must be a function');
                }
            }

            for (var _name in components) {
                if (isFunction(components[_name].mount)) {
                    components[_name].mount();
                }
            }

            return components;
        }

        /**
         * Defines getter and setter property on the specified object.
         *
         * @param  {Object} obj         Object where property has to be defined.
         * @param  {String} prop        Name of the defined property.
         * @param  {Object} definition  Get and set definitions for the property.
         * @return {Void}
         */
        function define(obj, prop, definition) {
            Object.defineProperty(obj, prop, definition);
        }

        /**
         * Sorts aphabetically object keys.
         *
         * @param  {Object} obj
         * @return {Object}
         */
        function sortKeys(obj) {
            return Object.keys(obj).sort().reduce(function(r, k) {
                r[k] = obj[k];

                return r[k], r;
            }, {});
        }

        /**
         * Merges passed settings object with default options.
         *
         * @param  {Object} defaults
         * @param  {Object} settings
         * @return {Object}
         */
        function mergeOptions(defaults, settings) {
            var options = _extends({}, defaults, settings);

            // `Object.assign` do not deeply merge objects, so we
            // have to do it manually for every nested object
            // in options. Although it does not look smart,
            // it's smaller and faster than some fancy
            // merging deep-merge algorithm script.
            if (settings.hasOwnProperty('classes')) {
                options.classes = _extends({}, defaults.classes, settings.classes);

                if (settings.classes.hasOwnProperty('direction')) {
                    options.classes.direction = _extends({}, defaults.classes.direction, settings.classes.direction);
                }
            }

            if (settings.hasOwnProperty('breakpoints')) {
                options.breakpoints = _extends({}, defaults.breakpoints, settings.breakpoints);
            }

            return options;
        }

        var EventsBus = function() {
            /**
             * Construct a EventBus instance.
             *
             * @param {Object} events
             */
            function EventsBus() {
                var events = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                classCallCheck(this, EventsBus);

                this.events = events;
                this.hop = events.hasOwnProperty;
            }

            /**
             * Adds listener to the specifed event.
             *
             * @param {String|Array} event
             * @param {Function} handler
             */


            createClass(EventsBus, [{
                key: 'on',
                value: function on(event, handler) {
                    if (isArray(event)) {
                        for (var i = 0; i < event.length; i++) {
                            this.on(event[i], handler);
                        }
                    }

                    // Create the event's object if not yet created
                    if (!this.hop.call(this.events, event)) {
                        this.events[event] = [];
                    }

                    // Add the handler to queue
                    var index = this.events[event].push(handler) - 1;

                    // Provide handle back for removal of event
                    return {
                        remove: function remove() {
                            delete this.events[event][index];
                        }
                    };
                }

                /**
                 * Runs registered handlers for specified event.
                 *
                 * @param {String|Array} event
                 * @param {Object=} context
                 */

            }, {
                key: 'emit',
                value: function emit(event, context) {
                    if (isArray(event)) {
                        for (var i = 0; i < event.length; i++) {
                            this.emit(event[i], context);
                        }
                    }

                    // If the event doesn't exist, or there's no handlers in queue, just leave
                    if (!this.hop.call(this.events, event)) {
                        return;
                    }

                    // Cycle through events queue, fire!
                    this.events[event].forEach(function(item) {
                        item(context || {});
                    });
                }
            }]);
            return EventsBus;
        }();

        var Glide = function() {
            /**
             * Construct glide.
             *
             * @param  {String} selector
             * @param  {Object} options
             */
            function Glide(selector) {
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                classCallCheck(this, Glide);

                this._c = {};
                this._t = [];
                this._e = new EventsBus();

                this.disabled = false;
                this.selector = selector;
                this.settings = mergeOptions(defaults, options);
                this.index = this.settings.startAt;
            }

            /**
             * Initializes glide.
             *
             * @param {Object} extensions Collection of extensions to initialize.
             * @return {Glide}
             */


            createClass(Glide, [{
                key: 'mount',
                value: function mount$$1() {
                    var extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                    this._e.emit('mount.before');

                    if (isObject(extensions)) {
                        this._c = mount(this, extensions, this._e);
                    } else {
                        warn('You need to provide a object on `mount()`');
                    }

                    this._e.emit('mount.after');

                    return this;
                }

                /**
                 * Collects an instance `translate` transformers.
                 *
                 * @param  {Array} transformers Collection of transformers.
                 * @return {Void}
                 */

            }, {
                key: 'mutate',
                value: function mutate() {
                    var transformers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

                    if (isArray(transformers)) {
                        this._t = transformers;
                    } else {
                        warn('You need to provide a array on `mutate()`');
                    }

                    return this;
                }

                /**
                 * Updates glide with specified settings.
                 *
                 * @param {Object} settings
                 * @return {Glide}
                 */

            }, {
                key: 'update',
                value: function update() {
                    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                    this.settings = mergeOptions(this.settings, settings);

                    if (settings.hasOwnProperty('startAt')) {
                        this.index = settings.startAt;
                    }

                    this._e.emit('update');

                    return this;
                }

                /**
                 * Change slide with specified pattern. A pattern must be in the special format:
                 * `>` - Move one forward
                 * `<` - Move one backward
                 * `={i}` - Go to {i} zero-based slide (eq. '=1', will go to second slide)
                 * `>>` - Rewinds to end (last slide)
                 * `<<` - Rewinds to start (first slide)
                 *
                 * @param {String} pattern
                 * @return {Glide}
                 */

            }, {
                key: 'go',
                value: function go(pattern) {
                    this._c.Run.make(pattern);

                    return this;
                }

                /**
                 * Move track by specified distance.
                 *
                 * @param {String} distance
                 * @return {Glide}
                 */

            }, {
                key: 'move',
                value: function move(distance) {
                    this._c.Transition.disable();
                    this._c.Move.make(distance);

                    return this;
                }

                /**
                 * Destroy instance and revert all changes done by this._c.
                 *
                 * @return {Glide}
                 */

            }, {
                key: 'destroy',
                value: function destroy() {
                    this._e.emit('destroy');

                    return this;
                }

                /**
                 * Start instance autoplaying.
                 *
                 * @param {Boolean|Number} interval Run autoplaying with passed interval regardless of `autoplay` settings
                 * @return {Glide}
                 */

            }, {
                key: 'play',
                value: function play() {
                    var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

                    if (interval) {
                        this.settings.autoplay = interval;
                    }

                    this._e.emit('play');

                    return this;
                }

                /**
                 * Stop instance autoplaying.
                 *
                 * @return {Glide}
                 */

            }, {
                key: 'pause',
                value: function pause() {
                    this._e.emit('pause');

                    return this;
                }

                /**
                 * Sets glide into a idle status.
                 *
                 * @return {Glide}
                 */

            }, {
                key: 'disable',
                value: function disable() {
                    this.disabled = true;

                    return this;
                }

                /**
                 * Sets glide into a active status.
                 *
                 * @return {Glide}
                 */

            }, {
                key: 'enable',
                value: function enable() {
                    this.disabled = false;

                    return this;
                }

                /**
                 * Adds cuutom event listener with handler.
                 *
                 * @param  {String|Array} event
                 * @param  {Function} handler
                 * @return {Glide}
                 */

            }, {
                key: 'on',
                value: function on(event, handler) {
                    this._e.on(event, handler);

                    return this;
                }

                /**
                 * Checks if glide is a precised type.
                 *
                 * @param  {String} name
                 * @return {Boolean}
                 */

            }, {
                key: 'isType',
                value: function isType(name) {
                    return this.settings.type === name;
                }

                /**
                 * Gets value of the core options.
                 *
                 * @return {Object}
                 */

            }, {
                key: 'settings',
                get: function get$$1() {
                    return this._o;
                }

                /**
                 * Sets value of the core options.
                 *
                 * @param  {Object} o
                 * @return {Void}
                 */
                ,
                set: function set$$1(o) {
                    if (isObject(o)) {
                        this._o = o;
                    } else {
                        warn('Options must be an `object` instance.');
                    }
                }

                /**
                 * Gets current index of the slider.
                 *
                 * @return {Object}
                 */

            }, {
                key: 'index',
                get: function get$$1() {
                    return this._i;
                }

                /**
                 * Sets current index a slider.
                 *
                 * @return {Object}
                 */
                ,
                set: function set$$1(i) {
                    this._i = toInt(i);
                }

                /**
                 * Gets type name of the slider.
                 *
                 * @return {String}
                 */

            }, {
                key: 'type',
                get: function get$$1() {
                    return this.settings.type;
                }

                /**
                 * Gets value of the idle status.
                 *
                 * @return {Boolean}
                 */

            }, {
                key: 'disabled',
                get: function get$$1() {
                    return this._d;
                }

                /**
                 * Sets value of the idle status.
                 *
                 * @return {Boolean}
                 */
                ,
                set: function set$$1(status) {
                    this._d = !!status;
                }
            }]);
            return Glide;
        }();

        function Run(Glide, Components, Events) {
            var Run = {
                /**
                 * Initializes autorunning of the glide.
                 *
                 * @return {Void}
                 */
                mount: function mount() {
                    this._o = false;
                },


                /**
                 * Makes glides running based on the passed moving schema.
                 *
                 * @param {String} move
                 */
                make: function make(move) {
                    var _this = this;

                    if (!Glide.disabled) {
                        Glide.disable();

                        this.move = move;

                        Events.emit('run.before', this.move);

                        this.calculate();

                        Events.emit('run', this.move);

                        Components.Transition.after(function() {
                            if (_this.isStart()) {
                                Events.emit('run.start', _this.move);
                            }

                            if (_this.isEnd()) {
                                Events.emit('run.end', _this.move);
                            }

                            if (_this.isOffset('<') || _this.isOffset('>')) {
                                _this._o = false;

                                Events.emit('run.offset', _this.move);
                            }

                            Events.emit('run.after', _this.move);

                            Glide.enable();
                        });
                    }
                },


                /**
                 * Calculates current index based on defined move.
                 *
                 * @return {Void}
                 */
                calculate: function calculate() {
                    var move = this.move,
                        length = this.length;
                    var steps = move.steps,
                        direction = move.direction;


                    var countableSteps = isNumber(toInt(steps)) && toInt(steps) !== 0;

                    switch (direction) {
                        case '>':
                            if (steps === '>') {
                                Glide.index = length;
                            } else if (this.isEnd()) {
                                if (!(Glide.isType('slider') && !Glide.settings.rewind)) {
                                    this._o = true;

                                    Glide.index = 0;
                                }
                            } else if (countableSteps) {
                                Glide.index += Math.min(length - Glide.index, -toInt(steps));
                            } else {
                                Glide.index++;
                            }
                            break;

                        case '<':
                            if (steps === '<') {
                                Glide.index = 0;
                            } else if (this.isStart()) {
                                if (!(Glide.isType('slider') && !Glide.settings.rewind)) {
                                    this._o = true;

                                    Glide.index = length;
                                }
                            } else if (countableSteps) {
                                Glide.index -= Math.min(Glide.index, toInt(steps));
                            } else {
                                Glide.index--;
                            }
                            break;

                        case '=':
                            Glide.index = steps;
                            break;

                        default:
                            warn('Invalid direction pattern [' + direction + steps + '] has been used');
                            break;
                    }
                },


                /**
                 * Checks if we are on the first slide.
                 *
                 * @return {Boolean}
                 */
                isStart: function isStart() {
                    return Glide.index === 0;
                },


                /**
                 * Checks if we are on the last slide.
                 *
                 * @return {Boolean}
                 */
                isEnd: function isEnd() {
                    return Glide.index === this.length;
                },


                /**
                 * Checks if we are making a offset run.
                 *
                 * @param {String} direction
                 * @return {Boolean}
                 */
                isOffset: function isOffset(direction) {
                    return this._o && this.move.direction === direction;
                }
            };

            define(Run, 'move', {
                /**
                 * Gets value of the move schema.
                 *
                 * @returns {Object}
                 */
                get: function get() {
                    return this._m;
                },


                /**
                 * Sets value of the move schema.
                 *
                 * @returns {Object}
                 */
                set: function set(value) {
                    var step = value.substr(1);

                    this._m = {
                        direction: value.substr(0, 1),
                        steps: step ? toInt(step) ? toInt(step) : step : 0
                    };
                }
            });

            define(Run, 'length', {
                /**
                 * Gets value of the running distance based
                 * on zero-indexing number of slides.
                 *
                 * @return {Number}
                 */
                get: function get() {
                    var settings = Glide.settings;
                    var length = Components.Html.slides.length;

                    // If the `bound` option is acitve, a maximum running distance should be
                    // reduced by `perView` and `focusAt` settings. Running distance
                    // should end before creating an empty space after instance.

                    if (Glide.isType('slider') && settings.focusAt !== 'center' && settings.bound) {
                        return length - 1 - (toInt(settings.perView) - 1) + toInt(settings.focusAt);
                    }

                    return length - 1;
                }
            });

            define(Run, 'offset', {
                /**
                 * Gets status of the offsetting flag.
                 *
                 * @return {Boolean}
                 */
                get: function get() {
                    return this._o;
                }
            });

            return Run;
        }

        /**
         * Returns a current time.
         *
         * @return {Number}
         */
        function now() {
            return new Date().getTime();
        }

        /**
         * Returns a function, that, when invoked, will only be triggered
         * at most once during a given window of time.
         *
         * @param {Function} func
         * @param {Number} wait
         * @param {Object=} options
         * @return {Function}
         *
         * @see https://github.com/jashkenas/underscore
         */
        function throttle(func, wait, options) {
            var timeout = void 0,
                context = void 0,
                args = void 0,
                result = void 0;
            var previous = 0;
            if (!options) options = {};

            var later = function later() {
                previous = options.leading === false ? 0 : now();
                timeout = null;
                result = func.apply(context, args);
                if (!timeout) context = args = null;
            };

            var throttled = function throttled() {
                var at = now();
                if (!previous && options.leading === false) previous = at;
                var remaining = wait - (at - previous);
                context = this;
                args = arguments;
                if (remaining <= 0 || remaining > wait) {
                    if (timeout) {
                        clearTimeout(timeout);
                        timeout = null;
                    }
                    previous = at;
                    result = func.apply(context, args);
                    if (!timeout) context = args = null;
                } else if (!timeout && options.trailing !== false) {
                    timeout = setTimeout(later, remaining);
                }
                return result;
            };

            throttled.cancel = function() {
                clearTimeout(timeout);
                previous = 0;
                timeout = context = args = null;
            };

            return throttled;
        }

        var MARGIN_TYPE = {
            ltr: ['marginLeft', 'marginRight'],
            rtl: ['marginRight', 'marginLeft']
        };

        function Gaps(Glide, Components, Events) {
            var Gaps = {
                /**
                 * Applies gaps between slides. First and last
                 * slides do not receive it's edge margins.
                 *
                 * @param {HTMLCollection} slides
                 * @return {Void}
                 */
                apply: function apply(slides) {
                    for (var i = 0, len = slides.length; i < len; i++) {
                        var style = slides[i].style;
                        var direction = Components.Direction.value;

                        if (i !== 0) {
                            style[MARGIN_TYPE[direction][0]] = this.value / 2 + 'px';
                        } else {
                            style[MARGIN_TYPE[direction][0]] = '';
                        }

                        if (i !== slides.length - 1) {
                            style[MARGIN_TYPE[direction][1]] = this.value / 2 + 'px';
                        } else {
                            style[MARGIN_TYPE[direction][1]] = '';
                        }
                    }
                },


                /**
                 * Removes gaps from the slides.
                 *
                 * @param {HTMLCollection} slides
                 * @returns {Void}
                 */
                remove: function remove(slides) {
                    for (var i = 0, len = slides.length; i < len; i++) {
                        var style = slides[i].style;

                        style.marginLeft = '';
                        style.marginRight = '';
                    }
                }
            };

            define(Gaps, 'value', {
                /**
                 * Gets value of the gap.
                 *
                 * @returns {Number}
                 */
                get: function get() {
                    return toInt(Glide.settings.gap);
                }
            });

            define(Gaps, 'grow', {
                /**
                 * Gets additional dimentions value caused by gaps.
                 * Used to increase width of the slides wrapper.
                 *
                 * @returns {Number}
                 */
                get: function get() {
                    return Gaps.value * (Components.Sizes.length - 1);
                }
            });

            define(Gaps, 'reductor', {
                /**
                 * Gets reduction value caused by gaps.
                 * Used to subtract width of the slides.
                 *
                 * @returns {Number}
                 */
                get: function get() {
                    var perView = Glide.settings.perView;

                    return Gaps.value * (perView - 1) / perView;
                }
            });

            /**
             * Apply calculated gaps:
             * - after building, so slides (including clones) will receive proper margins
             * - on updating via API, to recalculate gaps with new options
             */
            Events.on(['build.after', 'update'], throttle(function() {
                Gaps.apply(Components.Html.wrapper.children);
            }, 30));

            /**
             * Remove gaps:
             * - on destroying to bring markup to its inital state
             */
            Events.on('destroy', function() {
                Gaps.remove(Components.Html.wrapper.children);
            });

            return Gaps;
        }

        /**
         * Finds siblings nodes of the passed node.
         *
         * @param  {Element} node
         * @return {Array}
         */
        function siblings(node) {
            if (node && node.parentNode) {
                var n = node.parentNode.firstChild;
                var matched = [];

                for (; n; n = n.nextSibling) {
                    if (n.nodeType === 1 && n !== node) {
                        matched.push(n);
                    }
                }

                return matched;
            }

            return [];
        }

        /**
         * Checks if passed node exist and is a valid element.
         *
         * @param  {Element} node
         * @return {Boolean}
         */
        function exist(node) {
            if (node && node instanceof window.HTMLElement) {
                return true;
            }

            return false;
        }

        var TRACK_SELECTOR = '[data-glide-el="track"]';

        function Html(Glide, Components) {
            var Html = {
                /**
                 * Setup slider HTML nodes.
                 *
                 * @param {Glide} glide
                 */
                mount: function mount() {
                    this.root = Glide.selector;
                    this.track = this.root.querySelector(TRACK_SELECTOR);
                    this.slides = Array.prototype.slice.call(this.wrapper.children).filter(function(slide) {
                        return !slide.classList.contains(Glide.settings.classes.cloneSlide);
                    });
                }
            };

            define(Html, 'root', {
                /**
                 * Gets node of the glide main element.
                 *
                 * @return {Object}
                 */
                get: function get() {
                    return Html._r;
                },


                /**
                 * Sets node of the glide main element.
                 *
                 * @return {Object}
                 */
                set: function set(r) {
                    if (isString(r)) {
                        r = document.querySelector(r);
                    }

                    if (exist(r)) {
                        Html._r = r;
                    } else {
                        warn('Root element must be a existing Html node');
                    }
                }
            });

            define(Html, 'track', {
                /**
                 * Gets node of the glide track with slides.
                 *
                 * @return {Object}
                 */
                get: function get() {
                    return Html._t;
                },


                /**
                 * Sets node of the glide track with slides.
                 *
                 * @return {Object}
                 */
                set: function set(t) {
                    if (exist(t)) {
                        Html._t = t;
                    } else {
                        warn('Could not find track element. Please use ' + TRACK_SELECTOR + ' attribute.');
                    }
                }
            });

            define(Html, 'wrapper', {
                /**
                 * Gets node of the slides wrapper.
                 *
                 * @return {Object}
                 */
                get: function get() {
                    return Html.track.children[0];
                }
            });

            return Html;
        }

        function Peek(Glide, Components, Events) {
            var Peek = {
                /**
                 * Setups how much to peek based on settings.
                 *
                 * @return {Void}
                 */
                mount: function mount() {
                    this.value = Glide.settings.peek;
                }
            };

            define(Peek, 'value', {
                /**
                 * Gets value of the peek.
                 *
                 * @returns {Number|Object}
                 */
                get: function get() {
                    return Peek._v;
                },


                /**
                 * Sets value of the peek.
                 *
                 * @param {Number|Object} value
                 * @return {Void}
                 */
                set: function set(value) {
                    if (isObject(value)) {
                        value.before = toInt(value.before);
                        value.after = toInt(value.after);
                    } else {
                        value = toInt(value);
                    }

                    Peek._v = value;
                }
            });

            define(Peek, 'reductor', {
                /**
                 * Gets reduction value caused by peek.
                 *
                 * @returns {Number}
                 */
                get: function get() {
                    var value = Peek.value;
                    var perView = Glide.settings.perView;

                    if (isObject(value)) {
                        return value.before / perView + value.after / perView;
                    }

                    return value * 2 / perView;
                }
            });

            /**
             * Recalculate peeking sizes on:
             * - when resizing window to update to proper percents
             */
            Events.on(['resize', 'update'], function() {
                Peek.mount();
            });

            return Peek;
        }

        function Move(Glide, Components, Events) {
            var Move = {
                /**
                 * Constructs move component.
                 *
                 * @returns {Void}
                 */
                mount: function mount() {
                    this._o = 0;
                },


                /**
                 * Calculates a movement value based on passed offset and currently active index.
                 *
                 * @param  {Number} offset
                 * @return {Void}
                 */
                make: function make() {
                    var _this = this;

                    var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

                    this.offset = offset;

                    Events.emit('move', {
                        movement: this.value
                    });

                    Components.Transition.after(function() {
                        Events.emit('move.after', {
                            movement: _this.value
                        });
                    });
                }
            };

            define(Move, 'offset', {
                /**
                 * Gets an offset value used to modify current translate.
                 *
                 * @return {Object}
                 */
                get: function get() {
                    return Move._o;
                },


                /**
                 * Sets an offset value used to modify current translate.
                 *
                 * @return {Object}
                 */
                set: function set(value) {
                    Move._o = !isUndefined(value) ? toInt(value) : 0;
                }
            });

            define(Move, 'translate', {
                /**
                 * Gets a raw movement value.
                 *
                 * @return {Number}
                 */
                get: function get() {
                    return Components.Sizes.slideWidth * Glide.index;
                }
            });

            define(Move, 'value', {
                /**
                 * Gets an actual movement value corrected by offset.
                 *
                 * @return {Number}
                 */
                get: function get() {
                    var offset = this.offset;
                    var translate = this.translate;

                    if (Components.Direction.is('rtl')) {
                        return translate + offset;
                    }

                    return translate - offset;
                }
            });

            /**
             * Make movement to proper slide on:
             * - before build, so glide will start at `startAt` index
             * - on each standard run to move to newly calculated index
             */
            Events.on(['build.before', 'run'], function() {
                Move.make();
            });

            return Move;
        }

        function Sizes(Glide, Components, Events) {
            var Sizes = {
                /**
                 * Setups dimentions of slides.
                 *
                 * @return {Void}
                 */
                setupSlides: function setupSlides() {
                    var width = this.slideWidth + 'px';
                    var slides = Components.Html.slides;

                    for (var i = 0; i < slides.length; i++) {
                        slides[i].style.width = width;
                    }
                },


                /**
                 * Setups dimentions of slides wrapper.
                 *
                 * @return {Void}
                 */
                setupWrapper: function setupWrapper(dimention) {
                    Components.Html.wrapper.style.width = this.wrapperSize + 'px';
                },


                /**
                 * Removes applied styles from HTML elements.
                 *
                 * @returns {Void}
                 */
                remove: function remove() {
                    var slides = Components.Html.slides;

                    for (var i = 0; i < slides.length; i++) {
                        slides[i].style.width = '';
                    }

                    Components.Html.wrapper.style.width = '';
                }
            };

            define(Sizes, 'length', {
                /**
                 * Gets count number of the slides.
                 *
                 * @return {Number}
                 */
                get: function get() {
                    return Components.Html.slides.length;
                }
            });

            define(Sizes, 'width', {
                /**
                 * Gets width value of the glide.
                 *
                 * @return {Number}
                 */
                get: function get() {
                    return Components.Html.root.offsetWidth;
                }
            });

            define(Sizes, 'wrapperSize', {
                /**
                 * Gets size of the slides wrapper.
                 *
                 * @return {Number}
                 */
                get: function get() {
                    return Sizes.slideWidth * Sizes.length + Components.Gaps.grow + Components.Clones.grow;
                }
            });

            define(Sizes, 'slideWidth', {
                /**
                 * Gets width value of the single slide.
                 *
                 * @return {Number}
                 */
                get: function get() {
                    return Sizes.width / Glide.settings.perView - Components.Peek.reductor - Components.Gaps.reductor;
                }
            });

            /**
             * Apply calculated glide's dimensions:
             * - before building, so other dimentions (e.g. translate) will be calculated propertly
             * - when resizing window to recalculate sildes dimensions
             * - on updating via API, to calculate dimensions based on new options
             */
            Events.on(['build.before', 'resize', 'update'], function() {
                Sizes.setupSlides();
                Sizes.setupWrapper();
            });

            /**
             * Remove calculated glide's dimensions:
             * - on destoting to bring markup to its inital state
             */
            Events.on('destroy', function() {
                Sizes.remove();
            });

            return Sizes;
        }

        function Build(Glide, Components, Events) {
            var Build = {
                /**
                 * Init glide building. Adds classes, sets
                 * dimensions and setups initial state.
                 *
                 * @return {Void}
                 */
                mount: function mount() {
                    Events.emit('build.before');

                    this.typeClass();
                    this.activeClass();

                    Events.emit('build.after');
                },


                /**
                 * Adds `type` class to the glide element.
                 *
                 * @return {Void}
                 */
                typeClass: function typeClass() {
                    Components.Html.root.classList.add(Glide.settings.classes[Glide.settings.type]);
                },


                /**
                 * Sets active class to current slide.
                 *
                 * @return {Void}
                 */
                activeClass: function activeClass() {
                    var classes = Glide.settings.classes;
                    var slide = Components.Html.slides[Glide.index];

                    if (slide) {
                        slide.classList.add(classes.activeSlide);

                        siblings(slide).forEach(function(sibling) {
                            sibling.classList.remove(classes.activeSlide);
                        });
                    }
                },


                /**
                 * Removes HTML classes applied at building.
                 *
                 * @return {Void}
                 */
                removeClasses: function removeClasses() {
                    var classes = Glide.settings.classes;

                    Components.Html.root.classList.remove(classes[Glide.settings.type]);

                    Components.Html.slides.forEach(function(sibling) {
                        sibling.classList.remove(classes.activeSlide);
                    });
                }
            };

            /**
             * Clear building classes:
             * - on destroying to bring HTML to its initial state
             * - on updating to remove classes before remounting component
             */
            Events.on(['destroy', 'update'], function() {
                Build.removeClasses();
            });

            /**
             * Remount component:
             * - on resizing of the window to calculate new dimentions
             * - on updating settings via API
             */
            Events.on(['resize', 'update'], function() {
                Build.mount();
            });

            /**
             * Swap active class of current slide:
             * - after each move to the new index
             */
            Events.on('move.after', function() {
                Build.activeClass();
            });

            return Build;
        }

        function Clones(Glide, Components, Events) {
            var Clones = {
                /**
                 * Create pattern map and collect slides to be cloned.
                 */
                mount: function mount() {
                    this.items = [];

                    if (Glide.isType('carousel')) {
                        this.items = this.collect();
                    }
                },


                /**
                 * Collect clones with pattern.
                 *
                 * @return {Void}
                 */
                collect: function collect() {
                    var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                    var slides = Components.Html.slides;
                    var _Glide$settings = Glide.settings,
                        perView = _Glide$settings.perView,
                        classes = _Glide$settings.classes;


                    var peekIncrementer = +!!Glide.settings.peek;
                    var part = perView + peekIncrementer;
                    var start = slides.slice(0, part);
                    var end = slides.slice(-part);

                    for (var r = 0; r < Math.max(1, Math.floor(perView / slides.length)); r++) {
                        for (var i = 0; i < start.length; i++) {
                            var clone = start[i].cloneNode(true);

                            clone.classList.add(classes.cloneSlide);

                            items.push(clone);
                        }

                        for (var _i = 0; _i < end.length; _i++) {
                            var _clone = end[_i].cloneNode(true);

                            _clone.classList.add(classes.cloneSlide);

                            items.unshift(_clone);
                        }
                    }

                    return items;
                },


                /**
                 * Append cloned slides with generated pattern.
                 *
                 * @return {Void}
                 */
                append: function append() {
                    var items = this.items;
                    var _Components$Html = Components.Html,
                        wrapper = _Components$Html.wrapper,
                        slides = _Components$Html.slides;


                    var half = Math.floor(items.length / 2);
                    var prepend = items.slice(0, half).reverse();
                    var append = items.slice(half, items.length);
                    var width = Components.Sizes.slideWidth + 'px';

                    for (var i = 0; i < append.length; i++) {
                        wrapper.appendChild(append[i]);
                    }

                    for (var _i2 = 0; _i2 < prepend.length; _i2++) {
                        wrapper.insertBefore(prepend[_i2], slides[0]);
                    }

                    for (var _i3 = 0; _i3 < items.length; _i3++) {
                        items[_i3].style.width = width;
                    }
                },


                /**
                 * Remove all cloned slides.
                 *
                 * @return {Void}
                 */
                remove: function remove() {
                    var items = this.items;


                    for (var i = 0; i < items.length; i++) {
                        Components.Html.wrapper.removeChild(items[i]);
                    }
                }
            };

            define(Clones, 'grow', {
                /**
                 * Gets additional dimentions value caused by clones.
                 *
                 * @return {Number}
                 */
                get: function get() {
                    return (Components.Sizes.slideWidth + Components.Gaps.value) * Clones.items.length;
                }
            });

            /**
             * Append additional slide's clones:
             * - while glide's type is `carousel`
             */
            Events.on('update', function() {
                Clones.remove();
                Clones.mount();
                Clones.append();
            });

            /**
             * Append additional slide's clones:
             * - while glide's type is `carousel`
             */
            Events.on('build.before', function() {
                if (Glide.isType('carousel')) {
                    Clones.append();
                }
            });

            /**
             * Remove clones HTMLElements:
             * - on destroying, to bring HTML to its initial state
             */
            Events.on('destroy', function() {
                Clones.remove();
            });

            return Clones;
        }

        var EventsBinder = function() {
            /**
             * Construct a EventsBinder instance.
             */
            function EventsBinder() {
                var listeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                classCallCheck(this, EventsBinder);

                this.listeners = listeners;
            }

            /**
             * Adds events listeners to arrows HTML elements.
             *
             * @param  {String|Array} events
             * @param  {Element|Window|Document} el
             * @param  {Function} closure
             * @param  {Boolean|Object} capture
             * @return {Void}
             */


            createClass(EventsBinder, [{
                key: 'on',
                value: function on(events, el, closure) {
                    var capture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

                    if (isString(events)) {
                        events = [events];
                    }

                    for (var i = 0; i < events.length; i++) {
                        this.listeners[events[i]] = closure;

                        el.addEventListener(events[i], this.listeners[events[i]], capture);
                    }
                }

                /**
                 * Removes event listeners from arrows HTML elements.
                 *
                 * @param  {String|Array} events
                 * @param  {Element|Window|Document} el
                 * @param  {Boolean|Object} capture
                 * @return {Void}
                 */

            }, {
                key: 'off',
                value: function off(events, el) {
                    var capture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

                    if (isString(events)) {
                        events = [events];
                    }

                    for (var i = 0; i < events.length; i++) {
                        el.removeEventListener(events[i], this.listeners[events[i]], capture);
                    }
                }

                /**
                 * Destroy collected listeners.
                 *
                 * @returns {Void}
                 */

            }, {
                key: 'destroy',
                value: function destroy() {
                    delete this.listeners;
                }
            }]);
            return EventsBinder;
        }();

        function Resize(Glide, Components, Events) {
            /**
             * Instance of the binder for DOM Events.
             *
             * @type {EventsBinder}
             */
            var Binder = new EventsBinder();

            var Resize = {
                /**
                 * Initializes window bindings.
                 */
                mount: function mount() {
                    this.bind();
                },


                /**
                 * Binds `rezsize` listener to the window.
                 * It's a costly event, so we are debouncing it.
                 *
                 * @return {Void}
                 */
                bind: function bind() {
                    Binder.on('resize', window, throttle(function() {
                        Events.emit('resize');
                    }, Glide.settings.throttle));
                },


                /**
                 * Unbinds listeners from the window.
                 *
                 * @return {Void}
                 */
                unbind: function unbind() {
                    Binder.off('resize', window);
                }
            };

            /**
             * Remove bindings from window:
             * - on destroying, to remove added EventListener
             */
            Events.on('destroy', function() {
                Resize.unbind();
                Binder.destroy();
            });

            return Resize;
        }

        var VALID_DIRECTIONS = ['ltr', 'rtl'];
        var FLIPED_MOVEMENTS = {
            '>': '<',
            '<': '>',
            '=': '='
        };

        function Direction(Glide, Components, Events) {
            var Direction = {
                /**
                 * Setups gap value based on settings.
                 *
                 * @return {Void}
                 */
                mount: function mount() {
                    this.value = Glide.settings.direction;
                },


                /**
                 * Resolves pattern based on direction value
                 *
                 * @param {String} pattern
                 * @returns {String}
                 */
                resolve: function resolve(pattern) {
                    var token = pattern.slice(0, 1);

                    if (this.is('rtl')) {
                        return pattern.split(token).join(FLIPED_MOVEMENTS[token]);
                    }

                    return pattern;
                },


                /**
                 * Checks value of direction mode.
                 *
                 * @param {String} direction
                 * @returns {Boolean}
                 */
                is: function is(direction) {
                    return this.value === direction;
                },


                /**
                 * Applies direction class to the root HTML element.
                 *
                 * @return {Void}
                 */
                addClass: function addClass() {
                    Components.Html.root.classList.add(Glide.settings.classes.direction[this.value]);
                },


                /**
                 * Removes direction class from the root HTML element.
                 *
                 * @return {Void}
                 */
                removeClass: function removeClass() {
                    Components.Html.root.classList.remove(Glide.settings.classes.direction[this.value]);
                }
            };

            define(Direction, 'value', {
                /**
                 * Gets value of the direction.
                 *
                 * @returns {Number}
                 */
                get: function get() {
                    return Direction._v;
                },


                /**
                 * Sets value of the direction.
                 *
                 * @param {String} value
                 * @return {Void}
                 */
                set: function set(value) {
                    if (VALID_DIRECTIONS.indexOf(value) > -1) {
                        Direction._v = value;
                    } else {
                        warn('Direction value must be `ltr` or `rtl`');
                    }
                }
            });

            /**
             * Clear direction class:
             * - on destroy to bring HTML to its initial state
             * - on update to remove class before reappling bellow
             */
            Events.on(['destroy', 'update'], function() {
                Direction.removeClass();
            });

            /**
             * Remount component:
             * - on update to reflect changes in direction value
             */
            Events.on('update', function() {
                Direction.mount();
            });

            /**
             * Apply direction class:
             * - before building to apply class for the first time
             * - on updating to reapply direction class that may changed
             */
            Events.on(['build.before', 'update'], function() {
                Direction.addClass();
            });

            return Direction;
        }

        /**
         * Reflects value of glide movement.
         *
         * @param  {Object} Glide
         * @param  {Object} Components
         * @return {Object}
         */
        function Rtl(Glide, Components) {
            return {
                /**
                 * Negates the passed translate if glide is in RTL option.
                 *
                 * @param  {Number} translate
                 * @return {Number}
                 */
                modify: function modify(translate) {
                    if (Components.Direction.is('rtl')) {
                        return -translate;
                    }

                    return translate;
                }
            };
        }

        /**
         * Updates glide movement with a `gap` settings.
         *
         * @param  {Object} Glide
         * @param  {Object} Components
         * @return {Object}
         */
        function Gap(Glide, Components) {
            return {
                /**
                 * Modifies passed translate value with number in the `gap` settings.
                 *
                 * @param  {Number} translate
                 * @return {Number}
                 */
                modify: function modify(translate) {
                    return translate + Components.Gaps.value * Glide.index;
                }
            };
        }

        /**
         * Updates glide movement with width of additional clones width.
         *
         * @param  {Object} Glide
         * @param  {Object} Components
         * @return {Object}
         */
        function Grow(Glide, Components) {
            return {
                /**
                 * Adds to the passed translate width of the half of clones.
                 *
                 * @param  {Number} translate
                 * @return {Number}
                 */
                modify: function modify(translate) {
                    return translate + Components.Clones.grow / 2;
                }
            };
        }

        /**
         * Updates glide movement with a `peek` settings.
         *
         * @param  {Object} Glide
         * @param  {Object} Components
         * @return {Object}
         */
        function Peeking(Glide, Components) {
            return {
                /**
                 * Modifies passed translate value with a `peek` setting.
                 *
                 * @param  {Number} translate
                 * @return {Number}
                 */
                modify: function modify(translate) {
                    if (Glide.settings.focusAt >= 0) {
                        var peek = Components.Peek.value;

                        if (isObject(peek)) {
                            return translate - peek.before;
                        }

                        return translate - peek;
                    }

                    return translate;
                }
            };
        }

        /**
         * Updates glide movement with a `focusAt` settings.
         *
         * @param  {Object} Glide
         * @param  {Object} Components
         * @return {Object}
         */
        function Focusing(Glide, Components) {
            return {
                /**
                 * Modifies passed translate value with index in the `focusAt` setting.
                 *
                 * @param  {Number} translate
                 * @return {Number}
                 */
                modify: function modify(translate) {
                    var gap = Components.Gaps.value;
                    var width = Components.Sizes.width;
                    var focusAt = Glide.settings.focusAt;
                    var slideWidth = Components.Sizes.slideWidth;

                    if (focusAt === 'center') {
                        return translate - (width / 2 - slideWidth / 2);
                    }

                    return translate - slideWidth * focusAt - gap * focusAt;
                }
            };
        }

        /**
         * Applies diffrent transformers on translate value.
         *
         * @param  {Object} Glide
         * @param  {Object} Components
         * @return {Object}
         */
        function mutator(Glide, Components, Events) {
            /**
             * Merge instance transformers with collection of default transformers.
             * It's important that the Rtl component be last on the list,
             * so it reflects all previous transformations.
             *
             * @type {Array}
             */
            var TRANSFORMERS = [Gap, Grow, Peeking, Focusing].concat(Glide._t, [Rtl]);

            return {
                /**
                 * Piplines translate value with registered transformers.
                 *
                 * @param  {Number} translate
                 * @return {Number}
                 */
                mutate: function mutate(translate) {
                    for (var i = 0; i < TRANSFORMERS.length; i++) {
                        var transformer = TRANSFORMERS[i];

                        if (isFunction(transformer) && isFunction(transformer().modify)) {
                            translate = transformer(Glide, Components, Events).modify(translate);
                        } else {
                            warn('Transformer should be a function that returns an object with `modify()` method');
                        }
                    }

                    return translate;
                }
            };
        }

        function Translate(Glide, Components, Events) {
            var Translate = {
                /**
                 * Sets value of translate on HTML element.
                 *
                 * @param {Number} value
                 * @return {Void}
                 */
                set: function set(value) {
                    var transform = mutator(Glide, Components).mutate(value);

                    Components.Html.wrapper.style.transform = 'translate3d(' + -1 * transform + 'px, 0px, 0px)';
                },


                /**
                 * Removes value of translate from HTML element.
                 *
                 * @return {Void}
                 */
                remove: function remove() {
                    Components.Html.wrapper.style.transform = '';
                }
            };

            /**
             * Set new translate value:
             * - on move to reflect index change
             * - on updating via API to reflect possible changes in options
             */
            Events.on('move', function(context) {
                var gap = Components.Gaps.value;
                var length = Components.Sizes.length;
                var width = Components.Sizes.slideWidth;

                if (Glide.isType('carousel') && Components.Run.isOffset('<')) {
                    Components.Transition.after(function() {
                        Events.emit('translate.jump');

                        Translate.set(width * (length - 1));
                    });

                    return Translate.set(-width - gap * length);
                }

                if (Glide.isType('carousel') && Components.Run.isOffset('>')) {
                    Components.Transition.after(function() {
                        Events.emit('translate.jump');

                        Translate.set(0);
                    });

                    return Translate.set(width * length + gap * length);
                }

                return Translate.set(context.movement);
            });

            /**
             * Remove translate:
             * - on destroying to bring markup to its inital state
             */
            Events.on('destroy', function() {
                Translate.remove();
            });

            return Translate;
        }

        function Transition(Glide, Components, Events) {
            /**
             * Holds inactivity status of transition.
             * When true transition is not applied.
             *
             * @type {Boolean}
             */
            var disabled = false;

            var Transition = {
                /**
                 * Composes string of the CSS transition.
                 *
                 * @param {String} property
                 * @return {String}
                 */
                compose: function compose(property) {
                    var settings = Glide.settings;

                    if (!disabled) {
                        return property + ' ' + this.duration + 'ms ' + settings.animationTimingFunc;
                    }

                    return property + ' 0ms ' + settings.animationTimingFunc;
                },


                /**
                 * Sets value of transition on HTML element.
                 *
                 * @param {String=} property
                 * @return {Void}
                 */
                set: function set() {
                    var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';

                    Components.Html.wrapper.style.transition = this.compose(property);
                },


                /**
                 * Removes value of transition from HTML element.
                 *
                 * @return {Void}
                 */
                remove: function remove() {
                    Components.Html.wrapper.style.transition = '';
                },


                /**
                 * Runs callback after animation.
                 *
                 * @param  {Function} callback
                 * @return {Void}
                 */
                after: function after(callback) {
                    setTimeout(function() {
                        callback();
                    }, this.duration);
                },


                /**
                 * Enable transition.
                 *
                 * @return {Void}
                 */
                enable: function enable() {
                    disabled = false;

                    this.set();
                },


                /**
                 * Disable transition.
                 *
                 * @return {Void}
                 */
                disable: function disable() {
                    disabled = true;

                    this.set();
                }
            };

            define(Transition, 'duration', {
                /**
                 * Gets duration of the transition based
                 * on currently running animation type.
                 *
                 * @return {Number}
                 */
                get: function get() {
                    var settings = Glide.settings;

                    if (Glide.isType('slider') && Components.Run.offset) {
                        return settings.rewindDuration;
                    }

                    return settings.animationDuration;
                }
            });

            /**
             * Set transition `style` value:
             * - on each moving, because it may be cleared by offset move
             */
            Events.on('move', function() {
                Transition.set();
            });

            /**
             * Disable transition:
             * - before initial build to avoid transitioning from `0` to `startAt` index
             * - while resizing window and recalculating dimentions
             * - on jumping from offset transition at start and end edges in `carousel` type
             */
            Events.on(['build.before', 'resize', 'translate.jump'], function() {
                Transition.disable();
            });

            /**
             * Enable transition:
             * - on each running, because it may be disabled by offset move
             */
            Events.on('run', function() {
                Transition.enable();
            });

            /**
             * Remove transition:
             * - on destroying to bring markup to its inital state
             */
            Events.on('destroy', function() {
                Transition.remove();
            });

            return Transition;
        }

        /**
         * Test via a getter in the options object to see
         * if the passive property is accessed.
         *
         * @see https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
         */

        var supportsPassive = false;

        try {
            var opts = Object.defineProperty({}, 'passive', {
                get: function get() {
                    supportsPassive = true;
                }
            });

            window.addEventListener('testPassive', null, opts);
            window.removeEventListener('testPassive', null, opts);
        } catch (e) {}

        var supportsPassive$1 = supportsPassive;

        var START_EVENTS = ['touchstart', 'mousedown'];
        var MOVE_EVENTS = ['touchmove', 'mousemove'];
        var END_EVENTS = ['touchend', 'touchcancel', 'mouseup', 'mouseleave'];
        var MOUSE_EVENTS = ['mousedown', 'mousemove', 'mouseup', 'mouseleave'];

        function Swipe(Glide, Components, Events) {
            /**
             * Instance of the binder for DOM Events.
             *
             * @type {EventsBinder}
             */
            var Binder = new EventsBinder();

            var swipeSin = 0;
            var swipeStartX = 0;
            var swipeStartY = 0;
            var disabled = false;
            var capture = supportsPassive$1 ? { passive: true } : false;

            var Swipe = {
                /**
                 * Initializes swipe bindings.
                 *
                 * @return {Void}
                 */
                mount: function mount() {
                    this.bindSwipeStart();
                },


                /**
                 * Handler for `swipestart` event. Calculates entry points of the user's tap.
                 *
                 * @param {Object} event
                 * @return {Void}
                 */
                start: function start(event) {
                    if (!disabled && !Glide.disabled) {
                        this.disable();

                        var swipe = this.touches(event);

                        swipeSin = null;
                        swipeStartX = toInt(swipe.pageX);
                        swipeStartY = toInt(swipe.pageY);

                        this.bindSwipeMove();
                        this.bindSwipeEnd();

                        Events.emit('swipe.start');
                    }
                },


                /**
                 * Handler for `swipemove` event. Calculates user's tap angle and distance.
                 *
                 * @param {Object} event
                 */
                move: function move(event) {
                    if (!Glide.disabled) {
                        var _Glide$settings = Glide.settings,
                            touchAngle = _Glide$settings.touchAngle,
                            touchRatio = _Glide$settings.touchRatio,
                            classes = _Glide$settings.classes;


                        var swipe = this.touches(event);

                        var subExSx = toInt(swipe.pageX) - swipeStartX;
                        var subEySy = toInt(swipe.pageY) - swipeStartY;
                        var powEX = Math.abs(subExSx << 2);
                        var powEY = Math.abs(subEySy << 2);
                        var swipeHypotenuse = Math.sqrt(powEX + powEY);
                        var swipeCathetus = Math.sqrt(powEY);

                        swipeSin = Math.asin(swipeCathetus / swipeHypotenuse);

                        if (swipeSin * 180 / Math.PI < touchAngle) {
                            event.stopPropagation();

                            Components.Move.make(subExSx * toFloat(touchRatio));

                            Components.Html.root.classList.add(classes.dragging);

                            Events.emit('swipe.move');
                        } else {
                            return false;
                        }
                    }
                },


                /**
                 * Handler for `swipeend` event. Finitializes user's tap and decides about glide move.
                 *
                 * @param {Object} event
                 * @return {Void}
                 */
                end: function end(event) {
                    if (!Glide.disabled) {
                        var settings = Glide.settings;

                        var swipe = this.touches(event);
                        var threshold = this.threshold(event);

                        var swipeDistance = swipe.pageX - swipeStartX;
                        var swipeDeg = swipeSin * 180 / Math.PI;
                        var steps = Math.round(swipeDistance / Components.Sizes.slideWidth);

                        this.enable();

                        if (swipeDistance > threshold && swipeDeg < settings.touchAngle) {
                            // While swipe is positive and greater than threshold move backward.
                            if (settings.perTouch) {
                                steps = Math.min(steps, toInt(settings.perTouch));
                            }

                            if (Components.Direction.is('rtl')) {
                                steps = -steps;
                            }

                            Components.Run.make(Components.Direction.resolve('<' + steps));
                        } else if (swipeDistance < -threshold && swipeDeg < settings.touchAngle) {
                            // While swipe is negative and lower than negative threshold move forward.
                            if (settings.perTouch) {
                                steps = Math.max(steps, -toInt(settings.perTouch));
                            }

                            if (Components.Direction.is('rtl')) {
                                steps = -steps;
                            }

                            Components.Run.make(Components.Direction.resolve('>' + steps));
                        } else {
                            // While swipe don't reach distance apply previous transform.
                            Components.Move.make();
                        }

                        Components.Html.root.classList.remove(settings.classes.dragging);

                        this.unbindSwipeMove();
                        this.unbindSwipeEnd();

                        Events.emit('swipe.end');
                    }
                },


                /**
                 * Binds swipe's starting event.
                 *
                 * @return {Void}
                 */
                bindSwipeStart: function bindSwipeStart() {
                    var _this = this;

                    var settings = Glide.settings;

                    if (settings.swipeThreshold) {
                        Binder.on(START_EVENTS[0], Components.Html.wrapper, function(event) {
                            _this.start(event);
                        }, capture);
                    }

                    if (settings.dragThreshold) {
                        Binder.on(START_EVENTS[1], Components.Html.wrapper, function(event) {
                            _this.start(event);
                        }, capture);
                    }
                },


                /**
                 * Unbinds swipe's starting event.
                 *
                 * @return {Void}
                 */
                unbindSwipeStart: function unbindSwipeStart() {
                    Binder.off(START_EVENTS[0], Components.Html.wrapper, capture);
                    Binder.off(START_EVENTS[1], Components.Html.wrapper, capture);
                },


                /**
                 * Binds swipe's moving event.
                 *
                 * @return {Void}
                 */
                bindSwipeMove: function bindSwipeMove() {
                    var _this2 = this;

                    Binder.on(MOVE_EVENTS, Components.Html.wrapper, throttle(function(event) {
                        _this2.move(event);
                    }, Glide.settings.throttle), capture);
                },


                /**
                 * Unbinds swipe's moving event.
                 *
                 * @return {Void}
                 */
                unbindSwipeMove: function unbindSwipeMove() {
                    Binder.off(MOVE_EVENTS, Components.Html.wrapper, capture);
                },


                /**
                 * Binds swipe's ending event.
                 *
                 * @return {Void}
                 */
                bindSwipeEnd: function bindSwipeEnd() {
                    var _this3 = this;

                    Binder.on(END_EVENTS, Components.Html.wrapper, function(event) {
                        _this3.end(event);
                    });
                },


                /**
                 * Unbinds swipe's ending event.
                 *
                 * @return {Void}
                 */
                unbindSwipeEnd: function unbindSwipeEnd() {
                    Binder.off(END_EVENTS, Components.Html.wrapper);
                },


                /**
                 * Normalizes event touches points accorting to different types.
                 *
                 * @param {Object} event
                 */
                touches: function touches(event) {
                    if (MOUSE_EVENTS.indexOf(event.type) > -1) {
                        return event;
                    }

                    return event.touches[0] || event.changedTouches[0];
                },


                /**
                 * Gets value of minimum swipe distance settings based on event type.
                 *
                 * @return {Number}
                 */
                threshold: function threshold(event) {
                    var settings = Glide.settings;

                    if (MOUSE_EVENTS.indexOf(event.type) > -1) {
                        return settings.dragThreshold;
                    }

                    return settings.swipeThreshold;
                },


                /**
                 * Enables swipe event.
                 *
                 * @return {self}
                 */
                enable: function enable() {
                    disabled = false;

                    Components.Transition.enable();

                    return this;
                },


                /**
                 * Disables swipe event.
                 *
                 * @return {self}
                 */
                disable: function disable() {
                    disabled = true;

                    Components.Transition.disable();

                    return this;
                }
            };

            /**
             * Add component class:
             * - after initial building
             */
            Events.on('build.after', function() {
                Components.Html.root.classList.add(Glide.settings.classes.swipeable);
            });

            /**
             * Remove swiping bindings:
             * - on destroying, to remove added EventListeners
             */
            Events.on('destroy', function() {
                Swipe.unbindSwipeStart();
                Swipe.unbindSwipeMove();
                Swipe.unbindSwipeEnd();
                Binder.destroy();
            });

            return Swipe;
        }

        function Images(Glide, Components, Events) {
            /**
             * Instance of the binder for DOM Events.
             *
             * @type {EventsBinder}
             */
            var Binder = new EventsBinder();

            var Images = {
                /**
                 * Binds listener to glide wrapper.
                 *
                 * @return {Void}
                 */
                mount: function mount() {
                    this.bind();
                },


                /**
                 * Binds `dragstart` event on wrapper to prevent dragging images.
                 *
                 * @return {Void}
                 */
                bind: function bind() {
                    Binder.on('dragstart', Components.Html.wrapper, this.dragstart);
                },


                /**
                 * Unbinds `dragstart` event on wrapper.
                 *
                 * @return {Void}
                 */
                unbind: function unbind() {
                    Binder.off('dragstart', Components.Html.wrapper);
                },


                /**
                 * Event handler. Prevents dragging.
                 *
                 * @return {Void}
                 */
                dragstart: function dragstart(event) {
                    event.preventDefault();
                }
            };

            /**
             * Remove bindings from images:
             * - on destroying, to remove added EventListeners
             */
            Events.on('destroy', function() {
                Images.unbind();
                Binder.destroy();
            });

            return Images;
        }

        function Anchors(Glide, Components, Events) {
            /**
             * Instance of the binder for DOM Events.
             *
             * @type {EventsBinder}
             */
            var Binder = new EventsBinder();

            /**
             * Holds detaching status of anchors.
             * Prevents detaching of already detached anchors.
             *
             * @private
             * @type {Boolean}
             */
            var detached = false;

            /**
             * Holds preventing status of anchors.
             * If `true` redirection after click will be disabled.
             *
             * @private
             * @type {Boolean}
             */
            var prevented = false;

            var Anchors = {
                /**
                 * Setups a initial state of anchors component.
                 *
                 * @returns {Void}
                 */
                mount: function mount() {
                    /**
                     * Holds collection of anchors elements.
                     *
                     * @private
                     * @type {HTMLCollection}
                     */
                    this._a = Components.Html.wrapper.querySelectorAll('a');

                    this.bind();
                },


                /**
                 * Binds events to anchors inside a track.
                 *
                 * @return {Void}
                 */
                bind: function bind() {
                    Binder.on('click', Components.Html.wrapper, this.click);
                },


                /**
                 * Unbinds events attached to anchors inside a track.
                 *
                 * @return {Void}
                 */
                unbind: function unbind() {
                    Binder.off('click', Components.Html.wrapper);
                },


                /**
                 * Handler for click event. Prevents clicks when glide is in `prevent` status.
                 *
                 * @param  {Object} event
                 * @return {Void}
                 */
                click: function click(event) {
                    if (prevented) {
                        event.stopPropagation();
                        event.preventDefault();
                    }
                },


                /**
                 * Detaches anchors click event inside glide.
                 *
                 * @return {self}
                 */
                detach: function detach() {
                    prevented = true;

                    if (!detached) {
                        for (var i = 0; i < this.items.length; i++) {
                            this.items[i].draggable = false;

                            this.items[i].setAttribute('data-href', this.items[i].getAttribute('href'));

                            this.items[i].removeAttribute('href');
                        }

                        detached = true;
                    }

                    return this;
                },


                /**
                 * Attaches anchors click events inside glide.
                 *
                 * @return {self}
                 */
                attach: function attach() {
                    prevented = false;

                    if (detached) {
                        for (var i = 0; i < this.items.length; i++) {
                            this.items[i].draggable = true;

                            this.items[i].setAttribute('href', this.items[i].getAttribute('data-href'));
                        }

                        detached = false;
                    }

                    return this;
                }
            };

            define(Anchors, 'items', {
                /**
                 * Gets collection of the arrows HTML elements.
                 *
                 * @return {HTMLElement[]}
                 */
                get: function get() {
                    return Anchors._a;
                }
            });

            /**
             * Detach anchors inside slides:
             * - on swiping, so they won't redirect to its `href` attributes
             */
            Events.on('swipe.move', function() {
                Anchors.detach();
            });

            /**
             * Attach anchors inside slides:
             * - after swiping and transitions ends, so they can redirect after click again
             */
            Events.on('swipe.end', function() {
                Components.Transition.after(function() {
                    Anchors.attach();
                });
            });

            /**
             * Unbind anchors inside slides:
             * - on destroying, to bring anchors to its initial state
             */
            Events.on('destroy', function() {
                Anchors.attach();
                Anchors.unbind();
                Binder.destroy();
            });

            return Anchors;
        }

        var NAV_SELECTOR = '[data-glide-el="controls[nav]"]';
        var CONTROLS_SELECTOR = '[data-glide-el^="controls"]';

        function Controls(Glide, Components, Events) {
            /**
             * Instance of the binder for DOM Events.
             *
             * @type {EventsBinder}
             */
            var Binder = new EventsBinder();

            var capture = supportsPassive$1 ? { passive: true } : false;

            var Controls = {
                /**
                 * Inits arrows. Binds events listeners
                 * to the arrows HTML elements.
                 *
                 * @return {Void}
                 */
                mount: function mount() {
                    /**
                     * Collection of navigation HTML elements.
                     *
                     * @private
                     * @type {HTMLCollection}
                     */
                    this._n = Components.Html.root.querySelectorAll(NAV_SELECTOR);

                    /**
                     * Collection of controls HTML elements.
                     *
                     * @private
                     * @type {HTMLCollection}
                     */
                    this._c = Components.Html.root.querySelectorAll(CONTROLS_SELECTOR);

                    this.addBindings();
                },


                /**
                 * Sets active class to current slide.
                 *
                 * @return {Void}
                 */
                setActive: function setActive() {
                    for (var i = 0; i < this._n.length; i++) {
                        this.addClass(this._n[i].children);
                    }
                },


                /**
                 * Removes active class to current slide.
                 *
                 * @return {Void}
                 */
                removeActive: function removeActive() {
                    for (var i = 0; i < this._n.length; i++) {
                        this.removeClass(this._n[i].children);
                    }
                },


                /**
                 * Toggles active class on items inside navigation.
                 *
                 * @param  {HTMLElement} controls
                 * @return {Void}
                 */
                addClass: function addClass(controls) {
                    var settings = Glide.settings;
                    var item = controls[Glide.index];

                    if (item) {
                        item.classList.add(settings.classes.activeNav);

                        siblings(item).forEach(function(sibling) {
                            sibling.classList.remove(settings.classes.activeNav);
                        });
                    }
                },


                /**
                 * Removes active class from active control.
                 *
                 * @param  {HTMLElement} controls
                 * @return {Void}
                 */
                removeClass: function removeClass(controls) {
                    var item = controls[Glide.index];

                    if (item) {
                        item.classList.remove(Glide.settings.classes.activeNav);
                    }
                },


                /**
                 * Adds handles to the each group of controls.
                 *
                 * @return {Void}
                 */
                addBindings: function addBindings() {
                    for (var i = 0; i < this._c.length; i++) {
                        this.bind(this._c[i].children);
                    }
                },


                /**
                 * Removes handles from the each group of controls.
                 *
                 * @return {Void}
                 */
                removeBindings: function removeBindings() {
                    for (var i = 0; i < this._c.length; i++) {
                        this.unbind(this._c[i].children);
                    }
                },


                /**
                 * Binds events to arrows HTML elements.
                 *
                 * @param {HTMLCollection} elements
                 * @return {Void}
                 */
                bind: function bind(elements) {
                    for (var i = 0; i < elements.length; i++) {
                        Binder.on('click', elements[i], this.click);
                        Binder.on('touchstart', elements[i], this.click, capture);
                    }
                },


                /**
                 * Unbinds events binded to the arrows HTML elements.
                 *
                 * @param {HTMLCollection} elements
                 * @return {Void}
                 */
                unbind: function unbind(elements) {
                    for (var i = 0; i < elements.length; i++) {
                        Binder.off(['click', 'touchstart'], elements[i]);
                    }
                },


                /**
                 * Handles `click` event on the arrows HTML elements.
                 * Moves slider in driection precised in
                 * `data-glide-dir` attribute.
                 *
                 * @param {Object} event
                 * @return {Void}
                 */
                click: function click(event) {
                    event.preventDefault();

                    Components.Run.make(Components.Direction.resolve(event.currentTarget.getAttribute('data-glide-dir')));
                }
            };

            define(Controls, 'items', {
                /**
                 * Gets collection of the controls HTML elements.
                 *
                 * @return {HTMLElement[]}
                 */
                get: function get() {
                    return Controls._c;
                }
            });

            /**
             * Swap active class of current navigation item:
             * - after mounting to set it to initial index
             * - after each move to the new index
             */
            Events.on(['mount.after', 'move.after'], function() {
                Controls.setActive();
            });

            /**
             * Remove bindings and HTML Classes:
             * - on destroying, to bring markup to its initial state
             */
            Events.on('destroy', function() {
                Controls.removeBindings();
                Controls.removeActive();
                Binder.destroy();
            });

            return Controls;
        }

        function Keyboard(Glide, Components, Events) {
            /**
             * Instance of the binder for DOM Events.
             *
             * @type {EventsBinder}
             */
            var Binder = new EventsBinder();

            var Keyboard = {
                /**
                 * Binds keyboard events on component mount.
                 *
                 * @return {Void}
                 */
                mount: function mount() {
                    if (Glide.settings.keyboard) {
                        this.bind();
                    }
                },


                /**
                 * Adds keyboard press events.
                 *
                 * @return {Void}
                 */
                bind: function bind() {
                    Binder.on('keyup', document, this.press);
                },


                /**
                 * Removes keyboard press events.
                 *
                 * @return {Void}
                 */
                unbind: function unbind() {
                    Binder.off('keyup', document);
                },


                /**
                 * Handles keyboard's arrows press and moving glide foward and backward.
                 *
                 * @param  {Object} event
                 * @return {Void}
                 */
                press: function press(event) {
                    if (event.keyCode === 39) {
                        Components.Run.make(Components.Direction.resolve('>'));
                    }

                    if (event.keyCode === 37) {
                        Components.Run.make(Components.Direction.resolve('<'));
                    }
                }
            };

            /**
             * Remove bindings from keyboard:
             * - on destroying to remove added events
             * - on updating to remove events before remounting
             */
            Events.on(['destroy', 'update'], function() {
                Keyboard.unbind();
            });

            /**
             * Remount component
             * - on updating to reflect potential changes in settings
             */
            Events.on('update', function() {
                Keyboard.mount();
            });

            /**
             * Destroy binder:
             * - on destroying to remove listeners
             */
            Events.on('destroy', function() {
                Binder.destroy();
            });

            return Keyboard;
        }

        function Autoplay(Glide, Components, Events) {
            /**
             * Instance of the binder for DOM Events.
             *
             * @type {EventsBinder}
             */
            var Binder = new EventsBinder();

            var Autoplay = {
                /**
                 * Initializes autoplaying and events.
                 *
                 * @return {Void}
                 */
                mount: function mount() {
                    this.start();

                    if (Glide.settings.hoverpause) {
                        this.bind();
                    }
                },


                /**
                 * Starts autoplaying in configured interval.
                 *
                 * @param {Boolean|Number} force Run autoplaying with passed interval regardless of `autoplay` settings
                 * @return {Void}
                 */
                start: function start() {
                    var _this = this;

                    if (Glide.settings.autoplay) {
                        if (isUndefined(this._i)) {
                            this._i = setInterval(function() {
                                _this.stop();

                                Components.Run.make('>');

                                _this.start();
                            }, this.time);
                        }
                    }
                },


                /**
                 * Stops autorunning of the glide.
                 *
                 * @return {Void}
                 */
                stop: function stop() {
                    this._i = clearInterval(this._i);
                },


                /**
                 * Stops autoplaying while mouse is over glide's area.
                 *
                 * @return {Void}
                 */
                bind: function bind() {
                    var _this2 = this;

                    Binder.on('mouseover', Components.Html.root, function() {
                        _this2.stop();
                    });

                    Binder.on('mouseout', Components.Html.root, function() {
                        _this2.start();
                    });
                },


                /**
                 * Unbind mouseover events.
                 *
                 * @returns {Void}
                 */
                unbind: function unbind() {
                    Binder.off(['mouseover', 'mouseout'], Components.Html.root);
                }
            };

            define(Autoplay, 'time', {
                /**
                 * Gets time period value for the autoplay interval. Prioritizes
                 * times in `data-glide-autoplay` attrubutes over options.
                 *
                 * @return {Number}
                 */
                get: function get() {
                    var autoplay = Components.Html.slides[Glide.index].getAttribute('data-glide-autoplay');

                    if (autoplay) {
                        return toInt(autoplay);
                    }

                    return toInt(Glide.settings.autoplay);
                }
            });

            /**
             * Stop autoplaying and unbind events:
             * - on destroying, to clear defined interval
             * - on updating via API to reset interval that may changed
             */
            Events.on(['destroy', 'update'], function() {
                Autoplay.unbind();
            });

            /**
             * Stop autoplaying:
             * - before each run, to restart autoplaying
             * - on pausing via API
             * - on destroying, to clear defined interval
             * - while starting a swipe
             * - on updating via API to reset interval that may changed
             */
            Events.on(['run.before', 'pause', 'destroy', 'swipe.start', 'update'], function() {
                Autoplay.stop();
            });

            /**
             * Start autoplaying:
             * - after each run, to restart autoplaying
             * - on playing via API
             * - while ending a swipe
             */
            Events.on(['run.after', 'play', 'swipe.end'], function() {
                Autoplay.start();
            });

            /**
             * Remount autoplaying:
             * - on updating via API to reset interval that may changed
             */
            Events.on('update', function() {
                Autoplay.mount();
            });

            /**
             * Destroy a binder:
             * - on destroying glide instance to clearup listeners
             */
            Events.on('destroy', function() {
                Binder.destroy();
            });

            return Autoplay;
        }

        /**
         * Sorts keys of breakpoint object so they will be ordered from lower to bigger.
         *
         * @param {Object} points
         * @returns {Object}
         */
        function sortBreakpoints(points) {
            if (isObject(points)) {
                return sortKeys(points);
            } else {
                warn('Breakpoints option must be an object');
            }

            return {};
        }

        function Breakpoints(Glide, Components, Events) {
            /**
             * Instance of the binder for DOM Events.
             *
             * @type {EventsBinder}
             */
            var Binder = new EventsBinder();

            /**
             * Holds reference to settings.
             *
             * @type {Object}
             */
            var settings = Glide.settings;

            /**
             * Holds reference to breakpoints object in settings. Sorts breakpoints
             * from smaller to larger. It is required in order to proper
             * matching currently active breakpoint settings.
             *
             * @type {Object}
             */
            var points = sortBreakpoints(settings.breakpoints);

            /**
             * Cache initial settings before overwritting.
             *
             * @type {Object}
             */
            var defaults = _extends({}, settings);

            var Breakpoints = {
                /**
                 * Matches settings for currectly matching media breakpoint.
                 *
                 * @param {Object} points
                 * @returns {Object}
                 */
                match: function match(points) {
                    if (typeof window.matchMedia !== 'undefined') {
                        for (var point in points) {
                            if (points.hasOwnProperty(point)) {
                                if (window.matchMedia('(max-width: ' + point + 'px)').matches) {
                                    return points[point];
                                }
                            }
                        }
                    }

                    return defaults;
                }
            };

            /**
             * Overwrite instance settings with currently matching breakpoint settings.
             * This happens right after component initialization.
             */
            _extends(settings, Breakpoints.match(points));

            /**
             * Update glide with settings of matched brekpoint:
             * - window resize to update slider
             */
            Binder.on('resize', window, throttle(function() {
                Glide.settings = mergeOptions(settings, Breakpoints.match(points));
            }, Glide.settings.throttle));

            /**
             * Resort and update default settings:
             * - on reinit via API, so breakpoint matching will be performed with options
             */
            Events.on('update', function() {
                points = sortBreakpoints(points);

                defaults = _extends({}, settings);
            });

            /**
             * Unbind resize listener:
             * - on destroying, to bring markup to its initial state
             */
            Events.on('destroy', function() {
                Binder.off('resize', window);
            });

            return Breakpoints;
        }

        var COMPONENTS = {
            // Required
            Html: Html,
            Translate: Translate,
            Transition: Transition,
            Direction: Direction,
            Peek: Peek,
            Sizes: Sizes,
            Gaps: Gaps,
            Move: Move,
            Clones: Clones,
            Resize: Resize,
            Build: Build,
            Run: Run,

            // Optional
            Swipe: Swipe,
            Images: Images,
            Anchors: Anchors,
            Controls: Controls,
            Keyboard: Keyboard,
            Autoplay: Autoplay,
            Breakpoints: Breakpoints
        };

        var Glide$1 = function(_Core) {
            inherits(Glide$$1, _Core);

            function Glide$$1() {
                classCallCheck(this, Glide$$1);
                return possibleConstructorReturn(this, (Glide$$1.__proto__ || Object.getPrototypeOf(Glide$$1)).apply(this, arguments));
            }

            createClass(Glide$$1, [{
                key: 'mount',
                value: function mount() {
                    var extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                    return get(Glide$$1.prototype.__proto__ || Object.getPrototypeOf(Glide$$1.prototype), 'mount', this).call(this, _extends({}, COMPONENTS, extensions));
                }
            }]);
            return Glide$$1;
        }(Glide);

        /* harmony default export */
        __webpack_exports__["default"] = (Glide$1);


        /***/
    }),

    /***/
    "./node_modules/aos/dist/aos.js":
    /*!**************************************!*\
      !*** ./node_modules/aos/dist/aos.js ***!
      \**************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        ! function(e, t) { true ? module.exports = t() : undefined }(this, function() {
            return function(e) {
                function t(o) { if (n[o]) return n[o].exports; var i = n[o] = { exports: {}, id: o, loaded: !1 }; return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports }
                var n = {};
                return t.m = e, t.c = n, t.p = "dist/", t(0)
            }([function(e, t, n) {
                "use strict";

                function o(e) { return e && e.__esModule ? e : { default: e } }
                var i = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]) } return e },
                    r = n(1),
                    a = (o(r), n(6)),
                    u = o(a),
                    c = n(7),
                    s = o(c),
                    f = n(8),
                    d = o(f),
                    l = n(9),
                    p = o(l),
                    m = n(10),
                    b = o(m),
                    v = n(11),
                    y = o(v),
                    g = n(14),
                    h = o(g),
                    w = [],
                    k = !1,
                    x = { offset: 120, delay: 0, easing: "ease", duration: 400, disable: !1, once: !1, startEvent: "DOMContentLoaded", throttleDelay: 99, debounceDelay: 50, disableMutationObserver: !1 },
                    j = function() { var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]; if (e && (k = !0), k) return w = (0, y.default)(w, x), (0, b.default)(w, x.once), w },
                    O = function() { w = (0, h.default)(), j() },
                    M = function() { w.forEach(function(e, t) { e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay") }) },
                    S = function(e) { return e === !0 || "mobile" === e && p.default.mobile() || "phone" === e && p.default.phone() || "tablet" === e && p.default.tablet() || "function" == typeof e && e() === !0 },
                    _ = function(e) {
                        x = i(x, e), w = (0, h.default)();
                        var t = document.all && !window.atob;
                        return S(x.disable) || t ? M() : (x.disableMutationObserver || d.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), x.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", x.easing), document.querySelector("body").setAttribute("data-aos-duration", x.duration), document.querySelector("body").setAttribute("data-aos-delay", x.delay), "DOMContentLoaded" === x.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? j(!0) : "load" === x.startEvent ? window.addEventListener(x.startEvent, function() { j(!0) }) : document.addEventListener(x.startEvent, function() { j(!0) }), window.addEventListener("resize", (0, s.default)(j, x.debounceDelay, !0)), window.addEventListener("orientationchange", (0, s.default)(j, x.debounceDelay, !0)), window.addEventListener("scroll", (0, u.default)(function() {
                            (0, b.default)(w, x.once)
                        }, x.throttleDelay)), x.disableMutationObserver || d.default.ready("[data-aos]", O), w)
                    };
                e.exports = { init: _, refresh: j, refreshHard: O }
            }, function(e, t) {}, , , , , function(e, t) {
                (function(t) {
                    "use strict";

                    function n(e, t, n) {
                        function o(t) {
                            var n = b,
                                o = v;
                            return b = v = void 0, k = t, g = e.apply(o, n)
                        }

                        function r(e) { return k = e, h = setTimeout(f, t), M ? o(e) : g }

                        function a(e) {
                            var n = e - w,
                                o = e - k,
                                i = t - n;
                            return S ? j(i, y - o) : i
                        }

                        function c(e) {
                            var n = e - w,
                                o = e - k;
                            return void 0 === w || n >= t || n < 0 || S && o >= y
                        }

                        function f() { var e = O(); return c(e) ? d(e) : void(h = setTimeout(f, a(e))) }

                        function d(e) { return h = void 0, _ && b ? o(e) : (b = v = void 0, g) }

                        function l() { void 0 !== h && clearTimeout(h), k = 0, b = w = v = h = void 0 }

                        function p() { return void 0 === h ? g : d(O()) }

                        function m() {
                            var e = O(),
                                n = c(e);
                            if (b = arguments, v = this, w = e, n) { if (void 0 === h) return r(w); if (S) return h = setTimeout(f, t), o(w) }
                            return void 0 === h && (h = setTimeout(f, t)), g
                        }
                        var b, v, y, g, h, w, k = 0,
                            M = !1,
                            S = !1,
                            _ = !0;
                        if ("function" != typeof e) throw new TypeError(s);
                        return t = u(t) || 0, i(n) && (M = !!n.leading, S = "maxWait" in n, y = S ? x(u(n.maxWait) || 0, t) : y, _ = "trailing" in n ? !!n.trailing : _), m.cancel = l, m.flush = p, m
                    }

                    function o(e, t, o) {
                        var r = !0,
                            a = !0;
                        if ("function" != typeof e) throw new TypeError(s);
                        return i(o) && (r = "leading" in o ? !!o.leading : r, a = "trailing" in o ? !!o.trailing : a), n(e, t, { leading: r, maxWait: t, trailing: a })
                    }

                    function i(e) { var t = "undefined" == typeof e ? "undefined" : c(e); return !!e && ("object" == t || "function" == t) }

                    function r(e) { return !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e)) }

                    function a(e) { return "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) || r(e) && k.call(e) == d }

                    function u(e) {
                        if ("number" == typeof e) return e;
                        if (a(e)) return f;
                        if (i(e)) {
                            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                            e = i(t) ? t + "" : t
                        }
                        if ("string" != typeof e) return 0 === e ? e : +e;
                        e = e.replace(l, "");
                        var n = m.test(e);
                        return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? f : +e
                    }
                    var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
                        s = "Expected a function",
                        f = NaN,
                        d = "[object Symbol]",
                        l = /^\s+|\s+$/g,
                        p = /^[-+]0x[0-9a-f]+$/i,
                        m = /^0b[01]+$/i,
                        b = /^0o[0-7]+$/i,
                        v = parseInt,
                        y = "object" == ("undefined" == typeof t ? "undefined" : c(t)) && t && t.Object === Object && t,
                        g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self,
                        h = y || g || Function("return this")(),
                        w = Object.prototype,
                        k = w.toString,
                        x = Math.max,
                        j = Math.min,
                        O = function() { return h.Date.now() };
                    e.exports = o
                }).call(t, function() { return this }())
            }, function(e, t) {
                (function(t) {
                    "use strict";

                    function n(e, t, n) {
                        function i(t) {
                            var n = b,
                                o = v;
                            return b = v = void 0, O = t, g = e.apply(o, n)
                        }

                        function r(e) { return O = e, h = setTimeout(f, t), M ? i(e) : g }

                        function u(e) {
                            var n = e - w,
                                o = e - O,
                                i = t - n;
                            return S ? x(i, y - o) : i
                        }

                        function s(e) {
                            var n = e - w,
                                o = e - O;
                            return void 0 === w || n >= t || n < 0 || S && o >= y
                        }

                        function f() { var e = j(); return s(e) ? d(e) : void(h = setTimeout(f, u(e))) }

                        function d(e) { return h = void 0, _ && b ? i(e) : (b = v = void 0, g) }

                        function l() { void 0 !== h && clearTimeout(h), O = 0, b = w = v = h = void 0 }

                        function p() { return void 0 === h ? g : d(j()) }

                        function m() {
                            var e = j(),
                                n = s(e);
                            if (b = arguments, v = this, w = e, n) { if (void 0 === h) return r(w); if (S) return h = setTimeout(f, t), i(w) }
                            return void 0 === h && (h = setTimeout(f, t)), g
                        }
                        var b, v, y, g, h, w, O = 0,
                            M = !1,
                            S = !1,
                            _ = !0;
                        if ("function" != typeof e) throw new TypeError(c);
                        return t = a(t) || 0, o(n) && (M = !!n.leading, S = "maxWait" in n, y = S ? k(a(n.maxWait) || 0, t) : y, _ = "trailing" in n ? !!n.trailing : _), m.cancel = l, m.flush = p, m
                    }

                    function o(e) { var t = "undefined" == typeof e ? "undefined" : u(e); return !!e && ("object" == t || "function" == t) }

                    function i(e) { return !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e)) }

                    function r(e) { return "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) || i(e) && w.call(e) == f }

                    function a(e) {
                        if ("number" == typeof e) return e;
                        if (r(e)) return s;
                        if (o(e)) {
                            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                            e = o(t) ? t + "" : t
                        }
                        if ("string" != typeof e) return 0 === e ? e : +e;
                        e = e.replace(d, "");
                        var n = p.test(e);
                        return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? s : +e
                    }
                    var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
                        c = "Expected a function",
                        s = NaN,
                        f = "[object Symbol]",
                        d = /^\s+|\s+$/g,
                        l = /^[-+]0x[0-9a-f]+$/i,
                        p = /^0b[01]+$/i,
                        m = /^0o[0-7]+$/i,
                        b = parseInt,
                        v = "object" == ("undefined" == typeof t ? "undefined" : u(t)) && t && t.Object === Object && t,
                        y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self,
                        g = v || y || Function("return this")(),
                        h = Object.prototype,
                        w = h.toString,
                        k = Math.max,
                        x = Math.min,
                        j = function() { return g.Date.now() };
                    e.exports = n
                }).call(t, function() { return this }())
            }, function(e, t) {
                "use strict";

                function n(e) {
                    var t = void 0,
                        o = void 0,
                        i = void 0;
                    for (t = 0; t < e.length; t += 1) { if (o = e[t], o.dataset && o.dataset.aos) return !0; if (i = o.children && n(o.children)) return !0 }
                    return !1
                }

                function o() { return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver }

                function i() { return !!o() }

                function r(e, t) {
                    var n = window.document,
                        i = o(),
                        r = new i(a);
                    u = t, r.observe(n.documentElement, { childList: !0, subtree: !0, removedNodes: !0 })
                }

                function a(e) {
                    e && e.forEach(function(e) {
                        var t = Array.prototype.slice.call(e.addedNodes),
                            o = Array.prototype.slice.call(e.removedNodes),
                            i = t.concat(o);
                        if (n(i)) return u()
                    })
                }
                Object.defineProperty(t, "__esModule", { value: !0 });
                var u = function() {};
                t.default = { isSupported: i, ready: r }
            }, function(e, t) {
                "use strict";

                function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

                function o() { return navigator.userAgent || navigator.vendor || window.opera || "" }
                Object.defineProperty(t, "__esModule", { value: !0 });
                var i = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var o = t[n];
                                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                            }
                        }
                        return function(t, n, o) { return n && e(t.prototype, n), o && e(t, o), t }
                    }(),
                    r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                    a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                    u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
                    c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                    s = function() {
                        function e() { n(this, e) }
                        return i(e, [{ key: "phone", value: function() { var e = o(); return !(!r.test(e) && !a.test(e.substr(0, 4))) } }, { key: "mobile", value: function() { var e = o(); return !(!u.test(e) && !c.test(e.substr(0, 4))) } }, { key: "tablet", value: function() { return this.mobile() && !this.phone() } }]), e
                    }();
                t.default = new s
            }, function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = function(e, t, n) {
                        var o = e.node.getAttribute("data-aos-once");
                        t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof o && ("false" === o || !n && "true" !== o) && e.node.classList.remove("aos-animate")
                    },
                    o = function(e, t) {
                        var o = window.pageYOffset,
                            i = window.innerHeight;
                        e.forEach(function(e, r) { n(e, i + o, t) })
                    };
                t.default = o
            }, function(e, t, n) {
                "use strict";

                function o(e) { return e && e.__esModule ? e : { default: e } }
                Object.defineProperty(t, "__esModule", { value: !0 });
                var i = n(12),
                    r = o(i),
                    a = function(e, t) { return e.forEach(function(e, n) { e.node.classList.add("aos-init"), e.position = (0, r.default)(e.node, t.offset) }), e };
                t.default = a
            }, function(e, t, n) {
                "use strict";

                function o(e) { return e && e.__esModule ? e : { default: e } }
                Object.defineProperty(t, "__esModule", { value: !0 });
                var i = n(13),
                    r = o(i),
                    a = function(e, t) {
                        var n = 0,
                            o = 0,
                            i = window.innerHeight,
                            a = { offset: e.getAttribute("data-aos-offset"), anchor: e.getAttribute("data-aos-anchor"), anchorPlacement: e.getAttribute("data-aos-anchor-placement") };
                        switch (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)), a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]), n = (0, r.default)(e).top, a.anchorPlacement) {
                            case "top-bottom":
                                break;
                            case "center-bottom":
                                n += e.offsetHeight / 2;
                                break;
                            case "bottom-bottom":
                                n += e.offsetHeight;
                                break;
                            case "top-center":
                                n += i / 2;
                                break;
                            case "bottom-center":
                                n += i / 2 + e.offsetHeight;
                                break;
                            case "center-center":
                                n += i / 2 + e.offsetHeight / 2;
                                break;
                            case "top-top":
                                n += i;
                                break;
                            case "bottom-top":
                                n += e.offsetHeight + i;
                                break;
                            case "center-top":
                                n += e.offsetHeight / 2 + i
                        }
                        return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o
                    };
                t.default = a
            }, function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = function(e) { for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent; return { top: n, left: t } };
                t.default = n
            }, function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = function(e) { return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, function(e) { return { node: e } }) };
                t.default = n
            }])
        });

        /***/
    }),

    /***/
    "./node_modules/core-js/internals/a-function.js":
    /*!******************************************************!*\
      !*** ./node_modules/core-js/internals/a-function.js ***!
      \******************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports) {

        module.exports = function(it) {
            if (typeof it != 'function') {
                throw TypeError(String(it) + ' is not a function');
            }
            return it;
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/a-possible-prototype.js":
    /*!****************************************************************!*\
      !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
      \****************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var isObject = __webpack_require__( /*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

        module.exports = function(it) {
            if (!isObject(it) && it !== null) {
                throw TypeError("Can't set " + String(it) + ' as a prototype');
            }
            return it;
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/add-to-unscopables.js":
    /*!**************************************************************!*\
      !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
      \**************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var wellKnownSymbol = __webpack_require__( /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
        var create = __webpack_require__( /*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
        var definePropertyModule = __webpack_require__( /*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

        var UNSCOPABLES = wellKnownSymbol('unscopables');
        var ArrayPrototype = Array.prototype;

        // Array.prototype[@@unscopables]
        // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
        if (ArrayPrototype[UNSCOPABLES] == undefined) {
            definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
                configurable: true,
                value: create(null)
            });
        }

        // add a key to Array.prototype[@@unscopables]
        module.exports = function(key) {
            ArrayPrototype[UNSCOPABLES][key] = true;
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/an-instance.js":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/internals/an-instance.js ***!
      \*******************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports) {

        module.exports = function(it, Constructor, name) {
            if (!(it instanceof Constructor)) {
                throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
            }
            return it;
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/an-object.js":
    /*!*****************************************************!*\
      !*** ./node_modules/core-js/internals/an-object.js ***!
      \*****************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var isObject = __webpack_require__( /*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

        module.exports = function(it) {
            if (!isObject(it)) {
                throw TypeError(String(it) + ' is not an object');
            }
            return it;
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/array-for-each.js":
    /*!**********************************************************!*\
      !*** ./node_modules/core-js/internals/array-for-each.js ***!
      \**********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";

        var $forEach = __webpack_require__( /*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;
        var arrayMethodIsStrict = __webpack_require__( /*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");
        var arrayMethodUsesToLength = __webpack_require__( /*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

        var STRICT_METHOD = arrayMethodIsStrict('forEach');
        var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

        // `Array.prototype.forEach` method implementation
        // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
        module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */ ) {
            return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        } : [].forEach;


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/array-from.js":
    /*!******************************************************!*\
      !*** ./node_modules/core-js/internals/array-from.js ***!
      \******************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";

        var bind = __webpack_require__( /*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
        var toObject = __webpack_require__( /*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
        var callWithSafeIterationClosing = __webpack_require__( /*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");
        var isArrayIteratorMethod = __webpack_require__( /*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
        var toLength = __webpack_require__( /*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
        var createProperty = __webpack_require__( /*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
        var getIteratorMethod = __webpack_require__( /*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");

        // `Array.from` method implementation
        // https://tc39.github.io/ecma262/#sec-array.from
        module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */ ) {
            var O = toObject(arrayLike);
            var C = typeof this == 'function' ? this : Array;
            var argumentsLength = arguments.length;
            var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
            var mapping = mapfn !== undefined;
            var iteratorMethod = getIteratorMethod(O);
            var index = 0;
            var length, result, step, iterator, next, value;
            if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
            // if the target is not iterable or it's an array with the default iterator - use a simple case
            if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
                iterator = iteratorMethod.call(O);
                next = iterator.next;
                result = new C();
                for (; !(step = next.call(iterator)).done; index++) {
                    value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
                    createProperty(result, index, value);
                }
            } else {
                length = toLength(O.length);
                result = new C(length);
                for (; length > index; index++) {
                    value = mapping ? mapfn(O[index], index) : O[index];
                    createProperty(result, index, value);
                }
            }
            result.length = index;
            return result;
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/array-includes.js":
    /*!**********************************************************!*\
      !*** ./node_modules/core-js/internals/array-includes.js ***!
      \**********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var toIndexedObject = __webpack_require__( /*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
        var toLength = __webpack_require__( /*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
        var toAbsoluteIndex = __webpack_require__( /*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");

        // `Array.prototype.{ indexOf, includes }` methods implementation
        var createMethod = function(IS_INCLUDES) {
            return function($this, el, fromIndex) {
                var O = toIndexedObject($this);
                var length = toLength(O.length);
                var index = toAbsoluteIndex(fromIndex, length);
                var value;
                // Array#includes uses SameValueZero equality algorithm
                // eslint-disable-next-line no-self-compare
                if (IS_INCLUDES && el != el)
                    while (length > index) {
                        value = O[index++];
                        // eslint-disable-next-line no-self-compare
                        if (value != value) return true;
                        // Array#indexOf ignores holes, Array#includes - not
                    } else
                        for (; length > index; index++) {
                            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
                        }
                return !IS_INCLUDES && -1;
            };
        };

        module.exports = {
            // `Array.prototype.includes` method
            // https://tc39.github.io/ecma262/#sec-array.prototype.includes
            includes: createMethod(true),
            // `Array.prototype.indexOf` method
            // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
            indexOf: createMethod(false)
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/array-iteration.js":
    /*!***********************************************************!*\
      !*** ./node_modules/core-js/internals/array-iteration.js ***!
      \***********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var bind = __webpack_require__( /*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
        var IndexedObject = __webpack_require__( /*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
        var toObject = __webpack_require__( /*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
        var toLength = __webpack_require__( /*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
        var arraySpeciesCreate = __webpack_require__( /*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

        var push = [].push;

        // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
        var createMethod = function(TYPE) {
            var IS_MAP = TYPE == 1;
            var IS_FILTER = TYPE == 2;
            var IS_SOME = TYPE == 3;
            var IS_EVERY = TYPE == 4;
            var IS_FIND_INDEX = TYPE == 6;
            var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
            return function($this, callbackfn, that, specificCreate) {
                var O = toObject($this);
                var self = IndexedObject(O);
                var boundFunction = bind(callbackfn, that, 3);
                var length = toLength(self.length);
                var index = 0;
                var create = specificCreate || arraySpeciesCreate;
                var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
                var value, result;
                for (; length > index; index++)
                    if (NO_HOLES || index in self) {
                        value = self[index];
                        result = boundFunction(value, index, O);
                        if (TYPE) {
                            if (IS_MAP) target[index] = result; // map
                            else if (result) switch (TYPE) {
                                    case 3:
                                        return true; // some
                                    case 5:
                                        return value; // find
                                    case 6:
                                        return index; // findIndex
                                    case 2:
                                        push.call(target, value); // filter
                                } else if (IS_EVERY) return false; // every
                        }
                    }
                return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
            };
        };

        module.exports = {
            // `Array.prototype.forEach` method
            // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
            forEach: createMethod(0),
            // `Array.prototype.map` method
            // https://tc39.github.io/ecma262/#sec-array.prototype.map
            map: createMethod(1),
            // `Array.prototype.filter` method
            // https://tc39.github.io/ecma262/#sec-array.prototype.filter
            filter: createMethod(2),
            // `Array.prototype.some` method
            // https://tc39.github.io/ecma262/#sec-array.prototype.some
            some: createMethod(3),
            // `Array.prototype.every` method
            // https://tc39.github.io/ecma262/#sec-array.prototype.every
            every: createMethod(4),
            // `Array.prototype.find` method
            // https://tc39.github.io/ecma262/#sec-array.prototype.find
            find: createMethod(5),
            // `Array.prototype.findIndex` method
            // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
            findIndex: createMethod(6)
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/array-method-has-species-support.js":
    /*!****************************************************************************!*\
      !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
      \****************************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var fails = __webpack_require__( /*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
        var wellKnownSymbol = __webpack_require__( /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
        var V8_VERSION = __webpack_require__( /*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

        var SPECIES = wellKnownSymbol('species');

        module.exports = function(METHOD_NAME) {
            // We can't use this feature detection in V8 since it causes
            // deoptimization and serious performance degradation
            // https://github.com/zloirock/core-js/issues/677
            return V8_VERSION >= 51 || !fails(function() {
                var array = [];
                var constructor = array.constructor = {};
                constructor[SPECIES] = function() {
                    return { foo: 1 };
                };
                return array[METHOD_NAME](Boolean).foo !== 1;
            });
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/array-method-is-strict.js":
    /*!******************************************************************!*\
      !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
      \******************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";

        var fails = __webpack_require__( /*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

        module.exports = function(METHOD_NAME, argument) {
            var method = [][METHOD_NAME];
            return !!method && fails(function() {
                // eslint-disable-next-line no-useless-call,no-throw-literal
                method.call(null, argument || function() { throw 1; }, 1);
            });
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/array-method-uses-to-length.js":
    /*!***********************************************************************!*\
      !*** ./node_modules/core-js/internals/array-method-uses-to-length.js ***!
      \***********************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var DESCRIPTORS = __webpack_require__( /*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
        var fails = __webpack_require__( /*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
        var has = __webpack_require__( /*! ../internals/has */ "./node_modules/core-js/internals/has.js");

        var defineProperty = Object.defineProperty;
        var cache = {};

        var thrower = function(it) { throw it; };

        module.exports = function(METHOD_NAME, options) {
            if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
            if (!options) options = {};
            var method = [][METHOD_NAME];
            var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
            var argument0 = has(options, 0) ? options[0] : thrower;
            var argument1 = has(options, 1) ? options[1] : undefined;

            return cache[METHOD_NAME] = !!method && !fails(function() {
                if (ACCESSORS && !DESCRIPTORS) return true;
                var O = { length: -1 };

                if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
                else O[1] = 1;

                method.call(O, argument0, argument1);
            });
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/array-species-create.js":
    /*!****************************************************************!*\
      !*** ./node_modules/core-js/internals/array-species-create.js ***!
      \****************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var isObject = __webpack_require__( /*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
        var isArray = __webpack_require__( /*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
        var wellKnownSymbol = __webpack_require__( /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

        var SPECIES = wellKnownSymbol('species');

        // `ArraySpeciesCreate` abstract operation
        // https://tc39.github.io/ecma262/#sec-arrayspeciescreate
        module.exports = function(originalArray, length) {
            var C;
            if (isArray(originalArray)) {
                C = originalArray.constructor;
                // cross-realm fallback
                if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
                else if (isObject(C)) {
                    C = C[SPECIES];
                    if (C === null) C = undefined;
                }
            }
            return new(C === undefined ? Array : C)(length === 0 ? 0 : length);
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
    /*!****************************************************************************!*\
      !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
      \****************************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var anObject = __webpack_require__( /*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

        // call something on iterator step with safe closing on error
        module.exports = function(iterator, fn, value, ENTRIES) {
            try {
                return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
                // 7.4.6 IteratorClose(iterator, completion)
            } catch (error) {
                var returnMethod = iterator['return'];
                if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
                throw error;
            }
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/check-correctness-of-iteration.js":
    /*!**************************************************************************!*\
      !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
      \**************************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var wellKnownSymbol = __webpack_require__( /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

        var ITERATOR = wellKnownSymbol('iterator');
        var SAFE_CLOSING = false;

        try {
            var called = 0;
            var iteratorWithReturn = {
                next: function() {
                    return { done: !!called++ };
                },
                'return': function() {
                    SAFE_CLOSING = true;
                }
            };
            iteratorWithReturn[ITERATOR] = function() {
                return this;
            };
            // eslint-disable-next-line no-throw-literal
            Array.from(iteratorWithReturn, function() { throw 2; });
        } catch (error) { /* empty */ }

        module.exports = function(exec, SKIP_CLOSING) {
            if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
            var ITERATION_SUPPORT = false;
            try {
                var object = {};
                object[ITERATOR] = function() {
                    return {
                        next: function() {
                            return { done: ITERATION_SUPPORT = true };
                        }
                    };
                };
                exec(object);
            } catch (error) { /* empty */ }
            return ITERATION_SUPPORT;
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/classof-raw.js":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/internals/classof-raw.js ***!
      \*******************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports) {

        var toString = {}.toString;

        module.exports = function(it) {
            return toString.call(it).slice(8, -1);
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/classof.js":
    /*!***************************************************!*\
      !*** ./node_modules/core-js/internals/classof.js ***!
      \***************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var TO_STRING_TAG_SUPPORT = __webpack_require__( /*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
        var classofRaw = __webpack_require__( /*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
        var wellKnownSymbol = __webpack_require__( /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

        var TO_STRING_TAG = wellKnownSymbol('toStringTag');
        // ES3 wrong here
        var CORRECT_ARGUMENTS = classofRaw(function() { return arguments; }()) == 'Arguments';

        // fallback for IE11 Script Access Denied error
        var tryGet = function(it, key) {
            try {
                return it[key];
            } catch (error) { /* empty */ }
        };

        // getting tag from ES6+ `Object.prototype.toString`
        module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
            var O, tag, result;
            return it === undefined ? 'Undefined' : it === null ? 'Null'
                // @@toStringTag case
                :
                typeof(tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
                // builtinTag case
                :
                CORRECT_ARGUMENTS ? classofRaw(O)
                // ES3 arguments fallback
                :
                (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/copy-constructor-properties.js":
    /*!***********************************************************************!*\
      !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
      \***********************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var has = __webpack_require__( /*! ../internals/has */ "./node_modules/core-js/internals/has.js");
        var ownKeys = __webpack_require__( /*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
        var getOwnPropertyDescriptorModule = __webpack_require__( /*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
        var definePropertyModule = __webpack_require__( /*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

        module.exports = function(target, source) {
            var keys = ownKeys(source);
            var defineProperty = definePropertyModule.f;
            var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
            }
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/correct-prototype-getter.js":
    /*!********************************************************************!*\
      !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
      \********************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var fails = __webpack_require__( /*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

        module.exports = !fails(function() {
            function F() { /* empty */ }
            F.prototype.constructor = null;
            return Object.getPrototypeOf(new F()) !== F.prototype;
        });


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/create-iterator-constructor.js":
    /*!***********************************************************************!*\
      !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
      \***********************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";

        var IteratorPrototype = __webpack_require__( /*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js").IteratorPrototype;
        var create = __webpack_require__( /*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
        var createPropertyDescriptor = __webpack_require__( /*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
        var setToStringTag = __webpack_require__( /*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
        var Iterators = __webpack_require__( /*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

        var returnThis = function() { return this; };

        module.exports = function(IteratorConstructor, NAME, next) {
            var TO_STRING_TAG = NAME + ' Iterator';
            IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
            setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
            Iterators[TO_STRING_TAG] = returnThis;
            return IteratorConstructor;
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/create-non-enumerable-property.js":
    /*!**************************************************************************!*\
      !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
      \**************************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var DESCRIPTORS = __webpack_require__( /*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
        var definePropertyModule = __webpack_require__( /*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
        var createPropertyDescriptor = __webpack_require__( /*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

        module.exports = DESCRIPTORS ? function(object, key, value) {
            return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
        } : function(object, key, value) {
            object[key] = value;
            return object;
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/create-property-descriptor.js":
    /*!**********************************************************************!*\
      !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
      \**********************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports) {

        module.exports = function(bitmap, value) {
            return {
                enumerable: !(bitmap & 1),
                configurable: !(bitmap & 2),
                writable: !(bitmap & 4),
                value: value
            };
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/create-property.js":
    /*!***********************************************************!*\
      !*** ./node_modules/core-js/internals/create-property.js ***!
      \***********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";

        var toPrimitive = __webpack_require__( /*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
        var definePropertyModule = __webpack_require__( /*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
        var createPropertyDescriptor = __webpack_require__( /*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

        module.exports = function(object, key, value) {
            var propertyKey = toPrimitive(key);
            if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
            else object[propertyKey] = value;
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/define-iterator.js":
    /*!***********************************************************!*\
      !*** ./node_modules/core-js/internals/define-iterator.js ***!
      \***********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";

        var $ = __webpack_require__( /*! ../internals/export */ "./node_modules/core-js/internals/export.js");
        var createIteratorConstructor = __webpack_require__( /*! ../internals/create-iterator-constructor */ "./node_modules/core-js/internals/create-iterator-constructor.js");
        var getPrototypeOf = __webpack_require__( /*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
        var setPrototypeOf = __webpack_require__( /*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
        var setToStringTag = __webpack_require__( /*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
        var createNonEnumerableProperty = __webpack_require__( /*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
        var redefine = __webpack_require__( /*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
        var wellKnownSymbol = __webpack_require__( /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
        var IS_PURE = __webpack_require__( /*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
        var Iterators = __webpack_require__( /*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
        var IteratorsCore = __webpack_require__( /*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js");

        var IteratorPrototype = IteratorsCore.IteratorPrototype;
        var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
        var ITERATOR = wellKnownSymbol('iterator');
        var KEYS = 'keys';
        var VALUES = 'values';
        var ENTRIES = 'entries';

        var returnThis = function() { return this; };

        module.exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
            createIteratorConstructor(IteratorConstructor, NAME, next);

            var getIterationMethod = function(KIND) {
                if (KIND === DEFAULT && defaultIterator) return defaultIterator;
                if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
                switch (KIND) {
                    case KEYS:
                        return function keys() { return new IteratorConstructor(this, KIND); };
                    case VALUES:
                        return function values() { return new IteratorConstructor(this, KIND); };
                    case ENTRIES:
                        return function entries() { return new IteratorConstructor(this, KIND); };
                }
                return function() { return new IteratorConstructor(this); };
            };

            var TO_STRING_TAG = NAME + ' Iterator';
            var INCORRECT_VALUES_NAME = false;
            var IterablePrototype = Iterable.prototype;
            var nativeIterator = IterablePrototype[ITERATOR] ||
                IterablePrototype['@@iterator'] ||
                DEFAULT && IterablePrototype[DEFAULT];
            var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
            var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
            var CurrentIteratorPrototype, methods, KEY;

            // fix native
            if (anyNativeIterator) {
                CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
                if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
                    if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
                        if (setPrototypeOf) {
                            setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
                        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
                            createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
                        }
                    }
                    // Set @@toStringTag to native iterators
                    setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
                    if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
                }
            }

            // fix Array#{values, @@iterator}.name in V8 / FF
            if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
                INCORRECT_VALUES_NAME = true;
                defaultIterator = function values() { return nativeIterator.call(this); };
            }

            // define iterator
            if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
                createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
            }
            Iterators[NAME] = defaultIterator;

            // export additional methods
            if (DEFAULT) {
                methods = {
                    values: getIterationMethod(VALUES),
                    keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
                    entries: getIterationMethod(ENTRIES)
                };
                if (FORCED)
                    for (KEY in methods) {
                        if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
                            redefine(IterablePrototype, KEY, methods[KEY]);
                        }
                    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
            }

            return methods;
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/define-well-known-symbol.js":
    /*!********************************************************************!*\
      !*** ./node_modules/core-js/internals/define-well-known-symbol.js ***!
      \********************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var path = __webpack_require__( /*! ../internals/path */ "./node_modules/core-js/internals/path.js");
        var has = __webpack_require__( /*! ../internals/has */ "./node_modules/core-js/internals/has.js");
        var wrappedWellKnownSymbolModule = __webpack_require__( /*! ../internals/well-known-symbol-wrapped */ "./node_modules/core-js/internals/well-known-symbol-wrapped.js");
        var defineProperty = __webpack_require__( /*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

        module.exports = function(NAME) {
            var Symbol = path.Symbol || (path.Symbol = {});
            if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
                value: wrappedWellKnownSymbolModule.f(NAME)
            });
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/descriptors.js":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/internals/descriptors.js ***!
      \*******************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var fails = __webpack_require__( /*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

        // Thank's IE8 for his funny defineProperty
        module.exports = !fails(function() {
            return Object.defineProperty({}, 1, { get: function() { return 7; } })[1] != 7;
        });


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/document-create-element.js":
    /*!*******************************************************************!*\
      !*** ./node_modules/core-js/internals/document-create-element.js ***!
      \*******************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var global = __webpack_require__( /*! ../internals/global */ "./node_modules/core-js/internals/global.js");
        var isObject = __webpack_require__( /*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

        var document = global.document;
        // typeof document.createElement is 'object' in old IE
        var EXISTS = isObject(document) && isObject(document.createElement);

        module.exports = function(it) {
            return EXISTS ? document.createElement(it) : {};
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/dom-iterables.js":
    /*!*********************************************************!*\
      !*** ./node_modules/core-js/internals/dom-iterables.js ***!
      \*********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports) {

        // iterable DOM collections
        // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
        module.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/engine-is-ios.js":
    /*!*********************************************************!*\
      !*** ./node_modules/core-js/internals/engine-is-ios.js ***!
      \*********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var userAgent = __webpack_require__( /*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

        module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/engine-user-agent.js":
    /*!*************************************************************!*\
      !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
      \*************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var getBuiltIn = __webpack_require__( /*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

        module.exports = getBuiltIn('navigator', 'userAgent') || '';


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/engine-v8-version.js":
    /*!*************************************************************!*\
      !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
      \*************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var global = __webpack_require__( /*! ../internals/global */ "./node_modules/core-js/internals/global.js");
        var userAgent = __webpack_require__( /*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

        var process = global.process;
        var versions = process && process.versions;
        var v8 = versions && versions.v8;
        var match, version;

        if (v8) {
            match = v8.split('.');
            version = match[0] + match[1];
        } else if (userAgent) {
            match = userAgent.match(/Edge\/(\d+)/);
            if (!match || match[1] >= 74) {
                match = userAgent.match(/Chrome\/(\d+)/);
                if (match) version = match[1];
            }
        }

        module.exports = version && +version;


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/enum-bug-keys.js":
    /*!*********************************************************!*\
      !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
      \*********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports) {

        // IE8- don't enum bug keys
        module.exports = [
            'constructor',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            'toLocaleString',
            'toString',
            'valueOf'
        ];


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/export.js":
    /*!**************************************************!*\
      !*** ./node_modules/core-js/internals/export.js ***!
      \**************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var global = __webpack_require__( /*! ../internals/global */ "./node_modules/core-js/internals/global.js");
        var getOwnPropertyDescriptor = __webpack_require__( /*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
        var createNonEnumerableProperty = __webpack_require__( /*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
        var redefine = __webpack_require__( /*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
        var setGlobal = __webpack_require__( /*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
        var copyConstructorProperties = __webpack_require__( /*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
        var isForced = __webpack_require__( /*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

        /*
          options.target      - name of the target object
          options.global      - target is the global object
          options.stat        - export as static methods of target
          options.proto       - export as prototype methods of target
          options.real        - real prototype method for the `pure` version
          options.forced      - export even if the native feature is available
          options.bind        - bind methods to the target, required for the `pure` version
          options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
          options.unsafe      - use the simple assignment of property instead of delete + defineProperty
          options.sham        - add a flag to not completely full polyfills
          options.enumerable  - export as enumerable property
          options.noTargetGet - prevent calling a getter on target
        */
        module.exports = function(options, source) {
            var TARGET = options.target;
            var GLOBAL = options.global;
            var STATIC = options.stat;
            var FORCED, target, key, targetProperty, sourceProperty, descriptor;
            if (GLOBAL) {
                target = global;
            } else if (STATIC) {
                target = global[TARGET] || setGlobal(TARGET, {});
            } else {
                target = (global[TARGET] || {}).prototype;
            }
            if (target)
                for (key in source) {
                    sourceProperty = source[key];
                    if (options.noTargetGet) {
                        descriptor = getOwnPropertyDescriptor(target, key);
                        targetProperty = descriptor && descriptor.value;
                    } else targetProperty = target[key];
                    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
                    // contained in target
                    if (!FORCED && targetProperty !== undefined) {
                        if (typeof sourceProperty === typeof targetProperty) continue;
                        copyConstructorProperties(sourceProperty, targetProperty);
                    }
                    // add a flag to not completely full polyfills
                    if (options.sham || (targetProperty && targetProperty.sham)) {
                        createNonEnumerableProperty(sourceProperty, 'sham', true);
                    }
                    // extend global
                    redefine(target, key, sourceProperty, options);
                }
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/fails.js":
    /*!*************************************************!*\
      !*** ./node_modules/core-js/internals/fails.js ***!
      \*************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports) {

        module.exports = function(exec) {
            try {
                return !!exec();
            } catch (error) {
                return true;
            }
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/function-bind-context.js":
    /*!*****************************************************************!*\
      !*** ./node_modules/core-js/internals/function-bind-context.js ***!
      \*****************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var aFunction = __webpack_require__( /*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

        // optional / simple context binding
        module.exports = function(fn, that, length) {
            aFunction(fn);
            if (that === undefined) return fn;
            switch (length) {
                case 0:
                    return function() {
                        return fn.call(that);
                    };
                case 1:
                    return function(a) {
                        return fn.call(that, a);
                    };
                case 2:
                    return function(a, b) {
                        return fn.call(that, a, b);
                    };
                case 3:
                    return function(a, b, c) {
                        return fn.call(that, a, b, c);
                    };
            }
            return function( /* ...args */ ) {
                return fn.apply(that, arguments);
            };
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/get-built-in.js":
    /*!********************************************************!*\
      !*** ./node_modules/core-js/internals/get-built-in.js ***!
      \********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var path = __webpack_require__( /*! ../internals/path */ "./node_modules/core-js/internals/path.js");
        var global = __webpack_require__( /*! ../internals/global */ "./node_modules/core-js/internals/global.js");

        var aFunction = function(variable) {
            return typeof variable == 'function' ? variable : undefined;
        };

        module.exports = function(namespace, method) {
            return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace]) :
                path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/get-iterator-method.js":
    /*!***************************************************************!*\
      !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
      \***************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var classof = __webpack_require__( /*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
        var Iterators = __webpack_require__( /*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
        var wellKnownSymbol = __webpack_require__( /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

        var ITERATOR = wellKnownSymbol('iterator');

        module.exports = function(it) {
            if (it != undefined) return it[ITERATOR] ||
                it['@@iterator'] ||
                Iterators[classof(it)];
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/global.js":
    /*!**************************************************!*\
      !*** ./node_modules/core-js/internals/global.js ***!
      \**************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        /* WEBPACK VAR INJECTION */
        (function(global) {
            var check = function(it) {
                return it && it.Math == Math && it;
            };

            // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
            module.exports =
                // eslint-disable-next-line no-undef
                check(typeof globalThis == 'object' && globalThis) ||
                check(typeof window == 'object' && window) ||
                check(typeof self == 'object' && self) ||
                check(typeof global == 'object' && global) ||
                // eslint-disable-next-line no-new-func
                Function('return this')();

            /* WEBPACK VAR INJECTION */
        }.call(this, __webpack_require__( /*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

        /***/
    }),

    /***/
    "./node_modules/core-js/internals/has.js":
    /*!***********************************************!*\
      !*** ./node_modules/core-js/internals/has.js ***!
      \***********************************************/
    /*! no static exports found */
    /***/
        (function(module, exports) {

        var hasOwnProperty = {}.hasOwnProperty;

        module.exports = function(it, key) {
            return hasOwnProperty.call(it, key);
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/hidden-keys.js":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/internals/hidden-keys.js ***!
      \*******************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports) {

        module.exports = {};


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/host-report-errors.js":
    /*!**************************************************************!*\
      !*** ./node_modules/core-js/internals/host-report-errors.js ***!
      \**************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var global = __webpack_require__( /*! ../internals/global */ "./node_modules/core-js/internals/global.js");

        module.exports = function(a, b) {
            var console = global.console;
            if (console && console.error) {
                arguments.length === 1 ? console.error(a) : console.error(a, b);
            }
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/html.js":
    /*!************************************************!*\
      !*** ./node_modules/core-js/internals/html.js ***!
      \************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var getBuiltIn = __webpack_require__( /*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

        module.exports = getBuiltIn('document', 'documentElement');


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/ie8-dom-define.js":
    /*!**********************************************************!*\
      !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
      \**********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var DESCRIPTORS = __webpack_require__( /*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
        var fails = __webpack_require__( /*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
        var createElement = __webpack_require__( /*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

        // Thank's IE8 for his funny defineProperty
        module.exports = !DESCRIPTORS && !fails(function() {
            return Object.defineProperty(createElement('div'), 'a', {
                get: function() { return 7; }
            }).a != 7;
        });


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/indexed-object.js":
    /*!**********************************************************!*\
      !*** ./node_modules/core-js/internals/indexed-object.js ***!
      \**********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var fails = __webpack_require__( /*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
        var classof = __webpack_require__( /*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

        var split = ''.split;

        // fallback for non-array-like ES3 and non-enumerable old V8 strings
        module.exports = fails(function() {
            // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
            // eslint-disable-next-line no-prototype-builtins
            return !Object('z').propertyIsEnumerable(0);
        }) ? function(it) {
            return classof(it) == 'String' ? split.call(it, '') : Object(it);
        } : Object;


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/inspect-source.js":
    /*!**********************************************************!*\
      !*** ./node_modules/core-js/internals/inspect-source.js ***!
      \**********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var store = __webpack_require__( /*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

        var functionToString = Function.toString;

        // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
        if (typeof store.inspectSource != 'function') {
            store.inspectSource = function(it) {
                return functionToString.call(it);
            };
        }

        module.exports = store.inspectSource;


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/internal-state.js":
    /*!**********************************************************!*\
      !*** ./node_modules/core-js/internals/internal-state.js ***!
      \**********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var NATIVE_WEAK_MAP = __webpack_require__( /*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
        var global = __webpack_require__( /*! ../internals/global */ "./node_modules/core-js/internals/global.js");
        var isObject = __webpack_require__( /*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
        var createNonEnumerableProperty = __webpack_require__( /*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
        var objectHas = __webpack_require__( /*! ../internals/has */ "./node_modules/core-js/internals/has.js");
        var sharedKey = __webpack_require__( /*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
        var hiddenKeys = __webpack_require__( /*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

        var WeakMap = global.WeakMap;
        var set, get, has;

        var enforce = function(it) {
            return has(it) ? get(it) : set(it, {});
        };

        var getterFor = function(TYPE) {
            return function(it) {
                var state;
                if (!isObject(it) || (state = get(it)).type !== TYPE) {
                    throw TypeError('Incompatible receiver, ' + TYPE + ' required');
                }
                return state;
            };
        };

        if (NATIVE_WEAK_MAP) {
            var store = new WeakMap();
            var wmget = store.get;
            var wmhas = store.has;
            var wmset = store.set;
            set = function(it, metadata) {
                wmset.call(store, it, metadata);
                return metadata;
            };
            get = function(it) {
                return wmget.call(store, it) || {};
            };
            has = function(it) {
                return wmhas.call(store, it);
            };
        } else {
            var STATE = sharedKey('state');
            hiddenKeys[STATE] = true;
            set = function(it, metadata) {
                createNonEnumerableProperty(it, STATE, metadata);
                return metadata;
            };
            get = function(it) {
                return objectHas(it, STATE) ? it[STATE] : {};
            };
            has = function(it) {
                return objectHas(it, STATE);
            };
        }

        module.exports = {
            set: set,
            get: get,
            has: has,
            enforce: enforce,
            getterFor: getterFor
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/is-array-iterator-method.js":
    /*!********************************************************************!*\
      !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
      \********************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var wellKnownSymbol = __webpack_require__( /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
        var Iterators = __webpack_require__( /*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

        var ITERATOR = wellKnownSymbol('iterator');
        var ArrayPrototype = Array.prototype;

        // check on default Array iterator
        module.exports = function(it) {
            return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/is-array.js":
    /*!****************************************************!*\
      !*** ./node_modules/core-js/internals/is-array.js ***!
      \****************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var classof = __webpack_require__( /*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

        // `IsArray` abstract operation
        // https://tc39.github.io/ecma262/#sec-isarray
        module.exports = Array.isArray || function isArray(arg) {
            return classof(arg) == 'Array';
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/is-forced.js":
    /*!*****************************************************!*\
      !*** ./node_modules/core-js/internals/is-forced.js ***!
      \*****************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var fails = __webpack_require__( /*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

        var replacement = /#|\.prototype\./;

        var isForced = function(feature, detection) {
            var value = data[normalize(feature)];
            return value == POLYFILL ? true :
                value == NATIVE ? false :
                typeof detection == 'function' ? fails(detection) :
                !!detection;
        };

        var normalize = isForced.normalize = function(string) {
            return String(string).replace(replacement, '.').toLowerCase();
        };

        var data = isForced.data = {};
        var NATIVE = isForced.NATIVE = 'N';
        var POLYFILL = isForced.POLYFILL = 'P';

        module.exports = isForced;


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/is-object.js":
    /*!*****************************************************!*\
      !*** ./node_modules/core-js/internals/is-object.js ***!
      \*****************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports) {

        module.exports = function(it) {
            return typeof it === 'object' ? it !== null : typeof it === 'function';
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/is-pure.js":
    /*!***************************************************!*\
      !*** ./node_modules/core-js/internals/is-pure.js ***!
      \***************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports) {

        module.exports = false;


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/iterate.js":
    /*!***************************************************!*\
      !*** ./node_modules/core-js/internals/iterate.js ***!
      \***************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var anObject = __webpack_require__( /*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
        var isArrayIteratorMethod = __webpack_require__( /*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
        var toLength = __webpack_require__( /*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
        var bind = __webpack_require__( /*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
        var getIteratorMethod = __webpack_require__( /*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");
        var callWithSafeIterationClosing = __webpack_require__( /*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");

        var Result = function(stopped, result) {
            this.stopped = stopped;
            this.result = result;
        };

        var iterate = module.exports = function(iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
            var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
            var iterator, iterFn, index, length, result, next, step;

            if (IS_ITERATOR) {
                iterator = iterable;
            } else {
                iterFn = getIteratorMethod(iterable);
                if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
                // optimisation for array iterators
                if (isArrayIteratorMethod(iterFn)) {
                    for (index = 0, length = toLength(iterable.length); length > index; index++) {
                        result = AS_ENTRIES ?
                            boundFunction(anObject(step = iterable[index])[0], step[1]) :
                            boundFunction(iterable[index]);
                        if (result && result instanceof Result) return result;
                    }
                    return new Result(false);
                }
                iterator = iterFn.call(iterable);
            }

            next = iterator.next;
            while (!(step = next.call(iterator)).done) {
                result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
                if (typeof result == 'object' && result && result instanceof Result) return result;
            }
            return new Result(false);
        };

        iterate.stop = function(result) {
            return new Result(true, result);
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/iterators-core.js":
    /*!**********************************************************!*\
      !*** ./node_modules/core-js/internals/iterators-core.js ***!
      \**********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";

        var getPrototypeOf = __webpack_require__( /*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
        var createNonEnumerableProperty = __webpack_require__( /*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
        var has = __webpack_require__( /*! ../internals/has */ "./node_modules/core-js/internals/has.js");
        var wellKnownSymbol = __webpack_require__( /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
        var IS_PURE = __webpack_require__( /*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

        var ITERATOR = wellKnownSymbol('iterator');
        var BUGGY_SAFARI_ITERATORS = false;

        var returnThis = function() { return this; };

        // `%IteratorPrototype%` object
        // https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
        var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

        if ([].keys) {
            arrayIterator = [].keys();
            // Safari 8 has buggy iterators w/o `next`
            if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
            else {
                PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
                if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
            }
        }

        if (IteratorPrototype == undefined) IteratorPrototype = {};

        // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
        if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
            createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
        }

        module.exports = {
            IteratorPrototype: IteratorPrototype,
            BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/iterators.js":
    /*!*****************************************************!*\
      !*** ./node_modules/core-js/internals/iterators.js ***!
      \*****************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports) {

        module.exports = {};


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/microtask.js":
    /*!*****************************************************!*\
      !*** ./node_modules/core-js/internals/microtask.js ***!
      \*****************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var global = __webpack_require__( /*! ../internals/global */ "./node_modules/core-js/internals/global.js");
        var getOwnPropertyDescriptor = __webpack_require__( /*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
        var classof = __webpack_require__( /*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
        var macrotask = __webpack_require__( /*! ../internals/task */ "./node_modules/core-js/internals/task.js").set;
        var IS_IOS = __webpack_require__( /*! ../internals/engine-is-ios */ "./node_modules/core-js/internals/engine-is-ios.js");

        var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
        var process = global.process;
        var Promise = global.Promise;
        var IS_NODE = classof(process) == 'process';
        // Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
        var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
        var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

        var flush, head, last, notify, toggle, node, promise, then;

        // modern engines have queueMicrotask method
        if (!queueMicrotask) {
            flush = function() {
                var parent, fn;
                if (IS_NODE && (parent = process.domain)) parent.exit();
                while (head) {
                    fn = head.fn;
                    head = head.next;
                    try {
                        fn();
                    } catch (error) {
                        if (head) notify();
                        else last = undefined;
                        throw error;
                    }
                }
                last = undefined;
                if (parent) parent.enter();
            };

            // Node.js
            if (IS_NODE) {
                notify = function() {
                    process.nextTick(flush);
                };
                // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
            } else if (MutationObserver && !IS_IOS) {
                toggle = true;
                node = document.createTextNode('');
                new MutationObserver(flush).observe(node, { characterData: true });
                notify = function() {
                    node.data = toggle = !toggle;
                };
                // environments with maybe non-completely correct, but existent Promise
            } else if (Promise && Promise.resolve) {
                // Promise.resolve without an argument throws an error in LG WebOS 2
                promise = Promise.resolve(undefined);
                then = promise.then;
                notify = function() {
                    then.call(promise, flush);
                };
                // for other environments - macrotask based on:
                // - setImmediate
                // - MessageChannel
                // - window.postMessag
                // - onreadystatechange
                // - setTimeout
            } else {
                notify = function() {
                    // strange IE + webpack dev server bug - use .call(global)
                    macrotask.call(global, flush);
                };
            }
        }

        module.exports = queueMicrotask || function(fn) {
            var task = { fn: fn, next: undefined };
            if (last) last.next = task;
            if (!head) {
                head = task;
                notify();
            }
            last = task;
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/native-promise-constructor.js":
    /*!**********************************************************************!*\
      !*** ./node_modules/core-js/internals/native-promise-constructor.js ***!
      \**********************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var global = __webpack_require__( /*! ../internals/global */ "./node_modules/core-js/internals/global.js");

        module.exports = global.Promise;


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/native-symbol.js":
    /*!*********************************************************!*\
      !*** ./node_modules/core-js/internals/native-symbol.js ***!
      \*********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var fails = __webpack_require__( /*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

        module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
            // Chrome 38 Symbol has incorrect toString conversion
            // eslint-disable-next-line no-undef
            return !String(Symbol());
        });


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/native-weak-map.js":
    /*!***********************************************************!*\
      !*** ./node_modules/core-js/internals/native-weak-map.js ***!
      \***********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var global = __webpack_require__( /*! ../internals/global */ "./node_modules/core-js/internals/global.js");
        var inspectSource = __webpack_require__( /*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");

        var WeakMap = global.WeakMap;

        module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/new-promise-capability.js":
    /*!******************************************************************!*\
      !*** ./node_modules/core-js/internals/new-promise-capability.js ***!
      \******************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";

        var aFunction = __webpack_require__( /*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

        var PromiseCapability = function(C) {
            var resolve, reject;
            this.promise = new C(function($$resolve, $$reject) {
                if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
                resolve = $$resolve;
                reject = $$reject;
            });
            this.resolve = aFunction(resolve);
            this.reject = aFunction(reject);
        };

        // 25.4.1.5 NewPromiseCapability(C)
        module.exports.f = function(C) {
            return new PromiseCapability(C);
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/object-create.js":
    /*!*********************************************************!*\
      !*** ./node_modules/core-js/internals/object-create.js ***!
      \*********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var anObject = __webpack_require__( /*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
        var defineProperties = __webpack_require__( /*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
        var enumBugKeys = __webpack_require__( /*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
        var hiddenKeys = __webpack_require__( /*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
        var html = __webpack_require__( /*! ../internals/html */ "./node_modules/core-js/internals/html.js");
        var documentCreateElement = __webpack_require__( /*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
        var sharedKey = __webpack_require__( /*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");

        var GT = '>';
        var LT = '<';
        var PROTOTYPE = 'prototype';
        var SCRIPT = 'script';
        var IE_PROTO = sharedKey('IE_PROTO');

        var EmptyConstructor = function() { /* empty */ };

        var scriptTag = function(content) {
            return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
        };

        // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
        var NullProtoObjectViaActiveX = function(activeXDocument) {
            activeXDocument.write(scriptTag(''));
            activeXDocument.close();
            var temp = activeXDocument.parentWindow.Object;
            activeXDocument = null; // avoid memory leak
            return temp;
        };

        // Create object with fake `null` prototype: use iframe Object with cleared prototype
        var NullProtoObjectViaIFrame = function() {
            // Thrash, waste and sodomy: IE GC bug
            var iframe = documentCreateElement('iframe');
            var JS = 'java' + SCRIPT + ':';
            var iframeDocument;
            iframe.style.display = 'none';
            html.appendChild(iframe);
            // https://github.com/zloirock/core-js/issues/475
            iframe.src = String(JS);
            iframeDocument = iframe.contentWindow.document;
            iframeDocument.open();
            iframeDocument.write(scriptTag('document.F=Object'));
            iframeDocument.close();
            return iframeDocument.F;
        };

        // Check for document.domain and active x support
        // No need to use active x approach when document.domain is not set
        // see https://github.com/es-shims/es5-shim/issues/150
        // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
        // avoid IE GC bug
        var activeXDocument;
        var NullProtoObject = function() {
            try {
                /* global ActiveXObject */
                activeXDocument = document.domain && new ActiveXObject('htmlfile');
            } catch (error) { /* ignore */ }
            NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
            var length = enumBugKeys.length;
            while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
            return NullProtoObject();
        };

        hiddenKeys[IE_PROTO] = true;

        // `Object.create` method
        // https://tc39.github.io/ecma262/#sec-object.create
        module.exports = Object.create || function create(O, Properties) {
            var result;
            if (O !== null) {
                EmptyConstructor[PROTOTYPE] = anObject(O);
                result = new EmptyConstructor();
                EmptyConstructor[PROTOTYPE] = null;
                // add "__proto__" for Object.getPrototypeOf polyfill
                result[IE_PROTO] = O;
            } else result = NullProtoObject();
            return Properties === undefined ? result : defineProperties(result, Properties);
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/object-define-properties.js":
    /*!********************************************************************!*\
      !*** ./node_modules/core-js/internals/object-define-properties.js ***!
      \********************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var DESCRIPTORS = __webpack_require__( /*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
        var definePropertyModule = __webpack_require__( /*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
        var anObject = __webpack_require__( /*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
        var objectKeys = __webpack_require__( /*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

        // `Object.defineProperties` method
        // https://tc39.github.io/ecma262/#sec-object.defineproperties
        module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
            anObject(O);
            var keys = objectKeys(Properties);
            var length = keys.length;
            var index = 0;
            var key;
            while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
            return O;
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/object-define-property.js":
    /*!******************************************************************!*\
      !*** ./node_modules/core-js/internals/object-define-property.js ***!
      \******************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var DESCRIPTORS = __webpack_require__( /*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
        var IE8_DOM_DEFINE = __webpack_require__( /*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
        var anObject = __webpack_require__( /*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
        var toPrimitive = __webpack_require__( /*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

        var nativeDefineProperty = Object.defineProperty;

        // `Object.defineProperty` method
        // https://tc39.github.io/ecma262/#sec-object.defineproperty
        exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
            anObject(O);
            P = toPrimitive(P, true);
            anObject(Attributes);
            if (IE8_DOM_DEFINE) try {
                return nativeDefineProperty(O, P, Attributes);
            } catch (error) { /* empty */ }
            if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
            if ('value' in Attributes) O[P] = Attributes.value;
            return O;
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
    /*!******************************************************************************!*\
      !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
      \******************************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var DESCRIPTORS = __webpack_require__( /*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
        var propertyIsEnumerableModule = __webpack_require__( /*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
        var createPropertyDescriptor = __webpack_require__( /*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
        var toIndexedObject = __webpack_require__( /*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
        var toPrimitive = __webpack_require__( /*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
        var has = __webpack_require__( /*! ../internals/has */ "./node_modules/core-js/internals/has.js");
        var IE8_DOM_DEFINE = __webpack_require__( /*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

        var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

        // `Object.getOwnPropertyDescriptor` method
        // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
        exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
            O = toIndexedObject(O);
            P = toPrimitive(P, true);
            if (IE8_DOM_DEFINE) try {
                return nativeGetOwnPropertyDescriptor(O, P);
            } catch (error) { /* empty */ }
            if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/object-get-own-property-names-external.js":
    /*!**********************************************************************************!*\
      !*** ./node_modules/core-js/internals/object-get-own-property-names-external.js ***!
      \**********************************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var toIndexedObject = __webpack_require__( /*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
        var nativeGetOwnPropertyNames = __webpack_require__( /*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f;

        var toString = {}.toString;

        var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ?
            Object.getOwnPropertyNames(window) : [];

        var getWindowNames = function(it) {
            try {
                return nativeGetOwnPropertyNames(it);
            } catch (error) {
                return windowNames.slice();
            }
        };

        // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
        module.exports.f = function getOwnPropertyNames(it) {
            return windowNames && toString.call(it) == '[object Window]' ?
                getWindowNames(it) :
                nativeGetOwnPropertyNames(toIndexedObject(it));
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/object-get-own-property-names.js":
    /*!*************************************************************************!*\
      !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
      \*************************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var internalObjectKeys = __webpack_require__( /*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
        var enumBugKeys = __webpack_require__( /*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

        var hiddenKeys = enumBugKeys.concat('length', 'prototype');

        // `Object.getOwnPropertyNames` method
        // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
        exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
            return internalObjectKeys(O, hiddenKeys);
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/object-get-own-property-symbols.js":
    /*!***************************************************************************!*\
      !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
      \***************************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports) {

        exports.f = Object.getOwnPropertySymbols;


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/object-get-prototype-of.js":
    /*!*******************************************************************!*\
      !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
      \*******************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var has = __webpack_require__( /*! ../internals/has */ "./node_modules/core-js/internals/has.js");
        var toObject = __webpack_require__( /*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
        var sharedKey = __webpack_require__( /*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
        var CORRECT_PROTOTYPE_GETTER = __webpack_require__( /*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");

        var IE_PROTO = sharedKey('IE_PROTO');
        var ObjectPrototype = Object.prototype;

        // `Object.getPrototypeOf` method
        // https://tc39.github.io/ecma262/#sec-object.getprototypeof
        module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function(O) {
            O = toObject(O);
            if (has(O, IE_PROTO)) return O[IE_PROTO];
            if (typeof O.constructor == 'function' && O instanceof O.constructor) {
                return O.constructor.prototype;
            }
            return O instanceof Object ? ObjectPrototype : null;
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/object-keys-internal.js":
    /*!****************************************************************!*\
      !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
      \****************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var has = __webpack_require__( /*! ../internals/has */ "./node_modules/core-js/internals/has.js");
        var toIndexedObject = __webpack_require__( /*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
        var indexOf = __webpack_require__( /*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
        var hiddenKeys = __webpack_require__( /*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

        module.exports = function(object, names) {
            var O = toIndexedObject(object);
            var i = 0;
            var result = [];
            var key;
            for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
            // Don't enum bug & hidden keys
            while (names.length > i)
                if (has(O, key = names[i++])) {
                    ~indexOf(result, key) || result.push(key);
                }
            return result;
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/object-keys.js":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/internals/object-keys.js ***!
      \*******************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var internalObjectKeys = __webpack_require__( /*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
        var enumBugKeys = __webpack_require__( /*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

        // `Object.keys` method
        // https://tc39.github.io/ecma262/#sec-object.keys
        module.exports = Object.keys || function keys(O) {
            return internalObjectKeys(O, enumBugKeys);
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/object-property-is-enumerable.js":
    /*!*************************************************************************!*\
      !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
      \*************************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";

        var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
        var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

        // Nashorn ~ JDK8 bug
        var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

        // `Object.prototype.propertyIsEnumerable` method implementation
        // https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
        exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
            var descriptor = getOwnPropertyDescriptor(this, V);
            return !!descriptor && descriptor.enumerable;
        } : nativePropertyIsEnumerable;


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/object-set-prototype-of.js":
    /*!*******************************************************************!*\
      !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
      \*******************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var anObject = __webpack_require__( /*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
        var aPossiblePrototype = __webpack_require__( /*! ../internals/a-possible-prototype */ "./node_modules/core-js/internals/a-possible-prototype.js");

        // `Object.setPrototypeOf` method
        // https://tc39.github.io/ecma262/#sec-object.setprototypeof
        // Works with __proto__ only. Old v8 can't work with null proto objects.
        /* eslint-disable no-proto */
        module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function() {
            var CORRECT_SETTER = false;
            var test = {};
            var setter;
            try {
                setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
                setter.call(test, []);
                CORRECT_SETTER = test instanceof Array;
            } catch (error) { /* empty */ }
            return function setPrototypeOf(O, proto) {
                anObject(O);
                aPossiblePrototype(proto);
                if (CORRECT_SETTER) setter.call(O, proto);
                else O.__proto__ = proto;
                return O;
            };
        }() : undefined);


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/object-to-string.js":
    /*!************************************************************!*\
      !*** ./node_modules/core-js/internals/object-to-string.js ***!
      \************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";

        var TO_STRING_TAG_SUPPORT = __webpack_require__( /*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
        var classof = __webpack_require__( /*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");

        // `Object.prototype.toString` method implementation
        // https://tc39.github.io/ecma262/#sec-object.prototype.tostring
        module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
            return '[object ' + classof(this) + ']';
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/own-keys.js":
    /*!****************************************************!*\
      !*** ./node_modules/core-js/internals/own-keys.js ***!
      \****************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var getBuiltIn = __webpack_require__( /*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
        var getOwnPropertyNamesModule = __webpack_require__( /*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
        var getOwnPropertySymbolsModule = __webpack_require__( /*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
        var anObject = __webpack_require__( /*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

        // all object keys, includes non-enumerable and symbols
        module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
            var keys = getOwnPropertyNamesModule.f(anObject(it));
            var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
            return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/path.js":
    /*!************************************************!*\
      !*** ./node_modules/core-js/internals/path.js ***!
      \************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var global = __webpack_require__( /*! ../internals/global */ "./node_modules/core-js/internals/global.js");

        module.exports = global;


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/perform.js":
    /*!***************************************************!*\
      !*** ./node_modules/core-js/internals/perform.js ***!
      \***************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports) {

        module.exports = function(exec) {
            try {
                return { error: false, value: exec() };
            } catch (error) {
                return { error: true, value: error };
            }
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/promise-resolve.js":
    /*!***********************************************************!*\
      !*** ./node_modules/core-js/internals/promise-resolve.js ***!
      \***********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var anObject = __webpack_require__( /*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
        var isObject = __webpack_require__( /*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
        var newPromiseCapability = __webpack_require__( /*! ../internals/new-promise-capability */ "./node_modules/core-js/internals/new-promise-capability.js");

        module.exports = function(C, x) {
            anObject(C);
            if (isObject(x) && x.constructor === C) return x;
            var promiseCapability = newPromiseCapability.f(C);
            var resolve = promiseCapability.resolve;
            resolve(x);
            return promiseCapability.promise;
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/redefine-all.js":
    /*!********************************************************!*\
      !*** ./node_modules/core-js/internals/redefine-all.js ***!
      \********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var redefine = __webpack_require__( /*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

        module.exports = function(target, src, options) {
            for (var key in src) redefine(target, key, src[key], options);
            return target;
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/redefine.js":
    /*!****************************************************!*\
      !*** ./node_modules/core-js/internals/redefine.js ***!
      \****************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var global = __webpack_require__( /*! ../internals/global */ "./node_modules/core-js/internals/global.js");
        var createNonEnumerableProperty = __webpack_require__( /*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
        var has = __webpack_require__( /*! ../internals/has */ "./node_modules/core-js/internals/has.js");
        var setGlobal = __webpack_require__( /*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
        var inspectSource = __webpack_require__( /*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");
        var InternalStateModule = __webpack_require__( /*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

        var getInternalState = InternalStateModule.get;
        var enforceInternalState = InternalStateModule.enforce;
        var TEMPLATE = String(String).split('String');

        (module.exports = function(O, key, value, options) {
            var unsafe = options ? !!options.unsafe : false;
            var simple = options ? !!options.enumerable : false;
            var noTargetGet = options ? !!options.noTargetGet : false;
            if (typeof value == 'function') {
                if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
                enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
            }
            if (O === global) {
                if (simple) O[key] = value;
                else setGlobal(key, value);
                return;
            } else if (!unsafe) {
                delete O[key];
            } else if (!noTargetGet && O[key]) {
                simple = true;
            }
            if (simple) O[key] = value;
            else createNonEnumerableProperty(O, key, value);
            // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
        })(Function.prototype, 'toString', function toString() {
            return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
        });


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/regexp-flags.js":
    /*!********************************************************!*\
      !*** ./node_modules/core-js/internals/regexp-flags.js ***!
      \********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";

        var anObject = __webpack_require__( /*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

        // `RegExp.prototype.flags` getter implementation
        // https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
        module.exports = function() {
            var that = anObject(this);
            var result = '';
            if (that.global) result += 'g';
            if (that.ignoreCase) result += 'i';
            if (that.multiline) result += 'm';
            if (that.dotAll) result += 's';
            if (that.unicode) result += 'u';
            if (that.sticky) result += 'y';
            return result;
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/require-object-coercible.js":
    /*!********************************************************************!*\
      !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
      \********************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports) {

        // `RequireObjectCoercible` abstract operation
        // https://tc39.github.io/ecma262/#sec-requireobjectcoercible
        module.exports = function(it) {
            if (it == undefined) throw TypeError("Can't call method on " + it);
            return it;
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/set-global.js":
    /*!******************************************************!*\
      !*** ./node_modules/core-js/internals/set-global.js ***!
      \******************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var global = __webpack_require__( /*! ../internals/global */ "./node_modules/core-js/internals/global.js");
        var createNonEnumerableProperty = __webpack_require__( /*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

        module.exports = function(key, value) {
            try {
                createNonEnumerableProperty(global, key, value);
            } catch (error) {
                global[key] = value;
            }
            return value;
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/set-species.js":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/internals/set-species.js ***!
      \*******************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";

        var getBuiltIn = __webpack_require__( /*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
        var definePropertyModule = __webpack_require__( /*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
        var wellKnownSymbol = __webpack_require__( /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
        var DESCRIPTORS = __webpack_require__( /*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

        var SPECIES = wellKnownSymbol('species');

        module.exports = function(CONSTRUCTOR_NAME) {
            var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
            var defineProperty = definePropertyModule.f;

            if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
                defineProperty(Constructor, SPECIES, {
                    configurable: true,
                    get: function() { return this; }
                });
            }
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/set-to-string-tag.js":
    /*!*************************************************************!*\
      !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
      \*************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var defineProperty = __webpack_require__( /*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
        var has = __webpack_require__( /*! ../internals/has */ "./node_modules/core-js/internals/has.js");
        var wellKnownSymbol = __webpack_require__( /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

        var TO_STRING_TAG = wellKnownSymbol('toStringTag');

        module.exports = function(it, TAG, STATIC) {
            if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
                defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
            }
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/shared-key.js":
    /*!******************************************************!*\
      !*** ./node_modules/core-js/internals/shared-key.js ***!
      \******************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var shared = __webpack_require__( /*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
        var uid = __webpack_require__( /*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

        var keys = shared('keys');

        module.exports = function(key) {
            return keys[key] || (keys[key] = uid(key));
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/shared-store.js":
    /*!********************************************************!*\
      !*** ./node_modules/core-js/internals/shared-store.js ***!
      \********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var global = __webpack_require__( /*! ../internals/global */ "./node_modules/core-js/internals/global.js");
        var setGlobal = __webpack_require__( /*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

        var SHARED = '__core-js_shared__';
        var store = global[SHARED] || setGlobal(SHARED, {});

        module.exports = store;


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/shared.js":
    /*!**************************************************!*\
      !*** ./node_modules/core-js/internals/shared.js ***!
      \**************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var IS_PURE = __webpack_require__( /*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
        var store = __webpack_require__( /*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

        (module.exports = function(key, value) {
            return store[key] || (store[key] = value !== undefined ? value : {});
        })('versions', []).push({
            version: '3.6.5',
            mode: IS_PURE ? 'pure' : 'global',
            copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
        });


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/species-constructor.js":
    /*!***************************************************************!*\
      !*** ./node_modules/core-js/internals/species-constructor.js ***!
      \***************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var anObject = __webpack_require__( /*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
        var aFunction = __webpack_require__( /*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
        var wellKnownSymbol = __webpack_require__( /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

        var SPECIES = wellKnownSymbol('species');

        // `SpeciesConstructor` abstract operation
        // https://tc39.github.io/ecma262/#sec-speciesconstructor
        module.exports = function(O, defaultConstructor) {
            var C = anObject(O).constructor;
            var S;
            return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/string-multibyte.js":
    /*!************************************************************!*\
      !*** ./node_modules/core-js/internals/string-multibyte.js ***!
      \************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var toInteger = __webpack_require__( /*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
        var requireObjectCoercible = __webpack_require__( /*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

        // `String.prototype.{ codePointAt, at }` methods implementation
        var createMethod = function(CONVERT_TO_STRING) {
            return function($this, pos) {
                var S = String(requireObjectCoercible($this));
                var position = toInteger(pos);
                var size = S.length;
                var first, second;
                if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
                first = S.charCodeAt(position);
                return first < 0xD800 || first > 0xDBFF || position + 1 === size ||
                    (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF ?
                    CONVERT_TO_STRING ? S.charAt(position) : first :
                    CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
            };
        };

        module.exports = {
            // `String.prototype.codePointAt` method
            // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
            codeAt: createMethod(false),
            // `String.prototype.at` method
            // https://github.com/mathiasbynens/String.prototype.at
            charAt: createMethod(true)
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/string-trim-forced.js":
    /*!**************************************************************!*\
      !*** ./node_modules/core-js/internals/string-trim-forced.js ***!
      \**************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var fails = __webpack_require__( /*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
        var whitespaces = __webpack_require__( /*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

        var non = '\u200B\u0085\u180E';

        // check that a method works with the correct list
        // of whitespaces and has a correct name
        module.exports = function(METHOD_NAME) {
            return fails(function() {
                return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
            });
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/string-trim.js":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/internals/string-trim.js ***!
      \*******************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var requireObjectCoercible = __webpack_require__( /*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
        var whitespaces = __webpack_require__( /*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

        var whitespace = '[' + whitespaces + ']';
        var ltrim = RegExp('^' + whitespace + whitespace + '*');
        var rtrim = RegExp(whitespace + whitespace + '*$');

        // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
        var createMethod = function(TYPE) {
            return function($this) {
                var string = String(requireObjectCoercible($this));
                if (TYPE & 1) string = string.replace(ltrim, '');
                if (TYPE & 2) string = string.replace(rtrim, '');
                return string;
            };
        };

        module.exports = {
            // `String.prototype.{ trimLeft, trimStart }` methods
            // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
            start: createMethod(1),
            // `String.prototype.{ trimRight, trimEnd }` methods
            // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
            end: createMethod(2),
            // `String.prototype.trim` method
            // https://tc39.github.io/ecma262/#sec-string.prototype.trim
            trim: createMethod(3)
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/task.js":
    /*!************************************************!*\
      !*** ./node_modules/core-js/internals/task.js ***!
      \************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var global = __webpack_require__( /*! ../internals/global */ "./node_modules/core-js/internals/global.js");
        var fails = __webpack_require__( /*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
        var classof = __webpack_require__( /*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
        var bind = __webpack_require__( /*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
        var html = __webpack_require__( /*! ../internals/html */ "./node_modules/core-js/internals/html.js");
        var createElement = __webpack_require__( /*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
        var IS_IOS = __webpack_require__( /*! ../internals/engine-is-ios */ "./node_modules/core-js/internals/engine-is-ios.js");

        var location = global.location;
        var set = global.setImmediate;
        var clear = global.clearImmediate;
        var process = global.process;
        var MessageChannel = global.MessageChannel;
        var Dispatch = global.Dispatch;
        var counter = 0;
        var queue = {};
        var ONREADYSTATECHANGE = 'onreadystatechange';
        var defer, channel, port;

        var run = function(id) {
            // eslint-disable-next-line no-prototype-builtins
            if (queue.hasOwnProperty(id)) {
                var fn = queue[id];
                delete queue[id];
                fn();
            }
        };

        var runner = function(id) {
            return function() {
                run(id);
            };
        };

        var listener = function(event) {
            run(event.data);
        };

        var post = function(id) {
            // old engines have not location.origin
            global.postMessage(id + '', location.protocol + '//' + location.host);
        };

        // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
        if (!set || !clear) {
            set = function setImmediate(fn) {
                var args = [];
                var i = 1;
                while (arguments.length > i) args.push(arguments[i++]);
                queue[++counter] = function() {
                    // eslint-disable-next-line no-new-func
                    (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
                };
                defer(counter);
                return counter;
            };
            clear = function clearImmediate(id) {
                delete queue[id];
            };
            // Node.js 0.8-
            if (classof(process) == 'process') {
                defer = function(id) {
                    process.nextTick(runner(id));
                };
                // Sphere (JS game engine) Dispatch API
            } else if (Dispatch && Dispatch.now) {
                defer = function(id) {
                    Dispatch.now(runner(id));
                };
                // Browsers with MessageChannel, includes WebWorkers
                // except iOS - https://github.com/zloirock/core-js/issues/624
            } else if (MessageChannel && !IS_IOS) {
                channel = new MessageChannel();
                port = channel.port2;
                channel.port1.onmessage = listener;
                defer = bind(port.postMessage, port, 1);
                // Browsers with postMessage, skip WebWorkers
                // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
            } else if (
                global.addEventListener &&
                typeof postMessage == 'function' &&
                !global.importScripts &&
                !fails(post) &&
                location.protocol !== 'file:'
            ) {
                defer = post;
                global.addEventListener('message', listener, false);
                // IE8-
            } else if (ONREADYSTATECHANGE in createElement('script')) {
                defer = function(id) {
                    html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function() {
                        html.removeChild(this);
                        run(id);
                    };
                };
                // Rest old browsers
            } else {
                defer = function(id) {
                    setTimeout(runner(id), 0);
                };
            }
        }

        module.exports = {
            set: set,
            clear: clear
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/to-absolute-index.js":
    /*!*************************************************************!*\
      !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
      \*************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var toInteger = __webpack_require__( /*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

        var max = Math.max;
        var min = Math.min;

        // Helper for a popular repeating case of the spec:
        // Let integer be ? ToInteger(index).
        // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
        module.exports = function(index, length) {
            var integer = toInteger(index);
            return integer < 0 ? max(integer + length, 0) : min(integer, length);
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/to-indexed-object.js":
    /*!*************************************************************!*\
      !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
      \*************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        // toObject with fallback for non-array-like ES3 strings
        var IndexedObject = __webpack_require__( /*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
        var requireObjectCoercible = __webpack_require__( /*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

        module.exports = function(it) {
            return IndexedObject(requireObjectCoercible(it));
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/to-integer.js":
    /*!******************************************************!*\
      !*** ./node_modules/core-js/internals/to-integer.js ***!
      \******************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports) {

        var ceil = Math.ceil;
        var floor = Math.floor;

        // `ToInteger` abstract operation
        // https://tc39.github.io/ecma262/#sec-tointeger
        module.exports = function(argument) {
            return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/to-length.js":
    /*!*****************************************************!*\
      !*** ./node_modules/core-js/internals/to-length.js ***!
      \*****************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var toInteger = __webpack_require__( /*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

        var min = Math.min;

        // `ToLength` abstract operation
        // https://tc39.github.io/ecma262/#sec-tolength
        module.exports = function(argument) {
            return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/to-object.js":
    /*!*****************************************************!*\
      !*** ./node_modules/core-js/internals/to-object.js ***!
      \*****************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var requireObjectCoercible = __webpack_require__( /*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

        // `ToObject` abstract operation
        // https://tc39.github.io/ecma262/#sec-toobject
        module.exports = function(argument) {
            return Object(requireObjectCoercible(argument));
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/to-primitive.js":
    /*!********************************************************!*\
      !*** ./node_modules/core-js/internals/to-primitive.js ***!
      \********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var isObject = __webpack_require__( /*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

        // `ToPrimitive` abstract operation
        // https://tc39.github.io/ecma262/#sec-toprimitive
        // instead of the ES6 spec version, we didn't implement @@toPrimitive case
        // and the second argument - flag - preferred type is a string
        module.exports = function(input, PREFERRED_STRING) {
            if (!isObject(input)) return input;
            var fn, val;
            if (PREFERRED_STRING && typeof(fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
            if (typeof(fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
            if (!PREFERRED_STRING && typeof(fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
            throw TypeError("Can't convert object to primitive value");
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/to-string-tag-support.js":
    /*!*****************************************************************!*\
      !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
      \*****************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var wellKnownSymbol = __webpack_require__( /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

        var TO_STRING_TAG = wellKnownSymbol('toStringTag');
        var test = {};

        test[TO_STRING_TAG] = 'z';

        module.exports = String(test) === '[object z]';


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/uid.js":
    /*!***********************************************!*\
      !*** ./node_modules/core-js/internals/uid.js ***!
      \***********************************************/
    /*! no static exports found */
    /***/
        (function(module, exports) {

        var id = 0;
        var postfix = Math.random();

        module.exports = function(key) {
            return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/use-symbol-as-uid.js":
    /*!*************************************************************!*\
      !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
      \*************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var NATIVE_SYMBOL = __webpack_require__( /*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

        module.exports = NATIVE_SYMBOL
            // eslint-disable-next-line no-undef
            &&
            !Symbol.sham
            // eslint-disable-next-line no-undef
            &&
            typeof Symbol.iterator == 'symbol';


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/well-known-symbol-wrapped.js":
    /*!*********************************************************************!*\
      !*** ./node_modules/core-js/internals/well-known-symbol-wrapped.js ***!
      \*********************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var wellKnownSymbol = __webpack_require__( /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

        exports.f = wellKnownSymbol;


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/well-known-symbol.js":
    /*!*************************************************************!*\
      !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
      \*************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var global = __webpack_require__( /*! ../internals/global */ "./node_modules/core-js/internals/global.js");
        var shared = __webpack_require__( /*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
        var has = __webpack_require__( /*! ../internals/has */ "./node_modules/core-js/internals/has.js");
        var uid = __webpack_require__( /*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
        var NATIVE_SYMBOL = __webpack_require__( /*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
        var USE_SYMBOL_AS_UID = __webpack_require__( /*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

        var WellKnownSymbolsStore = shared('wks');
        var Symbol = global.Symbol;
        var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

        module.exports = function(name) {
            if (!has(WellKnownSymbolsStore, name)) {
                if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
                else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
            }
            return WellKnownSymbolsStore[name];
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/internals/whitespaces.js":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/internals/whitespaces.js ***!
      \*******************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports) {

        // a string of all valid unicode whitespaces
        // eslint-disable-next-line max-len
        module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/es.array.concat.js":
    /*!*********************************************************!*\
      !*** ./node_modules/core-js/modules/es.array.concat.js ***!
      \*********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";

        var $ = __webpack_require__( /*! ../internals/export */ "./node_modules/core-js/internals/export.js");
        var fails = __webpack_require__( /*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
        var isArray = __webpack_require__( /*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
        var isObject = __webpack_require__( /*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
        var toObject = __webpack_require__( /*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
        var toLength = __webpack_require__( /*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
        var createProperty = __webpack_require__( /*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
        var arraySpeciesCreate = __webpack_require__( /*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
        var arrayMethodHasSpeciesSupport = __webpack_require__( /*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
        var wellKnownSymbol = __webpack_require__( /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
        var V8_VERSION = __webpack_require__( /*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

        var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
        var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
        var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

        // We can't use this feature detection in V8 since it causes
        // deoptimization and serious performance degradation
        // https://github.com/zloirock/core-js/issues/679
        var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function() {
            var array = [];
            array[IS_CONCAT_SPREADABLE] = false;
            return array.concat()[0] !== array;
        });

        var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

        var isConcatSpreadable = function(O) {
            if (!isObject(O)) return false;
            var spreadable = O[IS_CONCAT_SPREADABLE];
            return spreadable !== undefined ? !!spreadable : isArray(O);
        };

        var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

        // `Array.prototype.concat` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.concat
        // with adding support of @@isConcatSpreadable and @@species
        $({ target: 'Array', proto: true, forced: FORCED }, {
            concat: function concat(arg) { // eslint-disable-line no-unused-vars
                var O = toObject(this);
                var A = arraySpeciesCreate(O, 0);
                var n = 0;
                var i, k, length, len, E;
                for (i = -1, length = arguments.length; i < length; i++) {
                    E = i === -1 ? O : arguments[i];
                    if (isConcatSpreadable(E)) {
                        len = toLength(E.length);
                        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                        for (k = 0; k < len; k++, n++)
                            if (k in E) createProperty(A, n, E[k]);
                    } else {
                        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                        createProperty(A, n++, E);
                    }
                }
                A.length = n;
                return A;
            }
        });


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/es.array.filter.js":
    /*!*********************************************************!*\
      !*** ./node_modules/core-js/modules/es.array.filter.js ***!
      \*********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";

        var $ = __webpack_require__( /*! ../internals/export */ "./node_modules/core-js/internals/export.js");
        var $filter = __webpack_require__( /*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").filter;
        var arrayMethodHasSpeciesSupport = __webpack_require__( /*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
        var arrayMethodUsesToLength = __webpack_require__( /*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

        var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
        // Edge 14- issue
        var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

        // `Array.prototype.filter` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.filter
        // with adding support of @@species
        $({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
            filter: function filter(callbackfn /* , thisArg */ ) {
                return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
            }
        });


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/es.array.for-each.js":
    /*!***********************************************************!*\
      !*** ./node_modules/core-js/modules/es.array.for-each.js ***!
      \***********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";

        var $ = __webpack_require__( /*! ../internals/export */ "./node_modules/core-js/internals/export.js");
        var forEach = __webpack_require__( /*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");

        // `Array.prototype.forEach` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
        $({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
            forEach: forEach
        });


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/es.array.from.js":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/modules/es.array.from.js ***!
      \*******************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var $ = __webpack_require__( /*! ../internals/export */ "./node_modules/core-js/internals/export.js");
        var from = __webpack_require__( /*! ../internals/array-from */ "./node_modules/core-js/internals/array-from.js");
        var checkCorrectnessOfIteration = __webpack_require__( /*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");

        var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function(iterable) {
            Array.from(iterable);
        });

        // `Array.from` method
        // https://tc39.github.io/ecma262/#sec-array.from
        $({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
            from: from
        });


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/es.array.is-array.js":
    /*!***********************************************************!*\
      !*** ./node_modules/core-js/modules/es.array.is-array.js ***!
      \***********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var $ = __webpack_require__( /*! ../internals/export */ "./node_modules/core-js/internals/export.js");
        var isArray = __webpack_require__( /*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");

        // `Array.isArray` method
        // https://tc39.github.io/ecma262/#sec-array.isarray
        $({ target: 'Array', stat: true }, {
            isArray: isArray
        });


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/es.array.iterator.js":
    /*!***********************************************************!*\
      !*** ./node_modules/core-js/modules/es.array.iterator.js ***!
      \***********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";

        var toIndexedObject = __webpack_require__( /*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
        var addToUnscopables = __webpack_require__( /*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");
        var Iterators = __webpack_require__( /*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
        var InternalStateModule = __webpack_require__( /*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
        var defineIterator = __webpack_require__( /*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

        var ARRAY_ITERATOR = 'Array Iterator';
        var setInternalState = InternalStateModule.set;
        var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

        // `Array.prototype.entries` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.entries
        // `Array.prototype.keys` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.keys
        // `Array.prototype.values` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.values
        // `Array.prototype[@@iterator]` method
        // https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
        // `CreateArrayIterator` internal method
        // https://tc39.github.io/ecma262/#sec-createarrayiterator
        module.exports = defineIterator(Array, 'Array', function(iterated, kind) {
            setInternalState(this, {
                type: ARRAY_ITERATOR,
                target: toIndexedObject(iterated), // target
                index: 0, // next index
                kind: kind // kind
            });
            // `%ArrayIteratorPrototype%.next` method
            // https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
        }, function() {
            var state = getInternalState(this);
            var target = state.target;
            var kind = state.kind;
            var index = state.index++;
            if (!target || index >= target.length) {
                state.target = undefined;
                return { value: undefined, done: true };
            }
            if (kind == 'keys') return { value: index, done: false };
            if (kind == 'values') return { value: target[index], done: false };
            return { value: [index, target[index]], done: false };
        }, 'values');

        // argumentsList[@@iterator] is %ArrayProto_values%
        // https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
        // https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
        Iterators.Arguments = Iterators.Array;

        // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
        addToUnscopables('keys');
        addToUnscopables('values');
        addToUnscopables('entries');


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/es.array.join.js":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/modules/es.array.join.js ***!
      \*******************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";

        var $ = __webpack_require__( /*! ../internals/export */ "./node_modules/core-js/internals/export.js");
        var IndexedObject = __webpack_require__( /*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
        var toIndexedObject = __webpack_require__( /*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
        var arrayMethodIsStrict = __webpack_require__( /*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

        var nativeJoin = [].join;

        var ES3_STRINGS = IndexedObject != Object;
        var STRICT_METHOD = arrayMethodIsStrict('join', ',');

        // `Array.prototype.join` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.join
        $({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
            join: function join(separator) {
                return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
            }
        });


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/es.array.map.js":
    /*!******************************************************!*\
      !*** ./node_modules/core-js/modules/es.array.map.js ***!
      \******************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";

        var $ = __webpack_require__( /*! ../internals/export */ "./node_modules/core-js/internals/export.js");
        var $map = __webpack_require__( /*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").map;
        var arrayMethodHasSpeciesSupport = __webpack_require__( /*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
        var arrayMethodUsesToLength = __webpack_require__( /*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

        var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
        // FF49- issue
        var USES_TO_LENGTH = arrayMethodUsesToLength('map');

        // `Array.prototype.map` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.map
        // with adding support of @@species
        $({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
            map: function map(callbackfn /* , thisArg */ ) {
                return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
            }
        });


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/es.array.slice.js":
    /*!********************************************************!*\
      !*** ./node_modules/core-js/modules/es.array.slice.js ***!
      \********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";

        var $ = __webpack_require__( /*! ../internals/export */ "./node_modules/core-js/internals/export.js");
        var isObject = __webpack_require__( /*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
        var isArray = __webpack_require__( /*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
        var toAbsoluteIndex = __webpack_require__( /*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
        var toLength = __webpack_require__( /*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
        var toIndexedObject = __webpack_require__( /*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
        var createProperty = __webpack_require__( /*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
        var wellKnownSymbol = __webpack_require__( /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
        var arrayMethodHasSpeciesSupport = __webpack_require__( /*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
        var arrayMethodUsesToLength = __webpack_require__( /*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

        var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
        var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

        var SPECIES = wellKnownSymbol('species');
        var nativeSlice = [].slice;
        var max = Math.max;

        // `Array.prototype.slice` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.slice
        // fallback for not array-like ES3 strings and DOM objects
        $({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
            slice: function slice(start, end) {
                var O = toIndexedObject(this);
                var length = toLength(O.length);
                var k = toAbsoluteIndex(start, length);
                var fin = toAbsoluteIndex(end === undefined ? length : end, length);
                // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
                var Constructor, result, n;
                if (isArray(O)) {
                    Constructor = O.constructor;
                    // cross-realm fallback
                    if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
                        Constructor = undefined;
                    } else if (isObject(Constructor)) {
                        Constructor = Constructor[SPECIES];
                        if (Constructor === null) Constructor = undefined;
                    }
                    if (Constructor === Array || Constructor === undefined) {
                        return nativeSlice.call(O, k, fin);
                    }
                }
                result = new(Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
                for (n = 0; k < fin; k++, n++)
                    if (k in O) createProperty(result, n, O[k]);
                result.length = n;
                return result;
            }
        });


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/es.date.to-string.js":
    /*!***********************************************************!*\
      !*** ./node_modules/core-js/modules/es.date.to-string.js ***!
      \***********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var redefine = __webpack_require__( /*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

        var DatePrototype = Date.prototype;
        var INVALID_DATE = 'Invalid Date';
        var TO_STRING = 'toString';
        var nativeDateToString = DatePrototype[TO_STRING];
        var getTime = DatePrototype.getTime;

        // `Date.prototype.toString` method
        // https://tc39.github.io/ecma262/#sec-date.prototype.tostring
        if (new Date(NaN) + '' != INVALID_DATE) {
            redefine(DatePrototype, TO_STRING, function toString() {
                var value = getTime.call(this);
                // eslint-disable-next-line no-self-compare
                return value === value ? nativeDateToString.call(this) : INVALID_DATE;
            });
        }


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/es.function.name.js":
    /*!**********************************************************!*\
      !*** ./node_modules/core-js/modules/es.function.name.js ***!
      \**********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var DESCRIPTORS = __webpack_require__( /*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
        var defineProperty = __webpack_require__( /*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

        var FunctionPrototype = Function.prototype;
        var FunctionPrototypeToString = FunctionPrototype.toString;
        var nameRE = /^\s*function ([^ (]*)/;
        var NAME = 'name';

        // Function instances `.name` property
        // https://tc39.github.io/ecma262/#sec-function-instances-name
        if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
            defineProperty(FunctionPrototype, NAME, {
                configurable: true,
                get: function() {
                    try {
                        return FunctionPrototypeToString.call(this).match(nameRE)[1];
                    } catch (error) {
                        return '';
                    }
                }
            });
        }


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/es.object.to-string.js":
    /*!*************************************************************!*\
      !*** ./node_modules/core-js/modules/es.object.to-string.js ***!
      \*************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var TO_STRING_TAG_SUPPORT = __webpack_require__( /*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
        var redefine = __webpack_require__( /*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
        var toString = __webpack_require__( /*! ../internals/object-to-string */ "./node_modules/core-js/internals/object-to-string.js");

        // `Object.prototype.toString` method
        // https://tc39.github.io/ecma262/#sec-object.prototype.tostring
        if (!TO_STRING_TAG_SUPPORT) {
            redefine(Object.prototype, 'toString', toString, { unsafe: true });
        }


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/es.promise.js":
    /*!****************************************************!*\
      !*** ./node_modules/core-js/modules/es.promise.js ***!
      \****************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";

        var $ = __webpack_require__( /*! ../internals/export */ "./node_modules/core-js/internals/export.js");
        var IS_PURE = __webpack_require__( /*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
        var global = __webpack_require__( /*! ../internals/global */ "./node_modules/core-js/internals/global.js");
        var getBuiltIn = __webpack_require__( /*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
        var NativePromise = __webpack_require__( /*! ../internals/native-promise-constructor */ "./node_modules/core-js/internals/native-promise-constructor.js");
        var redefine = __webpack_require__( /*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
        var redefineAll = __webpack_require__( /*! ../internals/redefine-all */ "./node_modules/core-js/internals/redefine-all.js");
        var setToStringTag = __webpack_require__( /*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
        var setSpecies = __webpack_require__( /*! ../internals/set-species */ "./node_modules/core-js/internals/set-species.js");
        var isObject = __webpack_require__( /*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
        var aFunction = __webpack_require__( /*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
        var anInstance = __webpack_require__( /*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
        var classof = __webpack_require__( /*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
        var inspectSource = __webpack_require__( /*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");
        var iterate = __webpack_require__( /*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");
        var checkCorrectnessOfIteration = __webpack_require__( /*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");
        var speciesConstructor = __webpack_require__( /*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");
        var task = __webpack_require__( /*! ../internals/task */ "./node_modules/core-js/internals/task.js").set;
        var microtask = __webpack_require__( /*! ../internals/microtask */ "./node_modules/core-js/internals/microtask.js");
        var promiseResolve = __webpack_require__( /*! ../internals/promise-resolve */ "./node_modules/core-js/internals/promise-resolve.js");
        var hostReportErrors = __webpack_require__( /*! ../internals/host-report-errors */ "./node_modules/core-js/internals/host-report-errors.js");
        var newPromiseCapabilityModule = __webpack_require__( /*! ../internals/new-promise-capability */ "./node_modules/core-js/internals/new-promise-capability.js");
        var perform = __webpack_require__( /*! ../internals/perform */ "./node_modules/core-js/internals/perform.js");
        var InternalStateModule = __webpack_require__( /*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
        var isForced = __webpack_require__( /*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
        var wellKnownSymbol = __webpack_require__( /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
        var V8_VERSION = __webpack_require__( /*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

        var SPECIES = wellKnownSymbol('species');
        var PROMISE = 'Promise';
        var getInternalState = InternalStateModule.get;
        var setInternalState = InternalStateModule.set;
        var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
        var PromiseConstructor = NativePromise;
        var TypeError = global.TypeError;
        var document = global.document;
        var process = global.process;
        var $fetch = getBuiltIn('fetch');
        var newPromiseCapability = newPromiseCapabilityModule.f;
        var newGenericPromiseCapability = newPromiseCapability;
        var IS_NODE = classof(process) == 'process';
        var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
        var UNHANDLED_REJECTION = 'unhandledrejection';
        var REJECTION_HANDLED = 'rejectionhandled';
        var PENDING = 0;
        var FULFILLED = 1;
        var REJECTED = 2;
        var HANDLED = 1;
        var UNHANDLED = 2;
        var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

        var FORCED = isForced(PROMISE, function() {
            var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
            if (!GLOBAL_CORE_JS_PROMISE) {
                // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
                // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
                // We can't detect it synchronously, so just check versions
                if (V8_VERSION === 66) return true;
                // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
                if (!IS_NODE && typeof PromiseRejectionEvent != 'function') return true;
            }
            // We need Promise#finally in the pure version for preventing prototype pollution
            if (IS_PURE && !PromiseConstructor.prototype['finally']) return true;
            // We can't use @@species feature detection in V8 since it causes
            // deoptimization and performance degradation
            // https://github.com/zloirock/core-js/issues/679
            if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
            // Detect correctness of subclassing with @@species support
            var promise = PromiseConstructor.resolve(1);
            var FakePromise = function(exec) {
                exec(function() { /* empty */ }, function() { /* empty */ });
            };
            var constructor = promise.constructor = {};
            constructor[SPECIES] = FakePromise;
            return !(promise.then(function() { /* empty */ }) instanceof FakePromise);
        });

        var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function(iterable) {
            PromiseConstructor.all(iterable)['catch'](function() { /* empty */ });
        });

        // helpers
        var isThenable = function(it) {
            var then;
            return isObject(it) && typeof(then = it.then) == 'function' ? then : false;
        };

        var notify = function(promise, state, isReject) {
            if (state.notified) return;
            state.notified = true;
            var chain = state.reactions;
            microtask(function() {
                var value = state.value;
                var ok = state.state == FULFILLED;
                var index = 0;
                // variable length - can't use forEach
                while (chain.length > index) {
                    var reaction = chain[index++];
                    var handler = ok ? reaction.ok : reaction.fail;
                    var resolve = reaction.resolve;
                    var reject = reaction.reject;
                    var domain = reaction.domain;
                    var result, then, exited;
                    try {
                        if (handler) {
                            if (!ok) {
                                if (state.rejection === UNHANDLED) onHandleUnhandled(promise, state);
                                state.rejection = HANDLED;
                            }
                            if (handler === true) result = value;
                            else {
                                if (domain) domain.enter();
                                result = handler(value); // can throw
                                if (domain) {
                                    domain.exit();
                                    exited = true;
                                }
                            }
                            if (result === reaction.promise) {
                                reject(TypeError('Promise-chain cycle'));
                            } else if (then = isThenable(result)) {
                                then.call(result, resolve, reject);
                            } else resolve(result);
                        } else reject(value);
                    } catch (error) {
                        if (domain && !exited) domain.exit();
                        reject(error);
                    }
                }
                state.reactions = [];
                state.notified = false;
                if (isReject && !state.rejection) onUnhandled(promise, state);
            });
        };

        var dispatchEvent = function(name, promise, reason) {
            var event, handler;
            if (DISPATCH_EVENT) {
                event = document.createEvent('Event');
                event.promise = promise;
                event.reason = reason;
                event.initEvent(name, false, true);
                global.dispatchEvent(event);
            } else event = { promise: promise, reason: reason };
            if (handler = global['on' + name]) handler(event);
            else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
        };

        var onUnhandled = function(promise, state) {
            task.call(global, function() {
                var value = state.value;
                var IS_UNHANDLED = isUnhandled(state);
                var result;
                if (IS_UNHANDLED) {
                    result = perform(function() {
                        if (IS_NODE) {
                            process.emit('unhandledRejection', value, promise);
                        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
                    });
                    // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
                    state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
                    if (result.error) throw result.value;
                }
            });
        };

        var isUnhandled = function(state) {
            return state.rejection !== HANDLED && !state.parent;
        };

        var onHandleUnhandled = function(promise, state) {
            task.call(global, function() {
                if (IS_NODE) {
                    process.emit('rejectionHandled', promise);
                } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
            });
        };

        var bind = function(fn, promise, state, unwrap) {
            return function(value) {
                fn(promise, state, value, unwrap);
            };
        };

        var internalReject = function(promise, state, value, unwrap) {
            if (state.done) return;
            state.done = true;
            if (unwrap) state = unwrap;
            state.value = value;
            state.state = REJECTED;
            notify(promise, state, true);
        };

        var internalResolve = function(promise, state, value, unwrap) {
            if (state.done) return;
            state.done = true;
            if (unwrap) state = unwrap;
            try {
                if (promise === value) throw TypeError("Promise can't be resolved itself");
                var then = isThenable(value);
                if (then) {
                    microtask(function() {
                        var wrapper = { done: false };
                        try {
                            then.call(value,
                                bind(internalResolve, promise, wrapper, state),
                                bind(internalReject, promise, wrapper, state)
                            );
                        } catch (error) {
                            internalReject(promise, wrapper, error, state);
                        }
                    });
                } else {
                    state.value = value;
                    state.state = FULFILLED;
                    notify(promise, state, false);
                }
            } catch (error) {
                internalReject(promise, { done: false }, error, state);
            }
        };

        // constructor polyfill
        if (FORCED) {
            // 25.4.3.1 Promise(executor)
            PromiseConstructor = function Promise(executor) {
                anInstance(this, PromiseConstructor, PROMISE);
                aFunction(executor);
                Internal.call(this);
                var state = getInternalState(this);
                try {
                    executor(bind(internalResolve, this, state), bind(internalReject, this, state));
                } catch (error) {
                    internalReject(this, state, error);
                }
            };
            // eslint-disable-next-line no-unused-vars
            Internal = function Promise(executor) {
                setInternalState(this, {
                    type: PROMISE,
                    done: false,
                    notified: false,
                    parent: false,
                    reactions: [],
                    rejection: false,
                    state: PENDING,
                    value: undefined
                });
            };
            Internal.prototype = redefineAll(PromiseConstructor.prototype, {
                // `Promise.prototype.then` method
                // https://tc39.github.io/ecma262/#sec-promise.prototype.then
                then: function then(onFulfilled, onRejected) {
                    var state = getInternalPromiseState(this);
                    var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
                    reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
                    reaction.fail = typeof onRejected == 'function' && onRejected;
                    reaction.domain = IS_NODE ? process.domain : undefined;
                    state.parent = true;
                    state.reactions.push(reaction);
                    if (state.state != PENDING) notify(this, state, false);
                    return reaction.promise;
                },
                // `Promise.prototype.catch` method
                // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
                'catch': function(onRejected) {
                    return this.then(undefined, onRejected);
                }
            });
            OwnPromiseCapability = function() {
                var promise = new Internal();
                var state = getInternalState(promise);
                this.promise = promise;
                this.resolve = bind(internalResolve, promise, state);
                this.reject = bind(internalReject, promise, state);
            };
            newPromiseCapabilityModule.f = newPromiseCapability = function(C) {
                return C === PromiseConstructor || C === PromiseWrapper ?
                    new OwnPromiseCapability(C) :
                    newGenericPromiseCapability(C);
            };

            if (!IS_PURE && typeof NativePromise == 'function') {
                nativeThen = NativePromise.prototype.then;

                // wrap native Promise#then for native async functions
                redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
                    var that = this;
                    return new PromiseConstructor(function(resolve, reject) {
                        nativeThen.call(that, resolve, reject);
                    }).then(onFulfilled, onRejected);
                    // https://github.com/zloirock/core-js/issues/640
                }, { unsafe: true });

                // wrap fetch result
                if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
                    // eslint-disable-next-line no-unused-vars
                    fetch: function fetch(input /* , init */ ) {
                        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
                    }
                });
            }
        }

        $({ global: true, wrap: true, forced: FORCED }, {
            Promise: PromiseConstructor
        });

        setToStringTag(PromiseConstructor, PROMISE, false, true);
        setSpecies(PROMISE);

        PromiseWrapper = getBuiltIn(PROMISE);

        // statics
        $({ target: PROMISE, stat: true, forced: FORCED }, {
            // `Promise.reject` method
            // https://tc39.github.io/ecma262/#sec-promise.reject
            reject: function reject(r) {
                var capability = newPromiseCapability(this);
                capability.reject.call(undefined, r);
                return capability.promise;
            }
        });

        $({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
            // `Promise.resolve` method
            // https://tc39.github.io/ecma262/#sec-promise.resolve
            resolve: function resolve(x) {
                return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
            }
        });

        $({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
            // `Promise.all` method
            // https://tc39.github.io/ecma262/#sec-promise.all
            all: function all(iterable) {
                var C = this;
                var capability = newPromiseCapability(C);
                var resolve = capability.resolve;
                var reject = capability.reject;
                var result = perform(function() {
                    var $promiseResolve = aFunction(C.resolve);
                    var values = [];
                    var counter = 0;
                    var remaining = 1;
                    iterate(iterable, function(promise) {
                        var index = counter++;
                        var alreadyCalled = false;
                        values.push(undefined);
                        remaining++;
                        $promiseResolve.call(C, promise).then(function(value) {
                            if (alreadyCalled) return;
                            alreadyCalled = true;
                            values[index] = value;
                            --remaining || resolve(values);
                        }, reject);
                    });
                    --remaining || resolve(values);
                });
                if (result.error) reject(result.value);
                return capability.promise;
            },
            // `Promise.race` method
            // https://tc39.github.io/ecma262/#sec-promise.race
            race: function race(iterable) {
                var C = this;
                var capability = newPromiseCapability(C);
                var reject = capability.reject;
                var result = perform(function() {
                    var $promiseResolve = aFunction(C.resolve);
                    iterate(iterable, function(promise) {
                        $promiseResolve.call(C, promise).then(capability.resolve, reject);
                    });
                });
                if (result.error) reject(result.value);
                return capability.promise;
            }
        });


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/es.regexp.to-string.js":
    /*!*************************************************************!*\
      !*** ./node_modules/core-js/modules/es.regexp.to-string.js ***!
      \*************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";

        var redefine = __webpack_require__( /*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
        var anObject = __webpack_require__( /*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
        var fails = __webpack_require__( /*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
        var flags = __webpack_require__( /*! ../internals/regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");

        var TO_STRING = 'toString';
        var RegExpPrototype = RegExp.prototype;
        var nativeToString = RegExpPrototype[TO_STRING];

        var NOT_GENERIC = fails(function() { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
        // FF44- RegExp#toString has a wrong name
        var INCORRECT_NAME = nativeToString.name != TO_STRING;

        // `RegExp.prototype.toString` method
        // https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
        if (NOT_GENERIC || INCORRECT_NAME) {
            redefine(RegExp.prototype, TO_STRING, function toString() {
                var R = anObject(this);
                var p = String(R.source);
                var rf = R.flags;
                var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
                return '/' + p + '/' + f;
            }, { unsafe: true });
        }


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/es.string.iterator.js":
    /*!************************************************************!*\
      !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
      \************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";

        var charAt = __webpack_require__( /*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").charAt;
        var InternalStateModule = __webpack_require__( /*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
        var defineIterator = __webpack_require__( /*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

        var STRING_ITERATOR = 'String Iterator';
        var setInternalState = InternalStateModule.set;
        var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

        // `String.prototype[@@iterator]` method
        // https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
        defineIterator(String, 'String', function(iterated) {
            setInternalState(this, {
                type: STRING_ITERATOR,
                string: String(iterated),
                index: 0
            });
            // `%StringIteratorPrototype%.next` method
            // https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
        }, function next() {
            var state = getInternalState(this);
            var string = state.string;
            var index = state.index;
            var point;
            if (index >= string.length) return { value: undefined, done: true };
            point = charAt(string, index);
            state.index += point.length;
            return { value: point, done: false };
        });


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/es.string.trim.js":
    /*!********************************************************!*\
      !*** ./node_modules/core-js/modules/es.string.trim.js ***!
      \********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";

        var $ = __webpack_require__( /*! ../internals/export */ "./node_modules/core-js/internals/export.js");
        var $trim = __webpack_require__( /*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
        var forcedStringTrimMethod = __webpack_require__( /*! ../internals/string-trim-forced */ "./node_modules/core-js/internals/string-trim-forced.js");

        // `String.prototype.trim` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.trim
        $({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
            trim: function trim() {
                return $trim(this);
            }
        });


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/es.symbol.description.js":
    /*!***************************************************************!*\
      !*** ./node_modules/core-js/modules/es.symbol.description.js ***!
      \***************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";
        // `Symbol.prototype.description` getter
        // https://tc39.github.io/ecma262/#sec-symbol.prototype.description

        var $ = __webpack_require__( /*! ../internals/export */ "./node_modules/core-js/internals/export.js");
        var DESCRIPTORS = __webpack_require__( /*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
        var global = __webpack_require__( /*! ../internals/global */ "./node_modules/core-js/internals/global.js");
        var has = __webpack_require__( /*! ../internals/has */ "./node_modules/core-js/internals/has.js");
        var isObject = __webpack_require__( /*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
        var defineProperty = __webpack_require__( /*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
        var copyConstructorProperties = __webpack_require__( /*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");

        var NativeSymbol = global.Symbol;

        if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
                // Safari 12 bug
                NativeSymbol().description !== undefined
            )) {
            var EmptyStringDescriptionStore = {};
            // wrap Symbol constructor for correct work with undefined description
            var SymbolWrapper = function Symbol() {
                var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
                var result = this instanceof SymbolWrapper ?
                    new NativeSymbol(description)
                    // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
                    :
                    description === undefined ? NativeSymbol() : NativeSymbol(description);
                if (description === '') EmptyStringDescriptionStore[result] = true;
                return result;
            };
            copyConstructorProperties(SymbolWrapper, NativeSymbol);
            var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
            symbolPrototype.constructor = SymbolWrapper;

            var symbolToString = symbolPrototype.toString;
            var native = String(NativeSymbol('test')) == 'Symbol(test)';
            var regexp = /^Symbol\((.*)\)[^)]+$/;
            defineProperty(symbolPrototype, 'description', {
                configurable: true,
                get: function description() {
                    var symbol = isObject(this) ? this.valueOf() : this;
                    var string = symbolToString.call(symbol);
                    if (has(EmptyStringDescriptionStore, symbol)) return '';
                    var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
                    return desc === '' ? undefined : desc;
                }
            });

            $({ global: true, forced: true }, {
                Symbol: SymbolWrapper
            });
        }


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/es.symbol.iterator.js":
    /*!************************************************************!*\
      !*** ./node_modules/core-js/modules/es.symbol.iterator.js ***!
      \************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var defineWellKnownSymbol = __webpack_require__( /*! ../internals/define-well-known-symbol */ "./node_modules/core-js/internals/define-well-known-symbol.js");

        // `Symbol.iterator` well-known symbol
        // https://tc39.github.io/ecma262/#sec-symbol.iterator
        defineWellKnownSymbol('iterator');


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/es.symbol.js":
    /*!***************************************************!*\
      !*** ./node_modules/core-js/modules/es.symbol.js ***!
      \***************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";

        var $ = __webpack_require__( /*! ../internals/export */ "./node_modules/core-js/internals/export.js");
        var global = __webpack_require__( /*! ../internals/global */ "./node_modules/core-js/internals/global.js");
        var getBuiltIn = __webpack_require__( /*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
        var IS_PURE = __webpack_require__( /*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
        var DESCRIPTORS = __webpack_require__( /*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
        var NATIVE_SYMBOL = __webpack_require__( /*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
        var USE_SYMBOL_AS_UID = __webpack_require__( /*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");
        var fails = __webpack_require__( /*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
        var has = __webpack_require__( /*! ../internals/has */ "./node_modules/core-js/internals/has.js");
        var isArray = __webpack_require__( /*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
        var isObject = __webpack_require__( /*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
        var anObject = __webpack_require__( /*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
        var toObject = __webpack_require__( /*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
        var toIndexedObject = __webpack_require__( /*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
        var toPrimitive = __webpack_require__( /*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
        var createPropertyDescriptor = __webpack_require__( /*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
        var nativeObjectCreate = __webpack_require__( /*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
        var objectKeys = __webpack_require__( /*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
        var getOwnPropertyNamesModule = __webpack_require__( /*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
        var getOwnPropertyNamesExternal = __webpack_require__( /*! ../internals/object-get-own-property-names-external */ "./node_modules/core-js/internals/object-get-own-property-names-external.js");
        var getOwnPropertySymbolsModule = __webpack_require__( /*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
        var getOwnPropertyDescriptorModule = __webpack_require__( /*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
        var definePropertyModule = __webpack_require__( /*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
        var propertyIsEnumerableModule = __webpack_require__( /*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
        var createNonEnumerableProperty = __webpack_require__( /*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
        var redefine = __webpack_require__( /*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
        var shared = __webpack_require__( /*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
        var sharedKey = __webpack_require__( /*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
        var hiddenKeys = __webpack_require__( /*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
        var uid = __webpack_require__( /*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
        var wellKnownSymbol = __webpack_require__( /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
        var wrappedWellKnownSymbolModule = __webpack_require__( /*! ../internals/well-known-symbol-wrapped */ "./node_modules/core-js/internals/well-known-symbol-wrapped.js");
        var defineWellKnownSymbol = __webpack_require__( /*! ../internals/define-well-known-symbol */ "./node_modules/core-js/internals/define-well-known-symbol.js");
        var setToStringTag = __webpack_require__( /*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
        var InternalStateModule = __webpack_require__( /*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
        var $forEach = __webpack_require__( /*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;

        var HIDDEN = sharedKey('hidden');
        var SYMBOL = 'Symbol';
        var PROTOTYPE = 'prototype';
        var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
        var setInternalState = InternalStateModule.set;
        var getInternalState = InternalStateModule.getterFor(SYMBOL);
        var ObjectPrototype = Object[PROTOTYPE];
        var $Symbol = global.Symbol;
        var $stringify = getBuiltIn('JSON', 'stringify');
        var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
        var nativeDefineProperty = definePropertyModule.f;
        var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
        var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
        var AllSymbols = shared('symbols');
        var ObjectPrototypeSymbols = shared('op-symbols');
        var StringToSymbolRegistry = shared('string-to-symbol-registry');
        var SymbolToStringRegistry = shared('symbol-to-string-registry');
        var WellKnownSymbolsStore = shared('wks');
        var QObject = global.QObject;
        // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
        var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

        // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
        var setSymbolDescriptor = DESCRIPTORS && fails(function() {
            return nativeObjectCreate(nativeDefineProperty({}, 'a', {
                get: function() { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
            })).a != 7;
        }) ? function(O, P, Attributes) {
            var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
            if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
            nativeDefineProperty(O, P, Attributes);
            if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
                nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
            }
        } : nativeDefineProperty;

        var wrap = function(tag, description) {
            var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
            setInternalState(symbol, {
                type: SYMBOL,
                tag: tag,
                description: description
            });
            if (!DESCRIPTORS) symbol.description = description;
            return symbol;
        };

        var isSymbol = USE_SYMBOL_AS_UID ? function(it) {
            return typeof it == 'symbol';
        } : function(it) {
            return Object(it) instanceof $Symbol;
        };

        var $defineProperty = function defineProperty(O, P, Attributes) {
            if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
            anObject(O);
            var key = toPrimitive(P, true);
            anObject(Attributes);
            if (has(AllSymbols, key)) {
                if (!Attributes.enumerable) {
                    if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
                    O[HIDDEN][key] = true;
                } else {
                    if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
                    Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
                }
                return setSymbolDescriptor(O, key, Attributes);
            }
            return nativeDefineProperty(O, key, Attributes);
        };

        var $defineProperties = function defineProperties(O, Properties) {
            anObject(O);
            var properties = toIndexedObject(Properties);
            var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
            $forEach(keys, function(key) {
                if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
            });
            return O;
        };

        var $create = function create(O, Properties) {
            return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
        };

        var $propertyIsEnumerable = function propertyIsEnumerable(V) {
            var P = toPrimitive(V, true);
            var enumerable = nativePropertyIsEnumerable.call(this, P);
            if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
            return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
        };

        var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
            var it = toIndexedObject(O);
            var key = toPrimitive(P, true);
            if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
            var descriptor = nativeGetOwnPropertyDescriptor(it, key);
            if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
                descriptor.enumerable = true;
            }
            return descriptor;
        };

        var $getOwnPropertyNames = function getOwnPropertyNames(O) {
            var names = nativeGetOwnPropertyNames(toIndexedObject(O));
            var result = [];
            $forEach(names, function(key) {
                if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
            });
            return result;
        };

        var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
            var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
            var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
            var result = [];
            $forEach(names, function(key) {
                if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
                    result.push(AllSymbols[key]);
                }
            });
            return result;
        };

        // `Symbol` constructor
        // https://tc39.github.io/ecma262/#sec-symbol-constructor
        if (!NATIVE_SYMBOL) {
            $Symbol = function Symbol() {
                if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
                var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
                var tag = uid(description);
                var setter = function(value) {
                    if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
                    if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
                    setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
                };
                if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
                return wrap(tag, description);
            };

            redefine($Symbol[PROTOTYPE], 'toString', function toString() {
                return getInternalState(this).tag;
            });

            redefine($Symbol, 'withoutSetter', function(description) {
                return wrap(uid(description), description);
            });

            propertyIsEnumerableModule.f = $propertyIsEnumerable;
            definePropertyModule.f = $defineProperty;
            getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
            getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
            getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

            wrappedWellKnownSymbolModule.f = function(name) {
                return wrap(wellKnownSymbol(name), name);
            };

            if (DESCRIPTORS) {
                // https://github.com/tc39/proposal-Symbol-description
                nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
                    configurable: true,
                    get: function description() {
                        return getInternalState(this).description;
                    }
                });
                if (!IS_PURE) {
                    redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
                }
            }
        }

        $({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
            Symbol: $Symbol
        });

        $forEach(objectKeys(WellKnownSymbolsStore), function(name) {
            defineWellKnownSymbol(name);
        });

        $({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
            // `Symbol.for` method
            // https://tc39.github.io/ecma262/#sec-symbol.for
            'for': function(key) {
                var string = String(key);
                if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
                var symbol = $Symbol(string);
                StringToSymbolRegistry[string] = symbol;
                SymbolToStringRegistry[symbol] = string;
                return symbol;
            },
            // `Symbol.keyFor` method
            // https://tc39.github.io/ecma262/#sec-symbol.keyfor
            keyFor: function keyFor(sym) {
                if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
                if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
            },
            useSetter: function() { USE_SETTER = true; },
            useSimple: function() { USE_SETTER = false; }
        });

        $({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
            // `Object.create` method
            // https://tc39.github.io/ecma262/#sec-object.create
            create: $create,
            // `Object.defineProperty` method
            // https://tc39.github.io/ecma262/#sec-object.defineproperty
            defineProperty: $defineProperty,
            // `Object.defineProperties` method
            // https://tc39.github.io/ecma262/#sec-object.defineproperties
            defineProperties: $defineProperties,
            // `Object.getOwnPropertyDescriptor` method
            // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
            getOwnPropertyDescriptor: $getOwnPropertyDescriptor
        });

        $({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
            // `Object.getOwnPropertyNames` method
            // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
            getOwnPropertyNames: $getOwnPropertyNames,
            // `Object.getOwnPropertySymbols` method
            // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
            getOwnPropertySymbols: $getOwnPropertySymbols
        });

        // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
        // https://bugs.chromium.org/p/v8/issues/detail?id=3443
        $({ target: 'Object', stat: true, forced: fails(function() { getOwnPropertySymbolsModule.f(1); }) }, {
            getOwnPropertySymbols: function getOwnPropertySymbols(it) {
                return getOwnPropertySymbolsModule.f(toObject(it));
            }
        });

        // `JSON.stringify` method behavior with symbols
        // https://tc39.github.io/ecma262/#sec-json.stringify
        if ($stringify) {
            var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function() {
                var symbol = $Symbol();
                // MS Edge converts symbol values to JSON as {}
                return $stringify([symbol]) != '[null]'
                    // WebKit converts symbol values to JSON as null
                    ||
                    $stringify({ a: symbol }) != '{}'
                    // V8 throws on boxed symbols
                    ||
                    $stringify(Object(symbol)) != '{}';
            });

            $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
                // eslint-disable-next-line no-unused-vars
                stringify: function stringify(it, replacer, space) {
                    var args = [it];
                    var index = 1;
                    var $replacer;
                    while (arguments.length > index) args.push(arguments[index++]);
                    $replacer = replacer;
                    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
                    if (!isArray(replacer)) replacer = function(key, value) {
                        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
                        if (!isSymbol(value)) return value;
                    };
                    args[1] = replacer;
                    return $stringify.apply(null, args);
                }
            });
        }

        // `Symbol.prototype[@@toPrimitive]` method
        // https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
        if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
            createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
        }
        // `Symbol.prototype[@@toStringTag]` property
        // https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
        setToStringTag($Symbol, SYMBOL);

        hiddenKeys[HIDDEN] = true;


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/web.dom-collections.for-each.js":
    /*!**********************************************************************!*\
      !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
      \**********************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var global = __webpack_require__( /*! ../internals/global */ "./node_modules/core-js/internals/global.js");
        var DOMIterables = __webpack_require__( /*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
        var forEach = __webpack_require__( /*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
        var createNonEnumerableProperty = __webpack_require__( /*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

        for (var COLLECTION_NAME in DOMIterables) {
            var Collection = global[COLLECTION_NAME];
            var CollectionPrototype = Collection && Collection.prototype;
            // some Chrome versions have non-configurable methods on DOMTokenList
            if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
                createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
            } catch (error) {
                CollectionPrototype.forEach = forEach;
            }
        }


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/web.dom-collections.iterator.js":
    /*!**********************************************************************!*\
      !*** ./node_modules/core-js/modules/web.dom-collections.iterator.js ***!
      \**********************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var global = __webpack_require__( /*! ../internals/global */ "./node_modules/core-js/internals/global.js");
        var DOMIterables = __webpack_require__( /*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
        var ArrayIteratorMethods = __webpack_require__( /*! ../modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
        var createNonEnumerableProperty = __webpack_require__( /*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
        var wellKnownSymbol = __webpack_require__( /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

        var ITERATOR = wellKnownSymbol('iterator');
        var TO_STRING_TAG = wellKnownSymbol('toStringTag');
        var ArrayValues = ArrayIteratorMethods.values;

        for (var COLLECTION_NAME in DOMIterables) {
            var Collection = global[COLLECTION_NAME];
            var CollectionPrototype = Collection && Collection.prototype;
            if (CollectionPrototype) {
                // some Chrome versions have non-configurable methods on DOMTokenList
                if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
                    createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
                } catch (error) {
                    CollectionPrototype[ITERATOR] = ArrayValues;
                }
                if (!CollectionPrototype[TO_STRING_TAG]) {
                    createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
                }
                if (DOMIterables[COLLECTION_NAME])
                    for (var METHOD_NAME in ArrayIteratorMethods) {
                        // some Chrome versions have non-configurable methods on DOMTokenList
                        if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
                            createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
                        } catch (error) {
                            CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
                        }
                    }
            }
        }


        /***/
    }),

    /***/
    "./node_modules/webpack/buildin/global.js":
    /*!***********************************!*\
      !*** (webpack)/buildin/global.js ***!
      \***********************************/
    /*! no static exports found */
    /***/
        (function(module, exports) {

        var g;

        // This works in non-strict mode
        g = (function() {
            return this;
        })();

        try {
            // This works if eval is allowed (see CSP)
            g = g || new Function("return this")();
        } catch (e) {
            // This works if the window reference is available
            if (typeof window === "object") g = window;
        }

        // g can still be undefined, but nothing to do about it...
        // We return undefined, instead of nothing here, so it's
        // easier to handle this case. if(!global) { ...}

        module.exports = g;


        /***/
    }),

    /***/
    "./src/public/js/aos.js":
    /*!******************************!*\
      !*** ./src/public/js/aos.js ***!
      \******************************/
    /*! no exports provided */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */
        var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! aos */ "./node_modules/aos/dist/aos.js");
        /* harmony import */
        var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
        // инициализация библиотеки aos.js

        aos__WEBPACK_IMPORTED_MODULE_0___default.a.init();

        /***/
    }),

    /***/
    "./src/public/js/main.js":
    /*!*******************************!*\
      !*** ./src/public/js/main.js ***!
      \*******************************/
    /*! no exports provided */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */
        var _preolaider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./preolaider */ "./src/public/js/preolaider.js");
        /* harmony import */
        var _preolaider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_preolaider__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */
        var _slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./slider */ "./src/public/js/slider.js");
        /* harmony import */
        var _script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./script */ "./src/public/js/script.js");
        /* harmony import */
        var _aos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./aos */ "./src/public/js/aos.js");





        /***/
    }),

    /***/
    "./src/public/js/preolaider.js":
    /*!*************************************!*\
      !*** ./src/public/js/preolaider.js ***!
      \*************************************/
    /*! no static exports found */
    /***/
        (function(module, exports) {

        window.addEventListener('load', function() {
            return document.querySelector('.preolaider-wrapper').style.display = 'none';
        });

        /***/
    }),

    /***/
    "./src/public/js/script.js":
    /*!*********************************!*\
      !*** ./src/public/js/script.js ***!
      \*********************************/
    /*! no exports provided */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */
        var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
        /* harmony import */
        var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */
        var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
        /* harmony import */
        var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */
        var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
        /* harmony import */
        var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
        /* harmony import */
        var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
        /* harmony import */
        var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
        /* harmony import */
        var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
        /* harmony import */
        var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__);
        /* harmony import */
        var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
        /* harmony import */
        var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_5__);
        /* harmony import */
        var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
        /* harmony import */
        var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_6__);
        /* harmony import */
        var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
        /* harmony import */
        var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_7__);
        /* harmony import */
        var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
        /* harmony import */
        var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_8__);
        /* harmony import */
        var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
        /* harmony import */
        var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_9__);
        /* harmony import */
        var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
        /* harmony import */
        var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_10__);
        /* harmony import */
        var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
        /* harmony import */
        var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_11__);
        /* harmony import */
        var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
        /* harmony import */
        var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_12__);
        /* harmony import */
        var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
        /* harmony import */
        var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_13__);
        /* harmony import */
        var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
        /* harmony import */
        var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_14__);
        /* harmony import */
        var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
        /* harmony import */
        var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_15__);
        /* harmony import */
        var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__( /*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
        /* harmony import */
        var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_16__);
        /* harmony import */
        var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__( /*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
        /* harmony import */
        var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_17__);
        /* harmony import */
        var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__( /*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
        /* harmony import */
        var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_18__);
        /* harmony import */
        var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__( /*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
        /* harmony import */
        var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_19__);
        /* harmony import */
        var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__( /*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
        /* harmony import */
        var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_20__);






















        function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

        function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

        function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

        function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

        function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

        function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


        "use strict";

        function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

        function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

        function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

        function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

        function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

        function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor); } }

        function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

        var Valval = /*#__PURE__*/ function() {
            function Valval() {
                _classCallCheck(this, Valval);

                this.all_options = ['mail', 'date', 'password', 'tel', 'firstName', 'lastName', 'repeatPassword'];
                this.options = {};
                this.regexp_password = '';
                this.regexp_password_only_rus = '';
                this.regexp_password_only_numbers = '';
                this.regexp_password_only_en = '';
                this.regexp_mail = '';
                this.regexp_date = '';
                this.regexp_tel = '';
                this.regexp_required = '';
                this.regexp_repeat_password = '';
                this.regexp_date_only_slash = '';
                this.regexp_date_only_dot = '';
                this.regexp_date_only_hyphen = '';
                this.regexp_first_name = '';
                this.regexp_first_name_only_en = '';
                this.regexp_first_name_only_rus = '';
                this.regexp_last_name = '';
                this.regexp_last_name_only_en = '';
                this.regexp_last_name_only_rus = '';
                this.invalidSize = 0;
            }

            _createClass(Valval, [{
                key: "submitForm",
                value: function submitForm(item) {
                    var _this = this;

                    var form = item.form;
                    form.addEventListener('submit', function(event) {
                        item.preventDefault && event.preventDefault();

                        if (!_this.invalidSize) {
                            form.submit();
                        } else {
                            if (item.required) {
                                _this.checkRequired(item);
                            }
                        }
                    });
                }
            }, {
                key: "checkRequired",
                value: function checkRequired(item) {
                    if (!this.regexp_required.test(item.element.value)) {
                        item.valid = false;
                        this.checkValid(item.classInvalid, item.classValid, item, item.element);
                        this.checkValidationElement(item);
                        this.invalidSize = this.addInvalidElementsInArray(item);
                    }
                }
            }, {
                key: "getOptions",
                value: function getOptions() {
                    return this.options;
                }
            }, {
                key: "addInvalidElementsInArray",
                value: function addInvalidElementsInArray(item) {
                    var set = new Set();

                    for (var i in item.objOptions) {
                        !item.objOptions[i].valid && set.add(item.objOptions[i]);
                    }

                    return set.size;
                }
            }, {
                key: "checkValidationElement",
                value: function checkValidationElement(item) {
                    if (item.validationElement) {
                        if (item.validationElement.have) {
                            var validationEl = document.querySelector(item.validationElement.selectorEl);

                            if (item.valid) {
                                validationEl.innerText = item.validationElement.textWhenValid;
                                validationEl.classList.add(item.validationElement.classValid || 'valval-valid-el');
                                validationEl.classList.remove(item.validationElement.classInvalid || 'valval-invalid-el');
                            } else {
                                validationEl.innerText = item.validationElement.textWhenInvalid;
                                validationEl.classList.remove(item.validationElement.classValid || 'valval-valid-el');
                                validationEl.classList.add(item.validationElement.classInvalid || 'valval-invalid-el');
                            }
                        }
                    }
                }
            }, {
                key: "validationElement",
                value: function validationElement(regexp, value, item) {
                    regexp = regexp ? regexp : /^''$/;

                    if (regexp.test(value)) {
                        item.valid = true;
                        this.checkValid(item.classInvalid, item.classValid, item, item.element);
                        this.checkValidationElement(item);
                        this.invalidSize = this.addInvalidElementsInArray(item);
                    } else {
                        item.valid = false;
                        this.checkValid(item.classInvalid, item.classValid, item, item.element);
                        this.checkValidationElement(item);
                        this.invalidSize = this.addInvalidElementsInArray(item);
                    }
                }
            }, {
                key: "checkValid",
                value: function checkValid(invalidClass, validClass, item, el) {
                    console.log();

                    if (item.valid) {
                        el.classList.add(validClass);
                        el.classList.remove(invalidClass);
                    } else {
                        el.classList.remove(validClass);
                        el.classList.add(invalidClass);
                    }
                }
            }, {
                key: "start",
                value: function start() {
                    var _this2 = this;

                    var options = arguments[0];

                    var _loop = function _loop(item) {
                        if (_this2.all_options.includes(item)) {
                            var el = document.querySelector(options[item].selectorEl); // Default params
                            // Prevent default

                            options[item].preventDefault = true; // Element

                            if (el.className.includes(options[item].selectorEl.replace(/\./, '')) || el.id.includes(options[item].selectorEl.replace(/\#/, ''))) {
                                options[item].element = el;
                            } else {
                                options[item].element = false;
                            } // Form


                            options[item].form = options[item].element.form; // Elements in form

                            options[item].elementsInForm = _toConsumableArray(options[item].element.form.elements).filter(function(item) {
                                return item.type !== 'submit';
                            }); // Submit

                            options[item].submit = _toConsumableArray(options[item].element.form.elements).find(function(item) {
                                return item.type === 'submit';
                            }); // Obj options

                            options[item].objOptions = options; // Class invalid

                            options[item].classInvalid = options[item].classInvalid ? options[item].classInvalid : 'valval-invalid'; // Class valid

                            options[item].classValid = options[item].classValid ? options[item].classValid : 'valval-valid'; // Valid

                            options[item].valid = options[item].required ? false : true; // Required

                            options[item].required = options[item].required ? options[item].required : false;

                            if (item !== 'date' && item !== 'mail' && item !== 'repeatPassword' && item !== 'radio') {
                                // Min length
                                options[item].minLength = options[item].minLength ? options[item].minLength : 1; // Max length

                                options[item].maxLength = options[item].maxLength ? options[item].maxLength : '';
                            } // Regular expressions password


                            if (item === 'password') {
                                _this2.regexp_password = eval("/^.{".concat(options[item].minLength, ",").concat(options[item].maxLength, "}$/"));
                                _this2.regexp_password_only_rus = eval("/^[\u0410-\u042F|\u0430-\u044F]{".concat(options[item].minLength, ",").concat(options[item].maxLength, "}$/"));
                                _this2.regexp_password_only_numbers = eval("/^\\d{".concat(options[item].minLength, ",").concat(options[item].maxLength, "}$/"));
                                _this2.regexp_password_only_en = eval("/^[A-Z|a-z]{".concat(options[item].minLength, ",").concat(options[item].maxLength, "}$/"));
                            } // Regular expressions mail


                            if (item === 'mail') {
                                _this2.regexp_mail = /^[A-Z|a-z|\d|\_|\-|\.]{1,}@[A-Z|a-z]{1,}\.[A-Z|a-z]{1,}$/;
                            } // Regular expressions date


                            if (item === 'date') {
                                _this2.regexp_date = /^(\d{2,2}[\/|\.|\-]){2,2}\d{4,4}$/;
                                _this2.regexp_date_only_slash = /^(\d{2,2}\/){2,2}\d{4,4}$/;
                                _this2.regexp_date_only_dot = /^(\d{2,2}\.){2,2}\d{4,4}$/;
                                _this2.regexp_date_only_hyphen = /^(\d{2,2}\-){2,2}\d{4,4}$/;
                            } // Regular expressions tel


                            if (item === 'tel') {
                                _this2.regexp_tel = eval("/^\\d{".concat(options[item].minLength, ",").concat(options[item].maxLength, "}$/"));
                            } // Regular expressions first name


                            if (item === 'firstName') {
                                _this2.regexp_first_name = eval("/^[a-z|A-Z|\u0430-\u044F|\u0410-\u042F]{".concat(options[item].minLength, ",").concat(options[item].maxLength, "}$/"));
                                _this2.regexp_first_name_only_rus = eval("/^[\u0410-\u042F|\u0430-\u044F]{".concat(options[item].minLength, ",").concat(options[item].maxLength, "}$/"));
                                _this2.regexp_first_name_only_en = eval("/^[A-Z|a-z]{".concat(options[item].minLength, ",").concat(options[item].maxLength, "}$/"));
                            } // Regular expressions last name


                            if (item === 'lastName') {
                                _this2.regexp_last_name = eval("/^[a-z|A-Z|\u0430-\u044F|\u0410-\u042F]{".concat(options[item].minLength, ",").concat(options[item].maxLength, "}$/"));
                                _this2.regexp_last_name_only_rus = eval("/^[\u0410-\u042F|\u0430-\u044F]{".concat(options[item].minLength, ",").concat(options[item].maxLength, "}$/"));
                                _this2.regexp_last_name_only_en = eval("/^[A-Z|a-z]{".concat(options[item].minLength, ",").concat(options[item].maxLength, "}$/"));
                            } // Regular expressions required


                            _this2.regexp_required = /.{1,}/;
                            _this2.options = options; // get size

                            var getSize = function getSize() {
                                var set = new Set();

                                for (var i in options[item].objOptions) {
                                    set.add(i);
                                }

                                _this2.invalidSize = set.size;
                            };

                            getSize();
                            options[item].element.addEventListener('input', function() {
                                var value = options[item].element.value; // password

                                if (item === 'password' && !options[item].onlyRus && !options[item].onlyNumbers && !options[item].onlyEn) {
                                    if (options[item].objOptions.repeatPassword) {
                                        if (value) {
                                            _this2.regexp_repeat_password = eval("/^".concat(document.querySelector(options['repeatPassword'].repeatAt).value, "$/"));

                                            _this2.validationElement(_this2.regexp_password, value, options[item]);

                                            _this2.validationElement(_this2.regexp_repeat_password, document.querySelector(options['repeatPassword'].selectorEl).value, options['repeatPassword']);
                                        } else {
                                            options[item].valid = false;

                                            _this2.checkValid(options[item].classInvalid, options[item].classValid, options[item], options[item].element);

                                            _this2.checkValidationElement(options[item]);

                                            _this2.invalidSize = _this2.addInvalidElementsInArray(options[item]);
                                        }
                                    } else {
                                        _this2.validationElement(_this2.regexp_password, value, options[item]);
                                    }
                                } // password and only rus


                                if (item === 'password' && options[item].onlyRus) {
                                    if (options[item].objOptions.repeatPassword) {
                                        if (value) {
                                            _this2.regexp_repeat_password = eval("/^".concat(document.querySelector(options['repeatPassword'].repeatAt).value, "$/"));

                                            _this2.validationElement(_this2.regexp_password_only_rus, value, options[item]);

                                            _this2.validationElement(_this2.regexp_repeat_password, document.querySelector(options['repeatPassword'].selectorEl).value, options['repeatPassword']);
                                        } else {
                                            options[item].valid = false;

                                            _this2.checkValid(options[item].classInvalid, options[item].classValid, options[item], options[item].element);

                                            _this2.checkValidationElement(options[item]);

                                            _this2.invalidSize = _this2.addInvalidElementsInArray(options[item]);
                                        }
                                    } else {
                                        _this2.validationElement(_this2.regexp_password_only_rus, value, options[item]);
                                    }
                                } // password and only numbers


                                if (item === 'password' && options[item].onlyNumbers) {
                                    if (options[item].objOptions.repeatPassword) {
                                        if (value) {
                                            _this2.regexp_repeat_password = eval("/^".concat(document.querySelector(options['repeatPassword'].repeatAt).value, "$/"));

                                            _this2.validationElement(_this2.regexp_password_only_numbers, value, options[item]);

                                            _this2.validationElement(_this2.regexp_repeat_password, document.querySelector(options['repeatPassword'].selectorEl).value, options['repeatPassword']);
                                        } else {
                                            options[item].valid = false;

                                            _this2.checkValid(options[item].classInvalid, options[item].classValid, options[item], options[item].element);

                                            _this2.checkValidationElement(options[item]);

                                            _this2.invalidSize = _this2.addInvalidElementsInArray(options[item]);
                                        }
                                    } else {
                                        _this2.validationElement(_this2.regexp_password_only_numbers, value, options[item]);
                                    }
                                } // password and only en


                                if (item === 'password' && options[item].onlyEn) {
                                    if (options[item].objOptions.repeatPassword) {
                                        if (value) {
                                            _this2.regexp_repeat_password = eval("/^".concat(document.querySelector(options['repeatPassword'].repeatAt).value, "$/"));

                                            _this2.validationElement(_this2.regexp_password_only_en, value, options[item]);

                                            _this2.validationElement(_this2.regexp_repeat_password, document.querySelector(options['repeatPassword'].selectorEl).value, options['repeatPassword']);
                                        } else {
                                            options[item].valid = false;

                                            _this2.checkValid(options[item].classInvalid, options[item].classValid, options[item], options[item].element);

                                            _this2.checkValidationElement(options[item]);

                                            _this2.invalidSize = _this2.addInvalidElementsInArray(options[item]);
                                        }
                                    } else {
                                        _this2.validationElement(_this2.regexp_password_only_en, value, options[item]);
                                    }
                                } // mail


                                if (item === 'mail') {
                                    _this2.validationElement(_this2.regexp_mail, value, options[item]);
                                } // date


                                if (item === 'date' && !options[item].onlySlash && !options[item].onlyDot && !options[item].onlyHyphen) {
                                    _this2.validationElement(_this2.regexp_date, value, options[item]);
                                } // date and only only slash


                                if (item === 'date' && options[item].onlySlash) {
                                    _this2.validationElement(_this2.regexp_date_only_slash, value, options[item]);
                                } // date and only only dot


                                if (item === 'date' && options[item].onlyDot) {
                                    _this2.validationElement(_this2.regexp_date_only_dot, value, options[item]);
                                } // date and only only hyphen


                                if (item === 'date' && options[item].onlyHyphen) {
                                    _this2.validationElement(_this2.regexp_date_only_hyphen, value, options[item]);
                                } // tel


                                if (item === 'tel') {
                                    _this2.validationElement(_this2.regexp_tel, value, options[item]);
                                } // repeat password


                                if (item === 'repeatPassword') {
                                    if (!document.querySelector(options['repeatPassword'].repeatAt).value) {
                                        options[item].valid = false;

                                        _this2.checkValid(options[item].classInvalid, options[item].classValid, options[item], options[item].element);

                                        _this2.checkValidationElement(options[item]);

                                        _this2.invalidSize = _this2.addInvalidElementsInArray(options[item]);
                                    } else {
                                        _this2.regexp_repeat_password = _this2.regexp_repeat_password = eval("/^".concat(document.querySelector(options['repeatPassword'].repeatAt).value, "$/"));

                                        _this2.validationElement(_this2.regexp_repeat_password, value, options[item]);
                                    }
                                } // First name


                                if (item === 'firstName' && !options[item].onlyRus && !options[item].onlyEn && !options[item].bigFirstSymbol) {
                                    _this2.validationElement(_this2.regexp_first_name, value, options[item]);
                                } // First name and big first symbol


                                if (item === 'firstName' && options[item].bigFirstSymbol) {
                                    _this2.regexp_first_name = eval("/^[A-Z|\u0410-\u042F]{1,1}[a-z|\u0430-\u044F]{".concat(options[item].minLength, ",").concat(options[item].maxLength, "}$/"));

                                    _this2.validationElement(_this2.regexp_first_name, value, options[item]);
                                } // First name and only en


                                if (item === 'firstName' && options[item].onlyEn) {
                                    _this2.regexp_first_name_only_en = eval("/^[A-Z|a-z]{".concat(options[item].minLength, ",").concat(options[item].maxLength, "}$/"));

                                    _this2.validationElement(_this2.regexp_first_name_only_en, value, options[item]);
                                } // First name and only en and big first symbol


                                if (item === 'firstName' && options[item].onlyEn && options[item].bigFirstSymbol) {
                                    _this2.regexp_first_name_only_en = eval("/^[A-Z]{1,1}[a-z]{".concat(options[item].minLength, ",").concat(options[item].maxLength, "}$/"));

                                    _this2.validationElement(_this2.regexp_first_name_only_en, value, options[item]);
                                } // First name and only rus


                                if (item === 'firstName' && options[item].onlyRus) {
                                    _this2.regexp_first_name_only_rus = eval("/^[\u0410-\u042F|\u0430-\u044F]{".concat(options[item].minLength, ",").concat(options[item].maxLength, "}$/"));

                                    _this2.validationElement(_this2.regexp_first_name_only_rus, value, options[item]);
                                } // First name and only rus and big first symbol


                                if (item === 'firstName' && options[item].onlyRus && options[item].bigFirstSymbol) {
                                    _this2.regexp_first_name_only_rus = eval("/^[\u0410-\u042F]{1,1}[\u0430-\u044F]{".concat(options[item].minLength, ",").concat(options[item].maxLength, "}$/"));

                                    _this2.validationElement(_this2.regexp_first_name_only_rus, value, options[item]);
                                } // last name


                                if (item === 'lastName' && !options[item].onlyRus && !options[item].onlyEn) {
                                    _this2.validationElement(_this2.regexp_last_name, value, options[item]);
                                } // last name and big first symbol


                                if (item === 'lastName' && options[item].bigFirstSymbol) {
                                    _this2.regexp_last_name = eval("/^[A-Z|\u0410-\u042F]{1,1}[a-z|\u0430-\u044F]{".concat(options[item].minLength, ",").concat(options[item].maxLength, "}$/"));

                                    _this2.validationElement(_this2.regexp_last_name, value, options[item]);
                                } // last name and only en


                                if (item === 'lastName' && options[item].onlyEn) {
                                    _this2.regexp_last_name_only_en = eval("/^[A-Z|a-z]{".concat(options[item].minLength, ",").concat(options[item].maxLength, "}$/"));

                                    _this2.validationElement(_this2.regexp_last_name_only_en, value, options[item]);
                                } // last name and only en and big first symbol


                                if (item === 'lastName' && options[item].onlyEn && options[item].bigFirstSymbol) {
                                    _this2.regexp_last_name_only_en = eval("/^[A-Z]{1,1}[a-z]{".concat(options[item].minLength, ",").concat(options[item].maxLength, "}$/"));

                                    _this2.validationElement(_this2.regexp_last_name_only_en, value, options[item]);
                                } // last name and only rus


                                if (item === 'lastName' && options[item].onlyRus) {
                                    _this2.regexp_last_name_only_rus = eval("/^[\u0410-\u042F|\u0430-\u044F]{".concat(options[item].minLength, ",").concat(options[item].maxLength, "}$/"));

                                    _this2.validationElement(_this2.regexp_last_name_only_rus, value, options[item]);
                                } // last name and only rus and big first symbol


                                if (item === 'lastName' && options[item].onlyRus && options[item].bigFirstSymbol) {
                                    _this2.regexp_last_name_only_rus = eval("/^[\u0410-\u042F]{1,1}[\u0430-\u044F]{".concat(options[item].minLength, ",").concat(options[item].maxLength, "}$/"));

                                    _this2.validationElement(_this2.regexp_last_name_only_rus, value, options[item]);
                                }
                            });
                        }

                        _this2.submitForm(options[item]);
                    };

                    for (var item in options) {
                        _loop(item);
                    }

                    return this;
                }
            }]);

            return Valval;
        }(); // module.exports.Valval = Valval;

        module.exports.Valval = Valval;

        // определение расстояния сверху у выпадающего меню
        var determinationOfTop = function determinationOfTop() {
            var list_shop = document.querySelector('.header__bottom-shop-list');
            var items_list = document.querySelectorAll('.header__bottom-shop-list-item');
            var top = items_list.length >= 7 ? items_list.length * 20 : 100;
            list_shop.style.top = "-".concat(top, "px");
        };

        determinationOfTop(); // анимация при клике на поиск

        var animationSearch = function animationSearch() {
            var word = document.querySelector('.header-search-word');
            var blockSearchContent = document.querySelector('.header__block-search-content');
            var headerSearchWord = document.querySelector('.header-search-word');
            var headerSearch = document.querySelector('.header-search-show');
            var headerBlockSearch = document.querySelector('.header__block-search');
            blockSearchContent.style.width = word.offsetWidth ? "".concat(word.offsetWidth, "px") : 'max-content';
            blockSearchContent.style.height = word.offsetHeight ? "".concat(word.offsetHeight, "px") : 'max-content'; // Действия при клике

            headerSearchWord.addEventListener('click', function() {
                headerSearch.style.width = '160px';
                blockSearchContent.style.width = "".concat(headerSearch.offsetWidth, "px");
                blockSearchContent.style.height = "".concat(headerSearch.offsetHeight, "px");
                headerBlockSearch.classList.add('no-border');
                headerSearch.style.order = '1';
                headerSearch.focus();
                word.style.display = 'none';
            }); // Действия при выходе из инпута

            headerSearch.addEventListener('blur', function() {
                headerBlockSearch.classList.remove('no-border');
                headerSearch.style.order = '2';
                headerSearch.style.width = '0px';
                headerSearch.value = '';
                word.style.display = 'inline';
                blockSearchContent.style.width = "".concat(word.offsetWidth, "px");
                blockSearchContent.style.height = "".concat(word.offsetHeight, "px");
            });
        };

        animationSearch(); // цена

        var toCurrency = function toCurrency(price) {
            return new Intl.NumberFormat('ru-RU', {
                currency: 'rub',
                style: 'currency'
            }).format(price);
        }; // появление картинок


        var showImages = function showImages() {
            var imageObserver = new IntersectionObserver(function(entries) {
                entries.forEach(function(item) {
                    // если попало в зону экрана
                    if (item.isIntersecting) {
                        item.target.src = item.target.dataset.src;
                    }
                });
            });
            document.querySelectorAll('.card__block-img img').forEach(function(item) {
                return imageObserver.observe(item);
            });
        };

        showImages(); // активный класс у филтра

        var activeClassOfFilter = function activeClassOfFilter() {
            var blockFiltersList = document.querySelector('.block-filters-list');
            var sizes = document.querySelectorAll('.block-filters-list li');

            if (blockFiltersList) {
                var hideActiveClass = function hideActiveClass(className) {
                    sizes.forEach(function(item) {
                        return _toConsumableArray(item.children).filter(function(item) {
                            return item.nodeName === 'A';
                        }).map(function(el) {
                            return el.classList.remove(className);
                        });
                    });
                };

                var showActiveClass = function showActiveClass(className, index) {
                    return _toConsumableArray(sizes[index].children).filter(function(item) {
                        return item.nodeName === 'A';
                    })[0].classList.add(className);
                };

                hideActiveClass('active-filter');
                showActiveClass('active-filter', 5);
                sizes.forEach(function(item, index) {
                    item.addEventListener('click', function() {
                        hideActiveClass('active-filter');
                        showActiveClass('active-filter', index);
                    });
                });
            }
        };

        activeClassOfFilter();
        document.querySelectorAll('.card-old-price').forEach(function(node) {
            return node.textContent = toCurrency(node.textContent);
        });
        document.querySelectorAll('.card-now-price').forEach(function(node) {
            return node.textContent = toCurrency(node.textContent);
        }); // появление кнопки "вверх" при скролле

        var showScrollUp = function showScrollUp() {
            var up = document.querySelector('.up-wrapper');
            var lines = document.querySelectorAll('.up-wrapper span');
            up.style.opacity = '0';
            window.addEventListener('scroll', function() {
                var y = pageYOffset;

                if (y > 500) {
                    up.style.opacity = '1';
                    up.style.visibility = 'visible';
                    lines.forEach(function(item, index) {
                        if (index === 0) {
                            item.style.transform = "rotate(45deg)";
                        } else {
                            item.style.transform = "rotate(-45deg)";
                        }
                    });
                } else {
                    up.style.opacity = '0';
                    up.style.visibility = 'hidden';
                    lines.forEach(function(item) {
                        return item.style.transform = "rotate(0deg)";
                    });
                }
            }); // скролл вверх

            up.addEventListener('click', function() {
                window.scrollTo({
                    behavior: 'smooth',
                    top: 0
                });
            });
        };

        showScrollUp(); // Регистрация

        if (document.querySelector('.account__data-register-first-name')) {
            var options_register = {
                firstName: {
                    required: true,
                    selectorEl: '.account__data-register-first-name',
                    classInvalid: 'invalid',
                    classValid: 'valid',
                    onlyRus: true,
                    bigFirstSymbol: true,
                    minLength: 2
                },
                lastName: {
                    required: true,
                    selectorEl: '.account__data-register-last-name',
                    classInvalid: 'invalid',
                    classValid: 'valid',
                    onlyRus: true,
                    bigFirstSymbol: true,
                    minLength: 2
                },
                mail: {
                    required: true,
                    selectorEl: '.account__data-register-email',
                    classInvalid: 'invalid',
                    classValid: 'valid'
                },
                password: {
                    required: true,
                    selectorEl: '.account__data-register-password',
                    classInvalid: 'invalid',
                    classValid: 'valid',
                    minLength: 6
                }
            };

            new Valval().start(options_register); // Вход

            var options_sign_in = {
                mail: {
                    selectorEl: '.account__data-login-email',
                    required: true,
                    classInvalid: 'invalid',
                    classValid: 'valid'
                },
                password: {
                    selectorEl: '.account__data-login-password',
                    required: true,
                    classInvalid: 'invalid',
                    classValid: 'valid'
                }
            };

            new Valval().start(options_sign_in);
        }

        var lookingImagesInModalWindow = function lookingImagesInModalWindow() { // просмотр изображений в модальном окне
            var product_img = document.querySelector('.product__img');
            var modal_window = document.querySelector('.window-look');
            var close = document.querySelector('.window-look__close');

            if (product_img) {
                var hideImage = function hideImage() {
                    modal_window.classList.remove('open-window');
                    document.body.style.height = 'auto';
                    document.body.style.overflow = 'visible';
                    window.scrollTo({
                        behavior: 'auto',
                        top: 0
                    });
                };

                var images = document.querySelectorAll('.window-look__img'); // появление окна просмотра

                product_img.addEventListener('click', function() {
                    modal_window.classList.add('open-window');
                    document.body.style.height = "".concat(document.querySelector('.window-look').clientHeight, "px");
                    document.body.style.overflow = 'hidden';
                    window.scrollTo({
                        behavior: 'auto',
                        top: 0
                    });
                }); // закрытие окна просмотра

                close.addEventListener('click', function() {
                    return hideImage();
                });
                window.addEventListener('keydown', function(event) {
                    return event.keyCode === 27 && hideImage();
                });
                images.forEach(function(item) {
                    return item.addEventListener('click', function() {
                        return hideImage();
                    });
                });
            }
        };

        lookingImagesInModalWindow(); // валидация формы

        var cartProducts = document.querySelector('.cart__products');
        var cartElement = document.querySelector('.cart');

        if (cartElement) {
            cartElement.addEventListener('click', function(event) {
                if (event.target.classList.contains('cart__product-desc-remove-product')) {
                    var id = event.target.dataset.id;
                    var csrf = event.target.dataset.csrf;
                    fetch("/cart/remove/".concat(id), {
                        method: 'delete',
                        headers: {
                            'X-XSRF-TOKEN': csrf
                        }
                    }).then(function(res) {
                        return res.json();
                    }).then(function(cart) {
                        if (cart.cartProducts.length) {
                            var html = cart.cartProducts.map(function(p) {
                                return "\n                                <li class=\"cart__product\">\n                                    <div class=\"cart__product-content\">\n                                        <div class=\"cart__product-desc\">\n                                            <a href=\"/shop/".concat(p.id, "\">\n                                                <div class=\"cart__product-desc-img\">\n                                                    <figure>\n                                                        <img src=\"").concat(p.img[0], "\" alt=\"").concat(p.title, "\" width=\"128\">\n                                                    </figure>\n                                                </div>\n                                            </a>\n                                            <div class=\"cart__product-desc-text\">\n                                                <div class=\"cart__product-desc-block\">\n                                                    <div class=\"cart__product-desc-block-item\" style=\"width: 200px;\">\n                                                        <p>").concat(p.description, "</p>\n                                                        <div class=\"cart__product-desc-size\">\u0420\u0430\u0437\u043C\u0435\u0440: ").concat(p.mainSize, " (").concat(p.sizes[0], ")</div>\n                                                    </div>\n                                                    <div class=\"cart__product-desc-block-item\">\n                                                        <div class=\"cart__product-desc-price\">").concat(p.nowPrice, "</div>\n                                                    </div>\n                                                </div>\n                                                <div class=\"cart__product-desc-block\">\n                                                    <div class=\"cart__product-desc-block-item\">\n                                                        <div class=\"cart__product-desc-count\">\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E: ").concat(p.count, "</div>\n                                                    </div>\n                                                    <div class=\"cart__product-desc-block-item\">\n                                                        <input class=\"cart__product-desc-remove-product\" type=\"submit\" data-id=\"").concat(p.id, "\" value=\"\u0423\u0434\u0430\u043B\u0438\u0442\u044C\" />\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"cart__product-info\">\n                                            <div class=\"cart__product-heading\">\u041E\u0441\u0435\u043D\u044C-\u0437\u0438\u043C\u0430</div>\n                                            <div class=\"cart__product-total\">\u0418\u0442\u043E\u0433\u043E: ").concat(p.nowPrice * p.count, "</div>\n                                            <form class=\"cart__product-info-form\" action=\"/order\" method=\"GET\">\n                                                <input type=\"hidden\" name=\"_csrf\" value=\"#{csrf}\">\n                                                <input class=\"cart__product-form-buy\" type=\"submit\" value=\"\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C\">\n                                            </form>\n                                        </div>\n                                    </div> \n                                </li>\n                            ");
                            }).join('');
                            cartProducts ? cartProducts.innerHTML = html : false;
                        } else {
                            if (cartProducts) {
                                cartProducts.innerHTML = "\n                                <h1>SHOPPING BAG</h1>\n                                <p>Your shopping bag is currently empty. Enable cookies to use the shopping cart</p>\n                            ";
                            }
                        }
                    });
                }
            });
        } // показать/скрыть пароль


        var showHidePassword = function showHidePassword() {
            var passwords = document.querySelectorAll('.account__data[type="password"]');
            var eyes = document.querySelectorAll('.account__eye');
            var show = false;
            eyes.forEach(function(item, index) {
                item.addEventListener('click', function() {
                    show = !show;
                    item.src = show ? '/eye-hide.png' : '/eye-show.png';
                    passwords[index].type = show ? 'text' : 'password';
                });
            });
        };

        showHidePassword(); // создание select

        var select = function select() {
            var heading = document.querySelector('.product__block-list-heading');
            var list = document.querySelector('.product__block-list');
            var block = document.querySelector('.product__block-select-wrapper');
            var open = false;

            if (block) {
                var sizes = document.querySelectorAll('.product__block-size');
                var height = sizes.length * sizes[0].clientHeight;
                var bottom = sizes.length * sizes[0].clientHeight;
                heading.innerHTML = sizes[0].innerHTML; // открытие/закрытие select

                var openCloseSelect = function openCloseSelect() {
                    heading.addEventListener('click', function() {
                        open = !open;
                        list.style.height = open ? "".concat(height, "px") : "0px";
                        list.style.bottom = open ? "-".concat(bottom, "px") : "0px";
                        list.classList.toggle('open-select');
                        block.classList.toggle('open-options');
                    });
                };

                openCloseSelect(); // выбор размера

                var choiceSize = function choiceSize() {
                    sizes.forEach(function(item) {
                        item.addEventListener('click', function() {
                            open = false;
                            list.style.height = open ? "".concat(height, "px") : "0px";
                            list.style.bottom = open ? "-".concat(bottom, "px") : "0px";
                            heading.innerHTML = item.innerHTML;
                            list.classList.remove('open-select');
                            block.classList.remove('open-options');
                        });
                    });
                };

                choiceSize();
            }
        };

        select(); // адаптив
        // появление меню

        var showMenuList = function showMenuList() {
            var btn_open_nav = document.querySelector('.header__bottom-btn');
            var btn_open_user = document.querySelector('.header__bottom-btn-user');
            var list_nav = document.querySelector('.header__bottom-list-nav');
            var list_user = document.querySelector('.header__bottom-list-user');
            var btn_close_nav = document.querySelector('.header__bottom-list-close-nav');
            var btn_close_user = document.querySelector('.header__bottom-list-close-user');

            var switchingClasses = function switchingClasses(btn, list, open) {
                btn.addEventListener('click', function() {
                    document.querySelector('.up-wrapper').style.zIndex = '0';

                    if (open) {
                        document.documentElement.classList.add('no-scroll');
                        list.classList.add('show-menu');

                        if (document.querySelector('.block-filters')) {
                            document.querySelector('.block-filters').style.zIndex = '0';
                        }
                    } else {
                        document.documentElement.classList.remove('no-scroll');
                        document.querySelector('.up-wrapper').style.zIndex = '999';
                        list.classList.remove('show-menu');

                        if (document.querySelector('.block-filters')) {
                            document.querySelector('.block-filters').style.zIndex = '999';
                        }
                    }
                });
            };

            switchingClasses(btn_open_nav, list_nav, true);
            switchingClasses(btn_open_user, list_user, true);
            switchingClasses(btn_close_nav, list_nav, false);
            switchingClasses(btn_close_user, list_user, false);
        };

        showMenuList(); // появление фильтра

        var showFilter = function showFilter() {
            var btn_open = document.querySelector('.btn-open-filters');
            var filters = document.querySelector('.block-filters-list');

            if (btn_open) {
                btn_open.addEventListener('click', function() {
                    filters.classList.toggle('show-filters');
                });
            }
        };

        showFilter();

        /***/
    }),

    /***/
    "./src/public/js/slider.js":
    /*!*********************************!*\
      !*** ./src/public/js/slider.js ***!
      \*********************************/
    /*! no exports provided */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */
        var _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");

        var options = {
            type: 'carousel',
            autoplay: 4000,
            animationDuration: 2000,
            animationTimingFunc: 'ease',
            gap: 50,
            breakpoints: {
                600: {
                    gap: 20
                }
            }
        }; // инициализация библиотеки Glide

        document.querySelector('.glide') && new _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__["default"]('.glide', options).mount();

        /***/
    })

    /******/
});
//# sourceMappingURL=main.js.map