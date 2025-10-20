import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Destino from "./components/destino/Destino";

export default function Home() {
  const destinos = [
    { id: 'veneza', nome: 'Veneza', caminhoImg: '/imagens/veneza.jpg' },
    { id: 'tokyo', nome: 'Tokyo', caminhoImg: '/imagens/tokyo.jpg' },
    { id: 'madrid', nome: 'Madrid', caminhoImg: '/imagens/madrid.jpg' },
    { id: 'bahia', nome: 'Bahia', caminhoImg: '/imagens/bahia.jpg' }
  ];

  return (
    <section className={styles.sectionMain}>
      {destinos.map(destino => (
        <Destino key={destino.id} destino={destino} />
      ))}
    </section>
  );
}
