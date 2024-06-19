export default function validation(user) {

    const errors = {}
    const pattern = new RegExp(/^\d{1,10}$/);
    console.log(user);
    if (user.name == "") {
        errors.name = "name is required";
    }
    if (user.username == "") {
        errors.username = "username is required";
    }
    if (user.phoneno == "") {
        errors.phoneno = "phone number is required";
    } else

        if (!pattern.test(user.phoneno)) {
            errors.phoneno = "phone number is not valid";
        }

    return errors;
}