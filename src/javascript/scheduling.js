const form = document.getElementById("form_scheduling");
let scheduling = JSON.parse(localStorage.getItem("scheduling")) || [];

function saveScheduling() {
    localStorage.setItem("scheduling", JSON.stringify(scheduling));
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const date = document.getElementById('date').value.trim();
    const time = document.getElementById('time').value;

    if (!name || !date || !time) {
        alert("Preencha todos os campos!");
        return;
    }

    const exist = scheduling.some(a => a.date === date && a.time === time);
    if (exist) {
        alert("Esse horário já está agendado!");
        return;
    }

    scheduling.push({ name, date, time });
    saveScheduling();

    const numberWhatsapp = "5511915656962";
    const message = `Olá! Meu nome é ${name} e gostaria de agendar para o dia ${date} às ${time}.`;

    const url = `https://wa.me/${numberWhatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
});