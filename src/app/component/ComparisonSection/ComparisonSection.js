import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import '../../styles/ComparisonChart.css';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);


const ComparisonChart = () => {
  const [selected, setSelected] = useState('RPA');

  const handleScroll = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const dataRPA = {
    labels: ['Temps moyen (secondes)', 'Taux de réussite (%)', 'Volume par heure'],
    datasets: [
      {
        label: 'RPA',
        data: [33.6, 100, 107],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Humain',
        data: [180, 90, 20],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const content = {
    RPA: (
      <>
        <p>
          Pourquoi perdre du temps avec des processus manuels alors que les RPA offrent une efficacité inégalée ?
        </p>
        <p>
          Ce graphique démontre clairement la supériorité des RPA par rapport aux humains dans des tâches répétitives et chronophages.
        </p>
      </>
    ),
    IA: (
      <>
        <p>
          L'IA révolutionne les industries avec des capacités avancées comme l'analyse en temps réel et l'automatisation.
        </p>
        <p>
          Transformez vos opérations grâce à l'IA pour un avenir plus efficace et optimisé.
        </p>
      </>
    ),
  };

  return (
    <section className="presentation-section">
      <h2>Découvrez nos solutions</h2>
      <div className="buttons-container">
        <button
          onClick={() => {
            setSelected('RPA');
            handleScroll('details');
          }}
        >
          RPA
        </button>
        <button
          onClick={() => {
            setSelected('IA');
            handleScroll('details');
          }}
        >
          IA
        </button>
      </div>

      <motion.div
        id="details"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="details-section"
      >
        <h3>{selected === 'RPA' ? 'Pourquoi choisir le RPA ?' : 'Pourquoi choisir l\'IA ?'}</h3>
        {content[selected]}
        {selected === 'RPA' && (
          <div className="chart-container">
            <Bar data={dataRPA} />
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default ComparisonChart;
