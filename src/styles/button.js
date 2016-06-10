const csjs = require('csjs');

module.exports = csjs`
.button {
  cursor: pointer;
  margin: 0;
  width: auto;
  overflow: visible;
}

.button:hover {
  z-index: 2;
  border-color: #aeb1b5;
}

.button:active,
.button:focus {
  z-index: 3;
}

.button {
  -moz-appearance: none;
  -webkit-appearance: none;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  background: white;
  border: 1px solid #d3d6db;
  border-radius: 3px;
  color: #222324;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font-size: 14px;
  height: 32px;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  line-height: 24px;
  padding-left: 8px;
  padding-right: 8px;
  position: relative;
  vertical-align: top;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
  white-space: nowrap;
}

button:active,
.button:focus,
.button.is-active {
  border-color: #1fc8db;
  outline: none;
}

.button[disabled],
.button.is-disabled {
  background: #f5f7fa;
  border-color: #d3d6db;
  cursor: not-allowed;
  pointer-events: none;
}

.button[disabled]::-moz-placeholder,
.button.is-disabled::-moz-placeholder {
  color: rgba(34, 35, 36, 0.3);
}

.button[disabled]:-moz-placeholder,
.button.is-disabled:-moz-placeholder {
  color: rgba(34, 35, 36, 0.3);
}

.button strong {
  color: inherit;
}

.button small {
  display: block;
  font-size: 11px;
  line-height: 1;
  margin-top: 5px;
}

.button .icon:first-child,
.button .tag:first-child {
  margin-left: -2px;
  margin-right: 4px;
}

.button .icon:last-child,
.button .tag:last-child {
  margin-left: 4px;
  margin-right: -2px;
}

.button:hover, .button:focus, .button.is-active {
  color: #222324;
}

.button:active {
  box-shadow: inset 0 1px 2px rgba(17, 17, 17, 0.2);
}

.button.is-white {
  background: #fff;
  border-color: transparent;
  color: #111;
}

.button.is-white:hover, .button.is-white:focus, .button.is-white.is-active {
  background: #e6e6e6;
  border-color: transparent;
  color: #111;
}

.button.is-white:active {
  border-color: transparent;
}

.button.is-white.is-inverted {
  background: #111;
  color: #fff;
}

.button.is-white.is-inverted:hover {
  background: #040404;
}

.button.is-white.is-loading:after {
  border-color: transparent transparent #111 #111 !important;
}

.button.is-white.is-outlined {
  background: transparent;
  border-color: #fff;
  color: #fff;
}

.button.is-white.is-outlined:hover, .button.is-white.is-outlined:focus {
  background: #fff;
  border-color: #fff;
  color: #111;
}

.button.is-black {
  background: #111;
  border-color: transparent;
  color: #fff;
}

.button.is-black:hover, .button.is-black:focus, .button.is-black.is-active {
  background: black;
  border-color: transparent;
  color: #fff;
}

.button.is-black:active {
  border-color: transparent;
}

.button.is-black.is-inverted {
  background: #fff;
  color: #111;
}

.button.is-black.is-inverted:hover {
  background: #f2f2f2;
}

.button.is-black.is-loading:after {
  border-color: transparent transparent #fff #fff !important;
}

.button.is-black.is-outlined {
  background: transparent;
  border-color: #111;
  color: #111;
}

.button.is-black.is-outlined:hover, .button.is-black.is-outlined:focus {
  background: #111;
  border-color: #111;
  color: #fff;
}

.button.is-light {
  background: #f5f7fa;
  border-color: transparent;
  color: #69707a;
}

.button.is-light:hover, .button.is-light:focus, .button.is-light.is-active {
  background: #d3dce9;
  border-color: transparent;
  color: #69707a;
}

.button.is-light:active {
  border-color: transparent;
}

.button.is-light.is-inverted {
  background: #69707a;
  color: #f5f7fa;
}

.button.is-light.is-inverted:hover {
  background: #5d636c;
}

.button.is-light.is-loading:after {
  border-color: transparent transparent #69707a #69707a !important;
}

.button.is-light.is-outlined {
  background: transparent;
  border-color: #f5f7fa;
  color: #f5f7fa;
}

.button.is-light.is-outlined:hover, .button.is-light.is-outlined:focus {
  background: #f5f7fa;
  border-color: #f5f7fa;
  color: #69707a;
}

.button.is-dark {
  background: #69707a;
  border-color: transparent;
  color: #f5f7fa;
}

.button.is-dark:hover, .button.is-dark:focus, .button.is-dark.is-active {
  background: #51575f;
  border-color: transparent;
  color: #f5f7fa;
}

.button.is-dark:active {
  border-color: transparent;
}

.button.is-dark.is-inverted {
  background: #f5f7fa;
  color: #69707a;
}

.button.is-dark.is-inverted:hover {
  background: #e4e9f2;
}

.button.is-dark.is-loading:after {
  border-color: transparent transparent #f5f7fa #f5f7fa !important;
}

.button.is-dark.is-outlined {
  background: transparent;
  border-color: #69707a;
  color: #69707a;
}

.button.is-dark.is-outlined:hover, .button.is-dark.is-outlined:focus {
  background: #69707a;
  border-color: #69707a;
  color: #f5f7fa;
}

.button.is-primary {
  background: #1fc8db;
  border-color: transparent;
  color: white;
}

.button.is-primary:hover, .button.is-primary:focus, .button.is-primary.is-active {
  background: #199fae;
  border-color: transparent;
  color: white;
}

.button.is-primary:active {
  border-color: transparent;
}

.button.is-primary.is-inverted {
  background: white;
  color: #1fc8db;
}

.button.is-primary.is-inverted:hover {
  background: #f2f2f2;
}

.button.is-primary.is-loading:after {
  border-color: transparent transparent white white !important;
}

.button.is-primary.is-outlined {
  background: transparent;
  border-color: #1fc8db;
  color: #1fc8db;
}

.button.is-primary.is-outlined:hover, .button.is-primary.is-outlined:focus {
  background: #1fc8db;
  border-color: #1fc8db;
  color: white;
}

.button.is-info {
  background: #42afe3;
  border-color: transparent;
  color: white;
}

.button.is-info:hover, .button.is-info:focus, .button.is-info.is-active {
  background: #1f99d3;
  border-color: transparent;
  color: white;
}

.button.is-info:active {
  border-color: transparent;
}

.button.is-info.is-inverted {
  background: white;
  color: #42afe3;
}

.button.is-info.is-inverted:hover {
  background: #f2f2f2;
}

.button.is-info.is-loading:after {
  border-color: transparent transparent white white !important;
}

.button.is-info.is-outlined {
  background: transparent;
  border-color: #42afe3;
  color: #42afe3;
}

.button.is-info.is-outlined:hover, .button.is-info.is-outlined:focus {
  background: #42afe3;
  border-color: #42afe3;
  color: white;
}

.button.is-success {
  background: #97cd76;
  border-color: transparent;
  color: white;
}

.button.is-success:hover, .button.is-success:focus, .button.is-success.is-active {
  background: #7bbf51;
  border-color: transparent;
  color: white;
}

.button.is-success:active {
  border-color: transparent;
}

.button.is-success.is-inverted {
  background: white;
  color: #97cd76;
}

.button.is-success.is-inverted:hover {
  background: #f2f2f2;
}

.button.is-success.is-loading:after {
  border-color: transparent transparent white white !important;
}

.button.is-success.is-outlined {
  background: transparent;
  border-color: #97cd76;
  color: #97cd76;
}

.button.is-success.is-outlined:hover, .button.is-success.is-outlined:focus {
  background: #97cd76;
  border-color: #97cd76;
  color: white;
}

.button.is-warning {
  background: #fce473;
  border-color: transparent;
  color: rgba(17, 17, 17, 0.5);
}

.button.is-warning:hover, .button.is-warning:focus, .button.is-warning.is-active {
  background: #fbda41;
  border-color: transparent;
  color: rgba(17, 17, 17, 0.5);
}

.button.is-warning:active {
  border-color: transparent;
}

.button.is-warning.is-inverted {
  background: rgba(17, 17, 17, 0.5);
  color: #fce473;
}

.button.is-warning.is-inverted:hover {
  background: rgba(4, 4, 4, 0.5);
}

.button.is-warning.is-loading:after {
  border-color: transparent transparent rgba(17, 17, 17, 0.5) rgba(17, 17, 17, 0.5) !important;
}

.button.is-warning.is-outlined {
  background: transparent;
  border-color: #fce473;
  color: #fce473;
}

.button.is-warning.is-outlined:hover, .button.is-warning.is-outlined:focus {
  background: #fce473;
  border-color: #fce473;
  color: rgba(17, 17, 17, 0.5);
}

.button.is-danger {
  background: #ed6c63;
  border-color: transparent;
  color: white;
}

.button.is-danger:hover, .button.is-danger:focus, .button.is-danger.is-active {
  background: #e84135;
  border-color: transparent;
  color: white;
}

.button.is-danger:active {
  border-color: transparent;
}

.button.is-danger.is-inverted {
  background: white;
  color: #ed6c63;
}

.button.is-danger.is-inverted:hover {
  background: #f2f2f2;
}

.button.is-danger.is-loading:after {
  border-color: transparent transparent white white !important;
}

.button.is-danger.is-outlined {
  background: transparent;
  border-color: #ed6c63;
  color: #ed6c63;
}

.button.is-danger.is-outlined:hover, .button.is-danger.is-outlined:focus {
  background: #ed6c63;
  border-color: #ed6c63;
  color: white;
}

.button.is-link {
  background: transparent;
  border-color: transparent;
  color: #69707a;
  text-decoration: underline;
}

.button.is-link:hover, .button.is-link:focus {
  background: #d3d6db;
  color: #222324;
}

.button.is-small {
  border-radius: 2px;
  font-size: 11px;
  height: 24px;
  line-height: 16px;
  padding-left: 6px;
  padding-right: 6px;
}

.button.is-medium {
  font-size: 18px;
  height: 40px;
  padding-left: 14px;
  padding-right: 14px;
}

.button.is-large {
  font-size: 22px;
  height: 48px;
  padding-left: 20px;
  padding-right: 20px;
}

.button[disabled], .button.is-disabled {
  opacity: 0.5;
}

.button.is-fullwidth {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
}

.button.is-loading {
  color: transparent !important;
  pointer-events: none;
}

.button.is-loading:after {
  left: 50%;
  margin-left: -8px;
  margin-top: -8px;
  position: absolute;
  top: 50%;
  position: absolute !important;
}

.button.is-loading:after {
  -webkit-animation: spin-around 500ms infinite linear;
          animation: spin-around 500ms infinite linear;
  border: 2px solid #d3d6db;
  border-radius: 290486px;
  border-right-color: transparent;
  border-top-color: transparent;
  content: "";
  display: block;
  height: 16px;
  position: relative;
  width: 16px;
}

@-webkit-keyframes spin-around {
  from {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
            transform: rotate(359deg);
  }
}

@keyframes spin-around {
  from {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
            transform: rotate(359deg);
  }
}

.icon {
  display: inline-block;
  font-size: 21px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  vertical-align: top;
  width: 24px;
}

.icon .fa {
  font-size: inherit;
  line-height: inherit;
}

.icon.is-small {
  display: inline-block;
  font-size: 14px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  vertical-align: top;
  width: 16px;
}

.icon.is-medium {
  display: inline-block;
  font-size: 28px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  vertical-align: top;
  width: 32px;
}

.icon.is-large {
  display: inline-block;
  font-size: 42px;
  height: 48px;
  line-height: 48px;
  text-align: center;
  vertical-align: top;
  width: 48px;
}

`;
