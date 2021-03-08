import WhatsAppWidget from "../../../components/WhatsAppWidget/wa-widget.js"

let sendHomeForm = () => {
    let sender = null
    let homeFormName = document.querySelector('[name="home__form_name"]').value;
    let homeFormPhone = document.querySelector('[name="home__form_phone"]').value;
    let homeFormEmail = document.querySelector('[name="home__form_email"]').value;
    let arrHome = [homeFormName, homeFormPhone, homeFormEmail]
    sender = new WhatsAppWidget("79053688303", "Детальный план реализации проекта", arrHome, "Расскажите подробнее, пожалуйста.")
    return sender
}

export default sendHomeForm