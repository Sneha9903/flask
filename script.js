fetch('http://127.0.0.1:5000/api/toptags')
  .then(response => response.json())
  .then(({ years, data }) => {
    const colors = [
      '#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6',
      '#a855f7', '#ec4899', '#64748b', '#14b8a6', '#111827'
    ];

    const datasets = Object.entries(data).map(([tag, values], i) => ({
      label: tag,
      data: values,
      borderColor: colors[i % colors.length],
      backgroundColor: colors[i % colors.length],
      fill: false,
      tension: 0.3
    }));

    new Chart(document.getElementById('tagsChart'), {
      type: 'line',
      data: {
        labels: years,
        datasets: datasets
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              boxWidth: 12,
              padding: 15,
              font: {
                size: 12
              }
            }
          },
          title: {
            display: true,
            text: 'Top 10 Tags Over the Years',
            font: {
              size: 20
            }
          }
        },
        interaction: {
          mode: 'index',
          intersect: false
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Years'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Count'
            }
          }
        }
      }
    });
  })
  .catch(err => {
    console.error("Error loading data:", err);
  });
