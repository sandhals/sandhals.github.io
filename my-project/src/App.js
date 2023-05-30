import logo from './logo.svg';
import './App.css';
import Episode from "./Episode.js"



function App() {
  return (
    <div className="wrapper">
     <h1>Red Scare Re-Stream</h1>
     <h2>Tier List</h2>
     <ul id="streamed-episodes" class="episode-list">
        <li class="placeholder">You haven't rated any episodes</li>
     </ul>

      <h2>Unstreamed Episodes</h2>
      <ul id="unstreamed-episodes" class="episode-list">
      <li class="placeholder">You're all caught up!</li>
      <Episode no="63" title="Rape Jokes w/ Vanessa Place"/>
<Episode no="100" title="The Zoo"/>
<Episode no="178" title="Karens of the World Unite w/ Amber A'Lee Frost"/>
<Episode no="243" title="Themi Lovato"/>
<Episode no="253" title="Spa Wars"/>
<Episode no="269" title="Autism University"/>

      </ul>
    </div>
  )
}

export default App