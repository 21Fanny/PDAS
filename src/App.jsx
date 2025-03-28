import ProfileCard from "./ProfileCard"
function App() {

  return (
    <>
    <h1>compenente de app</h1>
    <section className="hero is-dark">
      <div className="hero-body">
        <p className="title">Personal Digital Assistants</p>
      </div>
    </section>

<div className="container">
  <section className="section">
    <div className="alexa">
      <div className="@alexa24">
        <ProfileCard
          title="Alexa"
          image="https://play-lh.googleusercontent.com/xxZON2rN4_dRDrB0Szsq6NkYGnoXBPkKGoR4rMlWaqssoHegL_hFIw54b4beHoGtdDk"
          handle="Alexa@99" 
        />
      </div>
      <div className="column is-4">
        <ProfileCard />
        </div>
        <div className="column is-4">
        <ProfileCard />
      </div>
      </div>
  </section>
</div>
    </>
  )
}

export default App