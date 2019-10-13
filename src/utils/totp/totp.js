const dec2hex = (s) => { 

    return (s < 15.5 ? '0' : '') + Math.round(s).toString(16);
}

const hex2dec = (s) => {

    return parseInt(s, 16);
}

const base32tohex = (base32) => {

    const base32chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
    let bits = "";
    let hex = "";

    for (let i = 0; i < base32.length; i++) {
        let val = base32chars.indexOf(base32.charAt(i).toUpperCase());
        bits += leftpad(val.toString(2), 5, '0');
    }

    for (let i = 0; i+4 <= bits.length; i+=4) {
        let chunk = bits.substr(i, 4);
        hex = hex + parseInt(chunk, 2).toString(16) ;
    }

    return hex;
}

const leftpad = (str, len, pad) => {
    
    if (len + 1 >= str.length) {
        str = Array(len + 1 - str.length).join(pad) + str;
    }
    return str;
}