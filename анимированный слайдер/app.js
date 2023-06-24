const { createApp } = Vue;

createApp({
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "Berlin",
          desc:
            "The capital and largest city of Germany, the first in terms of population and the third largest city in the European Union. It is one of the 16 lands in the Federal Republic of Germany and is entirely located inside the federal state of Brandenburg.",
          photo:
            "https://img5.goodfon.ru/original/6000x3929/f/dd/berlin-germany-spree-river-berlin-germaniia-reka-shpree-reka.jpg"
        },
        {
          id: 2,
          title: "Munich",
          desc:
            "A city on the Isar River, in southern Germany, in the federal state of Bavaria. An out-of-district city that is simultaneously the administrative center of Bavaria and the administrative district of Upper Bavaria",
          photo:
            "https://img2.fonwall.ru/o/wn/germaniya-myunhen-gorod.jpg?route=mid&amp;h=750"
        },
        {
          id: 3,
          title: "Hamburg",
          desc:
            "A city in the north of Germany. As a Free and Hanseatic city, Hamburg is one of the lands of Germany. It is the second largest city in the country, the seventh largest in the European Union and the most populated non-metropolitan city in the European Union. As of December 31, 2014, the population of the city was 1803752 people.",
          photo:
            "https://kartinkin.net/pics/uploads/posts/2022-08/thumbs/1660113141_59-kartinkin-net-p-gamburg-germaniya-krasivo-foto-65.jpg"
        },
        {
          id: 4,
          title: "Stuttgart",
          desc:
            "The capital and largest city of Baden-Württemberg, Germany, at an altitude of 240 meters above sea level, located on the Neckar River. The population is about 630,000 people, the city ranks sixth in the country by this indicator. ",
          photo:
            "https://rare-gallery.com/uploads/posts/797032-Stuttgart-Germany-Houses-Mountains.jpg"
        }
      ],
      currentNum: 0
    };
  },
  computed: {
    currentCard() {
      return this.cards[this.currentNum];
    }
  },
  methods: {
    playFoward() {
      let tl = gsap.timeline({
        defaults: {
          duration: 0.7,
          ease: "sine.out"
        },
        onComplete: () => {
          this.playReverse();
          if (this.currentNum >= 3) {
            this.currentNum = 0;
          } else {
            this.currentNum++;
          }
        }
      });
      tl.to("#mask-1", {
        yPercent: 100,
        scaleY: 1.4
      })
        .to(
          "#mask-2",
          {
            yPercent: -100,
            scaleY: 1.4
          },
          "<"
        )
        .to(
          "#card-info-title",
          {
            clipPath: `polygon(0 0, 100% 0, 100% 0%, 0% 0%)`
          },
          "<0.4"
        )
        .to(
          "#card-info-desc",
          {
            clipPath: `polygon(0 0, 100% 0, 100% 0%, 0% 0%)`
          },
          "<0.3"
        );
    },
    playReverse() {
      let tl = gsap.timeline({
        defaults: {
          duration: 0.7,
          ease: "sine.in"
        }
      });
      tl.to("#mask-1", {
        yPercent: -100,
        scaleY: 1.4
      })
        .to(
          "#mask-2",
          {
            yPercent: 100,
            scaleY: 1.4
          },
          "<"
        )
        .to(
          "#card-info-title",
          {
            clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`
          },
          "<0.2"
        )
        .to(
          "#card-info-desc",
          {
            clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`
          },
          "<0.3"
        );
    },
    nextCard() {
      this.playFoward();
    }
  }
}).mount("#app");