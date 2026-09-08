import { serviceGroups } from '../../data/services'

export default function WhatWeDo() {
  return (
    <section className="section services" aria-labelledby="services-title">
      <div className="site-container">
        <h2 className="section-title" id="services-title">What We Do</h2>
        <div className="services-grid">
          {serviceGroups.map((group) => (
            <div className="service-group" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.services.map((service) => <li key={service}>{service}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
