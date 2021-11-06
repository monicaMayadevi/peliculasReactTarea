import { Provider } from 'mobx-react'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Home from './home'
import ListadoPeliculasAdulto from './peliculas/listadoPeliculasAdulto'
import ListadoPeliculasInfantil from './peliculas/listadoPeliculasInfantil'

import Footer from './footer'
import PeliculasStore from './stores/PeliculasStore'

const peliculas = new PeliculasStore()
/* comentario: console.log('hola')*/
ReactDOM.render
(
	<Provider peliculas={ peliculas }>
	<HashRouter>
	  <div className="container-fluid">

	    <Switch>
	        <Route exact path="/" component={ Home }/>
	        <Route exact path="/peliculasAdulto" component={ ListadoPeliculasAdulto }/>
					<Route exact path="/peliculasInfantil" component={ ListadoPeliculasInfantil }/>
	    </Switch>
			<br />
	    <Footer/>
	  </div>
	</HashRouter>
	</Provider>
	,
	document.getElementById('base')
)
