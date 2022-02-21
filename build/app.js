"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var express_1 = __importDefault(require("express"));

var default_controller_1 = __importDefault(require("./controller/default.controller"));

var app = (0, express_1["default"])();
var port = process.env.PORT || 6000;
app.use(default_controller_1["default"]);
app.listen(port, function () {
  console.log('Express Server started at http://localhost:' + port);
});