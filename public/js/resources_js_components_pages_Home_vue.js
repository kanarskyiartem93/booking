"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_Home_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Home.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Home.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Home",
  data: function data() {
    return {
      hotels: null,
      cities: null,
      cityId: null,
      capacity: null,
      maxGuests: 10
    };
  },
  computed: {
    changesOfFilter: function changesOfFilter() {
      // `.join()` because we don't care about the return value.
      return [this.cityId, this.capacity].join();
    }
  },
  mounted: function mounted() {
    this.getRandomHotels();
    this.getCities();
  },
  methods: {
    getRandomHotels: function getRandomHotels() {
      var _this = this;

      axios.get('/api/hotels/random').then(function (res) {
        _this.hotels = res.data.data;
      });
    },
    getCities: function getCities() {
      var _this2 = this;

      axios.get('/api/cities').then(function (res) {
        _this2.cities = res.data.data;
      });
    },
    prepareParams: function prepareParams() {
      return {
        params: {
          city_id: this.cityId,
          capacity: this.capacity
        }
      };
    }
  },
  watch: {
    changesOfFilter: function changesOfFilter() {
      var _this3 = this;

      axios.get('/api/hotels', this.prepareParams()).then(function (res) {
        _this3.hotels = res.data.data;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/pages/Home.vue":
/*!************************************************!*\
  !*** ./resources/js/components/pages/Home.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_a9aac016___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=a9aac016& */ "./resources/js/components/pages/Home.vue?vue&type=template&id=a9aac016&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/Home.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_a9aac016___WEBPACK_IMPORTED_MODULE_0__.render,
  _Home_vue_vue_type_template_id_a9aac016___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/Home.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/Home.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/pages/Home.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Home.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/Home.vue?vue&type=template&id=a9aac016&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/pages/Home.vue?vue&type=template&id=a9aac016& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_a9aac016___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_a9aac016___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_a9aac016___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=template&id=a9aac016& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Home.vue?vue&type=template&id=a9aac016&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Home.vue?vue&type=template&id=a9aac016&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Home.vue?vue&type=template&id=a9aac016& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "row flex-nowrap" }, [
        _c(
          "div",
          { staticClass: "col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark" },
          [
            _c(
              "div",
              {
                staticClass:
                  "d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100",
              },
              [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "ul",
                  {
                    staticClass:
                      "nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start",
                    attrs: { id: "menu" },
                  },
                  [
                    _c("li", [
                      _c("p", [_vm._v("Місто: ")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.cityId,
                              expression: "cityId",
                            },
                          ],
                          on: {
                            change: function ($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function (o) {
                                  return o.selected
                                })
                                .map(function (o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.cityId = $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            },
                          },
                        },
                        [
                          _c("option", { attrs: { disabled: "", value: "" } }, [
                            _vm._v("Please select one"),
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.cities, function (city) {
                            return _c(
                              "option",
                              { key: city.id, domProps: { value: city.id } },
                              [
                                _vm._v(
                                  _vm._s(city.name) +
                                    "\n                                "
                                ),
                              ]
                            )
                          }),
                        ],
                        2
                      ),
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "mt-3" }, [
                      _c("p", [_vm._v("Кількість гостів: ")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.capacity,
                              expression: "capacity",
                            },
                          ],
                          staticClass: "px-0 align-middle",
                          on: {
                            change: function ($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function (o) {
                                  return o.selected
                                })
                                .map(function (o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.capacity = $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            },
                          },
                        },
                        [
                          _c("option", { attrs: { disabled: "", value: "" } }, [
                            _vm._v("Please select one"),
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.maxGuests, function (index) {
                            return _c(
                              "option",
                              { domProps: { value: index } },
                              [_vm._v(_vm._s(index))]
                            )
                          }),
                        ],
                        2
                      ),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c("hr"),
              ]
            ),
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col" },
          _vm._l(_vm.hotels, function (hotel) {
            return _c("div", { staticClass: "card card-item mb-3" }, [
              _c("div", { staticClass: "row" }, [
                _vm._m(1, true),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-8" }, [
                  _c(
                    "div",
                    { staticClass: "card-body" },
                    [
                      _c("h5", { staticClass: "card-title" }, [
                        _vm._v(_vm._s(hotel.name)),
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "card-text" }, [
                        _vm._v(_vm._s(hotel.description)),
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "card-text" }, [
                        _c("b", [_vm._v(_vm._s(hotel.city))]),
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "card-text" }, [
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(_vm._s(hotel.address)),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass: "btn btn-info",
                          attrs: {
                            to: { name: "hotel", params: { id: hotel.id } },
                          },
                        },
                        [
                          _vm._v(
                            "More\n                                    information\n                                "
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ]),
              ]),
            ])
          }),
          0
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass:
          "d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none",
        attrs: { href: "/" },
      },
      [
        _c("span", { staticClass: "fs-5 d-none d-sm-inline" }, [
          _vm._v("Фільтри"),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c("img", {
        staticClass: "card-img",
        attrs: {
          src: "https://pix8.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg",
          alt: "...",
        },
      }),
    ])
  },
]
render._withStripped = true



/***/ })

}]);