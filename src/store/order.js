import {observable, computed, action} from 'mobx';

export default class{

    constructor(rootStore){
        this.rootStore = rootStore;
    }

    @observable formData = {
        name: {
            value: '',
            label: 'Name',
            validator: val => /^[aA-zZ,aA-яЯ]{2,}$/.test(val),
            errorText: 'Латинские символы, не менее двух',
            valid: null,
            specialClass:"col-6",
        },
        LastName: {
            value: '',
            label: 'LastName',
            validator: val => /^[aA-zZ,aA-яЯ ]{2,}$/.test(val),
            errorText: 'Латинские символы, не менее двух',
            valid: null,
            specialClass:"col-6", 
        },
        AddressLine: {
            value: '',
            label: 'AddressLine',
            validator: val => /^[aA-zZ,aA-яЯ,0-9 ]{2,}$/.test(val),
            errorText: 'Латинские символы, не менее двух',
            valid: null,
            specialClass:"col-12",
        },
        City: {
            value: '',
            label: 'City',
            validator: val => /^[aA-zZ,aA-яЯ ]{2,}$/.test(val),
            errorText: 'Латинские символы, не менее двух',
            valid: null,
            specialClass:"col-4",
        },
        PostCode: {
            value: '',
            label: 'PostCode',
            validator: val => /^.[0-9]{4,15}$/.test(val),
            errorText: 'wrong post <code> </code>',
            valid: null,
            specialClass:"col-4",
        },
        Country: {
            value: '',
            label: 'Country',
            validator: val => /^[aA-zZ ]{2,}$/.test(val),
            errorText: 'Латинские символы, не менее двух',
            valid: null,
            specialClass:"col-4",
        },
        email: {
            value: '',
            label: 'Email',
            validator: val => /^.+@.+$/.test(val),
            errorText: 'Собака',
            valid: null,
            specialClass:"col-6", 
        },
        phone: {
            value: '',
            label: 'Phone',
            validator: val => /^.+[0-9]{7,15}$/.test(val),
            errorText: 'От 7 до 15 цифр',
            valid: null,
            specialClass:"col-6", 
        },
        
    }

    @computed get formValid(){
        return Object.values(this.formData).every(field => field.valid);
    }

    @computed get data(){
        let data = {};
        
        for(let name in this.formData){
            data[name] = this.formData[name].value;
        }
        
        return data;
    }

    @action change(key, value){
        
        let field = this.formData[key];
        field.value = value;
        field.valid = field.validator(field.value);
    }
    // @observable formData = {
    //     name: {
    //         value: '',
    //         label: 'Name',
    //         validator: val => /^[aA-zZ ]{2,}$/.test(val),
    //         errorText: 'Латинские символы, не менее двух',
    //         valid: null,
    //         specialClass:"col-6",
    //     },
    //     LastName: {
    //         value: '',
    //         label: 'LastName',
    //         validator: val => /^[aA-zZ ]{2,}$/.test(val),
    //         errorText: 'Латинские символы, не менее двух',
    //         valid: null,
    //         specialClass:"col-6", 
    //     },
        
        
    // }

    // @computed get formValid(){
    //     return Object.values(this.formData).every(field => field.valid);
    // }

    // @computed get data(){
    //     let data = {};
        
    //     for(let name in this.formData){
    //         data[name] = this.formData[name].value;
    //     }
        
    //     return data;
    // }

    // @action change(key, value){
        
    //     let field = this.formData[key];
    //     field.value = value;
    //     field.valid = field.validator(field.value);
    // }
}











