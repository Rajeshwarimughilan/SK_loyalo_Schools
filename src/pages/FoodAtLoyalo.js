import './PageLayout.css';
import './FoodAtLoyalo.css';

const balancedMeal = [
  {
    nutrient: 'Carbohydrates',
    source: 'Whole wheat chappathi and rice for sustained energy.',
  },
  {
    nutrient: 'Protein',
    source: 'A wide range of lentils, pulses, and legumes.',
  },
  {
    nutrient: 'Fibre',
    source: 'Fresh seasonal fruits and vegetables served daily.',
  },
  {
    nutrient: 'Healthy Fat',
    source: 'Balanced use of ghee, cheese, and butter.',
  },
  {
    nutrient: 'Vitamins & Minerals',
    source: 'Dairy products, nuts, seeds, and jaggery-rich dishes.',
  },
];

const snackOptions = [
  'Fresh fruit bowls',
  'Steam-cooked sundal preparations',
  'Traditional Indian snacks: rice murukku, navaratna mixture, plantain chips, vegetable samosa',
  'Fresh baked snacks: tea cakes, muffins, cookies, and brownies',
];

function FoodAtLoyalo() {
  return (
    <section className="page-shell food-page">
      <header className="food-hero">
        <div className="food-hero-copy">
          <h1>Nourishing Every Learner, Every Day</h1>
          <p>
            At Loyalo, food is a learning culture, not just a service. Our kitchen combines
            nutrition science, sustainability, and community rituals to help children grow into
            strong and healthy individuals from the beginning.
          </p>
          <div className="food-hero-tags">
            <span>Fresh Daily Cooking</span>
            <span>Balanced Nutrition</span>
            <span>Zero-Frozen Ingredient Policy</span>
          </div>
        </div>
        <div className="food-hero-image-grid" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?w=700&h=950&fit=crop"
            alt="Traditional lunch"
          />
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=700&h=950&fit=crop"
            alt="Nutritious food"
          />
          <img
            src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=700&h=950&fit=crop"
            alt="Soup and healthy snacks"
          />
        </div>
      </header>

      <div className="food-layout">
        <article className="food-feature">
          <h2>Full Moon Day Traditional Lunch</h2>
          <p>
            Our Full Moon Day lunch celebrates culture and nutrition together. Faculty, seniors,
            and juniors interact closely while preparing and serving food on banana leaves. It is
            a shared meal experience where students observe collaboration, respect, and gratitude
            in action.
          </p>
          <p>
            New nutrition initiatives like healthy snacks and drumstick leaf soup are now part of
            our meal plan, helping children build stronger immunity and healthier food habits.
          </p>
          <figure>
            <img
              src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=1200&h=700&fit=crop"
              alt="Traditional community meal"
            />
            <figcaption>Community dining with cultural values and nutrition at the center.</figcaption>
          </figure>
        </article>

        <aside className="food-side-card">
          <h3>Sustainable Kitchen Promise</h3>
          <p>
            No ingredient is frozen to extend shelf life. Food is consumed on the same day of
            preparation.
          </p>
          <p>
            At day-end, food waste goes to our campus Food Composter, which converts leftovers into
            manure for our green landscape.
          </p>
          <img
            src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=900&h=600&fit=crop"
            alt="Composting and sustainability"
          />
        </aside>
      </div>

      <section className="food-section">
        <h2>The Balanced Lunch Menu</h2>
        <div className="nutrition-grid">
          {balancedMeal.map((item) => (
            <article key={item.nutrient} className="nutrition-card">
              <h3>{item.nutrient}</h3>
              <p>{item.source}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="food-section two-col">
        <article className="food-card">
          <h2>Snack Program</h2>
          <p>
            Snack choices are designed to be wholesome and joyful. Packaging for traditional fried
            snacks is consciously done in butter paper instead of newspaper or plastic.
          </p>
          <ul>
            {snackOptions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="food-card image-card">
          <img
            src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=1100&h=760&fit=crop"
            alt="Healthy snack varieties"
          />
          <p className="image-caption">Freshly prepared snacks and soup options for daily strength.</p>
        </article>
      </section>

      <section className="food-section two-col">
        <article className="food-card">
          <h2>Student Menu Committee</h2>
          <p>
            Every week, the Student Menu Committee reviews the menu and offers suggestions to the
            Head Chef. Through the Life Skills Activities program, students also audit the food
            store for product quality and storage standards.
          </p>
        </article>
        <article className="food-card">
          <h2>Field Trips & Food Safety</h2>
          <p>
            Fresh food from the school kitchen is carried for all field trips in safe steel
            carriers and served using regular steel cutlery and crockery. Food handlers are
            professionally groomed and equipped with safety gear to demonstrate hygienic practices.
          </p>
        </article>
      </section>

      <section className="food-section hostel-highlight">
        <div>
          <p className="eyebrow">Hostel Nutrition</p>
          <h2>Nutritious Hostel Meals, Day and Night</h2>
          <p>
            Food provided in the hostel follows the same nutrition-first standards. Weekly meal
            cycles include balanced proteins, seasonal vegetables, fruits, and hydration support so
            boarders receive healthy, consistent nourishment for academics, sports, and rest.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1559847844-5315695dadae?w=1100&h=760&fit=crop"
          alt="Nutritious hostel meals"
        />
      </section>

    </section>
  );
}

export default FoodAtLoyalo;
