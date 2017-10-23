"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomValidation = /** @class */ (function () {
    function CustomValidation() {
    }
    CustomValidation.MatchPassword = function (AC) {
        var password = AC.get('senha').value; // to get value in input tag
        var confirmPassword = AC.get('confirmaSenha').value; // to get value in input tag
        if (password != confirmPassword) {
            AC.get('confirmaSenha').setErrors({ MatchPassword: true });
        }
        else {
            return null;
        }
    };
    CustomValidation.EmailValidator = function (control) {
        var email = control.get('email').value;
        var pattern = "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/";
        var regex = new RegExp(pattern);
        if (!regex.test(email)) {
            control.get('email').setErrors({ EmailValidator: true });
        }
        return null;
    };
    return CustomValidation;
}());
exports.CustomValidation = CustomValidation;
//# sourceMappingURL=CustomValidator.js.map