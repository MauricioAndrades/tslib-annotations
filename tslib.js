/* global global, define, Symbol, Reflect, Promise, SuppressedError */
var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __esDecorate;
var __runInitializers;
var __propKey;
var __setFunctionName;
var __metadata;
var __awaiter;
var __generator;
var __exportStar;
var __values;
var __read;
var __spread;
var __spreadArrays;
var __spreadArray;
var __await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
var __makeTemplateObject;
var __importStar;
var __importDefault;
var __classPrivateFieldGet;
var __classPrivateFieldSet;
var __classPrivateFieldIn;
var __createBinding;
var __addDisposableResource;
var __disposeResources;
(function (factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function (exports) {
            factory(createExporter(root, createExporter(exports)));
        });
    } else if (typeof module === "object" && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
    } else {
        factory(createExporter(root));
    }
    function createExporter(exports, previous) {
        if (exports !== root) {
            if (typeof Object.create === "function") {
                Object.defineProperty(exports, "__esModule", { value: true });
            } else {
                exports.__esModule = true;
            }
        }
        return function (id, v) {
            return exports[id] = previous ? previous(id, v) : v;
        };
    }
})(function (exporter) {
    // The extendStatics function is used to set the prototype of one object to another object.
    // It uses the Object.setPrototypeOf function if available.
    // If not, it checks if an object with a null prototype is an instance of Array.
    // If it is, it uses a function that sets the __proto__ property.
    // If not, it uses a function that copies all own properties from the prototype object to the target object.
    var extendStatics = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array && function (target, prototype) {
        target.__proto__ = prototype;
    }) || function (target, prototype) {
        for (var property in prototype) {
            if (Object.prototype.hasOwnProperty.call(prototype, property)) {
                target[property] = prototype[property];
            }
        }
    };


    /**
     * The __extends function is used to implement inheritance in JavaScript.
     * @param {Function} derivedClass The derived
     * @param {Function} baseClass The base class
     * @returns {void}
     */
    __extends = function (derivedClass, baseClass) {
        // If the base class is not a function and is not null, throw a TypeError.
        if (typeof baseClass !== "function" && baseClass !== null) {
            throw new TypeError("Class extends value " + String(baseClass) + " is not a constructor or null");
        }
        // Extend static properties from the base class to the derived class.
        extendStatics(derivedClass, baseClass);

        // Define a constructor function for the derived class.
        function DerivedClassConstructor() {
            this.constructor = derivedClass;
        }

        // Set the prototype of the derived class to be an instance of the constructor function,
        // which has its prototype set to the prototype of the base class.
        // This allows instances of the derived class to inherit properties from the base class.
        derivedClass.prototype = baseClass === null ? Object.create(baseClass) : (DerivedClassConstructor.prototype = baseClass.prototype, new DerivedClassConstructor());
    };

    // The __assign function is a polyfill for Object.assign.
    // It copies all enumerable own properties from one or more source objects to a target object, and returns the target object.
    __assign = Object.assign || function (target) {
        // Iterate over all source objects (arguments of the function after the first one)
        for (var source, index = 1, numArgs = arguments.length; index < numArgs; index++) {
            source = arguments[index];
            // Iterate over all properties of the source object
            for (var property in source) {
                // If the property is an own property of the source object, copy it to the target object
                if (Object.prototype.hasOwnProperty.call(source, property)) {
                    target[property] = source[property];
                }
            }
        }
        // Return the target object
        return target;
    };

    // The __rest function is used to create a new object with some properties of an existing object.
    // It takes two arguments: the source object (source) and an array of properties to exclude (excludedProperties).
    __rest = function (source, excludedProperties) {
        // Create a new object to hold the properties
        var target = {};

        // Iterate over all properties in the source object
        for (var property in source) {
            // If the property is an own property of the source object and is not in the array of excluded properties,
            // copy it to the target object
            if (Object.prototype.hasOwnProperty.call(source, property) && excludedProperties.indexOf(property) < 0) {
                target[property] = source[property];
            }
        }

        // If the source object is not null and the Object.getOwnPropertySymbols function is available,
        // iterate over all symbol properties of the source object
        if (source != null && typeof Object.getOwnPropertySymbols === "function") {
            for (var i = 0, propertySymbols = Object.getOwnPropertySymbols(source); i < propertySymbols.length; i++) {
                // If the symbol is not in the array of excluded properties and is an enumerable property of the source object,
                // copy it to the target object
                if (excludedProperties.indexOf(propertySymbols[i]) < 0 && Object.prototype.propertyIsEnumerable.call(source, propertySymbols[i])) {
                    target[propertySymbols[i]] = source[propertySymbols[i]];
                }
            }
        }

        // Return the target object
        return target;
    };

    /**
     * @param {ClassDecorator[]} decorators An array of decorators
     * @param {Function} target The target of the decorators
     * @param {string|symbol} key The key of the property
     * @param {PropertyDescriptor} descriptor The property descriptor
     * @returns {PropertyDescriptor} The property descriptor
     */
    __decorate = function (decorators, target, key, descriptor) {
        // Determine the number of arguments
        var argumentCount = arguments.length;

        // If there are less than 3 arguments, use the target as the descriptor.
        // If the descriptor is null, get the descriptor from the target and key.
        var resultDescriptor = argumentCount < 3 ? target : descriptor === null ? descriptor = Object.getOwnPropertyDescriptor(target, key) : descriptor;
        var decorator;

        // If the Reflect object and the Reflect.decorate function are available, use them to apply the decorators.
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
            resultDescriptor = Reflect.decorate(decorators, target, key, descriptor);
        } else {
            // Otherwise, apply the decorators manually in reverse order.
            for (var i = decorators.length - 1; i >= 0; i--) {
                if (decorator = decorators[i]) {
                    resultDescriptor = (argumentCount < 3 ? decorator(resultDescriptor) : argumentCount > 3 ? decorator(target, key, resultDescriptor) : decorator(target, key)) || resultDescriptor;
                }
            }
        }

        // If there are more than 3 arguments and the result descriptor is defined, define the property on the target with the result descriptor.
        if (argumentCount > 3 && resultDescriptor && Object.defineProperty) {
            Object.defineProperty(target, key, resultDescriptor);
        }

        // Return the result descriptor
        return resultDescriptor;
    };

    // The __param function is used to apply a decorator to a parameter of a method or constructor.
    // It takes two arguments: the index of the parameter (paramIndex) and the decorator function (decorator).
    __param = function (paramIndex, decorator) {
        // It returns a new function that takes the target object and the key of the method or constructor.
        return function (target, key) {
            // This function applies the decorator to the specified parameter of the method or constructor on the target object.
            decorator(target, key, paramIndex);
        };
    };

    __esDecorate = function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
        function accept(f) {
            if (f !== void 0 && typeof f !== "function") { throw new TypeError("Function expected"); }
            return f;
        }
        var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
        var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
        var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
        var _, done = false;
        for (var i = decorators.length - 1; i >= 0; i--) {
            var context = {};
            for (var p in contextIn) { context[p] = p === "access" ? {} : contextIn[p]; }
            for (var p in contextIn.access) { context.access[p] = contextIn.access[p]; }
            context.addInitializer = function (f) {
                if (done) { throw new TypeError("Cannot add initializers after decoration has completed"); }
                extraInitializers.push(accept(f || null));
            };
            var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
            if (kind === "accessor") {
                if (result === void 0) { continue; }
                if (result === null || typeof result !== "object") { throw new TypeError("Object expected"); }
                if (_ = accept(result.get)) { descriptor.get = _; }
                if (_ = accept(result.set)) { descriptor.set = _; }
                if (_ = accept(result.init)) { initializers.unshift(_); }
            } else if (_ = accept(result)) {
                if (kind === "field") { initializers.unshift(_); }
                else { descriptor[key] = _; }
            }
        }
        if (target) { Object.defineProperty(target, contextIn.name, descriptor); }
        done = true;
    };

    /**
     * The __runInitializers function is used to run a series of initializer functions.
     * @param {any} context The context to call the initializers with
     * @param {Function[]} initializers The array of initializers
     * @param {any} initialValue The optional initial value
     */
    __runInitializers = function (context, initializers, initialValue) {
        // Determine if an initial value was provided
        var isInitialValueProvided = arguments.length > 2;

        // Iterate over all initializers
        for (var i = 0; i < initializers.length; i++) {
            // If an initial value was provided, call the initializer with the initial value as an argument.
            // Otherwise, call the initializer with no arguments.
            // In both cases, the context is used as the this value.
            initialValue = isInitialValueProvided ? initializers[i].call(context, initialValue) : initializers[i].call(context);
        }

        // If an initial value was provided, return the final value.
        // Otherwise, return undefined.
        return isInitialValueProvided ? initialValue : undefined;
    };

    // The __propKey function is used to convert a property key to a string or symbol.
    // It takes one argument: the property key (propertyKey).
    __propKey = function (propertyKey) {
        // If the property key is a symbol, return it as is.
        // Otherwise, convert it to a string and return it.
        return typeof propertyKey === "symbol" ? propertyKey : "".concat(propertyKey);
    };

    __setFunctionName = function (f, name, prefix) {
        if (typeof name === "symbol") { name = name.description ? "[".concat(name.description, "]") : ""; }
        return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
    };

    __metadata = function (metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") { return Reflect.metadata(metadataKey, metadataValue); }
    };

    __awaiter = function (thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P ? value : new P(function (resolve) {
                resolve(value);
            });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator["throw"](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };

    __generator = function (thisArg, body) {
        var generatorState = {
            label: 0,
            sent: function () {
                if (operation[0] & 1) { throw operation[1]; }
                return operation[1];
            },
            trys: [],
            ops: []
        },
            isExecuting,
            yieldedValue,
            operation,
            generator;

        return generator = { next: verb(0), "throw": verb(1), "return": verb(2) },
            typeof Symbol === "function" && (generator[Symbol.iterator] = function () {
                return this;
            }),
            generator;

        function verb(n) {
            return function (value) {
                return step([n, value]);
            };
        }

        function step(op) {
            if (isExecuting) { throw new TypeError("Generator is already executing."); }
            while (generator) {
                try {
                    if (isExecuting = 1, yieldedValue && (operation = op[0] & 2 ? yieldedValue["return"] : op[0] ? yieldedValue["throw"] || ((operation = yieldedValue["return"]) && operation.call(yieldedValue), 0) : yieldedValue.next) && !(operation = operation.call(yieldedValue, op[1])).done) { return operation; }
                    if (yieldedValue = 0, operation) { op = [op[0] & 2, operation.value]; }
                    switch (op[0]) {
                        case 0:
                        case 1:
                            operation = op;
                            break;
                        case 4:
                            generatorState.label++;
                            return { value: op[1], done: false };
                        case 5:
                            generatorState.label++;
                            yieldedValue = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = generatorState.ops.pop();
                            generatorState.trys.pop();
                            continue;
                        default:
                            if (!(operation = generatorState.trys, operation = operation.length > 0 && operation[operation.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                generatorState = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!operation || (op[1] > operation[0] && op[1] < operation[3]))) {
                                generatorState.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && generatorState.label < operation[1]) {
                                generatorState.label = operation[1];
                                operation = op;
                                break;
                            }
                            if (operation && generatorState.label < operation[2]) {
                                generatorState.label = operation[2];
                                generatorState.ops.push(op);
                                break;
                            }
                            if (operation[2]) { generatorState.ops.pop(); }
                            generatorState.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, generatorState);
                } catch (e) {
                    op = [6, e];
                    yieldedValue = 0;
                } finally {
                    isExecuting = operation = 0;
                }
            }
            if (op[0] & 5) { throw op[1]; }
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    };

    // The __exportStar function is used to export all exports from a module to another object.
    __exportStar = function (sourceModule, targetObject) {
        // Iterate over all properties in the source module
        for (var property in sourceModule) {
            // If the property is not "default" and is not already a property on the target object,
            // create a binding from the source module to the target object for this property.
            if (property !== "default" && !Object.prototype.hasOwnProperty.call(targetObject, property)) {
                __createBinding(targetObject, sourceModule, property);
            }
        }
    };

    // The __createBinding function is used to create a binding from one module to another.
    // It uses the Object.create method if available, otherwise it falls back to a simpler method.
    __createBinding = Object.create ?
        // This version of the function is used when Object.create is available.
        // It creates a new property on the target object that gets its value from the source module.
        (function (targetObject, sourceModule, sourceKey, targetKey) {
            // If the target key is not specified, use the source key.
            if (targetKey === undefined) { targetKey = sourceKey; }
            // Get the property descriptor of the source key on the source module.
            var propertyDescriptor = Object.getOwnPropertyDescriptor(sourceModule, sourceKey);
            // If the property descriptor does not exist, or if it is a getter or a writable or configurable property,
            // create a new property descriptor with a getter that returns the value of the source key on the source module.
            if (!propertyDescriptor || ("get" in propertyDescriptor ? !sourceModule.__esModule : propertyDescriptor.writable || propertyDescriptor.configurable)) {
                propertyDescriptor = {
                    enumerable: true,
                    get: function () {
                        return sourceModule[sourceKey];
                    }
                };
            }
            // Define the property on the target object with the property descriptor.
            Object.defineProperty(targetObject, targetKey, propertyDescriptor);
        }) :
        // This version of the function is used when Object.create is not available.
        // It simply assigns the value of the source key on the source module to the target key on the target object.
        (function (targetObject, sourceModule, sourceKey, targetKey) {
            // If the target key is not specified, use the source key.
            if (targetKey === undefined) { targetKey = sourceKey; }
            targetObject[targetKey] = sourceModule[sourceKey];
        });

    __values = function (objectToIterate) {
        // Check if the Symbol function is defined and if so, get the iterator symbol
        var symbolExists = typeof Symbol === "function" && Symbol.iterator,
            // Get the iterator method of the object
            iteratorMethod = symbolExists && objectToIterate[symbolExists],
            currentIndex = 0;

        // If the object has an iterator method, return it
        if (iteratorMethod) {
            return iteratorMethod.call(objectToIterate);
        }

        // If the object is an array-like object (has a length property), return a custom iterator
        if (objectToIterate && typeof objectToIterate.length === "number") {
            return {
                next: function () {
                    // If we have iterated over all elements, set the object to undefined
                    if (objectToIterate && currentIndex >= objectToIterate.length) {
                        objectToIterate = void 0;
                    }
                    // Return the current element and increment the index
                    return { value: objectToIterate && objectToIterate[currentIndex++], done: !objectToIterate };
                }
            };
        }

        // If the object is not iterable and the Symbol.iterator is not defined, throw an error
        throw new TypeError(symbolExists ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };

    /**
     * This function reads n elements from an iterable object o.
     * @template T
     * @param {Iterable<T>} iterableObject The iterable object to read from
     * @param {number} numberOfElements The number of elements to read
     * @returns {T[]} An array of read elements
     */
    __read = function (iterableObject, numberOfElements) {
        // Check if the object is iterable (has a Symbol.iterator method)
        var isIterable = typeof Symbol === "function" && iterableObject[Symbol.iterator];
        if (!isIterable) {
            // If the object is not iterable, return it as is.
            return iterableObject;
        }

        // Get the iterator for the object
        var iterator = isIterable.call(iterableObject), iterationResult, arrayResult = [], exception;

        try {
            // Iterate over the object, pushing each value to the arrayResult
            // Stop when we have read the specified number of elements (numberOfElements)
            // or when we have read all elements (if numberOfElements is undefined)
            while ((numberOfElements === void 0 || numberOfElements-- > 0) && !(iterationResult = iterator.next()).done) {
                arrayResult.push(iterationResult.value);
            }
        } catch (error) {
            // If an error occurs during iteration, store it in the exception object
            exception = { error: error };
        } finally {
            try {
                // If the iterator has a return method (which should be called when iteration is complete or an error occurs),
                // and we have not finished iterating, call the return method
                if (iterationResult && !iterationResult.done && (isIterable = iterator["return"])) {
                    isIterable.call(iterator);
                }
            } finally {
                // If an error occurred during iteration, throw it
                if (exception) {
                    throw exception.error;
                }
            }
        }

        // Return the array of read elements
        return arrayResult;
    };

    /** @deprecated */
    __spread = function () {
        for (var ar = [], i = 0; i < arguments.length; i++) { ar = ar.concat(__read(arguments[i])); }
        return ar;
    };

    /** @deprecated */
    __spreadArrays = function () {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) { s += arguments[i].length; }
        for (var r = Array(s), k = 0, i = 0; i < il; i++) { for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) { r[k] = a[j]; } }
        return r;
    };

    __spreadArray = function (to, from, pack) {
        if (pack || arguments.length === 2) {
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar) { ar = Array.prototype.slice.call(from, 0, i); }
                    ar[i] = from[i];
                }
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    };

    __await = function (v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    };

    __asyncGenerator = function (thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) { throw new TypeError("Symbol.asyncIterator is not defined."); }
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {},
            verb("next"),
            verb("throw"),
            verb("return", awaitReturn),
            i[Symbol.asyncIterator] = function () {
                return this;
            },
            i;
        function awaitReturn(f) {
            return function (v) {
                return Promise.resolve(v).then(f, reject);
            };
        }
        function verb(n, f) {
            if (g[n]) {
                i[n] = function (v) {
                    return new Promise(function (a, b) {
                        q.push([n, v, a, b]) > 1 || resume(n, v);
                    });
                };
                if (f) { i[n] = f(i[n]); }
            }
        }
        function resume(n, v) {
            try {
                step(g[n](v));
            } catch (e) {
                settle(q[0][3], e);
            }
        }
        function step(r) {
            r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        function fulfill(value) {
            resume("next", value);
        }
        function reject(value) {
            resume("throw", value);
        }
        function settle(f, v) {
            if (f(v), q.shift(), q.length) { resume(q[0][0], q[0][1]); }
        }
    };

    __asyncDelegator = function (o) {
        var i, p;
        return i = {},
            verb("next"),
            verb("throw", function (e) {
                throw e;
            }),
            verb("return"),
            i[Symbol.iterator] = function () {
                return this;
            },
            i;
        function verb(n, f) {
            i[n] = o[n] ?
                function (v) {
                    return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v;
                } :
                f;
        }
    };

    __asyncValues = function (o) {
        if (!Symbol.asyncIterator) { throw new TypeError("Symbol.asyncIterator is not defined."); }
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](),
            i = {},
            verb("next"),
            verb("throw"),
            verb("return"),
            i[Symbol.asyncIterator] = function () {
                return this;
            },
            i);
        function verb(n) {
            i[n] = o[n] && function (v) {
                return new Promise(function (resolve, reject) {
                    v = o[n](v), settle(resolve, reject, v.done, v.value);
                });
            };
        }
        function settle(resolve, reject, d, v) {
            Promise.resolve(v).then(function (v) {
                resolve({ value: v, done: d });
            }, reject);
        }
    };

    __makeTemplateObject = function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); }
        else { cooked.raw = raw; }
        return cooked;
    };

    var __setModuleDefault = Object.create ?
        (function (o, v) {
            Object.defineProperty(o, "default", { enumerable: true, value: v });
        }) :
        function (o, v) {
            o["default"] = v;
        };

    __importStar = function (mod) {
        if (mod && mod.__esModule) { return mod; }
        var result = {};
        if (mod != null) { for (var k in mod) { if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) { __createBinding(result, mod, k); } } }
        __setModuleDefault(result, mod);
        return result;
    };

    __importDefault = function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };

    __classPrivateFieldGet = function (receiver, state, kind, f) {
        if (kind === "a" && !f) { throw new TypeError("Private accessor was defined without a getter"); }
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) { throw new TypeError("Cannot read private member from an object whose class did not declare it"); }
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };

    __classPrivateFieldSet = function (receiver, state, value, kind, f) {
        if (kind === "m") { throw new TypeError("Private method is not writable"); }
        if (kind === "a" && !f) { throw new TypeError("Private accessor was defined without a setter"); }
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) { throw new TypeError("Cannot write private member to an object whose class did not declare it"); }
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };

    __classPrivateFieldIn = function (state, receiver) {
        if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) { throw new TypeError("Cannot use 'in' operator on non-object"); }
        return typeof state === "function" ? receiver === state : state.has(receiver);
    };

    __addDisposableResource = function (env, value, async) {
        if (value !== null && value !== void 0) {
            if (typeof value !== "object" && typeof value !== "function") { throw new TypeError("Object expected."); }
            var dispose;
            if (async) {
                if (!Symbol.asyncDispose) { throw new TypeError("Symbol.asyncDispose is not defined."); }
                dispose = value[Symbol.asyncDispose];
            }
            if (dispose === void 0) {
                if (!Symbol.dispose) { throw new TypeError("Symbol.dispose is not defined."); }
                dispose = value[Symbol.dispose];
            }
            if (typeof dispose !== "function") { throw new TypeError("Object not disposable."); }
            env.stack.push({ value: value, dispose: dispose, async: async });
        } else if (async) {
            env.stack.push({ async: true });
        }
        return value;
    };

    var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };

    __disposeResources = function (env) {
        function fail(e) {
            env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        function next() {
            while (env.stack.length) {
                var rec = env.stack.pop();
                try {
                    var result = rec.dispose && rec.dispose.call(rec.value);
                    if (rec.async) {
                        return Promise.resolve(result).then(next, function (e) {
                            fail(e);
                            return next();
                        });
                    }
                } catch (e) {
                    fail(e);
                }
            }
            if (env.hasError) { throw env.error; }
        }
        return next();
    };

    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__esDecorate", __esDecorate);
    exporter("__runInitializers", __runInitializers);
    exporter("__propKey", __propKey);
    exporter("__setFunctionName", __setFunctionName);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__createBinding", __createBinding);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__spreadArrays", __spreadArrays);
    exporter("__spreadArray", __spreadArray);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
    exporter("__classPrivateFieldGet", __classPrivateFieldGet);
    exporter("__classPrivateFieldSet", __classPrivateFieldSet);
    exporter("__classPrivateFieldIn", __classPrivateFieldIn);
    exporter("__addDisposableResource", __addDisposableResource);
    exporter("__disposeResources", __disposeResources);
});
