'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
    _inherits(_default, _wepy$app);

    function _default() {
        _classCallCheck(this, _default);

        var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

        _this.config = {
            pages: ['pages/index', 'pages/my'],
            window: {
                navigationBarTitleText: '联塑商城+',
                navigationBarTextStyle: 'white',
                navigationBarBackgroundColor: '#FF7300',
                backgroundColor: '#F0F0F2',
                backgroundTextStyle: 'dark',
                enablePullDownRefresh: false,
                disableScroll: false
            },
            tabBar: {
                color: '#AAAAAA',
                selectedColor: '#FF7300',
                backgroundColor: '#F8F8F8',
                list: [{
                    text: '首页',
                    pagePath: 'pages/index',
                    iconPath: 'image/wechat_off.png',
                    selectedIconPath: 'image/wechat_on.png'
                }, {
                    text: '我的',
                    pagePath: 'pages/my',
                    iconPath: 'image/wechat_off.png',
                    selectedIconPath: 'image/wechat_on.png'
                }]
            },
            networkTimeout: {
                'request': 10000,
                'downloadFile': 10000
            },
            debug: true
        };
        _this.globalData = {
            userInfo: null
        };

        _this.use('requestfix');
        return _this;
    }

    _createClass(_default, [{
        key: 'onLaunch',
        value: function onLaunch() {
            this.testAsync();
        }
    }, {
        key: 'sleep',
        value: function sleep(s) {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve('promise resolved');
                }, s * 1000);
            });
        }
    }, {
        key: 'testAsync',
        value: function () {
            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                var data;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.sleep(3);

                            case 2:
                                data = _context.sent;

                                console.log(data);

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function testAsync() {
                return _ref.apply(this, arguments);
            }

            return testAsync;
        }()
    }, {
        key: 'getUserInfo',
        value: function getUserInfo(cb) {
            var that = this;
            if (this.globalData.userInfo) {
                return this.globalData.userInfo;
            }
            _wepy2.default.getUserInfo({
                success: function success(res) {
                    that.globalData.userInfo = res.userInfo;
                    cb && cb(res.userInfo);
                }
            });
        }
    }]);

    return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, undefined));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJkaXNhYmxlU2Nyb2xsIiwidGFiQmFyIiwiY29sb3IiLCJzZWxlY3RlZENvbG9yIiwibGlzdCIsInRleHQiLCJwYWdlUGF0aCIsImljb25QYXRoIiwic2VsZWN0ZWRJY29uUGF0aCIsIm5ldHdvcmtUaW1lb3V0IiwiZGVidWciLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJ0ZXN0QXN5bmMiLCJzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0Iiwic2xlZXAiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNiIiwidGhhdCIsImdldFVzZXJJbmZvIiwic3VjY2VzcyIsInJlcyIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBMkNJLHdCQUFjO0FBQUE7O0FBQUE7O0FBQUEsY0F4Q2RBLE1Bd0NjLEdBeENMO0FBQ0xDLG1CQUFPLENBQ0gsYUFERyxFQUVILFVBRkcsQ0FERjtBQUtMQyxvQkFBUTtBQUNKQyx3Q0FBd0IsT0FEcEI7QUFFSkMsd0NBQXdCLE9BRnBCO0FBR0pDLDhDQUE4QixTQUgxQjtBQUlKQyxpQ0FBaUIsU0FKYjtBQUtKQyxxQ0FBcUIsTUFMakI7QUFNSkMsdUNBQXVCLEtBTm5CO0FBT0pDLCtCQUFlO0FBUFgsYUFMSDtBQWNMQyxvQkFBUTtBQUNKQyx1QkFBTyxTQURIO0FBRUpDLCtCQUFlLFNBRlg7QUFHSk4saUNBQWlCLFNBSGI7QUFJSk8sc0JBQU0sQ0FBQztBQUNIQywwQkFBTSxJQURIO0FBRUhDLDhCQUFVLGFBRlA7QUFHSEMsOEJBQVUsc0JBSFA7QUFJSEMsc0NBQWtCO0FBSmYsaUJBQUQsRUFNTjtBQUNJSCwwQkFBTSxJQURWO0FBRUlDLDhCQUFVLFVBRmQ7QUFHSUMsOEJBQVUsc0JBSGQ7QUFJSUMsc0NBQWtCO0FBSnRCLGlCQU5NO0FBSkYsYUFkSDtBQStCTEMsNEJBQWdCO0FBQ1osMkJBQVcsS0FEQztBQUVaLGdDQUFnQjtBQUZKLGFBL0JYO0FBbUNMQyxtQkFBTztBQW5DRixTQXdDSztBQUFBLGNBSGRDLFVBR2MsR0FIRDtBQUNUQyxzQkFBVTtBQURELFNBR0M7O0FBRVYsY0FBS0MsR0FBTCxDQUFTLFlBQVQ7QUFGVTtBQUdiOzs7O21DQUNVO0FBQ1AsaUJBQUtDLFNBQUw7QUFDSDs7OzhCQUNLQyxDLEVBQUc7QUFDTCxtQkFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDQywyQkFBVyxZQUFNO0FBQ2JGLDRCQUFRLGtCQUFSO0FBQ0gsaUJBRkQsRUFFR0YsSUFBSSxJQUZQO0FBR0gsYUFKTSxDQUFQO0FBS0g7Ozs7Ozs7Ozs7O3VDQUVzQixLQUFLSyxLQUFMLENBQVcsQ0FBWCxDOzs7QUFBYkMsb0M7O0FBQ05DLHdDQUFRQyxHQUFSLENBQVlGLElBQVo7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQ0FFUUcsRSxFQUFJO0FBQ1osZ0JBQU1DLE9BQU8sSUFBYjtBQUNBLGdCQUFJLEtBQUtkLFVBQUwsQ0FBZ0JDLFFBQXBCLEVBQThCO0FBQzFCLHVCQUFPLEtBQUtELFVBQUwsQ0FBZ0JDLFFBQXZCO0FBQ0g7QUFDRCwyQkFBS2MsV0FBTCxDQUFpQjtBQUNiQyx1QkFEYSxtQkFDTEMsR0FESyxFQUNBO0FBQ1RILHlCQUFLZCxVQUFMLENBQWdCQyxRQUFoQixHQUEyQmdCLElBQUloQixRQUEvQjtBQUNBWSwwQkFBTUEsR0FBR0ksSUFBSWhCLFFBQVAsQ0FBTjtBQUNIO0FBSlksYUFBakI7QUFNSDs7OztFQXRFd0IsZUFBS2lCLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICAgIHBhZ2VzOiBbXHJcbiAgICAgICAgICAgICdwYWdlcy9pbmRleCcsXHJcbiAgICAgICAgICAgICdwYWdlcy9teSdcclxuICAgICAgICBdLFxyXG4gICAgICAgIHdpbmRvdzoge1xyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6IGU5aGR5ZWG5Z+OKycsXHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjRkY3MzAwJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0YwRjBGMicsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdkYXJrJyxcclxuICAgICAgICAgICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiBmYWxzZSxcclxuICAgICAgICAgICAgZGlzYWJsZVNjcm9sbDogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRhYkJhcjoge1xyXG4gICAgICAgICAgICBjb2xvcjogJyNBQUFBQUEnLFxyXG4gICAgICAgICAgICBzZWxlY3RlZENvbG9yOiAnI0ZGNzMwMCcsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGOEY4RjgnLFxyXG4gICAgICAgICAgICBsaXN0OiBbe1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJ+mmlumhtScsXHJcbiAgICAgICAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL2luZGV4JyxcclxuICAgICAgICAgICAgICAgIGljb25QYXRoOiAnaW1hZ2Uvd2VjaGF0X29mZi5wbmcnLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2ltYWdlL3dlY2hhdF9vbi5wbmcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6ICfmiJHnmoQnLFxyXG4gICAgICAgICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9teScsXHJcbiAgICAgICAgICAgICAgICBpY29uUGF0aDogJ2ltYWdlL3dlY2hhdF9vZmYucG5nJyxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdpbWFnZS93ZWNoYXRfb24ucG5nJ1xyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbmV0d29ya1RpbWVvdXQ6IHtcclxuICAgICAgICAgICAgJ3JlcXVlc3QnOiAxMDAwMCxcclxuICAgICAgICAgICAgJ2Rvd25sb2FkRmlsZSc6IDEwMDAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZWJ1ZzogdHJ1ZVxyXG4gICAgfVxyXG4gICAgZ2xvYmFsRGF0YSA9IHtcclxuICAgICAgICB1c2VySW5mbzogbnVsbFxyXG4gICAgfVxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcclxuICAgIH1cclxuICAgIG9uTGF1bmNoKCkge1xyXG4gICAgICAgIHRoaXMudGVzdEFzeW5jKClcclxuICAgIH1cclxuICAgIHNsZWVwKHMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoJ3Byb21pc2UgcmVzb2x2ZWQnKVxyXG4gICAgICAgICAgICB9LCBzICogMTAwMClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgYXN5bmMgdGVzdEFzeW5jKCkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnNsZWVwKDMpXHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIH1cclxuICAgIGdldFVzZXJJbmZvKGNiKSB7XHJcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXNcclxuICAgICAgICBpZiAodGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdsb2JhbERhdGEudXNlckluZm9cclxuICAgICAgICB9XHJcbiAgICAgICAgd2VweS5nZXRVc2VySW5mbyh7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGF0Lmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cclxuICAgICAgICAgICAgICAgIGNiICYmIGNiKHJlcy51c2VySW5mbylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuIl19