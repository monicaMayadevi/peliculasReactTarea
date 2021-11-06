import React from 'react'
import { Link } from 'react-router-dom'
class Home extends React.Component
{
	render()
	{
		return (
      <div>
				<div class="container">
          <div class="row">
           <div class="col">
					 <div class="text-center">
					 <br/>
              <img src="../img/bannerNetflix.jpg"  height="246"  width="954"  class="img-responsive" />
							<hr></hr>
							 <h1>Video Monish</h1>
						</div>
           </div>
         </div>
         <div class="row">
          <div class="col">
            <Link to="/peliculasAdulto">
                 <img src="../img/pelisAdultos.PNG"  width="500" height="180" class="img-responsive" />
								 <h5>Peliculas de Adultos</h5>
						</Link>
          </div>
          <div class="col">
          <Link to="/peliculasInfantil">
             <img src="../img/pelisInfantiles.PNG"  width="500" height="180" class="img-responsive" />
						 <h5>Peliculas Infantiles</h5>
					</Link>
         </div>
        </div>
       </div>
		  </div>
		)
	}
}
export default Home
