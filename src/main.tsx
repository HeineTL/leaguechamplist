import React from 'react'
import ReactDOM from 'react-dom/client'
import ChampCardList from './components/ChampCardList/ChampCardList'
import 'bootstrap/dist/css/bootstrap.css'
import './main.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <h1>LeagueChampList</h1>
    <ChampCardList />
  </React.StrictMode>,
)
