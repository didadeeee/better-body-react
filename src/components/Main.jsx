import "./Main.css";

function Main() {
  return (
    <main>
      <section className="blog-posts">
        <article>
          <img
            src="https://i.postimg.cc/CLpBKPZ1/womenreading.webp"
            alt="A women reading article using magnifying glass"
          />
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
            Keep reading to find out more about Menopause.
          </a>
        </article>

        <article>
          <img
            src="https://i.postimg.cc/WpkqTL1C/skincare.webp"
            alt="Skincare products placed in a basket"
          />
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
            Click to find out the best skincare regime.
          </a>
        </article>

        <article>
          <img
            src="https://i.postimg.cc/8P7K1C6D/food.webp"
            alt="Full of berries"
          />
          <h2>5 Lifestyle Changes To Help You Beat Sugar Cravings</h2>
          <p className="date">July 1, 2023 | 3 min read</p>
          <p>
            If you love sugar, you already know it's highly addictive — probably
            because it feels so darn good when that sweetness hits your tongue.
            However, it has become common knowledge that having a diet that is
            high in sugar can be detrimental to health.
          </p>
          <a
            href="https://betterbody.co/blogs/health-articles/5-lifestyle-changes-to-help-you-beat-sugar-cravings"
            className="read-more"
          >
            Continue reading to understand the scientific reasons behind sugar
            cravings.
          </a>
        </article>

        <article>
          <img
            src="https://i.postimg.cc/N0jrcKKk/fitnes.webp"
            alt="2 women drinking after workout"
          />
          <h2>Strengthen Your Knees, Hips And Ankles With These 5 Exercises</h2>
          <p className="date">July 2, 2023 | 6 min read</p>
          <p>
            Over time, the padding and cartilage in your joints wears & tears
            away, which causes our joints to weaken, leading to joint pains &
            discomfort.
          </p>
          <a
            href="https://betterbody.co/blogs/health-articles/strengthen-your-knees-hips-and-ankles-with-these-5-exercises"
            className="read-more"
          >
            Keep reading to learn about what physical therapists says.
          </a>
        </article>

        <article>
          <img
            src="https://i.postimg.cc/rpZRFqWX/relationship.webp"
            alt="Cycling couple holding each others hand under sunset"
          />
          <h2>Supporting Your Partner Through Menopause</h2>
          <p className="date">July 3, 2023 | 9 min read</p>
          <p>
            We know that the partners of menopausal women do often bear the
            brunt being around them. But they need you and your support. Because
            what you’re feeling — they’re probably feeling it a hundred times
            worse!
          </p>
          <a
            href="https://betterbody.co/blogs/health-articles/better-body-s-guide-supporting-your-partner-through-menopause-1"
            className="read-more"
          >
            Learn more on how to support your partner better.
          </a>
        </article>

        <article>
          <img
            src="https://i.postimg.cc/RV13J7fT/yoga.webp"
            alt="Women practice mountain pose on top of mountain"
          />
          <h2>Stretch & Pose Your Joint Pains Away!</h2>
          <p className="date">July 4, 2023 | 5 min read</p>
          <p>
            Does your knee joint or wrists or shoulders ache bother you when
            you’re out and about? Is the pain in your joints limiting you from
            enjoying life the way you wish to? Are you tired of popping
            painkillers multiple times a day?
          </p>
          <a
            href="https://betterbody.co/blogs/health-articles/stretch-pose-your-joint-pains-away"
            className="read-more"
          >
            Discover yoga poses that promote joint health and movement.
          </a>
        </article>
      </section>
      <a href="/" className="all-posts">
        View All Posts
      </a>
    </main>
  );
}

export default Main;
