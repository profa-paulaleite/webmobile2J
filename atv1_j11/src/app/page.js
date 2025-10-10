"use client"
import Image from "next/image";
import styles from "./page.module.css";
import OlaMundo from "./components/OlaMundo";
import Saudacao from "./components/Saudacao";
import { useEffect, useState } from "react";

export default function Home() {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    console.log("Número de tarefas:", tarefas.length);
  }, [tarefas]);

  function adicionarTarefa() {
    if (tarefa.trim() !== "") {
      setTarefas([...tarefas, tarefa]);
      setTarefa("");
    }
  }

  function removerTarefa(index) {
    const tarefasAtualizadas = tarefas.filter((trf, i) => i !== index);
    setTarefas(tarefasAtualizadas);
  }

  return (
    <section>
      <OlaMundo />
      <Saudacao nome="Leticia"/>

      <section>
        <h1> Lista de Tarefas </h1>

        <input
          type="text"
          value={tarefa}
          onChange={(trf) => setTarefa(trf.target.value)}
          placeholder="Digite uma tarefa"
        />

        <button onClick={adicionarTarefa}> Adc </button>

        <ul>
          {tarefas.map((trf, index) => (
            <li key={index}> 
              {trf} 
              <button onClick={() => removerTarefa(index)}> Remover </button>
            </li>
          ))}
        </ul>

      </section>
    </section>
  );
}
