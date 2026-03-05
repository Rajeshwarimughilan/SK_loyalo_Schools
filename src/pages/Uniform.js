import './Uniform.css';

const UNIFORM_SECTIONS = [
  {
    id: 'regular',
    title: 'Regular School Uniform',
    description:
      'Daily classroom wear stitched to maintain a formal silhouette, all-day comfort, and long-term durability under routine school use.',
    groups: [
      {
        label: 'Boys',
        items: [
          {
            piece: 'Shirt',
            fit: 'Sky-blue full-sleeve formal shirt with Loyalo crest embroidery on chest pocket.',
            fabric: '100% breathable cotton, wrinkle-resistant finish, reinforced shoulder seam.',
            features: 'Formal collar, durable button placket, neat structured fall after stitching.',
            price: '₹ 450',
          },
          {
            piece: 'Trousers',
            fit: 'Navy-blue straight-cut trousers with classroom-ready formal fit.',
            fabric: 'Poly-cotton blend with anti-fray hem and machine-wash durability.',
            features: 'Reinforced seams, side and back pockets, shape-retention structure.',
            price: '₹ 550',
          },
          {
            piece: 'Belt / Tie / Socks',
            fit: 'Standard accessory set aligned with school identity colours.',
            fabric: 'Vegan leather belt, washable polyester tie, cotton-blend socks.',
            features: 'Crest buckle, navy-gold stripe tie, reinforced sock toe and heel.',
            price: '₹ 80 – ₹ 220',
          },
        ],
      },
      {
        label: 'Girls',
        items: [
          {
            piece: 'Shirt / Blouse',
            fit: 'Sky-blue formal blouse with crest embroidery and curved hem finishing.',
            fabric: '100% breathable cotton with wrinkle-resistant treatment.',
            features: 'Comfort-fit stitching, clean front placket, long-lasting shape retention.',
            price: '₹ 430',
          },
          {
            piece: 'Skirt / Pinafore / Salwar',
            fit: 'Grade-wise patterning with A-line and straight-cut options for formal presentation.',
            fabric: 'Durable cotton blend with lining support and anti-fray stitch edges.',
            features: 'Pleat control, adjustable waist options, movement-friendly cut.',
            price: '₹ 500 – ₹ 520',
          },
          {
            piece: 'Ribbon / Socks',
            fit: 'Uniform-compliant finishing accessories for complete grooming standard.',
            fabric: 'Elastic non-slip ribbon band and cotton-blend socks.',
            features: 'School colour coordination, reinforced wear points, daily wash support.',
            price: '₹ 60 – ₹ 80',
          },
        ],
      },
    ],
  },
  {
    id: 'sports',
    title: 'Sports Uniform',
    description:
      'Performance-focused sportswear engineered for movement, perspiration control, and durability during PE sessions and events.',
    groups: [
      {
        label: 'Boys',
        items: [
          {
            piece: 'Sports T-Shirt',
            fit: 'Royal-blue round-neck athletic fit with shoulder stripe detailing.',
            fabric: 'Dry-fit moisture-wicking knit, lightweight 140 GSM.',
            features: 'Anti-odour treatment, rapid sweat evaporation, easy-care wash cycle.',
            price: '₹ 380',
          },
          {
            piece: 'Track Pants / Shorts',
            fit: 'Elastic-waist stretch patterns for running drills and field movement.',
            fabric: '4-way stretch synthetic blend with quick-dry capability.',
            features: 'Drawstring stability, zipper pocket option, flexible knee movement.',
            price: '₹ 280 – ₹ 480',
          },
          {
            piece: 'Sports Socks',
            fit: 'Athletic ankle-length comfort with secure cuff hold.',
            fabric: 'Cushioned performance knit with anti-blister layering.',
            features: 'Arch support and impact cushioning at heel and toe.',
            price: '₹ 100 (pair)',
          },
        ],
      },
      {
        label: 'Girls',
        items: [
          {
            piece: 'Sports T-Shirt',
            fit: 'Royal-blue active cut with house-colour piping and free-arm mobility.',
            fabric: 'Dry-fit knit, light-weight and anti-odour finished.',
            features: 'Shape-stable collar, moisture management, quick turnaround after wash.',
            price: '₹ 380',
          },
          {
            piece: 'Track Pants / Skirt-Shorts',
            fit: 'Flexible athletic silhouettes designed for sprinting and court movement.',
            fabric: 'Stretch blend textile with quick-dry and breathable structure.',
            features: 'Built-in support layers, waist grip comfort, durable seam lock.',
            price: '₹ 320 – ₹ 460',
          },
          {
            piece: 'Sports Socks',
            fit: 'Cushioned sport-fit profile for all training sessions.',
            fabric: 'Performance cotton blend with anti-blister internal knit.',
            features: 'Arch support, friction reduction zones, repeated wash resilience.',
            price: '₹ 100 (pair)',
          },
        ],
      },
    ],
  },
];

const SHOES = [
  {
    type: 'Regular black shoes',
    who: 'All Students (Gr. 1–12)',
    desc: 'Plain black lace-up formal school shoes. No patterns, logos, or colours other than black.',
    specs: ['Genuine PU leather upper', 'Non-slip rubber sole', 'Cushioned inner sole', 'Lace-up closure'],
    price: '₹ 850 – ₹ 1,200',
    note: 'Available at the school uniform store.',
  },
  {
    type: 'White canvas sports shoes',
    who: 'All Students (for PE & Sports)',
    desc: 'All-white canvas or mesh sports shoes for PE class and sports day. No coloured stripes.',
    specs: ['Breathable canvas/mesh', 'Rubber grip sole', 'Cushioned midsole', 'Lace-up / velcro option (Gr. 1–3)'],
    price: '₹ 650 – ₹ 950',
    note: 'Any brand is accepted as long as it is all-white.',
  },
];

const PURCHASE = [
  { icon: '🏫', title: 'School Uniform Store', desc: 'Open Monday – Saturday, 8:00 AM – 4:00 PM. Located near the school main office. Full uniform sets available.' },
  { icon: '📦', title: 'Online Order', desc: 'Order through the school parent portal. Delivery within 5–7 working days. Free delivery for orders above ₹ 1,500.' },
  { icon: '💳', title: 'Payment', desc: 'Cash, UPI, debit/credit card accepted at the store. Online portal accepts all payment methods.' },
  { icon: '🔄', title: 'Exchange Policy', desc: 'Unworn, tagged items can be exchanged within 15 days of purchase with proof of receipt.' },
];

export default function Uniform() {
  return (
    <div className="uniform-page">
      <div className="uni-hero">
        <div className="uni-hero-glow" aria-hidden="true" />
        <div className="uni-hero-content">
          <p className="uni-eyebrow">Loyalo School</p>
          <h1 className="uni-title">School Uniform</h1>
          <p className="uni-subtitle">
            Looking crisp, confident, and united — the Loyalo uniform is designed for comfort,
            durability, and school pride, every single day.
          </p>
          <div className="uni-hero-features">
            <span>🌬️ Breathable Fabrics</span>
            <span>🏅 Premium Quality</span>
            <span>💧 Easy-Wash Care</span>
            <span>📐 Tailored Fit Cuts</span>
          </div>
        </div>
      </div>

      <div className="uni-wrap">
        <section className="uni-showcase" aria-label="Uniform quality showcase">
          <figure className="uni-showcase-photo">
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=80"
              alt="Students in properly stitched school uniforms"
              loading="lazy"
            />
            <figcaption>
              Properly stitched Loyalo uniform sample: precise seams, clean drape, and standardised fit.
            </figcaption>
          </figure>

          <div className="uni-showcase-meta">
            <article>
              <h2>Uniform Features</h2>
              <p>
                Structured collars, reinforced seam lines, crest placement consistency, and classroom-safe
                silhouettes across all grades.
              </p>
            </article>
            <article>
              <h2>Fabric Details</h2>
              <p>
                Breathable cotton and poly-cotton blends selected for weather comfort, shape retention,
                and repeat wash durability across the full academic year.
              </p>
            </article>
            <article>
              <h2>Pricing Range</h2>
              <p>
                Most stitched pieces fall within ₹ 60 to ₹ 550, while certified footwear ranges between
                ₹ 650 and ₹ 1,200 depending on size and sole type.
              </p>
            </article>
          </div>
        </section>

        <section className="uni-catalog" aria-label="Uniform catalog">
          {UNIFORM_SECTIONS.map((section) => (
            <article key={section.id} className="uni-block" id={section.id}>
              <header className="uni-block-head">
                <p className="uni-sub-tag">Uniform Category</p>
                <h2 className="uni-sub-title">{section.title}</h2>
                <p className="uni-block-desc">{section.description}</p>
              </header>

              {section.groups.map((group) => (
                <div key={group.label} className="uni-group">
                  <h3>{group.label}</h3>
                  <div className="uni-table-wrap">
                    <table className="uni-table">
                      <thead>
                        <tr>
                          <th>Item</th>
                          <th>Construction &amp; Fit</th>
                          <th>Fabric Details</th>
                          <th>Features</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {group.items.map((item) => (
                          <tr key={item.piece}>
                            <td>{item.piece}</td>
                            <td>{item.fit}</td>
                            <td>{item.fabric}</td>
                            <td>{item.features}</td>
                            <td>{item.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </article>
          ))}
        </section>

        <section className="uni-shoes-section">
          <div className="uni-sub-header">
            <p className="uni-sub-tag">Footwear</p>
            <h2 className="uni-sub-title">School Shoes</h2>
          </div>
          <div className="uni-table-wrap">
            <table className="uni-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Applicable To</th>
                  <th>Standard</th>
                  <th>Specs</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {SHOES.map((shoe) => (
                  <tr key={shoe.type}>
                    <td>{shoe.type}</td>
                    <td>{shoe.who}</td>
                    <td>{shoe.desc}</td>
                    <td>{shoe.specs.join(', ')}</td>
                    <td>{shoe.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="uni-purchase-section">
          <div className="uni-sub-header">
            <p className="uni-sub-tag">Where to Buy</p>
            <h2 className="uni-sub-title">Purchase &amp; Exchange</h2>
          </div>
          <ul className="uni-process-list">
            {PURCHASE.map((item) => (
              <li key={item.title}>
                <span className="uni-process-icon" aria-hidden="true">{item.icon}</span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="uni-guidelines-banner">
          <div className="uni-guidelines-left">
            <h3 className="uni-guidelines-title">General Uniform Guidelines</h3>
            <ul className="uni-guidelines-list">
              <li>Uniform must be clean, ironed, and properly worn at all times on school premises.</li>
              <li>No alterations to the standard uniform design are permitted.</li>
              <li>Name tags must be stitched inside every uniform item.</li>
              <li>Jewellery is not permitted except for small plain gold studs (girls).</li>
              <li>Hair must be neatly tied for girls; trimmed and tidy for boys.</li>
              <li>Violations will be addressed by the class teacher and recorded in the student diary.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
