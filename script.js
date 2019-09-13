function validateEmail(str) {
    let regexp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(regexp.test(str)){
        console.log('Email hop le!!');
    }else{
        console.log('Email khon hop le!!!');
    }
}