var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function listaCategorias() {
    return __awaiter(this, void 0, void 0, function () {
        var response, produtos, html_1, purchase, err_1, purchase;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4, fetch('http://localhost:3000/produtos')];
                case 1:
                    response = _a.sent();
                    return [4, response.json()];
                case 2:
                    produtos = _a.sent();
                    html_1 = '';
                    produtos.forEach(function (item) {
                        html_1 +=
                            "<div class=\"purchase-item\">\n                        <div class=\"ms-5 mt-3\">\n                            <img class=\"imgs-purchase mb-4\" src=\"".concat(item.url ? item.url : 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Item_sem_imagem.svg/498px-Item_sem_imagem.svg.png', "\">\n                            <p>Nome: ").concat(item.nome, "<br>\n                            Pre\u00E7o: ").concat(item.preco, "</p>\n                            <button class=\"btn-purchase mt-3 mb-3 p-2\">Comprar</button>\n                        </div>\n                    </div>");
                    });
                    purchase = document.querySelector('.purchase');
                    if (purchase) {
                        purchase.innerHTML = html_1;
                    }
                    return [3, 4];
                case 3:
                    err_1 = _a.sent();
                    purchase = document.querySelector('.purchase');
                    if (purchase) {
                        purchase.innerHTML = 'Não foi possível recuperar os produtos.';
                    }
                    return [3, 4];
                case 4: return [2];
            }
        });
    });
}
listaCategorias();
