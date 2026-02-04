interface Principle {
  title: string;
  description: string;
}

const principles: { de: Principle[]; en: Principle[] } = {
  de: [
    {
      title: "Geben",
      description:
        "Wir bringen uns mit Arbeit, Zeit, Energie und Geschenken freiwillig in die Gemeinschaft ein. Wir handeln nicht, erwarten keine Gegenleistung und fordern nichts zurück.",
    },
    {
      title: "Entkommerzialisierung",
      description:
        "Um den Geist des Schenkens zu bewahren, schaffen wir soziale Räume ohne Werbung, Sponsoring oder Verkauf. Wir schützen unsere Kultur vor kommerzieller Ausbeutung und setzen Erleben und Mitmachen über Konsum.",
    },
    {
      title: "Selbstausdruck",
      description:
        "Nutze diese Community als schamfreien Spielplatz, auf dem du erforschen kannst, was du ausdrücken möchtest – und respektiere dabei immer die Rechte und Freiheiten der anderen.",
    },
    {
      title: "Wirklichkeit erforschen",
      description:
        "Wir heißen Experimente mit Glaubenssystemen und Weltbildern willkommen und begegnen dem Leben spielerisch und undogmatisch. Dabei achten wir stets die Integrität der anderen: Wir missionieren nicht, predigen nicht und versuchen nicht, andere zu bekehren. Die Verbreitung pseudowissenschaftlicher Fehlinformation lehnen wir ab.",
    },
    {
      title: "Radikale Inklusion",
      description:
        "Alle sind eingeladen, Teil unserer Community zu sein – auch Menschen, die uns selbst vielleicht nicht einschließen würden. Wenn wir unterschiedlicher Meinung sind, bemühen wir uns um einen respektvollen, achtsamen Umgang miteinander.",
    },
    {
      title: "Gesellschaftliche Verantwortung",
      description:
        "Wenn du ein Event organisierst oder daran teilnimmst, übernimmst du Verantwortung für das Wohlergehen der anderen und dafür, dass Veranstaltungen im Rahmen der geltenden Gesetze stattfinden.",
    },
    {
      title: "Selbstorganisation",
      description:
        "Niemand ist \"der Boss\" – oder anders gesagt: wir alle sind es. Das bedeutet, du darfst Entscheidungen treffen, solange du die davon Betroffenen in den Prozess einbeziehst, Rat einholst, gut zuhörst und dich an diesen Prinzipien orientierst.",
    },
    {
      title: "Keine Spuren hinterlassen",
      description:
        "Wir räumen hinter uns auf und versuchen, Orte wenn möglich in einem besseren Zustand zu verlassen, als wir sie vorgefunden haben.",
    },
    {
      title: "Teilnahme",
      description:
        "Wir sind eine Community radikaler Beteiligung. Wir glauben, dass echte Veränderung – persönlich wie gesellschaftlich – nur durch tiefes, eigenes Mitmachen entsteht. Alle sind eingeladen zu arbeiten. Alle sind eingeladen zu spielen. Durch unser Handeln machen wir die Welt wirklich.",
    },
    {
      title: "Einvernehmlichkeit (Consent)",
      description:
        "Wir verpflichten uns, bei intimen Begegnungen klare Zustimmung einzuholen, um Vertrauen zu schaffen und übergriffiges oder ausbeuterisches Verhalten zu verhindern. Wir feiern körperliche, emotionale und spirituelle Nähe, indem wir das Wohlbefinden und die Integrität unserer Mitmenschen achten.",
    },
    {
      title: "Verantwortung & Ownership",
      description:
        "Wir wollen eine Kultur der Eigenverantwortung entwickeln. Unsere Community ermutigt und unterstützt ihre Mitglieder darin, gut für sich selbst zu sorgen – emotional, körperlich und mental. Wir erproben eine reife Zuhör- und Beziehungskultur, getragen von Mut, Verantwortung, Mitgefühl und Freundlichkeit.",
    },
  ],
  en: [
    {
      title: "Giving",
      description:
        "We contribute work, time, efforts and gifts freely to the community. We do not trade, expect reciprocation or ask for anything in return.",
    },
    {
      title: "Decommodification",
      description:
        "In order to preserve the spirit of gifting, our community seeks to create social environments that are unmediated by commercial sponsorships, transactions, or advertising. We stand ready to protect our culture from such exploitation. We resist the substitution of consumption for participatory experience.",
    },
    {
      title: "Self-expression",
      description:
        "Use this community as your playground of shamelessness, where you can explore whatever you may want to express, while respecting the rights and liberties of the other.",
    },
    {
      title: "Exploring reality",
      description:
        "We welcome experimentation with belief systems, world views and a playful non-dogmatic exploration of life in general. While doing this we always respect each others' integrity by not preaching, proselytizing or trying to convert others to our beliefs. We oppose the spread of pseudoscientific misinformation.",
    },
    {
      title: "Radical inclusion",
      description:
        "Anyone is welcome to participate in our community, including those who would not include us. When we disagree, we try to do so with civility and care for one another.",
    },
    {
      title: "Civic responsibility",
      description:
        "When you organize or participate in an event, you assume responsibility for the welfare of the other participants and for conducting events in accordance with the law.",
    },
    {
      title: "Self-organisation",
      description:
        "No one is \"in charge\", or rather, everybody is! This means that you are empowered to make decisions, as long as you invite those who are affected by the decision to take part in the decision process, by gathering and listening to advice, and as long as you're guided by these principles.",
    },
    {
      title: "Leave no trace",
      description:
        "We clean up after ourselves and endeavor, whenever possible, to leave places in a better state than when we found them.",
    },
    {
      title: "Participation",
      description:
        "We are a community of a radical participatory culture. We believe that transformative change, whether in the individual or in society, can occur only through the medium of deeply personal participation. Everyone is invited to work. Everyone is invited to play. We make the world real through actions that open the heart.",
    },
    {
      title: "Consent",
      description:
        "We are committed to gaining consent from whom we engage in intimate interaction with, to build trust and to avert predatory or exploitative behaviour. We celebrate physical, spiritual and emotional intimacy by honoring the well being and integrity of our companions.",
    },
    {
      title: "Ownership",
      description:
        "We intend to grow a culture of ownership. Our community encourages and supports members in taking care of themselves, emotionally, physically and mentally. We are prototyping a mature listening community with courage, responsibility, compassion and kindness.",
    },
  ],
};

function PrincipleCard({ principle }: { principle: Principle }) {
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold tracking-tight text-foreground">
        {principle.title}
      </h2>
      <p className="text-base leading-7 text-muted-foreground">
        {principle.description}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background gradient representing unity and diversity */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 via-pink-100 to-orange-100 dark:from-blue-950/60 dark:via-purple-950/60 dark:via-pink-950/60 dark:to-orange-950/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.2),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.25),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.2),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.25),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.15),transparent_60%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.2),transparent_60%)]" />
        
        {/* Subtle pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>
      
      <main className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl space-y-16 bg-background/80 backdrop-blur-sm rounded-lg p-8 sm:p-12">
          <div className="space-y-12">
            <section className="space-y-8">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Hallo ❤️
              </h2>
              <p className="text-lg text-muted-foreground italic">
                Worum es hier geht:
              </p>
              <div className="space-y-10">
                {principles.de.map((principle, index) => (
                  <PrincipleCard key={index} principle={principle} />
                ))}
              </div>
              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-base leading-7 text-foreground mb-4 font-semibold">
                  Möchtest du Leute kennenlernen, die auch so ticken? Dann komm am 7. oder 21. März 2026 um 14 Uhr zu diesem Ort im Kurpark Lüneburg:
                </p>
                <a
                  href="https://maps.app.goo.gl/nv79YnBL3e5kL6cn8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold text-base hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
                  aria-label="Ort auf Google Maps ansehen"
                >
                  <span>📍</span>
                  <span>Auf Google Maps ansehen</span>
                  <span className="text-xs">↗</span>
                </a>
              </div>
            </section>

            <div className="border-t border-border" />

            <section className="space-y-8">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Hey ❤️
              </h2>
              <p className="text-lg text-muted-foreground italic">
                What this is about:
              </p>
              <div className="space-y-10">
                {principles.en.map((principle, index) => (
                  <PrincipleCard key={index} principle={principle} />
                ))}
              </div>
              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-base leading-7 text-foreground mb-4 font-semibold">
                  Want to meet people who think the same way? Then come on March 7th or 21st, 2026 at 2 PM to this location in Kurpark Lüneburg:
                </p>
                <a
                  href="https://maps.app.goo.gl/nv79YnBL3e5kL6cn8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold text-base hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
                  aria-label="View location on Google Maps"
                >
                  <span>📍</span>
                  <span>View on Google Maps</span>
                  <span className="text-xs">↗</span>
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
