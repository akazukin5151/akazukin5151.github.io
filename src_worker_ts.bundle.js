/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../pkg/libapproportionment.js":
/*!*************************************!*\
  !*** ../pkg/libapproportionment.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"initSync\": () => (/* binding */ initSync),\n/* harmony export */   \"run\": () => (/* binding */ run)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nlet wasm;\n\nconst cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachedUint8Memory0 = new Uint8Array();\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction getObject(idx) { return heap[idx]; }\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nfunction isLikeNone(x) {\n    return x === undefined || x === null;\n}\n\nlet cachedFloat64Memory0 = new Float64Array();\n\nfunction getFloat64Memory0() {\n    if (cachedFloat64Memory0.byteLength === 0) {\n        cachedFloat64Memory0 = new Float64Array(wasm.memory.buffer);\n    }\n    return cachedFloat64Memory0;\n}\n\nlet cachedInt32Memory0 = new Int32Array();\n\nfunction getInt32Memory0() {\n    if (cachedInt32Memory0.byteLength === 0) {\n        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);\n    }\n    return cachedInt32Memory0;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst cachedTextEncoder = new TextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nfunction debugString(val) {\n    // primitive types\n    const type = typeof val;\n    if (type == 'number' || type == 'boolean' || val == null) {\n        return  `${val}`;\n    }\n    if (type == 'string') {\n        return `\"${val}\"`;\n    }\n    if (type == 'symbol') {\n        const description = val.description;\n        if (description == null) {\n            return 'Symbol';\n        } else {\n            return `Symbol(${description})`;\n        }\n    }\n    if (type == 'function') {\n        const name = val.name;\n        if (typeof name == 'string' && name.length > 0) {\n            return `Function(${name})`;\n        } else {\n            return 'Function';\n        }\n    }\n    // objects\n    if (Array.isArray(val)) {\n        const length = val.length;\n        let debug = '[';\n        if (length > 0) {\n            debug += debugString(val[0]);\n        }\n        for(let i = 1; i < length; i++) {\n            debug += ', ' + debugString(val[i]);\n        }\n        debug += ']';\n        return debug;\n    }\n    // Test for built-in\n    const builtInMatches = /\\[object ([^\\]]+)\\]/.exec(toString.call(val));\n    let className;\n    if (builtInMatches.length > 1) {\n        className = builtInMatches[1];\n    } else {\n        // Failed to match the standard '[object ClassName]'\n        return toString.call(val);\n    }\n    if (className == 'Object') {\n        // we're a user defined class or Object\n        // JSON.stringify avoids problems with cycles, and is generally much\n        // easier than looping through ownProperties of `val`.\n        try {\n            return 'Object(' + JSON.stringify(val) + ')';\n        } catch (_) {\n            return 'Object';\n        }\n    }\n    // errors\n    if (val instanceof Error) {\n        return `${val.name}: ${val.message}\\n${val.stack}`;\n    }\n    // TODO we could test for more things here, like `Set`s and `Map`s.\n    return className;\n}\n\nfunction handleError(f, args) {\n    try {\n        return f.apply(this, args);\n    } catch (e) {\n        wasm.__wbindgen_exn_store(addHeapObject(e));\n    }\n}\n\nfunction getArrayU8FromWasm0(ptr, len) {\n    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);\n}\n/**\n* @param {string} method_str\n* @param {number} n_seats\n* @param {number} n_voters\n* @param {any} js_parties\n* @returns {any}\n*/\nfunction run(method_str, n_seats, n_voters, js_parties) {\n    try {\n        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);\n        const ptr0 = passStringToWasm0(method_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);\n        const len0 = WASM_VECTOR_LEN;\n        wasm.run(retptr, ptr0, len0, n_seats, n_voters, addHeapObject(js_parties));\n        var r0 = getInt32Memory0()[retptr / 4 + 0];\n        var r1 = getInt32Memory0()[retptr / 4 + 1];\n        var r2 = getInt32Memory0()[retptr / 4 + 2];\n        if (r2) {\n            throw takeObject(r1);\n        }\n        return takeObject(r0);\n    } finally {\n        wasm.__wbindgen_add_to_stack_pointer(16);\n    }\n}\n\nasync function load(module, imports) {\n    if (typeof Response === 'function' && module instanceof Response) {\n        if (typeof WebAssembly.instantiateStreaming === 'function') {\n            try {\n                return await WebAssembly.instantiateStreaming(module, imports);\n\n            } catch (e) {\n                if (module.headers.get('Content-Type') != 'application/wasm') {\n                    console.warn(\"`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\\n\", e);\n\n                } else {\n                    throw e;\n                }\n            }\n        }\n\n        const bytes = await module.arrayBuffer();\n        return await WebAssembly.instantiate(bytes, imports);\n\n    } else {\n        const instance = await WebAssembly.instantiate(module, imports);\n\n        if (instance instanceof WebAssembly.Instance) {\n            return { instance, module };\n\n        } else {\n            return instance;\n        }\n    }\n}\n\nfunction getImports() {\n    const imports = {};\n    imports.wbg = {};\n    imports.wbg.__wbindgen_error_new = function(arg0, arg1) {\n        const ret = new Error(getStringFromWasm0(arg0, arg1));\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbindgen_object_clone_ref = function(arg0) {\n        const ret = getObject(arg0);\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbg_crypto_e1d53a1d73fb10b8 = function(arg0) {\n        const ret = getObject(arg0).crypto;\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbindgen_is_object = function(arg0) {\n        const val = getObject(arg0);\n        const ret = typeof(val) === 'object' && val !== null;\n        return ret;\n    };\n    imports.wbg.__wbg_process_038c26bf42b093f8 = function(arg0) {\n        const ret = getObject(arg0).process;\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbg_versions_ab37218d2f0b24a8 = function(arg0) {\n        const ret = getObject(arg0).versions;\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbindgen_object_drop_ref = function(arg0) {\n        takeObject(arg0);\n    };\n    imports.wbg.__wbg_node_080f4b19d15bc1fe = function(arg0) {\n        const ret = getObject(arg0).node;\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbindgen_is_string = function(arg0) {\n        const ret = typeof(getObject(arg0)) === 'string';\n        return ret;\n    };\n    imports.wbg.__wbg_require_78a3dcfbdba9cbce = function() { return handleError(function () {\n        const ret = module.require;\n        return addHeapObject(ret);\n    }, arguments) };\n    imports.wbg.__wbindgen_is_function = function(arg0) {\n        const ret = typeof(getObject(arg0)) === 'function';\n        return ret;\n    };\n    imports.wbg.__wbindgen_string_new = function(arg0, arg1) {\n        const ret = getStringFromWasm0(arg0, arg1);\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbg_call_168da88779e35f61 = function() { return handleError(function (arg0, arg1, arg2) {\n        const ret = getObject(arg0).call(getObject(arg1), getObject(arg2));\n        return addHeapObject(ret);\n    }, arguments) };\n    imports.wbg.__wbg_msCrypto_6e7d3e1f92610cbb = function(arg0) {\n        const ret = getObject(arg0).msCrypto;\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbg_newwithlength_f5933855e4f48a19 = function(arg0) {\n        const ret = new Uint8Array(arg0 >>> 0);\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbg_self_6d479506f72c6a71 = function() { return handleError(function () {\n        const ret = self.self;\n        return addHeapObject(ret);\n    }, arguments) };\n    imports.wbg.__wbg_window_f2557cc78490aceb = function() { return handleError(function () {\n        const ret = window.window;\n        return addHeapObject(ret);\n    }, arguments) };\n    imports.wbg.__wbg_globalThis_7f206bda628d5286 = function() { return handleError(function () {\n        const ret = globalThis.globalThis;\n        return addHeapObject(ret);\n    }, arguments) };\n    imports.wbg.__wbg_global_ba75c50d1cf384f4 = function() { return handleError(function () {\n        const ret = __webpack_require__.g.global;\n        return addHeapObject(ret);\n    }, arguments) };\n    imports.wbg.__wbindgen_is_undefined = function(arg0) {\n        const ret = getObject(arg0) === undefined;\n        return ret;\n    };\n    imports.wbg.__wbg_newnoargs_b5b063fc6c2f0376 = function(arg0, arg1) {\n        const ret = new Function(getStringFromWasm0(arg0, arg1));\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbg_call_97ae9d8645dc388b = function() { return handleError(function (arg0, arg1) {\n        const ret = getObject(arg0).call(getObject(arg1));\n        return addHeapObject(ret);\n    }, arguments) };\n    imports.wbg.__wbindgen_memory = function() {\n        const ret = wasm.memory;\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbg_buffer_3f3d764d4747d564 = function(arg0) {\n        const ret = getObject(arg0).buffer;\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbg_new_8c3f0052272a457a = function(arg0) {\n        const ret = new Uint8Array(getObject(arg0));\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbg_set_83db9690f9353e79 = function(arg0, arg1, arg2) {\n        getObject(arg0).set(getObject(arg1), arg2 >>> 0);\n    };\n    imports.wbg.__wbg_isArray_27c46c67f498e15d = function(arg0) {\n        const ret = Array.isArray(getObject(arg0));\n        return ret;\n    };\n    imports.wbg.__wbg_length_6e3bbe7c8bd4dbd8 = function(arg0) {\n        const ret = getObject(arg0).length;\n        return ret;\n    };\n    imports.wbg.__wbg_get_57245cc7d7c7619d = function(arg0, arg1) {\n        const ret = getObject(arg0)[arg1 >>> 0];\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbg_iterator_6f9d4f28845f426c = function() {\n        const ret = Symbol.iterator;\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbg_get_765201544a2b6869 = function() { return handleError(function (arg0, arg1) {\n        const ret = Reflect.get(getObject(arg0), getObject(arg1));\n        return addHeapObject(ret);\n    }, arguments) };\n    imports.wbg.__wbg_next_579e583d33566a86 = function(arg0) {\n        const ret = getObject(arg0).next;\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbg_next_aaef7c8aa5e212ac = function() { return handleError(function (arg0) {\n        const ret = getObject(arg0).next();\n        return addHeapObject(ret);\n    }, arguments) };\n    imports.wbg.__wbg_done_1b73b0672e15f234 = function(arg0) {\n        const ret = getObject(arg0).done;\n        return ret;\n    };\n    imports.wbg.__wbg_value_1ccc36bc03462d71 = function(arg0) {\n        const ret = getObject(arg0).value;\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbg_new_1d9a920c6bfc44a8 = function() {\n        const ret = new Array();\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbindgen_number_new = function(arg0) {\n        const ret = arg0;\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbg_set_a68214f35c417fa9 = function(arg0, arg1, arg2) {\n        getObject(arg0)[arg1 >>> 0] = takeObject(arg2);\n    };\n    imports.wbg.__wbg_String_91fba7ded13ba54c = function(arg0, arg1) {\n        const ret = String(getObject(arg1));\n        const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);\n        const len0 = WASM_VECTOR_LEN;\n        getInt32Memory0()[arg0 / 4 + 1] = len0;\n        getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n    };\n    imports.wbg.__wbg_getwithrefkey_15c62c2b8546208d = function(arg0, arg1) {\n        const ret = getObject(arg0)[getObject(arg1)];\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbindgen_in = function(arg0, arg1) {\n        const ret = getObject(arg0) in getObject(arg1);\n        return ret;\n    };\n    imports.wbg.__wbindgen_number_get = function(arg0, arg1) {\n        const obj = getObject(arg1);\n        const ret = typeof(obj) === 'number' ? obj : undefined;\n        getFloat64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? 0 : ret;\n        getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);\n    };\n    imports.wbg.__wbg_randomFillSync_6894564c2c334c42 = function() { return handleError(function (arg0, arg1, arg2) {\n        getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));\n    }, arguments) };\n    imports.wbg.__wbg_subarray_58ad4efbb5bcb886 = function(arg0, arg1, arg2) {\n        const ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbg_getRandomValues_805f1c3d65988a5a = function() { return handleError(function (arg0, arg1) {\n        getObject(arg0).getRandomValues(getObject(arg1));\n    }, arguments) };\n    imports.wbg.__wbg_length_9e1ae1900cb0fbd5 = function(arg0) {\n        const ret = getObject(arg0).length;\n        return ret;\n    };\n    imports.wbg.__wbindgen_jsval_loose_eq = function(arg0, arg1) {\n        const ret = getObject(arg0) == getObject(arg1);\n        return ret;\n    };\n    imports.wbg.__wbindgen_boolean_get = function(arg0) {\n        const v = getObject(arg0);\n        const ret = typeof(v) === 'boolean' ? (v ? 1 : 0) : 2;\n        return ret;\n    };\n    imports.wbg.__wbindgen_string_get = function(arg0, arg1) {\n        const obj = getObject(arg1);\n        const ret = typeof(obj) === 'string' ? obj : undefined;\n        var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);\n        var len0 = WASM_VECTOR_LEN;\n        getInt32Memory0()[arg0 / 4 + 1] = len0;\n        getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n    };\n    imports.wbg.__wbg_instanceof_Uint8Array_971eeda69eb75003 = function(arg0) {\n        let result;\n        try {\n            result = getObject(arg0) instanceof Uint8Array;\n        } catch {\n            result = false;\n        }\n        const ret = result;\n        return ret;\n    };\n    imports.wbg.__wbg_instanceof_ArrayBuffer_e5e48f4762c5610b = function(arg0) {\n        let result;\n        try {\n            result = getObject(arg0) instanceof ArrayBuffer;\n        } catch {\n            result = false;\n        }\n        const ret = result;\n        return ret;\n    };\n    imports.wbg.__wbindgen_debug_string = function(arg0, arg1) {\n        const ret = debugString(getObject(arg1));\n        const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);\n        const len0 = WASM_VECTOR_LEN;\n        getInt32Memory0()[arg0 / 4 + 1] = len0;\n        getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n    };\n    imports.wbg.__wbindgen_throw = function(arg0, arg1) {\n        throw new Error(getStringFromWasm0(arg0, arg1));\n    };\n\n    return imports;\n}\n\nfunction initMemory(imports, maybe_memory) {\n\n}\n\nfunction finalizeInit(instance, module) {\n    wasm = instance.exports;\n    init.__wbindgen_wasm_module = module;\n    cachedFloat64Memory0 = new Float64Array();\n    cachedInt32Memory0 = new Int32Array();\n    cachedUint8Memory0 = new Uint8Array();\n\n\n    return wasm;\n}\n\nfunction initSync(module) {\n    const imports = getImports();\n\n    initMemory(imports);\n\n    if (!(module instanceof WebAssembly.Module)) {\n        module = new WebAssembly.Module(module);\n    }\n\n    const instance = new WebAssembly.Instance(module, imports);\n\n    return finalizeInit(instance, module);\n}\n\nasync function init(input) {\n    if (typeof input === 'undefined') {\n        input = new URL(/* asset import */ __webpack_require__(/*! libapproportionment_bg.wasm */ \"../pkg/libapproportionment_bg.wasm\"), __webpack_require__.b);\n    }\n    const imports = getImports();\n\n    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {\n        input = fetch(input);\n    }\n\n    initMemory(imports);\n\n    const { instance, module } = await load(await input, imports);\n\n    return finalizeInit(instance, module);\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);\n\n\n//# sourceURL=webpack://approportionment/../pkg/libapproportionment.js?");

/***/ }),

/***/ "./src/worker.ts":
/*!***********************!*\
  !*** ./src/worker.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var libapproportionment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! libapproportionment */ \"../pkg/libapproportionment.js\");\n\nfunction main(evt) {\n    const parties = evt.data.parties;\n    const method = evt.data.method;\n    const n_seats = evt.data.n_seats;\n    const n_voters = evt.data.n_voters;\n    (0,libapproportionment__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(() => {\n        const parties_with_name = parties.map(({ x, y, color: _ }) => ({ x, y }));\n        let r = null;\n        try {\n            r = (0,libapproportionment__WEBPACK_IMPORTED_MODULE_0__.run)(method, n_seats, n_voters, parties_with_name);\n        }\n        catch (e) {\n            // TODO\n            console.log(e);\n        }\n        if (!r) {\n            // TODO\n            return;\n        }\n        self.postMessage({ answer: r });\n    });\n}\nself.onmessage = main;\n\n\n//# sourceURL=webpack://approportionment/./src/worker.ts?");

/***/ }),

/***/ "../pkg/libapproportionment_bg.wasm":
/*!******************************************!*\
  !*** ../pkg/libapproportionment_bg.wasm ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"92b5a02aa55249f005a1.wasm\";\n\n//# sourceURL=webpack://approportionment/../pkg/libapproportionment_bg.wasm?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/importScripts chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = self.location + "";
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "already loaded"
/******/ 		var installedChunks = {
/******/ 			"src_worker_ts": 1
/******/ 		};
/******/ 		
/******/ 		// no chunk install function needed
/******/ 		// no chunk loading
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/worker.ts");
/******/ 	
/******/ })()
;