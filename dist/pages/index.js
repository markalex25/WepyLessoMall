'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
    _inherits(Index, _wepy$page);

    function Index() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Index);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.components = {}, _this.mixins = [], _this.data = {}, _this.computed = {}, _this.watch = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }
    // 配置

    // 组件

    // 单元测试

    // 数据

    // 计算属性

    // 监听属性


    _createClass(Index, [{
        key: 'onLoad',

        //// 生命周期
        value: function onLoad(options) {}
    }, {
        key: 'onReady',
        value: function onReady() {}
    }, {
        key: 'onShow',
        value: function onShow() {}
    }, {
        key: 'onHide',
        value: function onHide() {}
    }, {
        key: 'onUnload',
        value: function onUnload() {}
    }, {
        key: 'onPullDownRefresh',

        //// 下拉上推
        value: function onPullDownRefresh() {}
    }, {
        key: 'onReachBottom',
        value: function onReachBottom() {}
    }, {
        key: 'onPageScroll',
        value: function onPageScroll() {}
    }, {
        key: 'onShareAppMessage',

        //// 分享
        value: function onShareAppMessage() {}
        // 页面响应事件

        // 组件之间的事件传递

    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwiY29tcG9uZW50cyIsIm1peGlucyIsImRhdGEiLCJjb21wdXRlZCIsIndhdGNoIiwibWV0aG9kcyIsImV2ZW50cyIsIm9wdGlvbnMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFFakJDLE0sR0FBUyxFLFFBRVRDLFUsR0FBYSxFLFFBRWJDLE0sR0FBUyxFLFFBRVRDLEksR0FBTyxFLFFBSVBDLFEsR0FBVyxFLFFBRVhDLEssR0FBUSxFLFFBY1JDLE8sR0FBVSxFLFFBRVZDLE0sR0FBUyxFOztBQTdCVDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFJQTs7QUFFQTs7Ozs7O0FBRUE7K0JBQ09DLE8sRUFBUyxDQUFHOzs7a0NBQ1QsQ0FBRzs7O2lDQUNKLENBQUc7OztpQ0FDSCxDQUFHOzs7bUNBQ0QsQ0FBRzs7OztBQUNkOzRDQUNvQixDQUFHOzs7d0NBQ1AsQ0FBRzs7O3VDQUNKLENBQUc7Ozs7QUFDbEI7NENBQ29CLENBQUc7QUFDdkI7O0FBRUE7Ozs7O0VBN0IrQixlQUFLQyxJOztrQkFBbkJWLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIC8vIOmFjee9rlxyXG4gICAgY29uZmlnID0ge307XHJcbiAgICAvLyDnu4Tku7ZcclxuICAgIGNvbXBvbmVudHMgPSB7fTtcclxuICAgIC8vIOWNleWFg+a1i+ivlVxyXG4gICAgbWl4aW5zID0gW107XHJcbiAgICAvLyDmlbDmja5cclxuICAgIGRhdGEgPSB7XHJcblxyXG4gICAgfVxyXG4gICAgLy8g6K6h566X5bGe5oCnXHJcbiAgICBjb21wdXRlZCA9IHt9O1xyXG4gICAgLy8g55uR5ZCs5bGe5oCnXHJcbiAgICB3YXRjaCA9IHt9O1xyXG4gICAgLy8vLyDnlJ/lkb3lkajmnJ9cclxuICAgIG9uTG9hZChvcHRpb25zKSB7IH07XHJcbiAgICBvblJlYWR5KCkgeyB9O1xyXG4gICAgb25TaG93KCkgeyB9O1xyXG4gICAgb25IaWRlKCkgeyB9O1xyXG4gICAgb25VbmxvYWQoKSB7IH07XHJcbiAgICAvLy8vIOS4i+aLieS4iuaOqFxyXG4gICAgb25QdWxsRG93blJlZnJlc2goKSB7IH07XHJcbiAgICBvblJlYWNoQm90dG9tKCkgeyB9O1xyXG4gICAgb25QYWdlU2Nyb2xsKCkgeyB9O1xyXG4gICAgLy8vLyDliIbkuqtcclxuICAgIG9uU2hhcmVBcHBNZXNzYWdlKCkgeyB9O1xyXG4gICAgLy8g6aG16Z2i5ZON5bqU5LqL5Lu2XHJcbiAgICBtZXRob2RzID0ge307XHJcbiAgICAvLyDnu4Tku7bkuYvpl7TnmoTkuovku7bkvKDpgJJcclxuICAgIGV2ZW50cyA9IHt9O1xyXG59XHJcbiJdfQ==