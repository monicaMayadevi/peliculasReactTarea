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

            <div class="col-12">
                <div class="row justify-content-center gap-3">
                <div class="col-3 border border-light rounded-3 p-3">
                    <img class="img-fluid" src="img/infantil.jpg"/>
                    <div class="text-center mt-5">
                        <Link to="/peliculas/A" class="link-light">Peliculas Infantiles</Link>
                    </div>
                </div>
                <div class="col-3 border border-light rounded-3 p-3">
                <img class="img-fluid" src="img/adolescentes.jpg"/>
                <div class="text-center mt-5">
                    <Link to="/peliculas/B" class="link-light">Peliculas para Adolescentes</Link>
                </div>
              </div>
              <div class="col-3 border border-light rounded-3 p-3 align-content-center">
              <img class="img-fluid" src="img/adultos.jpg"/>
              <div class="text-center mt-5">
                <Link to="/peliculas/C" class="link-light">Peliculas para Adultos</Link>
               </div>
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
