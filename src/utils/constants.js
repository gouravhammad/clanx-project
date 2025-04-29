export const ICON_LINKS = {
    bellFilledIcon: "/assets/icons/bell-fill.svg",
    cohortsImage: "/assets/cohorts.png",
    eyeIcon: "/assets/icons/eye.svg",
    starIcon: "/assets/icons/star.svg",
    caretDownIcon: "/assets/icons/triangle-down.svg",
    bellOutlineIcon: "/assets/icons/bell.svg",
    barChartIcon: "/assets/icons/bar-chart.svg",
    clockIcon: "/assets/icons/clock.svg"
};

export const INPUT_TYPE = {
  EMAIL: 'email',
  TEXT: 'text'
}

export const NOTIFICATIONS = [
    {
      label: "We'll be sending notifications to you here",
      placeholder: "hello@gmail.com",
      type: "email",
      icon: ICON_LINKS.bellOutlineIcon,
      cta: true
    },
    {
      label: "Notify me when any whale moves more than",
      placeholder: "$1,000.00",
      type: INPUT_TYPE.TEXT,
      icon: ICON_LINKS.barChartIcon,
      cta: false
    },
    {
      label: "Notify me when any wallet dormant for",
      placeholder: "> 30 days",
      type: INPUT_TYPE.TEXT,
      icon: ICON_LINKS.clockIcon,
      footerText: "becomes active",
      cta: false
    },
];
  
export const TESTIMONIALS = [
    {
      quote:
        "Love how Loch integrates portfolio analytics and whale watching into one unified app.",
      author: "Jack F",
      designation:"Ex Blackrock PM"
    },
    {
      quote:
        "I use Loch everyday now. I don't think I could analyze crypto whale trends or markets without it. I'm addicted!",
      author: "Yash P",
      designation:"Research, 3poch Crypto Hedge"
    },
    {
      quote:
        "Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.",
      author: "Shiv S",
      designation:"Co-Founder Magik Labs"
    },
];