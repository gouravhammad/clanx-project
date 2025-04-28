import BellIcon from "../assets/icons/bell.svg";
import BarChartIcon from "../assets/icons/bar-chart.svg";
import ClockIcon from "../assets/icons/clock.svg";
export const notifications = [
  {
    label: "We'll be sending notifications to you here",
    placeholder: "hello@gmail.com",
    type: "email",
    icon: BellIcon,
    cta:true
  },
  {
    label: "Notify me when any whale moves more than",
    placeholder: "$1,000.00",
    type: "text",
    icon: BarChartIcon,
    cta:false
  },
  {
    label: "Notify me when any wallet dormant for",
    placeholder: "> 30 days",
    type: "text",
    icon: ClockIcon,
    footerText: "becomes active",
    cta:false
  },
];

export const testimonials = [
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
