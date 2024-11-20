
// Lista de razones
const razones = [
    "porque siempre me haces reír.",
    "porque eres mi mayor apoyo en los momentos difíciles.",
    "porque tienes la sonrisa más hermosa.",
    "porque amas mis defectos tanto como mis virtudes.",
    "porque eres increíblemente inteligente.",
    "porque siempre sabes qué decir para animarme.",
    "porque me haces sentir amado todos los días.",
    "porque compartimos sueños y metas juntos.",
    "porque tus abrazos son mi lugar seguro.",
    "porque no importa el día, siempre encuentras formas de sorprenderme.",
    "porque admiro tu dedicación y esfuerzo en todo lo que haces.",
    "porque haces que incluso los días grises sean hermosos.",
    "porque tu risa ilumina mi día.",
    "porque siempre tienes tiempo para escucharme.",
    "porque juntos hacemos un gran equipo.",
    "porque me aceptas tal y como soy.",
    "porque tu bondad y generosidad son infinitas.",
    "porque tus ojos me recuerdan por qué estoy enamorado de ti.",
    "porque nuestra conexión es única y especial.",
    "porque cada día a tu lado es un regalo.",
    "porque me haces sentir que todo es posible.",
    "porque amo la forma en que me miras.",
    "porque tus besos tienen la magia de alegrar mi alma.",
    "porque siempre buscas lo mejor para los dos.",
    "porque me inspiras a ser una mejor persona.",
    "porque no importa lo que pase, siempre enfrentamos todo juntos.",
    "porque amo cómo me haces sentir completo.",
    "porque eres mi mejor amiga y mi gran amor.",
    "porque no importa cuán difícil sea el día, tú siempre lo haces mejor.",
    "porque amo cada faceta de tu personalidad.",
    "porque eres todo lo que siempre soñé y más.",
    "porque nuestro amor es único e irremplazable.",
    "porque haces que mi corazón sea feliz.",
    "porque eres la razón de mi sonrisa diaria."
];

// Obtener el día del año (1-365)
const today = new Date();
const dayOfYear = Math.ceil((today - new Date(today.getFullYear(), 0, 0)) / 86400000);

// Obtener la razón del día
const razonDelDia = razones[(dayOfYear - 1) % razones.length];

// Mostrar la razón en el HTML
document.getElementById('razon').textContent = razonDelDia;
