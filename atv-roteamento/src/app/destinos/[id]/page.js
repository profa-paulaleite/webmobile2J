import Image from "next/image";
import styles from "./destinos.module.css";

export default function DestinoPage({ params }) {
    const dadosDestino = {
        veneza: {
            nome: 'Veneza',
            descricao: 'Veneza é pra ser bunita, mas falam que é só feia.',
            caminhoImg: '/imagens/veneza.jpg'
        },
        tokyo: {
            nome: 'Tokyo',
            descricao: 'Cidade para gastar muito dinheiro com muitas coisas.',
            caminhoImg: '/imagens/tokyo.jpg'
        },
        madrid: {
            nome: 'Madrid',
            descricao: 'Tem time de futebol.',
            caminhoImg: '/imagens/madrid.jpg'
        },
        bahia: {
            nome: 'Bahia',
            descricao: 'Melhores praias do mundo, água quentinha.',
            caminhoImg: '/imagens/bahia.jpg'
        }
    }

    const destino = dadosDestino[params.id];

    return (
        <section className={styles.sectionMain}>
            <h2> {destino.nome} </h2>

            <Image className={styles.imagem} src={destino.caminhoImg} alt={destino.descricao} width={500} height={350}/>

            <p className={styles.descricao}> {destino.descricao} </p>
        </section>
    )
}