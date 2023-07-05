import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Menopause.css";

function Menopause() {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [showReferences, setShowReferences] = useState(false);

  const toggleDisclaimer = () => {
    setShowDisclaimer(!showDisclaimer);
  };

  const toggleReferences = () => {
    setShowReferences(!showReferences);
  };

  return (
    <>
      <Helmet>
        <title>Understanding Menopause: Symptoms, Stages, and Solutions</title>
        <meta
          name="description"
          content="Understanding Menopause: Learn about the symptoms, stages, and solutions for a smooth transition. Explore the three stages of menopause and discover effective ways to manage common symptoms. Simplify the process and find relief with Better Body Co's Provitalize. Start your journey to a more comfortable menopausal experience today."
        />
        <meta
          name="keywords"
          content="menopause, symptoms, stages, solutions, women's health"
        />
        <link
          rel="canonical"
          href="https://better-body-react.vercel.app/menopause"
        />
        <meta
          property="og:title"
          content="Understanding Menopause: Symptoms, Stages, and Solutions"
        />
        <meta
          property="og:description"
          content="Learn about menopause symptoms, stages, and effective solutions for a smooth transition. Start your journey to a more comfortable menopausal experience today."
        />
        <meta
          property="og:image"
          content="https://i.postimg.cc/cHjmjHPx/betterbody.webp"
        />
        <meta
          property="og:url"
          content="https://better-body-react.vercel.app/menopause"
        />
        <meta
          name="twitter:title"
          content="Understanding Menopause: Symptoms, Stages, and Solutions"
        />
        <meta
          name="twitter:description"
          content="Learn about menopause symptoms, stages, and effective solutions for a smooth transition. Start your journey to a more comfortable menopausal experience today."
        />
        <meta
          name="twitter:image"
          content="https://i.postimg.cc/hPVmbWFT/betterbody.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Header />
      <main>
        <section className="blog-post">
          <article>
            <img
              src="https://i.postimg.cc/7h05V7Rw/reproductivesystem.webp"
              alt="Women holding reproductive system"
            ></img>
            <a href="/" className="article-tag">
              Lifestyle
            </a>
            <a href="/" className="article-tag">
              Anti-aging
            </a>
            <h1 className="title">
              Understanding Menopause: Symptoms, Stages, and Solutions for a
              Smooth Transition
            </h1>
            <p className="date">June 29, 2023 | 5 min read</p>
            <h3 className="sub-title">What is Menopause?</h3>
            <p>
              Women have always been known to have great intuition, especially
              when it comes to their body reacting to certain conditions -
              emotionally, mentally or physically.
            </p>
            <p>
              These “feelings” tend to get “out of control” during specific
              phases of our life, the kind that we see in movies but have not
              explicitly discussed before it happens.
            </p>
            <p>
              We start to sense a shift in the way our body works; drastic mood
              swings with frequent tears or outbursts.
            </p>
            <p>
              The worst part? The way people start reacting to this outburst,
              responding like they think we’re going crazy.
            </p>
            <p>Honestly, we are not going crazy... It's just menopause!</p>
            <p>
              Menopause is a transitional period when our bodies start to wind
              down on our reproductive abilities.
            </p>
            <p>
              And it’s no fun ride. All the mood swings, hot flashes, night
              sweats, insomnia, joint pains, and the never-ending list of
              problems. Feels like we have a lot to deal with, by ourselves.
            </p>
            <p>
              Understanding and accepting these symptoms can help us{" "}
              <strong>simplify the process</strong> of solving them (as
              promised, as easy as 1, 2, 3)!
            </p>
            <img
              src="https://i.postimg.cc/fRZ982ZF/women.webp"
              alt="Women lying on the rock at ease in exercise attire"
            ></img>
            <p>Let us start with understanding the 3 stages of Menopause:</p>
            <ol>
              <li>Perimenopause or Premenopause</li>
              <li>Menopause</li>
              <li>Postmenopause</li>
            </ol>

            <h1 className="title">The 3 Stages of Menopause</h1>
            <img
              src="https://i.postimg.cc/sXtB7KwT/sadreproductivesystem.webp"
              alt="Sad looking reproductive system in graphic"
            ></img>
            <h3 className="sub-title">Perimenopause</h3>
            <p>
              Perimenopause or Premenopause can begin several years before
              menopause. This could last between a few months to about 10 years.
              However, on average it lasts about 4 years.
            </p>
            <p>What happens?</p>
            <h3 className="sub-title">
              Ovaries start to gradually lower estrogen production.
            </h3>
            <p>
              This is a natural process of growing older and usually starts
              around the age of 40. In some cases, it could start as early as
              when women are in their 30s.
            </p>
            <p>
              This could mean a reduction in our fertility rate, therefore,
              women looking to start a family should try and utilize every open
              opportunity with their partner!
            </p>
            <h3 className="sub-title">Changes in the menstrual/period cycle</h3>
            <p>
              The horror stories begin with the change in duration of our
              menstrual cycle- there could be longer gaps between periods or
              spotting between 2 cycles. Like, the frustration of not knowing
              when you will get your period next is not enough; the flow would
              differ too, making it heavier or lighter over time.
            </p>
            <h3 className="sub-title">
              Intensified PMS (premenstrual syndrome)
            </h3>
            <p>
              Drastic and frequent mood swings are the most common signals,
              along with increased insomnia or hot flashes. This could increase
              our irritability level, losing our energy levels; getting tired
              even after sitting at work the entire day or taking longer weekend
              naps to recover from our workweek would be common.
            </p>

            <h1 className="title">Menopause</h1>
            <p>
              The official menopause stage begins 12 months after the last
              menstrual period (bleeding).
            </p>
            <img
              src="https://i.postimg.cc/FRfdYwgf/womenhealth.webp"
              alt="Pills lining up in women logo with pink background"
            ></img>
            <h3 className="sub-title">What happens?</h3>
            <p>
              Ovaries stop releasing eggs. This means there would be minimal
              production of estrogen. At this stage, getting pregnant could be
              significantly harder. Hence, we notice the use of hormonal therapy
              or IVF for childbirth. We start feeling “low”, with the constant
              need to cuddle in bed and watch Netflix instead of going out and
              getting drinks with our girlfriends.
            </p>

            <h3 className="sub-title">
              Intensified hot flashes and night sweats.
            </h3>
            <p>
              Waking up in the middle of the night, aggressively throwing our
              blanket away or turning your fan on max even though the aircon is
              on full blast.{" "}
            </p>

            <p>
              Our body starts to feel warm or hot suddenly, with flushed red
              skin and increased heart rate; followed by suddenly feeling cold.
            </p>

            <h3 className="sub-title">Significant physical changes.</h3>
            <p>
              The concept of “a minute on your lip, a lifetime on your hip”
              comes to reality. Eating one slice of cake for dinner could
              increase weight around our waist and abdominal region, with a
              reduction in our metabolic rate. It is also common to notice our
              hair and skin becoming drier and thinner; no amount of conditioner
              and lotion seem to absolutely solve this problem.
            </p>
            <p>Say goodbye to unwanted weight gain due to menopause!</p>
            <img
              src="https://i.postimg.cc/13HN2G3z/provitalize.webp"
              alt="Key benefits of provitalize"
            ></img>
            <div className="center-container">
              {" "}
              <a
                className="tag"
                href="https://betterbody.co/pages/pp-provitalize-m"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try Provitalize Today!
              </a>
            </div>
            <h1 className="title">Postmenopause</h1>
            <p>
              Yes, the troubles don’t end right at menopause. It is the stage
              where most of the severe menopausal symptoms decrease but it comes
              with additional side effects.
            </p>
            <p>What happens?</p>
            <h3 className="sub-title">
              Increase in Follicle Stimulating Hormones (FSH)
            </h3>
            <p>
              {" "}
              This increases dramatically as our ovaries shut down and
              drastically lower the level of estrogen in our body.{" "}
            </p>

            <p>
              By this point, we started noticing a lowered energy level -
              sleeping in by 7/8 P.M. after work is a norm.
            </p>

            <h3 className="sub-title">
              Higher risk of certain health conditions.
            </h3>

            <p>
              Some of the common health problems that occur during postmenopause
              are diabetes, joint pains, osteoporosis, cholesterol and heart
              disease.
            </p>
            <p>
              This could be an alarming phase, where every visit to the doctor
              is like drawing a lottery ticket- we need to maintain a healthy
              lifestyle to combat such possibilities.
            </p>
            <h3 className="sub-title">
              Difficulty concentrating and memory lapses (often temporary)
            </h3>
            <p>
              Forgetting your car keys, deadlines seem to increase over time.
              However, these are temporary symptoms of postmenopause.
            </p>
            <p>
              We face a reduction in brain-derived neurotrophic factors which
              could also cause depression and anxiety. Now we have identified
              the 3 stages of Menopause.
            </p>
            <p>
              Understanding the 3 most common symptoms amongst women is vital,
              allowing us to solve or reduce these problems.
            </p>
            <ol>
              <li>
                <strong>Hot Flashes &amp; Night Sweats</strong>
              </li>
              <li>
                <strong>Bloating &amp; Weight Gain</strong>
              </li>
              <li>
                <strong>Joint Pains &amp; Anxiety/Depression</strong>
              </li>
            </ol>
            <p>
              Going through menopause by yourself is hard! Especially because it
              affects our daily life! Symptoms like reduction in metabolic rates
              and estrogen levels that cause weight gain and increase the size
              of our abdomen; night sweats and flashes, joint pains that make us
              feel 30 years older...are just to name a few.
            </p>
            <p>
              Therefore, we have broken down understanding and solving menopause
              in 3 easy steps; which can make this journey a little less
              frustrating!
            </p>
            <p>
              We hope you can see that menopause does not have to be difficult
              and solving it can be as easy as 1, 2, 3!
            </p>
            <p>
              We at Better Body Co have a mission to help women around the world
              have an easier menopausal transition...
            </p>

            <p>
              <strong>
                Solving Menopause Symptoms Is Easy As 1, 2, 3 with Provitalize.
              </strong>
            </p>
            <div className="center-container">
              {" "}
              <a
                className="tag"
                href="https://betterbody.co/pages/pp-provitalize-m"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try Provitalize Today!
              </a>
            </div>
            <h3 className="references-link" onClick={toggleReferences}>
              References
            </h3>
            {showReferences && (
              <div className="collapse-section">
                <ol>
                  <li>
                    <a
                      href="https://www.ncbi.nlm.nih.gov/pubmed/25051286"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Caffeine and menopausal symptoms: what is the association?
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2673540/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Cigarette Smoking, Androgen Levels, and Hot Flushes in
                      Midlife Women
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.ncbi.nlm.nih.gov/pubmed/8008318"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Risk factors for menopausal hot flashes.
                    </a>
                  </li>
                </ol>
              </div>
            )}

            <h3 className="disclaimer-link" onClick={toggleDisclaimer}>
              Disclaimer
            </h3>
            {showDisclaimer && (
              <div className="collapse-section">
                <p>
                  *THESE STATEMENTS HAVE NOT BEEN EVALUATED BY THE FOOD AND DRUG
                  ADMINISTRATION. THIS PRODUCT IS NOT INTENDED TO DIAGNOSE,
                  TREAT, CURE OR PREVENT ANY DISEASE.
                </p>
                <p>
                  USERS' REVIEWS REFLECT THE OPINIONS OF THE INDIVIDUAL USER,
                  NOT THE COMPANY. INDIVIDUALS’ EXPERIENCES MAY VARY. USERS’
                  COMMENTS ABOUT THE BENEFITS ATTRIBUTE TO BETTER BODY CO’S
                  PRODUCTS AND DO NOT NECESSARILY REFLECT THE VIEWS OF THE
                  COMPANY.
                </p>
                <p>THE RESULTS MAY VARY FROM PERSON TO PERSON.</p>
              </div>
            )}
          </article>
        </section>
        <a href="/" className="all-posts">
          View All Posts
        </a>
      </main>
      <Footer />
    </>
  );
}

export default Menopause;
