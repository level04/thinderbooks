import {AbstractControl} from '@angular/forms';

export class CustomValidation {

    static MatchPassword(AC: AbstractControl) {
       let password = AC.get('senha').value; // to get value in input tag
       let confirmPassword = AC.get('confirmaSenha').value; // to get value in input tag
        if(password != confirmPassword) {
            AC.get('confirmaSenha').setErrors( {MatchPassword: true} )
        } else {
            return null
        }
    }

    static EmailValidator(control: AbstractControl) {
        let email = control.get('email').value;
        let pattern = "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/";
        var regex = new RegExp(pattern);

        if (!regex.test(email)) {
            control.get('email').setErrors( {EmailValidator: true} )
        }
        return null
    }
}