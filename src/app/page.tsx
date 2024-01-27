import ParticlesBg from "@/components/ParticlesBg";

export default function Home() {
  return (
    <main>
      <section id="main-section">
        <div className="container d-flex align-items-center justify-content-center h-100">
            <h2 className="display-2 text-primary text-center w-75 fw-medium py-4 border-top border-bottom border-1 border-primary">Welcome to Anti Corruption Portal</h2>
        </div>
        <ParticlesBg className="particles-bg" id="homePageParticles" />
      </section>
        <section id="desc-section" className="text-bg-primary py-5">
            <div className="container py-5">
                <h2 className="fw-normal"><i className="bi bi-coin" /> What is Corruption?</h2>
                <hr className="my-3"/>
                <p className="definition mb-5">Corruption refers to dishonest or unethical conduct by those in power, typically involving bribery,
                    fraud, or other forms of wrongdoing. In Uzbekistan, corruption can take various forms and has
                    significant consequences for society, the economy, and governance.</p>

                <div className="d-flex flex-column flex-md-row align-items-center justify-content-around gap-5">
                    <div className="card shadow-lg impact-card border-0 rounded-4">
                        <div className="card-body text-center">
                            <h4><i className="bi bi-cash-coin" /> Economic Impact</h4>
                            <p className="card-text">Corruption can hinder economic growth, leading to unfair
                                competition, misallocation of resources, and reduced investment.</p>
                        </div>
                    </div>
                    <div className="card shadow-lg impact-card border-0 rounded-4">
                        <div className="card-body text-center">
                            <h4><i className="bi bi-people" /> Social Impact</h4>
                            <p className="card-text">Corruption can perpetuate inequality, erode public trust, and
                                undermine social cohesion, impacting citizens’ well-being.</p>
                        </div>
                    </div>
                    <div className="card shadow-lg impact-card border-0 rounded-4">
                        <div className="card-body text-center">
                            <h4><i className="bi bi-exclamation-triangle" /> Governance Impact</h4>
                            <p className="card-text">Corruption can weaken institutions, distort decision-making
                                processes, and impede the effective functioning of government.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container pt-5">
                <h3 className="pb-3 text-primary fw-normal">Uzbekistan has risen to 126th place in the Corruption
                    Perception Index. What can be improved?</h3>
                <p>Uzbekistan has improved its global ranking to 126th out of 180 countries, scoring 31 points (up from
                    140th in 2021). In 2017, the country enacted a law outlining its anti-corruption efforts, providing
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
                <h3 className="pb-3 text-primary fw-normal">Transparency Initiatives</h3>
                <p>Uzbekistan is actively working on transparency and accountability initiatives to combat corruption.
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
                                The government publishes detailed information on budget allocations and spending to promote fiscal transparency.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
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
                            <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#initiatives-collapseThree" aria-expanded="false"
                                    aria-controls="initiatives-collapseThree">
                                3. Anti-Corruption Agencies
                            </button>
                        </h2>
                        <div id="initiatives-collapseThree" className="accordion-collapse collapse">
                            <div className="accordion-body">
                                Specialized agencies are established to investigate and combat corruption at various levels.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  );
}
