import ParticlesBg from "@/components/ParticlesBg";

export default function Home() {
  return (
      <main>
          <section id="main-section">
              <div className="container d-flex align-items-center justify-content-center flex-column h-100">
                  <h2 className="display-2 text-primary text-center w-75">Welcome to Anti Corruption Portal</h2>
                  <img src="/logo.svg" alt="Logo" className="d-inline-block align-text-top" width="128" height="128"/>
              </div>
              <ParticlesBg className="particles-bg" id="homePageParticles"/>
          </section>
          <section id="desc-section" className="text-bg-primary py-5">
              <div className="container py-5">
                  <h2 className="fw-normal"><i className="bi bi-coin"/> What is Corruption?</h2>
                  <hr className="my-3"/>
                  <p className="definition mb-5">Corruption refers to dishonest or unethical conduct by those in power,
                      typically involving bribery,
                      fraud, or other forms of wrongdoing. In Uzbekistan, corruption can take various forms and has
                      significant consequences for society, the economy, and governance.</p>

                  <div className="d-flex flex-column flex-md-row align-items-center justify-content-around gap-5">
                      <div className="card shadow-lg impact-card border-0 rounded-4">
                          <div className="card-body text-center">
                              <h4><i className="bi bi-cash-coin"/> Economic Impact</h4>
                              <p className="card-text">Corruption can hinder economic growth, leading to unfair
                                  competition, misallocation of resources, and reduced investment.</p>
                          </div>
                      </div>
                      <div className="card shadow-lg impact-card border-0 rounded-4">
                          <div className="card-body text-center">
                              <h4><i className="bi bi-people"/> Social Impact</h4>
                              <p className="card-text">Corruption can perpetuate inequality, erode public trust, and
                                  undermine social cohesion, impacting citizens’ well-being.</p>
                          </div>
                      </div>
                      <div className="card shadow-lg impact-card border-0 rounded-4">
                          <div className="card-body text-center">
                              <h4><i className="bi bi-exclamation-triangle"/> Governance Impact</h4>
                              <p className="card-text">Corruption can weaken institutions, distort decision-making
                                  processes, and impede the effective functioning of government.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <section>
              <div className="container pt-5">
                  <p>Uzbekistan has improved its global ranking to 126th out of 180 countries, scoring 31 points (up
                      from
                      140th in 2021). In 2017, the country enacted a law outlining its anti-corruption efforts,
                      providing
                      a legal framework with six chapters and 34 articles. The president recently announced a National
                      Anti-Corruption Strategy extending until 2030, with a focus on collaboration with foreign
                      institutions.</p>
                  <p>The Transparency International index has seen Uzbekistan climb 42 positions, securing the highest
                      regional ranking. The country aspires to further improve by 50 positions by 2030. Additionally,
                      Uzbekistan holds the 30th position in the Open Data Inventory, making it the 4th globally in terms
                      of open data sources. The Anti-Corruption Agency is set to adopt new mechanisms, including a
                      "preliminary examination" for corruption cases, drawing inspiration from international best
                      practices.</p>
                  <hr className="my-4"/>
                  <h3 className="text-primary fw-normal border-bottom border-2 border-primary d-inline-block pb-2">Transparency
                      Initiatives</h3>
                  <p className="py-3">Uzbekistan is actively working on transparency and accountability initiatives to
                      combat corruption.
                      Here are some key transparency measures:</p>

                  <div className="accordion pb-5" id="initiativesAccordion">
                      <div className="accordion-item">
                          <h2 className="accordion-header">
                              <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse"
                                      data-bs-target="#initiatives-collapseOne" aria-expanded="true"
                                      aria-controls="initiatives-collapseOne">
                                  1. Open Budgets
                              </button>
                          </h2>
                          <div id="initiatives-collapseOne" className="accordion-collapse collapse show">
                              <div className="accordion-body">
                                  The government publishes detailed information on budget allocations and spending to
                                  promote fiscal transparency.
                              </div>
                          </div>
                      </div>
                      <div className="accordion-item">
                          <h2 className="accordion-header">
                              <button className="accordion-button collapsed fw-bold" type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#initiatives-collapseTwo" aria-expanded="false"
                                      aria-controls="initiatives-collapseTwo">
                                  2. Public Procurement Transparency
                              </button>
                          </h2>
                          <div id="initiatives-collapseTwo" className="accordion-collapse collapse">
                              <div className="accordion-body">
                                  Transparent procurement processes help prevent corruption in government contracts.
                              </div>
                          </div>
                      </div>
                      <div className="accordion-item">
                          <h2 className="accordion-header">
                              <button className="accordion-button collapsed fw-bold" type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#initiatives-collapseThree" aria-expanded="false"
                                      aria-controls="initiatives-collapseThree">
                                  3. Anti-Corruption Agencies
                              </button>
                          </h2>
                          <div id="initiatives-collapseThree" className="accordion-collapse collapse">
                              <div className="accordion-body">
                                  Specialized agencies are established to investigate and combat corruption at various
                                  levels.
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section className="pb-5">
              <div className="container">
                  <h3 className="text-primary fw-normal border-bottom border-2 border-primary d-inline-block pb-3">Stats</h3>
                  <p>Statistics charts, is the best tool to visualize the dynamics and impact of anything. So we
                      collected some useful information below.</p>
                  <div className="d-flex flex-column gap-5">
                  <div className="card">
                      <div className="card-body">
                          <h5 className="card-title text-primary">Building Our Future: Government Investments and
                              Changes</h5>
                          <p className="card-text">This chart displays how the government's spending on construction
                              projects has changed over time. On one side, you'll see the amount of money invested in
                              building things like roads and houses. On the other side, it shows the results of this
                              spending, such as more jobs or improvements in our daily lives. It's a simple way to see
                              how the government's construction investments directly impact our country.</p>
                          <a href="/stats/construction" className="btn btn-primary stretched-link">Learn more</a>
                      </div>
                  </div>
                  <div className="card">
                      <div className="card-body">
                          <h5 className="card-title text-primary">Consumer Market Trends Over Time</h5>
                          <p className="card-text">This chart gives a quick view of how prices for things we buy have changed over the years. Different marks show the ups and downs in prices for various items, giving a straightforward look at consumer market trends.</p>
                          <a href="/stats/consumer-markets" className="btn btn-primary stretched-link">Learn more</a>
                      </div>
                  </div>
                  <div className="card">
                      <div className="card-body">
                          <h5 className="card-title text-primary">Foreign Trade Volume Trends</h5>
                          <p className="card-text">This chart offers a brief glimpse into the changes in the volume of foreign trade turnover over time. Using distinct marks or colors, it highlights fluctuations in both export and import volumes. The aim is to provide a straightforward overview of the trends in international trade activities.</p>
                          <a href="/stats/foreign-activity" className="btn btn-primary stretched-link">Learn more</a>
                      </div>
                  </div>
                  </div>
              </div>
          </section>
      </main>
  );
}
