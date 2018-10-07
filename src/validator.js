export function notGmail(value = "") {
    let regex = new RegExp(/^[a-z0-9](\.?[a-z0-9]){5,}@gmail\.com$/);
    return regex.test(value)
}
  
export function isEmailAvailable(value) {
    if (value === "") return true;

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value.length > 10);
        }, 500);
    });
}

export function notPhone(value = "") {
    let regex = new RegExp(/(\+62 ((\d{3}([ -]\d{3,})([- ]\d{4,})?)|(\d+)))|(\(\d+\) \d+)|\d{3}( \d+)+|(\d+[ -]\d+)|\d+/);
    return regex.test(value)
}