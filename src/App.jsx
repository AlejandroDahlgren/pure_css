import './App.css'
import TeemoImage from './assets/Teemo_OmegaSquad_29.webp'

function App() {


  return (
    <>
      <div className='banner'>
        <div className='slider' style={{"--quantity": 10}}>
          <div className='item' style={{ "--position": 1}}><img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/8201aebd324836be730d1be4dd9d5d2e7aa4004c-496x560.jpg?auto=format&fit=fill&q=80&w=352" alt="" /></div>
          <div className='item' style={{ "--position": 2}}><img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/092febba8905cff35940d036fd20b7e3ad4f428f-496x560.jpg?auto=format&fit=fill&q=80&w=352" alt="" /></div>
          <div className='item' style={{ "--position": 3}}><img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/a01abe18e557c86721e8725ac36337a8839ac926-496x560.jpg?auto=format&fit=fill&q=80&w=352" alt="" /></div>
          <div className='item' style={{ "--position": 4}}><img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/d62b56e6f606e6e225a59879be46e0903a973dd0-496x560.jpg?auto=format&fit=fill&q=80&w=352" alt="" /></div>
          <div className='item' style={{ "--position": 5}}><img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/5c0a5cedf2e21d887e83674d1c09099633e3cb4e-496x560.jpg?auto=format&fit=fill&q=80&w=352" alt="" /></div>
          <div className='item' style={{ "--position": 6}}><img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/afcd9c81e4f3a9a86bc43bd9e6fb457dac1f5fe8-496x560.jpg?auto=format&fit=fill&q=80&w=352" alt="" /></div>
          <div className='item' style={{ "--position": 7}}><img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/e7fca39b04ecc83ff3e96b281aa39b385cd5faa3-496x560.jpg?auto=format&fit=fill&q=80&w=352" alt="" /></div>
          <div className='item' style={{ "--position": 8}}><img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/fc33bd8b0b190bb820bbfc287f83836692b5c2c7-496x560.jpg?auto=format&fit=fill&q=80&w=352" alt="" /></div>
          <div className='item' style={{ "--position": 9}}><img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/2fea45326222c12a1520479c7fe1b171eaf95d10-496x560.jpg?auto=format&fit=fill&q=80&w=352" alt="" /></div>
          <div className='item' style={{ "--position": 10}}><img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/6fbbefbe39f97cf20befb9fafe815cafdadebb58-496x560.jpg?auto=format&fit=fill&q=80&w=352" alt="" /></div>
        </div>
        <div className='content'>
          <h1 data-content="CSS ONLY">
            CSS ONLY
          </h1>
          <div className='author'>
            <h2>Alejandro Dahlgren</h2>
            <p><b>Web design</b></p>
            <p>
              watch my other projects
            </p>
          </div>
          <div className='model' style={{backgroundImage: `url(${TeemoImage})`}}></div>
        </div>
      </div>
    </>
  )
}

export default App
