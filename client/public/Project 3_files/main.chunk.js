(this["webpackJsonpproject-3-react-web"] = this["webpackJsonpproject-3-react-web"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);



/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Main_Main_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Main/Main.jsx */ "./src/components/Main/Main.jsx");
var _jsxFileName = "/Users/andrewcabrera/Desktop/vincentRedo/project-3-react-web/client/src/App.js";
 // styling

 // components

 // launch main web component

class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    // Call our fetch function below once the component mounts
    // this.callBackendAPI()
    //   .then(res => this.setState({ data: res.express }))
    //   .catch(err => console.log(err));
    console.log('app componentDidMount - connect backend');
  } // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  // callBackendAPI = async () => {
  //   const response = await fetch('/');
  //   const body = await response.json();
  //   if (response.status !== 200) {
  //     throw Error(body.message)
  //   }
  //   return body;
  // };


  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Main_Main_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      id: "main",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/BusinessPortal/AddBusiness/AddBusinessForm/AddBusinessForm.jsx":
/*!***************************************************************************************!*\
  !*** ./src/components/BusinessPortal/AddBusiness/AddBusinessForm/AddBusinessForm.jsx ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Radio */ "./node_modules/@material-ui/core/esm/Radio/index.js");
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ "./node_modules/@material-ui/core/esm/RadioGroup/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/FormLabel */ "./node_modules/@material-ui/core/esm/FormLabel/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
var _jsxFileName = "/Users/andrewcabrera/Desktop/vincentRedo/project-3-react-web/client/src/components/BusinessPortal/AddBusiness/AddBusinessForm/AddBusinessForm.jsx";
 //form style imports 

 //page style imports 









 //making styles import 





 //styles object 

const styles = {
  outlined: {
    backgroundColor: 'red',
    color: 'red'
  }
};
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["makeStyles"])(theme => ({
  activeButton: {
    backgroundColor: '#aeb8b1',
    outlined: {
      backgroundColor: 'red'
    }
  },
  disabledButton: {
    backgroundColor: "#c4ccc6"
  }
})); //form component 

const AddBusinessForm = props => {
  const classes = useStyles(); //deconstructing props to use in form 

  const _props$values = props.values,
        businessName = _props$values.businessName,
        ownerName = _props$values.ownerName,
        sellersPermit = _props$values.sellersPermit,
        abcNumber = _props$values.abcNumber,
        businessEmail = _props$values.businessEmail,
        businessPhone = _props$values.businessPhone,
        businessAddr1 = _props$values.businessAddr1,
        businessCity = _props$values.businessCity,
        businessState = _props$values.businessState,
        businessZip = _props$values.businessZip,
        errors = props.errors,
        touched = props.touched,
        handleChange = props.handleChange,
        isValid = props.isValid,
        setFieldTouched = props.setFieldTouched,
        handleSubmit = props.handleSubmit; //handles input change to set values to match input 

  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    container: true,
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    md: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "business-Name",
    name: "businessName",
    required: true,
    error: touched.businessName && Boolean(errors.businessName),
    label: "Business Name",
    value: businessName,
    onChange: change.bind(null, "businessName"),
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    md: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "owner-Name",
    name: "ownerName",
    label: "Owner",
    required: true,
    id: "name",
    helperText: touched.ownerName ? errors.ownerName : "",
    error: touched.ownerName && Boolean(errors.ownerName),
    value: ownerName,
    onChange: change.bind(null, "ownerName"),
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    md: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "sellers-permit",
    name: "sellersPermit",
    label: "Sellers Permit",
    required: true,
    helperText: touched.sellersPermit ? errors.sellersPermit : "",
    error: touched.sellersPermit && Boolean(errors.sellersPermit),
    value: sellersPermit,
    onChange: change.bind(null, "sellersPermit"),
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    md: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "abc-number",
    name: "abcNumber",
    label: "ABC Number",
    required: true,
    helperText: touched.abcNumber ? errors.abcNumber : "",
    error: touched.abcNumber && Boolean(errors.abcNumber),
    value: abcNumber,
    onChange: change.bind(null, "abcNumber"),
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    md: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "business-email",
    name: "businessEmail",
    label: "Email",
    required: true,
    helperText: touched.businessEmail ? errors.businessEmail : "",
    error: touched.businessEmail && Boolean(errors.businessEmail),
    value: businessEmail,
    onChange: change.bind(null, "businessEmail"),
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    md: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "business-phone",
    name: "businessPhone",
    type: "number",
    label: "Phone",
    required: true,
    helperText: touched.businessPhone ? errors.businessPhone : "",
    error: touched.businessPhone && Boolean(errors.businessPhone),
    value: businessPhone,
    onChange: change.bind(null, "businessPhone"),
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    md: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "business-addr1",
    name: "businessAddr1",
    label: "Address",
    required: true,
    helperText: touched.businessAddr1 ? errors.businessAddr1 : "",
    error: touched.businessAddr1 && Boolean(errors.businessAddr1),
    value: businessAddr1,
    onChange: change.bind(null, "businessAddr1"),
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    md: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "business-city",
    name: "businessCity",
    label: "City",
    required: true,
    helperText: touched.businessCity ? errors.businessCity : "",
    error: touched.businessCity && Boolean(errors.businessCity),
    value: businessCity,
    onChange: change.bind(null, "businessCity"),
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    md: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "business-state",
    name: "businessState",
    label: "State",
    required: true,
    helperText: touched.businessState ? errors.businessState : "",
    error: touched.businessState && Boolean(errors.businessState),
    value: businessState,
    onChange: change.bind(null, "businessState"),
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    md: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "business-zip",
    name: "businessZip",
    label: "Zip Code",
    type: "number",
    required: true,
    helperText: touched.businessZip ? errors.businessZip : "",
    error: touched.businessZip && Boolean(errors.businessZip),
    value: businessZip,
    onChange: change.bind(null, "businessZip"),
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 12,
    alignItems: "center",
    justify: "center",
    direction: "row",
    container: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    fullWidth: true,
    disabled: !isValid,
    id: "submit-button",
    type: "submit",
    display: "flex",
    className: !isValid ? classes.disabledButton : classes.activeButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: undefined
  }, "Submit")))));
};

/* harmony default export */ __webpack_exports__["default"] = (AddBusinessForm);

/***/ }),

/***/ "./src/components/BusinessPortal/AddBusiness/AddBusinessPage/AddBusiness.jsx":
/*!***********************************************************************************!*\
  !*** ./src/components/BusinessPortal/AddBusiness/AddBusinessPage/AddBusiness.jsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "../node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AddBusinessForm_AddBusinessForm_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AddBusinessForm/AddBusinessForm.jsx */ "./src/components/BusinessPortal/AddBusiness/AddBusinessForm/AddBusinessForm.jsx");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yup */ "../node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Icon */ "./node_modules/@material-ui/core/esm/Icon/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/andrewcabrera/Desktop/vincentRedo/project-3-react-web/client/src/components/BusinessPortal/AddBusiness/AddBusinessPage/AddBusiness.jsx";








 //styling 

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "".concat(theme.spacing.unit * 5, "px ").concat(theme.spacing.unit * 5, "px ").concat(theme.spacing.unit * 5, "px")
  },
  container: {
    maxWidth: "200px"
  }
}); //uses Yup to validate submission object 


const validationSchema = yup__WEBPACK_IMPORTED_MODULE_5__["object"]({
  businessName: yup__WEBPACK_IMPORTED_MODULE_5__["string"]("Enter a name").required("Name is required"),
  ownerName: yup__WEBPACK_IMPORTED_MODULE_5__["string"]("Enter your name").required('Name is required'),
  sellersPermit: yup__WEBPACK_IMPORTED_MODULE_5__["string"]("Enter your Sellers Permit Number").required("Sellers permit number is required"),
  abcNumber: yup__WEBPACK_IMPORTED_MODULE_5__["string"]("Enter your ABC number").required("ABC Number is required"),
  businessEmail: yup__WEBPACK_IMPORTED_MODULE_5__["string"]("Enter your email").email("Enter a valid email").required("Email is required"),
  businessPhone: yup__WEBPACK_IMPORTED_MODULE_5__["string"]("Phone Number").required("Phone number is required").min(9, "Phone number must be at least 9 digits"),
  businessAddr1: yup__WEBPACK_IMPORTED_MODULE_5__["string"]("Address").required("Address is required"),
  businessCity: yup__WEBPACK_IMPORTED_MODULE_5__["string"]("City").required("City is required"),
  businessState: yup__WEBPACK_IMPORTED_MODULE_5__["string"]("State").required("State is required"),
  businessZip: yup__WEBPACK_IMPORTED_MODULE_5__["string"]('Zip Code').required('Zip is required').min(5, "Must be at least 5 digits")
}); //entire form component 

class AddBusinessPage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.submitValues = ({
      businessName,
      ownerName,
      sellersPermit,
      abcNumber,
      businessEmail,
      businessPhone,
      businessAddr1,
      businessCity,
      businessState,
      businessZip
    }) => {
      console.log({
        businessName,
        ownerName,
        sellersPermit,
        abcNumber,
        businessEmail,
        businessPhone,
        businessAddr1,
        businessCity,
        businessState,
        businessZip
      });
      let pendingBusiness = {
        businessName,
        ownerName,
        sellersPermit,
        abcNumber,
        businessEmail,
        businessPhone,
        businessAddr1,
        businessCity,
        businessState,
        businessZip
      };
      let user = this.props.user;
      pendingBusiness.user_id = user[0].id;
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post('http://localhost:5000/api/addBusiness', pendingBusiness).then(result => {
        console.log(result);
      }).catch(err => console.log(err));
    };

    this.state = {};
  }

  render() {
    const classes = this.props;
    const values = {
      businessName: "",
      ownerName: "",
      sellersPermit: "",
      abcNumber: "",
      businessEmail: "",
      businessPhone: "",
      businessAddr1: "",
      businessCity: "",
      businessState: "",
      businessZip: ""
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.container,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__["default"], {
      elevation: 1,
      className: classes.paper,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: this.props.closeForm,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
      render: props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddBusinessForm_AddBusinessForm_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      })),
      initialValues: values,
      validationSchema: validationSchema,
      onSubmit: this.submitValues,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_2___default()(styles)(AddBusinessPage));

/***/ }),

/***/ "./src/components/BusinessPortal/BusinessTable/BusinessTable.js":
/*!**********************************************************************!*\
  !*** ./src/components/BusinessPortal/BusinessTable/BusinessTable.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andrewcabrera_Desktop_vincentRedo_project_3_react_web_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-table */ "../node_modules/material-table/dist/index.js");
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/andrewcabrera/Desktop/vincentRedo/project-3-react-web/client/src/components/BusinessPortal/BusinessTable/BusinessTable.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_Users_andrewcabrera_Desktop_vincentRedo_project_3_react_web_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





class MaterialTableDemo extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      columns: [{
        title: "Name",
        field: "name"
      }, {
        title: "Descripton",
        field: "description"
      }, {
        title: "Quantity",
        field: "quantity",
        type: "numeric"
      }],
      data: [],
      businessId: ""
    };
  }

  componentDidMount() {
    let url = "http://localhost:5000/api/promotion/all/business/" + this.props.businessId;
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url).then(response => {
      this.setState({
        data: response.data,
        businessId: this.props.businessId
      });
    }).catch(err => console.log(err));
  }

  componentDidUpdate() {
    if (this.props.businessId !== this.state.businessId) {
      let url = "http://localhost:5000/api/promotion/all/business/" + this.props.businessId;
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url).then(response => {
        this.setState({
          data: response.data,
          businessId: this.props.businessId
        });
      }).catch(err => console.log(err));
    }
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(material_table__WEBPACK_IMPORTED_MODULE_2___default.a, {
      style: {
        marginTop: "100px"
      },
      title: "Promotions",
      columns: this.state.columns,
      data: this.state.data,
      editable: {
        onRowAdd: newData => new Promise(resolve => {
          setTimeout(() => {
            resolve();
            const data = [...this.state.data];
            data.push(newData);
            this.setState(_objectSpread({}, this.state, {
              data
            })); //adds new item to the DB

            let url = "http://localhost:5000/api/promotion/add";
            axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(url, {
              business_id: this.props.businessId,
              promotion_name: newData.name,
              qtypeople: newData.quantity,
              description: newData.description
            }).then(function (res) {
              console.log(res);
            }).catch(err => {
              if (err) throw err;
            });
          }, 600);
        }),
        onRowUpdate: (newData, oldData) => new Promise(resolve => {
          setTimeout(() => {
            resolve();
            const data = [...this.state.data];
            data[data.indexOf(oldData)] = newData;
            this.setState(_objectSpread({}, this.state, {
              data
            }));
            let url = "http://localhost:3000/api/promotion/edit";
            axios__WEBPACK_IMPORTED_MODULE_3___default.a.put(url, newData).then(function (res) {
              console.log(res);
            }).catch(function (err) {
              if (err) throw err;
            });
          }, 600);
        }),
        onRowDelete: oldData => new Promise(resolve => {
          setTimeout(() => {
            resolve();
            const data = [...this.state.data];
            data.splice(data.indexOf(oldData), 1);
            this.setState(_objectSpread({}, this.state, {
              data
            })); //deletes item from DB

            let url = "http://localhost:5000/api/promotion/delete/" + oldData.promotion_id;
            axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(url).then(res => {
              console.log("delete", res);
            }).catch(err => {
              if (err) throw err;
            });
          }, 600);
        })
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MaterialTableDemo);

/***/ }),

/***/ "./src/components/BusinessPortal/Dashboard/Dashboard.js":
/*!**************************************************************!*\
  !*** ./src/components/BusinessPortal/Dashboard/Dashboard.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dashboard; });
/* harmony import */ var _Users_andrewcabrera_Desktop_vincentRedo_project_3_react_web_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Footer/Footer */ "./src/components/Footer/Footer.js");
/* harmony import */ var _PersistentDrawer_PersistentDrawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../PersistentDrawer/PersistentDrawer */ "./src/components/BusinessPortal/PersistentDrawer/PersistentDrawer.js");
/* harmony import */ var _BusinessTable_BusinessTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../BusinessTable/BusinessTable */ "./src/components/BusinessPortal/BusinessTable/BusinessTable.js");

var _jsxFileName = "/Users/andrewcabrera/Desktop/vincentRedo/project-3-react-web/client/src/components/BusinessPortal/Dashboard/Dashboard.js";

 // material-ui




 // components




 // set styling

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({})); // render dashboard

function Dashboard(props) {
  const classes = useStyles();

  const _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(true),
        _React$useState2 = Object(_Users_andrewcabrera_Desktop_vincentRedo_project_3_react_web_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
        open = _React$useState2[0],
        setOpen = _React$useState2[1];

  const _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
        _React$useState4 = Object(_Users_andrewcabrera_Desktop_vincentRedo_project_3_react_web_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
        businessInformation = _React$useState4[0],
        setBusinessInformation = _React$useState4[1];

  const _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),
        _React$useState6 = Object(_Users_andrewcabrera_Desktop_vincentRedo_project_3_react_web_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
        currentBusiness = _React$useState6[0],
        setCurrentBusiness = _React$useState6[1];

  const _React$useState7 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
        _React$useState8 = Object(_Users_andrewcabrera_Desktop_vincentRedo_project_3_react_web_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState7, 2),
        hasBusiness = _React$useState8[0],
        setHasBusiness = _React$useState8[1]; //on mount, we get business User using an ID and update the state


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("http://localhost:5000/api/businessuser/" + props.user[0].id).then(function (res) {
      setBusinessInformation(res);
      setCurrentBusiness(res.data[0].id);
      setHasBusiness(true);
    });
  }, [open]);

  const currentBusinessChange = id => {
    console.log('setting');
    setCurrentBusiness(id);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), businessInformation ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PersistentDrawer_PersistentDrawer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    business: businessInformation,
    currentBusinessChange: currentBusinessChange,
    userName: props.user[0].name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }) : console.log("Drawer not mounted"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: classes.content,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.content, {
      [classes.contentShift]: open
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6__["default"], {
    maxWidth: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, hasBusiness ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BusinessTable_BusinessTable__WEBPACK_IMPORTED_MODULE_9__["default"], {
    businessId: currentBusiness,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }) : console.log('not mounted')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Footer_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })));
}

/***/ }),

/***/ "./src/components/BusinessPortal/PersistentDrawer/PersistentDrawer.js":
/*!****************************************************************************!*\
  !*** ./src/components/BusinessPortal/PersistentDrawer/PersistentDrawer.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PersistentDrawerLeft; });
/* harmony import */ var _Users_andrewcabrera_Desktop_vincentRedo_project_3_react_web_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_andrewcabrera_Desktop_vincentRedo_project_3_react_web_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "./node_modules/@material-ui/icons/ChevronLeft.js");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/ChevronRight */ "./node_modules/@material-ui/icons/ChevronRight.js");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_icons_LocalBar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/LocalBar */ "./node_modules/@material-ui/icons/LocalBar.js");
/* harmony import */ var _material_ui_icons_LocalBar__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocalBar__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");


var _jsxFileName = "/Users/andrewcabrera/Desktop/vincentRedo/project-3-react-web/client/src/components/BusinessPortal/PersistentDrawer/PersistentDrawer.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_Users_andrewcabrera_Desktop_vincentRedo_project_3_react_web_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




















const drawerWidth = 240;
/**
 * This function will retreive all the stores a business has
 * to render them in the sideBar
 */

const getAllStoreFromBusiness = () => {};

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  root: {
    display: "flex",
    marginBottom: "50px"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: "calc(100% - ".concat(drawerWidth, "px)"),
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: _objectSpread({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1)
  }, theme.mixins.toolbar, {
    justifyContent: "flex-end"
  }),
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  toolBar: {
    width: '100%'
  }
}));
function PersistentDrawerLeft(props) {
  const classes = useStyles();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["useTheme"])();

  const _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
        _React$useState2 = Object(_Users_andrewcabrera_Desktop_vincentRedo_project_3_react_web_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
        open = _React$useState2[0],
        setOpen = _React$useState2[1];

  let data = props.business.data.map(item => {
    return item.business_name;
  });

  const _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(data[0]),
        _React$useState4 = Object(_Users_andrewcabrera_Desktop_vincentRedo_project_3_react_web_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
        title = _React$useState4[0],
        setTitle = _React$useState4[1];

  let dataIDs = props.business.data.map(item => {
    return item.id;
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleListClick = e => {
    const location = e.currentTarget.dataset.tag;
    props.currentBusinessChange(e.currentTarget.dataset.id);
    setTitle(location);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    position: "fixed",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.appBar, {
      [classes.appBarShift]: open
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_20__["default"], {
    container: true,
    justify: "space-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.toolBar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_20__["default"], {
    item: true,
    md: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
    color: "inherit",
    "aria-label": "open drawer",
    onClick: handleDrawerOpen,
    edge: "start",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.menuButton, open && classes.hide),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_20__["default"], {
    justify: "center",
    item: true,
    md: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "h6",
    noWrap: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, title)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_20__["default"], {
    item: true,
    md: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, " ", props.userName))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.drawer,
    variant: "persistent",
    anchor: "left",
    open: open,
    classes: {
      paper: classes.drawerPaper
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.drawerHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
    onClick: handleDrawerClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, theme.direction === "ltr" ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, data.map((text, index) => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
    button: true,
    type: "button",
    "data-tag": text,
    "data-id": dataIDs[index],
    onClick: handleListClick,
    key: text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_LocalBar__WEBPACK_IMPORTED_MODULE_19___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_18__["default"], {
    primary: text,
    business: text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }))))));
}

/***/ }),

/***/ "./src/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
var _jsxFileName = "/Users/andrewcabrera/Desktop/vincentRedo/project-3-react-web/client/src/components/Footer/Footer.js";



function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "body2",
    color: "textSecondary",
    align: "center",
    style: {
      marginTop: "25px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Copyright © ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    color: "inherit",
    href: "https://material-ui.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Dat Bomb Beer App for BzNz"), " ", new Date().getFullYear(), ".");
}

/***/ }),

/***/ "./src/components/Main/Main.jsx":
/*!**************************************!*\
  !*** ./src/components/Main/Main.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Splash_Splash_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Splash/Splash.jsx */ "./src/components/Splash/Splash.jsx");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _BusinessPortal_Dashboard_Dashboard_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../BusinessPortal/Dashboard/Dashboard.js */ "./src/components/BusinessPortal/Dashboard/Dashboard.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _BusinessPortal_AddBusiness_AddBusinessForm_AddBusinessForm_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../BusinessPortal/AddBusiness/AddBusinessForm/AddBusinessForm.jsx */ "./src/components/BusinessPortal/AddBusiness/AddBusinessForm/AddBusinessForm.jsx");
/* harmony import */ var _BusinessPortal_AddBusiness_AddBusinessPage_AddBusiness_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../BusinessPortal/AddBusiness/AddBusinessPage/AddBusiness.jsx */ "./src/components/BusinessPortal/AddBusiness/AddBusinessPage/AddBusiness.jsx");
var _jsxFileName = "/Users/andrewcabrera/Desktop/vincentRedo/project-3-react-web/client/src/components/Main/Main.jsx";








const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createMuiTheme"])({
  palette: {
    type: 'light' // 'light', 'dark', manualColor

  }
}); // render web application

class Main extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      //user info 
      user: {},
      error: null,
      authenticated: false
    };
  }

  //   because we are using cookies on mount it will check for authenticated users 
  componentDidMount() {
    //hits auth/login/success on node server 
    fetch("http://localhost:5000/auth/login/success", {
      method: "GET",
      credentials: "include",
      //cors headers
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      }
    }).then(response => {
      //if success return the response || user info 
      if (response.status === 200) return response.json();
      throw new Error("failed to authenticate user");
    }).then(responseJson => {
      //set authenticated to true and make the user obejct = the authenticated in user 
      this.setState({
        authenticated: true,
        user: responseJson.user
      });
    }).catch(error => {
      //if authentication fails 
      this.setState({
        authenticated: false,
        error: "Failed to authenticate user"
      });
    });
  }

  render() {
    const authenticated = this.state.authenticated;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
      theme: theme,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, this.state.authenticated && this.state.user[0].user_type === 'businessuser' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BusinessPortal_Dashboard_Dashboard_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      user: this.state.user,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Splash_Splash_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      user: this.state.user,
      authenticated: this.state.authenticated,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    })));
  }

}

Main.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
    image: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
    google_id: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
    user_type: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
    id: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number
  })
};
/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./src/components/Splash/MobileApp/MobileApp.jsx":
/*!*******************************************************!*\
  !*** ./src/components/Splash/MobileApp/MobileApp.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MobileApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
var _jsxFileName = "/Users/andrewcabrera/Desktop/vincentRedo/project-3-react-web/client/src/components/Splash/MobileApp/MobileApp.jsx";



const handleClicks = () => {
  console.log('mobileapp');
};

function MobileApp() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "submit",
    fullWidth: true,
    variant: "outline",
    color: "inherit",
    onClick: handleClicks,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Get the App for iOS and Android!");
}

/***/ }),

/***/ "./src/components/Splash/Splash.jsx":
/*!******************************************!*\
  !*** ./src/components/Splash/Splash.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_LocalBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/LocalBar */ "./node_modules/@material-ui/icons/LocalBar.js");
/* harmony import */ var _material_ui_icons_LocalBar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocalBar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Footer/Footer */ "./src/components/Footer/Footer.js");
/* harmony import */ var _WebSignIn_BusinessSignIn_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./WebSignIn/BusinessSignIn.jsx */ "./src/components/Splash/WebSignIn/BusinessSignIn.jsx");
/* harmony import */ var _MobileApp_MobileApp_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./MobileApp/MobileApp.jsx */ "./src/components/Splash/MobileApp/MobileApp.jsx");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _BusinessPortal_AddBusiness_AddBusinessPage_AddBusiness__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../BusinessPortal/AddBusiness/AddBusinessPage/AddBusiness */ "./src/components/BusinessPortal/AddBusiness/AddBusinessPage/AddBusiness.jsx");
var _jsxFileName = "/Users/andrewcabrera/Desktop/vincentRedo/project-3-react-web/client/src/components/Splash/Splash.jsx";
 // reset css material-ui


 // material-ui








 // components




 // styling; export to css

const styles = theme => ({
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%',
    // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}); // render sign in page


class Splash extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.claimBusinessClick = () => {
      this.setState({
        claimBusiness: true
      });
    };

    this.closeForm = () => {
      this.setState({
        claimBusiness: false
      });
    };

    this.state = {
      claimBusiness: false
    };
  }

  render(props) {
    const classes = this.props.classes;
    let showForm = this.state.claimBusiness;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
      container: true,
      component: "main",
      className: classes.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
      item: true,
      xs: false,
      sm: 4,
      md: 7,
      className: classes.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
      item: true,
      xs: 12,
      sm: 8,
      md: 5,
      component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__["default"],
      elevation: 6,
      square: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.paper,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.avatar,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_LocalBar__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      component: "h1",
      variant: "h5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, "Dat Beer App"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WebSignIn_BusinessSignIn_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], {
      user: this.props.user,
      handleClaimClick: this.claimBusinessClick,
      authenticated: this.props.authenticated,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }), showForm ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BusinessPortal_AddBusiness_AddBusinessPage_AddBusiness__WEBPACK_IMPORTED_MODULE_14__["default"], {
      user: this.props.user,
      closeForm: this.closeForm,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, "or"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MobileApp_MobileApp_jsx__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
      mt: 5,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_13___default()(styles)(Splash));

/***/ }),

/***/ "./src/components/Splash/WebSignIn/BusinessSignIn.jsx":
/*!************************************************************!*\
  !*** ./src/components/Splash/WebSignIn/BusinessSignIn.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BusinessSignIn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BusinessPortal_AddBusiness_AddBusinessPage_AddBusiness_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../BusinessPortal/AddBusiness/AddBusinessPage/AddBusiness.jsx */ "./src/components/BusinessPortal/AddBusiness/AddBusinessPage/AddBusiness.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _BusinessPortal_Dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../BusinessPortal/Dashboard/Dashboard */ "./src/components/BusinessPortal/Dashboard/Dashboard.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
var _jsxFileName = "/Users/andrewcabrera/Desktop/vincentRedo/project-3-react-web/client/src/components/Splash/WebSignIn/BusinessSignIn.jsx";




 // material-ui


 // styling

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(theme => ({
  btnSpacing: {
    margin: theme.spacing(3, 0, 2)
  }
})); // events

const handleLogInClicks = () => {
  console.log('login'); // route to auth

  window.open("http://localhost:5000/auth/google", "_self");
};

const handleDashboardClicks = () => {
  console.log('dashboard'); // route to auth

  window.open("http://localhost:5000/auth/google", "_self");
}; // render components


function BusinessSignIn(props) {
  const classes = useStyles();

  if (props.authenticated && props.user[0].user_type === 'businessuser') {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["BrowserRouter"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      type: "submit",
      fullWidth: true,
      variant: "outlined",
      color: "secondary",
      className: classes.btnSpacing,
      onClick: () => this.handleDashboardClick(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "/dashboard",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "Business Dashboard")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
      path: "/dashboard",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BusinessPortal_Dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }))));
  } else if (props.authenticated === false) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      type: "submit",
      fullWidth: true,
      variant: "outlined",
      color: "secondary",
      className: classes.btnSpacing,
      onClick: handleLogInClicks,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, "Login in with Google");
  } else if (props.authenticated) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      type: "submit",
      fullWidth: true,
      variant: "outlined",
      color: "secondary",
      className: classes.btnSpacing,
      onClick: () => props.handleClaimClick(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, "Claim a business");
  }
}

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
var _jsxFileName = "/Users/andrewcabrera/Desktop/vincentRedo/project-3-react-web/client/src/index.js";




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), document.getElementById('root'));

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/andrewcabrera/Desktop/vincentRedo/project-3-react-web/client/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/andrewcabrera/Desktop/vincentRedo/project-3-react-web/client/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map