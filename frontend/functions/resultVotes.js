const getData = async()=>{
    let url = `https://votingprograred.herokuapp.com/api/users/all`;
    let response = await fetch(url, {method:'GET'} );
    let obj = await response.json();
    const names = [obj[0].president, obj[1].president, obj[2].president, obj[3].president, obj[4].president,obj[5].president,obj[6].president,obj[7].president,obj[8].president];
    return names;
  }
  
  const getDataVotes = async()=>{
    let url = `https://votingprograred.herokuapp.com/api/users/all`;
    let response = await fetch(url, {method:'GET'} );
    let obj = await response.json();
    const votes = [obj[0].totalVotes, obj[1].totalVotes, obj[2].totalVotes, obj[3].totalVotes, obj[4].totalVotes, obj[5].totalVotes,obj[6].totalVotes,obj[7].totalVotes,obj[8].totalVotes];
    return votes;
  }
  
  
  const loadChart = async()=>{
    let labelsData = await getData();
    console.log(labelsData);
  
    let dataNumbers = await getDataVotes();
    console.log(dataNumbers);
  
    const data = {
        labels: labelsData,
        datasets: [{
            label: 'AHAHAHAH',
            data: dataNumbers,
            backgroundColor: [
                'rgba(241, 130, 33, 0.8)',
                'rgba(0, 205, 104,0.8)',
                'rgba(255, 216, 2, 0.8)',
                'rgba(239, 43, 44, 0.8)',
                'rgba(136, 0, 138, 0.8)',
                'rgba(255, 51, 178, 0.8)',

                'rgba(26, 115, 205, 0.8)',
                'rgba(154, 205, 50, 0.8)',
                'rgba(1, 173, 193, 0.8)'


            ],
            borderColor: [
                'rgba(241, 130, 33, 1)',
                'rgba(0, 205, 104,1)',
                'rgba(255, 216, 2, 1)',
                'rgba(239, 43, 44, 1)',
                'rgba(136, 0, 138, 1)',
                'rgba(255, 51, 178, 1)',

                'rgba(26, 115, 205, 1)',
                'rgba(154, 205, 50, 1)',
                'rgba(1, 173, 193, 1)'
            ],
            borderWidth: 1
        }]
    }
  
    const config = {
  
        type: 'doughnut',
        data,
        options: {
            tooltips: {
                enabled: true
            },
            plugins: {
                datalabels: {
                    formatter: (dataNumbers, chart) => {
  
                        let sum = 0;
                        let dataArr = chart.chart.data.datasets[0].data;
                        dataArr.map(data => {
                            sum += data;
                        });
                        let percentage = (dataNumbers * 100 / sum).toFixed(2) + '%';
                        return percentage;
  
  
                    },
                    color: '#000',
                }
            }
        }
  
    };
  
    const myChart = new Chart(
        document.getElementById('myChart'),config
  
    );
  
  }
  
  
  loadChart();