import "./Main.css";

function Main() {
  return (
    <>
      <main>
        <section className="blog-posts">
          <article>
            <img
              src="https://i.postimg.cc/CLpBKPZ1/womenreading.webp"
              alt="A women reading article using magnifying glass"
            ></img>
            <h2>
              Understanding Menopause: Symptoms, Stages, and Solutions for a
              Smooth Transition
            </h2>
            <p className="date">June 29, 2023 | 4 min read</p>
            <p>
              Women have always been known to have great intuition, especially
              when it comes to their body reacting to certain conditions -
              emotionally, mentally or physically.
            </p>
            <a href="/menopause" className="read-more">
              Read More
            </a>
          </article>

          <article>
            <img
              src="https://i.postimg.cc/WpkqTL1C/skincare.webp"
              alt="Skincare products placed in a basket"
            ></img>
            <h2>5 Tips For Better Skin This Summer</h2>
            <p className="date">June 30, 2023 | 5 min read</p>
            <p>
              Summer + Menopause = The kind of skin you do not want. We
              understand! Fret not! We’ve heard your call for help, which is why
              this week we’ve prepared the best summer skin-care tips for supple
              skin, recommended by dermatologists!
            </p>
            <a
              href="https://betterbody.co/blogs/health-articles/5-tips-for-better-skin-this-summer"
              className="read-more"
            >
              Read More
            </a>
          </article>
          <article>
            <img
              src="https://i.postimg.cc/8P7K1C6D/food.webp"
              alt="Full of berries"
            ></img>
            <h2>5 Lifestyle Changes To Help You Beat Sugar Cravings</h2>
            <p className="date">July 1, 2023 | 3 min read</p>
            <p>
              If you love sugar, you already know it's highly addictive —
              probably because it feels so darn good when that sweetness hits
              your tongue. However, it has become common knowledge that having a
              diet that is high in sugar can be detrimental to health.
            </p>
            <a
              href="https://betterbody.co/blogs/health-articles/5-lifestyle-changes-to-help-you-beat-sugar-cravings"
              className="read-more"
            >
              Read More
            </a>
          </article>
          <article>
            <img
              src="https://i.postimg.cc/N0jrcKKk/fitnes.webp"
              alt="2 women drinking after workout"
            ></img>
            <h2>
              Strengthen Your Knees, Hips And Ankles With These 5 Exercises
            </h2>
            <p className="date">July 2, 2023 | 6 min read</p>
            <p>
              Over time, the padding and cartilage in your joints wears & tears
              away, which causes our joints to weaken, leading to joint pains &
              discomfort. That's why we consulted with over 5 physical
              therapists to bring you 5 exercises that are designed to improve
              flexibility and balance, as well as strengthen your joints.{" "}
            </p>
            <a
              href="https://betterbody.co/blogs/health-articles/strengthen-your-knees-hips-and-ankles-with-these-5-exercises"
              className="read-more"
            >
              Read More
            </a>
          </article>
          <article>
            <img
              src="https://i.postimg.cc/rpZRFqWX/relationship.webp"
              alt="Cycling couple holding each others hand under sunset"
            ></img>
            <h2>Supporting Your Partner Through Menopause</h2>
            <p className="date">July 3, 2023 | 9 min read</p>
            <p>
              We know that the partners of menopausal women do often bear the
              brunt being around them. But they need you and your support.
              Because what you’re feeling — they’re probably feeling it a
              hundred times worse! If you’re wondering how or what to do to
              provide much needed support for any menopausal women in your life.
              Don’t worry, we got you!
            </p>
            <a
              href="https://betterbody.co/blogs/health-articles/better-body-s-guide-supporting-your-partner-through-menopause-1"
              className="read-more"
            >
              Read More
            </a>
          </article>
          <article>
            <img
              src="https://i.postimg.cc/RV13J7fT/yoga.webp"
              alt="Women practice mountain pose on top of mountain"
            ></img>
            <h2>Stretch & Pose Your Joint Pains Away!</h2>
            <p className="date">July 4, 2023 | 5 min read</p>
            <p>
              Here are 5 yoga poses to help you promote joint health and
              movement.
            </p>
            <a
              href="https://betterbody.co/blogs/health-articles/better-body-s-guide-supporting-your-partner-through-menopause-1"
              className="read-more"
            >
              Read More
            </a>
          </article>
        </section>
        <a href="/" className="all-posts">
          View All Posts
        </a>
      </main>
    </>
  );
}

export default Main;
