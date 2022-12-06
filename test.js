function allOscarWinners(films) {
  const result =  films.every(film => film.wonOscar === true); //ans: true
  return result
       }
      
  
  console.log(allOscarWinners([ 
  {
    title: 'Forecast Gump',
    wonOscar: true,
  },
  {
    title: "Moonlight",
    wonOscar: true,
  },
  {
    title: 'No Country for Old Men',
    wonOscar: false,
  }
  ])
  )
