### PREMIER-LEAGUE-PLAYERS

La clase LeagueTable registra los goles de cada jugador en la Premier League. Después de cada juego, el jugador registra sus goles anotados con la función recordResult.  

La posición del jugador en la liga se calcula usando la siguiente lógica:  

El jugador con más cantidad de goles ocupa el primer lugar (puesto 1). El jugador con la puntuación más baja ocupa el último lugar. 

Si dos jugadores están empatados en puntuación, entonces el jugador que ha jugado la menor cantidad de juegos tiene una clasificación más alta.  

Si dos jugadores están empatados en puntuación y número de juegos jugados, entonces el jugador que estaba primero en la lista de jugadores ocupa un lugar más alto.  

Se implementa la función playerRank que devuelve al jugador en el rango dado.