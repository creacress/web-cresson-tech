// components/ComparisonChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { motion } from 'framer-motion';
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
  const data = {
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

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="chart-section"
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        Comparatif Graphique : RPA vs Humain
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Pourquoi perdre du temps avec des processus manuels alors que les RPA offrent
        une efficacité inégalée ? Ce graphique démontre clairement la supériorité
        des RPA par rapport aux humains dans des tâches répétitives et chronophages.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Que ce soit en termes de rapidité, de précision, ou de volume traité,
        les RPA surpassent largement les capacités humaines. Imaginez l'impact sur
        votre entreprise avec un gain de temps colossal et des résultats parfaits !
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        style={{ maxWidth: '800px', margin: 'auto', overflowX: 'auto' }}
      >
        <Bar data={data} />
      </motion.div>
      <motion.div
        className="comparison-summary"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
      >
        <p><strong>Temps moyen :</strong> Un RPA réalise une tâche en 33.6 secondes contre 180 secondes pour un humain. Cela signifie que vous pouvez accomplir 5 fois plus en utilisant un RPA !</p>
        <p><strong>Taux de réussite :</strong> Avec un taux de réussite de 100%, les RPA éliminent les erreurs humaines qui coûtent cher.</p>
        <p><strong>Volume :</strong> Un RPA peut traiter 107 contrats par heure, comparé à seulement 20 pour un humain. C'est une différence massive pour des volumes importants.</p>
        <p>
          Adoptez un RPA et transformez votre manière de travailler en améliorant
          simultanément vos performances et vos résultats.
        </p>
      </motion.div>
      <style jsx>{`
        .chart-section {
          padding: 2rem;
          text-align: center;
          background-color: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          max-width: 100%;
          margin: auto;
        }
        .comparison-summary {
          margin-top: 2rem;
          text-align: left;
          background-color: #fff;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .comparison-summary p {
          margin: 0.5rem 0;
        }
        @media (max-width: 768px) {
          .chart-section {
            padding: 1rem;
          }
          .comparison-summary {
            padding: 1rem;
          }
          h2 {
            font-size: 1.5rem;
          }
          p {
            font-size: 1rem;
          }
        }
      `}</style>
    </motion.section>
  );
};

export default ComparisonChart;
